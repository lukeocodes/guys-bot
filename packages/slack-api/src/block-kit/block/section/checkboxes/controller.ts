import { Checkboxes } from '.'

export class Controller {
    public get(value: Checkboxes.Interface): Checkboxes.State {
        var state: Checkboxes.State = {
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
                    type: 'mrkdwn',
                    text: option.text
                },
                description: {
                    type: 'mrkdwn',
                    text: option.description
                },
                value: option.value
            })
        })

        return state
    }
}