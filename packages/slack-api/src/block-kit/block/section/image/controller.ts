import { Image } from '.'

export class Controller {
    public get(value: Image.Interface): Image.State {
        return ({
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: value.text
            },
            accessory: {
                type: 'image',
                image_url: value.imageUrl,
                alt_text: value.altText
            }
        })
    }
}