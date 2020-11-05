import { Client } from '.'
import { SlackApi } from 'slack-api'
import { StateStream } from 'state-stream'
import * as config from "./state.json";

export class Controller {
  public state: Client.State
  public language: Client.Language.Controller
  public glossary: Client.Glossary.Controller
  public slackApi: SlackApi.Controller
  public blockKit: SlackApi.BlockKit.Block.Controller
  public navigation: Client.Navigation.Controller

  constructor() {
    this.navigation = new Client.Navigation.Controller()
    this.language = new Client.Language.Controller()
    this.glossary = new Client.Glossary.Controller()
    this.slackApi = new SlackApi.Controller()
  }

  setState(state: Client.State) {
    this.state = StateStream.Merge(state, config)

    this.navigation.setState(this.state.navigation)
    this.slackApi.setState({
      signingSecret: this.state.signingSecret,
      botUserOAuthAccessToken: this.state.botUserOAuthAccessToken
    })
    this.language.setState({})
    this.glossary.setState(this.state.glossary)
  }

  public startServer() {
    this.slackApi.start()

    this.slackApi.home(this.navigation.home.getSlackBlockKit())
    this.slackApi.view(this.glossary.view())
    this.slackApi.action(this.glossary.action())
    this.slackApi.command(this.glossary.command())
    this.slackApi.event(this.language.message())

    this.slackApi.app.start(this.state.port)
  }
}