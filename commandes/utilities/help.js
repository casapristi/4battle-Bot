const { MessageEmbed, MessageAttachment } = require("discord.js");
const color = require("../../json/color.json");
const config = require("../../json/config.json");
const fs = require("fs");
const package = require("../../package.json");
const { on } = require("process");

module.exports = {
    name: "help",
    category: "",
    run: async (client, message, args) => {
        let language = JSON.parse(fs.readFileSync("./json/data/language.json", "utf8"));
        let prefixes = JSON.parse(fs.readFileSync("./json/data/prefixes.json", "utf8"));
        let date = new Date();

        let embed = new MessageEmbed()
        .setColor(color.main)
        .setTitle("**❓ ✦ HELP :**")
        .setThumbnail(config.icon)
        .setTimestamp(date)

        if(!language[message.guild.id] || language[message.guild.id].language === "english") {
            embed.setDescription("**The bot prefix is : `` " + prefixes[message.guild.id].prefixes + " ``\nThe bot version is `` " + package.version +
            " ``\n\nThere are two categories :**")
            .addField("🎮 • Games", "Every minigames are in this category.", true)
            .addField("⚙️ • Utilities", "Every util commands are here.", true)
            .addField("** **", "** **")
            .addField("📋 ~ Credits :", "- 𝗗𝘂 𝗖𝗮𝘀𝘀𝗼𝘂𝗹𝗲𝘁#0666\n- CNoPro_Game#4865")
            .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
            message.channel.send(embed).then(msg => {
                msg.react("🎮").then(r => {
                    msg.react("⚙️").then(r => {

                        const gamefilter = (reaction, user) => reaction.emoji.name === '🎮' && user.id === message.author.id;
                        const utilfilter = (reaction, user) => reaction.emoji.name === '⚙️' && user.id === message.author.id;

                        const game = msg.createReactionCollector(gamefilter, { time: 60000 });
                        const util = msg.createReactionCollector(utilfilter, { time: 60000 });

                        game.on('collect', r => {
                            msg.delete(msg);
                            let embed2 = new MessageEmbed()
                            .setColor(color.main)
                            .setTitle("**❓ ✦ HELP :**")
                            .setThumbnail(config.icon)
                            .setTimestamp(date)
                            .addField("⚔️ battle", "To make a battle with a member", true)
                            .addField("🔋 health", "To know your battle health", true)
                            .addField("💥 deminer", "To play at deminer", true)
                            .addField("🔎 findme", "You shoud find the correct emote", true)
                            .addField("🔺 galaga", "To play yo galaga", true)
                            .addField("🎲 predict-dice", "You shoud predict the number of the dice", true)
                            .addField("<:pacman:747733530188185642> pacman", "To play pacman", true)
                            .addField("<:rock:716601680057204757> rock-paper-scissors", "To play rock paper scissors with me", true)
                            .addField("🎰 slotmachine", "To play to the slot machine", true)
                            .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                            message.channel.send(embed2).then(msg => {
                                msg.react("⚔️").then(r => {
                                    msg.react("🔋").then(r => {
                                        msg.react("💥").then(r => {
                                            msg.react("🔎").then(r => {
                                                msg.react("🔺").then(r => {
                                                    msg.react("🎲").then(r => {
                                                        msg.react("747733530188185642").then(r => {
                                                            msg.react("747734256180133959").then(r => {
                                                                msg.react("🎰").then(r => {

                                                                    const battlefilter = (reaction, user) => reaction.emoji.name === '⚔️' && user.id === message.author.id;
                                                                    const healthfilter = (reaction, user) => reaction.emoji.name === '🔋' && user.id === message.author.id;
                                                                    const deminerfilter = (reaction, user) => reaction.emoji.name === '💥' && user.id === message.author.id;
                                                                    const findmefilter = (reaction, user) => reaction.emoji.name === '🔎' && user.id === message.author.id;
                                                                    const galagafilter = (reaction, user) => reaction.emoji.name === '🔺' && user.id === message.author.id;
                                                                    const predictdicefilter = (reaction, user) => reaction.emoji.name === '🎲' && user.id === message.author.id;
                                                                    const pacmanfilter = (reaction, user) => reaction.emoji.id === '747733530188185642' && user.id === message.author.id;
                                                                    const rpsfilter = (reaction, user) => reaction.emoji.id === '747734256180133959' && user.id === message.author.id;
                                                                    const slotmachinefilter = (reaction, user) => reaction.emoji.name === '🎰' && user.id === message.author.id;

                                                                    const battle = msg.createReactionCollector(battlefilter, { time: 60000 });
                                                                    const health = msg.createReactionCollector(healthfilter, { time: 60000 });
                                                                    const deminer = msg.createReactionCollector(deminerfilter, { time: 60000 });
                                                                    const findme = msg.createReactionCollector(findmefilter, { time: 60000 });
                                                                    const galaga = msg.createReactionCollector(galagafilter, { time: 60000 });
                                                                    const predictdice = msg.createReactionCollector(predictdicefilter, { time: 60000 });
                                                                    const pacman = msg.createReactionCollector(pacmanfilter, { time: 60000 });
                                                                    const rps = msg.createReactionCollector(rpsfilter, { time: 60000 });
                                                                    const slotmachine = msg.createReactionCollector(slotmachinefilter, { time: 60000 });

                                                                    battle.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**⚔️ ✦ BATTLE :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**To performe this command you need to write a command like that :**\n(prefix)battle [oppenent {name/id/mention}] [weapon {name/id}]\n\nDescription : `` This command is a fun way to decide a thing with your friends"
                                                                        + ". ``\n\n**WEAPONS :**\n```diff\n- sword [id: 001]\n- hammer [id: 002]\n- shurikens [id: 003]\n- gun [id: 004]\n- healer [id: 005]\n```\n**EXEMPLE :**\n(prefix)battle Du_Cassoulet hammer")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    health.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**🔋 ✦ HEALTH :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**To performe this command you need to write a command like that :**\n(prefix)hp [name/id/mention/nothing]\n\nAliases : `` hp ``\nDescription : `` This command"
                                                                        + " is just to view your health during a battle. ``\n\n**EXEMPLE :**\n(prefix)hp Du_Cassoulet")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    deminer.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**💥 ✦ DEMINER :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**To performe this command you need to write a command like that :**\n(prefix)deminer\n\nAliases : `` demine ``\nDescription : `` In this minigame, you shoud"
                                                                        + " click on cases to find every mines without make them explode. ``\n\n**EXEMPLE :**\n(prefix)deminer")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    findme.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**🔎 ✦ FIND ME :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**To performe this command you need to write a command like that :**\n(prefix)find-me\n\nAliases : `` findme, fm``\nDescription : `` In this minigame, you shoud"
                                                                        + " find the correct emoji by clicking on it. ``\n\n**EXEMPLE :**\n(prefix)findme")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    galaga.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**🔺 ✦ GALAGA :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**To performe this command you need to write a command like that :**\n(prefix)galaga\nDescription : `` You are in a spaceship and you have to "
                                                                        + "destroy asteroids. `` \n\n**EXEMPLE :**\n(prefix)galaga")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    predictdice.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**🎲 ✦ PREDICT DICE :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**To performe this command you need to write a command like that :**\n(prefix)pedict-dice [number {1-6}]\n\nAliases : `` predict, pd ``\nDescription : `` You shoud predict the"
                                                                        + " number of a dice dice before it get started. ``\n\n**EXEMPLE :**\n(prefix)pedict-dice 3")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    pacman.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**<:pacman:747733530188185642> ✦ PACMAN :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**To performe this command you need to write a command like that :**\n(prefix)pacman\n\nDescription : `` You will have to eat 30 pac gums. ``"
                                                                        + "\n\n**EXEMPLE :**\n(prefix)pacman")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    rps.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**<:rock:716601680057204757> ✦ PIERRE FEUILLE CISEAUX**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**To performe this command you need to write a command like that :**\n(prefix)rock-paper-scissors\n\nAliases : `` rockpaperscissors, rps ``\nDescription : "
                                                                        + "`` You can play rock paper scissors with me by clicking on reactions. ``\n\n**EXEMPLE :**\n(prefix)rock-paper-scissors")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    slotmachine.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**🎰 ✦ SLOT MACHINE :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**To performe this command you need to write a command like that :**\n(prefix)slot-machine\n\nAliases : `` sm, slotmachine, slot ``\nDescription : ``If the three emojis are the same"
                                                                        + " you won. ``\n\n**EXEMPLE :**\n(prefix)slot-machine")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                        util.on('collect', r => {
                            msg.delete(msg);
                            let embed3 = new MessageEmbed()
                            .setColor(color.main)
                            .setTitle("**❓ ✦ HELP :**")
                            .setThumbnail(config.icon)
                            .setTimestamp(date)
                            .addField("🖼️ avatar", "To view your avatar", true)
                            .addField("🌐 language", "To change my language", true)
                            .addField("🕹️ minigames", "To play at minigames", true)
                            .addField("💬 ping", "To view my ping", true)
                            .addField("#️⃣ prefix", "To change my prefix", true)
                            .addField("🎫 rank", "To view your rank-card", true)
                            .addField("👁️ status", "To know your status", true)
                            .addField("👁️ set-status", "To set your status", true)
                            .addField("❤️ ship", "To be in couple with someone", true)
                            .addField("📊 stats", "To know your stats", true)
                            .addField("📊 game-stats", "To know your game stats", true)
                            .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                            message.channel.send(embed3).then(msg => {
                                msg.react("🖼️").then(r => {
                                    msg.react("🌐").then(r => {
                                        msg.react("🕹️").then(r => {
                                            msg.react("💬").then(r => {
                                                msg.react("#️⃣").then(r => {
                                                    msg.react("🎫").then(r => {
                                                        msg.react("👁️").then(r => {
                                                            msg.react("❤️").then(r => {
                                                                msg.react("📊").then(r => {

                                                                    const avatarfilter = (reaction, user) => reaction.emoji.name === '🖼️' && user.id === message.author.id;
                                                                    const languagefilter = (reaction, user) => reaction.emoji.name === '🌐' && user.id === message.author.id;
                                                                    const minigamesfilter = (reaction, user) => reaction.emoji.name === '🕹️' && user.id === message.author.id;
                                                                    const pingfilter = (reaction, user) => reaction.emoji.name === '💬' && user.id === message.author.id;
                                                                    const prefixfilter = (reaction, user) => reaction.emoji.name === '#️⃣' && user.id === message.author.id;
                                                                    const rankfilter = (reaction, user) => reaction.emoji.name === '🎫' && user.id === message.author.id;
                                                                    const statusfilter = (reaction, user) => reaction.emoji.name === '👁️' && user.id === message.author.id;
                                                                    const shipfilter = (reaction, user) => reaction.emoji.name === '❤️' && user.id === message.author.id;
                                                                    const statsfilter = (reaction, user) => reaction.emoji.name === '📊' && user.id === message.author.id;

                                                                    const avatar = msg.createReactionCollector(avatarfilter, { time: 60000 });
                                                                    const language = msg.createReactionCollector(languagefilter, { time: 60000 });
                                                                    const minigames = msg.createReactionCollector(minigamesfilter, { time: 60000 });
                                                                    const ping = msg.createReactionCollector(pingfilter, { time: 60000 });
                                                                    const prefix = msg.createReactionCollector(prefixfilter, { time: 60000 });
                                                                    const rank = msg.createReactionCollector(rankfilter, { time: 60000 });
                                                                    const status = msg.createReactionCollector(statusfilter, { time: 60000 });
                                                                    const ship = msg.createReactionCollector(shipfilter, { time: 60000 });
                                                                    const stats = msg.createReactionCollector(statsfilter, { time: 60000 });

                                                                    avatar.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**🖼️ ✦ AVATAR :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**To performe this command you need to write a command like that :**\n(prefix)avatar (name/id/mention/nothing)\n\nDescription : `` You can see your friends avatar."
                                                                        + " ``\n\n**EXEMPLE :**\n(prefix)avatar Du_Cassoulet")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    language.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**🌐 ✦ LANGUAGE :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**To performe this command you need to write a command like that :**\n(prefix)slot\n\nAliases : `` language-change, set-language, l ``\nDescription : `` With this command, you can change my language."
                                                                        + " ``\n\n**EXEMPLE :**\n(prefix)language french")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    stats.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**🎰 ✦ STATS :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**To performe this command you need to write a command like that :**\n(prefix)stats (id/name/mention/nothing)\nAliases : `` stats; userstats, info, userinfo, user-stats, user-info ``\n(prefix)game-stats (id/name/mention/nothing)\nAliases : `` gs, gamestats ``\nDescription : `` To see the stats of your friends."
                                                                        + " ``\n\n**EXEMPLE :**\n(prefix)game-stats CNoPro_Game")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    minigames.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**🕹️ ✦ MINIGAMES :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**To performe this command you need to write a command like that :**\n(prefix)minigames\n\nAliases : `` minigames-menu, games, game-menu, gm, mg ``\nDescription : `` To access to the minigames menu."
                                                                        + " ``\n\n**EXEMPLE :**\n(prefix)minigames")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    ping.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**💬 ✦ PING :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**To performe this command you need to write a command like that :**\n(prefix)ping\n\nDescription : `` To see my ping."
                                                                        + " ``\n\n**EXEMPLE :**\n(prefix)ping")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    prefix.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**#️⃣ ✦ PREFIX :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**To performe this command you need to write a command like that :**\n(prefix)prefix [new_prefix]\n\nAliases : `` p, prefix-change ``\nDescription : `` To change my prefix."
                                                                        + " ``\n\n**EXEMPLE :**\n(prefix)prefix -")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    rank.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**🎫 ✦ RANK :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**To performe this command you need to write a command like that :**\n(prefix)rank (id/name/mention/nothing)\n\nAliases : `` level, lvl ``\nDescription : `` To see your xp rank."
                                                                        + " ``\n\n**EXEMPLE :**\n(prefix)rank 532631412717649941")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    status.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**👁️ ✦ STATUS :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**To performe this command you need to write a command like that :**\n(prefix)status (id/name/mention/nothing)\n(prefix)set-status\nAliases : `` ss ``\nDescription : `` To see/set your status."
                                                                        + " ``\n\n**EXEMPLE :**\n(prefix)status @CNoPro_Game#4865")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    ship.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**❤️ ✦ RELATIONSHIP :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**To performe this command you need to write a command like that :**\n(prefix)ship [command] (mention)\n\nAliases : `` rs, relationship ``\nDescription : `` To be in couple with someone\n allowed commands are :``\n\n```diff\n- send (to send a request)\n- accept (to accept a request)\n- decline (to decline a request)\n- stop (to stop a relationship)\n- state (to view with who you are)\n```"
                                                                        + " \n**EXEMPLE :**\n(prefix)ship decline Du_Cassoulet")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        } else if(language[message.guild.id].language === "french") {
            embed.setDescription("**Le préfixe du bot est : `` " + prefixes[message.guild.id].prefixes + " ``\nLa version du bot est la version `` " + package.version +
            " ``\n\nIl y a deux catégories :**")
            .addField("🎮 • Jeux", "Tous les mini-jeux sont dans cette catégorie.", true)
            .addField("⚙️ • Utilitées", "Toutes les commandes utiles sont ici.", true)
            .addField("** **", "** **")
            .addField("📋 ~ Credits :", "- 𝗗𝘂 𝗖𝗮𝘀𝘀𝗼𝘂𝗹𝗲𝘁#0666\n- CNoPro_Game#4865")
            .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
            message.channel.send(embed).then(msg => {
                msg.react("🎮").then(r => {
                    msg.react("⚙️").then(r => {

                        const gamefilter = (reaction, user) => reaction.emoji.name === '🎮' && user.id === message.author.id;
                        const utilfilter = (reaction, user) => reaction.emoji.name === '⚙️' && user.id === message.author.id;

                        const game = msg.createReactionCollector(gamefilter, { time: 60000 });
                        const util = msg.createReactionCollector(utilfilter, { time: 60000 });

                        game.on('collect', r => {
                            msg.delete(msg);
                            let embed2 = new MessageEmbed()
                            .setColor(color.main)
                            .setTitle("**❓ ✦ HELP :**")
                            .setThumbnail(config.icon)
                            .setTimestamp(date)
                            .addField("⚔️ battle", "Pour affronter un membre", true)
                            .addField("🔋 health", "Pour voir vos points de vie", true)
                            .addField("💥 deminer", "Pour jouer au démineur", true)
                            .addField("🔎 findme", "Vous devez choisir la bonne réaction", true)
                            .addField("🔺 galaga", "Pour jouer à galaga", true)
                            .addField("🎲 predict-dice", "Vous devez prédire le nombre sur lequel va tomber le dé", true)
                            .addField("<:pacman:747733530188185642> pacman", "Pour jouer à un pacman", true)
                            .addField("<:rock:716601680057204757> rock-paper-scissors", "Pour jouer à pierre feuille ciseaux avec moi", true)
                            .addField("🎰 slotmachine", "Pour jouer à la machine à sous", true)
                            .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                            message.channel.send(embed2).then(msg => {
                                msg.react("⚔️").then(r => {
                                    msg.react("🔋").then(r => {
                                        msg.react("💥").then(r => {
                                            msg.react("🔎").then(r => {
                                                msg.react("🔺").then(r => {
                                                    msg.react("🎲").then(r => {
                                                        msg.react("747733530188185642").then(r => {
                                                            msg.react("747734256180133959").then(r => {
                                                                msg.react("🎰").then(r => {

                                                                    const battlefilter = (reaction, user) => reaction.emoji.name === '⚔️' && user.id === message.author.id;
                                                                    const healthfilter = (reaction, user) => reaction.emoji.name === '🔋' && user.id === message.author.id;
                                                                    const deminerfilter = (reaction, user) => reaction.emoji.name === '💥' && user.id === message.author.id;
                                                                    const findmefilter = (reaction, user) => reaction.emoji.name === '🔎' && user.id === message.author.id;
                                                                    const galagafilter = (reaction, user) => reaction.emoji.name === '🔺' && user.id === message.author.id;
                                                                    const predictdicefilter = (reaction, user) => reaction.emoji.name === '🎲' && user.id === message.author.id;
                                                                    const pacmanfilter = (reaction, user) => reaction.emoji.id === '747733530188185642' && user.id === message.author.id;
                                                                    const rpsfilter = (reaction, user) => reaction.emoji.id === '747734256180133959' && user.id === message.author.id;
                                                                    const slotmachinefilter = (reaction, user) => reaction.emoji.name === '🎰' && user.id === message.author.id;

                                                                    const battle = msg.createReactionCollector(battlefilter, { time: 60000 });
                                                                    const health = msg.createReactionCollector(healthfilter, { time: 60000 });
                                                                    const deminer = msg.createReactionCollector(deminerfilter, { time: 60000 });
                                                                    const findme = msg.createReactionCollector(findmefilter, { time: 60000 });
                                                                    const galaga = msg.createReactionCollector(galagafilter, { time: 60000 });
                                                                    const predictdice = msg.createReactionCollector(predictdicefilter, { time: 60000 });
                                                                    const pacman = msg.createReactionCollector(pacmanfilter, { time: 60000 });
                                                                    const rps = msg.createReactionCollector(rpsfilter, { time: 60000 });
                                                                    const slotmachine = msg.createReactionCollector(slotmachinefilter, { time: 60000 });

                                                                    battle.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**⚔️ ✦ BATTLE :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**Pour utiliser cette commande vous devez la formuler comme ceci :**\n(préfixe)battle [oppenent {nom/id/mention}] [weapon {nom/id}]\n\nDescription : `` Cette commande est un moyer facile d'affronter vos amis"
                                                                        + ". ``\n\n**ARMES :**\n```diff\n- sword [id: 001]\n- hammer [id: 002]\n- shurikens [id: 003]\n- gun [id: 004]\n- healer [id: 005]\n```\n**EXEMPLE :**\n(préfixe)battle Du_Cassoulet hammer")
                                                                        .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    health.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**🔋 ✦ HEALTH :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**Pour utiliser cette commande vous devez la formuler comme ceci :**\n(préfixe)hp [nom/id/mention/rien]\n\nAlias : `` hp ``\nDescription : `` Cette commande"
                                                                        + " est juste pour voir vôtre vie pendant les battles. ``\n\n**EXEMPLE :**\n(préfixe)hp Du_Cassoulet")
                                                                        .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    deminer.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**💥 ✦ DEMINER :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**Pour utiliser cette commande vous devez la formuler comme ceci :**\n(préfixe)deminer\n\nAlias : `` demine ``\nDescription : `` Dans ce mini-jeu vous devrez "
                                                                        + "cliquer sur les cases pour trouver les mines sans les faire exploser. ``\n\n**EXEMPLE :**\n(préfixe)deminer")
                                                                        .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    findme.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**🔎 ✦ FIND ME :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**Pour utiliser cette commande vous devez la formuler comme ceci :**\n(préfixe)find-me\n\nAlias : `` findme, fm``\nDescription : `` Vous devrez "
                                                                        + "trouver le bon emoji en cliquant dessus. ``\n\n**EXEMPLE :**\n(préfixe)findme")
                                                                        .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    galaga.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**🔺 ✦ GALAGA :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**Pour utiliser cette commande vous devez la formuler comme ceci :**\n(préfixe)galaga\nDescription : `` Vous êtes dans un vaisseau spatial et vous devez "
                                                                        + "détruire les astéroïdes. `` \n\n**EXEMPLE :**\n(préfixe)galaga")
                                                                        .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    predictdice.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**🎲 ✦ PREDICT DICE :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**Pour utiliser cette commande vous devez la formuler comme ceci :**\n(préfixe)pedict-dice [chiffre {1-6}]\n\nAlias : `` predict, pd ``\nDescription : `` Vous devez prédire sur quel chiffre"
                                                                        + " va tomber le dé. ``\n\n**EXEMPLE :**\n(préfixe)pedict-dice 3")
                                                                        .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    pacman.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**<:pacman:747733530188185642> ✦ PACMAN :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**Pour utiliser cette commande vous devez la formuler comme ceci :**\n(préfixe)pacman\n\nDescription : `` Vous devez manger 30 pac gums ``"
                                                                        + "\n\n**EXEMPLE :**\n(préfixe)pacman")
                                                                        .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    rps.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**<:rock:716601680057204757> ✦ PIERRE FEUILLE CISEAUX**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**Pour utiliser cette commande vous devez la formuler comme ceci :**\n(préfixe)rock-paper-scissors\n\nAlias : `` rockpaperscissors, rps ``\nDescription : "
                                                                        + "`` Vous pouvez jouer à pierre feuille ciseaux en cliquant sur les réactions. ``\n\n**EXEMPLE :**\n(préfixe)rock-paper-scissors")
                                                                        .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    slotmachine.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**🎰 ✦ SLOT MACHINE :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**Pour utiliser cette commande vous devez la formuler comme ceci :**\n(préfixe)slot-machine\n\nAlias : `` sm, slotmachine, slot ``\nDescription : `` Vous avez gagné si les trois emojis sont les mêmes"
                                                                        + " ``\n\n**EXEMPLE :**\n(préfixe)slot-machine")
                                                                        .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                        util.on('collect', r => {
                            msg.delete(msg);
                            let embed2 = new MessageEmbed()
                            .setColor(color.main)
                            .setTitle("**❓ ✦ HELP :**")
                            .setThumbnail(config.icon)
                            .setTimestamp(date)
                            .addField("🖼️ avatar", "Pour voir vôtre avatar", true)
                            .addField("🌐 language", "Pour changer mon language", true)
                            .addField("🕹️ minigames", "Pour jouer aux mini jeux disponibles", true)
                            .addField("💬 ping", "Pour voir mon ping", true)
                            .addField("#️⃣ prefix", "Pour changer mon préfixe", true)
                            .addField("🎫 rank", "Pour voir vôtre rank-card", true)
                            .addField("👁️ status", "Pour connaitre vôtre statut", true)
                            .addField("👁️ set-status", "Pour changer vôtre statut", true)
                            .addField("❤️ ship", "Pour se mettre en couple avec quelqu'un", true)
                            .addField("📊 stats", "Pour connaître vos stats", true)
                            .addField("📊 game-stats", "Pour connaiître vos stats de jeu", true)
                            .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                            message.channel.send(embed2).then(msg => {
                                msg.react("🖼️").then(r => {
                                    msg.react("🌐").then(r => {
                                        msg.react("🕹️").then(r => {
                                            msg.react("💬").then(r => {
                                                msg.react("#️⃣").then(r => {
                                                    msg.react("🎫").then(r => {
                                                        msg.react("👁️").then(r => {
                                                            msg.react("❤️").then(r => {
                                                                msg.react("📊").then(r => {

                                                                    const avatarfilter = (reaction, user) => reaction.emoji.name === '🖼️' && user.id === message.author.id;
                                                                    const languagefilter = (reaction, user) => reaction.emoji.name === '🌐' && user.id === message.author.id;
                                                                    const minigamesfilter = (reaction, user) => reaction.emoji.name === '🕹️' && user.id === message.author.id;
                                                                    const pingfilter = (reaction, user) => reaction.emoji.name === '💬' && user.id === message.author.id;
                                                                    const prefixfilter = (reaction, user) => reaction.emoji.name === '#️⃣' && user.id === message.author.id;
                                                                    const rankfilter = (reaction, user) => reaction.emoji.name === '🎫' && user.id === message.author.id;
                                                                    const statusfilter = (reaction, user) => reaction.emoji.name === '👁️' && user.id === message.author.id;
                                                                    const shipfilter = (reaction, user) => reaction.emoji.name === '❤️' && user.id === message.author.id;
                                                                    const statsfilter = (reaction, user) => reaction.emoji.name === '📊' && user.id === message.author.id;

                                                                    const avatar = msg.createReactionCollector(avatarfilter, { time: 60000 });
                                                                    const language = msg.createReactionCollector(languagefilter, { time: 60000 });
                                                                    const minigames = msg.createReactionCollector(minigamesfilter, { time: 60000 });
                                                                    const ping = msg.createReactionCollector(pingfilter, { time: 60000 });
                                                                    const prefix = msg.createReactionCollector(prefixfilter, { time: 60000 });
                                                                    const rank = msg.createReactionCollector(rankfilter, { time: 60000 });
                                                                    const status = msg.createReactionCollector(statusfilter, { time: 60000 });
                                                                    const ship = msg.createReactionCollector(shipfilter, { time: 60000 });
                                                                    const stats = msg.createReactionCollector(statsfilter, { time: 60000 });

                                                                    avatar.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**🖼️ ✦ AVATAR :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**Pour utiliser cette commande vous devez la formuler comme ceci :**\n(préfixe)avatar (nom/id/mention/rien)\n\nDescription : `` Pour voir l'avatar de vos amis."
                                                                        + " ``\n\n**EXEMPLE :**\n(préfixe)avatar Du_Cassoulet")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    language.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**🌐 ✦ LANGUAGE :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**Pour utiliser cette commande vous devez la formuler comme ceci :**\n(préfixe)slot\n\nAlias : `` language-change, set-language, l ``\nDescription : `` Pour changer mon language."
                                                                        + " ``\n\n**EXEMPLE :**\n(préfixe)language french")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    stats.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**🎰 ✦ STATS :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**Pour utiliser cette commande vous devez la formuler comme ceci :**\n(préfixe)stats (id/nom/mention/rien)\nAlias : `` stats; userstats, info, userinfo, user-stats, user-info ``\n(préfixe)game-stats (id/nom/mention/rien)\nAlias : `` gs, gamestats ``\nDescription : `` Pour voir les stats de vos amis."
                                                                        + " ``\n\n**EXEMPLE :**\n(préfixe)game-stats CNoPro_Game")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    minigames.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**🕹️ ✦ MINIGAMES :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**Pour utiliser cette commande vous devez la formuler comme ceci :**\n(préfixe)minigames\n\nAlias : `` minigames-menu, games, game-menu, gm, mg ``\nDescription : `` Pour accéder au menu des mini-jeux."
                                                                        + " ``\n\n**EXEMPLE :**\n(préfixe)minigames")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    ping.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**💬 ✦ PING :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**Pour utiliser cette commande vous devez la formuler comme ceci :**\n(préfixe)ping\n\nDescription : `` Pour voir mon ping."
                                                                        + " ``\n\n**EXEMPLE :**\n(préfixe)ping")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    préfixe.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**#️⃣ ✦ préfixe :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**Pour utiliser cette commande vous devez la formuler comme ceci :**\n(préfixe)préfixe [new_préfixe]\n\nAlias : `` p, préfixe-change ``\nDescription : `` Pour changer mon préfixe."
                                                                        + " ``\n\n**EXEMPLE :**\n(préfixe)préfixe -")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    rank.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**🎫 ✦ RANK :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**Pour utiliser cette commande vous devez la formuler comme ceci :**\n(préfixe)rank (id/nom/mention/rien)\n\nAlias : `` level, lvl ``\nDescription : `` Pour voir vôtre rank-card."
                                                                        + " ``\n\n**EXEMPLE :**\n(préfixe)rank 532631412717649941")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    status.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**👁️ ✦ STATUS :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**Pour utiliser cette commande vous devez la formuler comme ceci :**\n(préfixe)status (id/nom/mention/rien)\n(préfixe)set-status\nAlias : `` ss ``\nDescription : `` Pour voir/définir vôtre statut."
                                                                        + " ``\n\n**EXEMPLE :**\n(préfixe)status @CNoPro_Game#4865")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                    ship.on('collect', r => {
                                                                        msg.delete(msg);
                                                                        let embed3 = new MessageEmbed()
                                                                        .setColor(color.main)
                                                                        .setThumbnail(config.icon)
                                                                        .setTitle("**❤️ ✦ RELATIONSHIP :**")
                                                                        .setTimestamp(date)
                                                                        .setDescription("**Pour utiliser cette commande vous devez la formuler comme ceci :**\n(préfixe)ship [command] (mention)\n\nAlias : `` rs, relationship ``\nDescription : `` Pour être en couple avec quelqu'un\n les commandes valides sont :``\n\n```diff\n- send (pour envoyer une demande)\n- accept (pour accepter une demande)\n- decline (pour décliner une demande)\n- stop (pour stopper une relation)\n- state (pour voir avec qui vous êtes)\n```"
                                                                        + " \n**EXEMPLE :**\n(préfixe)ship decline Du_Cassoulet")
                                                                        .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                                                        message.channel.send(embed3)
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        };
    }
};