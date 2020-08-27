const {readdirSync} = require('fs');
const ascii = require('ascii-table');
const table = new ascii("Commandes");
table.setHeading('Commandes', 'Statut de lancement');
module.exports = (client) => {
    readdirSync('./commandes/').forEach(dir => {
        const commands = readdirSync(`./commandes/${dir}/`).filter(f => f.endsWith('.js'));
        for (let file of commands) {
            let pull = require(`../commandes/${dir}/${file}`);
            if(pull.name) {
                client.commands.set(pull.name, pull);
                table.addRow(file, '✅')
            } else {
                table.addRow(file, `❌ -> Missing something.`)
                continue;
            } if (pull.aliases && Array.isArray(pull.aliases))
                pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    });
    console.log(table.toString());
};