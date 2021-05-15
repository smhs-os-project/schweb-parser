import { Announcement } from "./types/announcements/types";
export declare const GetAnnouncementMeta: {
    endpoint: (category: string, id: string) => string;
    checker: (data: unknown) => data is import("./types/stdpkg/types").StandardPackage<import("./types/announcements/types").AnnouncementContent<{}>>;
};
export declare const ListAnnouncementsMeta: {
    endpoint: (category: string) => string;
    checker: (data: unknown) => data is import("./types/stdpkg/types").StandardPackage<Announcement[]>;
};
export declare const GetAnnouncement: (category: string, id: string) => Promise<import("./types/stdpkg/types").StandardPackage<import("./types/announcements/types").AnnouncementContent<{}>> | null>;
export declare const ListAnnouncements: (category: string) => Promise<import("./types/stdpkg/types").StandardPackage<Announcement[]> | null>;
//# sourceMappingURL=index.d.ts.map