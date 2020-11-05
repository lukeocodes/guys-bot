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
  image_url: string
  alt_text: string
}