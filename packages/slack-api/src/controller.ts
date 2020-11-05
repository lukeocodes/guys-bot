import { SlackApi } from '.'

export class Controller {
  public app: any
  public state: SlackApi.State
  public blockKit: SlackApi.BlockKit.Block.Controller

  public constructor() {
    this.blockKit = new SlackApi.BlockKit.Block.Controller()
  }

  public setState(state: SlackApi.State) {
    this.state = state
  }

  public start() {
    const { App } = require('@slack/bolt');

    this.app = new App({
      signingSecret: this.state.signingSecret,
      token: this.state.botUserOAuthAccessToken,
      endpoints: {
        events: '/slack/events',
        commands: '/slack/commands',
        action: '/slack/action-endpoint',
        interactive: '/slack/interactive-endpoint'
      }
    })
  }

  public home(blocks: any) {
    this.app.event('app_home_opened', async ({ event, client }) => {
      this.app.client.views.publish({
        token: this.state.botUserOAuthAccessToken,
        user_id: event.user,
        view: {
          type: 'home',
          blocks: blocks
        }
      })
    })
  }

  public command(value: any) {
    this.app.command('/' + value.trigger, async ({ command, ack, client }) => {
      await ack()

      value.callback(command, client)
    })
  }

  public action(value: any) {
    this.app.action(value.trigger, async ({ ack, body, client }) => {
      await ack()

      value.callback(body, client)
    })
  }

  public view(value: any) {
    this.app.view(value.trigger, async ({ ack, body, view, context }) => {
      await ack()

      value.callback(body, view, context)
    })
  }

  public event(value: any) {
    this.app.event(value.trigger, async ({ event, client }) => {
      value.callback(event, client)
    })
  }
}
