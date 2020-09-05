"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./packages/client/dist/index.js");
const Dotenv = require("dotenv");
Dotenv.config();
new _1.SlackClient.Controller({
    accessToken: process.env.SLACK_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});
//# sourceMappingURL=index.js.map