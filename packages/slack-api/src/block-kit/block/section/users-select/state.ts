export interface State {
  type: string
  text: Text
  accessory: Accessory
}

export interface Text {
  type: string
  text: string
}

export interface Accessory {
  type: string
  placeholder: Placeholder
  action_id: string
}

export interface Placeholder {
  type: string
  text: string
  emoji: Boolean
}