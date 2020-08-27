const { Discord, Client, Collection } = require("discord.js");
const client = new Client({disableEveryone: true});
const config = require("./json/config.json");
const fs = require("fs");

client.commands = new Collection();
client.aliases = new Collection();
client.categores = fs.readdirSync("./commandes/");

["command"].forEach(handler => require(`./handlers/${handler}`)(client));

client.on("message", async message => {
    require("./handlers/events/message.js")(client, message);
    require("./handlers/events/xpMessage.js")(client, message);
    require("./handlers/events/statusMessage.js")(client, message);
});
client.on("ready", () => require("./handlers/events/ready.js")(client));
client.on("messageReactionAdd", async (reaction, user) => require("./handlers/events/reactionAddRps.js")(client, reaction, user));

client.login(process.env.TOKEN);
