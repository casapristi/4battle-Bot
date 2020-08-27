const fs = require("fs");
const xp = require("../../json/data/xp.json");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const { createCanvas, loadImage } = require("canvas");
const { join } = require("path");
const color = require("../../json/color.json");

module.exports = async (client, message) => {
    try{

    if(message.author.bot) return;

    function Emoji(id) {return client.emojis.cache.get(id).toString()}

    let xpAdd = Math.floor(Math.random() * 7) + 8;

    console.log("[LOGS] "+ message.author.id + " (" + message.author.username +  ") à gagné " + xpAdd + " xp");
        if(!xp[message.author.id + message.guild.id]) {
            (xp[message.author.id + message.guild.id]) = {
                xp: 0,
                level: 1
            };
        };
    let curxp = xp[message.author.id + message.guild.id ].xp;
    let curlvl = xp[message.author.id + message.guild.id].level
    xp[message.author.id + message.guild.id].xp = curxp + xpAdd;

    let image = "background1.jpg";
    if (xp[message.author.id + message.guild.id].level === 2) {
        image = "background2.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 3) {
        image = "background3.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 4) {
        image = "background4.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 5) {
        image = "background5.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 6) {
        image = "background6.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 7) {
        image = "background7.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 8) {
        image = "background8.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 9) {
        image = "background9.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 10) {
        image = "background10.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 11) {
        image = "background11.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 12) {
        image = "background12.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 13) {
        image = "background13.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 14) {
        image = "background14.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 15) {
        image = "background15.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 16) {
        image = "background16.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 17) {
        image = "background17.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 18) {
        image = "background18.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 19) {
        image = "background19.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 20) {
        image = "background20.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 21) {
        image = "background21.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 22) {
        image = "background22.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 23) {
        image = "background23.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 24) {
        image = "background24.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 25) {
        image = "background25.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 26) {
        image = "background26.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 27) {
        image = "background27.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 28) {
        image = "background28.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 29) {
        image = "background29.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 30) {
        image = "background30.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 31) {
        image = "background31.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 32) {
        image = "background32.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 33) {
        image = "background33.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 34) {
        image = "background34.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 35) {
        image = "background35.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 36) {
        image = "background36.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 37) {
        image = "background37.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 38) {
        image = "background38.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 39) {
        image = "background39.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 30) {
        image = "background40.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 41) {
        image = "background41.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 42) {
        image = "background42.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 43) {
        image = "background43.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 44) {
        image = "background44.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 45) {
        image = "background45.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 46) {
        image = "background46.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 47) {
        image = "background47.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 48) {
        image = "background48.jpg"
    } else if (xp[message.author.id + message.guild.id].level === 49) {
        image = "background49.jpg"
    } else if (xp[message.author.id + message.guild.id].level >= 50) {
        image = "background50.jpg"
    }
    
    const canvas = createCanvas(1000, 333);
    const ctx = canvas.getContext("2d");
    const background = await loadImage(join(__dirname, "..", "..", "img", "rank", image));
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.strokeStyle = "#222222";
    ctx.fillStyle = color.black;
    ctx.lineWidth = 1000;
    ctx.fill();
    ctx.globalAlpha = 0.6;
    ctx.strokeRect(0, 0, 1000, 333);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = color.white;
    ctx.globalAlpha = 0.2;
    ctx.fillRect(180, 130, 770, 65);
    ctx.fillStyle = color.black;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.strokeRect(180, 130, 770, 65);
    ctx.stroke();

    ctx.fillStyle = "#e67e22";
    ctx.globalAlpha = 0.6;
    ctx.fillRect(180, 130, 770, 65);
    ctx.fill();
    ctx.globalAlpha = 1;

    ctx.font = "30px sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = color.white;
    ctx.fillText(`Bravo, vous avez LEVEL UP !`, 600, 175);

    ctx.arc(170, 160, 120, 0, Math.PI * 2, true);
    ctx.lineWidth = 6;
    ctx.strokeStyle = color.white;
    ctx.stroke();
    ctx.closePath();
    ctx.clip();
    const avatar = await loadImage(message.author.displayAvatarURL({ format: "jpg" }));
    ctx.drawImage(avatar, 40, 40, 250, 250);

    let nxtLvl = xp[message.author.id + message.guild.id].level * 500;
    if(nxtLvl <= xp[message.author.id + message.guild.id].xp) {
        xp[message.author.id + message.guild.id].level = curlvl + 1;
        xp[message.author.id + message.guild.id].xp = 0;
        const attachment = new MessageAttachment(canvas.toBuffer(), "rank.png");
        message.channel.send(attachment);
    };
    fs.writeFile("./json/data/xp.json", JSON.stringify(xp), (err) => {
        if(err) console.log("[ERROR]" + err)
    });
    } catch (err) {
        return;
    }
};