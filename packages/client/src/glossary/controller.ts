import { SlackApi } from 'slack-api'
import { Glossary } from '.'
import { StateStream } from 'state-stream'
import * as config from "./state.json"

export class Controller {
    public slackBlockKit: SlackApi.BlockKit.Block.Controller
    public state: Glossary.State

    constructor() {
        this.slackBlockKit = new SlackApi.BlockKit.Block.Controller()
    }

    setState(state: Glossary.State) {
        this.state = StateStream.Merge(state, config)
    }

    public view() {
        return {
            trigger: 'glossary',
            callback: (body, view, context) => {
                var glossary = body.view.state.values[Object.keys(body.view.state.values)[0]].glossary.selected_option.value

                this.state.terms.forEach(term => {
                    if (term.text.toLowerCase() == glossary.toLowerCase()) {
                        this.state.postEphemeral.chat.postEphemeral({
                            token: this.state.postEphemeral.token,
                            channel: this.state.postEphemeral.channel,
                            user: this.state.postEphemeral.user,
                            text: term.text + ": " + term.response
                        })
                    }
                })
            }
        }
    }

    public action() {
        return {
            trigger: 'glossary',
            callback: (body, client) => {
                this.state.postEphemeral = {
                    token: client.token,
                    chat: client.chat,
                    channel: body.user.id,
                    user: body.user.id
                }

                this.openModal(client, body.trigger_id)
            }
        }
    }

    public command() {
        return {
            trigger: 'glossary',
            callback: (command, client) => {
                if (
                    command.channel_name != 'directmessage' &&
                    command.channel_name != 'privategroup'
                ) {
                    this.state.postEphemeral = {
                        token: client.token,
                        chat: client.chat,
                        channel: command.channel_id,
                        user: command.user_id
                    }
                } else {
                    this.state.postEphemeral = {
                        token: client.token,
                        chat: client.chat,
                        channel: command.user_id,
                        user: command.user_id
                    }
                }

                if (command.text) {
                    this.state.terms.forEach(term => {
                        if (term.text.toLowerCase() == command.text.toLowerCase()) {
                            client.chat.postEphemeral({
                                token: this.state.postEphemeral.token,
                                channel: this.state.postEphemeral.channel,
                                user: this.state.postEphemeral.user,
                                text: term.text + ": " + term.response
                            })
                        }
                    })
                } else {
                    this.openModal(client, command.trigger_id)
                }
            }
        }
    }

    public openModal(client, trigger) {
        var options = []
        this.state.terms.forEach(term => {
            let value = term.text.toLowerCase();

            if (
                term.dropdown &&
                options.find(i => i.value === value) == null
            ) {
                options.push({
                    text: {
                        type: "plain_text",
                        text: term.text,
                        emoji: true
                    },
                    value: value
                })
            }
        })
        options = options.slice(0, 99)

        client.views.open({
            trigger_id: trigger,
            view: {
                type: 'modal',
                callback_id: 'glossary',
                title: {
                    type: 'plain_text',
                    text: 'Glossary',
                    emoji: true
                },
                submit: {
                    type: 'plain_text',
                    text: 'Submit',
                    emoji: true
                },
                close: {
                    type: 'plain_text',
                    text: 'Cancel',
                    emoji: true
                },
                blocks: [
                    {
                        type: 'input',
                        element: {
                            type: "static_select",
                            placeholder: {
                                type: "plain_text",
                                text: "Select",
                                emoji: true
                            },
                            options: options,
                            action_id: "glossary"
                        },
                        label: {
                            type: 'plain_text',
                            text: 'Select a term for a detailed description:',
                            emoji: true
                        }
                    }
                ]
            }
        })
    }
}