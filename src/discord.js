const Discord = require('discord.js')
const client = new Discord.Client()

client.once('ready', () => {
  console.log(`[discord] ${client.user.tag} is online!`)
})

client.on('message', message => {
  console.log(message)
  if (
    !message.author.bot &&
    // Object.prototype.hasOwnProperty.call(event, 'text') &&
    message.content.toLowerCase().includes('guys')
  ) {
    (async () => {
      const messageBody =
        process.env.GUYS_MESSAGE ||
        'Please bear in mind that the makeup of this Slack is ' +
        'very diverse, and some people feel excluded by the ' +
        'use of the term “guys”. Maybe you could try using ' +
        '_people_, _team_, _all_, _folks_, _everyone_, or _y\'all_?'
      const infoLink =
        process.env.GUYS_INFO_LINK ||
        'https://dev.to/kmelve/the-problem-with-you-guys-51h7'

      const msgEmbed = new Discord.MessageEmbed().setDescription(`${messageBody} ([What's this then?](${infoLink})).`)
      message.channel.send(msgEmbed)
    })()
  }
})

client.login(process.env.DISCORD_TOKEN)
