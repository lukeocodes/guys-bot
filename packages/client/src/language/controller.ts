import { SlackApi } from 'slack-api';
import { Language } from '.'
import { StateStream } from 'state-stream'
import * as config from "./state.json"

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
                if (
                    view.channel_type == 'channel' ||
                    view.channel_type == 'group' ||
                    view.channel_type == 'mpim' ||
                    view.channel_type == 'im'
                ) {
                    this.state.terms.forEach(term => {
                        var viewText = view.text.toLowerCase()
                        var termText = term.text.toLowerCase()

                        if (
                            viewText == termText ||
                            viewText.includes(' ' + termText + ' ') ||
                            viewText.includes(' ' + termText + '.') ||
                            viewText.includes(' ' + termText + '?') ||
                            viewText.includes(' ' + termText + '!') ||
                            viewText.includes(' ' + termText + ',') ||
                            viewText.startsWith(termText + ' ') ||
                            viewText.startsWith(termText + '.') ||
                            viewText.startsWith(termText + '?') ||
                            viewText.startsWith(termText + '!') ||
                            viewText.startsWith(termText + ',') ||
                            viewText.endsWith(' ' + termText)
                        ) {
                            client.chat.postEphemeral({
                                token: client.token,
                                channel: view.user,
                                user: view.user,
                                text: term.text + ": " + term.response
                            })
                        }
                    })
                }
            }
        }
    }
}