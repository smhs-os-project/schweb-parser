import { AnnouncementEndpoint } from "./root";

export const ListAnnouncementsEndpoint = (category: string) =>
  AnnouncementEndpoint(`/${category}-announcements.json`);

export const GetAnnouncementEndpoint = (category: string, id: string) =>
  AnnouncementEndpoint(`/announcements/${category}/${id}.json`);
