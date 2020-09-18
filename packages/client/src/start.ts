import { SlackClient } from '.'
import * as Dotenv from 'dotenv'

Dotenv.config()

new SlackClient.Controller({
  accessToken: process.env.SLACK_BOT_USER_OAUTH_ACCESS_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
})