import { Button } from '.'

export class Controller {
    public get(value: Button.Interface): Button.State {
        return ({
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: value.text
            },
            accessory: {
                type: 'button',
                text: {
                    type: 'plain_text',
                    text: value.button,
                    emoji: true
                },
                value: value.value,
                action_id: value.actionId
            }
        })
    }
}