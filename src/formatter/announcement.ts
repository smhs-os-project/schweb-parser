import type { Announcement, AnnouncementAttachments, AnnouncementContent } from "../types/announcements/types";

export const AnnouncementFormatter = ({ id, title, url }: Announcement) => `ID\t${id}
標題\t${title}
連結\t${url}`;

export const AnnouncementAttachementsFormatter = ({ name, url }: AnnouncementAttachments) => `
\t名稱\t${name}
\t連結\t${url}
`

export const AnnouncementContentFormatter = ({
  title,
  content,
  attachments,
}: AnnouncementContent) => `標題\t${title}

內容
${content}

附件
${attachments.map(AnnouncementAttachementsFormatter)}`
