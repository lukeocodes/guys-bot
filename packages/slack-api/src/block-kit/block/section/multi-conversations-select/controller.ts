import { MultiConversationsSelect } from '.'

export class Controller {
    public get(value: MultiConversationsSelect.Interface): MultiConversationsSelect.State {
        return ({
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: value.text
            },
            accessory: {
                type: 'multi_conversations_select',
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