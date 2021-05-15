"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementEndpoint = void 0;
const announcementRoot = "https://raw.githubusercontent.com/smhs-os-project/smhs-announcements/master";
const AnnouncementEndpoint = (toCombine) => `${announcementRoot}/${toCombine.replace(/^\//, "")}?raw=true`;
exports.AnnouncementEndpoint = AnnouncementEndpoint;
//# sourceMappingURL=root.js.map