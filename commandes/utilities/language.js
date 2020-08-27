const { MessageEmbed, MessageAttachment } = require("discord.js");
const color = require("../../json/color.json");
const config = require("../../json/config.json");
const fs = require("fs");

module.exports = {
    name: "language",
    aliases: ["language-change","set-language", "l"],
    category: "utilities",
    run: async (client, message, args) => {
        if(args[0] != "english" && args[0] != "en" && args[0] != "francais" && args[0] != "fr" && args[0] != "français" && args[0] != "french" && args[0] != "anglais") {
            let nolanguage = new MessageEmbed()
            .setTitle('**💢 ✦ ERROR :**')
            .setColor(color.red)
            .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nYou should select a correct language (english, french).\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
            .setFooter('Be careful ^^', config.errorfooter)
            .setThumbnail(config.erroricon)
            message.channel.send(nolanguage)
        } else if (!args[0]) {
            let notxterrorembed = new MessageEmbed()
            .setTitle('**💢 ✦ ERREUR :**')
            .setColor(color.red)
            .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nYou must **write something** to perform this command (english, french).\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
            .setFooter('Be careful ^^', config.errorfooter)
            .setThumbnail(config.erroricon)
            message.channel.send(notxterrorembed)
        } else {
            let botlanguage = "";
            let language = JSON.parse(fs.readFileSync("./json/data/language.json", "utf8"));
            if(args[0] === "english" || args[0] === "en" || args[0] === "anglais" && language[message.guild.id].language != "english") {
                botlanguage = "english";
            } else if(args[0] === "fr" || args[0] === "francais" || args[0] === "français" || args[0] === "french" && language[message.guild.id].language != "french") {
                botlanguage = "french";
            } else {
                let alreadylanguage = new MessageEmbed()
                .setTitle('**💢 ✦ ERREUR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nYou can't choose **the same language** as you already have.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Be careful ^^', config.errorfooter)
                .setThumbnail(config.erroricon)
                message.channel.send(alreadylanguage)
                return;
            };
            language[message.guild.id] = {
                language: botlanguage
            };
            fs.writeFile("./json/data/language.json", JSON.stringify(language), (err) => {
                if(err) console.log("[ERROR]" + err);
            });
            let date = new Date();
            let embed = new MessageEmbed()
            .setColor(color.main)
            .setTitle("**🌐 ✦ NEW LANGUAGE :**")
            .setDescription("**My language has been changed**\n```css\nSelected language : " + botlanguage + "```")
            .setThumbnail(config.icon)
            .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
            .setTimestamp(date)
            message.channel.send(embed);
            console.log("[LOGS] Le serveur : " + message.guild.id + " (" + message.guild.name + ") à changé sa langue pour : " + botlanguage);
        }
    }
};