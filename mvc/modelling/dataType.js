/*
* dataType
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.31
*/

'use strict';

var utils = require('zoo-utils');


/* dataTypeBase
***************************************/
var dataTypeBase = function() { };

dataTypeBase.prototype = {

    typeName: null,

    constructor: dataTypeBase, className: 'dataType',

    parse: function(value) {
        throw new Error('"parse" interface function needs override by sub classes');
    }
};


/* stringType
***************************************/
var stringType = exports.stringType = function(set) {
    stringType.superclass.constructor.call(this, set);
};

utils.inherit(stringType, dataTypeBase, {
    typeName: 'string',
    parse: function(value) {
        return String(value);
    }
});


/* integerType
***************************************/
var integerType = exports.integerType = function(set) {
    integerType.superclass.constructor.call(this, set);
};

utils.inherit(integerType, dataTypeBase, {
    typeName: 'integer',
    parse: function(value) {
        return parseInt(value, 10);
    }
});

var intType = exports.intType = function(set) {
    intType.superclass.constructor.call(this, set);
};

utils.inherit(intType, integerType, {
    typeName: 'int'
});


/* floatType
***************************************/
var floatType = exports.floatType = function(set) {
    floatType.superclass.constructor.call(this, set);
};

utils.inherit(floatType, dataTypeBase, {
    typeName: 'float',
    parse: function(value) {
        return parseFloat(value, 10);
    }
});


/* booleanType
***************************************/
var booleanType = exports.booleanType = function(set) {
    booleanType.superclass.constructor.call(this, set);
};

utils.inherit(booleanType, dataTypeBase, {
    typeName: 'boolean',
    parse: function(value) {
        return Boolean(value);
    }
});

var boolType = exports.boolType = function(set) {
    boolType.superclass.constructor.call(this, set);
};

utils.inherit(boolType, booleanType, {
    typeName: 'bool'
});


/* dateType
***************************************/
var dateType = exports.dateType = function(set) {
    dateType.superclass.constructor.call(this, set);
};

utils.inherit(dateType, dataTypeBase, {
    typeName: 'date',
    parse: function(value) {
        //TODO:
    }
});


/* arrayType
***************************************/
var arrayType = exports.arrayType = function(set) {
    arrayType.superclass.constructor.call(this, set);
};

utils.inherit(arrayType, dataTypeBase, {
    typeName: 'array',
    parse: function(value) {
        //TODO:
    }
});
