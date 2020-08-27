const { MessageEmbed } = require("discord.js");
const color = require("../../json/color.json");
const config = require("../../json/config.json");
const fs = require("fs");
const prefixes = JSON.parse(fs.readFileSync("./json/data/prefixes.json", "utf8"));

module.exports = {
    name: "prefix",
    aliases: ["prefix-change", "p", "set-prefix"],
    category: "utilities",
    run: async (client, message, args) => {
        let language = JSON.parse(fs.readFileSync("./json/data/language.json", "utf8"));
        let date = new Date();
        if(!prefixes[message.guild.id]) {
            prefixes[message.guild.id] = {
                prefixes: args[0]
            };
        };

        let oldPrefix = prefixes[message.guild.id].prefixes;
        let newPrefix = args[0];

        if(newPrefix === "default" || newPrefix === "def" || newPrefix === "d") {
            prefixes[message.guild.id] = {
                prefixes: config.prefix
            }
            newPrefix = "~~"
        } else {
            prefixes[message.guild.id] = {
                prefixes: newPrefix
            };
        };
        fs.writeFile("./json/data/prefixes.json", JSON.stringify(prefixes), (err) => {if(err) console.log("[ERROR]" + err)});

        if (!language[message.guild.id] || language[message.guild.id].language === "english") {
            if (!message.member.hasPermission("MANAGE_SERVER")) {
                let ennopermsembed = new MessageEmbed()
                .setTitle('**💢 ✦ ERROR :**')
                .setColor(color.main)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\n```diff\n- You don't have the permission to perform this command.\n```\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Be careful ^^', config.icon)
                .setThumbnail(config.erroricon)
                .setTimestamp(date)
                message.channel.send(ennopermsembed)
                return
            } else if (!args[0]) {
                let ennotxterrorembed = new MessageEmbed()
                .setTitle('**💢 ✦ ERROR :**')
                .setColor(color.main)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\n```diff\n- You must write something to perform this command.\n```\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Be careful ^^', config.icon)
                .setThumbnail(config.erroricon)
                message.channel.send(ennotxterrorembed)
                return
            } else if (args[0].length >= 3 && args[0] != "default" && args[0] != "def" && args[0] != "d") {
                let entoolongembed = new MessageEmbed()
                .setTitle('**💢 ✦ ERROR :**')
                .setColor(color.main)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\n```diff\n- Your prefix can't reach more than 3 characters.\n```\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Be careful ^^', config.icon)
                .setThumbnail(config.erroricon)
                .setTimestamp(date)
                message.channel.send(entoolongembed)
                return
            }else if (oldPrefix === args[0]) {
                let ensameprefixembed = new MessageEmbed()
                .setTitle('**💢 ✦ ERROR :**')
                .setColor(color.main)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\n```diff\n- You can't set the same prefix that before.\n```\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Be careful ^^', config.icon)
                .setThumbnail(config.erroricon)
                .setTimestamp(date)
                message.channel.send(ensameprefixembed)
                return
            } else {
                let enembed = new MessageEmbed()
                .setColor(color.main)
                .setTitle("**#️⃣ ✦ NEW PREFIX :**")
                .setDescription("**The prefix has been changed**\n```fix\nNew prefix : " + newPrefix + "```")
                .setThumbnail(config.icon)
                .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setTimestamp(date)
                message.channel.send(enembed);
                console.log("[LOGS] Le serveur : " + message.guild.id + " (" + message.guild.name + ") à changé son préfixe pour : " + newPrefix);
            }
        } else if(language[message.guild.id].language === "french"){
            if (!message.member.hasPermission("MANAGE_SERVER")) {
                let frnopermsembed = new MessageEmbed()
                .setTitle('**💢 ✦ ERREUR :**')
                .setColor(color.main)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\n```diff\n- Vous n'avez pas la permission d'utiliser cette commande.\n```\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Soit attentif ^^', config.icon)
                .setThumbnail(config.erroricon)
                .setTimestamp(date)
                message.channel.send(frnopermsembed)
                return
            } else if (!args[0]) {
                let frnotxterrorembed = new MessageEmbed()
                .setTitle('**💢 ✦ ERREUR :**')
                .setColor(color.main)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\n```diff\n- Vous devez **écrire quelque chose** pour pouvoir utiliser cette commande.\n```\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Soit attentif ^^', config.icon)
                .setThumbnail(config.erroricon)
                .setTimestamp(date)
                message.channel.send(frnotxterrorembed)
                return
            } else if (args[0].length >= 3 && args[0] != "default" && args[0] != "def" && args[0] != "d") {
                let frtoolongembed = new MessageEmbed()
                .setTitle('**💢 ✦ ERREUR :**')
                .setColor(color.main)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\n```diff\n- Vôtre préfixe ne peut pas atteindre plus de 3 caractères.\n```\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Soit attentif ^^', config.icon)
                .setThumbnail(config.erroricon)
                .setTimestamp(date)
                message.channel.send(frtoolongembed)
                return
            } else if (oldPrefix === args[0]) {
                let frsameprefixembed = new MessageEmbed()
                .setTitle('**💢 ✦ ERREUR :**')
                .setColor(color.main)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\n```diff\n- Vous ne pouvez pas mettre le même préfixe qu'avant.\n```\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Soit attentif ^^', config.icon)
                .setThumbnail(config.erroricon)
                .setTimestamp(date)
                message.channel.send(frsameprefixembed)
                return
            } else {
                let frembed = new MessageEmbed()
                .setColor(color.main)
                .setTitle("**#️⃣ ✦ NOUVEAU PREFIXE :**")
                .setDescription("**Le préfixe à été changé**\n```fix\nNouveau préfixe : " + newPrefix + "```")
                .setThumbnail(config.icon)
                .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setTimestamp(date)
                message.channel.send(frembed);
                console.log("[LOGS] Le serveur : " + message.guild.id + " (" + message.guild.name + ") à changé son préfixe pour : " + newPrefix);
            };
        };
    }
};