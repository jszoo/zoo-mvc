/*
* mvcHandler
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var utils = require('./utilities'),
    mvcHelper = require('./mvcHelper'),
    mvcContext = require('./mvcContext');

module.exports = function(mvc) {

    var getParam = function(routeData, findName, defaultIndex) {
        if (findName === 'area') { defaultIndex = false; }
        return mvcHelper.findRouteItem(routeData, findName, defaultIndex);
    };

    // route core
    return function(req, res, next) {
        //
        var rulee  = {
            request: req.rulee,
            response: res.rulee
        };
        //
        var matched = false, exception;
        var gotoNext = function() {
            if (exception) {
                next(exception);
            } else if (!matched) {
                rulee.response.redirect(utils.appendQuery('/notfound', { 'return' : req.url }));
            }
        };
        //
        var routeSet = mvc.areas.routeSet();
        utils.each(routeSet, function(n, route) {
            var controller;
            try {
                var routeData = route.routeData(rulee.request.url.pathname);
                if (!routeData) { return; } // continue
                //
                var area = mvc.areas.get(route.ownerAreaName);
                var areaParam = getParam(routeData, 'area');
                if (!areaParam) {
                    routeData.unshift({
                        name: 'area',
                        value: area.name
                    });
                }
                //
                var controllerParam = getParam(routeData, 'controller');
                if (!controllerParam) { return; } // continue
                //
                controller = area.findController(controllerParam.value);
                if (!controller) { return; } // continue
                //
                var actionParam = getParam(routeData, 'action');
                if (!actionParam) { return; } // continue
                //
                var httpContext = new mvcContext({
                    mvc: mvc,
                    request: req,
                    response: res,
                    route: route,
                    routeData: routeData,
                    routeArea: area,
                    routeSet: routeSet,
                    rulee: rulee,
                    items: {}
                });
                controller = controller.clone();
                controller.initialize(httpContext);
                controller.executeImpl();
                //
                var action = controller.findAction(actionParam.value);
                if (!action) { 
                    controller.destroy();
                    return; // continue
                }
                //
                matched = true;
                var actionExecuted = false;
                action.executeImpl(function(obj) {
                    if (actionExecuted) { return; }
                    actionExecuted = true;
                    //
                    var resultExecuted = false;
                    action.executeResult(obj, function(error) {
                        if (resultExecuted) { return; }
                        resultExecuted = true;
                        controller.destroy();
                        exception = error;
                        gotoNext();
                    });
                });
                //
                return false; // break
            }
            catch (ex) {
                controller && controller.destroy();
                exception = ex;
                return false; // break
            }
        });
        // next
        gotoNext();
    };
};
