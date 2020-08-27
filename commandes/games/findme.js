const { MessageEmbed, MessageAttachment } = require("discord.js");
const color = require("../../json/color.json");
const config = require("../../json/config.json");
const fs = require("fs");

module.exports = {
    name: "find-me",
    aliases: ["fm", "findme"],
    category: "games",
    run: async (client, message, args) => {
        let language = JSON.parse(fs.readFileSync("./json/data/language.json", "utf8"));

        let reacts = ["1️⃣", "2️⃣", "3️⃣"]
        let randomreacts = reacts[Math.floor(Math.random() * reacts.length)];
        let date = new Date();
        let stop = false;

        if(!language[message.guild.id] || language[message.guild.id].language === "english") {
            let frquestion = new MessageEmbed()
            .setColor(color.main)
            .setTitle("**🔎 ✦ FIND ME**")
            .setDescription("Find the correct emoji by **clicking on it**.")
            .setThumbnail(config.icon)
            .setTimestamp(date)
            .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
            message.channel.send(frquestion).then(msg => {
                msg.react("1️⃣").then(r => {
                    msg.react("2️⃣").then(r => {
                        msg.react("3️⃣")

                        const filter1 = (reaction, user) => reaction.emoji.name === '1️⃣' && user.id === message.author.id;
                        const filter2 = (reaction, user) => reaction.emoji.name === '2️⃣' && user.id === message.author.id;
                        const filter3 = (reaction, user) => reaction.emoji.name === '3️⃣' && user.id === message.author.id;

                        const one = msg.createReactionCollector(filter1, { time: 60000 });
                        const two = msg.createReactionCollector(filter2, { time: 60000 });
                        const three = msg.createReactionCollector(filter3, { time: 60000 });

                        if(stop === false) {
                            one.on('collect', r => {
                                stop = true;
                                if(randomreacts === "1️⃣") {
                                    frquestion.setDescription("You found the correct emoji ! :)\n\nThe correct emoji was the number " + randomreacts + " !")
                                } else {
                                    frquestion.setDescription("You lost !\n\nThe correct emoji was the number " + randomreacts + " !\nYou chose the number 1️⃣")
                                };
                                msg.edit(frquestion);
                                msg.reactions.removeAll()
                            });
                            two.on('collect', r => {
                                stop = true;
                                if(randomreacts === "2️⃣") {
                                    frquestion.setDescription("You found the correct emoji ! :)\n\nThe correct emoji was the number " + randomreacts + " !")
                                } else {
                                    frquestion.setDescription("You lost !\n\nThe correct emoji was the number " + randomreacts + " !\nYou chose the number 2️⃣")
                                };
                                msg.edit(frquestion);
                                msg.reactions.removeAll()
                            });
                            three.on('collect', r => {
                                stop = true;
                                if(randomreacts === "3️⃣") {
                                    frquestion.setDescription("You found the correct emoji ! :)\n\nThe correct emoji was the number " + randomreacts + " !")
                                } else {
                                    frquestion.setDescription("You lost !\n\nThe correct emoji was the number " + randomreacts + " !\nYou chose the number 3️⃣")
                                };
                                msg.edit(frquestion);
                                msg.reactions.removeAll()
                            });
                        };
                    });
                });
            });
        } else if(language[message.guild.id].language === "french") {
            let frquestion = new MessageEmbed()
            .setColor(color.main)
            .setTitle("**🔎 ✦ FIND ME**")
            .setDescription("Trouve le bon emoji en **cliquant dessus**.")
            .setThumbnail(config.icon)
            .setTimestamp(date)
            .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
            message.channel.send(frquestion).then(msg => {
                msg.react("1️⃣").then(r => {
                    msg.react("2️⃣").then(r => {
                        msg.react("3️⃣")

                        const filter1 = (reaction, user) => reaction.emoji.name === '1️⃣' && user.id === message.author.id;
                        const filter2 = (reaction, user) => reaction.emoji.name === '2️⃣' && user.id === message.author.id;
                        const filter3 = (reaction, user) => reaction.emoji.name === '3️⃣' && user.id === message.author.id;

                        const one = msg.createReactionCollector(filter1, { time: 60000 });
                        const two = msg.createReactionCollector(filter2, { time: 60000 });
                        const three = msg.createReactionCollector(filter3, { time: 60000 });

                        if(stop === false) {
                            one.on('collect', r => {
                                stop = true;
                                if(randomreacts === "1️⃣") {
                                    frquestion.setDescription("Tu as trouvé le bon emoji ! :)\n\nLe bon emoji était bien le numéro " + randomreacts + " !")
                                } else {
                                    frquestion.setDescription("Tu as perdu !\n\nLe bon emoji était le numéro " + randomreacts + " !\nVous aviez choisi le numéro 1️⃣")
                                };
                                msg.edit(frquestion);
                                msg.reactions.removeAll()
                            });
                            two.on('collect', r => {
                                stop = true;
                                if(randomreacts === "2️⃣") {
                                    frquestion.setDescription("Tu as trouvé le bon emoji ! :)\n\nLe bon emoji était bien le numéro " + randomreacts + " !")
                                } else {
                                    frquestion.setDescription("Tu as perdu !\n\nLe bon emoji était le numéro " + randomreacts + " !\nVous aviez choisi le numéro 2️⃣")
                                };
                                msg.edit(frquestion);
                                msg.reactions.removeAll()
                            });
                            three.on('collect', r => {
                                stop = true;
                                if(randomreacts === "3️⃣") {
                                    frquestion.setDescription("Tu as trouvé le bon emoji ! :)\n\nLe bon emoji était bien le numéro " + randomreacts + " !")
                                } else {
                                    frquestion.setDescription("Tu as perdu !\n\nLe bon emoji était le numéro " + randomreacts + " !\nVous aviez choisi le numéro 3️⃣")
                                };
                                msg.edit(frquestion);
                                msg.reactions.removeAll()
                            });
                        };
                    });
                });
            });
        };
    }
};