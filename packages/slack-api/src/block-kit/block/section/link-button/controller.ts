import { LinkButton } from '.'

export class Controller {
    public get(value: LinkButton.Interface): LinkButton.State {
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