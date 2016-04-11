#!/usr/bin/env node
/**
 * Created by rpowar on 1/25/16.
 */

//core
var yargs = require('yargs').argv;
var chalk = require('chalk');

//file scope
var Config = require('./lib/config');

//constants
var configConstants = require('./config/config_constants');

var configurationUrl = configConstants.basepath + "movie/now_playing";
var latestMovies = configurationUrl + "?api_key=" + configConstants.apiKey;

var parameters ={
    args: process.argv
};

console.log('\t' + '\t' +chalk.red.bold('MovieDB'));

var config = new Config(parameters);
config.start();