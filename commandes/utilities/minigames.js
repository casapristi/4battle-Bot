const { MessageEmbed, MessageAttachment } = require("discord.js");
const color = require("../../json/color.json");
const config = require("../../json/config.json");
const fs = require("fs");
const { NODATA } = require("dns");
const { listenerCount } = require("process");
function getRandom(max) {return Math.floor(Math.random() * Math.floor(max))};
let xp = JSON.parse(fs.readFileSync("./json/data/xp.json", "utf8"));
function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
    name: "minigames",
    aliases: ["minigames-menu", "games", "games-menu", "gm", "mg"],
    category: "utilities",
    run: async (client, message, args) => {

        let date = new Date();
        
        function demine() {
            let language = JSON.parse(fs.readFileSync("./json/data/language.json", "utf8"));
        
                let emoji = ["||:emoji[0]:||","||:one:||","||:two:||","||:three:||","||:four:||","||:five:||","||:boom:||"];
                let l1 = [emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
                let l2 = [emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
                let l3 = [emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
                let l4 = [emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
                let l5 = [emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
                let l6 = [emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
                let l7 = [emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
                let l8 = [emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
                let l9 = [emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
                let c = [l1,l2,l3,l4,l5,l6,l7,l8,l9];
                function upBlock(x,y){
                    let tier1 = ["||:emoji[0]:||","||:one:||","||:two:||","||:three:||","||:four:||","||:five:||","||:boom:||"];
                    let tier2 = ["||:one:||","||:two:||","||:three:||","||:four:||","||:five:||","||:six:||","||:boom:||"];
                    if (x >= 0 && x <= 8 && y >= 0 && y <= 8) {
                        for(i=0;i<7;i++) {
                            if (c[y][x] == tier1[i]) {
                                var ly = c[y][x] = tier2[i];
                                return;
                            };
                        };
                    };
                };
        
                function placeBomb(x,y) {
                    if (c[y][x] != "||:bomb:||") {
                        var ly = c[y][x] = emoji[6];
                        upBlock(x,y+1);
                        upBlock(x,y-1);
                        upBlock(x+1,y+1);
                        upBlock(x-1,y+1);
                        upBlock(x+1,y-1);
                        upBlock(x-1,y-1);
                        upBlock(x-1,y);
                        upBlock(x+1,y);
                    } else {
                        placeBomb(getRandom(8),getRandom(8));
                    };
                };
                placeBomb(getRandom(8),getRandom(8));
                placeBomb(getRandom(8),getRandom(8));
                placeBomb(getRandom(8),getRandom(8));
                placeBomb(getRandom(8),getRandom(8));
                placeBomb(getRandom(8),getRandom(8));
                placeBomb(getRandom(8),getRandom(8));
                placeBomb(getRandom(8),getRandom(8));
                placeBomb(getRandom(8),getRandom(8));
                placeBomb(getRandom(8),getRandom(8));
                placeBomb(getRandom(8),getRandom(8));
        
                if(!language[message.guild.id] || language[message.guild.id].language === "english") {
                    let embed = new MessageEmbed()
                    .setColor(color.main)
                    .setTitle("**💥 ✦ DEMINER**")
                    .setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n"+l4.join("")+"\n"+l5.join("")+"\n"+l6.join("")+"\n"+l7.join("")+"\n"+l8.join("")+"\n"+l9.join("")+"\n")
                    .setThumbnail(config.icon)
                    .setFooter(`Orederd by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                message.channel.send(embed);
                } else if(language[message.guild.id].language === "french") {
                    let embed = new MessageEmbed()
                    .setColor(color.main)
                    .setTitle("**💥 ✦ DEMINEUR :**")
                    .setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n"+l4.join("")+"\n"+l5.join("")+"\n"+l6.join("")+"\n"+l7.join("")+"\n"+l8.join("")+"\n"+l9.join("")+"\n")
                    .setThumbnail(config.icon)
                    .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                    message.channel.send(embed);
                };
        };

        function findmegame() {
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
                            });
                            two.on('collect', r => {
                                stop = true;
                                if(randomreacts === "2️⃣") {
                                    frquestion.setDescription("You found the correct emoji ! :)\n\nThe correct emoji was the number " + randomreacts + " !")
                                } else {
                                    frquestion.setDescription("You lost !\n\nThe correct emoji was the number " + randomreacts + " !\nYou chose the number 2️⃣")
                                };
                                msg.edit(frquestion);
                            });
                            three.on('collect', r => {
                                stop = true;
                                if(randomreacts === "3️⃣") {
                                    frquestion.setDescription("You found the correct emoji ! :)\n\nThe correct emoji was the number " + randomreacts + " !")
                                } else {
                                    frquestion.setDescription("You lost !\n\nThe correct emoji was the number " + randomreacts + " !\nYou chose the number 3️⃣")
                                };
                                msg.edit(frquestion);
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
                            });
                            two.on('collect', r => {
                                stop = true;
                                if(randomreacts === "2️⃣") {
                                    frquestion.setDescription("Tu as trouvé le bon emoji ! :)\n\nLe bon emoji était bien le numéro " + randomreacts + " !")
                                } else {
                                    frquestion.setDescription("Tu as perdu !\n\nLe bon emoji était le numéro " + randomreacts + " !\nVous aviez choisi le numéro 2️⃣")
                                };
                                msg.edit(frquestion);
                            });
                            three.on('collect', r => {
                                stop = true;
                                if(randomreacts === "3️⃣") {
                                    frquestion.setDescription("Tu as trouvé le bon emoji ! :)\n\nLe bon emoji était bien le numéro " + randomreacts + " !")
                                } else {
                                    frquestion.setDescription("Tu as perdu !\n\nLe bon emoji était le numéro " + randomreacts + " !\nVous aviez choisi le numéro 3️⃣")
                                };
                                msg.edit(frquestion);
                            });
                        };
                    });
                });
            });
        }
        }

        function rpsc() {
            let language = JSON.parse(fs.readFileSync("./json/data/language.json", "utf8"));
        let rpsID = JSON.parse(fs.readFileSync("./json/data/rps.json", "utf8"));
        rpsID[message.author.id] = {
            theid: message.id
        };
        fs.writeFile("./json/data/rps.json", JSON.stringify(rpsID), (err) => {if(err) console.log("[ERROR]" + err)});

        if(!language[message.guild.id] || language[message.guild.id].language === "english") {
            let enembed = new MessageEmbed()
            .setColor(color.main)
            .setTitle('**🕹️ ✦ ROCK PAPER SCISSORS**')
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
                        msg.react("716604212238221373");
                    });
                });
            });
        } else if(language[message.guild.id].language === "french") {
            let frembed = new MessageEmbed()
            .setColor(color.main)
            .setTitle('**🕹️ ✦ PIERRE FEUILLE CISEAUX**')
            .setDescription('**Choisit une réaction**\nVous avez le choix entre :')
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
                        msg.react("716604212238221373");
                    });
                });
            });
        }
        }

        function slotmachine() {
            function Emoji(id) {return client.emojis.cache.get(id).toString()};

        let language = JSON.parse(fs.readFileSync("./json/data/language.json", "utf8"));

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
                isvalidated ="✅";
                gain = "``+ " + xpAdd + " xp``";
                cur = {xp: cur.xp + xpAdd};
            } else {
                cur = {xp: cur.xp - xpLost};
            };
        } else {
            cur = {xp: cur.xp - xpLost};
        };

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
        }

        message.channel.send(embed).then(msg => {
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
        })
        }

        function galagagame() {
            let language = JSON.parse(fs.readFileSync("./json/data/language.json"));

        let emoji = ["<:N_:718506491660992735>","🔺","🔻","💥"];
        let player = emoji[1];
        let l1 = [emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
        let l2 = [emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
        let l3 = [emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
        let l4 = [emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
        let l5 = [emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
        let l6 = [emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
        let l7 = [emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
        let l8 = [emoji[0],emoji[0],emoji[0],emoji[0],player,emoji[0],emoji[0],emoji[0],emoji[0]];
        let l9 = [emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0],emoji[0]];
        let c = [l1,l2,l3,l4,l5,l6,l7,l8,l9];
        let px = 4;
        let py = 7;
        let shootx = px;
        let enemycount = 0;
        let enemyx = [];
        let enemyy = [];
        let stop = 0;
        spawnTime = 0;
        function placeBlock(x,y,slot) {
            c[y][x] = emoji[slot];
        }
        function getBlock(x,y) {
            return c[y][x];
        }
        function addEnemy(x,y) {
            placeBlock(x,y,2);
            enemyx[enemycount] = x;
            enemyy[enemycount] = y;
            enemycount++;
        }
        let embed = new MessageEmbed()
        .setColor(color.red)
        .setTitle("**🔺 ✦ GALAGA :**")
        .setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n"+l4.join("")+"\n"+l5.join("")+"\n"+l6.join("")+"\n"+l7.join("")+"\n"+l8.join("")+"\n"+l9.join("")+"\n")
        .setThumbnail(config.icon);
        if(!language[message.guild.id] || language[message.guild.id].language === "english") {
            embed.setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        } else if(language[message.guild.id].language === "french") {
            embed.setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        };
        message.channel.send(embed).then(msg => {
            msg.react('717401718417129494').then(r => {
                msg.react('717401719696392202').then
                msg.react('💥')
                function gameOver(){
                    stop = 1;
                }
                function moveDown() {
                    for (i=0;i<enemycount;i++) {
                        if (enemyy[i] < 8) {
                            if (shootx == enemyx[i]){
                                placeBlock(enemyx[i],enemyy[i],3);
                                enemyy[i] = "";
                                enemyx[i] = "";
                            }
                            if (enemyy[i] != "") {
                                placeBlock(enemyx[i],enemyy[i]+1,2);
                                placeBlock(enemyx[i],enemyy[i],0);
                                enemyy[i]++;
                            }
                            embed.setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n"+l4.join("")+"\n"+l5.join("")+"\n"+l6.join("")+"\n"+l7.join("")+"\n"+l8.join("")+"\n"+l9.join("")+"\n")
                            msg.edit(embed);
                        } else {
                            gameOver();
                        }
                    }
                }
                addEnemy(getRandom(7)+1,1);
                function actions() {
                    spawnTime++;
                    moveDown();
                    if (spawnTime === 5) {
                        spawnTime = 0;
                        addEnemy(getRandom(7)+1,1);
                    }
                }
                const backwardsFilter = (reaction, user) => reaction.emoji.id === '717401718417129494' && user.id === message.author.id;
                const forwardsFilter = (reaction, user) => reaction.emoji.id === '717401719696392202' && user.id === message.author.id;
                const shootFilter = (reaction, user) => reaction.emoji.name === '💥' && user.id === message.author.id;

                const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
                const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });
                const shoot = msg.createReactionCollector(shootFilter, { time: 60000 });
                backwards.on('collect', r => {
                    if (!stop) {
                        placeBlock(px-1,py,1);
                        placeBlock(px,py,0);
                        px--;
                        embed.setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n"+l4.join("")+"\n"+l5.join("")+"\n"+l6.join("")+"\n"+l7.join("")+"\n"+l8.join("")+"\n"+l9.join("")+"\n")
                        msg.edit(embed);
                        actions();
                    }
                });
                forwards.on('collect', r => {
                    if (!stop) {
                        placeBlock(px+1,py,1);
                        placeBlock(px,py,0);
                        px++;
                        embed.setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n"+l4.join("")+"\n"+l5.join("")+"\n"+l6.join("")+"\n"+l7.join("")+"\n"+l8.join("")+"\n"+l9.join("")+"\n")
                        msg.edit(embed);
                        actions();
                    }
                });
                shoot.on('collect', r => {
                    shootx = px;
                });
            });
        });
        }

        let language = JSON.parse(fs.readFileSync("./json/data/language.json", "utf8"));

        const gamelist = [
            "battle",
            "pacman",
            "deminer",
            "findme",
            "rock paper scissors",
            "slotmachine",
            "galaga"
        ];

        let embed = new MessageEmbed()
        .setColor(color.main)
        .setThumbnail(config.icon);

        if(!language[message.guild.id] || language[message.guild.id].language === "english") {
            embed.setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
            .setDescription("__**Click on reactions to play to a minigame !**__")
        } else if(language[message.guild.id].language === "french") {
            embed.setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
            .setDescription("__**Clique sur les réactions pour jouer à un minijeu !**__")
        };
        embed.addField("<:swords:747732615498432594> " + gamelist[0], "** **", true)
        .addField("<:pacman:747733530188185642> " + gamelist[1], "** **", true)
        .addField("<:deminer:747733762246443129> " + gamelist[2], "** **", true)
        .addField("<:interrogation:747733936788209716> " + gamelist[3], "** **", true)
        .addField("<:rockpaperscissors:747734256180133959> " + gamelist[4], "** **", true)
        .addField("<:slotmachine:747734464100302909> " + gamelist[5], "** **", true)
        .addField("🔺" + gamelist[6], "** **", true)
        .setTitle("**🕹️ ✦ GAME-MENU :**");
        message.channel.send(embed).then(msg => {
            msg.react("747732615498432594").then(r => {
                msg.react("747733530188185642").then(r => {
                    msg.react("747733762246443129").then(r => {
                        msg.react("747733936788209716").then(r => {
                            msg.react("747734256180133959").then(r => {
                                msg.react("747734464100302909").then(r => {
                                    msg.react("🔺").then(r => {
                                        const filter1 = (reaction, user) => reaction.emoji.id === '747732615498432594' && user.id === message.author.id;
                                        const filter2 = (reaction, user) => reaction.emoji.id === '747733530188185642' && user.id === message.author.id;
                                        const filter3 = (reaction, user) => reaction.emoji.id === '747733762246443129' && user.id === message.author.id;
                                        const filter4 = (reaction, user) => reaction.emoji.id === '747733936788209716' && user.id === message.author.id;
                                        const filter5 = (reaction, user) => reaction.emoji.id === '747734256180133959' && user.id === message.author.id;
                                        const filter6 = (reaction, user) => reaction.emoji.id === '747734464100302909' && user.id === message.author.id;
                                        const filter7 = (reaction, user) => reaction.emoji.name === '🔺' && user.id === message.author.id;

                                        const battle = msg.createReactionCollector(filter1, { time: 60000 });
                                        const pacman = msg.createReactionCollector(filter2, { time: 60000 });
                                        const deminer = msg.createReactionCollector(filter3, { time: 60000 });
                                        const findme = msg.createReactionCollector(filter4, { time: 60000 });
                                        const rps = msg.createReactionCollector(filter5, { time: 60000 });
                                        const slot = msg.createReactionCollector(filter6, { time: 60000 });
                                        const galaga = msg.createReactionCollector(filter7, { time: 60000 });

                                        battle.on('collect', r => {
                                            msg.delete(msg);
                                            let embed = new MessageEmbed()
                                            .setColor(color.main)
                                            .setThumbnail(config.icon)
                                            .setTitle("⚔️ ✦ BATTLE :")
                                            .setTimestamp(date)
                                            if(!language[message.guild.id].language || language[message.guild.id].language === "english") {
                                                embed.setDescription("**To performe this command you need to write a command like that :**\n\n(prefix)battle [oppenent {name/id/mention}] [weapon {name/id}]"
                                                + "\n\n**WEAPONS :**\n```diff\n- sword [id: 001]\n- hammer [id: 002]\n- shurikens [id: 003]\n- gun [id: 004]\n- healer [id: 005]\n```\n**EXEMPLE :**\n(prefix)battle Du_Cassoulet hammer")
                                                .setFooter(`Ordered by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                            } else if(language[message.guild.id].language === "french") {
                                                embed.setDescription("**Pour être fonctionnelle, vous devez écrire la commande comme ceci :**\n\n(préfixe)battle [oppenent {name/id/mention}] [weapon {name/id}]"
                                                + "\n\n**WEAPONS :**\n```diff\n- sword [id: 001]\n- hammer [id: 002]\n- shurikens [id: 003]\n- gun [id: 004]\n- healer [id: 005]\n```\n**EXEMPLE :**\n(préfixe)battle Du_Cassoulet hammer")
                                                .setFooter(`Commandé par ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                                            };
                                            message.channel.send(embed)
                                        });
                                        pacman.on('collect', r => {
                                            msg.delete(msg);
                                        });
                                        deminer.on('collect', r => {
                                            msg.delete(msg);
                                            demine();
                                        });
                                        findme.on('collect', r => {
                                            msg.delete(msg);
                                            findmegame();
                                        });
                                        rps.on('collect', r => {
                                            msg.delete(msg);
                                            rpsc();
                                        });
                                        slot.on('collect', r => {
                                            msg.delete(msg);
                                            slotmachine();
                                        });
                                        galaga.on('collect', r => {
                                            msg.delete(msg);
                                            galagagame();
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }
};