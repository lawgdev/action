"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __importDefault(require("@actions/core"));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const URL = `https://api.lawg.dev/v1/projects/${process.env.LAWG_PROJECT}/feeds/${process.env.LAWG_FEED}/events`;
        try {
            return fetch(URL, {
                method: "POST",
                body: JSON.stringify({
                    title: process.env.LAWG_TITLE,
                    description: process.env.LAWG_DESCRIPTION,
                    icon: process.env.LAWG_ICON,
                    notify: process.env.LAWG_NOTIFY,
                }),
                headers: {
                    Authorization: process.env.LAWG_TOKEN,
                    "Content-Type": "application/json",
                },
            }).then((res) => {
                if (res.status === 200) {
                    core_1.default.setOutput("output", "Successfully created your event!");
                }
            });
        }
        catch (error) {
            if (error instanceof Error)
                core_1.default.setFailed(error.message);
        }
    });
}
run();
