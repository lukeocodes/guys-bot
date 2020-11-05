import { PlainText } from '.'

export class Controller {
    public get(value: PlainText.Interface): PlainText.State {
        return ({
            type: 'section',
            text: {
                type: 'plain_text',
                text: value.text,
                emoji: true
            }
        })
    }
}


