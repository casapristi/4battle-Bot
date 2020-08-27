const { MessageEmbed, MessageAttachment } = require("discord.js");
const color = require("../../json/color.json");
const config = require("../../json/config.json");
const fs = require("fs");

module.exports = {
    name: "set-status",
    aliases: ["ss"],
    category: "utilities",
    run: async (client, message, args) => {
        let language = JSON.parse(fs.readFileSync("./json/data/language.json", "utf8"));
        let status = JSON.parse(fs.readFileSync("./json/data/status.json", "utf8"));

        let date = new Date();

        let embed = new MessageEmbed()
        .setColor(color.main)
        .setTitle("👁️ ✦ NEW STATUS :")
        .setThumbnail(config.icon)
        .setTimestamp(date)

        status[message.author.id + message.guild.id] = {
            status: args.join(" ")
        };

        if(!language[message.guild.id] || language[message.guild.id].language === "english") {
            embed.setDescription("**Status set :**\n```" + args.join(" ") + "\n```")
            .setFooter(`Orederd by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
            message.channel.send(embed)
        } else if(language[message.guild.id].language === "french") {
            embed.setDescription("**Statut défini :**\n```" + args.join(" ") + "\n```")
            .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
            message.channel.send(embed)
        }
        fs.writeFile("./json/data/status.json", JSON.stringify(status), (err) => {if(err) console.log("[ERROR] " + err)});
    }
};