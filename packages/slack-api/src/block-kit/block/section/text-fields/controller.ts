import { TextFields } from '.'

export class Controller {
    public get(value: TextFields.Interface): TextFields.State {
        var state = {
            type: 'section',
            fields: []
        }

        value.fields.forEach(field => {
            state.fields.push({
                type: 'mrkdwn',
                text: field,
                emoji: true
            })
        })

        return (state)
    }
}


