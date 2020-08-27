const { MessageEmbed, MessageAttachment } = require("discord.js");
const color = require("../../json/color.json");
const config = require("../../json/config.json");
const fs = require("fs");

module.exports = {
    name: "predict-dice",
    aliases: ["predict", "pd"],
    category: "games",
    run: async (client, message, args) => {
        let wins = JSON.parse(fs.readFileSync("./json/data/wins.json", "utf8"));
        let language = JSON.parse(fs.readFileSync("./json/data/language.json", "utf8"));
        let date = new Date();

        let numberlist = ["1", "2", "3", "4", "5", "6"]
        let randomnumber = numberlist[Math.floor(Math.random() * numberlist.length)];

        if(!language[message.guild.id] || language[message.guild.id].language === "english") {
            if(!args[0]) {
                let ennotequ = new MessageEmbed()
                .setTitle('**💢 ✦ ERROR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nYou must **write something** to preform this command.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Be careful ^^', config.errorfooter)
                .setThumbnail(config.erroricon)
                .setTimestamp(date)
                message.channel.send(ennotequ)
                return;
            } else if(args[0] != "1" && args[0] != "2" && args[0] != "3" && args[0] != "4" && args[0] != "5" && args[0] != "6") {
                let ennotequal = new MessageEmbed()
                .setTitle('**💢 ✦ ERROR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nYou must **write something correct** to preform this command [1/2/3/4/5/6].\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Be careful ^^', config.errorfooter)
                .setThumbnail(config.erroricon)
                .setTimestamp(date)
                message.channel.send(ennotequal)
                return;
            } else if(args[0] === randomnumber){
                let embed = new MessageEmbed()
                .setColor(color.main)
                .setTitle("**🎲 ✦ PREDICT DICE :**")
                .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setThumbnail(config.icon)
                .setTimestamp(date)
                .setDescription("**You win !**\n\nThe dice fell on " + randomnumber + ".")
                message.channel.send(embed);
                wins[message.author.id + message.guild.id] = {wins: (wins[message.author.id + message.guild.id].wins + 1), defeats: wins[message.author.id + message.guild.id].defeats}
            } else {
                let embed = new MessageEmbed()
                .setColor(color.main)
                .setTitle("**🎲 ✦ PREDICT DICE :**")
                .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setThumbnail(config.icon)
                .setTimestamp(date)
                .setDescription("**You lose !**\n\nThe dice fell on " + randomnumber + ".")
                message.channel.send(embed);
                wins[message.author.id + message.guild.id] = {wins: wins[message.author.id + message.guild.id].wins, defeats: (wins[message.author.id + message.guild.id].defeats + 1)}
            };
        } else if(language[message.guild.id].language === "french") {
            if(!args[0]) {
                let frnotequal = new MessageEmbed()
                .setTitle('**💢 ✦ ERREUR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nVous devez écrire **quelque chose** pour pouvoir utiliser cette commande.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Soit attentif ^^', config.errorfooter)
                .setThumbnail(config.erroricon)
                .setTimestamp(date)
                message.channel.send(frnotequal)
                return;
            } else if(args[0] != "1" && args[0] != "2" && args[0] != "3" && args[0] != "4" && args[0] != "5" && args[0] != "6") {
                let frnotequal = new MessageEmbed()
                .setTitle('**💢 ✦ ERREUR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nVous devez écrire **quelque chose de correct** pour pouvoir utiliser cette commande.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Soit attentif ^^', config.errorfooter)
                .setThumbnail(config.erroricon)
                .setTimestamp(date)
                message.channel.send(frnotequal)
                return;
            } else if(args[0] === randomnumber){
                let embed = new MessageEmbed()
                .setColor(color.main)
                .setTitle("**🎲 ✦ PREDICT DICE :**")
                .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setThumbnail(config.icon)
                .setTimestamp(date)
                .setDescription("**Vous avez gagné !**\n\nLe dé est tombé sur " + randomnumber + ".")
                message.channel.send(embed);
                wins[message.author.id + message.guild.id] = {wins: (wins[message.author.id + message.guild.id].wins + 1), defeats: wins[message.author.id + message.guild.id].defeats}
            } else {
                let embed = new MessageEmbed()
                .setColor(color.main)
                .setTitle("**🎲 ✦ PREDICT DICE :**")
                .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setThumbnail(config.icon)
                .setTimestamp(date)
                .setDescription("**Vous avez perdu !**\n\nLe dé est tombé sur " + randomnumber + ".")
                message.channel.send(embed);
                wins[message.author.id + message.guild.id] = {wins: wins[message.author.id + message.guild.id].wins, defeats: (wins[message.author.id + message.guild.id].defeats + 1)}
            };
        };
        fs.writeFile("./json/data/wins.json", JSON.stringify(wins), (err) => {if(err) console.log("[ERROR]" + err)});
    }
};