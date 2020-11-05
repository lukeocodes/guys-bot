import { RadioButtons } from '.'

export class Controller {
    public get(value: RadioButtons.Interface): RadioButtons.State {
        var state: RadioButtons.State = {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: value.text
            },
            accessory: {
                type: 'radio_buttons',
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