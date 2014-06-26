/*
* cache
* author: ronglin
* create date: 2014.6.26
*/

var mvc = require('../node/mvc');
var cachingNotifyRemote = require('../node/cachingNotifyRemote');

module.exports = mvc.controller(function(req, res) {

    this.action('index', function() {
        cachingNotifyRemote.accept(req.query);
        res.json({ success: true });
    });

});