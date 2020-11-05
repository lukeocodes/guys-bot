export interface State {
    terms?: Array<Term>
    postEphemeral?: PostEphemeral
    token?: string
}

export interface PostEphemeral {
    token: string
    channel: string
    user: string
    chat: any
}


export interface Term {
    text: string
    response: string
}
