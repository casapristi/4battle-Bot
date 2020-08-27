const {MessageEmbed} = require('discord.js');
const color = require("../../json/color.json");
const config = require("../../json/config.json");
const fs = require("fs");

module.exports = {
    name: "avatar",
    category: "util",
    run: async(client, message, args) => {
        let language = JSON.parse(fs.readFileSync("./json/data/language.json", "utf8"));
        const search = args[0] ? args[0].toLowerCase() : message.author.id;
        const userID = message.guild.members.cache.get(search);
        const userUsername = message.guild.members.cache.filter(e => e.user.username.toLowerCase().includes(search)).first();
        const userNickname = message.guild.members.cache.filter(e => e.displayName.toLowerCase().includes(search)).first();
        const userDiscrim = message.guild.members.cache.filter(e => e.user.discriminator.toLowerCase().includes(search)).first();
        const userTag = message.guild.members.cache.filter(e => e.user.tag.toLowerCase().includes(search)).first();
        const userMention = message.guild.members.cache.get(search.replace(/\D/g, ""));
        let getUser = userID || userUsername || userNickname || userDiscrim || userTag || userMention;
        const embed = new MessageEmbed()
        if(!language[message.guild.id] || language[message.guild.id].language === "english") {
            embed.setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
            .setTitle(`🖼️ ✦ AVATAR OF ${getUser.user.tag} :`)
        } else if(language[message.guild.id].language === "french") {
            embed.setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
            .setTitle(`🖼️ ✦ AVATAR DE ${getUser.user.tag} :`)
        };
        embed.setColor(color.main)
        .setImage(getUser.user.displayAvatarURL({size: 2048, dynamic: true, fromat: "png"}))
        return message.channel.send(embed).disableMentions;
    }
};