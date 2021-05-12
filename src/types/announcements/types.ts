// Extracted from crawler:1.2.0-1

export interface Announcement {
  /**
   * The ID of this announcement.
   *
   * Usually, it is calculated by sha256(name+url)
   */
  id: string;
  /**
   * The title of this announcement.
   */
  title: string;
  /**
   * The url of this announcement.
   */
  url: string;
  /**
   * The relative link to the serialized content of this announcement.
   */
  content: string;
}

export const AnnouncementTypeChecker = (data: unknown): data is Announcement => {
  const {
    id,
    title,
    url,
    content,
  } = data as Announcement;

  return (
    typeof id === "string"
    && typeof title === "string"
    && typeof url === "string"
    && typeof content === "string"
  );
}

export interface AnnouncementAttachments<T = {}> {
  /**
   * The name of this attachment.
   */
  name: string;
  /**
   * The url of this attachment.
   */
  url: string;
  /**
   * The extra information of this attachment.
   */
  extra?: T;
}

export const AnnouncementAttachmentsTypeChecker = (data: unknown): data is AnnouncementAttachments => {
  const {
    name,
    url,
  } = data as AnnouncementAttachments;

  return (
    typeof name === "string"
    && typeof url === "string"
  );
}

export interface AnnouncementContent<T = {}> {
  /**
   * The title of this announcement.
   */
  title: string;
  /**
   * The announcement body in plain text.
   */
  content: string;
  /**
   * The announcement body in HTML.
   */
  contentHTML: string;
  /**
   * The attachments of this announcement.
   */
  attachments: AnnouncementAttachments[];
  /**
   * The extra information of this announcement.
   */
  extra?: T,
};

export const AnnouncementContentTypeChecker = (data: unknown): data is AnnouncementContent => {
  let attachmentsCheckPassed = true;

  const {
    title,
    content,
    contentHTML,
    attachments,
  } = data as AnnouncementContent;

  const announcementAttachmentsMapTypeChecker = (attachment: AnnouncementAttachments) => {
    attachmentsCheckPassed = AnnouncementAttachmentsTypeChecker(attachment);
  }

  attachments.map(announcementAttachmentsMapTypeChecker);

  return (
    typeof title === "string"
    && typeof content === "string"
    && typeof contentHTML === "string"
    && attachmentsCheckPassed
  );
}
