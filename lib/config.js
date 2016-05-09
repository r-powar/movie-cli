/**
 * Created by rpowar on 4/3/16.
 */
var requests = require('./requests');
var parseArgs = require('minimist');
var help = require('./help');

function Config(parameters){
    this.args = parseArgs(parameters.args.slice(2));
}

Config.prototype.start = function(){
    var key = Object.keys(this.args).length - 1;

    if(key === 0){
        help();
    }else{
        this.compute(this.args);
    }
};

Config.prototype.compute = function(args){
    if(args.p || args.playing){
        requests.latestMovies(args.p || args.playing);
    }
};

function configInstance(params){
    return new Config(params)
}

module.exports = configInstance;