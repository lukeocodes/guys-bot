// Initialize using signing secret from environment variables
const { createEventAdapter } = require('@slack/events-api');
const { WebClient } = require('@slack/web-api');
const web = new WebClient(process.env.SLACK_TOKEN);
const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET);
const port = process.env.PORT || 3000;

// Attach listeners to events by Slack Event "type". See: https://api.slack.com/events/message.im
slackEvents.on('message', (event) => {
  if (event.text.toLowerCase().includes('guys')) {
    (async () => {
      const infoLink = process.env.GUYS_INFO_LINK || 'https://dev.to/kmelve/the-problem-with-you-guys-51h7'

      // See: https://api.slack.com/methods/chat.postEphemeral
      const res = await web.chat.postEphemeral({ 
        channel: event.channel, 
        user: event.user, 
        text: 'Please bear in mind that the makeup of this Slack is very diverse, '
          + 'and some people feel excluded by the use of the term “guys”. Maybe '
          + 'you could try using _people_, _team_, _all_, _folks_, _everyone_, or '
          + '_y\'all_? '
          + `(<${infoLink}|What\'s this then?>).` });
    })();
  }
});

// Handle errors (see `errorCodes` export)
slackEvents.on('error', console.error);

// Start a basic HTTP server
slackEvents.start(port).then(() => {
  // Listening on path '/slack/events' by default
  console.log(`server listening on port ${port}`);
});