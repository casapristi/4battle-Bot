const { MessageEmbed, MessageAttachment } = require("discord.js");
const color = require("../../json/color.json");
const config = require("../../json/config.json");
const fs = require("fs");

module.exports = {
    name: "status",
    category: "utilities",
    run: async (client, message, args) => {
        let language = JSON.parse(fs.readFileSync("./json/data/language.json", "utf8"));
        let status = JSON.parse(fs.readFileSync("./json/data/status.json", "utf8"));

        let date = new Date();

        const search = args[0] ? args[0].toLowerCase() : message.author.id;
        const userID = message.guild.members.cache.get(search);
        const userUsername = message.guild.members.cache.filter(e => e.user.username.toLowerCase().includes(search)).first();
        const userNickname = message.guild.members.cache.filter(e => e.displayName.toLowerCase().includes(search)).first();
        const userDiscrim = message.guild.members.cache.filter(e => e.user.discriminator.toLowerCase().includes(search)).first();
        const userTag = message.guild.members.cache.filter(e => e.user.tag.toLowerCase().includes(search)).first();
        const userMention = message.guild.members.cache.get(search.replace(/\D/g, ""));
        let getUser = userID || userUsername || userNickname || userDiscrim || userTag || userMention;

        let embed = new MessageEmbed()
        .setColor(color.main)
        .setTitle("👁️ ✦ STATUS :")
        .setThumbnail(config.icon)
        .setTimestamp(date)

        if(!language[message.guild.id] || language[message.guild.id].language === "english") {
            if(status[getUser.user.id + message.guild.id]) {
                embed.setDescription("The status of **"+ getUser.user.username + "** :\n```\n" + status[getUser.user.id + message.guild.id].status + "\n```")
                .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                message.channel.send(embed)
            } else {
                let nostatsuembed = new MessageEmbed()
                .setTitle('**💢 ✦ ERREUR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nThis user havn't any status.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Be careful ^^', config.icon)
                .setThumbnail(config.erroricon)
                message.channel.send(nostatsuembed)
            };
        } else if(language[message.guild.id].language === "french") {
            if(status[getUser.user.id + message.guild.id]) {
                embed.setDescription("Le status de **"+ getUser.user.username + "** :\n```\n" + status[getUser.user.id + message.guild.id].status + "\n```")
                .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                message.channel.send(embed)
            } else {
                let nostatsuembed = new MessageEmbed()
                .setTitle('**💢 ✦ ERREUR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nCette personne n'as pas de statut.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Soit attentif ^^', config.icon)
                .setThumbnail(config.erroricon)
                message.channel.send(nostatsuembed)
            };
        };
    }
};