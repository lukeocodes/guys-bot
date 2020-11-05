import { Action } from '.'

export class Controller {
    public static Get(state: Array<Action.State>): Action.Interface {
        var elements = new Array<Action.Element>();

        state.forEach(item => {
            elements.push({
                type: 'button',
                text: {
                    type: 'plain_text',
                    emoji: true,
                    text: item.text
                },
                style: item.style,
                value: item.value,
                action_id: item.actionId
            });
        })

        return ({
            type: 'actions',
            elements: elements
        });
    }
}