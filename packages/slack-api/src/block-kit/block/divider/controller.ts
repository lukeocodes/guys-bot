import { Divider } from '.'

export class Controller {
    public get(): Divider.Interface {
        return ({
            type: 'divider'
        });
    }
}