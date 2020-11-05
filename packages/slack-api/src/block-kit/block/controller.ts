import { Block } from '.'

export class Controller {
    public divider: Block.Divider.Controller
    public header: Block.Header.Controller
    public section: Block.Section.Controller

    constructor() {
        this.divider = new Block.Divider.Controller()
        this.header = new Block.Header.Controller()
        this.section = new Block.Section.Controller()
    }
}