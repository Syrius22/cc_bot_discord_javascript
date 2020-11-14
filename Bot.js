const Discord = require("discord.js");
const bot = new Discord.client();
bot.on("ready", function() {
	console.log("carapuce est dans les places !");
});

bot.login("Nzc3MTYzMzI3MDE2Nzk2MTYw.X6_bwA.nVzf0P3bWKQubiw2gTpNQuy2mtg");

bot.on("message",message=> {
	if (message.content === "!ping") {
		message.channel.send("Carapong !");
	}
});