const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('relay')
		.setDescription('Relys the message')
        .addStringOption(option =>
			option.setName('input')
			.setDescription('The input to echo back')
			.setRequired(true))
		.addStringOption(option =>
			option.setName('hidden')
			.setDescription('whatever this is hidden or not')
			.setRequired(true)
			.addChoices(
				{ name: 'true', value: 'yes' },
				{ name: 'false', value: 'no' },
			)),
	async execute(interaction) {
        const input = interaction.options.getString('input');
        const message = interaction.options.getString('hidden');
        switch(message){
			case 'yes':
			await interaction.reply({ content: `${input}`, ephemeral: true });
			break;
			case 'no':
				await interaction.reply({ content: `${input}`, ephemeral: false });
			break;
		}
	},
};