const { MessageEmbed, MessageAttachment } = require("discord.js");
const color = require("../json/color.json");
const config = require("../../json/config.json");

module.exports = {
    pages: function(message, pages) {

        let page = 1;

        const pageEmbed = new MessageEmbed();
        pageEmbed.setColor(color.main);
        pageEmbed.setFooter(`Page ${page}/${pages.length}`);
        pageEmbed.setDescription(pages[page - 1]);
        pageEmbed.setThumbnail(config.erroricon);
        message.channel.send(pageEmbed).then(msg => {
            msg.react('◀️').then(r => {
                msg.react('▶️');

                const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀️' && user.id === message.author.id;
                const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶️' && user.id === message.author.id;

                const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
                const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });

                backwards.on('collect', r => {
                    if(page === 1) return;
                    page --;
                    pageEmbed.setDescription(pages[page - 1]);
                    pageEmbed.setFooter(`Page ${page}/${pages.length}`);
                    msg.edit(pageEmbed);
                });
                forwards.on('collect', r => {
                    if(page === page.length) return;
                    page ++;
                    pageEmbed.setDescription(pages[page - 1]);
                    pageEmbed.setFooter(`Page ${page}/${pages.length}`);
                    msg.edit(pageEmbed);
                });
            });
        });
    }
};