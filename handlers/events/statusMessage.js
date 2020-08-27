const {prefix} = require("../../json/config.json");

module.exports = async (client, message) => {
    client.user.setActivity(`${prefix}help`, {type: 'PLAYING'});
};