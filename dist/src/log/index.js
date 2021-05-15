"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.rootLogger = exports.LEVEL = void 0;
const pino_1 = __importDefault(require("pino"));
exports.LEVEL = "info";
exports.rootLogger = pino_1.default({
    name: "schweb-parser",
    level: exports.LEVEL,
});
const logger = (components, extra = {}) => exports.rootLogger.child({ components, ...extra });
exports.logger = logger;
//# sourceMappingURL=index.js.map