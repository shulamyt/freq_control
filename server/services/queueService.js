var mongo = require('./DBService.js');

module.exports = function (app) {

    /*Delete all queue's songs*/
    app.delete('/queue', function (req, res) {
        var id = req.body.id;

        // TODO DB
        // TODO push
    });

    /*Get queue's songs*/
    app.get('/queue', function (req, res) {
        var id = req.body.id;

        var queueSong = mongo.GetQueueSongs();
    });
}