import { GetJson } from "./http/get_json";
import { GetAnnouncementEndpoint, ListAnnouncementsEndpoint } from "./path/announcements";
import { Announcement, AnnouncementContentTypeChecker, AnnouncementTypeChecker } from "./types/announcements/types";
import { StandardPackageTypeCheckerWrapper } from "./types/stdpkg/types";

export const GetAnnouncementMeta = {
  endpoint: GetAnnouncementEndpoint,
  checker: StandardPackageTypeCheckerWrapper(AnnouncementContentTypeChecker),
}

export const ListAnnouncementsMeta = {
  endpoint: ListAnnouncementsEndpoint,
  checker: StandardPackageTypeCheckerWrapper(
    (val: unknown): val is Announcement[] => {
      return Array.isArray(val)
        ? !val.map(AnnouncementTypeChecker).includes(false)
        : false;
    }
  ),
}

export const GetAnnouncement = async (category: string, id: string) => await GetJson(
  GetAnnouncementMeta.endpoint(category, id),
  GetAnnouncementMeta.checker,
);

export const ListAnnouncements = async (category: string) => await GetJson(
  ListAnnouncementsMeta.endpoint(category),
  ListAnnouncementsMeta.checker,
);
