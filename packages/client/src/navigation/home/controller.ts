import { Home } from "."
import { SlackApi } from "slack-api"

export class Controller {
    public state: Home.State
    public blockKit: SlackApi.BlockKit.Block.Controller

    constructor() {
        this.blockKit = new SlackApi.BlockKit.Block.Controller()
    }

    setState(state: Home.State) {
        this.state = state
    }

    public getSlackBlockKit() {
        return [
            this.blockKit.section.button.get({
                text: this.state.text,
                button: this.state.button,
                value: this.state.value,
                actionId: this.state.actionId
            })
        ]
    }
}