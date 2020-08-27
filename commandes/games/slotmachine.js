const { MessageEmbed, MessageAttachment } = require("discord.js");
const color = require("../../json/color.json");
const config = require("../../json/config.json");
const fs = require("fs");
let xp = JSON.parse(fs.readFileSync("./json/data/xp.json", "utf8"));

module.exports = {
    name: "slot-machine",
    aliases: ["sm", "slot", "slotmachine"],
    category: "",
    run: async (client, message, args) => {
        function Emoji(id) {return client.emojis.cache.get(id).toString()};

        let language = JSON.parse(fs.readFileSync("./json/data/language.json", "utf8"));

        let wins = JSON.parse(fs.readFileSync("./json/data/wins.json", "utf8"));
        let slots = ["735441345883406346", "735441345870823494", "735441345954578512"];
        let slot1 = slots[Math.floor(Math.random() * slots.length)];
        let slot2 = slots[Math.floor(Math.random() * slots.length)];
        let slot3 = slots[Math.floor(Math.random() * slots.length)];

        let date = new Date();

        let xpAdd = Math.floor(Math.random() * 200 + 1);
        let xpLost = Math.floor(Math.random() * 20 + 1);
        let cur = xp[message.author.id + message.guild.id]

        let gain = "``- " + xpLost + " xp``";

        let isvalidated = "❌";
        if(slot1 === slot2) {
            if(slot2 === slot3) {
                wins[message.author.id + message.guild.id] = {wins: wins[message.author.id + message.guild.id].wins + 1, defeats: wins[message.author.id + message.guild.id].defeats}
                isvalidated ="✅";
                gain = "``+ " + xpAdd + " xp``";
                cur = {xp: cur.xp + xpAdd};
            } else {
                wins[message.author.id + message.guild.id] = {wins: wins[message.author.id + message.guild.id].wins, defeats: wins[message.author.id + message.guild.id].defeats + 1}
                cur = {xp: cur.xp - xpLost};
            };
        } else {
            cur = {xp: cur.xp - xpLost};
        };
        fs.writeFile("./json/data/wins.json", JSON.stringify(wins), (err) => {if(err) console.log("[ERROR]" + err)});

        let embed = new MessageEmbed()
        .setTitle("**🎰 ✦ SLOT MACHINE :**")
        .setColor(color.main)
        .setDescription("**|** " + Emoji("735441761882734623") + " **|** " + Emoji("735441762176467014") + " **|** " + Emoji("735441762256027668") + " **|**")
        .setThumbnail(config.icon)
        .setTimestamp(date)
        if(!language[message.guild.id] || language[message.guild.id].language === "english") {
            embed.setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        } else if(language[message.guild.id].language === "french") {
            embed.setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        };

        let msg = await message.channel.send(embed)
        setTimeout(() => {
            embed.setDescription("**|** " + Emoji(slot1) + " **|** " + Emoji("735441762176467014") + " **|** " + Emoji("735441762256027668") + " **|**")
            msg.edit(embed)
            setTimeout(() => {
                embed.setDescription("**|** " + Emoji(slot1) + " **|** " + Emoji(slot2) + " **|** " + Emoji("735441762256027668") + " **|**")
                msg.edit(embed)
                setTimeout(() => {
                    if(!language[message.guild.id] || language[message.guild.id].language === "english") {
                        embed.setDescription("**|** " + Emoji(slot1) + " **|** " + Emoji(slot2) + " **|** " + Emoji(slot3) + " **|**\n\nResult : " + isvalidated + "\n\n" + gain)
                    } else if(language[message.guild.id].language === "french") {
                        embed.setDescription("**|** " + Emoji(slot1) + " **|** " + Emoji(slot2) + " **|** " + Emoji(slot3) + " **|**\n\nRésultat : " + isvalidated + "\n\n" + gain)
                    };
                    msg.edit(embed)
                }, 1000)
            }, 1000)
        }, 1000)
        fs.writeFile("./json/data/xp.json", JSON.stringify(xp), (err) => {if(err) console.log("[ERROR]" + err)});
    }
};