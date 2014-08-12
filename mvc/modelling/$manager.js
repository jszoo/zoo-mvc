/*
* modellingManager
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.8.1
*/

'use strict';

var utils = require('zoo-utils'),
    caching = require('zoo-cache');

var modellingManager = module.exports = function(store) {
    this.dataTypes = new dataTypeManager(store);
    this.validators = new validatorManager(store);
};

modellingManager.prototype = {

    dataTypes: null, validators: null,

    constructor: modellingManager,

    registerAll: function() {
        var self = this;
        utils.each(require('./datatype'), function(key, cls) { self.dataTypes.register(key, cls); });
        utils.each(require('./validator'), function(key, cls) { self.validators.register(key, cls); });
    },

    /*
    * reslove setting to sepcified data type class and valiadator classes
    *   set: { type: 'string', required: true, ... }  /  set: 'string'
    */
    resolve: function(set) {
        var dtype, valids, typeClass, self = this;
        //
        if (utils.isString(set)) {
            // resolve data type
            typeClass = this.dataTypes.get(set);
            if (typeClass) { dtype = new typeClass(); }
        }
        else if (set) {
            utils.each(set, function(key, val) {
                if (!utils.hasOwn(set, key)) {
                    return;
                }
                if (key.toLowerCase() === 'type') {
                    // resolve data type
                    typeClass = self.dataTypes.get(val);
                    if (typeClass) { dtype = new typeClass(); }
                } else {
                    // resolve validators
                    typeClass = self.validators.get(key);
                    if (typeClass) {
                        if (!valids) { valids = []; }
                        valids.push(new typeClass(set[key]));
                    }
                }
            });
        }
        return new modellingMetas(dtype, valids);
    }
};

var modellingMetas = function(typeObj, validators){
    this.typeObj = typeObj;
    this.validators = validators;
};

modellingMetas.prototype = {

    typeObj: null, validators: null,
    
    constructor: modellingMetas,

    has: function() {
        return this.typeObj || this.validators;
    },

    exe: function(value, fieldName, reportError) {
        if (this.typeObj) {
            try {
                value = this.typeObj.parse(value, fieldName);
            } catch (ex) {
                reportError(ex);
            }
        }
        if (this.validators) {
            utils.each(this.validators, function(i, obj) {
                try {
                    obj.validate(value, fieldName);
                } catch (ex) {
                    reportError(ex);
                }
            });
        }
        return value;
    }
};

var dataTypeManager = function(store) {
    this._inner = caching.region('mvc-modelling-datatypes-cache', store);
};

dataTypeManager.prototype = {

    _inner: null,

    constructor: dataTypeManager,

    register: function(name, klass) {
        if (!name) { throw new Error('Register data type "name" is required'); }
        if (!utils.isFunction(klass)) { throw new Error('Register data type "class" is function required'); }
        if (this.exists(name)) { throw new Error('DataType "'+ name + '" already exists'); }
        return this._inner.set(name, klass);
    },

    get: function(name) {
        return this._inner.get(name);
    },

    exists: function(name) {
        return this._inner.exists(name);
    },

    remove: function(name) {
        return this._inner.remove(name);
    },

    clear: function() {
        return this._inner.clear();
    }
};

var validatorManager = function(store) {
    this._inner = caching.region('mvc-modelling-validators-cache', store);
};

validatorManager.prototype = {

    _inner: null,

    constructor: validatorManager,

    register: function(name, klass) {
        if (!name) { throw new Error('Register data type "name" is required'); }
        if (!utils.isFunction(klass)) { throw new Error('Register data type "class" is function required'); }
        if (this.exists(name)) { throw new Error('Valiadator "'+ name + '" already exists'); }
        return this._inner.set(name, klass);
    },

    get: function(name) {
        return this._inner.get(name);
    },

    exists: function(name) {
        return this._inner.exists(name);
    },

    remove: function(name) {
        return this._inner.remove(name);
    },

    clear: function() {
        return this._inner.clear();
    }
};
