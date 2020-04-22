# Simple Guys Bot

![Guy - the bot](https://github.com/lukeocodes/guys-bot/raw/master/assets/128w/standard-whos-a-good-bot.png "Guy - the bot logo")

If you're as concious as I am about the use of language in your Slack workspace, this will interest you.

With the existing [guys-bot-for-slack](https://glitch.com/~guys-bot-for-slack) needing some updates to work with the latest flavour of Slack API, I chose to recreate it using the most basic implementation of the Slack SDKs.

![Screenshot of the bot responding to the message](https://github.com/lukeocodes/guys-bot/raw/master/screenshot.gif "Screenshot of the bot responding to the message")

The bot responds with an ephemeral message, not seen by anyone but the user who originally messaged.

It requires the bot be invited into the channels you want it to listen on, so it can be implemented by individuals, or teams, as channels require, if that is what you want.

This guide has steps on the Slack API control panel. Please read [this article](https://dev.to/lukeocodes) on how to set up your Slack App to retrieve your SLACK_TOKEN and SLACK_SIGNING_SECRET.

## Installation Once Remixed

Update `.env` following the `.env.example` file supplied with the project.

```shell
cp .env.example .env
```

## Logo

Guy - whos a good bot - is saved as SVG and is subject to the same license for the project. Enjoy :)