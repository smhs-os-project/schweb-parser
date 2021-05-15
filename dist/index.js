"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAnnouncements = exports.GetAnnouncement = exports.ListAnnouncementsMeta = exports.GetAnnouncementMeta = void 0;
const get_json_1 = require("./http/get_json");
const announcements_1 = require("./path/announcements");
const types_1 = require("./types/announcements/types");
const types_2 = require("./types/stdpkg/types");
exports.GetAnnouncementMeta = {
    endpoint: announcements_1.GetAnnouncementEndpoint,
    checker: types_2.StandardPackageTypeCheckerWrapper(types_1.AnnouncementContentTypeChecker),
};
exports.ListAnnouncementsMeta = {
    endpoint: announcements_1.ListAnnouncementsEndpoint,
    checker: types_2.StandardPackageTypeCheckerWrapper((val) => {
        return Array.isArray(val)
            ? !val.map(types_1.AnnouncementTypeChecker).includes(false)
            : false;
    }),
};
const GetAnnouncement = async (category, id) => await get_json_1.GetJson(exports.GetAnnouncementMeta.endpoint(category, id), exports.GetAnnouncementMeta.checker);
exports.GetAnnouncement = GetAnnouncement;
const ListAnnouncements = async (category) => await get_json_1.GetJson(exports.ListAnnouncementsMeta.endpoint(category), exports.ListAnnouncementsMeta.checker);
exports.ListAnnouncements = ListAnnouncements;
//# sourceMappingURL=index.js.map