/**
 * Created by rpowar on 4/3/16.
 */
var requests = require('./requests');
var parseArgs = require('minimist');
var help = require('./help');

function Config(parameters){
    this.args = parseArgs(parameters.args);
}

Config.prototype.start = function(){
    var key = Object.keys(this.args).length - 1;

    if(key === 0){
        this.compute();
    }
};

Config.prototype.compute = function(){
    //help
    help();

};

function configInstance(params){
    return new Config(params)
}

module.exports = configInstance;