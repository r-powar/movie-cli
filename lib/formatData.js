/**
 * Created by rpowar on 4/17/16.
 */
var displayData = require('./displayData');
function Format(obj){
    this.movieTitle = displayData.displayMovieTitle(obj);
    this.releaseDate = displayData.displayReleaseDate(obj);
}

Format.prototype.display = function(){
    console.log(displayData.displayTable(this.movieTitle, this.releaseDate));
};

function formatData(obj){
    return new Format(obj)
}

module.exports = formatData;