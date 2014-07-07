/*
* mvcRouteProvider
* author: ronglin
* create date: 2014.7.7
*/

'use strict';

var utils = require('./utilities'),
    pathToRegexp = require('path-to-regexp');

var decode = function(param) {
    if (!param) {
        return param;
    }
    try {
        return decodeURIComponent(param);
    } catch (ex) {
        var err = new Error('failed to decode param "' + param + '"');
        err.status = 400;
        throw err;
    }
};

module.exports = {

    _cache: {},

    _getOrCreate: function(expression) {
        var cacheKey = utils.formalStr(expression);
        var item = this._cache[cacheKey];
        if (!item) {
            var keys = [], regexp = pathToRegexp(expression, keys, {
                sensitive: false,
                strict: false,
                end: false
            });
            item = this._cache[cacheKey] = {
                regexp: regexp,
                keys: keys
            };
        }
        return item;
    },

    routeData: function(expression, defaultValues, urlPath) {
        var item = this._getOrCreate(expression);
        var match = item.regexp.exec(urlPath);
        if (!match) { return null; }
        //
        var data = [];
        utils.each(item.keys, function(i, it) {
            var value = decode(match[i + 1]);
            if (!value) {
                var fname = utils.formalStr(it.name);
                if (fname in defaultValues) {
                    value = defaultValues[fname];
                }
            }
            data.push({
                name: it.name,
                value: value
            });
        });
        //
        return data;
    },

    resolveUrl: function(expression, defaultValues, routeValues) {
        var values = {};
        utils.each(routeValues, function(key, val) {
            values[utils.formalStr(key)] = val;
        });
        var query = utils.extend({}, values);
        //
        var item = this._getOrCreate(expression);
        var matchCount = 0, requireCount = 0;
        var expstr = expression;
        utils.each(item.keys, function() {
            var fname = utils.formalStr(this.name);
            var value = values[fname] || defaultValues[fname];
            var regstr = utils.format('{0}:{1}[^{0}]*', this.delimiter, this.name);
            var repstr = value ? this.delimiter + value : '';
            expstr = expstr.replace(new RegExp(regstr, 'i'), repstr);
            if (!this.optional) {
                requireCount++;
            }
            if (fname in query) {
                delete query[fname];
                matchCount++;
            }
        });
        //
        delete query['area'];
        return {
            keyCount: item.keys.length,
            matchCount: matchCount,
            requireCount: requireCount,
            url: utils.appendQuery(expstr, query)
        };
    }

};
    