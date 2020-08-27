const { MessageEmbed } = require("discord.js");
const color = require("../../json/color.json");
const config = require("../../json/config.json");
const fs = require("fs");
const { NODATA } = require("dns");
const { listenerCount } = require("process");
function getRandom(max) {return Math.floor(Math.random() * Math.floor(max))};


module.exports = {
    name: "deminer",
    aliases: ["demine"],
    category: "config",
    run: async (client, message, args) => {

        let language = JSON.parse(fs.readFileSync("./json/data/language.json", "utf8"));

        let emoji = ["||🟦||","||:one:||","||:two:||","||:three:||","||:four:||","||:five:||","||:boom:||"];
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
            let tier1 = [emoji[0],"||:one:||","||:two:||","||:three:||","||:four:||","||:five:||","||:boom:||"];
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
    }
};
