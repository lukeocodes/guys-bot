import * as _Controller from './controller'
import * as _State from './state'
import { Stream as _Stream } from './stream'
import { Streams as _Streams } from './streams'

export namespace StateStream {
  export import Stream = _Stream
  export import Streams = _Streams
  export const Merge = _Stream.Controller.Merge
  export import Controller = _Controller.Controller
  export import State = _State.State
}