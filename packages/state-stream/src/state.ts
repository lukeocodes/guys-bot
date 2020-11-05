import * as Crypto from 'crypto'

export interface State {
  accessToken: string
  triggerId?: string
  timestamp: number
  signature: string
  hmac: Crypto.Hmac
  rawBody: string
}
