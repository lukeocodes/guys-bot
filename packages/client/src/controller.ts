import { SlackClient } from '.'

export class Controller {
  constructor(state: SlackClient.State) {
    require('dotenv').config()

    const { createEventAdapter } = require('@slack/events-api')
    const { WebClient } = require('@slack/web-api')
    const web = new WebClient(state.accessToken)
    const slackEvents = createEventAdapter(state.signingSecret)
    const port = process.env.PORT || 3000

    slackEvents.on('message', (event) => {
      if (Object.prototype.hasOwnProperty.call(event, 'channel_type')) {
        if (event.channel_type == 'channel') {
          if (
            Object.prototype.hasOwnProperty.call(event, 'text') &&
            event.text.toLowerCase().includes('guys')
          ) {
            web.chat.postEphemeral({
              channel: event.channel,
              user: event.user,
              text: 'Please bear in mind that the makeup of this Slack is very diverse, and some people feel excluded by the use of the term “guys”. Maybe you could try using _people_, _team_, _all_, _folks_, _everyone_, or _y\'all_?'
            })
          }
        }

        if (event.channel_type == 'im') {
          if (
            Object.prototype.hasOwnProperty.call(event, 'text') &&
            event.text.toLowerCase().includes('guys')
          ) {
            web.chat.postEphemeral({
              channel: event.user,
              user: event.user,
              text: 'Please bear in mind that the makeup of this Slack is very diverse, and some people feel excluded by the use of the term “guys”. Maybe you could try using _people_, _team_, _all_, _folks_, _everyone_, or _y\'all_?'
            })
          }
        }

        if (event.channel_type == 'mpim') {
          console.log('message.mpim');
        }

        if (event.channel_type == 'groups') {
          console.log('message.groups');
        }
      }
    })

    slackEvents.on('error', console.error)

    slackEvents.start(port).then(() => {
      console.log(`server listening on port ${port}`)
    })
  }
}
