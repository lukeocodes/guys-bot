import { Overflow } from '.'

export class Controller {
    public get(value: Overflow.Interface): Overflow.State {
        var state: Overflow.State = {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: value.text
            },
            accessory: {
                type: 'overflow',
                options: [],
                action_id: value.actionId
            }
        }

        value.options.forEach(option => {
            state.accessory.options.push({
                text: {
                    type: 'plain_text',
                    text: option.text,
                    emoji: true
                },
                value: option.value
            })
        })

        return state
    }
}