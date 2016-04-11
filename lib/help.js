/**
 * Created by rpowar on 4/10/16.
 */

var chalk = require('chalk');
var col = chalk.bgWhite;
var package = require('../package.json');

function help(){
    var information =
        '\nMovie-Cli version: '+ chalk.bgYellow(package.version) + '\n'
        + '-------------------\n' +
        'Available Commands:\n' +
        '\t' + col('-p, --playing') + '\tTo get Latest Movies\n' +
        '\t' + col('-m, --movie') + '\tTo get specific movie info\n' +
        '\t' + col('-a, --actors') + '\tTo get actor/actress info\n' +
        '\t' + col('-u, --upcoming') + '\tList of upcoming Movies\n';

    console.log(information);
}
module.exports = help;