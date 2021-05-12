export interface StandardPackage<T> {
  /**
   * The generated time.
   */
  at: string;
  /**
   * The data of this package.
   *
   * Will be serialized as JSON.
   */
  data: T;
}

/**
 *
 * @param data
 * @param internalChecker The checker for checking 'data' field in StandardPackage
 * @returns
 */
export function StandardPackageTypeChecker<T>(data: unknown, internalChecker: (data: unknown) => data is T): data is StandardPackage<T> {
  const d = data as StandardPackage<T>;

  return (
    typeof d.at === "string" &&
    internalChecker(d.data)
  );
}

/** @see StandardPackageTypeChecker */
export function StandardPackageTypeCheckerWrapper<T>(internalChecker: (data: unknown) => data is T): (data: unknown) => data is StandardPackage<T> {
  return (data: unknown): data is StandardPackage<T> => StandardPackageTypeChecker(data, internalChecker);
}
