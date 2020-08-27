const { Discord, MessageEmbed } = require("discord.js");
const color = require("../../json/color.json");
const config = require("../../json/config.json");
const fs = require("fs");

module.exports = {
    name: "rps",
    aliases: ["rock-paper-scissors", "rockpaperscissors"],
    category: "games",
    run: async(client, message, args) => {
        let language = JSON.parse(fs.readFileSync("./json/data/language.json", "utf8"));
        let rpsID = JSON.parse(fs.readFileSync("./json/data/rps.json", "utf8"));
        rpsID[message.author.id] = {
            theid: message.id
        };
        fs.writeFile("./json/data/rps.json", JSON.stringify(rpsID), (err) => {if(err) console.log("[ERROR]" + err)});

        if(!language[message.guild.id] || language[message.guild.id].language === "english") {
            let enembed = new MessageEmbed()
            .setColor(color.main)
            .setTitle('**<:rock:716601680057204757> ✦ ROCK PAPER SCISSORS**')
            .setDescription('**Select an emote**\nYou' + "'"+ 've the choice :')
            .addField("•═══─────══ • ✧ • ══─────═══•", "** **")
            .addField("Rock : <:rock:716601680057204757>", "Beats scissors <:scissors_emo:716604212238221373>", true)
            .addField("Paper : <:leave_wind:716603858268323841>", "Beats the rock <:rock:716601680057204757>", true)
            .addField("Scissors : <:scissors_emo:716604212238221373>", "Beats the paper <:leave_wind:716603858268323841>", true)
            .addField("•═══─────══ • ✧ • ══─────═══•", "** **")
            .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
            .setThumbnail(config.icon)
            message.channel.send(enembed).then(msg => {
                msg.react("716601680057204757").then(r => {
                    msg.react("716603858268323841").then(r => {
                        msg.react("716604212238221373")
                    });
                });
            });
        } else if(language[message.guild.id].language === "french") {
            let frembed = new MessageEmbed()
            .setColor(color.main)
            .setTitle('**<:rock:716601680057204757> ✦ PIERRE FEUILLE CISEAUX**')
            .setDescription('**Choisis une réaction**\nVous avez le choix entre :')
            .addField("•═══─────══ • ✧ • ══─────═══•", "** **")
            .addField("Pierre : <:rock:716601680057204757>", "Bat les ciseaux <:scissors_emo:716604212238221373>", true)
            .addField("Feuille : <:leave_wind:716603858268323841>", "Bat la pierre <:rock:716601680057204757>", true)
            .addField("Ciseaux : <:scissors_emo:716604212238221373>", "Bat la feuille <:leave_wind:716603858268323841>", true)
            .addField("•═══─────══ • ✧ • ══─────═══•", "** **")
            .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
            .setThumbnail(config.icon)
            message.channel.send(frembed).then(msg => {
                msg.react("716601680057204757").then(r => {
                    msg.react("716603858268323841").then(r => {
                        msg.react("716604212238221373")
                    });
                });
            });
        };
    }
};