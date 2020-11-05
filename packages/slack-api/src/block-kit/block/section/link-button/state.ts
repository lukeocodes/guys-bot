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
  text: AccessoryText
  value: string
  action_id: string
}

export interface AccessoryText {
  type: string
  text: string
  emoji: Boolean
}