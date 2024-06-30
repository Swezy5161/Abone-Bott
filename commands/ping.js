const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong!'),
    async execute(client,interaction) {
        const ping = client.ws.ping

        const embed = new EmbedBuilder()
            .setTitle(`Ping değerim aşağıda.`)
            .setDescription(`Hop! Bot gecikmesi **${client.ws.ping}** milisaniye.`)

        await interaction.reply({ embeds: [embed] });
    },
};
