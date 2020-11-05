import { Payload } from '.'

export interface Interface {
  type: string
  action_ts: string
  callback_id: string
  response_url: string
  state: string
  team: Payload.Team.Interface
  user: Payload.User.Interface
  channel: Payload.Channel.Interface
  submission: Payload.Submission.Interface
  actions: Array<any>
}
