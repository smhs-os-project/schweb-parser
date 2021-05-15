import yargs from "yargs";
import { AnnouncementContentFormatter, AnnouncementFormatter } from "./formatter/announcement";
import { StdpkgFormatter } from "./formatter/stdpkg";
import { ListAnnouncements, GetAnnouncement } from "../..";

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
      const response = await ListAnnouncements(category);

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
      const response = await GetAnnouncement(category, id);

      if (response) {
        console.log(StdpkgFormatter(response, AnnouncementContentFormatter));
      } else {
        console.log("<!> 資料無效或不存在");
      }
    }
  )
  .help().argv;
