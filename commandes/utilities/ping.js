const {MessageEmbed} = require('discord.js');
const color = require("../../json/color.json");
const config = require("../../json/config.json");
const fs = require("fs");

module.exports = {
    name: "ping",
    category: "util",
    description: "Pour connaître mon ping",
    run: async(client, message, args) => {
        function Emoji(id) {
            return client.emojis.cache.get(id).toString()
        };

        let language = JSON.parse(fs.readFileSync("./json/data/language.json", "utf8"));
        let date = new Date();

        if(!language[message.guild.id] || language[message.guild.id].language === "english") {
            let rep = ["ping of the discord API", "discord API ping"]
            let randomrep = rep[Math.floor(Math.random() * rep.length)]
            let preembed = new MessageEmbed()
            .setColor(color.main)
            .setTitle('**💬 ✦ PING :**')
            .setDescription(Emoji("719176623068545115") + " " + 'Pinging...')
            .setThumbnail(config.icon)
            .setTimestamp(date)
            .setFooter(`Commandé par ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true, format: 'ping', size: 2048 })}`)
            message.channel.send(preembed).then(m => {
                let ping = m.createdTimestamp - message.createdTimestamp
                let embed = new MessageEmbed()
                .setColor(color.main)
                .setTitle('**💬 ✦ PING :**')
                .addField(Emoji("719174437311610960") + ' • Bot ping :', "``" + ping + "`` ms", true)
                .addField(Emoji("719175479768252447") + " • " + randomrep + " :", "``" + Math.round(client.ws.ping) + "`` ms", true)
                .setThumbnail(config.icon)
                .setTimestamp(date)
                .setFooter(`Ordered by ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true, format: 'ping', size: 2048 })}`)
                m.edit(embed)
            });
        } else if(language[message.guild.id].language === "french") {
            let rep = ["Ping de la discord API", "Ping de l'API de discord"]
            let randomrep = rep[Math.floor(Math.random() * rep.length)]
            let preembed = new MessageEmbed()
            .setColor(color.main)
            .setTitle('**💬 ✦ PING :**')
            .setDescription(Emoji("719176623068545115") + " " + 'Pinging...')
            .setThumbnail(config.icon)
            .setFooter(`Commandé par ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true, format: 'ping', size: 2048 })}`)
            .setTimestamp(date)
            message.channel.send(preembed).then(m => {
                let ping = m.createdTimestamp - message.createdTimestamp
                let embed = new MessageEmbed()
                .setColor(color.main)
                .setTitle('**💬 ✦ PING :**')
                .addField(Emoji("719174437311610960") + ' • Ping du bot :', "``" + ping + "`` ms", true)
                .addField(Emoji("719175479768252447") + " • " + randomrep + " :", "``" + Math.round(client.ws.ping) + "`` ms", true)
                .setThumbnail(config.icon)
                .setFooter(`Commandé par ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true, format: 'ping', size: 2048 })}`)
                .setTimestamp(date)
                m.edit(embed)
            });
        };
    }
};