import { Response } from '.'

export interface Interface {
  type: string
  token: string
  actionTs: string
  callbackId: string
  responseUrl: string
  state: string
  team: Response.Team.Interface
  user: Response.User.Interface
  channel: Response.Channel.Interface
  submission: Response.Submission.Interface
  actions: Array<any>
}
