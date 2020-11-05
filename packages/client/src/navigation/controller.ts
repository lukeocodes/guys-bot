import { Navigation } from ".";

export class Controller {
    public state: Navigation.State
    public home: Navigation.Home.Controller

    constructor() {
        this.home = new Navigation.Home.Controller()
    }

    setState(state: Navigation.State) {
        this.state = state
        this.home.setState(this.state.home)
    }
}