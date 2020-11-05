export interface Interface {
  type: string
  elements: Array<Element>
}

export interface Element {
  type: string
  text: Text
  style: string
  value: string
  action_id: string
}

export interface Text {
  type: string
  emoji: Boolean
  text: string
}