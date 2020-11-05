import { Stream } from '.'

export class Controller<State extends Stream.State = Stream.State> {
  public set state(value: State) {
    this.setState(value)
  }

  public get state(): State {
    return this.getState()
  }

  public static Merge<T>(firstState: T, secondState?: T, transform?: boolean): T {
    var value
    if (Array.isArray(firstState)) {
      value = [] as Array<T>
    } else {
      value = {} as T
    }

    if (firstState) {
      Object.keys(firstState).forEach((firstStateValue: string) => {
        if (firstState[firstStateValue] !== null) {
          let newFirstStateValue = transform
            ? firstStateValue
              .replace(/\.?([A-Z])/g, function (x, y) {
                return '_' + y.toLowerCase()
              })
              .replace(/^_/, '')
            : firstStateValue

          if (
            Array.isArray(firstState[firstStateValue]) ||
            typeof firstState[firstStateValue] === 'object'
          ) {
            value[newFirstStateValue] = Controller.Merge(
              firstState[firstStateValue],
              null,
              transform,
            )
          } else {
            value[newFirstStateValue] = firstState[firstStateValue]
          }
        }
      })
    }

    if (secondState) {
      Object.keys(secondState).forEach((secondStateValue: string) => {
        if (secondState[secondStateValue] !== null) {
          let newSecondStateValue = transform
            ? secondStateValue
              .replace(/\.?([A-Z])/g, function (x, y) {
                return '_' + y.toLowerCase()
              })
              .replace(/^_/, '')
            : secondStateValue

          if (
            Array.isArray(secondState[secondStateValue]) ||
            typeof secondState[secondStateValue] === 'object'
          ) {
            value[newSecondStateValue] = Controller.Merge(
              secondState[secondStateValue],
              null,
              transform,
            )
          } else {
            value[newSecondStateValue] = secondState[secondStateValue]
          }
        }
      })
    }

    return value
  }

  constructor(firstState?: State, secondState?: State, transform?: boolean) {
    if (firstState) {
      this.state = this.merge(firstState, secondState, transform)
    }
  }

  public merge<T>(firstState: T, secondState?: T, transform?: boolean): T {
    return Controller.Merge(firstState, secondState, transform)
  }

  protected setState(value?: State): void {
    if (value) {
      Object.keys(value).forEach((key: string) => {
        ; (this as any)[key] = (value as any)[key]
      })
    }
  }

  protected getState(): State {
    const value: object = {}

    Object.keys(this).forEach((key: string) => {
      if ((this as any)[key] && (this as any)[key].state) {
        ; (value as any)[key] = (this as any)[key].state
      }
    })

    return value as State
  }
}
