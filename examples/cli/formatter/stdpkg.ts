import type { StandardPackage } from "../../../src/types/stdpkg/types";

export const StdpkgFormatter = ({ at, data }: StandardPackage<any>, dataFormatter: (data: any) => string) =>
`時間\t${at}
${dataFormatter(data)}`;
