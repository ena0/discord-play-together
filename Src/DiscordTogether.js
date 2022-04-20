const fetch = require('node-fetch')
const merge = require("deepmerge")

const { defaultApplicationsOptions, defaultActivityOptions } = require("./Constants")

class discordPlayTogether {
    constructor(client, applications = {}) {
        if(!client) throw new SyntaxError('Invalid Discord.Client')

        this.client = client

        this.applications = merge(defaultApplicationsOptions, applications)
    }

    async createCode(voiceChannel, options = {}) {

        const mergerdOptions = merge(defaultActivityOptions, options)

        if(!mergerdOptions.activity) throw new SyntaxError('Invalid options.activity is a required options')

        if(!this.applications[mergerdOptions.activity.toLowerCase()]) throw new SyntaxError(`${mergerdOptions.activity} is not an valid options.activity`)

        if(mergerdOptions.neverExpire) mergerdOptions.duration = 0

        const responses = await (await fetch(`https://discord.com/api/v8/channels/${voiceChannel}/invites`, {
            method: 'POST',
            body: JSON.stringify({
                max_age: mergerdOptions.duration,
                max_uses: mergerdOptions.maxUses,
                target_application_id: this.applications[mergerdOptions.activity.toLowerCase()],
                target_type: 2,
                temporary: false,
                validate: null,
            }),
            headers: {
                Authorization: `Bot ${this.client.token}`,
                'Content-Type': 'application/json',
            },
        })).json()

        const data = {
            code: `https://discord.com/invite/${responses.code}`,
            expireAt: responses.expires_at,
            activity: {
                id: responses.target_application.id,
                name: options.activity,
                icon: responses.target_application.icon,
                description: responses.target_application.description,
            },
            guild: this.client.guilds.cache.get(responses.guild.id),
            channel: this.client.channels.cache.get(responses.channel.id),
            inviter: this.client.users.cache.get(responses.inviter.id)
        } 

        return data
    }
}

module.exports = discordPlayTogether