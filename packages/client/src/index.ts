import * as _Controller from './controller'
import * as _State from './state'
import { Navigation as _Navigation } from './navigation'
import { Glossary as _Glossary } from './glossary'
import { Language as _Language } from './language'

export namespace Client {
  export import Controller = _Controller.Controller
  export import State = _State.State
  export import Navigation = _Navigation
  export import Glossary = _Glossary
  export import Language = _Language
}