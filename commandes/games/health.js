const { MessageEmbed, MessageAttachment } = require("discord.js");
const color = require("../../json/color.json");
const config = require("../../json/config.json");
const fs = require("fs");

module.exports = {
    name: "health",
    aliases: ["hp"],
    category: "games",
    run: async (client, message, args) => {
        const search = args[0] ? args[0].toLowerCase() : message.author.id;
        const userID = message.guild.members.cache.get(search);
        const userUsername = message.guild.members.cache.filter(e => e.user.username.toLowerCase().includes(search)).first();
        const userNickname = message.guild.members.cache.filter(e => e.displayName.toLowerCase().includes(search)).first();
        const userDiscrim = message.guild.members.cache.filter(e => e.user.discriminator.toLowerCase().includes(search)).first();
        const userTag = message.guild.members.cache.filter(e => e.user.tag.toLowerCase().includes(search)).first();
        const userMention = message.guild.members.cache.get(search.replace(/\D/g, ""));
        let getUser = userID || userUsername || userNickname || userDiscrim || userTag || userMention;

        let date = new Date();

        let language = JSON.parse(fs.readFileSync("./json/data/language.json", "utf8"));
        let life = JSON.parse(fs.readFileSync("./json/data/life.json", "utf8"));
        if(!life[getUser.user.id + message.guild.id]) {
            life[getUser.user.id + message.guild.id] = {hp: 100};
        };
        let health = life[getUser.user.id + message.guild.id].hp;
        let pingeduser;

        if(!language[message.guild.id] || language[message.guild.id].language === "english") {
            if(getUser.user.id === message.author.id) {
                pingeduser = "You"
            } else {
                pingeduser = "<@" + getUser.user.id + ">"
            };
            let enlifeembed = new MessageEmbed()
            .setColor(color.main)
            .setTitle("**🔋 ✦ HEALTH**")
            .setDescription(pingeduser + " currently have **" + health + "** hp.")
            .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
            .setThumbnail(config.icon)
            .setTimestamp(date)
            message.channel.send(enlifeembed);
        } else if(language[message.guild.id].language === "french") {
            if(getUser.user.id === message.author.id) {
                pingeduser = "Vous avez"
            } else {
                pingeduser = "<@" + getUser.user.id + "> a"
            };
            let frlifeembed = new MessageEmbed()
            .setColor(color.main)
            .setTitle("**🔋 ✦ SANTEE**")
            .setDescription(pingeduser + " a actuellement **" + health + "** hp.")
            .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
            .setThumbnail(config.icon)
            .setTimestamp(date)
            
            message.channel.send(frlifeembed);
        }
    }
};