import * as _Controller from './controller'
import * as _State from './state'
import { Home as _Home } from './home'

export namespace Navigation {
  export import Controller = _Controller.Controller
  export import Home = _Home
  export import State = _State.State
}
