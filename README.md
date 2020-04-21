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

## Configuration

```shell
cp .env.example .env
```

Edit `.env` with your Slack Token (the Bot Access Token) and App Signing Secret, plus a URL for a document that explains your etiquette, inclusion, and diversity policy.

## Run Dev

```shell
npm run dev
```

## Run Prod

```shell
npm start
```