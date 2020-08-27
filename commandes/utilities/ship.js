const { MessageEmbed, MessageAttachment, Message } = require("discord.js");
const color = require("../../json/color.json");
const config = require("../../json/config.json");
const fs = require("fs");

module.exports = {
    name: "ship",
    aliases: ["relationship", "rs"],
    category: "games",
    run: async (client, message, args) => {

        let language = JSON.parse(fs.readFileSync("./json/data/language.json", "utf8"));
        let ship = JSON.parse(fs.readFileSync("./json/data/ship.json", "utf8"));
        let date = new Date();
        let relationstate;
        try {
        const member = message.mentions.members.first()

        if(!ship[message.author.id + message.guild.id]) {
            ship[message.author.id + message.guild.id] = {
                ship: "null",
                propose: "null",
                state: "single"
            }
        }
        if(!ship[member.user.id + message.guild.id]) {
            ship[member.user.id + message.guild.id] = {
                ship: "null",
                propose: "null",
                state: "single"
            }
        }
        
        if(!language[message.guild.id] || language[message.guild.id].language === "english") {
            if(!member || !args[1]) {
                let ennomention = new MessageEmbed()
                .setTitle('**💢 ✦ ERROR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nYou must **mention someone** to perform this command.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Be careful ^^', config.errorfooter)
                .setThumbnail(config.erroricon)
                .setTimestamp(date);
                message.channel.send(ennomention);
            } else if(args[0] != "send" && args[0] != "accept" && args[0] != "decline" && args[0] != "stop" && args[0] != "state") {
                let ennocorrectstate = new MessageEmbed()
                .setTitle('**💢 ✦ ERROR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nYou must **write something correct** to perform this command. (send, accept, decline, stop, state)\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Be careful ^^', config.errorfooter)
                .setThumbnail(config.erroricon)
                .setTimestamp(date);
                message.channel.send(ennocorrectstate);
            } else if(args[0] === "state") {
                if(ship[member.user.id + message.guild.id].state === "single") {
                    relationstate = "single"
                } else if(ship[member.user.id + message.guild.id].state === "couple" && ship[member.user.id + message.guild.id].ship != message.author.id){
                    relationstate = "in couple** with <@" + ship[member.user.id + message.guild.id].ship + ">.** "
                } else {
                    relationstate = "in couple** with **you**.** "
                };
                let enstate = new MessageEmbed()
                .setColor(color.main)
                .setTitle("**💘 ✦ RELATIONSHIP :**")
                .setDescription("** **\n<@" + member.user.id + "> is currently **" + relationstate + "**")
                .setThumbnail(config.icon)
                .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setTimestamp(date);
                message.channel.send(enstate)
            } else if(args[0] === "send" && ship[message.author.id + message.guild.id].ship === "null") {
                let endec = new MessageEmbed()
                .setColor(color.main)
                .setTitle("**💘 ✦ RELATIONSHIP :**")
                .setDescription("<@" + message.author.id + "> want to have a relationship with <@" + member.user.id + "> 💓")
                .setThumbnail(config.icon)
                .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setTimestamp(date);
                message.channel.send(endec)
                ship[message.author.id + message.guild.id] = {ship: ship[message.author.id + message.guild.id].ship, propose: member.user.id, state: ship[message.author.id + message.guild.id].state}
            } else if(args[0] === "accept" && ship[member.user.id + message.guild.id].propose === message.author.id && ship[message.author.id + message.guild.id].ship === "null") {
                let enship = new MessageEmbed()
                .setColor(color.main)
                .setTitle("**💘 ✦ RELATIONSHIP :**")
                .setDescription("<@" + message.author.id + "> is now in relationship with <@" + member.user.id + "> ❤️")
                .setThumbnail(config.icon)
                .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setTimestamp(date);
                let enshipreact = await message.channel.send(enship)
                await enshipreact.react("❤️")
                ship[member.user.id + message.guild.id] = {ship: message.author.id, propose: "null", state: "couple"}
                ship[message.author.id + message.guild.id] = {ship: member.user.id, propose: "null", state: "couple"}
            } else if(args[0] === "accept" && ship[member.user.id + message.guild.id].propose != message.author.id) {
                let enalreadyrelation = new MessageEmbed()
                .setTitle('**💢 ✦ ERROR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nYou **can't accept a relationship** if he did't declarate to you.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Be careful ^^', config.errorfooter)
                .setThumbnail(config.erroricon)
                .setTimestamp(date);
                message.channel.send(enalreadyrelation);
            } else if(args[0] === "accept" && ship[message.author.id + message.guild.id].ship != "null") {
                let enantoher = new MessageEmbed()
                .setTitle('**💢 ✦ ERROR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nYou **can't accept a relationship** if you're with another person.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Be careful ^^', config.errorfooter)
                .setThumbnail(config.erroricon)
                .setTimestamp(date);
                message.channel.send(enantoher);
            } else if(args[0] === "stop" && ship[message.author.id + message.guild.id].ship === "null") {
                let enstopwrongrelation = new MessageEmbed()
                .setTitle('**💢 ✦ ERROR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nYou **can't stop** a non-esxitant relationship .\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Be careful ^^', config.errorfooter)
                .setThumbnail(config.erroricon)
                .setTimestamp(date);
                message.channel.send(enstopwrongrelation);
            } else if(args[0] === "stop" && ship[message.author.id + message.guild.id].ship != "null") {
                let enstop = new MessageEmbed()
                .setColor(color.main)
                .setTitle("**💘 ✦ RELATIONSHIP :**")
                .setDescription("<@" + message.author.id + "> has quit <@" + member.user.id + "> 💔")
                .setThumbnail(config.icon)
                .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setTimestamp(date);
                ship[member.user.id + message.guild.id] = {ship: "null", propose: "null", state: "single"}
                ship[message.author.id + message.guild.id] = {ship: "null", propose: "null", state: "single"}
                message.channel.send(enstop)
            } else if(args[0] === "decline" && ship[message.author.id + message.guild.id].propose === "null") {
                let endeclienembed = new MessageEmbed()
                .setColor(color.main)
                .setDescription("<@" + member.user.id + "> got blown off by <@" + message.author.id + ">")
                .setThumbnail(config.icon)
                .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setTimestamp(date);
                message.channel.send(endeclienembed);
                ship[member.user.id + message.guild.id] = {ship: "null", propose: "null", state: "single"}
            };
        } else if(language[message.guild.id].language === "french") {
            if(!member || !args[1]) {
                let frnomention = new MessageEmbed()
                .setTitle('**💢 ✦ ERREUR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nVous devez **mentionner quelqu'un** pour pouvoir utiliser cette commande.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Soit attentif ^^', config.errorfooter)
                .setThumbnail(config.erroricon)
                .setTimestamp(date);
                message.channel.send(frnomention);
            } else if(args[0] != "send" && args[0] != "accept" && args[0] != "decline" && args[0] != "stop" && args[0] != "state") {
                let frnocorrectstate = new MessageEmbed()
                .setTitle('**💢 ✦ ERREUR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nVous devez **écrire quelque chose de correct** pour pouvoir utiliser cette commande. (send, accept, decline, stop, state)\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Soit attentif ^^', config.errorfooter)
                .setThumbnail(config.erroricon)
                .setTimestamp(date);
                message.channel.send(frnocorrectstate);
            } else if(args[0] === "state") {
                if(ship[member.user.id + message.guild.id].state === "single") {
                    relationstate = "célibataire"
                } else if(ship[member.user.id + message.guild.id].state === "couple" && ship[member.user.id + message.guild.id].ship != message.author.id){
                    relationstate = "en couple** avec <@" + ship[member.user.id + message.guild.id].ship + ">.** "
                } else {
                    relationstate = "en couple** avec **toi**.** "
                };
                let frstate = new MessageEmbed()
                .setColor(color.main)
                .setTitle("**💘 ✦ RELATIONSHIP :**")
                .setDescription("** **\n<@" + member.user.id + "> est actuellement **" + relationstate + "**")
                .setThumbnail(config.icon)
                .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setTimestamp(date);
                message.channel.send(frstate)
            } else if(args[0] === "send" && ship[message.author.id + message.guild.id].ship === "null") {
                let frdec = new MessageEmbed()
                .setColor(color.main)
                .setTitle("**💘 ✦ RELATIONSHIP :**")
                .setDescription("<@" + message.author.id + "> a fait une déclaration amoureuse à <@" + member.user.id + "> 💓")
                .setThumbnail(config.icon)
                .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setTimestamp(date);
                message.channel.send(frdec)
                ship[message.author.id + message.guild.id] = {ship: ship[message.author.id + message.guild.id].ship, propose: member.user.id, state: ship[message.author.id + message.guild.id].state}
            } else if(args[0] === "accept" && ship[member.user.id + message.guild.id].propose === message.author.id && ship[message.author.id + message.guild.id].ship === "null") {
                let frship = new MessageEmbed()
                .setColor(color.main)
                .setTitle("**💘 ✦ RELATIONSHIP :**")
                .setDescription("<@" + message.author.id + "> est à présent en couple avec <@" + member.user.id + "> ❤️")
                .setThumbnail(config.icon)
                .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setTimestamp(date);
                let frshipreact = await message.channel.send(frship)
                await frshipreact.react("❤️")
                ship[member.user.id + message.guild.id] = {ship: message.author.id, propose: "null", state: "couple"}
                ship[message.author.id + message.guild.id] = {ship: member.user.id, propose: "null", state: "couple"}
            } else if(args[0] === "accept" && ship[member.user.id + message.guild.id].propose != message.author.id) {
                let fralreadyrelation = new MessageEmbed()
                .setTitle('**💢 ✦ ERREUR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nVous ne pouvez pas accepter une déclaration fantôme.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Soit attentif ^^', config.errorfooter)
                .setThumbnail(config.erroricon)
                .setTimestamp(date);
                message.channel.send(fralreadyrelation);
            } else if(args[0] === "accept" && ship[message.author.id + message.guild.id].ship != "null") {
                let frantoher = new MessageEmbed()
                .setTitle('**💢 ✦ ERREUR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nVous ne pouvez pas accepter une déclaration si vous êtes avec quelqu'un d'autre.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Soit attentif ^^', config.errorfooter)
                .setThumbnail(config.erroricon)
                .setTimestamp(date);
                message.channel.send(frantoher);
            } else if(args[0] === "stop" && ship[message.author.id + message.guild.id].ship === "null") {
                let frstopwrongrelation = new MessageEmbed()
                .setTitle('**💢 ✦ ERREUR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nVous ne pouvez pas stopper une relation inexistante .\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Soit attentif ^^', config.errorfooter)
                .setThumbnail(config.erroricon)
                .setTimestamp(date);
                message.channel.send(frstopwrongrelation);
            } else if(args[0] === "stop" && ship[message.author.id + message.guild.id].ship != "null") {
                let frstop = new MessageEmbed()
                .setColor(color.main)
                .setTitle("**💘 ✦ RELATIONSHIP :**")
                .setDescription("<@" + message.author.id + "> à quitté <@" + member.user.id + "> 💔")
                .setThumbnail(config.icon)
                .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setTimestamp(date);
                ship[member.user.id + message.guild.id] = {ship: "null", propose: "null", state: "single"}
                ship[message.author.id + message.guild.id] = {ship: "null", propose: "null", state: "single"}
                message.channel.send(frstop)
            } else if(args[0] === "decline" && ship[message.author.id + message.guild.id].propose === "null") {
                let frdeclienembed = new MessageEmbed()
                .setColor(color.main)
                .setDescription("<@" + member.user.id + "> s'est pris un rateau de <@" + message.author.id + ">")
                .setThumbnail(config.icon)
                .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setTimestamp(date);
                message.channel.send(frdeclienembed);
                ship[member.user.id + message.guild.id] = {ship: "null", propose: "null", state: "single"}
            };
        } else if(language[message.guild.id].language === "spanish")
        fs.writeFile("./json/data/ship.json", JSON.stringify(ship), (err) => {if(err) console.log("[ERROR]" + err)});
    } catch (err){
        if(!language[message.guild.id].language || language[message.guild.id].language === "english") {
            if(args[0] === "state") {
                if(ship[message.author.id + message.guild.id].state === "single") {
                    relationstate = "single"
                } else {
                    relationstate = "in couple** with <@" + ship[message.author.id + message.guild.id].ship + ">.** "
                }
                let enstate2 = new MessageEmbed()
                .setColor(color.main)
                .setTitle("**💘 ✦ RELATIONSHIP :**")
                .setDescription("** **\nYou are currently **" + relationstate + "**")
                .setThumbnail(config.icon)
                .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setTimestamp(date);
                message.channel.send(enstate2)
            } else if(!args[0]) {
                let ennostate2 = new MessageEmbed()
                .setTitle('**💢 ✦ ERROR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nYou must **write something** to perform this command.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Be careful ^^', config.errorfooter)
                .setThumbnail(config.erroricon)
                .setTimestamp(date);
                message.channel.send(ennostate2);
            } else if(!args[1] && args[0] != "state") {
                let ennomention2 = new MessageEmbed()
                .setTitle('**💢 ✦ ERROR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nYou must **mention someone** to perform this command.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Be careful ^^', config.errorfooter)
                .setThumbnail(config.erroricon)
                .setTimestamp(date);
                message.channel.send(ennomention2);
            } else if(args[0] != "send" && args[0] != "accept" && args[0] != "decline" && args[0] != "stop" && args[0] != "state") {
                let ennocorrectstate2 = new MessageEmbed()
                .setTitle('**💢 ✦ ERROR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nYou must **write something correct** to perform this command. (send, accept, decline, stop, state)\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Be careful ^^', config.errorfooter)
                .setThumbnail(config.erroricon)
                .setTimestamp(date);
                message.channel.send(ennocorrectstate2);
            };
        } else if(language[message.guild.id].language === "french") {
            if(ship[message.author.id + message.guild.id].state === "single") {
                relationstate = "célibataire"
            } else {
                relationstate = "en couple** avec <@" + ship[message.author.id + message.guild.id].ship + ">.** "
            }
            let frstate = new MessageEmbed()
            .setColor(color.main)
            .setTitle("**💘 ✦ RELATIONSHIP :**")
            .setDescription("** **\nTu es **" + relationstate + "**")
            .setThumbnail(config.icon)
            .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
            .setTimestamp(date);
            message.channel.send(frstate)
        } else if(!args[0]) {
            let frnostate2 = new MessageEmbed()
            .setTitle('**💢 ✦ ERREUR :**')
            .setColor(color.red)
            .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nVous devez **écrire quelque** pour pouvoir utiliser cette commande. (send, accept, decline, stop, state)\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
            .setFooter('Soit attentif ^^', config.errorfooter)
            .setThumbnail(config.erroricon)
            .setTimestamp(date);
            message.channel.send(frnostate2);
        } else if(!args[1] && args[0] != "state") {
            let frnomention2 = new MessageEmbed()
            .setTitle('**💢 ✦ ERREUR :**')
            .setColor(color.red)
            .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nVous devez **mentionner quelqu'un** pour pouvoir utiliser cette commande.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
            .setFooter('Soit attentif ^^', config.errorfooter)
            .setThumbnail(config.erroricon)
            .setTimestamp(date);
            message.channel.send(frnomention2);
        } else if(args[0] != "send" && args[0] != "accept" && args[0] != "decline" && args[0] != "stop" && args[0] != "state") {
            let frnocorrectstate2 = new MessageEmbed()
            .setTitle('**💢 ✦ ERREUR :**')
            .setColor(color.red)
            .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nVous devez **écrire quelque chose de correct** pour pouvoir utiliser cette commande. (send, accept, decline, stop, state)\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
            .setFooter('Soit attentif ^^', config.errorfooter)
            .setThumbnail(config.erroricon)
            .setTimestamp(date);
            message.channel.send(frnocorrectstate2);
        }
    }} 
};