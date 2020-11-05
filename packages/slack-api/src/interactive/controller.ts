import { Interactive } from '.'

export class Controller {
  public state: Interactive.State

  constructor(state: Interactive.State) {
    this.state = state
  }

  public payload(response: Interactive.Payload.Interface): Interactive.Response.Interface {
    return {
      type: response.type,
      token: this.state.accessToken,
      actionTs: response.action_ts,
      actions: response.actions,
      team: response.team,
      user: response.user,
      channel: response.channel,
      submission: response.submission,
      callbackId: response.callback_id,
      responseUrl: response.response_url,
      state: response.state,
    }
  }
}
