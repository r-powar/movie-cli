/**
 * Created by rpowar on 4/3/16.
 */
function latestMovies(endpoint) {
    var req = http.get(endpoint, function (res) {
        var body = '';
        res.on('data', function (chunk) {
            body += chunk;
        });
        res.on('end', function () {
            console.log(JSON.parse(body).results.length);
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