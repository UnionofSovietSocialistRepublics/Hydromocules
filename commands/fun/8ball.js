const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('8ball')
		.setDescription('A ball of 8')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The message you want to 8ball')
                .setRequired(true)),
	    async execute(interaction) {
        let test = (Math.floor(Math.random()*5))
        await wait(2_000);
        console.log(test)
        switch(test){
            case 1:
            await interaction.reply(`No, impossible.`);
            break;
            case 2:
            await interaction.reply(`Prehaps.`);
            break;
            case 3:
            await interaction.reply(`Yes.`);
            break;
            case 4:
            await interaction.reply(`Maybe, if you're lucky.`);
            case 5:
            await interaction.reply(`I did the math, the chance of that happening is none.`);
            break;
            default:
            await interaction.reply(`It's your lucky day because the answer is no.`);
        }
		
	},
};