import { BlockKit } from '.'

export class Controller {
    public block: BlockKit.Block.Controller
    // public type: BlockKit.Type.Controller

    constructor() {
        this.block = new BlockKit.Block.Controller()
        // this.type = new BlockKit.Type.Controller()
    }
}