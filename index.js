#!/usr/bin/env node
/**
 * Created by rpowar on 1/25/16.
 */

//core
var chalk = require('chalk');

//file scope
var Config = require('./lib/config');

var parameters ={
    args: process.argv
};

console.log('\t' + '\t' +chalk.red.bold('MovieDB'));

var config = new Config(parameters);
config.start();