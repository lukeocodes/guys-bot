"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./packages/client/dist/index.js");
const Dotenv = require("dotenv");
Dotenv.config();
var slackClient = new _1.Client.Controller();
slackClient.setState({
    oAuthAccessToken: process.env.SLACK_OAUTH_ACCESS_TOKEN,
    botUserOAuthAccessToken: process.env.SLACK_BOT_USER_OAUTH_ACCESS_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    port: Number(process.env.PORT)
});
slackClient.startServer();
//# sourceMappingURL=start.js.map