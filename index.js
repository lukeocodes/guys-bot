require('dotenv').config()

const { createEventAdapter } = require('@slack/events-api')
const { WebClient } = require('@slack/web-api')
const { keywords } = require('./.guysrc.json')
const web = new WebClient(process.env.SLACK_TOKEN)
const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET)
const port = process.env.PORT || 3000

let word = ''
const checker = (value) => keywords.some((e) => value.includes(e))

slackEvents.on('message', (event) => {
  if (
    Object.prototype.hasOwnProperty.call(event, 'text') &&
    event.text.toLowerCase().split(' ').filter(checker)
  ) {
    (async () => {
      word = event.text.toLowerCase()
        .split(' ').filter(checker)[0]
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
        .replace(/\s{2,}/g, '')
      const messageBody =
        process.env.GUYS_MESSAGE ||
        'Please bear in mind that the makeup of this Slack is ' +
        'very diverse, and some people feel excluded by the ' +
        'use of the term “' + word + '”. Maybe you could try using ' +
        '_people_, _team_, _all_, _folks_, _everyone_, or _y\'all_?'
      const infoLink =
        process.env.GUYS_INFO_LINK ||
        'https://dev.to/kmelve/the-problem-with-you-guys-51h7'

      await web.chat.postEphemeral({
        channel: event.channel,
        user: event.user,
        text: messageBody + ` (<${infoLink}|What\'s this then?>).`
      })
    })()
  }
})

slackEvents.on('error', console.error)

slackEvents.start(port).then(() => {
  console.log(`server listening on port ${port}`)
})
