const { Discord, MessageAttachment } = require("discord.js");
const { createCanvas, loadImage } = require("canvas");
const color = require("../../json/color.json");
const config = require("../../json/config.json");
const { join } = require("path");
const xp = require("../../json/data/xp.json");

module.exports = {
    name: "rank",
    aliases: ["lvl", "level"],
    category: "level",
    run: async(client, message, args) => {
        const search = args[0] ? args[0].toLowerCase() : message.author.id;
        const userID = message.guild.members.cache.get(search);
        const userUsername = message.guild.members.cache.filter(e => e.user.username.toLowerCase().includes(search)).first();
        const userNickname = message.guild.members.cache.filter(e => e.displayName.toLowerCase().includes(search)).first();
        const userDiscrim = message.guild.members.cache.filter(e => e.user.discriminator.toLowerCase().includes(search)).first();
        const userTag = message.guild.members.cache.filter(e => e.user.tag.toLowerCase().includes(search)).first();
        const userMention = message.guild.members.cache.get(search.replace(/\D/g, ""));
        const getUser = userID || userUsername || userNickname || userDiscrim || userTag || userMention;

        const data = await xp[getUser.user.id + message.guild.id];
        if(!data) return message.channel.send("Cet utilisateur n'a pas de niveau");
        
        let image = "background1.jpg";
        if (data.level === 2) {
            image = "background2.jpg"
        } else if (data.level === 3) {
            image = "background3.jpg"
        } else if (data.level === 4) {
            image = "background4.jpg"
        } else if (data.level === 5) {
            image = "background5.jpg"
        } else if (data.level === 6) {
            image = "background6.jpg"
        } else if (data.level === 7) {
            image = "background7.jpg"
        } else if (data.level === 8) {
            image = "background8.jpg"
        } else if (data.level === 9) {
            image = "background9.jpg"
        } else if (data.level === 10) {
            image = "background10.jpg"
        } else if (data.level === 11) {
            image = "background11.jpg"
        } else if (data.level === 12) {
            image = "background12.jpg"
        } else if (data.level === 13) {
            image = "background13.jpg"
        } else if (data.level === 14) {
            image = "background14.jpg"
        } else if (data.level === 15) {
            image = "background15.jpg"
        } else if (data.level === 16) {
            image = "background16.jpg"
        } else if (data.level === 17) {
            image = "background17.jpg"
        } else if (data.level === 18) {
            image = "background18.jpg"
        } else if (data.level === 19) {
            image = "background19.jpg"
        } else if (data.level === 20) {
            image = "background20.jpg"
        } else if (data.level === 21) {
            image = "background21.jpg"
        } else if (data.level === 22) {
            image = "background22.jpg"
        } else if (data.level === 23) {
            image = "background23.jpg"
        } else if (data.level === 24) {
            image = "background24.jpg"
        } else if (data.level === 25) {
            image = "background25.jpg"
        } else if (data.level === 26) {
            image = "background26.jpg"
        } else if (data.level === 27) {
            image = "background27.jpg"
        } else if (data.level === 28) {
            image = "background28.jpg"
        } else if (data.level === 29) {
            image = "background29.jpg"
        } else if (data.level === 30) {
            image = "background30.jpg"
        } else if (data.level === 31) {
            image = "background31.jpg"
        } else if (data.level === 32) {
            image = "background32.jpg"
        } else if (data.level === 33) {
            image = "background33.jpg"
        } else if (data.level === 34) {
            image = "background34.jpg"
        } else if (data.level === 35) {
            image = "background35.jpg"
        } else if (data.level === 36) {
            image = "background36.jpg"
        } else if (data.level === 37) {
            image = "background37.jpg"
        } else if (data.level === 38) {
            image = "background38.jpg"
        } else if (data.level === 39) {
            image = "background39.jpg"
        } else if (data.level === 30) {
            image = "background40.jpg"
        } else if (data.level === 41) {
            image = "background41.jpg"
        } else if (data.level === 42) {
            image = "background42.jpg"
        } else if (data.level === 43) {
            image = "background43.jpg"
        } else if (data.level === 44) {
            image = "background44.jpg"
        } else if (data.level === 45) {
            image = "background45.jpg"
        } else if (data.level === 46) {
            image = "background46.jpg"
        } else if (data.level === 47) {
            image = "background47.jpg"
        } else if (data.level === 48) {
            image = "background48.jpg"
        } else if (data.level === 49) {
            image = "background49.jpg"
        } else if (data.level >= 50) {
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
        ctx.strokeStyle = "#111100";
        ctx.fillStyle = color.black;
        ctx.lineWidth = 25;
        ctx.fill();
        ctx.globalAlpha = 0.8;
        ctx.strokeRect(0, 0, 1000, 333);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "#222222"
        ctx.fillStyle = color.black;
        ctx.lineWidth = 18;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.strokeRect(171, 207, 788, 83);
        ctx.stroke();

        ctx.fillStyle = "#ffbb11";
        ctx.globalAlpha = 0.85;
        ctx.fillRect(180, 216, ((100 / (data.level * 500)) * data.xp) * 7.7, 65);
        ctx.fill();
        ctx.globalAlpha = 1;

        ctx.font = "30px sans-serif";
        ctx.textAlign = "center";
        ctx.fillStyle = "#ffddee";
        ctx.fillText(`${data.xp} / ${data.level * 500} XP`, 600, 260);

        ctx.textAlign = "right";
        ctx.fillText(getUser.user.tag, 965, 50);

        ctx.font = "30px sans-serif";
        ctx.fillText("Level : " + data.level, 965, 90);

        ctx.arc(170, 160, 120, 0, Math.PI * 2, true);
        ctx.lineWidth = 35;
        ctx.strokeStyle = "#222222";
        ctx.stroke();
        ctx.closePath();
        ctx.clip();
        const avatar = await loadImage(getUser.user.displayAvatarURL({ format: "jpg" }));
        ctx.drawImage(avatar, 40, 40, 250, 250);

        const attachment = new MessageAttachment(canvas.toBuffer(), "rank.png");
        message.channel.send(attachment);
        
    }
};