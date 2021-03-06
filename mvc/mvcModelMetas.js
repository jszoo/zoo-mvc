/*
* mvcModelMetas
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.31
*/

'use strict';

var fs = require('fs'),
    path = require('path'),
    utils = require('zoo-utils'),
    caching = require('zoo-cache'),
    mvcModelMeta = require('./mvcModelMeta'),
    mvcModelBinder = require('./mvcModelBinder'),
    mvcModelBinderAttribute = require('./mvcModelBinderAttribute');

var modelAttributes = {
    mvc: function() {
        return (this._mvc ? this._mvc : (this._mvc = require('./mvcApp')));
    },
    del: function(attrName, category) {
        this.mvc().attributes.remove(attrName, category);
    },
    set: function(attrName, modelMeta, category) {
        var binder = new mvcModelBinder(modelMeta);
        var binderAttribute = mvcModelBinderAttribute.subClass(binder);
        this.mvc().attributes.register(attrName, binderAttribute, category);
    }
};

var mvcModelMetas = module.exports = function(set, store) {
    utils.extend(this, set);
    if (!this.ownerAreaName) { throw new Error('Parameter "ownerAreaName" is required'); }
    this._inner = caching.region('mvc-' + this.ownerAreaName + '-area-model-metas-cache', store);
};

mvcModelMetas.prototype = {

    ownerAreaName: null, _inner: null,

    constructor: mvcModelMetas,

    all: function() {
        return this._inner.all();
    },

    get: function(name) {
        return this._inner.get(name);
    },

    exists: function(name) {
        return this._inner.exists(name);
    },

    remove: function(name) {
        var ret = this._inner.remove(name);
        modelAttributes.del(name, this.ownerAreaName);
        return ret;
    },

    count: function() {
        return this._inner.count();
    },

    clear: function() {
        this._inner.clear();
        return this;
    },

    set: function(name, modelMeta) {
        if (modelMeta === undefined) {
            modelMeta = name;
            name = null;
        }
        //
        if (!modelMeta) { throw new Error('Model object is required'); }
        if (!(modelMeta instanceof mvcModelMeta)) { throw new Error('The specified model is invalid type'); }
        //
        name = (name || modelMeta.name);
        //
        if (!utils.isString(name)) { throw new Error(utils.format('Model name requires string type but got {0} type', utils.type(name))); }
        if (!name) { throw new Error('Model name is required'); }
        if (!/^[0-9a-zA-Z_-]+$/.test(name)) { throw new Error(utils.format('Model name "{0}" is invalid', name)); }
        if (this.exists(name)) { throw new Error(utils.format('Model "{0}" under area "{1}" is duplicated', name, this.ownerAreaName)); }
        //
        modelMeta.name = name;
        modelMeta.ownerAreaName = this.ownerAreaName;
        this._inner.set(name, modelMeta);
        modelAttributes.set(name, modelMeta, this.ownerAreaName);
        return this;
    },

    register: function(name, metadata) {
        this.set(mvcModelMeta.api(name, metadata));
    },

    loaddir: function(modelsPath, act) {
        if (!fs.existsSync(modelsPath) || !fs.statSync(modelsPath).isDirectory()) { return; }
        var self = this, modelItems = fs.readdirSync(modelsPath), fn = act || 'loadfile';
        utils.each(modelItems, function(i, modelItem) {
            if (modelItem.indexOf('.') === 0) { return; }
            var modelPath = path.join(modelsPath, modelItem);
            self.loaddir(modelPath, act);
            self[fn](modelPath);
        });
    },

    unloaddir: function(modelsPath) {
        this.loaddir(modelsPath, 'unloadfile');
    },

    loadfile: function(filePath) {
        if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) { return; }
        var self = this, modelMetas = mvcModelMeta.loadfile(filePath);
        utils.each(modelMetas, function() {
            if (!this.name) {
                var extName = path.extname(filePath);
                this.name = path.basename(filePath, extName);
            }
            this.path = filePath;
            self.set(this.name, this);
        });
    },

    unloadfile: function(filePath) {
        var self = this, all = this._inner.all();
        utils.each(all, function() {
            if (this.path === filePath) {
                self.remove(this.name);
            }
        });
    }
};
