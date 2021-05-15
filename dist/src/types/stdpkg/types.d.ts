export interface StandardPackage<T> {
    at: string;
    data: T;
}
export declare function StandardPackageTypeChecker<T>(data: unknown, internalChecker: (data: unknown) => data is T): data is StandardPackage<T>;
export declare function StandardPackageTypeCheckerWrapper<T>(internalChecker: (data: unknown) => data is T): (data: unknown) => data is StandardPackage<T>;
//# sourceMappingURL=types.d.ts.map