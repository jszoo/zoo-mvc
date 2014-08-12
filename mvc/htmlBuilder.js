/*
* htmlBuilder
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.8.11
*/

'use strict';

var utils = require('zoo-utils');

var htmlBuilder = module.exports = function(tagName, selfClose) {
    this.tagName = tagName;
    this.selfClose = !!selfClose;
    //
    this.attributes = new utils.dictionary(true);
    this.classes = new utils.dictionary(true);
    this.csses = new utils.dictionary(true);
    this.children = [];
};

htmlBuilder.prototype = {

    tagName: null, selfClose: false,

    attributes: null, classes: null, csses: null, children: null,

    constructor: htmlBuilder,

    tag: function(tagName) {
        if (tagName === undefined) {
            return (this.tagName);
        } else {
            return (this.tagName = tagName, this);
        }
    },

    cls: function(className) {
        if (className) {
            this.classes.set(className, true);
            return this;
        } else {
            var arr = [];
            utils.each(this.classes.all(), function(k) {
                arr.push(k);
            });
            return arr.join(' ');
        }
    },

    css: function(name, value) {
        if (value) {
            this.csses.set(name, value);
            return this;
        } else if (name) {
            return this.csses.get(name);
        } else {
            var arr = [];
            utils.each(this.csses.all(), function(k, v) {
                arr.push(k + ': ' + v + ';');
            });
            return arr.join('');
        }
    },

    attr: function(name, value) {
        if (value) {
            return (this.attributes.set(name, value), this);
        } else {
            return this.attributes.get(name);
        }
    },

    append: function(child) {
        this.children.push(child);
        this.selfClose = false;
        return this;
    },

    toString: function() {
        if (!this.tagName) {
            throw new Error('tagName is required');
        }
        //
        var html = [];
        html.push('<' + this.tagName);
        //
        utils.each(this.attributes.all(), function(key, val) {
            html.push(' ' + key + '="' + val + '"');
        });
        //
        var klass = this.cls();
        if (klass) {
            html.push(' class="' + klass + '"');
        }
        //
        var style = this.css();
        if (style) {
            html.push(' style="' + style + '"');
        }
        //
        if (this.selfClose) {
            html.push(' />');
        } else {
            html.push('>');
            //
            utils.each(this.children, function(i, item) {
                if (item instanceof htmlBuilder) {
                    html.push(item.toString());
                } else {
                    html.push(String(item));
                }
            });
            //
            html.push('</' + this.tagName + '>');
        }
        //
        return html.join('');
    }
};