const Discord = require('discord.js');
const client = new Discord.Client();

client.on ('message', message => {
	if (message.content.startsWith('!ajuda')) {
		message.channel.send('Caso queira ajuda falar com os staffs!');
	}
});

client.on ('ready', ready => {
	console.log('Estou online!');
});

client.login('seu token');
