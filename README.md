# Simple Guys Bot - Vonage

At Vonage, we're as concious as the next community about the use of language in our Slack workspaces. With the existing [guys-bot-for-slack](https://glitch.com/~guys-bot-for-slack) not working with the latest flavour of Slack API, I have recreate it using the most basic implementation of the Slack SDKs.

## Installation

Get the repo.

```shell
git clone https://github.com/lukeocodes/vonage-guys-bot.git
cd vonage-guys-bot
```

Install it.

```shell
npm install
```

## Listening for an event with the Events API

Your app will receive events at the Request URL you registered with Slack. Before completing that registration, you
need to verify that the URL belongs to you by responding to a challenge. There is a command line tool built into the
`@slack/events-api` package that you may use to respond to the challenge.

```shell
./node_modules/.bin/slack-verify --secret <signing_secret> [--path=/slack/events] [--port=3000]
```

## Run Dev

```shell
npm run dev
```

## Run Prod

```shell
npm start
```