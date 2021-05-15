"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetJson = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const log_1 = require("../log");
async function GetJson(url, checkers) {
    const log = log_1.logger("http.get_json.GetJson", { url });
    log.debug(`getting URL: ${url}`);
    const resp = await node_fetch_1.default(url);
    let respJson;
    log.debug(`checking if the code of this response is 200`);
    if (resp.ok) {
        log.debug("YES - parsing the response to a json");
        respJson = await resp.json();
        log.debug("checking the response type");
        if (!checkers || checkers(respJson)) {
            if (!checkers)
                log.warn("The checker was not defined. It is better to provide a checker for it.");
            else
                log.debug("Matched - returning the response");
            return respJson;
        }
        else
            log.debug("Unmatched.");
    }
    else
        log.debug("NO: not 200");
    log.error([
        "Failed to fetch the response from the URL.",
        `URL: ${url}`,
        `Code: ${resp.status}`,
        `Response: ${JSON.stringify(respJson)}`,
    ].join("\n"));
    return null;
}
exports.GetJson = GetJson;
//# sourceMappingURL=get_json.js.map