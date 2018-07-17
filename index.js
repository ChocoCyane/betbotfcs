const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("gérer les paris, .help");
    console;log("Le bot a bien été connecté");
});

bot.login("NDY4NjkxODc0NTgxMDUzNDQx.Di83EA.uC0ukOZcvrXsveKukyY5g_hqIoU");
