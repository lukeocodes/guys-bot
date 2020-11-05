import { Mrkdwn } from '.'

export class Controller {
    public get(value: Mrkdwn.Interface): Mrkdwn.State {
        return ({
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: value.text
            }
        })
    }
}


