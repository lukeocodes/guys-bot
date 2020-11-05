import { Datepicker } from '.'

export class Controller {
    public get(value: Datepicker.Interface): Datepicker.State {
        return ({
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: value.text
            },
            accessory: {
                type: 'datepicker',
                initial_date: value.initialDate,
                placeholder: {
                    type: 'plain_text',
                    text: value.placeholder,
                    emoji: true
                },
                action_id: value.actionId
            }
        })
    }
}