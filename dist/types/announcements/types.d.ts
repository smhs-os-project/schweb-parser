export interface Announcement {
    id: string;
    title: string;
    url: string;
    content: string;
}
export declare const AnnouncementTypeChecker: (data: unknown) => data is Announcement;
export interface AnnouncementAttachments<T = {}> {
    name: string;
    url: string;
    extra?: T;
}
export declare const AnnouncementAttachmentsTypeChecker: (data: unknown) => data is AnnouncementAttachments<{}>;
export interface AnnouncementContent<T = {}> {
    title: string;
    content: string;
    contentHTML: string;
    attachments: AnnouncementAttachments[];
    extra?: T;
}
export declare const AnnouncementContentTypeChecker: (data: unknown) => data is AnnouncementContent<{}>;
//# sourceMappingURL=types.d.ts.map