import { Header } from '.'

export class Controller {
    public get(state: Header.State): Header.Interface {
        return ({
            type: 'header',
            text: {
                type: 'plain_text',
                text: state.text,
                emoji: true
            }
        });
    }
}