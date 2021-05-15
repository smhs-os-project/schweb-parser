"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAnnouncementEndpoint = exports.ListAnnouncementsEndpoint = void 0;
const root_1 = require("./root");
const ListAnnouncementsEndpoint = (category) => root_1.AnnouncementEndpoint(`/${category}-announcements.json`);
exports.ListAnnouncementsEndpoint = ListAnnouncementsEndpoint;
const GetAnnouncementEndpoint = (category, id) => root_1.AnnouncementEndpoint(`/announcements/${category}/${id}.json`);
exports.GetAnnouncementEndpoint = GetAnnouncementEndpoint;
//# sourceMappingURL=index.js.map