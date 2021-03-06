/*
* vashViewEngine
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.24
*/

'use strict';

var fs = require('fs'),
    path = require('path'),
    utils = require('zoo-utils'),
    vashView = require('./vashView');

var extname = '.vash';

var findViewSync = function(controllerContext, viewName) {
    var foundFile, searchedLocations = [];
    var tryDirs = controllerContext.viewTryDirs();
    for (var i = 0; i < tryDirs.length; i++) {
        var file = path.join(tryDirs[i], viewName + extname);
        searchedLocations.push(file);
        if (fs.existsSync(file) && fs.statSync(file).isFile()) {
            foundFile = file;
            break;
        }
    }
    //
    var view;
    if (foundFile) {
        view = new vashView({
            filePath: foundFile
        });
    }
    //
    return {
        view: view,
        searchedLocations: searchedLocations
    };
};

module.exports = {

    findView: function(controllerContext, viewName, callback) {
        callback = utils.deferProxy(callback);
        var index = 0, searchedLocations = [];
        var tryDirs = controllerContext.viewTryDirs();
        //
        var done = function(file) {
            var view;
            if (file) {
                view = new vashView({
                    filePath: file,
                    findLayout: function(name) {
                        var viewEngineResult = findViewSync(controllerContext, name);
                        if (viewEngineResult.view) {
                            return viewEngineResult.view.filePath;
                        } else {
                            var locationsMsg = viewEngineResult.searchedLocations.join('<br/>');
                            callback(new Error(utils.format('Failed to lookup view "{0}" in the following locations<br/>{1}', name, locationsMsg)));
                        }
                    }
                });
            }
            callback(null, {
                view: view,
                searchedLocations: searchedLocations
            });
        };
        //
        var next = function() {
            if (index >= tryDirs.length) {
                done();
                return;
            }
            var file = path.join(tryDirs[index++], viewName + extname);
            searchedLocations.push(file);
            fs.exists(file, function(exists) {
                if (exists) {
                    fs.stat(file, function(err, stats) {
                        if (err) {
                            callback(err);
                        } else if (stats.isFile()) {
                            done(file);
                        } else {
                            next();
                        }
                    });
                } else {
                    next();
                }
            });
        };
        //
        next();
    },

    releaseView: function(controllerContext, view) {
        if (view.release) {
            view.release();
        }
    }
};
