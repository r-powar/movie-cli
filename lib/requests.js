/**
 * Created by rpowar on 4/3/16.
 */
var configConstants = require('../config/config_constants');
var configurationUrl = configConstants.basepath + "movie/now_playing";
var nowPlaying = configurationUrl + "?api_key=" + configConstants.apiKey;
var http = require('http');
var format = require('./formatData');

function latestMovies(args) {
    var req = http.get(nowPlaying, function (res) {
        var body = '';
        res.on('data', function (chunk) {
            body += chunk;
        });
        res.on('end', function () {
            try{
                var infoObj = JSON.parse(body).results;
                var information = format(infoObj);
                information.display();
            }catch(err){
                console.log(err.stack);
                console.log('The request cannot be processed');
            }

            //console.log(JSON.parse(body).results);
            console.log('Successfully complete');
        });
    });

    req.on('error', function (err) {
        console.log('There was a problem with the request:', err.message);
    });
}

module.exports = {
    latestMovies: latestMovies
};