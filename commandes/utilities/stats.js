const { MessageEmbed, MessageAttachment, Message } = require("discord.js");
const color = require("../../json/color.json");
const config = require("../../json/config.json");
const fs = require("fs");
const moment = require("moment");
const xp = require("../../json/data/xp.json");

module.exports = {
    name: "stats",
    aliases: ["userstats", "info", "userinfo", "user-stats", "user-info"],
    category: "",
    run: async (client, message, args) => {
        let wins = JSON.parse(fs.readFileSync("./json/data/wins.json", "utf8"));
        let language = JSON.parse(fs.readFileSync("./json/data/language.json", "utf8"));

        let user = message.mentions.users.first() || message.author;


        if(!language[message.guild.id] || language[message.guild.id].language === "english") {
            if(user.presence.status === "dnd") user.presence.status = "Do Not Disturb"
            if(user.presence.status === "idle") user.presence.status = "Idle"
            if(user.presence.status === "offline") user.presence.status = "Offline"
            if(user.presence.status === "online") user.presence.status = "Online"

            function game() {
                let game;
                if(user.presence.activities.length >= 1) game = `${user.presence.activities[0].type} ${user.presence.activities[0].name}`;
                else if(user.presence.activities.length < 1) game = "None";
                return game;
            }

            let x = Date.now() - user.createdAt;
            let y = Date.now() - message.guild.members.cache.get(user.id).joinedAt;
            let created = Math.floor(x / 86400000);
            let joined = Math.floor(y / 86400000);

            const member = message.guild.member(user);
            let nickname = member.nickname !== undefined && member.nickname !== null ? member.nickname : "None";
            let createdate = moment.utc(user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
            let joindate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
            let status = user.presence.status;
            let avatar = user.displayAvatarURL({ size: 2048 });

            const embed = new MessageEmbed()
            .setThumbnail(avatar)
            .setTimestamp()
            .setTitle("**📊 ✦ STATS OF " + user.tag + " :**")
            .setColor(color.main)
            .addField("ID", user.id, true)
            .addField("Nickname", nickname, true)
            .addField("Created at", `${createdate} \nsince ${created} day(s) ago`, true)
            .addField("Joined at", `${joindate} \nsince ${joined} day(s) ago`, true)
            .addField("Status", status, true)
            .addField("Game", game(), true)
            .addField("XP", xp[user.id + message.guild.id].xp, true)
            .addField("Wins", wins[user.id + message.guild.id].wins, true)
            .addField("Games skill", Math.round((wins[user.id + message.guild.id].wins / wins[user.id + message.guild.id].defeats) * 2056) / 10, true)
            .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
            message.channel.send(embed)

        } else if(language[message.guild.id].language === "french") {
            if(user.presence.status === "dnd") user.presence.status = "Ne pas déranger"
            if(user.presence.status === "idle") user.presence.status = "Abscent"
            if(user.presence.status === "offline") user.presence.status = "Hors-ligne"
            if(user.presence.status === "online") user.presence.status = "En-ligne"

            function game() {
                let game;
                if(user.presence.activities.length >= 1) game = `${user.presence.activities[0].type} ${user.presence.activities[0].name}`;
                else if(user.presence.activities.length < 1) game = "None";
                return game;
            }

            let x = Date.now() - user.createdAt;
            let y = Date.now() - message.guild.members.cache.get(user.id).joinedAt;
            let created = Math.floor(x / 86400000);
            let joined = Math.floor(y / 86400000);

            const member = message.guild.member(user);
            let nickname = member.nickname !== undefined && member.nickname !== null ? member.nickname : "None";
            let createdate = moment.utc(user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
            let joindate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
            let status = user.presence.status;
            let avatar = user.displayAvatarURL({ size: 2048 });

            const embed = new MessageEmbed()
            .setThumbnail(avatar)
            .setTimestamp()
            .setTitle("**📊 ✦ SATATISTIQUES DE " + user.tag + " :**")
            .setColor(color.main)
            .addField("ID", user.id, true)
            .addField("Pseudonyme", nickname, true)
            .addField("Compte crée le", `${createdate} \nsince ${created} day(s) ago`, true)
            .addField("Serveur rejoins le", `${joindate} \nsince ${joined} day(s) ago`, true)
            .addField("Statut", status, true)
            .addField("Joue à", game(), true)
            .addField("XP", xp[user.id + message.guild.id].xp, true)
            .addField("Victoires", wins[user.id + message.guild.id].wins, true)
            .addField("Skill de jeu", Math.round((wins[user.id + message.guild.id].wins / wins[user.id + message.guild.id].defeats) * 2056) / 10, true)
            .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
            message.channel.send(embed)
        };
    }
};