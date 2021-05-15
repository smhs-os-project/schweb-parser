"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementContentTypeChecker = exports.AnnouncementAttachmentsTypeChecker = exports.AnnouncementTypeChecker = void 0;
const AnnouncementTypeChecker = (data) => {
    const { id, title, url, content, } = data;
    return (typeof id === "string"
        && typeof title === "string"
        && typeof url === "string"
        && typeof content === "string");
};
exports.AnnouncementTypeChecker = AnnouncementTypeChecker;
const AnnouncementAttachmentsTypeChecker = (data) => {
    const { name, url, } = data;
    return (typeof name === "string"
        && typeof url === "string");
};
exports.AnnouncementAttachmentsTypeChecker = AnnouncementAttachmentsTypeChecker;
;
const AnnouncementContentTypeChecker = (data) => {
    let attachmentsCheckPassed = true;
    const { title, content, contentHTML, attachments, } = data;
    const announcementAttachmentsMapTypeChecker = (attachment) => {
        attachmentsCheckPassed = exports.AnnouncementAttachmentsTypeChecker(attachment);
    };
    attachments.map(announcementAttachmentsMapTypeChecker);
    return (typeof title === "string"
        && typeof content === "string"
        && typeof contentHTML === "string"
        && attachmentsCheckPassed);
};
exports.AnnouncementContentTypeChecker = AnnouncementContentTypeChecker;
//# sourceMappingURL=types.js.map