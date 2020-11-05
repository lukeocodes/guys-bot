import * as _Controller from './controller'
import * as _State from './state'
import { Payload as _Payload } from './payload'
import { Response as _Response } from './response'

export namespace Interactive {
  export import Controller = _Controller.Controller
  export import State = _State.State
  export import Payload = _Payload
  export import Response = _Response
}
