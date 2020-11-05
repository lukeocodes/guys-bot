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
  options: Array<Option>
  action_id: string
}

export interface Option {
  text: OptionText
  description: Description
  value: string
}

export interface OptionText {
  type: string
  text: string
}

export interface Description {
  type: string
  text: string
}