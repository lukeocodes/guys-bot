import { Timepicker } from '.'

export class Controller {
    public get(value: Timepicker.Interface): Timepicker.State {
        return ({
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: value.text
            },
            accessory: {
                type: 'radio_buttons',
                initial_time: value.time,
                placeholder: {
                    type: 'plain_text',
                    text: value.text,
                    emoji: true
                },
                action_id: value.actionId
            }
        })
    }
}