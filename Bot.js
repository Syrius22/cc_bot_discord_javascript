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
	if (message.content === "!caraquiz") {
		const points = 0
		message.channel.send({
			embed: {
				color: 3447003,
				description: "__**Question numéro 1**__",
				fields: [
					{
						name: "Qui est le créateur",
					value: "a- Syrius22  b- Moi-même",}
				]
			}
		},
		if (message.content === "a") {
			const points += 1 ;
			message.reply("Bonne réponse !");
		}
		message.channel.send({
			embed: {
				color: 3447003,
				description: "__**Question numéro 2**__",
				fields: [
					{
						name: "Quel est le meilleur starter pokémon ?",
					value: "a- Salamèche  b- Carapuce c- Bulbizarre",}
				]
			}
		},
		if (message.content === "b") {
			const points += 1 ;
			message.reply("Bonne réponse !");
		}
		message.chanel.send("Tu as un score de",points,"!")
					
	}
	if (message.content === "!carahelp") {
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
