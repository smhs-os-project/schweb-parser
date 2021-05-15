"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardPackageTypeCheckerWrapper = exports.StandardPackageTypeChecker = void 0;
function StandardPackageTypeChecker(data, internalChecker) {
    const d = data;
    return (typeof d.at === "string" &&
        internalChecker(d.data));
}
exports.StandardPackageTypeChecker = StandardPackageTypeChecker;
function StandardPackageTypeCheckerWrapper(internalChecker) {
    return (data) => StandardPackageTypeChecker(data, internalChecker);
}
exports.StandardPackageTypeCheckerWrapper = StandardPackageTypeCheckerWrapper;
//# sourceMappingURL=types.js.map