const announcementRoot = "https://github.com/smhs-os-project/smhs-announcements/blob/master";
export const AnnouncementEndpoint = (toCombine: string) =>
  `${announcementRoot}/${toCombine.replace(/^\//, "")}?raw=true`;
