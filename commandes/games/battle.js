const { MessageEmbed, MessageAttachment } = require("discord.js");
const color = require("../../json/color.json");
const fs = require("fs");
const config = require("../../json/config.json");
let xp = JSON.parse(fs.readFileSync("./json/data/xp.json", "utf8"));
let wins = JSON.parse(fs.readFileSync("./json/data/wins.json", "utf8"));

module.exports = {
    name: "battle",
    aliases: [""],
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

        let language = JSON.parse(fs.readFileSync("./json/data/language.json"));
        let life = JSON.parse(fs.readFileSync("./json/data/life.json"));
        let ready = JSON.parse(fs.readFileSync("./json/data/ready.json"));

        let enweaponname;
        let frweaponname;
        let critical = "";
        let boost = "";
        let xpAdd = Math.floor(Math.random() * 500 + 250);
        let xpLost = Math.floor(Math.random() * 250 + 150);

        if(!wins["BA" + message.author.id + message.guild.id]) {
            wins["BA" + message.author.id + message.guild.id] = {
                wins: 0,
                defeats: 0
            };
        };
        if(!wins["BA" + getUser.user.id + message.guild.id]) {
            wins["BA" + getUser.user.id + message.guild.id] = {
                wins: 0,
                defeats: 0
            };
        };

        if(args[1] != "sword" && args[1] != "hammer" && args[1] != "shuriken" && args[1] != "shurikens" && args[1] != "001" && args[1] != "002" && args[1] != "003" && args[1] != "healer" && args[1] != "005" && args[1] != "gun" && args[1] != "004" && args[1] != "stop" && args[1] != "leave") {
            if (!language[message.guild.id] || language[message.guild.id].language === "english") {
                let date = new Date();
                let ennotequal = new MessageEmbed()
                .setTitle('**💢 ✦ ERROR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nYou must **write something correct** to preform this command.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Be careful ^^', config.errorfooter)
                .setThumbnail(config.erroricon)
                .setTimestamp(date)
                message.channel.send(ennotequal)
                return;
            } else if(language[message.guild.id].language === "french") {
                let date = new Date();
                let frnotequal = new MessageEmbed()
                .setTitle('**💢 ✦ ERREUR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nVous devez écrire **quelque chose de correct** pour pouvoir utiliser cette commande.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Soit attentif ^^', config.errorfooter)
                .setThumbnail(config.erroricon)
                .setTimestamp(date)
                message.channel.send(frnotequal)
                return;
            };
        };

        if(message.author.id === getUser.user.id) {
            if (!language[message.guild.id] || language[message.guild.id].language === "english") {
                let date = new Date();
                let ensameperson = new MessageEmbed()
                .setTitle('**💢 ✦ ERROR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nYou can't **mention yourself**.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Be careful ^^', config.errorfooter)
                .setThumbnail(config.erroricon)
                .setTimestamp(date)
                message.channel.send(ensameperson);
                return;
            } else if (language[message.guild.id].language === "french") {
                let date = new Date();
                let frsameperson = new MessageEmbed()
                .setTitle('**💢 ✦ ERREUR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nTu ne peux pas **t'auto mentionner**.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Soit attentif ^^', config.errorfooter)
                .setThumbnail(config.erroricon)
                .setTimestamp(date)
                message.channel.send(frsameperson);
                return;
            };
        };

        if(!ready[message.author.id + getUser.user.id + message.guild.id]) {
            ready[message.author.id + getUser.user.id + message.guild.id] = {
                isready: true,
                oppenent: null
            };
        };

        let authordamages;
        let authorheal;
        let cur = xp[getUser.user.id + message.guild.id]

        if(args[1] === "stop" || args[1] === "leave") {
            if(ready[message.author.id + getUser.user.id + message.guild.id].oppenent != getUser.user.id) {
                if(!language[message.guild.id] || language[message.guild.id].language === "english") {
                    let date = new Date();
                    let ennotfighting = new MessageEmbed()
                    .setTitle('**💢 ✦ ERROR :**')
                    .setColor(color.red)
                    .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nYou **can't stop** a non-existent fight.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                    .setFooter('Be careful ^^', config.errorfooter)
                    .setThumbnail(config.erroricon)
                    .setTimestamp(date)
                    message.channel.send(ennotfighting);
                    return;
                } else if(language[message.guild.id].language === "french") {
                    let date = new Date();
                    let frnotfighting = new MessageEmbed()
                    .setTitle('**💢 ✦ ERREUR :**')
                    .setColor(color.red)
                    .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nVous **ne pouvez pas stopper** un combat inexistant.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                    .setFooter('Soit attentif ^^', config.errorfooter)
                    .setThumbnail(config.erroricon)
                    .setTimestamp(date)
                    message.channel.send(frnotfighting);
                    return;
                };
                return;
            } else if(!language[message.guild.id] || language[message.guild.id].language === "english") {
                let date = new Date();
                let enstopembed = new MessageEmbed()
                .setTitle("**⚔️ ✦ BATTLE :**")
                .setColor(color.main)
                .setDescription("**" + message.author.username + "** has stopped the fight with **" + getUser.user.username +"**.\n\n**" + getUser.user.username + "** won the fight and ``" + xpAdd + "`` xp.\n**" + message.author.username + "** lost the fight and ``" + xpLost + "`` xp.")
                .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setThumbnail(config.icon)
                .setTimestamp(date)
                message.channel.send(enstopembed);
                ready[getUser.user.id + message.author.id + message.guild.id] = {isready: true, oppenent: null};
                ready[message.author.id + getUser.user.id + message.guild.id] = {isready: true, oppenent: null};
                wins[message.author.id + message.guild.id] = {wins: wins[message.author.id + message.guild.id].wins, defeats: (wins[message.author.id + message.guild.id].defeats + 1)}
                wins[getUser.user.id + message.guild.id] = {wins: (wins[getUser.user.id + message.guild.id].wins + 1), defeats: wins[getUser.user.id + message.guild.id].defeats}
                wins["BA" + message.author.id + message.guild.id] = {wins: wins["BA" + message.author.id + message.guild.id].wins, defeats: (wins["BA" + message.author.id + message.guild.id].defeats + 1)}
                wins["BA" + getUser.user.id + message.guild.id] = {wins: (wins["BA" + getUser.user.id + message.guild.id].wins + 1), defeats: wins["BA" + getUser.user.id + message.guild.id].defeats}
                life[getUser.user.id + message.guild.id] = {hp: 100};
                life[message.author.id + message.guild.id] = {hp: 100};
                xp[getUser.user.id + message.guild.id] = {
                    xp: cur.xp + xpAdd
                };
                if(xpLost >= xp[message.author.id + message.guild.id]) {
                    xp[message.author.id + message.guild.id] = {
                        xp: 0
                    }
                } else {
                    xp[message.author.id + message.guild.id] = {
                        xp: cur.xp - xpLost
                    };
                };
                return;
            } else if(language[message.guild.id].language === "french") {
                let date = new Date();
                let frstopembed = new MessageEmbed()
                .setTitle("**⚔️ ✦ BATTLE :**")
                .setColor(color.main)
                .setDescription("**" + message.author.username + "** à arrêté le combat contre **" + getUser.user.username +"**.\n\n**" + getUser.user.username + "** à gagné le combat et ``" + xpAdd + "`` xp.\n**" + message.author.username + "** à perdu le combat et ``" + xpLost + "`` xp.")
                .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setThumbnail(config.icon)
                .setTimestamp(date)
                message.channel.send(frstopembed);
                ready[getUser.user.id + message.author.id + message.guild.id] = {isready: true, oppenent: null};
                ready[message.author.id + getUser.user.id + message.guild.id] = {isready: true, oppenent: null};
                life[getUser.user.id + message.guild.id] = {hp: 100};
                life[message.author.id + message.guild.id] = {hp: 100};
                wins[message.author.id + message.guild.id] = {wins: wins[message.author.id + message.guild.id].wins, defeats: (wins[message.author.id + message.guild.id].defeats + 1)}
                wins[getUser.user.id + message.guild.id] = {wins: (wins[getUser.user.id + message.guild.id].wins + 1), defeats: wins[getUser.user.id + message.guild.id].defeats}
                xp[getUser.user.id + message.guild.id] = {
                    xp: cur.xp + xpAdd
                };
                if(xpLost >= xp[message.author.id + message.guild.id]) {
                    xp[message.author.id + message.guild.id] = {
                        xp: 0
                    }
                } else {
                    xp[message.author.id + message.guild.id] = {
                        xp: cur.xp - xpLost
                    };
                };
                return;
            };
        };

        if(ready[message.author.id + getUser.user.id + message.guild.id].isready === true) {
            ready[message.author.id + getUser.user.id + message.guild.id] = {
                isready: false,
                oppenent: getUser.user.id
            };
            ready[getUser.user.id + message.author.id + message.guild.id] = {
                isready: true,
                oppenent: message.author.id
            };

            let losthit = Math.floor(Math.random() * 100 + 1)
            
            if(args[1] === "sword" || args[1] === "001") {
                chosenweapon = 001;
                enweaponname = "**The sword**";
                frweaponname = "**L'épée**";
                esweaponname = "**La espada**";
            } else if(args[1] === "hammer" || args[1] === "002") {
                chosenweapon = 002;
                enweaponname = "**The hammer**";
                frweaponname = "**Le marteau**";
                esweaponname = "**El martillo**";
            } else if(args[1] === "shuriken" || args[1] === "shurikens" || args[1] === "003") {
                chosenweapon = 003;
                enweaponname = "**Shurikens**";
                frweaponname = "**Les Shurikens**";
                esweaponname = "**Las Shurikens**";
            } else if(args[1] === "gun" || args[1] === "004") {
                chosenweapon = 004;
                enweaponname = "**The gun**";
                frweaponname = "**Le pistolet**"
                esweaponname = "**La pistola**";
            } else if(args[1] === "healer" || args[1] === "005") {
                chosenweapon = 005;
                enweaponname = "**The Healer**";
                frweaponname = "**Le soigneur**";
                esweaponname = "**El sanador**";
            };

            if(!life[getUser.user.id + message.guild.id]) {
                life[getUser.user.id + message.guild.id] = {
                    hp: 100
                };
            };
            if(!life[message.author.id + message.guild.id]) {
                life[message.author.id + message.guild.id] = {
                    hp: 100
                };
            };
            
            let sworddamages = Math.floor(Math.random() * 30 + 5);
            let swordheal = Math.floor(Math.random() * 15 + 5);
            let hammerdamages = Math.floor(Math.random() * 25 + 10);
            let hammerheal = Math.floor(Math.random() * 10 + 1);
            let shurikensdamages = Math.floor(Math.random() * 25 + 15);
            let shurikensheal = Math.floor(Math.random() * 5 + 1);
            let healerdamages = Math.floor(Math.random() * 1 + 1);
            let healerheal = Math.floor(Math.random() * 30 + 10);
            let gundamages = Math.floor(Math.random() * 10 + 1);
            let gunheal = Math.floor(Math.random() * 10 + 1)
            let iscritical = Math.floor(Math.random() * 100 + 1);
            let isboost = Math.floor(Math.random() * 100 + 1);

            let authorlife = life[message.author.id + message.guild.id];
            let oppenentlife = life[getUser.user.id + message.guild.id];

            if(args[1] === "sword" || args[1] === "001") {
                authordamages = sworddamages;
                authorheal = swordheal;
                if(iscritical <= 35) {
                    authordamages = (authordamages / 4) + authordamages;
                    critical = "(critical)";
                };
            } else if(args[1] === "hammer" || args[1] === "002") {
                authordamages = hammerdamages;
                authorheal = hammerheal;
                if(iscritical <= 70) {
                    authordamages = (authordamages / 4) + authordamages;
                    critical = "(critical)";
                };
            } else if(args[1] === "shuriken" || args[1] === "shurikens" || args[1] === "003") {
                authordamages = shurikensdamages;
                authorheal = shurikensheal;
                if(iscritical <= 10) {
                    authordamages = (authordamages / 4) + authordamages;
                    critical = "(critical)";
                };
            } else if(args[1] === "gun" || args[1] === "004") {
                authordamages = gundamages;
                authorheal = gunheal;
                if(iscritical <= 50) {
                    authordamages = authordamages * 5;
                    critical = "(critical)";
                };
            } else if(args[1] === "healer" || args[1] === "005") {
                authordamages = healerdamages;
                authorheal = healerheal;
                if(iscritical <= 50) {
                    authordamages = (authordamages / 4) + authordamages;
                    critical = "(critical)";
                };
            };

            if(args[1] === "sword" || args[1] === "001") {
                if(isboost <= 35) {
                    authorheal = (authorheal / 4) + authorheal;
                    boost = "(boost)";
                };
            } else if(args[1] === "hammer" || args[1] === "002") {
                if(isboost <= 70) {
                    authorheal = (authorheal / 4) + authorheal;
                    boost = "(boost)";
                };
            } else if(args[1] === "shuriken" || args[1] === "shurikens" || args[1] === "003") {
                if(isboost <= 10) {
                    authorheal = (authorheal / 4) + authorheal;
                    boost = "(boost)";
                };
            } else if(args[1] === "gun" || args[1] === "004") {
                if(isboost <= 50) {
                    authorheal = (authorheal / 4) + authorheal;
                    boost = "(boost)";
                };
            } else if(args[1] === "healer" || args[1] === "005") {
                if(isboost <= 50) {
                    authorheal = (authorheal / 4) + authorheal;
                    boost = "(boost)";
                };
            };

            if(losthit <= 5) {
                authordamages = 0
            };

            life[getUser.user.id + message.guild.id] = {
                hp: (oppenentlife.hp - authordamages)
            };
            life[message.author.id + message.guild.id] = {
                hp: authorlife.hp + authorheal
            };

            if(!language[message.guild.id] || language[message.guild.id].language === "english") {
                if(!args[0]) {
                    let date = new Date();
                    let ennolanguage = new MessageEmbed()
                    .setTitle('**💢 ✦ ERROR :**')
                    .setColor(color.red)
                    .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nYou must **mention someone** to perform this command.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                    .setFooter('Be careful ^^', config.errorfooter)
                    .setThumbnail(config.erroricon)
                    .setTimestamp(date)
                    message.channel.send(ennolanguage)
                } else if(!args[1]) {
                    let date = new Date();
                    let ennotxt = new MessageEmbed()
                    .setTitle('**💢 ✦ ERROR :**')
                    .setColor(color.red)
                    .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nYou must **select a weapon** to perform this command.\n\n> **The sword**\n```diff\n- id: sword [Stats = damages: 15-30, heal: 5-10, criticals: 35%]```\n> **The hammer**\n```diff\n- id: hammer [Stats = damages: 10-25, heal: 0-10, criticals: 70%]```\n> **Shurikens**\n```diff\n- id: shuriken [Stats = damages: 15-45, heal: 0-5, criticals: 10%]```\n**Healer**\n```diff\n- id: healer [Stats = damages: 1-3, heal: 20-30, criticals: 50%]```\n**⚠️ •═════────────────────═════• ⚠️\n**")
                    .setFooter('Be careful ^^', config.errorfooter)
                    .setThumbnail(config.erroricon)
                    .setTimestamp(date)
                    message.channel.send(ennotxt)
                } else {
                    let date = new Date();
                    let enembed = new MessageEmbed()
                    .setColor(color.main)
                    .setTitle("**⚔️ ✦ BATTLE :**")
                    .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                    .setThumbnail(config.icon)
                    if(authordamages === 0) {
                        enembed.setDescription("**" + message.author.username + "** has missed his target.\n\n```diff\n- inflicted damages " + critical + " : " + authordamages + "\n```\n```css\n- gained hp : " + authorheal + "\n```")
                    } else {
                        enembed.setDescription("**" + message.author.username + "** has attacked **" + getUser.user.username + "** with " + enweaponname + ".\n\n```diff\n- inflicted damages " + critical + " : " + authordamages + "\n```\n```css\n- gained hp " + boost + " : " + authorheal + "\n```")
                    };
                    enembed.setTimestamp(date)
                    message.channel.send(enembed)
                }
            } else if(language[message.guild.id].language === "french") {
                if(!args[0]) {
                    let date = new Date();
                    let frnolanguage = new MessageEmbed()
                    .setTitle('**💢 ✦ ERREUR :**')
                    .setColor(color.red)
                    .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nVous devez **mentionner quelqu'un** pour pouvoir utiliser cette commande.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                    .setFooter('Soit attentif ^^', config.errorfooter)
                    .setThumbnail(config.erroricon)
                    .setTimestamp(date)
                    message.channel.send(frnolanguage)
                } else if(!args[1]) {
                    let date = new Date();
                    let frnotxt = new MessageEmbed()
                    .setTitle('**💢 ✦ ERREUR :**')
                    .setColor(color.red)
                    .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nVous devez **choisir une arme** pour pouvoir utiliser cette commande.\n\n> **L'épée**\n```diff\n- id: sword [Stats = dégats: 5-15, guérison: 5-10, coups critiques: 35%]```\n> **Le marteau**\n```diff\n- id: hammer [Stats = dégats: 3-10, guérison: 0-10, coups critiques: 70%]```\n> **Les shurikens**\n```diff\n- id: shuriken [Stats = dégats: 15-45, guérison: 0-5, coups critiques: 10%]```\n**Healer**\n```diff\n- id: healer [Stats = dégats: 1-3, guérison: 20-30, coups critiques: 50%]```\n**⚠️ •═════────────────────═════• ⚠️\n**")
                    .setFooter('Soit attentif ^^', config.errorfooter)
                    .setThumbnail(config.erroricon)
                    .setTimestamp(date)
                    message.channel.send(frnotxt)
                } else {
                    let date = new Date();
                    let frembed = new MessageEmbed()
                    .setColor(color.main)
                    .setTitle("**⚔️ ✦ BATTLE :**")
                    .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                    .setThumbnail(config.icon);
                    if(authordamages === 0) {
                        frembed.setDescription("**" + message.author.username + "** à loupé sa cible.\n\n```diff\n- dégats infligés " + critical + " : " + authordamages + "\n```\n```css\n- gains d'hp : " + authorheal + "\n```")
                    } else {
                        frembed.setDescription("**" + message.author.username + "** à attaqué **" + getUser.user.username + "** avec " + frweaponname + ".\n\n```diff\n- dégats infligés " + critical + " : " + authordamages + "\n```\n```css\n- gains d'hp " + boost + " : " + authorheal + "\n```")
                    };
                    frembed.setTimestamp(date)
                    message.channel.send(frembed);
                };
            };
        } else {
            if(!language[message.guild.id] || language[message.guild.id].language === "english") {
                let date = new Date();
                let notreadyen = new MessageEmbed()
                .setTitle('**💢 ✦ ERROR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nYou're **not ready** to fight again.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Be careful ^^', config.errorfooter)
                .setThumbnail(config.erroricon)
                .setTimestamp(date)
                message.channel.send(notreadyen);
                return;
            } else if(language[message.guild.id].language === "french") {
                let date = new Date();
                let notreadyfr = new MessageEmbed()
                .setTitle('**💢 ✦ ERREUR :**')
                .setColor(color.red)
                .setDescription("**\n⚠️ •═════────────────────═════• ⚠️**\n\nVous n'êtes **pas encore prêt** à combattre.\n\n**⚠️ •═════────────────────═════• ⚠️\n**")
                .setFooter('Soit attentif ^^', config.errorfooter)
                .setThumbnail(config.erroricon)
                .setTimestamp(date)
                message.channel.send(notreadyfr);
                return;
            };
        };
        if(life[getUser.user.id + message.guild.id].hp <= 0) {
            if(!language[message.guild.id] || language[message.guild.id].language === "english") {
                let date = new Date();
                let enstopembed = new MessageEmbed()
                .setTitle("**⚔️ ✦ BATTLE :**")
                .setColor(color.main)
                .setDescription("**" + message.author.username + "** has won the fight with** " + getUser.user.username +"**.\n\n**" + message.author.username + "** won the fight and ``" + xpAdd + " xp`` with ``" + life[message.author.id + message.guild.id].hp + " hp``.\n**" + getUser.user.username + "** lost the fight and ``" + xpLost + " xp``.")
                .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setThumbnail(config.icon)
                .setTimestamp(date)
                message.channel.send(enstopembed);
            } else if(language[message.guild.id].language === "french") {
                let date = new Date();
                let frstopembed = new MessageEmbed()
                .setTitle("**⚔️ ✦ BATTLE :**")
                .setColor(color.main)
                .setDescription("**" + message.author.username + "** à gagné le combat contre** " + getUser.user.username +"**.\n\n**" + message.author.username + "** à gagné le combat et ``" + xpAdd + "`` xp`` avec ``" + life[getUser.user.id + message.guild.id].hp + " hp``.\n**" + getUser.user.username + "** à perdu le combat et ``" + xpLost + " xp``.")
                .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setThumbnail(config.errorfooter)
                .setTimestamp(date)
                message.channel.send(frstopembed);
            }
            life[getUser.user.id + message.guild.id] = {
                hp: 100
            };
            life[message.author.id + message.guild.id] = {
                hp: 100
            };
            ready[message.author.id + getUser.user.id + message.guild.id] = {
                isready: true,
                oppenent: null
            };
            ready[getUser.user.id + message.author.id + message.guild.id] = {
                isready: true,
                oppenent: null
            };
            if(!xp[getUser.user.id + message.guild.id]) {
                xp[getUser.user.id + message.guild.id] = {
                    xp: 0
                };
            } else {
                xp[getUser.user.id + message.guild.id] = {
                    xp: cur.xp + xpLost
                }
            };
            if(!xp[message.author.id + message.guild.id]) {
                xp[message.author.id + message.guild.id] = {
                    xp: xpAdd
                };
            } else {
                xp[message.author.id + message.guild.id] = {
                    xp: cur.xp + xpAdd
                }
            };
            wins[message.author.id + message.guild.id] = {wins: (wins[message.author.id + message.guild.id].wins + 1), defeats: wins[message.author.id + message.guild.id].defeats}
            wins[getUser.user.id + message.guild.id] = {wins: wins[getUser.user.id + message.guild.id].wins, defeats: (wins[getUser.user.id + message.guild.id].defeats + 1)}
            wins["BA" + message.author.id + message.guild.id] = {wins: (wins["BA" + message.author.id + message.guild.id].wins + 1), defeats: wins["BA" + message.author.id + message.guild.id].defeats}
            wins["BA" + getUser.user.id + message.guild.id] = {wins: wins["BA" + getUser.user.id + message.guild.id].wins, defeats: (wins["BA" + getUser.user.id + message.guild.id].defeats + 1)}
        };
        if(life[message.author + message.guild.id].hp > 150) {
            life[message.author.id + message.guild.id] = {hp: 150}
        };
        fs.writeFile("./json/data/ready.json", JSON.stringify(ready), (err) => {if(err) console.log("[ERROR]" + err)});
        fs.writeFile("./json/data/life.json", JSON.stringify(life), (err) => {if(err) console.log("[ERROR]" + err)});
        fs.writeFile("./json/data/wins.json", JSON.stringify(wins), (err) => {if(err) console.log("[ERROR]" + err)});
        fs.writeFile("./json/data/xp.json", JSON.stringify(xp), (err) => {if(err) console.log("[ERROR]" + err)});
    }
};