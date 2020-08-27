const fs = require("fs");
const config = require("../../json/config.json");

let xp = JSON.parse(fs.readFileSync("./json/data/xp.json"));
module.exports = async (client, message) => {

    let wins = JSON.parse(fs.readFileSync("./json/data/wins.json"));

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefixes = JSON.parse(fs.readFileSync("./json/data/prefixes.json"));

    if(!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {prefixes: config.prefix};
    };

    if(!xp[message.author.id + message.guild.id]) {
        xp[message.author.id + message.guild.id] = {xp: 0};
    };


    fs.writeFile("./json/data/xp.json", JSON.stringify(xp), (err) => {if(err) console.log("[ERROR] " + err)});

    let prefix = prefixes[message.guild.id].prefixes;

    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);

    if(!wins[message.author.id + message.guild.id]) {
        wins[message.author.id + message.guild.id] = {
            wins: 0,
            defeats: 0
        };
        fs.writeFile("./json/data/wins.json", JSON.stringify(wins), (err) => {if(err) console.log("[ERROR] " + err)});
    };

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(cmd.length == 0) return;

    let command = client.commands.get(cmd);
    if(!command) command = client.commands.get(client.aliases.get(cmd));

    if(command) command.run(client, message, args);

    fs.writeFile("./json/data/prefixes.json", JSON.stringify(prefixes), (err) => {if(err) console.log("[ERROR] " + err)});
};