export declare type Checker<T> = (val: unknown) => val is T;
export declare function GetJson<T>(url: string, checkers?: Checker<T>): Promise<T | null>;
//# sourceMappingURL=get_json.d.ts.map