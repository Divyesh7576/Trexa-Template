const { SlashCommandBuilder, CommandInteraction, Client } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Tells API Ping of the Bot"),
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        interaction.reply("API Ping of the bot is \`" + client.ws.ping + "\` MS!")
    }
}