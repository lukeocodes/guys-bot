export interface State {
  type: string
  text: Text
}

export interface Text {
  type: string
  text: string
  emoji: Boolean
}