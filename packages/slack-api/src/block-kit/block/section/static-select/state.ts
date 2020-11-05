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
  options: Array<Option>
}

export interface Option {
  text: OptionText
  value: string
}

export interface OptionText {
  type: string
  text: string
  emoji: Boolean
}

export interface Placeholder {
  type: string
  text: string
  emoji: Boolean
}