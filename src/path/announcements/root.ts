const announcementRoot = "https://raw.githubusercontent.com/smhs-os-project/smhs-announcements/master";
export const AnnouncementEndpoint = (toCombine: string) =>
  `${announcementRoot}/${toCombine.replace(/^\//, "")}?raw=true`;
