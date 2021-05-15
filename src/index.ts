import { GetJson } from "./http/get_json";
import { GetAnnouncementEndpoint, ListAnnouncementsEndpoint } from "./path/announcements";
import { Announcement, AnnouncementContentTypeChecker, AnnouncementTypeChecker } from "./types/announcements/types";
import { StandardPackageTypeCheckerWrapper } from "./types/stdpkg/types";

export const GetAnnouncement = async (category: string, id: string) => await GetJson(
  GetAnnouncementEndpoint(category, id),
  StandardPackageTypeCheckerWrapper(AnnouncementContentTypeChecker),
);

export const ListAnnouncements = async (category: string) => await GetJson(
  ListAnnouncementsEndpoint(category),
  StandardPackageTypeCheckerWrapper(
    (val: unknown): val is Announcement[] => {
      return Array.isArray(val)
        ? !val.map(AnnouncementTypeChecker).includes(false)
        : false;
    }
  )
);

