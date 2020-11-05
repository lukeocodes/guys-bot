import { StaticSelect } from '.'

export class Controller {
    public get(value: StaticSelect.Interface): StaticSelect.State {
        var state: StaticSelect.State = {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: value.text
            },
            accessory: {
                type: 'users_select',
                placeholder: {
                    type: 'mrkdwn',
                    text: value.placeholder,
                    emoji: true
                },
                action_id: value.actionId,
                options: []
            }
        }

        value.options.forEach(field => {
            state.accessory.options.push({
                text: {
                    type: 'plain_text',
                    text: field.text,
                    emoji: true
                },
                value: 'mrkdwn'
            })
        })

        return state
    }
}