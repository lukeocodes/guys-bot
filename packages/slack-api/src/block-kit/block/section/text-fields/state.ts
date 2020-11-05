export interface State {
  type: string
  fields: Array<Field>
}

export interface Field {
  type: string
  text: string
  emoji: Boolean
}