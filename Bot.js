const Discord = require("discord.js");  //node Bot.js pour lancer le bot
const bot = new Discord.Client();
bot.on("ready", function() {
	console.log("carapuce est dans les places !");
});

bot.login("Nzc3MTYzMzI3MDE2Nzk2MTYw.X6_bwA.nVzf0P3bWKQubiw2gTpNQuy2mtg");

bot.on("message",message=> {
	if (message.content === "!ping") {
		message.channel.send("Carapong !");
	}
	if (message.content === "!carabonjour") {
		message.reply("carabonjour à toi !");
	}
	if (message.content.startsWith("!pin") & (message.content != "!ping")) {
		message.pin();
	}
	if (message.content === "!emojiliste") 
	{				
		const emojiliste = message.guild.emojis.cache.map((e) => e);
		message.channel.send(emojiliste);
	}
	if (message.content === "!carahelp") {
	//on envoie un message de type embed dans le channel d'où
	//provient le message
		message.channel.send({
			embed: {
				color: 3447003,
				description: "__**Les différentes commandes**__",
				fields: [
					{
						name: "!carahelp",
						value: "Pour afficher cette aide."
					},
					{
						name: "!ping",
						value: "Pong !"
					},
					{
						name: "!pin",
						value: "Pour épingler un message"
					},
					{
						name:"!emojiliste",
						value:"Pour connaître toutes les emojis du serveur"
					},
				]
			}
		});
	}

});
