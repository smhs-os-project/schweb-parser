"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementContentFormatter = exports.AnnouncementAttachementsFormatter = exports.AnnouncementFormatter = void 0;
const AnnouncementFormatter = ({ id, title, url }) => `ID\t${id}
標題\t${title}
連結\t${url}`;
exports.AnnouncementFormatter = AnnouncementFormatter;
const AnnouncementAttachementsFormatter = ({ name, url }) => `
\t名稱\t${name}
\t連結\t${url}
`;
exports.AnnouncementAttachementsFormatter = AnnouncementAttachementsFormatter;
const AnnouncementContentFormatter = ({ title, content, attachments, }) => `標題\t${title}

內容
${content}

附件
${attachments.map(exports.AnnouncementAttachementsFormatter)}`;
exports.AnnouncementContentFormatter = AnnouncementContentFormatter;
//# sourceMappingURL=announcement.js.map