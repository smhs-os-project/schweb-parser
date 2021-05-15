"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const announcement_1 = require("./formatter/announcement");
const stdpkg_1 = require("./formatter/stdpkg");
const __1 = require("../..");
yargs_1.default
    .scriptName("schweb-parser-cli")
    .command("list-announcements [category]", "list the announcements", (yargs) => {
    yargs.positional("category", {
        type: "string",
        describe: "The category",
    });
}, async (args) => {
    const category = args["category"];
    const response = await __1.ListAnnouncements(category);
    if (response) {
        console.log(stdpkg_1.StdpkgFormatter(response, (data) => data.map(announcement_1.AnnouncementFormatter).join("\n\n")));
    }
    else {
        console.log("<!> 資料無效或不存在");
    }
})
    .command("get-announcement [category] [id]", "get the announcement", (yargs) => {
    yargs.positional("category", {
        type: "string",
        describe: "The category",
    });
    yargs.positional("id", {
        type: "string",
        describe: "The id",
    });
}, async (args) => {
    const category = args["category"];
    const id = args["id"];
    const response = await __1.GetAnnouncement(category, id);
    if (response) {
        console.log(stdpkg_1.StdpkgFormatter(response, announcement_1.AnnouncementContentFormatter));
    }
    else {
        console.log("<!> 資料無效或不存在");
    }
})
    .help().argv;
//# sourceMappingURL=index.js.map