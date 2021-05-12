import yargs from "yargs";
import { AnnouncementContentFormatter, AnnouncementFormatter } from "../src/formatter/announcement";
import { StdpkgFormatter } from "../src/formatter/stdpkg";
import { GetJson } from "../src/http/get_json";
import { GetAnnouncement, ListAnnouncements } from "../src/path/announcements";
import {
  Announcement,
  AnnouncementContentTypeChecker,
  AnnouncementTypeChecker,
} from "../src/types/announcements/types";
import {
  StandardPackageTypeCheckerWrapper,
} from "../src/types/stdpkg/types";

yargs
  .scriptName("schweb-parser-cli")
  .command(
    "list-announcements [category]",
    "list the announcements",
    (yargs) => {
      yargs.positional("category", {
        type: "string",
        describe: "The category",
      });
    },
    async (args) => {
      const category = args["category"] as string;
      const response = await GetJson(
        ListAnnouncements(category),
        StandardPackageTypeCheckerWrapper(
          (val: unknown): val is Announcement[] => {
            return Array.isArray(val)
              ? !val.map(AnnouncementTypeChecker).includes(false)
              : false;
          }
        )
      );

      if (response) {
        console.log(StdpkgFormatter(response, (data: any[]) => data.map(AnnouncementFormatter).join("\n\n")));
      } else {
        console.log("<!> 資料無效或不存在");
      }
    }
  )
  .command(
    "get-announcement [category] [id]",
    "get the announcement",
    (yargs) => {
      yargs.positional("category", {
        type: "string",
        describe: "The category",
      });
      yargs.positional("id", {
        type: "string",
        describe: "The id",
      });
    },
    async (args) => {
      const category = args["category"] as string;
      const id = args["id"] as string;
      const response = await GetJson(
        GetAnnouncement(category, id),
        StandardPackageTypeCheckerWrapper(AnnouncementContentTypeChecker),
      );

      if (response) {
        console.log(StdpkgFormatter(response, AnnouncementContentFormatter));
      } else {
        console.log("<!> 資料無效或不存在");
      }
    }
  )
  .help().argv;
