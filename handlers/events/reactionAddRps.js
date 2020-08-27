const { Discord, MessageEmbed } = require("discord.js");
const color = require("../../json/color.json");
const config = require("../../json/config.json");
const fs = require("fs");

module.exports = async (client, reaction, user) => {
    if(user.bot) return;
    const message = reaction.message;
    const member = message.guild.members.cache.get(user.id);

    const rock = "716601680057204757";
    const paper = "716603858268323841";
    const scissors = "716604212238221373";
    const cross = "716690554624409641";
    const reload = "716723967754371145";

    let rpsID = JSON.parse(fs.readFileSync("./json/data/rps.json", "utf8"));
    let language = JSON.parse(fs.readFileSync("./json/data/language.json", "utf8"));
    let xp = JSON.parse(fs.readFileSync("./json/data/xp.json", "utf8"));
    let wins = JSON.parse(fs.readFileSync("./json/data/wins.json", "utf8"));

    let xpAdd = Math.floor(Math.random() * 140 + 50);
    let xpLost = Math.floor(Math.random() * 70 + 20);
    let cur = xp[member.user.id + message.guild.id]

    let frrecmsg;
    let enrecmsg;

    let reactionsM = ["OwO", "UwU", "TwT", ">w<", ":(", ":)", ":/"]
    let reactionM = reactionsM[Math.floor(Math.random() * reactionsM.length)];

    let ID = rpsID[member.user.id].theid

    if([rock, paper, scissors, cross, reload].includes(reaction.emoji.id)) {
        switch(reaction.emoji.id) {

            case cross:
                if(user.bot) {
                    return;
                } else {
                    reaction.message.delete({ ID });
                };
            break;

            case reload:
            rpsID[member.user.id] = {
                theid: message.id
            };
            fs.writeFile("./json/data/rps.json", JSON.stringify(rpsID), (err) => {if(err) console.log("[ERROR] " + err)});
            reaction.message.delete({ ID });
            if(!language[message.guild.id] || language[message.guild.id].language === "english") {
                let enpfcbasembed = new MessageEmbed()
                .setColor(color.main)
                .setTitle('**🕹️ ✦ ROCK PAPER SCISSORS :**')
                .setDescription('**Select an emote**\nYou' + "'"+ 've the choice :')
                .addField("•═══─────══ • ✧ • ══─────═══•", "** **")
                .addField("Rock : <:rock:716601680057204757>", "Beats scissors <:scissors_emo:716604212238221373>", true)
                .addField("Paper : <:leave_wind:716603858268323841>", "Beats the rock <:rock:716601680057204757>", true)
                .addField("Scissors : <:scissors_emo:716604212238221373>", "Beats the paper <:leave_wind:716603858268323841>", true)
                .addField("•═══─────══ • ✧ • ══─────═══•", "** **")
                .setFooter(`Ordered by ${member.user.username}`, member.user.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setThumbnail(config.icon)
                let enpfcbasembedreact = await message.channel.send(enpfcbasembed);
                await enpfcbasembedreact.react("716601680057204757");
                await enpfcbasembedreact.react("716603858268323841");
                await enpfcbasembedreact.react("716604212238221373");
            } else if(language[message.guild.id].language === "french") {
                let frpfcbasembed = new MessageEmbed()
                .setColor(color.main)
                .setTitle('🕹️ ✦ PIERRE FEUILLE CISEAUX :')
                .setDescription('**Sélectionne un émoji**\nTu as le choix entre :')
                .addField("•═══─────══ • ✧ • ══─────═══•", "** **")
                .addField("Pierre : <:rock:716601680057204757>", "Bat les ciseaux <:scissors_emo:716604212238221373>", true)
                .addField("Feuille : <:leave_wind:716603858268323841>", "Bat la pierre <:rock:716601680057204757>", true)
                .addField("Ciseaux : <:scissors_emo:716604212238221373>", "Bat la feuille <:leave_wind:716603858268323841>", true)
                .addField("•═══─────══ • ✧ • ══─────═══•", "** **")
                .setFooter(`Commandé par ${member.user.username}`, member.user.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setThumbnail(config.icon)
                let frpfcbasembedreact = await message.channel.send(frpfcbasembed);
                await frpfcbasembedreact.react(rock);
                await frpfcbasembedreact.react(paper);
                await frpfcbasembedreact.react(scissors);
            };
            break;

            case rock:
            rpsID[member.user.id] = {
                theid: message.id
            };
            fs.writeFile("./json/data/rps.json", JSON.stringify(rpsID), (err) => {if(err) console.log("[ERROR] " + err)});
            reaction.message.delete({ ID });
            let enpfcPrandom = ["rock <:rock:716601680057204757>", "paper <:leave_wind:716603858268323841>", "scissors <:scissors_emo:716604212238221373>"]
            let engameP = enpfcPrandom[Math.floor(Math.random() * enpfcPrandom.length)];
            let entxtP = "";
            let frpfcPrandom = ["pierre <:rock:716601680057204757>", "feuille <:leave_wind:716603858268323841>", "ciseaux <:scissors_emo:716604212238221373>"]
            let frgameP = frpfcPrandom[Math.floor(Math.random() * frpfcPrandom.length)];
            let frtxtP = "";
            if(!language[message.guild.id] || language[message.guild.id].language === "english") {
                if(engameP === "scissors <:scissors_emo:716604212238221373>") {
                    entxtP = "You win ! " + reactionM;
                    wins[member.user.id + message.guild.id] = {wins: (wins[member.user.id + message.guild.id].wins + 1), defeats: wins[member.user.id + message.guild.id].defeats}
                    if(!xp[member.user.id + message.guild.id]) {
                        xp[member.user.id + message.guild.id] = {
                            xp: xpAdd
                        };
                    } else {
                        xp[member.user.id + message.guild.id] = {
                            xp: cur.xp + xpAdd
                        }
                    };
                    fs.writeFile("./json/data/xp.json", JSON.stringify(xp), (err) => {if(err) console.log("[ERROR] " + err)});
                    enrecmsg = "You win ``" + xpAdd + "`` xp."
                }
                if(engameP === "paper <:leave_wind:716603858268323841>") {
                    entxtP = "You lose ! " + reactionM;
                    wins[member.user.id + message.guild.id] = {wins: wins[member.user.id + message.guild.id].wins, defeats: (wins[member.user.id + message.guild.id].defeats + 1)}
                    if(!xp[member.user.id + message.guild.id]) {
                        xp[member.user.id + message.guild.id] = {
                            xp: 0
                        };
                    } else if (xpLost > xp[member.user.id = message.guild.id]) {
                        xp[member.user.id + message.guild.id] = {
                            xp: 0
                        }
                        xpLost = 0;
                    } else {
                        xp[member.user.id + message.guild.id] = {
                            xp: cur.xp - xpLost
                        }
                    };
                    fs.writeFile("./json/data/xp.json", JSON.stringify(xp), (err) => {if(err) console.log("[ERROR] " + err)});
                    enrecmsg = "You lose ``" + xpLost + "`` xp."
                }
                if(engameP === "rock <:rock:716601680057204757>") {
                    entxtP = "There is equality ! " + reactionM;
                    if(!xp[member.user.id + message.guild.id]) {
                        xp[member.user.id + message.guild.id] = {
                            xp: 0
                        };
                    }
                    fs.writeFile("./json/data/xp.json", JSON.stringify(xp), (err) => {if(err) console.log("[ERROR] " + err)});
                    enreg = "You lose/win nothing"
                }
                let enpfcP = new MessageEmbed()
                .setColor(color.main)
                .setTitle('**🕹️ ✦ ROCK PAPER SCISSORS**')
                .setDescription(`${entxtP}\n\n🔽  **Results**  🔽\nYou chosen **rock <:rock:716601680057204757>**\nI've chosen **${engameP}**\n\n${enrecmsg}`)
                .setThumbnail(config.icon)
                .setFooter(`Ordered by ${member.user.username}`, member.user.displayAvatarURL({ dynamic: true, size: 2048 }))
                let enpfcPreact = await message.channel.send(enpfcP);
                await enpfcPreact.react(reload);
                await enpfcPreact.react(cross);
            } else if(language[message.guild.id].language === "french") {
                if(frgameP === "ciseaux <:scissors_emo:716604212238221373>") {
                    frtxtP = "Vous avez gagné ! " + reactionM;
                    wins[member.user.id + message.guild.id] = {wins: (wins[member.user.id + message.guild.id].wins + 1), defeats: wins[member.user.id + message.guild.id].defeats}
                    if(!xp[member.user.id + message.guild.id]) {
                        xp[member.user.id + message.guild.id] = {
                            xp: xpAdd
                        };
                    } else {
                        xp[member.user.id + message.guild.id] = {
                            xp: cur.xp + xpAdd
                        }
                    };
                    fs.writeFile("./json/data/xp.json", JSON.stringify(xp), (err) => {if(err) console.log("[ERROR] " + err)});
                    frrecmsg = "Vous avez gagné ``" + xpAdd + "`` xp."
                };
                if(frgameP === "feuille <:leave_wind:716603858268323841>") {
                    frtxtP = "Vous avez perdu ! " + reactionM;
                    wins[member.user.id + message.guild.id] = {wins: wins[member.user.id + message.guild.id].wins, defeats: (wins[member.user.id + message.guild.id].defeats + 1)}
                    if(!xp[member.user.id + message.guild.id]) {
                        xp[member.user.id + message.guild.id] = {
                            xp: 0
                        };
                    } else if (xpLost > xp[member.user.id = message.guild.id]) {
                        xp[member.user.id + message.guild.id] = {
                            xp: 0
                        }
                        xpLost = 0;
                    } else {
                        xp[member.user.id + message.guild.id] = {
                            xp: cur.xp - xpLost
                        }
                    };
                    fs.writeFile("./json/data/xp.json", JSON.stringify(xp), (err) => {if(err) console.log("[ERROR] " + err)});
                    frrecmsg = "Vous avez perdu ``" + xpLost + "`` xp."
                };
                if(frgameP === "pierre <:rock:716601680057204757>") {
                    frtxtP = "Il y a égalité ! " + reactionM;
                    if(!xp[member.user.id + message.guild.id]) {
                        xp[member.user.id + message.guild.id] = {
                            xp: 0
                        };
                    };
                    fs.writeFile("./json/data/xp.json", JSON.stringify(xp), (err) => {if(err) console.log("[ERROR] " + err)});
                    frrecmsg = "Vous n'avez rien gagné/perdu"
                }
                let frpfcP = new MessageEmbed()
                .setColor(color.main)
                .setTitle('**🕹️ ✦ PIERRE FEUILLE CISEAUX**')
                .setDescription(`${frtxtP}\n\n🔽  **Résultats**  🔽\nVous avez choisi **pierre <:rock:716601680057204757>**\nJ'ai choisi **${frgameP}**\n\n${frrecmsg}`)
                .setThumbnail(config.icon)
                .setFooter(`Commandé par ${member.user.username}`, member.user.displayAvatarURL({ dynamic: true, size: 2048 }))
                let frpfcPreact = await message.channel.send(frpfcP);
                await frpfcPreact.react(reload);
                await frpfcPreact.react(cross);
            };
            break;

            case paper:
            rpsID[member.user.id] = {
                theid: message.id
            };
            fs.writeFile("./json/data/rps.json", JSON.stringify(rpsID), (err) => {if(err) console.log("[ERROR] " + err)});
            reaction.message.delete({ ID });
            let enpfcFrandom = ["rock <:rock:716601680057204757>", "paper <:leave_wind:716603858268323841>", "scissors <:scissors_emo:716604212238221373>"]
            let engameF = enpfcFrandom[Math.floor(Math.random() * enpfcFrandom.length)];
            let entxtF = "";
            let frpfcFrandom = ["pierre <:rock:716601680057204757>", "feuille <:leave_wind:716603858268323841>", "ciseaux <:scissors_emo:716604212238221373>"]
            let frgameF = frpfcFrandom[Math.floor(Math.random() * frpfcFrandom.length)];
            let frtxtF = "";
            if(!language[message.guild.id] || language[message.guild.id].language === "english") {
                if(engameF === "scissors <:scissors_emo:716604212238221373>") {
                    entxtF = "You lose ! " + reactionM;
                    wins[member.user.id + message.guild.id] = {wins: wins[member.user.id + message.guild.id].wins, defeats: (wins[member.user.id + message.guild.id].defeats + 1)}
                    if(!xp[member.user.id + message.guild.id]) {
                        xp[member.user.id + message.guild.id] = {
                            xp: 0
                        };
                    } else if (xpLost > xp[member.user.id = message.guild.id]) {
                        xp[member.user.id + message.guild.id] = {
                            xp: 0
                        }
                        xpLost = 0;
                    } else {
                        xp[member.user.id + message.guild.id] = {
                            xp: cur.xp - xpLost
                        }
                    };
                    fs.writeFile("./json/data/xp.json", JSON.stringify(xp), (err) => {if(err) console.log("[ERROR] " + err)});
                    enrecmsg = "You lose ``" + xpLost + "`` xp."
                }
                if(engameF === "paper <:leave_wind:716603858268323841>") {
                    entxtF = "There is equality ! " + reactionM;
                    if(!xp[member.user.id + message.guild.id]) {
                        xp[member.user.id + message.guild.id] = {
                            xp: 0
                        };
                    }
                    fs.writeFile("./json/data/xp.json", JSON.stringify(xp), (err) => {if(err) console.log("[ERROR] " + err)});
                    enreg = "You lose/win nothing"
                }   
                if(engameF === "rock <:rock:716601680057204757>") {
                    entxtF = "You win ! " + reactionM;
                    wins[member.user.id + message.guild.id] = {wins: (wins[member.user.id + message.guild.id].wins + 1), defeats: wins[member.user.id + message.guild.id].defeats}
                    if(!xp[member.user.id + message.guild.id]) {
                        xp[member.user.id + message.guild.id] = {
                            xp: xpAdd
                        };
                    } else {
                        xp[member.user.id + message.guild.id] = {
                            xp: cur.xp + xpAdd
                        }
                    };
                    fs.writeFile("./json/data/xp.json", JSON.stringify(xp), (err) => {if(err) console.log("[ERROR] " + err)});
                    enrecmsg = "You win ``" + xpAdd + "`` xp."
                }
                let enpfcF = new MessageEmbed()
                .setColor(color.main)
                .setTitle('**🕹️ ✦ ROCK PAPER SCISSORS**')
                .setDescription(`${entxtF}\n\n🔽  **Results**  🔽\nYou chosen **paper <:leave_wind:716603858268323841>**\nI've chosen **${engameF}**\n\n${enrecmsg}`)
                .setThumbnail(config.icon)
                .setFooter(`Ordered by ${member.user.username}`, member.user.displayAvatarURL({ dynamic: true, size: 2048 }))
                let enpfcFreact = await message.channel.send(enpfcF);
                await enpfcFreact.react(reload);
                await enpfcFreact.react(cross);
            } else if(language[message.guild.id].language === "french") {
                if(frgameF === "ciseaux <:scissors_emo:716604212238221373>") {
                    frtxtF = "Vous avez perdu ! " + reactionM;
                    wins[member.user.id + message.guild.id] = {wins: wins[member.user.id + message.guild.id].wins, defeats: (wins[member.user.id + message.guild.id].defeats + 1)}
                    if(!xp[member.user.id + message.guild.id]) {
                        xp[member.user.id + message.guild.id] = {
                            xp: 0
                        };
                    } else if (xpLost > xp[member.user.id = message.guild.id]) {
                        xp[member.user.id + message.guild.id] = {
                            xp: 0
                        }
                        xpLost = 0;
                    } else {
                        xp[member.user.id + message.guild.id] = {
                            xp: cur.xp - xpLost
                        }
                    };
                    fs.writeFile("./json/data/xp.json", JSON.stringify(xp), (err) => {if(err) console.log("[ERROR] " + err)});
                    frrecmsg = "Vous avez perdu ``" + xpLost + "`` xp."
                }
                if(frgameF === "feuille <:leave_wind:716603858268323841>") {
                    frtxtF = "Il y a égalité ! " + reactionM;
                    if(!xp[member.user.id + message.guild.id]) {
                        xp[member.user.id + message.guild.id] = {
                            xp: 0
                        };
                    }
                    fs.writeFile("./json/data/xp.json", JSON.stringify(xp), (err) => {if(err) console.log("[ERROR] " + err)});
                    frrecmsg = "Vous n'avez rien gagné/perdu"
                }
                if(frgameF === "pierre <:rock:716601680057204757>") {
                    frtxtF = "Vous avez gagné ! " + reactionM;
                    wins[member.user.id + message.guild.id] = {wins: (wins[member.user.id + message.guild.id].wins + 1), defeats: wins[member.user.id + message.guild.id].defeats}
                    if(!xp[member.user.id + message.guild.id]) {
                        xp[member.user.id + message.guild.id] = {
                            xp: xpAdd
                        };
                    } else {
                        xp[member.user.id + message.guild.id] = {
                            xp: cur.xp + xpAdd
                        }
                    };
                    fs.writeFile("./json/data/xp.json", JSON.stringify(xp), (err) => {if(err) console.log("[ERROR] " + err)});
                    frrecmsg = "Vous avez gagné ``" + xpAdd + "`` xp."
                }
                let frpfcF = new MessageEmbed()
                .setColor(color.main)
                .setTitle('**🕹️ ✦ PIERRE FEUILLE CISEAUX**')
                .setDescription(`${frtxtF}\n\n🔽  **Résultats**  🔽\nVous avez choisi **feuille <:leave_wind:716603858268323841>**\nJ'ai choisi **${frgameF}**\n\n${frrecmsg}`)
                .setThumbnail(config.icon)
                .setFooter(`Commandé par ${member.user.username}`, member.user.displayAvatarURL({ dynamic: true, size: 2048 }))
                let frpfcFreact = await message.channel.send(frpfcF);
                await frpfcFreact.react(reload);
               await frpfcFreact.react(cross);
            };
            break;

            case scissors:
            rpsID[member.user.id] = {
                theid: message.id
            };
            fs.writeFile("./json/data/rps.json", JSON.stringify(rpsID), (err) => {if(err) console.log("[ERROR] " + err)});
            reaction.message.delete({ ID });
            let enpfcSrandom = ["rock <:rock:716601680057204757>", "paper <:leave_wind:716603858268323841>", "scissors <:scissors_emo:716604212238221373>"]
            let engameS = enpfcSrandom[Math.floor(Math.random() * enpfcSrandom.length)];
            let entxtS = "";
            let frpfcSrandom = ["pierre <:rock:716601680057204757>", "feuille <:leave_wind:716603858268323841>", "ciseaux <:scissors_emo:716604212238221373>"]
            let frgameS = frpfcSrandom[Math.floor(Math.random() * frpfcSrandom.length)];
            let frtxtS = "";
            if(!language[message.guild.id] || language[message.guild.id].language === "english") {
                if(engameS === "scissors <:scissors_emo:716604212238221373>") {
                    entxtS = "There is equality ! " + reactionM;
                    if(!xp[member.user.id + message.guild.id]) {
                        xp[member.user.id + message.guild.id] = {
                            xp: 0
                        };
                    }
                    fs.writeFile("./json/data/xp.json", JSON.stringify(xp), (err) => {if(err) console.log("[ERROR] " + err)});
                    enreg = "You lose/win nothing"
                }
                if(engameS === "paper <:leave_wind:716603858268323841>") {
                    entxtS = "You win ! " + reactionM;
                    wins[member.user.id + message.guild.id] = {wins: (wins[member.user.id + message.guild.id].wins + 1), defeats: wins[member.user.id + message.guild.id].defeats}
                    if(!xp[member.user.id + message.guild.id]) {
                        xp[member.user.id + message.guild.id] = {
                            xp: xpAdd
                        };
                    } else {
                        xp[member.user.id + message.guild.id] = {
                            xp: cur.xp + xpAdd
                        }
                    };
                    fs.writeFile("./json/data/xp.json", JSON.stringify(xp), (err) => {if(err) console.log("[ERROR] " + err)});
                    enrecmsg = "You win ``" + xpAdd + "`` xp."
                }
                if(engameS === "rock <:rock:716601680057204757>") {
                    entxtS = "You lose ! " + reactionM;
                    wins[member.user.id + message.guild.id] = {wins: wins[member.user.id + message.guild.id].wins, defeats: (wins[member.user.id + message.guild.id].defeats + 1)}
                    if(!xp[member.user.id + message.guild.id]) {
                        xp[member.user.id + message.guild.id] = {
                            xp: 0
                        };
                    } else if (xpLost > xp[member.user.id = message.guild.id]) {
                        xp[member.user.id + message.guild.id] = {
                            xp: 0
                        }
                        xpLost = 0;
                    } else {
                        xp[member.user.id + message.guild.id] = {
                            xp: cur.xp - xpLost
                        }
                    };
                    fs.writeFile("./json/data/xp.json", JSON.stringify(xp), (err) => {if(err) console.log("[ERROR] " + err)});
                    enrecmsg = "You lose ``" + xpLost + "`` xp."
                }
                let enpfcS = new MessageEmbed()
                .setColor(color.main)
                .setTitle('**🕹️ ✦ ROCK PAPER SCISSORS**')
                .setDescription(`${entxtS}\n\n🔽  **Results**  🔽\nYou chosen **scissors <:scissors_emo:716604212238221373>**\nI've chosen **${engameS}**\n\n${enrecmsg}`)
                .setThumbnail(config.icon)
                .setFooter(`Ordered by ${member.user.username}`, member.user.displayAvatarURL({ dynamic: true, size: 2048 }))
                let enpfcSreact = await message.channel.send(enpfcS);
                await enpfcSreact.react(reload);
                await enpfcSreact.react(cross);
            } else if(language[message.guild.id].language === "french") {
                if(frgameS === "ciseaux <:scissors_emo:716604212238221373>") {
                    frtxtS = "Il y a égalité ! " + reactionM;
                    if(!xp[member.user.id + message.guild.id]) {
                        xp[member.user.id + message.guild.id] = {
                            xp: 0
                        };
                    }
                    fs.writeFile("./json/data/xp.json", JSON.stringify(xp), (err) => {if(err) console.log("[ERROR] " + err)});
                    frrecmsg = "Vous n'avez rien gagné/perdu"
                }
                if(frgameS === "feuille <:leave_wind:716603858268323841>") {
                    frtxtS = "Vous avez gagné ! " + reactionM;
                    wins[member.user.id + message.guild.id] = {wins: (wins[member.user.id + message.guild.id].wins + 1), defeats: wins[member.user.id + message.guild.id].defeats}
                    if(!xp[member.user.id + message.guild.id]) {
                        xp[member.user.id + message.guild.id] = {
                            xp: xpAdd
                        };
                    } else {
                        xp[member.user.id + message.guild.id] = {
                            xp: cur.xp + xpAdd
                        }
                    };
                    fs.writeFile("./json/data/xp.json", JSON.stringify(xp), (err) => {if(err) console.log("[ERROR] " + err)});
                    frrecmsg = "Vous avez gagné ``" + xpAdd + "`` xp."
                }
                if(frgameS === "pierre <:rock:716601680057204757>") {
                    wins[member.user.id + message.guild.id] = {wins: wins[member.user.id + message.guild.id].wins, defeats: (wins[member.user.id + message.guild.id].defeats + 1)}
                    frtxtS = "Vous avez perdu ! " + reactionM;
                    if(!xp[member.user.id + message.guild.id]) {
                        xp[member.user.id + message.guild.id] = {
                            xp: 0
                        };
                    } else if (xpLost > xp[member.user.id = message.guild.id]) {
                        xp[member.user.id + message.guild.id] = {
                            xp: 0
                        }
                        xpLost = 0;
                    } else {
                        xp[member.user.id + message.guild.id] = {
                            xp: cur.xp - xpLost
                        }
                    };
                    fs.writeFile("./json/data/xp.json", JSON.stringify(xp), (err) => {if(err) console.log("[ERROR] " + err)});
                    frrecmsg = "Vous avez perdu ``" + xpLost + "`` xp."
                }
                let frpfcS = new MessageEmbed()
                .setColor(color.main)
                .setTitle('**🕹️ ✦ Pierre feuille ciseaux**')
                .setDescription(`${frtxtS}\n\n🔽  **Résultats**  🔽\nVous avez choisi **ciseaux <:scissors_emo:716604212238221373>**\nJ'ai choisi **${frgameS}**\n\n${frrecmsg}`)
                .setThumbnail(config.icon)
                .setFooter(`Commandé par ${member.user.username}`, member.user.displayAvatarURL({ dynamic: true, size: 2048 }))
                let frpfcSreact = await message.channel.send(frpfcS);
                await frpfcSreact.react(reload);
                await frpfcSreact.react(cross);
            };
            break;
        }
    }
};