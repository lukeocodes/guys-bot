import { UsersSelect } from '.'

export class Controller {
    public get(value: UsersSelect.Interface): UsersSelect.State {
        return ({
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
                action_id: value.actionId
            }
        })
    }
}