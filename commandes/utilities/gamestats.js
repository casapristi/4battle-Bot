const { MessageEmbed, MessageAttachment } = require("discord.js");
const color = require("../../json/color.json");
const config = require("../../json/config.json");
const fs = require("fs");

module.exports = {
    name: "game-satats",
    aliases: ["gs", "gamestats"],
    category: "",
    run: async (client, message, args) => {
        let language = JSON.parse(fs.readFileSync("./json/data/language.json", "utf8"));
        let wins = JSON.parse(fs.readFileSync("./json/data/wins.json", "utf8"));
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
        .setTitle("**📈 ✦ GAME STATS :**")
        .setThumbnail(config.icon)
        .setTimestamp(date)

        if(!language[message.guild.id] || language[message.guild.id].language === "english") {

            embed.setDescription("**Game stats of " + getUser.user.username + " :**")
            .addField("Games played", wins[getUser.user.id + message.guild.id].wins + wins[getUser.user.id + message.guild.id].defeats, true)
            .addField("Wins", wins[getUser.user.id + message.guild.id].wins, true)
            .addField("Defeats", wins[getUser.user.id + message.guild.id].defeats, true)
            .addField("Ratio", Math.round(wins[getUser.user.id + message.guild.id].wins / wins[getUser.user.id + message.guild.id].defeats * 10) / 10, true)
            .addField("Game skill", Math.round((wins[getUser.user.id + message.guild.id].wins / wins[getUser.user.id + message.guild.id].defeats) * 2056) / 10, true)
            .addField("Victory percentage", Math.round(wins[getUser.user.id + message.guild.id].wins / (wins[getUser.user.id + message.guild.id].wins + wins[getUser.user.id + message.guild.id].defeats) * 10000) / 100 + "%", true)
            .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
            message.channel.send(embed);

        } else if(language[message.guild.id].language === "french") {

            embed.setDescription("**Statistiques de jeu de " + getUser.user.username + " :**")
            .addField("Parties jouées", wins[getUser.user.id + message.guild.id].wins + wins[getUser.user.id + message.guild.id].defeats, true)
            .addField("Victoires", wins[getUser.user.id + message.guild.id].wins, true)
            .addField("Défaites", wins[getUser.user.id + message.guild.id].defeats, true)
            .addField("Ratio", Math.round(wins[getUser.user.id + message.guild.id].wins / wins[getUser.user.id + message.guild.id].defeats * 10) / 10, true)
            .addField("Game skill", Math.round((wins[getUser.user.id + message.guild.id].wins / wins[getUser.user.id + message.guild.id].defeats) * 2056) / 10, true)
            .addField("Pourcentage de victoires", Math.round(wins[getUser.user.id + message.guild.id].wins / (wins[getUser.user.id + message.guild.id].wins + wins[getUser.user.id + message.guild.id].defeats) * 10000) / 100 + "%", true)
            .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
            message.channel.send(embed);

        };
    }
};