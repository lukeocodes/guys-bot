import { Client } from '.'

export interface State {
  oAuthAccessToken?: string
  botUserOAuthAccessToken?: string
  signingSecret?: string
  port?: number
  navigation?: Client.Navigation.State
  glossary?: Client.Glossary.State
}