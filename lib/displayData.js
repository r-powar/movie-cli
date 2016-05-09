/**
 * Created by rpowar on 4/17/16.
 */
var Table = require('tty-table');
var chalk = require('chalk');
function displayMovieTitle(obj) {
    var info = [];
    obj.forEach(function (val) {
        var title = val.original_title;
        var tempObj = {};
        tempObj.value = title;
        tempObj.width = 40;
        info.push(tempObj);
        tempObj = null;
    });
    return info;
}

function displayReleaseDate(obj) {
    var date = [];
    var final = [];
    obj.forEach(function (val) {
        var releaseDate = 'Release Date: ' + val.release_date;
        date.push(releaseDate);
    });
    final.push(date);
    return final;
}

function displayTable(title, date) {
    var table = new Table(title, date,{});

    var str = table.render();
    return str;
}

module.exports = {
    displayMovieTitle: displayMovieTitle,
    displayReleaseDate: displayReleaseDate,
    displayTable: displayTable
};