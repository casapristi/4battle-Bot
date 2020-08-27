const { MessageEmbed, MessageAttachment } = require("discord.js");
const fs = require("fs");
const color = require("../../json/color.json");
const config = require("../../json/config.json");
function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
module.exports = {
    name: "galaga",
    category: "games",
    run: async (client, message, args) => {

        let language = JSON.parse(fs.readFileSync("./json/data/language.json"));

        let emoji = ["<:N_:718506491660992735>","🔺","<:asteroid:747849979552333968>","💥"];
        let zero  = emoji[0];
        let player = emoji[1];
        let l1 = [zero,zero,zero,zero,zero,zero,zero,zero,zero];
        let l2 = [zero,zero,zero,zero,zero,zero,zero,zero,zero];
        let l3 = [zero,zero,zero,zero,zero,zero,zero,zero,zero];
        let l4 = [zero,zero,zero,zero,zero,zero,zero,zero,zero];
        let l5 = [zero,zero,zero,zero,zero,zero,zero,zero,zero];
        let l6 = [zero,zero,zero,zero,zero,zero,zero,zero,zero];
        let l7 = [zero,zero,zero,zero,zero,zero,zero,zero,zero];
        let l8 = [zero,zero,zero,zero,player,zero,zero,zero,zero];
        let l9 = [zero,zero,zero,zero,zero,zero,zero,zero,zero];
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
        }
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
                backwards.on('collect', async r => {
                    const userReactions = msg.reactions.cache.filter(reaction => reaction.users.cache.has(message.author.id));
                    try {
	                    for (const reaction of userReactions.values()) {
		                    await reaction.users.remove(message.author.id);
	                    }
                    } catch (error) {
                    	console.error('Failed to remove reactions.');
                    }
                    if (!stop) {
                        placeBlock(px-1,py,1);
                        placeBlock(px,py,0);
                        px--;
                        embed.setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n"+l4.join("")+"\n"+l5.join("")+"\n"+l6.join("")+"\n"+l7.join("")+"\n"+l8.join("")+"\n"+l9.join("")+"\n")
                        msg.edit(embed);
                        actions();
                    }
                });
                forwards.on('collect', async r => {
                    const userReactions = msg.reactions.cache.filter(reaction => reaction.users.cache.has(message.author.id));
                    try {
	                    for (const reaction of userReactions.values()) {
		                    await reaction.users.remove(message.author.id);
	                    }
                    } catch (error) {
                    	console.error('Failed to remove reactions.');
                    }
                    if (!stop) {
                        placeBlock(px+1,py,1);
                        placeBlock(px,py,0);
                        px++;
                        embed.setDescription(l1.join("")+"\n"+l2.join("")+"\n"+l3.join("")+"\n"+l4.join("")+"\n"+l5.join("")+"\n"+l6.join("")+"\n"+l7.join("")+"\n"+l8.join("")+"\n"+l9.join("")+"\n")
                        msg.edit(embed);
                        actions();
                    }
                });
                shoot.on('collect', async r => {
                    const userReactions = msg.reactions.cache.filter(reaction => reaction.users.cache.has(message.author.id));
                    try {
	                    for (const reaction of userReactions.values()) {
		                    await reaction.users.remove(message.author.id);
	                    }
                    } catch (error) {
                    	console.error('Failed to remove reactions.');
                    }
                    shootx = px;
                });
            });
        });
    }
};