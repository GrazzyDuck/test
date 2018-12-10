const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const token = process.env.token;

const bot = new Discord.Client();

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
});

bot.login("botconfig.token");