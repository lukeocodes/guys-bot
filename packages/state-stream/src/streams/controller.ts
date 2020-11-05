import { Stream } from '../stream'
import { Streams } from '.'

export class Controller<State = Streams.State> {
  protected array: Stream.Controller[]

  constructor(state?: State) {
    this.array = []
    if (state) {
      this.state = state
    }
  }

  public set state(value: State) {
    this.setState(value)
  }

  public get state(): State {
    return this.getState()
  }

  public get get(): Stream.Controller[] {
    return this.array
  }

  public set set(array: Stream.Controller[]) {
    this.array = array
  }

  public add(attachment: Stream.Controller): void {
    this.array.push(attachment)
  }

  protected setState(value?: State): void {
    this.array = []

    if (value) {
      Object.keys(value).forEach((key: string) => {
        ; (this as any)[key] = (value as any)[key]
      })
    }
  }

  protected getState(): State {
    const value: any = []

    this.get.forEach((controller: Stream.Controller) => {
      value.push(controller.state)
    })

    return value as State
  }
}
