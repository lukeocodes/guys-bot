import * as _Controller from './controller'
import * as _State from './state'
import * as _Interface from './interface'

export namespace Action {
  export import Controller = _Controller.Controller
  export import State = _State.State
  export import Interface = _Interface.Interface
  export import Element = _Interface.Element
}
