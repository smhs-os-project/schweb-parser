import { AnnouncementEndpoint } from "./root";

export const ListAnnouncements = (category: string) =>
  AnnouncementEndpoint(`/${category}-announcements.json`);

export const GetAnnouncement = (category: string, id: string) =>
  AnnouncementEndpoint(`/announcements/${category}/${id}.json`);
