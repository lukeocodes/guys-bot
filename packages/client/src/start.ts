import { Client } from '.'
import * as Dotenv from 'dotenv'

Dotenv.config()

var slackClient = new Client.Controller()

slackClient.setState({
  oAuthAccessToken: process.env.SLACK_OAUTH_ACCESS_TOKEN,
  botUserOAuthAccessToken: process.env.SLACK_BOT_USER_OAUTH_ACCESS_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  port: Number(process.env.PORT)
})

slackClient.startServer()