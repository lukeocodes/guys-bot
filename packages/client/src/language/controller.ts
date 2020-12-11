import { SlackApi } from 'slack-api'
import { Language } from '.'
import { StateStream } from 'state-stream'
import * as config from './state.json'

const VALID_CHANNEL_TYPES = ['channel', 'group', 'mpim', 'im']

export class Controller {
    public slackBlockKit: SlackApi.BlockKit.Block.Controller
    public state: Language.State

    constructor() {
        this.slackBlockKit = new SlackApi.BlockKit.Block.Controller()
    }

    setState(state: Language.State) {
        this.state = StateStream.Merge(state, config)
    }

    public message() {
        return {
            trigger: 'message',
            callback: (view, client, body) => {
                if (VALID_CHANNEL_TYPES.includes(view.channel_type)) {
                    const viewText = view.text.toLowerCase()
                    this.state.terms.forEach((term) => {
                        const termRegexp = new RegExp(`\b${term.text}\b`, 'i')

                        if (termRegexp.test(viewText)) {
                            client.chat.postEphemeral({
                                token: client.token,
                                channel: view.user,
                                user: view.user,
                                text: term.text + ': ' + term.response,
                            })
                        }
                    })
                }
            },
        }
    }
}
