#!/usr/bin/env node
/**
 * Created by rpowar on 1/25/16.
 */

//api key = cc9593683bd74287b82d30c78f49fe34
//core
var ProgressBar = require('progress');
var http = require('https');

//constants
var apiKey = "cc9593683bd74287b82d30c78f49fe34";
var basepath = "https://api.themoviedb.org/3";

//filescope
var configurationUrl = basepath + "/configuration";
var initialRequest = configurationUrl + "?api_key=" + apiKey;

var request = http.get(initialRequest);

request.on('response', function (response) {
    var body = "";
    var len = parseInt(response.headers['content-length'], 10);
    var bar = new ProgressBar(' downloading [:bar] :percent :etas', {
        complete: '=',
        incomplete: ' ',
        width: 20,
        total: len
    });

    response.on('data', function (chunk) {
        body += chunk;
        bar.tick(body.length);
    });

    response.on('end', function () {
        console.log('\nFinished Loading\n');
    });

});

request.end();
//request(initialRequest, function(error, response, body){
//    if(!error && response.statusCode === 200){
//
//    }
//});


//var timer = setInterval(function () {
//    bar.tick();
//    if (bar.complete) {
//        console.log('\ndone\n');
//        clearInterval(timer);
//    }
//}, 100);