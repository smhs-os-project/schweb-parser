import type { StandardPackage } from "./types";

export function StandardPackageDeserializer<T>(data: string): StandardPackage<T> | never {
    return JSON.parse(data);
}
