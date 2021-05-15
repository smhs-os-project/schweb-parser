"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StdpkgFormatter = void 0;
const StdpkgFormatter = ({ at, data }, dataFormatter) => `時間\t${at}
${dataFormatter(data)}`;
exports.StdpkgFormatter = StdpkgFormatter;
//# sourceMappingURL=stdpkg.js.map