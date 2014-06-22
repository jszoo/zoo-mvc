(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* controllers
* author: ronglin
* create date: 2014.5.4
*/

var name = module.exports.name = 'cms.controllers';

angular.module(name, [])
.controller('MainCtrl', require('./main-controller'))
.controller('HomeCtrl', require('./home-controller'));
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/controllers/all.js","/controllers")
},{"./home-controller":2,"./main-controller":3,"buffer":24,"oMfpAn":27}],2:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* home-controller
* author: ronglin
* create date: 2014.5.4
*/

module.exports = ['$scope', 'Blogs', function ($scope, Blogs) {
    $scope.blogs = Blogs.query(20);
}];
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/controllers/home-controller.js","/controllers")
},{"buffer":24,"oMfpAn":27}],3:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* main-controller
* author: ronglin
* create date: 2014.5.4
*/

module.exports = ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
    $scope.slide = '';
    $rootScope.back = function () {
        $scope.slide = 'slide-right';
        $window.history.back();
    };
    $rootScope.go = function (path) {
        $scope.slide = 'slide-left';
        $location.url(path);
    };
}];
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/controllers/main-controller.js","/controllers")
},{"buffer":24,"oMfpAn":27}],4:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* data service
* author: ronglin
* create date: 2014.5.4
*/

var name = module.exports.name = 'cms.dataService';

angular.module(name, [])
.factory('Blogs', require('./blog-service'));
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/dataservice/all.js","/dataservice")
},{"./blog-service":5,"buffer":24,"oMfpAn":27}],5:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* blog-service
* author: ronglin
* create date: 2014.5.4
*/

module.exports = [function () {
    return {
        query: function (take) {
        	return [{
        		title:'title1',
        		content:'content1'
        	},{
        		title:'title2',
        		content:'content2'
        	},{
        		title:'title3',
        		content:'content3'
        	},{
        		title:'title4',
        		content:'content4'
        	},{
        		title:'title5',
        		content:'content5'
        	}];
        }
    };
}];
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/dataservice/blog-service.js","/dataservice")
},{"buffer":24,"oMfpAn":27}],6:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* directives
* author: ronglin
* create date: 2014.5.4
*/

var name = module.exports.name = 'cms.directives';

angular.module(name, [])
.directive('cmsHeader', require('./header'))
.directive('cmsFooter', require('./footer'))
.directive('cmsMenu', require('./menu'))
.directive('imgSrc', require('./imgsrc'));
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/directives/all.js","/directives")
},{"./footer":7,"./header":8,"./imgsrc":9,"./menu":10,"buffer":24,"oMfpAn":27}],7:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* footer
* author: ronglin
* create date: 2014.5.4
*/

module.exports = ['utils', function(utils) {
	return {
		templateUrl: utils.viewUrl('views/directives/footer.html'),
		restrict: 'E',
		replace: true
	};
}];
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/directives/footer.js","/directives")
},{"buffer":24,"oMfpAn":27}],8:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* header
* author: ronglin
* create date: 2014.5.4
*/

module.exports = ['utils', function(utils) {
	return {
		templateUrl: utils.viewUrl('views/directives/header.html'),
		restrict: 'E',
		replace: true,
		scope: {
			current: '@current'
		}
	};
}];
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/directives/header.js","/directives")
},{"buffer":24,"oMfpAn":27}],9:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* src
* author: ronglin
* create date: 2014.6.19
*/

module.exports = ['utils', function(utils) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
        	if (element.prop('tagName') === 'IMG') {
        		var img = utils.trim(attrs.imgSrc, { find: '/'});
        		element.attr('src', utils.format('img/{0}', img));
        	}
        }
    };
}];
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/directives/imgsrc.js","/directives")
},{"buffer":24,"oMfpAn":27}],10:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* menu
* author: ronglin
* create date: 2014.6.18
*/

module.exports = ['utils', function(utils) {
    // ret
    return {
        scope: { current: '@' },
        controller: ['$scope', function($scope) {
            $scope.showPage = function(page) {
                $scope.current = page;
            };
        }],
        templateUrl: utils.viewUrl('views/directives/menu.html'),
        restrict: 'E',
        replace: true
    };
}];
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/directives/menu.js","/directives")
},{"buffer":24,"oMfpAn":27}],11:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* main
* author: ronglin
* create date: 2014.4.22
*/

'use strict';

require('./libs/angular/all');
var utilitiesName = 'cms.utilities';
angular.module(utilitiesName, []).constant('utils', require('./libs/utilities'));

var filters = require('./filters/all');
var directives = require('./directives/all');
var dataService = require('./dataservice/all');
var controllers = require('./controllers/all');

var cms = angular.module('cms', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    utilitiesName,
    filters.name,
    directives.name,
    dataService.name,
    controllers.name
]);

cms.config(['$routeProvider', 'utils', function ($routeProvider, utils) {
    $routeProvider.when('/home', { templateUrl: utils.viewUrl('views/home.html'), controller: 'HomeCtrl' });
    $routeProvider.when('/about', { templateUrl: utils.viewUrl('views/about.html') });
    $routeProvider.when('/blog', { templateUrl: utils.viewUrl('views/blog.html') });
    $routeProvider.otherwise({ redirectTo: '/home' });
}]);

}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_e1694439.js","/")
},{"./controllers/all":1,"./dataservice/all":4,"./directives/all":6,"./filters/all":12,"./libs/angular/all":14,"./libs/utilities":22,"buffer":24,"oMfpAn":27}],12:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* filters
* author: ronglin
* create date: 2014.6.18
*/

var name = module.exports.name = 'cms.filters';

angular.module(name, [])
.filter('i18n', require('./i18n'));
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/filters/all.js","/filters")
},{"./i18n":13,"buffer":24,"oMfpAn":27}],13:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* i18n
* author: ronglin
* create date: 2014.6.18
*/

module.exports = ['utils', function(utils) {
	return function(key) {
		return utils.i18n(key, key);
	};
}];
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/filters/i18n.js","/filters")
},{"buffer":24,"oMfpAn":27}],14:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* all angular
* author: ronglin
* create date: 2014.5.4
*/

require('./angular.min');
require('./angular-touch.min');
require('./angular-resource.min');
require('./angular-animate.min');
require('./angular-route.min');
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libs/angular/all.js","/libs/angular")
},{"./angular-animate.min":15,"./angular-resource.min":16,"./angular-route.min":17,"./angular-touch.min":18,"./angular.min":19,"buffer":24,"oMfpAn":27}],15:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
 AngularJS v1.2.12
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(v,k,t){'use strict';k.module("ngAnimate",["ng"]).factory("$$animateReflow",["$window","$timeout",function(k,B){var d=k.requestAnimationFrame||k.webkitRequestAnimationFrame||function(d){return B(d,10,!1)},q=k.cancelAnimationFrame||k.webkitCancelAnimationFrame||function(d){return B.cancel(d)};return function(p){var k=d(p);return function(){q(k)}}}]).config(["$provide","$animateProvider",function(R,B){function d(d){for(var k=0;k<d.length;k++){var p=d[k];if(p.nodeType==X)return p}}var q=k.noop,
p=k.forEach,$=B.$$selectors,X=1,l="$$ngAnimateState",K="ng-animate",m={running:!0};R.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement","$timeout","$rootScope","$document",function(C,v,t,H,y,w,N){function I(a){if(a){var g=[],e={};a=a.substr(1).split(".");(t.transitions||t.animations)&&a.push("");for(var c=0;c<a.length;c++){var f=a[c],d=$[f];d&&!e[f]&&(g.push(v.get(d)),e[f]=!0)}return g}}function r(a,g,e,c,f,k,m){function t(a){n();if(!0===a)z();else{if(a=e.data(l))a.done=z,e.data(l,
a);C(D,"after",z)}}function C(c,d,f){"after"==d?r():E();var k=d+"End";p(c,function(b,aa){var h=function(){a:{var b=d+"Complete",a=c[aa];a[b]=!0;(a[k]||q)();for(a=0;a<c.length;a++)if(!c[a][b])break a;f()}};"before"!=d||"enter"!=a&&"move"!=a?b[d]?b[k]=u?b[d](e,g,h):b[d](e,h):h():h()})}function w(c){e.triggerHandler("$animate:"+c,{event:a,className:g})}function E(){y(function(){w("before")},0,!1)}function r(){y(function(){w("after")},0,!1)}function v(){y(function(){w("close");m&&m()},0,!1)}function n(){n.hasBeenRun||
(n.hasBeenRun=!0,k())}function z(){if(!z.hasBeenRun){z.hasBeenRun=!0;var a=e.data(l);a&&(u?A(e):(a.closeAnimationTimeout=y(function(){A(e)},0,!1),e.data(l,a)));v()}}var s,x,G=d(e);G&&(s=G.className,x=s+" "+g);if(G&&L(x)){x=(" "+x).replace(/\s+/g,".");c||(c=f?f.parent():e.parent());x=I(x);var u="addClass"==a||"removeClass"==a;f=e.data(l)||{};if(ba(e,c)||0===x.length)n(),E(),r(),z();else{var D=[];u&&(f.disabled||f.running&&f.structural)||p(x,function(c){if(!c.allowCancel||c.allowCancel(e,a,g)){var d=
c[a];"leave"==a?(c=d,d=null):c=c["before"+a.charAt(0).toUpperCase()+a.substr(1)];D.push({before:c,after:d})}});0===D.length?(n(),E(),r(),v()):(c=" "+s+" ",f.running&&(y.cancel(f.closeAnimationTimeout),A(e),J(f.animations),x=(s=u&&!f.structural)&&f.className==g&&a!=f.event,f.beforeComplete||x?(f.done||q)(!0):s&&(c="removeClass"==f.event?c.replace(" "+f.className+" "," "):c+f.className+" ")),s=" "+g+" ","addClass"==a&&0<=c.indexOf(s)||"removeClass"==a&&-1==c.indexOf(s)?(n(),E(),r(),v()):(e.addClass(K),
e.data(l,{running:!0,event:a,className:g,structural:!u,animations:D,done:t}),C(D,"before",t)))}}else n(),E(),r(),z()}function Q(a){a=d(a);p(a.querySelectorAll("."+K),function(a){a=k.element(a);var e=a.data(l);e&&(J(e.animations),A(a))})}function J(a){p(a,function(a){a.beforeComplete||(a.beforeEnd||q)(!0);a.afterComplete||(a.afterEnd||q)(!0)})}function A(a){d(a)==d(H)?m.disabled||(m.running=!1,m.structural=!1):(a.removeClass(K),a.removeData(l))}function ba(a,g){if(m.disabled)return!0;if(d(a)==d(H))return m.disabled||
m.running;do{if(0===g.length)break;var e=d(g)==d(H),c=e?m:g.data(l),c=c&&(!!c.disabled||!!c.running);if(e||c)return c;if(e)break}while(g=g.parent());return!0}H.data(l,m);w.$$postDigest(function(){w.$$postDigest(function(){m.running=!1})});var M=B.classNameFilter(),L=M?function(a){return M.test(a)}:function(){return!0};return{enter:function(a,d,e,c){this.enabled(!1,a);C.enter(a,d,e);w.$$postDigest(function(){r("enter","ng-enter",a,d,e,q,c)})},leave:function(a,d){Q(a);this.enabled(!1,a);w.$$postDigest(function(){r("leave",
"ng-leave",a,null,null,function(){C.leave(a)},d)})},move:function(a,d,e,c){Q(a);this.enabled(!1,a);C.move(a,d,e);w.$$postDigest(function(){r("move","ng-move",a,d,e,q,c)})},addClass:function(a,d,e){r("addClass",d,a,null,null,function(){C.addClass(a,d)},e)},removeClass:function(a,d,e){r("removeClass",d,a,null,null,function(){C.removeClass(a,d)},e)},enabled:function(a,d){switch(arguments.length){case 2:if(a)A(d);else{var e=d.data(l)||{};e.disabled=!0;d.data(l,e)}break;case 1:m.disabled=!a;break;default:a=
!m.disabled}return!!a}}}]);B.register("",["$window","$sniffer","$timeout","$$animateReflow",function(m,l,B,H){function y(b,a){O&&O();U.push(a);var h=d(b);b=k.element(h);V.push(b);var h=b.data(n),c=h.stagger,c=h.itemIndex*(Math.max(c.animationDelay,c.transitionDelay)||0);P=Math.max(P,(c+(h.maxDelay+h.maxDuration)*s)*x);h.animationCount=G;O=H(function(){p(U,function(b){b()});var b=[],a=G;p(V,function(a){b.push(a)});B(function(){w(b,a);b=null},P,!1);U=[];V=[];O=null;u={};P=0;G++})}function w(b,a){p(b,
function(b){(b=b.data(n))&&b.animationCount==a&&(b.closeAnimationFn||q)()})}function N(b,a){var h=a?u[a]:null;if(!h){var d=0,c=0,e=0,k=0,g,n,l,r;p(b,function(b){if(b.nodeType==X){b=m.getComputedStyle(b)||{};l=b[f+Y];d=Math.max(I(l),d);r=b[f+W];g=b[f+E];c=Math.max(I(g),c);n=b[F+E];k=Math.max(I(n),k);var a=I(b[F+Y]);0<a&&(a*=parseInt(b[F+R],10)||1);e=Math.max(a,e)}});h={total:0,transitionPropertyStyle:r,transitionDurationStyle:l,transitionDelayStyle:g,transitionDelay:c,transitionDuration:d,animationDelayStyle:n,
animationDelay:k,animationDuration:e};a&&(u[a]=h)}return h}function I(b){var a=0;b=k.isString(b)?b.split(/\s*,\s*/):[];p(b,function(b){a=Math.max(parseFloat(b)||0,a)});return a}function r(b){var a=b.parent(),h=a.data(Z);h||(a.data(Z,++D),h=D);return h+"-"+d(b).className}function Q(b,a,h){var c=r(b),e=c+" "+a,k={},g=u[e]?++u[e].total:0;if(0<g){var l=a+"-stagger",k=c+" "+l;(c=!u[k])&&b.addClass(l);k=N(b,k);c&&b.removeClass(l)}h=h||function(b){return b()};b.addClass(a);h=h(function(){return N(b,e)});
l=Math.max(h.transitionDelay,h.animationDelay);c=Math.max(h.transitionDuration,h.animationDuration);if(0===c)return b.removeClass(a),!1;var m="";0<h.transitionDuration?d(b).style[f+W]="none":d(b).style[F]="none 0s";p(a.split(" "),function(b,a){m+=(0<a?" ":"")+b+"-active"});b.data(n,{className:a,activeClassName:m,maxDuration:c,maxDelay:l,classes:a+" "+m,timings:h,stagger:k,itemIndex:g});return!0}function J(b){var a=f+W;b=d(b);b.style[a]&&0<b.style[a].length&&(b.style[a]="")}function A(b){var a=F;b=
d(b);b.style[a]&&0<b.style[a].length&&(b.style[a]="")}function K(b,a,h){function e(c){b.off(v,k);b.removeClass(r);c=b;c.removeClass(a);c.removeData(n);c=d(b);for(var h in s)c.style.removeProperty(s[h])}function k(b){b.stopPropagation();var a=b.originalEvent||b;b=a.$manualTimeStamp||a.timeStamp||Date.now();a=parseFloat(a.elapsedTime.toFixed(z));Math.max(b-w,0)>=u&&a>=p&&h()}var f=b.data(n),g=d(b);if(-1!=g.className.indexOf(a)&&f){var l=f.timings,m=f.stagger,p=f.maxDuration,r=f.activeClassName,u=Math.max(l.transitionDelay,
l.animationDelay)*x,w=Date.now(),v=T+" "+S,t=f.itemIndex,q="",s=[];if(0<l.transitionDuration){var y=l.transitionPropertyStyle;-1==y.indexOf("all")&&(q+=c+"transition-property: "+y+";",q+=c+"transition-duration: "+l.transitionDurationStyle+";",s.push(c+"transition-property"),s.push(c+"transition-duration"))}0<t&&(0<m.transitionDelay&&0===m.transitionDuration&&(q+=c+"transition-delay: "+M(l.transitionDelayStyle,m.transitionDelay,t)+"; ",s.push(c+"transition-delay")),0<m.animationDelay&&0===m.animationDuration&&
(q+=c+"animation-delay: "+M(l.animationDelayStyle,m.animationDelay,t)+"; ",s.push(c+"animation-delay")));0<s.length&&(l=g.getAttribute("style")||"",g.setAttribute("style",l+" "+q));b.on(v,k);b.addClass(r);f.closeAnimationFn=function(){e();h()};return e}h()}function M(b,a,c){var d="";p(b.split(","),function(b,e){d+=(0<e?",":"")+(c*a+parseInt(b,10))+"s"});return d}function L(b,a,c){if(Q(b,a,c))return function(c){c&&(b.removeClass(a),b.removeData(n))}}function a(a,c,d){if(a.data(n))return K(a,c,d);a.removeClass(c);
a.removeData(n);d()}function g(b,c,d){var e=L(b,c);if(e){var f=e;y(b,function(){J(b);A(b);f=a(b,c,d)});return function(a){(f||q)(a)}}d()}function e(a,c){var d="";a=k.isArray(a)?a:a.split(/\s+/);p(a,function(a,b){a&&0<a.length&&(d+=(0<b?" ":"")+a+c)});return d}var c="",f,S,F,T;v.ontransitionend===t&&v.onwebkittransitionend!==t?(c="-webkit-",f="WebkitTransition",S="webkitTransitionEnd transitionend"):(f="transition",S="transitionend");v.onanimationend===t&&v.onwebkitanimationend!==t?(c="-webkit-",F=
"WebkitAnimation",T="webkitAnimationEnd animationend"):(F="animation",T="animationend");var Y="Duration",W="Property",E="Delay",R="IterationCount",Z="$$ngAnimateKey",n="$$ngAnimateCSS3Data",z=3,s=1.5,x=1E3,G=0,u={},D=0,U=[],V=[],O,P=0;return{allowCancel:function(a,c,h){var f=(a.data(n)||{}).classes;if(!f||0<=["enter","leave","move"].indexOf(c))return!0;var l=a.parent(),g=k.element(d(a).cloneNode());g.attr("style","position:absolute; top:-9999px; left:-9999px");g.removeAttr("id");g.empty();p(f.split(" "),
function(a){g.removeClass(a)});g.addClass(e(h,"addClass"==c?"-add":"-remove"));l.append(g);a=N(g);g.remove();return 0<Math.max(a.transitionDuration,a.animationDuration)},enter:function(a,c){return g(a,"ng-enter",c)},leave:function(a,c){return g(a,"ng-leave",c)},move:function(a,c){return g(a,"ng-move",c)},beforeAddClass:function(a,c,d){var f=L(a,e(c,"-add"),function(d){a.addClass(c);d=d();a.removeClass(c);return d});if(f)return y(a,function(){J(a);A(a);d()}),f;d()},addClass:function(b,c,d){return a(b,
e(c,"-add"),d)},beforeRemoveClass:function(a,c,d){var f=L(a,e(c,"-remove"),function(d){var e=a.attr("class");a.removeClass(c);d=d();a.attr("class",e);return d});if(f)return y(a,function(){J(a);A(a);d()}),f;d()},removeClass:function(b,c,d){return a(b,e(c,"-remove"),d)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libs/angular/angular-animate.min.js","/libs/angular")
},{"buffer":24,"oMfpAn":27}],16:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
 AngularJS v1.2.12
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(H,a,A){'use strict';function D(p,g){g=g||{};a.forEach(g,function(a,c){delete g[c]});for(var c in p)!p.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(g[c]=p[c]);return g}var v=a.$$minErr("$resource"),C=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;a.module("ngResource",["ng"]).factory("$resource",["$http","$q",function(p,g){function c(a,c){this.template=a;this.defaults=c||{};this.urlParams={}}function t(n,w,l){function r(h,d){var e={};d=x({},w,d);s(d,function(b,d){u(b)&&(b=b());var k;if(b&&
b.charAt&&"@"==b.charAt(0)){k=h;var a=b.substr(1);if(null==a||""===a||"hasOwnProperty"===a||!C.test("."+a))throw v("badmember",a);for(var a=a.split("."),f=0,c=a.length;f<c&&k!==A;f++){var g=a[f];k=null!==k?k[g]:A}}else k=b;e[d]=k});return e}function e(a){return a.resource}function f(a){D(a||{},this)}var F=new c(n);l=x({},B,l);s(l,function(h,d){var c=/^(POST|PUT|PATCH)$/i.test(h.method);f[d]=function(b,d,k,w){var q={},n,l,y;switch(arguments.length){case 4:y=w,l=k;case 3:case 2:if(u(d)){if(u(b)){l=
b;y=d;break}l=d;y=k}else{q=b;n=d;l=k;break}case 1:u(b)?l=b:c?n=b:q=b;break;case 0:break;default:throw v("badargs",arguments.length);}var t=this instanceof f,m=t?n:h.isArray?[]:new f(n),z={},B=h.interceptor&&h.interceptor.response||e,C=h.interceptor&&h.interceptor.responseError||A;s(h,function(a,b){"params"!=b&&("isArray"!=b&&"interceptor"!=b)&&(z[b]=G(a))});c&&(z.data=n);F.setUrlParams(z,x({},r(n,h.params||{}),q),h.url);q=p(z).then(function(b){var d=b.data,k=m.$promise;if(d){if(a.isArray(d)!==!!h.isArray)throw v("badcfg",
h.isArray?"array":"object",a.isArray(d)?"array":"object");h.isArray?(m.length=0,s(d,function(b){m.push(new f(b))})):(D(d,m),m.$promise=k)}m.$resolved=!0;b.resource=m;return b},function(b){m.$resolved=!0;(y||E)(b);return g.reject(b)});q=q.then(function(b){var a=B(b);(l||E)(a,b.headers);return a},C);return t?q:(m.$promise=q,m.$resolved=!1,m)};f.prototype["$"+d]=function(b,a,k){u(b)&&(k=a,a=b,b={});b=f[d].call(this,b,this,a,k);return b.$promise||b}});f.bind=function(a){return t(n,x({},w,a),l)};return f}
var B={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},E=a.noop,s=a.forEach,x=a.extend,G=a.copy,u=a.isFunction;c.prototype={setUrlParams:function(c,g,l){var r=this,e=l||r.template,f,p,h=r.urlParams={};s(e.split(/\W/),function(a){if("hasOwnProperty"===a)throw v("badname");!/^\d+$/.test(a)&&(a&&RegExp("(^|[^\\\\]):"+a+"(\\W|$)").test(e))&&(h[a]=!0)});e=e.replace(/\\:/g,":");g=g||{};s(r.urlParams,function(d,c){f=g.hasOwnProperty(c)?
g[c]:r.defaults[c];a.isDefined(f)&&null!==f?(p=encodeURIComponent(f).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),e=e.replace(RegExp(":"+c+"(\\W|$)","g"),function(a,c){return p+c})):e=e.replace(RegExp("(/?):"+c+"(\\W|$)","g"),function(a,c,d){return"/"==d.charAt(0)?d:c+d})});e=e.replace(/\/+$/,"")||"/";e=e.replace(/\/\.(?=\w+($|\?))/,".");c.url=e.replace(/\/\\\./,"/.");s(g,function(a,
e){r.urlParams[e]||(c.params=c.params||{},c.params[e]=a)})}};return t}])})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libs/angular/angular-resource.min.js","/libs/angular")
},{"buffer":24,"oMfpAn":27}],17:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
 AngularJS v1.2.12
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(h,e,A){'use strict';function u(w,q,k){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,n){function y(){l&&(l.$destroy(),l=null);g&&(k.leave(g),g=null)}function v(){var b=w.current&&w.current.locals;if(e.isDefined(b&&b.$template)){var b=a.$new(),f=w.current;g=n(b,function(d){k.enter(d,null,g||c,function(){!e.isDefined(t)||t&&!a.$eval(t)||q()});y()});l=f.scope=b;l.$emit("$viewContentLoaded");l.$eval(h)}else y()}var l,g,t=b.autoscroll,h=b.onload||"";
a.$on("$routeChangeSuccess",v);v()}}}function z(e,h,k){return{restrict:"ECA",priority:-400,link:function(a,c){var b=k.current,f=b.locals;c.html(f.$template);var n=e(c.contents());b.controller&&(f.$scope=a,f=h(b.controller,f),b.controllerAs&&(a[b.controllerAs]=f),c.data("$ngControllerController",f),c.children().data("$ngControllerController",f));n(a)}}}h=e.module("ngRoute",["ng"]).provider("$route",function(){function h(a,c){return e.extend(new (e.extend(function(){},{prototype:a})),c)}function q(a,
e){var b=e.caseInsensitiveMatch,f={originalPath:a,regexp:a},h=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,e,b,c){a="?"===c?c:null;c="*"===c?c:null;h.push({name:b,optional:!!a});e=e||"";return""+(a?"":e)+"(?:"+(a?e:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=RegExp("^"+a+"$",b?"i":"");return f}var k={};this.when=function(a,c){k[a]=e.extend({reloadOnSearch:!0},c,a&&q(a,c));if(a){var b="/"==a[a.length-1]?a.substr(0,a.length-
1):a+"/";k[b]=e.extend({redirectTo:a},q(b,c))}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(a,c,b,f,n,q,v,l){function g(){var d=t(),m=r.current;if(d&&m&&d.$$route===m.$$route&&e.equals(d.pathParams,m.pathParams)&&!d.reloadOnSearch&&!x)m.params=d.params,e.copy(m.params,b),a.$broadcast("$routeUpdate",m);else if(d||m)x=!1,a.$broadcast("$routeChangeStart",d,m),(r.current=
d)&&d.redirectTo&&(e.isString(d.redirectTo)?c.path(u(d.redirectTo,d.params)).search(d.params).replace():c.url(d.redirectTo(d.pathParams,c.path(),c.search())).replace()),f.when(d).then(function(){if(d){var a=e.extend({},d.resolve),c,b;e.forEach(a,function(d,c){a[c]=e.isString(d)?n.get(d):n.invoke(d)});e.isDefined(c=d.template)?e.isFunction(c)&&(c=c(d.params)):e.isDefined(b=d.templateUrl)&&(e.isFunction(b)&&(b=b(d.params)),b=l.getTrustedResourceUrl(b),e.isDefined(b)&&(d.loadedTemplateUrl=b,c=q.get(b,
{cache:v}).then(function(a){return a.data})));e.isDefined(c)&&(a.$template=c);return f.all(a)}}).then(function(c){d==r.current&&(d&&(d.locals=c,e.copy(d.params,b)),a.$broadcast("$routeChangeSuccess",d,m))},function(c){d==r.current&&a.$broadcast("$routeChangeError",d,m,c)})}function t(){var a,b;e.forEach(k,function(f,k){var p;if(p=!b){var s=c.path();p=f.keys;var l={};if(f.regexp)if(s=f.regexp.exec(s)){for(var g=1,q=s.length;g<q;++g){var n=p[g-1],r="string"==typeof s[g]?decodeURIComponent(s[g]):s[g];
n&&r&&(l[n.name]=r)}p=l}else p=null;else p=null;p=a=p}p&&(b=h(f,{params:e.extend({},c.search(),a),pathParams:a}),b.$$route=f)});return b||k[null]&&h(k[null],{params:{},pathParams:{}})}function u(a,c){var b=[];e.forEach((a||"").split(":"),function(a,d){if(0===d)b.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];b.push(c[f]);b.push(e[2]||"");delete c[f]}});return b.join("")}var x=!1,r={routes:k,reload:function(){x=!0;a.$evalAsync(g)}};a.$on("$locationChangeSuccess",g);return r}]});h.provider("$routeParams",
function(){this.$get=function(){return{}}});h.directive("ngView",u);h.directive("ngView",z);u.$inject=["$route","$anchorScroll","$animate"];z.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libs/angular/angular-route.min.js","/libs/angular")
},{"buffer":24,"oMfpAn":27}],18:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
 AngularJS v1.2.12
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(y,v,z){'use strict';function t(g,a,b){q.directive(g,["$parse","$swipe",function(l,n){var r=75,h=0.3,d=30;return function(p,m,k){function e(e){if(!u)return!1;var c=Math.abs(e.y-u.y);e=(e.x-u.x)*a;return f&&c<r&&0<e&&e>d&&c/e<h}var c=l(k[g]),u,f;n.bind(m,{start:function(e,c){u=e;f=!0},cancel:function(e){f=!1},end:function(a,f){e(a)&&p.$apply(function(){m.triggerHandler(b);c(p,{$event:f})})}})}}])}var q=v.module("ngTouch",[]);q.factory("$swipe",[function(){function g(a){var b=a.touches&&a.touches.length?
a.touches:[a];a=a.changedTouches&&a.changedTouches[0]||a.originalEvent&&a.originalEvent.changedTouches&&a.originalEvent.changedTouches[0]||b[0].originalEvent||b[0];return{x:a.clientX,y:a.clientY}}return{bind:function(a,b){var l,n,r,h,d=!1;a.on("touchstart mousedown",function(a){r=g(a);d=!0;n=l=0;h=r;b.start&&b.start(r,a)});a.on("touchcancel",function(a){d=!1;b.cancel&&b.cancel(a)});a.on("touchmove mousemove",function(a){if(d&&r){var m=g(a);l+=Math.abs(m.x-h.x);n+=Math.abs(m.y-h.y);h=m;10>l&&10>n||
(n>l?(d=!1,b.cancel&&b.cancel(a)):(a.preventDefault(),b.move&&b.move(m,a)))}});a.on("touchend mouseup",function(a){d&&(d=!1,b.end&&b.end(g(a),a))})}}}]);q.config(["$provide",function(g){g.decorator("ngClickDirective",["$delegate",function(a){a.shift();return a}])}]);q.directive("ngClick",["$parse","$timeout","$rootElement",function(g,a,b){function l(a,c,b){for(var f=0;f<a.length;f+=2)if(Math.abs(a[f]-c)<d&&Math.abs(a[f+1]-b)<d)return a.splice(f,f+2),!0;return!1}function n(a){if(!(Date.now()-m>h)){var c=
a.touches&&a.touches.length?a.touches:[a],b=c[0].clientX,c=c[0].clientY;1>b&&1>c||l(k,b,c)||(a.stopPropagation(),a.preventDefault(),a.target&&a.target.blur())}}function r(b){b=b.touches&&b.touches.length?b.touches:[b];var c=b[0].clientX,d=b[0].clientY;k.push(c,d);a(function(){for(var a=0;a<k.length;a+=2)if(k[a]==c&&k[a+1]==d){k.splice(a,a+2);break}},h,!1)}var h=2500,d=25,p="ng-click-active",m,k;return function(a,c,d){function f(){q=!1;c.removeClass(p)}var h=g(d.ngClick),q=!1,s,t,w,x;c.on("touchstart",
function(a){q=!0;s=a.target?a.target:a.srcElement;3==s.nodeType&&(s=s.parentNode);c.addClass(p);t=Date.now();a=a.touches&&a.touches.length?a.touches:[a];a=a[0].originalEvent||a[0];w=a.clientX;x=a.clientY});c.on("touchmove",function(a){f()});c.on("touchcancel",function(a){f()});c.on("touchend",function(a){var h=Date.now()-t,e=a.changedTouches&&a.changedTouches.length?a.changedTouches:a.touches&&a.touches.length?a.touches:[a],g=e[0].originalEvent||e[0],e=g.clientX,g=g.clientY,p=Math.sqrt(Math.pow(e-
w,2)+Math.pow(g-x,2));q&&(750>h&&12>p)&&(k||(b[0].addEventListener("click",n,!0),b[0].addEventListener("touchstart",r,!0),k=[]),m=Date.now(),l(k,e,g),s&&s.blur(),v.isDefined(d.disabled)&&!1!==d.disabled||c.triggerHandler("click",[a]));f()});c.onclick=function(a){};c.on("click",function(b,c){a.$apply(function(){h(a,{$event:c||b})})});c.on("mousedown",function(a){c.addClass(p)});c.on("mousemove mouseup",function(a){c.removeClass(p)})}}]);t("ngSwipeLeft",-1,"swipeleft");t("ngSwipeRight",1,"swiperight")})(window,
window.angular);
//# sourceMappingURL=angular-touch.min.js.map

}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libs/angular/angular-touch.min.js","/libs/angular")
},{"buffer":24,"oMfpAn":27}],19:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
 AngularJS v1.2.12
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(P,R,s){'use strict';function t(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.12/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function qb(b){if(null==b||za(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:w(b)||L(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(M(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else if(qb(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Nb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Oc(b,
a,c){for(var d=Nb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Ob(b){return function(a,c){b(c,a)}}function Za(){for(var b=ia.length,a;b;){b--;a=ia[b].charCodeAt(0);if(57==a)return ia[b]="A",ia.join("");if(90==a)ia[b]="0";else return ia[b]=String.fromCharCode(a+1),ia.join("")}ia.unshift("0");return ia.join("")}function Pb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function y(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});Pb(b,a);return b}function V(b){return parseInt(b,
10)}function Qb(b,a){return y(new (y(function(){},{prototype:b})),a)}function E(){}function Aa(b){return b}function Y(b){return function(){return b}}function u(b){return"undefined"===typeof b}function D(b){return"undefined"!==typeof b}function W(b){return null!=b&&"object"===typeof b}function w(b){return"string"===typeof b}function rb(b){return"number"===typeof b}function Ka(b){return"[object Date]"===La.call(b)}function L(b){return"[object Array]"===La.call(b)}function M(b){return"function"===typeof b}
function $a(b){return"[object RegExp]"===La.call(b)}function za(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Pc(b){return!(!b||!(b.nodeName||b.on&&b.find))}function Qc(b,a,c){var d=[];q(b,function(b,g,f){d.push(a.call(c,b,g,f))});return d}function ab(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ma(b,a){var c=ab(b,a);0<=c&&b.splice(c,1);return a}function $(b,a){if(za(b)||b&&b.$evalAsync&&b.$watch)throw Na("cpws");if(a){if(b===
a)throw Na("cpi");if(L(b))for(var c=a.length=0;c<b.length;c++)a.push($(b[c]));else{c=a.$$hashKey;q(a,function(b,c){delete a[c]});for(var d in b)a[d]=$(b[d]);Pb(a,c)}}else(a=b)&&(L(b)?a=$(b,[]):Ka(b)?a=new Date(b.getTime()):$a(b)?a=RegExp(b.source):W(b)&&(a=$(b,{})));return a}function Rb(b,a){a=a||{};for(var c in b)!b.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a}function ta(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,
d;if(c==typeof a&&"object"==c)if(L(b)){if(!L(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ta(b[d],a[d]))return!1;return!0}}else{if(Ka(b))return Ka(a)&&b.getTime()==a.getTime();if($a(b)&&$a(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||za(b)||za(a)||L(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!M(b[d])){if(!ta(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!M(a[d]))return!1;return!0}return!1}
function Sb(){return R.securityPolicy&&R.securityPolicy.isActive||R.querySelector&&!(!R.querySelector("[ng-csp]")&&!R.querySelector("[data-ng-csp]"))}function bb(b,a){var c=2<arguments.length?ua.call(arguments,2):[];return!M(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(ua.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Rc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=s:za(a)?c="$WINDOW":
a&&R===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function pa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,Rc,a?"  ":null)}function Tb(b){return w(b)?JSON.parse(b):b}function Oa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=x(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function fa(b){b=z(b).clone();try{b.empty()}catch(a){}var c=z("<div>").append(b).html();try{return 3===b[0].nodeType?x(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
function(a,b){return"<"+x(b)})}catch(d){return x(c)}}function Ub(b){try{return decodeURIComponent(b)}catch(a){}}function Vb(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=Ub(c[0]),D(d)&&(b=D(c[1])?Ub(c[1]):!0,a[d]?L(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Wb(b){var a=[];q(b,function(b,d){L(b)?q(b,function(b){a.push(va(d,!0)+(!0===b?"":"="+va(b,!0)))}):a.push(va(d,!0)+(!0===b?"":"="+va(b,!0)))});return a.length?a.join("&"):""}function sb(b){return va(b,
!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function va(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Sc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,f=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(f,function(a){f[a]=!0;c(R.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+
a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,g=(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&f[b.name]&&(e=a,g=b.value)})}});e&&a(e,g?[g]:[])}function Xb(b,a){var c=function(){b=z(b);if(b.injector()){var c=b[0]===R?"document":fa(b);throw Na("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=Yb(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",
function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(P&&!d.test(P.name))return c();P.name=P.name.replace(d,"");Ba.resumeBootstrap=function(b){q(b,function(b){a.push(b)});c()}}function cb(b,a){a=a||"_";return b.replace(Tc,function(b,d){return(d?a:"")+b.toLowerCase()})}function tb(b,a,c){if(!b)throw Na("areq",a||"?",c||"required");return b}function Pa(b,a,c){c&&L(b)&&(b=b[b.length-1]);tb(M(b),a,"not a function, got "+(b&&"object"==typeof b?
b.constructor.name||"Object":typeof b));return b}function wa(b,a){if("hasOwnProperty"===b)throw Na("badname",a);}function Zb(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,g=a.length,f=0;f<g;f++)d=a[f],b&&(b=(e=b)[d]);return!c&&M(b)?bb(e,b):b}function ub(b){var a=b[0];b=b[b.length-1];if(a===b)return z(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return z(c)}function Uc(b){var a=t("$injector"),c=t("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||t;return b.module||
(b.module=function(){var b={};return function(e,g,f){if("hasOwnProperty"===e)throw c("badname","module");g&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!g)throw a("nomod",e);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide",
"constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};f&&l(f);return n}())}}())}function Qa(b){return b.replace(Vc,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Wc,"Moz$1")}function vb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],m=a,k,l,n,p,r,F;if(!d||null!=b)for(;e.length;)for(k=e.shift(),
l=0,n=k.length;l<n;l++)for(p=z(k[l]),m?p.triggerHandler("$destroy"):m=!m,r=0,p=(F=p.children()).length;r<p;r++)e.push(Ca(F[r]));return g.apply(this,arguments)}var g=Ca.fn[b],g=g.$original||g;e.$original=g;Ca.fn[b]=e}function O(b){if(b instanceof O)return b;w(b)&&(b=Z(b));if(!(this instanceof O)){if(w(b)&&"<"!=b.charAt(0))throw wb("nosel");return new O(b)}if(w(b)){var a=R.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);xb(this,a.childNodes);z(R.createDocumentFragment()).append(this)}else xb(this,
b)}function yb(b){return b.cloneNode(!0)}function Da(b){$b(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Da(b[a])}function ac(b,a,c,d){if(D(d))throw wb("offargs");var e=ja(b,"events");ja(b,"handle")&&(u(a)?q(e,function(a,c){zb(b,c,a);delete e[c]}):q(a.split(" "),function(a){u(c)?(zb(b,a,e[a]),delete e[a]):Ma(e[a]||[],c)}))}function $b(b,a){var c=b[db],d=Ra[c];d&&(a?delete Ra[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),ac(b)),delete Ra[c],b[db]=s))}function ja(b,a,c){var d=
b[db],d=Ra[d||-1];if(D(c))d||(b[db]=d=++Xc,d=Ra[d]={}),d[a]=c;else return d&&d[a]}function bc(b,a,c){var d=ja(b,"data"),e=D(c),g=!e&&D(a),f=g&&!W(a);d||f||ja(b,"data",d={});if(e)d[a]=c;else if(g){if(f)return d&&d[a];y(d,a)}else return d}function Ab(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Bb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",Z((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+Z(a)+" "," ")))})}function Cb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=Z(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",Z(c))}}function xb(b,a){if(a){a=a.nodeName||!D(a.length)||za(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function cc(b,a){return eb(b,"$"+(a||"ngController")+"Controller")}function eb(b,a,c){b=z(b);9==b[0].nodeType&&(b=b.find("html"));for(a=L(a)?a:[a];b.length;){for(var d=
0,e=a.length;d<e;d++)if((c=b.data(a[d]))!==s)return c;b=b.parent()}}function dc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Da(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function ec(b,a){var c=fb[a.toLowerCase()];return c&&fc[b.nodeName]&&c}function Yc(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||R);if(u(c.defaultPrevented)){var g=c.preventDefault;
c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var f=Rb(a[e||c.type]||[]);q(f,function(a){a.call(b,c)});8>=N?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ea(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===
s&&(c=b.$$hashKey=Za()):c=b;return a+":"+c}function Sa(b){q(b,this.put,this)}function gc(b){var a,c;"function"==typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(Zc,""),c=c.match($c),q(c[1].split(ad),function(b){b.replace(bd,function(b,c,d){a.push(d)})})),b.$inject=a):L(b)?(c=b.length-1,Pa(b[c],"fn"),a=b.slice(0,c)):Pa(b,"fn",!0);return a}function Yb(b){function a(a){return function(b,c){if(W(b))q(b,Ob(a));else return a(b,c)}}function c(a,b){wa(a,"service");if(M(b)||L(b))b=n.instantiate(b);
if(!b.$get)throw Ta("pget",a);return l[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,g,h;q(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(w(a))for(c=Ua(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,g=0,h=d.length;g<h;g++){var f=d[g],m=n.get(f[0]);m[f[1]].apply(m,f[2])}else M(a)?b.push(n.invoke(a)):L(a)?b.push(n.invoke(a)):Pa(a,"module")}catch(r){throw L(a)&&(a=a[a.length-1]),r.message&&(r.stack&&-1==r.stack.indexOf(r.message))&&(r=r.message+"\n"+r.stack),
Ta("modulerr",a,r.stack||r.message||r);}}});return b}function g(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===f)throw Ta("cdep",m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=f,a[d]=b(d)}catch(e){throw a[d]===f&&delete a[d],e;}finally{m.shift()}}function d(a,b,e){var g=[],h=gc(a),f,m,k;m=0;for(f=h.length;m<f;m++){k=h[m];if("string"!==typeof k)throw Ta("itkn",k);g.push(e&&e.hasOwnProperty(k)?e[k]:c(k))}a.$inject||(a=a[f]);return a.apply(b,g)}return{invoke:d,instantiate:function(a,
b){var c=function(){},e;c.prototype=(L(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return W(e)||M(e)?e:c},get:c,annotate:gc,has:function(b){return l.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}var f={},h="Provider",m=[],k=new Sa,l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,Y(b))}),constant:a(function(a,b){wa(a,"constant");l[a]=b;p[a]=b}),decorator:function(a,b){var c=n.get(a+h),
d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},n=l.$injector=g(l,function(){throw Ta("unpr",m.join(" <- "));}),p={},r=p.$injector=g(p,function(a){a=n.get(a+h);return r.invoke(a.$get,a)});q(e(b),function(a){r.invoke(a||E)});return r}function cd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==x(a.nodeName)||(b=a)});return b}function g(){var b=
c.hash(),d;b?(d=f.getElementById(b))?d.scrollIntoView():(d=e(f.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var f=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(g)});return g}]}function dd(b,a,c,d){function e(a){try{a.apply(null,ua.call(arguments,1))}finally{if(F--,0===F)for(;A.length;)try{A.pop()()}catch(b){c.error(b)}}}function g(a,b){(function S(){q(H,function(a){a()});v=b(S,a)})()}function f(){C=null;Q!=h.url()&&(Q=h.url(),q(ka,
function(a){a(h.url())}))}var h=this,m=a[0],k=b.location,l=b.history,n=b.setTimeout,p=b.clearTimeout,r={};h.isMock=!1;var F=0,A=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){F++};h.notifyWhenNoOutstandingRequests=function(a){q(H,function(a){a()});0===F?a():A.push(a)};var H=[],v;h.addPollFn=function(a){u(v)&&g(100,n);H.push(a);return a};var Q=k.href,K=a.find("base"),C=null;h.url=function(a,c){k!==b.location&&(k=b.location);l!==b.history&&(l=b.history);if(a){if(Q!=a)return Q=
a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),K.attr("href",K.attr("href"))):(C=a,c?k.replace(a):k.href=a),h}else return C||k.href.replace(/%27/g,"'")};var ka=[],I=!1;h.onUrlChange=function(a){if(!I){if(d.history)z(b).on("popstate",f);if(d.hashchange)z(b).on("hashchange",f);else h.addPollFn(f);I=!0}ka.push(a);return a};h.baseHref=function(){var a=K.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var U={},ba="",aa=h.baseHref();h.cookies=function(a,b){var d,e,g,h;
if(a)b===s?m.cookie=escape(a)+"=;path="+aa+";expires=Thu, 01 Jan 1970 00:00:00 GMT":w(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+aa).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==ba)for(ba=m.cookie,d=ba.split("; "),U={},g=0;g<d.length;g++)e=d[g],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),U[a]===s&&(U[a]=unescape(e.substring(h+1))));return U}};h.defer=function(a,b){var c;F++;c=n(function(){delete r[c];
e(a)},b||0);r[c]=!0;return c};h.defer.cancel=function(a){return r[a]?(delete r[a],p(a),e(E),!0):!1}}function ed(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new dd(b,d,a,c)}]}function fd(){this.$get=function(){function b(b,d){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,g(a.n,a.p),g(a,n),n=a,n.n=null)}function g(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw t("$cacheFactory")("iid",b);var f=0,h=y({},d,{id:b}),m={},k=d&&d.capacity||Number.MAX_VALUE,l={},n=null,p=null;
return a[b]={put:function(a,b){var c=l[a]||(l[a]={key:a});e(c);if(!u(b))return a in m||f++,m[a]=b,f>k&&this.remove(p.key),b},get:function(a){var b=l[a];if(b)return e(b),m[a]},remove:function(a){var b=l[a];b&&(b==n&&(n=b.p),b==p&&(p=b.n),g(b.n,b.p),delete l[a],delete m[a],f--)},removeAll:function(){m={};f=0;l={};n=p=null},destroy:function(){l=h=m=null;delete a[b]},info:function(){return y({},h,{size:f})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};
return b}}function gd(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function ic(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,g=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,f=/^(on[a-z]+|formaction)$/;this.directive=function m(a,e){wa(a,"directive");w(a)?(tb(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,g){try{var f=b.invoke(c);M(f)?f={compile:Y(f)}:!f.compile&&f.link&&(f.compile=
Y(f.link));f.priority=f.priority||0;f.index=g;f.name=f.name||a;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(m){d(m)}});return e}])),c[a].push(e)):q(a,Ob(m));return this};this.aHrefSanitizationWhitelist=function(b){return D(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return D(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate",
"$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,n,p,r,F,A,H,v,Q,K){function C(a,b,c,d,e){a instanceof z||(a=z(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=z(b).wrap("<span></span>").parent()[0])});var g=I(a,b,a,c,d,e);ka(a,"ng-scope");return function(b,c,d){tb(b,"scope");var e=c?Fa.clone.call(a):a;q(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var f=e.length;d<f;d++){var m=
e[d].nodeType;1!==m&&9!==m||e.eq(d).data("$scope",b)}c&&c(e,b);g&&g(b,e,e);return e}}function ka(a,b){try{a.addClass(b)}catch(c){}}function I(a,b,c,d,e,g){function f(a,c,d,e){var g,k,r,l,n,p,J;g=c.length;var F=Array(g);for(n=0;n<g;n++)F[n]=c[n];J=n=0;for(p=m.length;n<p;J++)k=F[J],c=m[n++],g=m[n++],r=z(k),c?(c.scope?(l=a.$new(),r.data("$scope",l)):l=a,(r=c.transclude)||!e&&b?c(g,l,k,d,U(a,r||b)):c(g,l,k,d,e)):g&&g(a,k.childNodes,s,e)}for(var m=[],k,r,l,n,p=0;p<a.length;p++)k=new Db,r=ba(a[p],[],k,
0===p?d:s,e),(g=r.length?ga(r,a[p],k,b,c,null,[],[],g):null)&&g.scope&&ka(z(a[p]),"ng-scope"),k=g&&g.terminal||!(l=a[p].childNodes)||!l.length?null:I(l,g?g.transclude:b),m.push(g,k),n=n||g||k,g=null;return n?f:null}function U(a,b){return function(c,d,e){var g=!1;c||(c=a.$new(),g=c.$$transcluded=!0);d=b(c,d,e);if(g)d.on("$destroy",bb(c,c.$destroy));return d}}function ba(a,b,c,d,f){var m=c.$attr,k;switch(a.nodeType){case 1:S(b,la(Ga(a).toLowerCase()),"E",d,f);var r,l,n;k=a.attributes;for(var p=0,F=
k&&k.length;p<F;p++){var A=!1,Q=!1;r=k[p];if(!N||8<=N||r.specified){l=r.name;n=la(l);T.test(n)&&(l=cb(n.substr(6),"-"));var C=n.replace(/(Start|End)$/,"");n===C+"Start"&&(A=l,Q=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));n=la(l.toLowerCase());m[n]=l;c[n]=r=Z(r.value);ec(a,n)&&(c[n]=!0);O(a,b,r,n);S(b,n,"A",d,f,A,Q)}}a=a.className;if(w(a)&&""!==a)for(;k=g.exec(a);)n=la(k[2]),S(b,n,"C",d,f)&&(c[n]=Z(k[3])),a=a.substr(k.index+k[0].length);break;case 3:t(b,a.nodeValue);break;case 8:try{if(k=
e.exec(a.nodeValue))n=la(k[1]),S(b,n,"M",d,f)&&(c[n]=Z(k[2]))}catch(H){}}b.sort(u);return b}function aa(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ha("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return z(d)}function B(a,b,c){return function(d,e,g,f,k){e=aa(e[0],b,c);return a(d,e,g,f,k)}}function ga(a,c,d,e,g,f,m,n,p){function A(a,b,c,d){if(a){c&&(a=B(a,c,d));a.require=G.require;if(K===
G||G.$$isolateScope)a=jc(a,{isolateScope:!0});m.push(a)}if(b){c&&(b=B(b,c,d));b.require=G.require;if(K===G||G.$$isolateScope)b=jc(b,{isolateScope:!0});n.push(b)}}function Q(a,b,c){var d,e="data",g=!1;if(w(a)){for(;"^"==(d=a.charAt(0))||"?"==d;)a=a.substr(1),"^"==d&&(e="inheritedData"),g=g||"?"==d;d=null;c&&"data"===e&&(d=c[a]);d=d||b[e]("$"+a+"Controller");if(!d&&!g)throw ha("ctreq",a,ca);}else L(a)&&(d=[],q(a,function(a){d.push(Q(a,b,c))}));return d}function H(a,e,g,f,p){function A(a,b){var c;2>
arguments.length&&(b=a,a=s);u&&(c=aa);return p(a,b,c)}var J,C,v,I,ba,B,aa={},gb;J=c===g?d:Rb(d,new Db(z(g),d.$attr));C=J.$$element;if(K){var t=/^\s*([@=&])(\??)\s*(\w*)\s*$/;f=z(g);B=e.$new(!0);ga&&ga===K.$$originalDirective?f.data("$isolateScope",B):f.data("$isolateScopeNoTemplate",B);ka(f,"ng-isolate-scope");q(K.scope,function(a,c){var d=a.match(t)||[],g=d[3]||c,f="?"==d[2],d=d[1],m,l,n,p;B.$$isolateBindings[c]=d+g;switch(d){case "@":J.$observe(g,function(a){B[c]=a});J.$$observers[g].$$scope=e;
J[g]&&(B[c]=b(J[g])(e));break;case "=":if(f&&!J[g])break;l=r(J[g]);p=l.literal?ta:function(a,b){return a===b};n=l.assign||function(){m=B[c]=l(e);throw ha("nonassign",J[g],K.name);};m=B[c]=l(e);B.$watch(function(){var a=l(e);p(a,B[c])||(p(a,m)?n(e,a=B[c]):B[c]=a);return m=a},null,l.literal);break;case "&":l=r(J[g]);B[c]=function(a){return l(e,a)};break;default:throw ha("iscp",K.name,c,a);}})}gb=p&&A;U&&q(U,function(a){var b={$scope:a===K||a.$$isolateScope?B:e,$element:C,$attrs:J,$transclude:gb},c;
ba=a.controller;"@"==ba&&(ba=J[a.name]);c=F(ba,b);aa[a.name]=c;u||C.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});f=0;for(v=m.length;f<v;f++)try{I=m[f],I(I.isolateScope?B:e,C,J,I.require&&Q(I.require,C,aa),gb)}catch(S){l(S,fa(C))}f=e;K&&(K.template||null===K.templateUrl)&&(f=B);a&&a(f,g.childNodes,s,p);for(f=n.length-1;0<=f;f--)try{I=n[f],I(I.isolateScope?B:e,C,J,I.require&&Q(I.require,C,aa),gb)}catch(G){l(G,fa(C))}}p=p||{};var v=-Number.MAX_VALUE,I,U=p.controllerDirectives,
K=p.newIsolateScopeDirective,ga=p.templateDirective;p=p.nonTlbTranscludeDirective;for(var S=!1,u=!1,y=d.$$element=z(c),G,ca,t,P=e,O,N=0,ma=a.length;N<ma;N++){G=a[N];var Va=G.$$start,T=G.$$end;Va&&(y=aa(c,Va,T));t=s;if(v>G.priority)break;if(t=G.scope)I=I||G,G.templateUrl||(x("new/isolated scope",K,G,y),W(t)&&(K=G));ca=G.name;!G.templateUrl&&G.controller&&(t=G.controller,U=U||{},x("'"+ca+"' controller",U[ca],G,y),U[ca]=G);if(t=G.transclude)S=!0,G.$$tlb||(x("transclusion",p,G,y),p=G),"element"==t?(u=
!0,v=G.priority,t=aa(c,Va,T),y=d.$$element=z(R.createComment(" "+ca+": "+d[ca]+" ")),c=y[0],hb(g,z(ua.call(t,0)),c),P=C(t,e,v,f&&f.name,{nonTlbTranscludeDirective:p})):(t=z(yb(c)).contents(),y.empty(),P=C(t,e));if(G.template)if(x("template",ga,G,y),ga=G,t=M(G.template)?G.template(y,d):G.template,t=V(t),G.replace){f=G;t=z("<div>"+Z(t)+"</div>").contents();c=t[0];if(1!=t.length||1!==c.nodeType)throw ha("tplrt",ca,"");hb(g,y,c);ma={$attr:{}};t=ba(c,[],ma);var X=a.splice(N+1,a.length-(N+1));K&&hc(t);
a=a.concat(t).concat(X);D(d,ma);ma=a.length}else y.html(t);if(G.templateUrl)x("template",ga,G,y),ga=G,G.replace&&(f=G),H=E(a.splice(N,a.length-N),y,d,g,P,m,n,{controllerDirectives:U,newIsolateScopeDirective:K,templateDirective:ga,nonTlbTranscludeDirective:p}),ma=a.length;else if(G.compile)try{O=G.compile(y,d,P),M(O)?A(null,O,Va,T):O&&A(O.pre,O.post,Va,T)}catch(Y){l(Y,fa(y))}G.terminal&&(H.terminal=!0,v=Math.max(v,G.priority))}H.scope=I&&!0===I.scope;H.transclude=S&&P;return H}function hc(a){for(var b=
0,c=a.length;b<c;b++)a[b]=Qb(a[b],{$$isolateScope:!0})}function S(b,e,g,f,k,r,n){if(e===k)return null;k=null;if(c.hasOwnProperty(e)){var p;e=a.get(e+d);for(var F=0,A=e.length;F<A;F++)try{p=e[F],(f===s||f>p.priority)&&-1!=p.restrict.indexOf(g)&&(r&&(p=Qb(p,{$$start:r,$$end:n})),b.push(p),k=p)}catch(Q){l(Q)}}return k}function D(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,g){"class"==g?(ka(e,
b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==g?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==g.charAt(0)||a.hasOwnProperty(g)||(a[g]=b,d[g]=c[g])})}function E(a,b,c,d,e,g,f,k){var m=[],r,l,F=b[0],A=a.shift(),Q=y({},A,{templateUrl:null,transclude:null,replace:null,$$originalDirective:A}),C=M(A.templateUrl)?A.templateUrl(b,c):A.templateUrl;b.empty();n.get(v.getTrustedResourceUrl(C),{cache:p}).success(function(n){var p,H;n=V(n);if(A.replace){n=z("<div>"+
Z(n)+"</div>").contents();p=n[0];if(1!=n.length||1!==p.nodeType)throw ha("tplrt",A.name,C);n={$attr:{}};hb(d,b,p);var v=ba(p,[],n);W(A.scope)&&hc(v);a=v.concat(a);D(c,n)}else p=F,b.html(n);a.unshift(Q);r=ga(a,p,c,e,b,A,g,f,k);q(d,function(a,c){a==p&&(d[c]=b[0])});for(l=I(b[0].childNodes,e);m.length;){n=m.shift();H=m.shift();var K=m.shift(),B=m.shift(),v=b[0];if(H!==F){var aa=H.className,v=yb(p);hb(K,z(H),v);ka(z(v),aa)}H=r.transclude?U(n,r.transclude):B;r(l,n,v,d,H)}m=null}).error(function(a,b,c,
d){throw ha("tpload",d.url);});return function(a,b,c,d,e){m?(m.push(b),m.push(c),m.push(d),m.push(e)):r(l,b,c,d,e)}}function u(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function x(a,b,c,d){if(b)throw ha("multidir",b.name,c.name,a,fa(d));}function t(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:Y(function(a,b){var c=b.parent(),e=c.data("$binding")||[];e.push(d);ka(c.data("$binding",e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}
function P(a,b){if("srcdoc"==b)return v.HTML;var c=Ga(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return v.RESOURCE_URL}function O(a,c,d,e){var g=b(d,!0);if(g){if("multiple"===e&&"SELECT"===Ga(a))throw ha("selmulti",fa(a));c.push({priority:100,compile:function(){return{pre:function(c,d,m){d=m.$$observers||(m.$$observers={});if(f.test(e))throw ha("nodomevents");if(g=b(m[e],!0,P(a,e)))m[e]=g(c),(d[e]||(d[e]=[])).$$inter=!0,(m.$$observers&&m.$$observers[e].$$scope||
c).$watch(g,function(a,b){"class"===e&&a!=b?m.$updateClass(a,b):m.$set(e,a)})}}}})}}function hb(a,b,c){var d=b[0],e=b.length,g=d.parentNode,f,m;if(a)for(f=0,m=a.length;f<m;f++)if(a[f]==d){a[f++]=c;m=f+e-1;for(var k=a.length;f<k;f++,m++)m<k?a[f]=a[m]:delete a[f];a.length-=e-1;break}g&&g.replaceChild(c,d);a=R.createDocumentFragment();a.appendChild(d);c[z.expando]=d[z.expando];d=1;for(e=b.length;d<e;d++)g=b[d],z(g).remove(),a.appendChild(g),delete b[d];b[0]=c;b.length=1}function jc(a,b){return y(function(){return a.apply(null,
arguments)},a,b)}var Db=function(a,b){this.$$element=a;this.$attr=b||{}};Db.prototype={$normalize:la,$addClass:function(a){a&&0<a.length&&Q.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&Q.removeClass(this.$$element,a)},$updateClass:function(a,b){this.$removeClass(kc(b,a));this.$addClass(kc(a,b))},$set:function(a,b,c,d){var e=ec(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=cb(a,"-"));e=Ga(this.$$element);
if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=K(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);A.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var ca=b.startSymbol(),ma=b.endSymbol(),V="{{"==ca||"}}"==ma?Aa:function(a){return a.replace(/\{\{/g,ca).replace(/}}/g,ma)},T=/^ngAttr[A-Z]/;
return C}]}function la(b){return Qa(b.replace(hd,""))}function kc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),g=0;a:for(;g<d.length;g++){for(var f=d[g],h=0;h<e.length;h++)if(f==e[h])continue a;c+=(0<c.length?" ":"")+f}return c}function id(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){wa(a,"controller");W(a)?y(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,g){var f,h,m;w(e)&&(f=e.match(a),h=f[1],m=f[3],e=b.hasOwnProperty(h)?b[h]:Zb(g.$scope,h,
!0)||Zb(d,h,!0),Pa(e,h,!0));f=c.instantiate(e,g);if(m){if(!g||"object"!=typeof g.$scope)throw t("$controller")("noscp",h||e.name,m);g.$scope[m]=f}return f}}]}function jd(){this.$get=["$window",function(b){return z(b.document)}]}function kd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function lc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=x(Z(b.substr(0,e)));d=Z(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function mc(b){var a=
W(b)?b:s;return function(c){a||(a=lc(b));return c?a[x(c)]||null:a}}function nc(b,a,c){if(M(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function ld(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){w(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=Tb(d)));return d}],transformRequest:[function(a){return W(a)&&"[object File]"!==La.call(a)?pa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:$(d),put:$(d),patch:$(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},g=this.interceptors=[],f=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,p){function r(a){function c(a){var b=y({},a,{data:nc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?b:n.reject(b)}var d={transformRequest:e.transformRequest,transformResponse:e.transformResponse},g=function(a){function b(a){var c;
q(a,function(b,d){M(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=y({},a.headers),g,f,c=y({},c.common,c[x(a.method)]);b(c);b(d);a:for(g in c){a=x(g);for(f in d)if(x(f)===a)continue a;d[g]=c[g]}return d}(a);y(d,a);d.headers=g;d.method=Ha(d.method);(a=Eb(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:s)&&(g[d.xsrfHeaderName||e.xsrfHeaderName]=a);var f=[function(a){g=a.headers;var b=nc(a.data,mc(g),a.transformRequest);u(a.data)&&q(g,function(a,b){"content-type"===x(b)&&delete g[b]});
u(a.withCredentials)&&!u(e.withCredentials)&&(a.withCredentials=e.withCredentials);return F(a,b,g).then(c,c)},s],k=n.when(d);for(q(v,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var h=f.shift(),k=k.then(a,h)}k.success=function(a){k.then(function(b){a(b.data,b.status,b.headers,d)});return k};k.error=function(a){k.then(null,function(b){a(b.data,b.status,b.headers,d)});return k};
return k}function F(b,c,g){function f(a,b,c){v&&(200<=a&&300>a?v.put(s,[a,b,lc(c)]):v.remove(s));m(b,a,c);d.$$phase||d.$apply()}function m(a,c,d){c=Math.max(c,0);(200<=c&&300>c?p.resolve:p.reject)({data:a,status:c,headers:mc(d),config:b})}function k(){var a=ab(r.pendingRequests,b);-1!==a&&r.pendingRequests.splice(a,1)}var p=n.defer(),F=p.promise,v,q,s=A(b.url,b.params);r.pendingRequests.push(b);F.then(k,k);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(v=W(b.cache)?b.cache:W(e.cache)?e.cache:
H);if(v)if(q=v.get(s),D(q)){if(q.then)return q.then(k,k),q;L(q)?m(q[1],q[0],$(q[2])):m(q,200,{})}else v.put(s,F);u(q)&&a(b.method,s,c,f,g,b.timeout,b.withCredentials,b.responseType);return F}function A(a,b){if(!b)return a;var c=[];Oc(b,function(a,b){null===a||u(a)||(L(a)||(a=[a]),q(a,function(a){W(a)&&(a=pa(a));c.push(va(b)+"="+va(a))}))});return a+(-1==a.indexOf("?")?"?":"&")+c.join("&")}var H=c("$http"),v=[];q(g,function(a){v.unshift(w(a)?p.get(a):p.invoke(a))});q(f,function(a,b){var c=w(a)?p.get(a):
p.invoke(a);v.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});r.pendingRequests=[];(function(a){q(arguments,function(a){r[a]=function(b,c){return r(y(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){r[a]=function(b,c,d){return r(y(d||{},{method:a,url:b,data:c}))}})})("post","put");r.defaults=e;return r}]}function md(b){if(8>=N&&(!b.match(/^(get|post|head|put|delete|options)$/i)||!P.XMLHttpRequest))return new P.ActiveXObject("Microsoft.XMLHTTP");
if(P.XMLHttpRequest)return new P.XMLHttpRequest;throw t("$httpBackend")("noxhr");}function nd(){this.$get=["$browser","$window","$document",function(b,a,c){return od(b,md,b.defer,a.angular.callbacks,c[0])}]}function od(b,a,c,d,e){function g(a,b){var c=e.createElement("script"),d=function(){c.onreadystatechange=c.onload=c.onerror=null;e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;N&&8>=N?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=
function(){d()};e.body.appendChild(c);return d}var f=-1;return function(e,m,k,l,n,p,r,F){function A(){v=f;K&&K();C&&C.abort()}function H(a,d,e,g){I&&c.cancel(I);K=C=null;d=0===d?e?200:404:d;a(1223==d?204:d,e,g);b.$$completeOutstandingRequest(E)}var v;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==x(e)){var Q="_"+(d.counter++).toString(36);d[Q]=function(a){d[Q].data=a};var K=g(m.replace("JSON_CALLBACK","angular.callbacks."+Q),function(){d[Q].data?H(l,200,d[Q].data):H(l,v||-2);d[Q]=Ba.noop})}else{var C=
a(e);C.open(e,m,!0);q(n,function(a,b){D(a)&&C.setRequestHeader(b,a)});C.onreadystatechange=function(){if(C&&4==C.readyState){var a=null,b=null;v!==f&&(a=C.getAllResponseHeaders(),b="response"in C?C.response:C.responseText);H(l,v||C.status,b,a)}};r&&(C.withCredentials=!0);if(F)try{C.responseType=F}catch(s){if("json"!==F)throw s;}C.send(k||null)}if(0<p)var I=c(A,p);else p&&p.then&&p.then(A)}}function pd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?
(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function g(g,k,l){for(var n,p,r=0,F=[],A=g.length,H=!1,v=[];r<A;)-1!=(n=g.indexOf(b,r))&&-1!=(p=g.indexOf(a,n+f))?(r!=n&&F.push(g.substring(r,n)),F.push(r=c(H=g.substring(n+f,p))),r.exp=H,r=p+h,H=!0):(r!=A&&F.push(g.substring(r)),r=A);(A=F.length)||(F.push(""),A=1);if(l&&1<F.length)throw oc("noconcat",g);if(!k||H)return v.length=A,r=function(a){try{for(var b=0,c=A,f;b<c;b++)"function"==typeof(f=F[b])&&(f=f(a),f=l?e.getTrusted(l,
f):e.valueOf(f),null===f||u(f)?f="":"string"!=typeof f&&(f=pa(f))),v[b]=f;return v.join("")}catch(k){a=oc("interr",g,k.toString()),d(a)}},r.exp=g,r.parts=F,r}var f=b.length,h=a.length;g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function qd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,f,h,m){var k=a.setInterval,l=a.clearInterval,n=c.defer(),p=n.promise,r=0,F=D(m)&&!m;h=D(h)?h:0;p.then(null,null,d);p.$$intervalId=k(function(){n.notify(r++);
0<h&&r>=h&&(n.resolve(r),l(p.$$intervalId),delete e[p.$$intervalId]);F||b.$apply()},f);e[p.$$intervalId]=n;return p}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1};return d}]}function rd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,
maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",
longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function pc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=sb(b[a]);return b.join("/")}function qc(b,a,c){b=xa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=V(b.port)||sd[b.protocol]||null}function rc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=xa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):
b.pathname);a.$$search=Vb(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function na(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Wa(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Fb(b){return b.substr(0,Wa(b).lastIndexOf("/")+1)}function sc(b,a){this.$$html5=!0;a=a||"";var c=Fb(b);qc(b,this,b);this.$$parse=function(a){var e=na(c,a);if(!w(e))throw Gb("ipthprfx",a,c);rc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};
this.$$compose=function(){var a=Wb(this.$$search),b=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=pc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=na(b,d))!==s)return d=e,(e=na(a,e))!==s?c+(na("/",e)||e):b+d;if((e=na(c,d))!==s)return c+e;if(c==d+"/")return c}}function Hb(b,a){var c=Fb(b);qc(b,this,b);this.$$parse=function(d){var e=na(b,d)||na(c,d),e="#"==e.charAt(0)?na(a,e):this.$$html5?e:"";if(!w(e))throw Gb("ihshprfx",d,a);rc(e,this,b);
d=this.$$path;var g=/^\/?.*?:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));g.exec(e)||(d=(e=g.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Wb(this.$$search),e=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=pc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Wa(b)==Wa(a))return a}}function tc(b,a){this.$$html5=!0;Hb.apply(this,arguments);var c=Fb(b);this.$$rewrite=function(d){var e;if(b==Wa(d))return d;if(e=na(c,
d))return b+a+e;if(c===d+"/")return c}}function ib(b){return function(){return this[b]}}function uc(b,a){return function(c){if(u(c))return this[b];this[b]=a(c);this.$$compose();return this}}function td(){var b="",a=!1;this.hashPrefix=function(a){return D(a)?(b=a,this):b};this.html5Mode=function(b){return D(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,g){function f(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,m=d.baseHref(),k=d.url();
a?(m=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(m||"/"),e=e.history?sc:tc):(m=Wa(k),e=Hb);h=new e(m,"#"+b);h.$$parse(h.$$rewrite(k));g.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=z(a.target);"a"!==x(b[0].nodeName);)if(b[0]===g[0]||!(b=b.parent())[0])return;var e=b.prop("href");W(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=xa(e.animVal).href);var f=h.$$rewrite(e);e&&(!b.attr("target")&&f&&!a.isDefaultPrevented())&&(a.preventDefault(),f!=d.url()&&(h.$$parse(f),
c.$apply(),P.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):f(b)}),c.$$phase||c.$digest())});var l=0;c.$watch(function(){var a=d.url(),b=h.$$replace;l&&a==h.absUrl()||(l++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),
b),f(a))}));h.$$replace=!1;return l});return h}]}function ud(){var b=!0,a=this;this.debugEnabled=function(a){return D(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||E;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];q(arguments,function(b){a.push(d(b))});
return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function da(b,a){if("constructor"===b)throw ya("isecfld",a);return b}function Xa(b,a){if(b){if(b.constructor===b)throw ya("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw ya("isecwindow",a);if(b.children&&(b.nodeName||b.on&&b.find))throw ya("isecdom",a);}return b}function jb(b,
a,c,d,e){e=e||{};a=a.split(".");for(var g,f=0;1<a.length;f++){g=da(a.shift(),d);var h=b[g];h||(h={},b[g]=h);b=h;b.then&&e.unwrapPromises&&(qa(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===s&&(b.$$v={}),b=b.$$v)}g=da(a.shift(),d);return b[g]=c}function vc(b,a,c,d,e,g,f){da(b,g);da(a,g);da(c,g);da(d,g);da(e,g);return f.unwrapPromises?function(f,m){var k=m&&m.hasOwnProperty(b)?m:f,l;if(null==k)return k;(k=k[b])&&k.then&&(qa(g),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),
k=k.$$v);if(!a)return k;if(null==k)return s;(k=k[a])&&k.then&&(qa(g),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!c)return k;if(null==k)return s;(k=k[c])&&k.then&&(qa(g),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!d)return k;if(null==k)return s;(k=k[d])&&k.then&&(qa(g),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!e)return k;if(null==k)return s;(k=k[e])&&k.then&&(qa(g),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);
return k}:function(g,f){var k=f&&f.hasOwnProperty(b)?f:g;if(null==k)return k;k=k[b];if(!a)return k;if(null==k)return s;k=k[a];if(!c)return k;if(null==k)return s;k=k[c];if(!d)return k;if(null==k)return s;k=k[d];return e?null==k?s:k=k[e]:k}}function vd(b,a){da(b,a);return function(a,d){return null==a?s:(d&&d.hasOwnProperty(b)?d:a)[b]}}function wd(b,a,c){da(b,c);da(a,c);return function(c,e){if(null==c)return s;c=(e&&e.hasOwnProperty(b)?e:c)[b];return null==c?s:c[a]}}function wc(b,a,c){if(Ib.hasOwnProperty(b))return Ib[b];
var d=b.split("."),e=d.length,g;if(a.unwrapPromises||1!==e)if(a.unwrapPromises||2!==e)if(a.csp)g=6>e?vc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,g){var f=0,h;do h=vc(d[f++],d[f++],d[f++],d[f++],d[f++],c,a)(b,g),g=s,b=h;while(f<e);return h};else{var f="var p;\n";q(d,function(b,d){da(b,c);f+="if(s == null) return undefined;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':
"")});var f=f+"return s;",h=new Function("s","k","pw",f);h.toString=Y(f);g=a.unwrapPromises?function(a,b){return h(a,b,qa)}:h}else g=wd(d[0],d[1],c);else g=vd(d[0],c);"hasOwnProperty"!==b&&(Ib[b]=g);return g}function xd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return D(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return D(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer",
"$log",function(c,d,e){a.csp=d.csp;qa=function(b){a.logPromiseWarnings&&!xc.hasOwnProperty(b)&&(xc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Jb(a);e=(new Ya(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return E}}}]}function yd(){this.$get=["$rootScope","$exceptionHandler",
function(b,a){return zd(function(a){b.$evalAsync(a)},a)}]}function zd(b,a){function c(a){return a}function d(a){return f(a)}var e=function(){var f=[],k,l;return l={resolve:function(a){if(f){var c=f;f=s;k=g(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],k.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(h(a))},notify:function(a){if(f){var c=f;f.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,g,h){var l=e(),A=function(d){try{l.resolve((M(b)?
b:c)(d))}catch(e){l.reject(e),a(e)}},H=function(b){try{l.resolve((M(g)?g:d)(b))}catch(c){l.reject(c),a(c)}},v=function(b){try{l.notify((M(h)?h:c)(b))}catch(d){a(d)}};f?f.push([A,H,v]):k.then(A,H,v);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,g){var f=null;try{f=(a||c)()}catch(k){return b(k,!1)}return f&&M(f.then)?f.then(function(){return b(e,g)},function(a){return b(a,!1)}):
b(e,g)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},g=function(a){return a&&M(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},f=function(a){var b=e();b.reject(a);return b.promise},h=function(c){return{then:function(g,f){var h=e();b(function(){try{h.resolve((M(f)?f:d)(c))}catch(b){h.reject(b),a(b)}});return h.promise}}};return{defer:e,reject:f,when:function(h,k,l,n){var p=e(),r,F=function(b){try{return(M(k)?k:c)(b)}catch(d){return a(d),
f(d)}},A=function(b){try{return(M(l)?l:d)(b)}catch(c){return a(c),f(c)}},q=function(b){try{return(M(n)?n:c)(b)}catch(d){a(d)}};b(function(){g(h).then(function(a){r||(r=!0,p.resolve(g(a).then(F,A,q)))},function(a){r||(r=!0,p.resolve(A(a)))},function(a){r||p.notify(q(a))})});return p.promise},all:function(a){var b=e(),c=0,d=L(a)?[]:{};q(a,function(a,e){c++;g(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}
function Ad(){var b=10,a=t("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,g,f){function h(){this.$id=Za();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}
function m(b){if(p.$$phase)throw a("inprog",p.$$phase);p.$$phase=b}function k(a,b){var c=g(a);Pa(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(a=function(){},a.prototype=this,a=new a,a.$id=Za());a["this"]=a;a.$$listeners={};a.$$listenerCount={};a.$parent=
this;a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=k(a,"watch"),g=this.$$watchers,f={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;if(!M(b)){var h=k(b||E,"listener");f.fn=function(a,b,c){h(c)}}if("string"==typeof a&&e.constant){var m=f.fn;f.fn=function(a,b,c){m.call(this,a,b,c);Ma(g,f)}}g||(g=this.$$watchers=[]);g.unshift(f);
return function(){Ma(g,f);c=null}},$watchCollection:function(a,b){var c=this,d,e,f=0,h=g(a),k=[],m={},l=0;return this.$watch(function(){e=h(c);var a,b;if(W(e))if(qb(e))for(d!==k&&(d=k,l=d.length=0,f++),a=e.length,l!==a&&(f++,d.length=l=a),b=0;b<a;b++)d[b]!==e[b]&&(f++,d[b]=e[b]);else{d!==m&&(d=m={},l=0,f++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,d.hasOwnProperty(b)?d[b]!==e[b]&&(f++,d[b]=e[b]):(l++,d[b]=e[b],f++));if(l>a)for(b in f++,d)d.hasOwnProperty(b)&&!e.hasOwnProperty(b)&&(l--,delete d[b])}else d!==
e&&(d=e,f++);return f},function(){b(e,d,c)})},$digest:function(){var d,f,g,h,k=this.$$asyncQueue,l=this.$$postDigestQueue,q,C,s=b,I,U=[],t,z,B;m("$digest");c=null;do{C=!1;for(I=this;k.length;){try{B=k.shift(),B.scope.$eval(B.expression)}catch(D){p.$$phase=null,e(D)}c=null}a:do{if(h=I.$$watchers)for(q=h.length;q--;)try{if(d=h[q])if((f=d.get(I))!==(g=d.last)&&!(d.eq?ta(f,g):"number"==typeof f&&"number"==typeof g&&isNaN(f)&&isNaN(g)))C=!0,c=d,d.last=d.eq?$(f):f,d.fn(f,g===n?f:g,I),5>s&&(t=4-s,U[t]||
(U[t]=[]),z=M(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,z+="; newVal: "+pa(f)+"; oldVal: "+pa(g),U[t].push(z));else if(d===c){C=!1;break a}}catch(y){p.$$phase=null,e(y)}if(!(h=I.$$childHead||I!==this&&I.$$nextSibling))for(;I!==this&&!(h=I.$$nextSibling);)I=I.$parent}while(I=h);if((C||k.length)&&!s--)throw p.$$phase=null,a("infdig",b,pa(U));}while(C||k.length);for(p.$$phase=null;l.length;)try{l.shift()()}catch(w){e(w)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");
this.$$destroyed=!0;this!==p&&(q(this.$$listenerCount,bb(null,l,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){p.$$phase||p.$$asyncQueue.length||
f.defer(function(){p.$$asyncQueue.length&&p.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[ab(c,
b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=[h].concat(ua.call(arguments,1)),m,l;do{d=f.$$listeners[a]||c;h.currentScope=f;m=0;for(l=d.length;m<l;m++)if(d[m])try{d[m].apply(null,k)}catch(p){e(p)}else d.splice(m,1),m--,l--;if(g)break;f=f.$parent}while(f);return h},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=
!0},defaultPrevented:!1},g=[f].concat(ua.call(arguments,1)),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(m){e(m)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};var p=new h;return p}]}function Bd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return D(a)?
(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return D(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,g;if(!N||8<=N)if(g=xa(c).href,""!==g&&!g.match(e))return"unsafe:"+g;return c}}}function Cd(b){if("self"===b)return b;if(w(b)){if(-1<b.indexOf("***"))throw ra("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if($a(b))return RegExp("^"+b.source+"$");
throw ra("imatcher");}function yc(b){var a=[];D(b)&&q(b,function(b){a.push(Cd(b))});return a}function Dd(){this.SCE_CONTEXTS=ea;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=yc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=yc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};
b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ra("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var g=d(),f={};f[ea.HTML]=d(g);f[ea.CSS]=d(g);f[ea.URL]=d(g);f[ea.JS]=d(g);f[ea.RESOURCE_URL]=d(f[ea.URL]);return{trustAs:function(a,b){var c=f.hasOwnProperty(a)?f[a]:null;if(!c)throw ra("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw ra("itype",a);return new c(b)},getTrusted:function(c,d){if(null===
d||d===s||""===d)return d;var g=f.hasOwnProperty(c)?f[c]:null;if(g&&d instanceof g)return d.$$unwrapTrustedValue();if(c===ea.RESOURCE_URL){var g=xa(d.toString()),l,n,p=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Eb(g):b[l].exec(g.href)){p=!0;break}if(p)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Eb(g):a[l].exec(g.href)){p=!1;break}if(p)return d;throw ra("insecurl",d.toString());}if(c===ea.HTML)return e(d);throw ra("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}
function Ed(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw ra("iequirks");var e=$(ea);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Aa);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var g=e.parseAs,
f=e.getTrusted,h=e.trustAs;q(ea,function(a,b){var c=x(b);e[Qa("parse_as_"+c)]=function(b){return g(a,b)};e[Qa("get_trusted_"+c)]=function(b){return f(a,b)};e[Qa("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function Fd(){this.$get=["$window","$document",function(b,a){var c={},d=V((/android (\d+)/.exec(x((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),g=a[0]||{},f=g.documentMode,h,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=g.body&&g.body.style,l=!1,n=!1;if(k){for(var p in k)if(l=
m.exec(p)){h=l[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||h+"Transition"in k);n=!!("animation"in k||h+"Animation"in k);!d||l&&n||(l=w(g.body.style.webkitTransition),n=w(g.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!f||7<f),hasEvent:function(a){if("input"==a&&9==N)return!1;if(u(c[a])){var b=g.createElement("div");c[a]="on"+a in b}return c[a]},csp:Sb(),vendorPrefix:h,
transitions:l,animations:n,android:d,msie:N,msieDocumentMode:f}}]}function Gd(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,m){var k=c.defer(),l=k.promise,n=D(m)&&!m;h=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete g[l.$$timeoutId]}n||b.$apply()},h);l.$$timeoutId=h;g[h]=k;return l}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):
!1};return e}]}function xa(b,a){var c=b;N&&(T.setAttribute("href",c),c=T.href);T.setAttribute("href",c);return{href:T.href,protocol:T.protocol?T.protocol.replace(/:$/,""):"",host:T.host,search:T.search?T.search.replace(/^\?/,""):"",hash:T.hash?T.hash.replace(/^#/,""):"",hostname:T.hostname,port:T.port,pathname:"/"===T.pathname.charAt(0)?T.pathname:"/"+T.pathname}}function Eb(b){b=w(b)?xa(b):b;return b.protocol===zc.protocol&&b.host===zc.host}function Hd(){this.$get=Y(P)}function Ac(b){function a(d,
e){if(W(d)){var g={};q(d,function(b,c){g[c]=a(c,b)});return g}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Bc);a("date",Cc);a("filter",Id);a("json",Jd);a("limitTo",Kd);a("lowercase",Ld);a("number",Dc);a("orderBy",Ec);a("uppercase",Md)}function Id(){return function(b,a,c){if(!L(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&
(c="boolean"===d&&c?function(a,b){return Ba.equals(a,b)}:function(a,b){b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var g=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!g(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&g(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(g(a[d],b))return!0;return!1;default:return!1}};
switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var f in a)(function(b){"undefined"!=typeof a[b]&&e.push(function(c){return g("$"==b?c:c&&c[b],a[b])})})(f);break;case "function":e.push(a);break;default:return b}d=[];for(f=0;f<b.length;f++){var h=b[f];e.check(h)&&d.push(h)}return d}}function Bc(b){var a=b.NUMBER_FORMATS;return function(b,d){u(d)&&(d=a.CURRENCY_SYM);return Fc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Dc(b){var a=
b.NUMBER_FORMATS;return function(b,d){return Fc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Fc(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var g=0>b;b=Math.abs(b);var f=b+"",h="",m=[],k=!1;if(-1!==f.indexOf("e")){var l=f.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&l[3]>e+1?f="0":(h=f,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{f=(f.split(Gc)[1]||"").length;u(e)&&(e=Math.min(Math.max(a.minFrac,f),a.maxFrac));f=Math.pow(10,e);b=Math.round(b*f)/f;b=(""+b).split(Gc);f=b[0];b=b[1]||
"";var l=0,n=a.lgSize,p=a.gSize;if(f.length>=n+p)for(l=f.length-n,k=0;k<l;k++)0===(l-k)%p&&0!==k&&(h+=c),h+=f.charAt(k);for(k=l;k<f.length;k++)0===(f.length-k)%n&&0!==k&&(h+=c),h+=f.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}m.push(g?a.negPre:a.posPre);m.push(h);m.push(g?a.negSuf:a.posSuf);return m.join("")}function Kb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function X(b,a,c,d){c=c||0;return function(e){e=e["get"+
b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Kb(e,a,d)}}function kb(b,a){return function(c,d){var e=c["get"+b](),g=Ha(a?"SHORT"+b:b);return d[g][e]}}function Cc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var g=0,f=0,h=b[8]?a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(g=V(b[9]+b[10]),f=V(b[9]+b[11]));h.call(a,V(b[1]),V(b[2])-1,V(b[3]));g=V(b[4]||0)-g;f=V(b[5]||0)-f;h=V(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,g,f,h,b)}return a}var c=
/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var g="",f=[],h,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;w(c)&&(c=Nd.test(c)?V(c):a(c));rb(c)&&(c=new Date(c));if(!Ka(c))return c;for(;e;)(m=Od.exec(e))?(f=f.concat(ua.call(m,1)),e=f.pop()):(f.push(e),e=null);q(f,function(a){h=Pd[a];g+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Jd(){return function(b){return pa(b,!0)}}function Kd(){return function(b,
a){if(!L(b)&&!w(b))return b;a=V(a);if(w(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Ec(b){return function(a,c,d){function e(a,b){return Oa(b)?function(b,c){return a(c,b)}:a}if(!L(a)||!c)return a;c=L(c)?c:[c];c=Qc(c,function(a){var c=!1,d=a||Aa;if(w(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a)}return e(function(a,
b){var c;c=d(a);var e=d(b),f=typeof c,g=typeof e;f==g?("string"==f&&(c=c.toLowerCase(),e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<g?-1:1;return c},c)});for(var g=[],f=0;f<a.length;f++)g.push(a[f]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function sa(b){M(b)&&(b={link:b});b.restrict=b.restrict||"AC";return Y(b)}function Hc(b,a){function c(a,c){c=c?"-"+cb(c,"-"):"";b.removeClass((a?lb:mb)+c).addClass((a?mb:lb)+c)}var d=this,e=b.parent().controller("form")||
nb,g=0,f=d.$error={},h=[];d.$name=a.name||a.ngForm;d.$dirty=!1;d.$pristine=!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(Ia);c(!0);d.$addControl=function(a){wa(a.$name,"input");h.push(a);a.$name&&(d[a.$name]=a)};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];q(f,function(b,c){d.$setValidity(c,!0,a)});Ma(h,a)};d.$setValidity=function(a,b,h){var n=f[a];if(b)n&&(Ma(n,h),n.length||(g--,g||(c(b),d.$valid=!0,d.$invalid=!1),f[a]=!1,c(!0,a),e.$setValidity(a,!0,d)));else{g||
c(b);if(n){if(-1!=ab(n,h))return}else f[a]=n=[],g++,c(!1,a),e.$setValidity(a,!1,d);n.push(h);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(Ia).addClass(ob);d.$dirty=!0;d.$pristine=!1;e.$setDirty()};d.$setPristine=function(){b.removeClass(ob).addClass(Ia);d.$dirty=!1;d.$pristine=!0;q(h,function(a){a.$setPristine()})}}function oa(b,a,c,d){b.$setValidity(a,c);return c?d:s}function pb(b,a,c,d,e,g){if(!e.android){var f=!1;a.on("compositionstart",function(a){f=!0});a.on("compositionend",
function(){f=!1})}var h=function(){if(!f){var e=a.val();Oa(c.ngTrim||"T")&&(e=Z(e));d.$viewValue!==e&&(b.$$phase?d.$setViewValue(e):b.$apply(function(){d.$setViewValue(e)}))}};if(e.hasEvent("input"))a.on("input",h);else{var m,k=function(){m||(m=g.defer(function(){h();m=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||k()});if(e.hasEvent("paste"))a.on("paste cut",k)}a.on("change",h);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var l=c.ngPattern;
l&&((e=l.match(/^\/(.*)\/([gim]*)$/))?(l=RegExp(e[1],e[2]),e=function(a){return oa(d,"pattern",d.$isEmpty(a)||l.test(a),a)}):e=function(c){var e=b.$eval(l);if(!e||!e.test)throw t("ngPattern")("noregexp",l,e,fa(a));return oa(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var n=V(c.ngMinlength);e=function(a){return oa(d,"minlength",d.$isEmpty(a)||a.length>=n,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var p=V(c.ngMaxlength);e=
function(a){return oa(d,"maxlength",d.$isEmpty(a)||a.length<=p,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Lb(b,a){b="ngClass"+b;return function(){return{restrict:"AC",link:function(c,d,e){function g(b){if(!0===a||c.$index%2===a){var d=f(b||"");h?ta(b,h)||e.$updateClass(d,f(h)):e.$addClass(d)}h=$(b)}function f(a){if(L(a))return a.join(" ");if(W(a)){var b=[];q(a,function(a,c){a&&b.push(c)});return b.join(" ")}return a}var h;c.$watch(e[b],g,!0);e.$observe("class",function(a){g(c.$eval(e[b]))});
"ngClass"!==b&&c.$watch("$index",function(d,g){var h=d&1;if(h!==g&1){var n=f(c.$eval(e[b]));h===a?e.$addClass(n):e.$removeClass(n)}})}}}}var x=function(b){return w(b)?b.toLowerCase():b},Ha=function(b){return w(b)?b.toUpperCase():b},N,z,Ca,ua=[].slice,Qd=[].push,La=Object.prototype.toString,Na=t("ng"),Ba=P.angular||(P.angular={}),Ua,Ga,ia=["0","0","0"];N=V((/msie (\d+)/.exec(x(navigator.userAgent))||[])[1]);isNaN(N)&&(N=V((/trident\/.*; rv:(\d+)/.exec(x(navigator.userAgent))||[])[1]));E.$inject=[];
Aa.$inject=[];var Z=function(){return String.prototype.trim?function(b){return w(b)?b.trim():b}:function(b){return w(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ga=9>N?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ha(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Tc=/[A-Z]/g,Rd={full:"1.2.12",major:1,minor:2,dot:12,codeName:"cauliflower-eradication"},Ra=O.cache={},db=O.expando="ng-"+(new Date).getTime(),Xc=1,Ic=
P.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},zb=P.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)},Vc=/([\:\-\_]+(.))/g,Wc=/^moz([A-Z])/,wb=t("jqLite"),Fa=O.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===R.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),O(P).on("load",a))},toString:function(){var b=[];q(this,function(a){b.push(""+
a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?z(this[b]):z(this[this.length+b])},length:0,push:Qd,sort:[].sort,splice:[].splice},fb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){fb[x(b)]=b});var fc={};q("input select option textarea button form details".split(" "),function(b){fc[Ha(b)]=!0});q({data:bc,inheritedData:eb,scope:function(b){return z(b).data("$scope")||eb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return z(b).data("$isolateScope")||
z(b).data("$isolateScopeNoTemplate")},controller:cc,injector:function(b){return eb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ab,css:function(b,a,c){a=Qa(a);if(D(c))b.style[a]=c;else{var d;8>=N&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=N&&(d=""===d?s:d);return d}},attr:function(b,a,c){var d=x(a);if(fb[d])if(D(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||E).specified?
d:s;else if(D(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(D(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(u(d))return e?b[e]:"";b[e]=d}var a=[];9>N?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(u(a)){if("SELECT"===Ga(b)&&b.multiple){var c=[];q(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=
a},html:function(b,a){if(u(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Da(d[c]);b.innerHTML=a},empty:dc},function(b,a){O.prototype[a]=function(a,d){var e,g;if(b!==dc&&(2==b.length&&b!==Ab&&b!==cc?a:d)===s){if(W(a)){for(e=0;e<this.length;e++)if(b===bc)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}e=b.$dv;g=e===s?Math.min(this.length,1):this.length;for(var f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});q({removeData:$b,
dealoc:Da,on:function a(c,d,e,g){if(D(g))throw wb("onargs");var f=ja(c,"events"),h=ja(c,"handle");f||ja(c,"events",f={});h||ja(c,"handle",h=Yc(c,f));q(d.split(" "),function(d){var g=f[d];if(!g){if("mouseenter"==d||"mouseleave"==d){var l=R.body.contains||R.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=
c.parentNode;)if(c===a)return!0;return!1};f[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||h(a,d)})}else Ic(c,d,h),f[d]=[];g=f[d]}g.push(e)})},off:ac,one:function(a,c,d){a=z(a);a.on(c,function g(){a.off(c,d);a.off(c,g)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Da(a);q(new O(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===
a.nodeType&&c.push(a)});return c},contents:function(a){return a.childNodes||[]},append:function(a,c){q(new O(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new O(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=z(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Da(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new O(c),function(a){e.insertBefore(a,
d.nextSibling);d=a})},addClass:Cb,removeClass:Bb,toggleClass:function(a,c,d){u(d)&&(d=!Ab(a,c));(d?Cb:Bb)(a,c)},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:yb,triggerHandler:function(a,c,d){c=(ja(a,"events")||{})[c];d=d||[];var e=[{preventDefault:E,stopPropagation:E}];
q(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){O.prototype[c]=function(c,e,g){for(var f,h=0;h<this.length;h++)u(f)?(f=a(this[h],c,e,g),D(f)&&(f=z(f))):xb(f,a(this[h],c,e,g));return D(f)?f:this};O.prototype.bind=O.prototype.on;O.prototype.unbind=O.prototype.off});Sa.prototype={put:function(a,c){this[Ea(a)]=c},get:function(a){return this[Ea(a)]},remove:function(a){var c=this[a=Ea(a)];delete this[a];return c}};var $c=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,ad=/,/,bd=/^\s*(_?)(\S+?)\1\s*$/,Zc=
/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ta=t("$injector"),Sd=t("$animate"),Td=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Sd("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout",function(a){return{enter:function(d,e,g,f){g?g.after(d):(e&&e[0]||(e=g.parent()),e.append(d));
f&&a(f,0,!1)},leave:function(d,e){d.remove();e&&a(e,0,!1)},move:function(a,c,g,f){this.enter(a,c,g,f)},addClass:function(d,e,g){e=w(e)?e:L(e)?e.join(" "):"";q(d,function(a){Cb(a,e)});g&&a(g,0,!1)},removeClass:function(d,e,g){e=w(e)?e:L(e)?e.join(" "):"";q(d,function(a){Bb(a,e)});g&&a(g,0,!1)},enabled:E}}]}],ha=t("$compile");ic.$inject=["$provide","$$sanitizeUriProvider"];var hd=/^(x[\:\-_]|data[\:\-_])/i,oc=t("$interpolate"),Ud=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,sd={http:80,https:443,ftp:21},Gb=t("$location");
tc.prototype=Hb.prototype=sc.prototype={$$html5:!1,$$replace:!1,absUrl:ib("$$absUrl"),url:function(a,c){if(u(a))return this.$$url;var d=Ud.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:ib("$$protocol"),host:ib("$$host"),port:ib("$$port"),path:uc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(w(a))this.$$search=Vb(a);else if(W(a))this.$$search=
a;else throw Gb("isrcharg");break;default:u(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:uc("$$hash",Aa),replace:function(){this.$$replace=!0;return this}};var ya=t("$parse"),xc={},qa,Ja={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:E,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return D(d)?D(e)?d+e:d:D(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(D(d)?d:0)-(D(e)?e:0)},"*":function(a,c,d,e){return d(a,
c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":E,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,
c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Vd={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Jb=function(a){this.options=a};Jb.prototype={constructor:Jb,lex:function(a){this.text=a;this.index=0;this.ch=s;this.lastCh=":";this.tokens=[];var c;for(a=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);
if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++;else if(this.isWhitespace(this.ch)){this.index++;
continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),g=Ja[this.ch],f=Ja[d],h=Ja[e];h?(this.tokens.push({index:this.index,text:e,fn:h}),this.index+=3):f?(this.tokens.push({index:this.index,text:d,fn:f}),this.index+=2):g?(this.tokens.push({index:this.index,text:this.ch,fn:g,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==
a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=D(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+
"]":" "+d;throw ya("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=x(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,
text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,g,f,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}if(e)for(g=this.index;g<this.text.length;){h=this.text.charAt(g);if("("===h){f=c.substr(e-d+1);c=c.substr(0,e-d);this.index=g;break}if(this.isWhitespace(h))g++;else break}d={index:d,text:c};if(Ja.hasOwnProperty(c))d.fn=Ja[c],d.json=Ja[c];
else{var m=wc(c,this.options,this.text);d.fn=y(function(a,c){return m(a,c)},{assign:function(d,e){return jb(d,c,e,a.text,a.options)}})}this.tokens.push(d);f&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+1,text:f,json:!1}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,g=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),e=e+f;if(g)"u"===f?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+
f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d=(g=Vd[f])?d+g:d+f,g=!1;else if("\\"===f)g=!0;else{if(f===a){this.index++;this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}d+=f}this.index++}this.throwError("Unterminated quote",c)}};var Ya=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};Ya.ZERO=function(){return 0};Ya.prototype={constructor:Ya,parse:function(a,c){this.text=a;this.json=c;this.tokens=this.lexer.lex(a);c&&(this.assignment=this.logicalOR,
this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=
this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw ya("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw ya("ueoe",this.text);return this.tokens[0]},
peek:function(a,c,d,e){if(0<this.tokens.length){var g=this.tokens[0],f=g.text;if(f===a||f===c||f===d||f===e||!(a||c||d||e))return g}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return y(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return y(function(e,
g){return a(e,g)?c(e,g):d(e,g)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return y(function(e,g){return c(e,g,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,g=0;g<a.length;g++){var f=a[g];f&&(e=f(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=
this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=function(a,e,h){h=[h];for(var m=0;m<d.length;m++)h.push(d[m](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+
"] can not be assigned to",d),c=this.ternary(),function(d,g){return a.assign(d,c(d,g),g)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,
c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*",
"/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(Ya.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=wc(d,this.options,this.text);return y(function(c,d,h){return e(h||a(c,d))},{assign:function(e,f,h){return jb(a(e,h),d,f,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();
this.consume("]");return y(function(e,g){var f=a(e,g),h=d(e,g),m;if(!f)return s;(f=Xa(f[h],c.text))&&(f.then&&c.options.unwrapPromises)&&(m=f,"$$v"in f||(m.$$v=s,m.then(function(a){m.$$v=a})),f=f.$$v);return f},{assign:function(e,g,f){var h=d(e,f);return Xa(a(e,f),c.text)[h]=g}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(g,f){for(var h=[],m=c?c(g,f):g,k=0;k<d.length;k++)h.push(d[k](g,
f));k=a(g,f,m)||E;Xa(m,e.text);Xa(k,e.text);h=k.apply?k.apply(m,h):k(h[0],h[1],h[2],h[3],h[4]);return Xa(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return y(function(c,d){for(var f=[],h=0;h<a.length;h++)f.push(a[h](c,d));return f},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{var d=this.expect(),d=d.string||d.text;
this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return y(function(c,d){for(var e={},m=0;m<a.length;m++){var k=a[m];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Ib={},ra=t("$sce"),ea={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},T=R.createElement("a"),zc=xa(P.location.href,!0);Ac.$inject=["$provide"];Bc.$inject=["$locale"];Dc.$inject=["$locale"];var Gc=".",Pd={yyyy:X("FullYear",4),
yy:X("FullYear",2,0,!0),y:X("FullYear",1),MMMM:kb("Month"),MMM:kb("Month",!0),MM:X("Month",2,1),M:X("Month",1,1),dd:X("Date",2),d:X("Date",1),HH:X("Hours",2),H:X("Hours",1),hh:X("Hours",2,-12),h:X("Hours",1,-12),mm:X("Minutes",2),m:X("Minutes",1),ss:X("Seconds",2),s:X("Seconds",1),sss:X("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Kb(Math[0<a?"floor":"ceil"](a/60),2)+
Kb(Math.abs(a%60),2))}},Od=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Nd=/^\-?\d+$/;Cc.$inject=["$locale"];var Ld=Y(x),Md=Y(Ha);Ec.$inject=["$parse"];var Wd=Y({restrict:"E",compile:function(a,c){8>=N&&(c.href||c.name||c.$set("href",""),a.append(R.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var g="[object SVGAnimatedString]"===La.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(g)||a.preventDefault()})}}}),
Mb={};q(fb,function(a,c){if("multiple"!=a){var d=la("ng-"+c);Mb[d]=function(){return{priority:100,link:function(a,g,f){a.$watch(f[d],function(a){f.$set(c,!!a)})}}}}});q(["src","srcset","href"],function(a){var c=la("ng-"+a);Mb[c]=function(){return{priority:99,link:function(d,e,g){g.$observe(c,function(c){c&&(g.$set(a,c),N&&e.prop(a,g[a]))})}}}});var nb={$addControl:E,$removeControl:E,$setValidity:E,$setDirty:E,$setPristine:E};Hc.$inject=["$element","$attrs","$scope"];var Jc=function(a){return["$timeout",
function(c){return{name:"form",restrict:a?"EAC":"E",controller:Hc,compile:function(){return{pre:function(a,e,g,f){if(!g.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};Ic(e[0],"submit",h);e.on("$destroy",function(){c(function(){zb(e[0],"submit",h)},0,!1)})}var m=e.parent().controller("form"),k=g.name||g.ngForm;k&&jb(a,k,f,k);if(m)e.on("$destroy",function(){m.$removeControl(f);k&&jb(a,k,s,k);y(f,nb)})}}}}}]},Xd=Jc(),Yd=Jc(!0),Zd=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
$d=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,ae=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Kc={text:pb,number:function(a,c,d,e,g,f){pb(a,c,d,e,g,f);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||ae.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return oa(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));
d.max&&(a=function(a){var c=parseFloat(d.max);return oa(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return oa(e,"number",e.$isEmpty(a)||rb(a),a)})},url:function(a,c,d,e,g,f){pb(a,c,d,e,g,f);a=function(a){return oa(e,"url",e.$isEmpty(a)||Zd.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,g,f){pb(a,c,d,e,g,f);a=function(a){return oa(e,"email",e.$isEmpty(a)||$d.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},
radio:function(a,c,d,e){u(d.name)&&c.attr("name",Za());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var g=d.ngTrueValue,f=d.ngFalseValue;w(g)||(g=!0);w(f)||(f=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==g};e.$formatters.push(function(a){return a===
g});e.$parsers.push(function(a){return a?g:f})},hidden:E,button:E,submit:E,reset:E},Lc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,g,f){f&&(Kc[x(g.type)]||Kc.text)(d,e,g,f,c,a)}}}],mb="ng-valid",lb="ng-invalid",Ia="ng-pristine",ob="ng-dirty",be=["$scope","$exceptionHandler","$attrs","$element","$parse",function(a,c,d,e,g){function f(a,c){c=c?"-"+cb(c,"-"):"";e.removeClass((a?lb:mb)+c).addClass((a?mb:lb)+c)}this.$modelValue=this.$viewValue=Number.NaN;
this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var h=g(d.ngModel),m=h.assign;if(!m)throw t("ngModel")("nonassign",d.ngModel,fa(e));this.$render=E;this.$isEmpty=function(a){return u(a)||""===a||null===a||a!==a};var k=e.inheritedData("$formController")||nb,l=0,n=this.$error={};e.addClass(Ia);f(!0);this.$setValidity=function(a,c){n[a]!==!c&&(c?(n[a]&&l--,l||(f(!0),this.$valid=!0,this.$invalid=!1)):(f(!1),
this.$invalid=!0,this.$valid=!1,l++),n[a]=!c,f(c,a),k.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;e.removeClass(ob).addClass(Ia)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,e.removeClass(Ia).addClass(ob),k.$setDirty());q(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,m(a,d),q(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var p=this;a.$watch(function(){var c=
h(a);if(p.$modelValue!==c){var d=p.$formatters,e=d.length;for(p.$modelValue=c;e--;)c=d[e](c);p.$viewValue!==c&&(p.$viewValue=c,p.$render())}return c})}],ce=function(){return{require:["ngModel","^?form"],controller:be,link:function(a,c,d,e){var g=e[0],f=e[1]||nb;f.$addControl(g);a.$on("$destroy",function(){f.$removeControl(g)})}}},de=Y({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Mc=function(){return{require:"?ngModel",link:function(a,c,
d,e){if(e){d.required=!0;var g=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},ee=function(){return{require:"ngModel",link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!u(a)){var c=[];a&&q(a.split(g),function(a){a&&c.push(Z(a))});return c}});e.$formatters.push(function(a){return L(a)?
a.join(", "):s});e.$isEmpty=function(a){return!a||!a.length}}}},fe=/^(true|false|\d+)$/,ge=function(){return{priority:100,compile:function(a,c){return fe.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,c,g){a.$watch(g.ngValue,function(a){g.$set("value",a)})}}}},he=sa(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),ie=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));
d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],je=["$sce","$parse",function(a,c){return function(d,e,g){e.addClass("ng-binding").data("$binding",g.ngBindHtml);var f=c(g.ngBindHtml);d.$watch(function(){return(f(d)||"").toString()},function(c){e.html(a.getTrustedHtml(f(d))||"")})}}],ke=Lb("",!0),le=Lb("Odd",0),me=Lb("Even",1),ne=sa({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),oe=[function(){return{scope:!0,controller:"@",
priority:500}}],Nc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=la("ng-"+a);Nc[c]=["$parse",function(d){return{compile:function(e,g){var f=d(g[c]);return function(c,d,e){d.on(x(a),function(a){c.$apply(function(){f(c,{$event:a})})})}}}}]});var pe=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,g,f){var h,
m;c.$watch(e.ngIf,function(g){Oa(g)?m||(m=c.$new(),f(m,function(c){c[c.length++]=R.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)})):(m&&(m.$destroy(),m=null),h&&(a.leave(ub(h.clone)),h=null))})}}}],qe=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,g){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Ba.noop,compile:function(f,h){var m=h.ngInclude||h.src,k=h.onload||"",l=h.autoscroll;return function(f,h,q,s,A){var t=
0,v,z,K=function(){v&&(v.$destroy(),v=null);z&&(e.leave(z),z=null)};f.$watch(g.parseAsResourceUrl(m),function(g){var m=function(){!D(l)||l&&!f.$eval(l)||d()},q=++t;g?(a.get(g,{cache:c}).success(function(a){if(q===t){var c=f.$new();s.template=a;a=A(c,function(a){K();e.enter(a,null,h,m)});v=c;z=a;v.$emit("$includeContentLoaded");f.$eval(k)}}).error(function(){q===t&&K()}),f.$emit("$includeContentRequested")):(K(),s.template=null)})}}}}],re=["$compile",function(a){return{restrict:"ECA",priority:-400,
require:"ngInclude",link:function(c,d,e,g){d.html(g.template);a(d.contents())(c)}}}],se=sa({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),te=sa({terminal:!0,priority:1E3}),ue=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,f){var h=f.count,m=f.$attr.when&&g.attr(f.$attr.when),k=f.offset||0,l=e.$eval(m)||{},n={},p=c.startSymbol(),r=c.endSymbol(),s=/^when(Minus)?(.+)$/;q(f,function(a,c){s.test(c)&&(l[x(c.replace("when","").replace("Minus",
"-"))]=g.attr(f.$attr[c]))});q(l,function(a,e){n[e]=c(a.replace(d,p+h+"-"+k+r))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-k));return n[c](e,g,!0)},function(a){g.text(a)})}}}],ve=["$parse","$animate",function(a,c){var d=t("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,g,f,h,m){var k=f.ngRepeat,l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,p,r,s,A,t,v={$id:Ea};if(!l)throw d("iexp",
k);f=l[1];h=l[2];(l=l[3])?(n=a(l),p=function(a,c,d){t&&(v[t]=a);v[A]=c;v.$index=d;return n(e,v)}):(r=function(a,c){return Ea(c)},s=function(a){return a});l=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",f);A=l[3]||l[1];t=l[2];var D={};e.$watchCollection(h,function(a){var f,h,l=g[0],n,v={},y,B,w,u,S,E,x=[];if(qb(a))S=a,n=p||r;else{n=p||s;S=[];for(w in a)a.hasOwnProperty(w)&&"$"!=w.charAt(0)&&S.push(w);S.sort()}y=S.length;h=x.length=S.length;for(f=0;f<h;f++)if(w=a===
S?f:S[f],u=a[w],u=n(w,u,f),wa(u,"`track by` id"),D.hasOwnProperty(u))E=D[u],delete D[u],v[u]=E,x[f]=E;else{if(v.hasOwnProperty(u))throw q(x,function(a){a&&a.scope&&(D[a.id]=a)}),d("dupes",k,u);x[f]={id:u};v[u]=!1}for(w in D)D.hasOwnProperty(w)&&(E=D[w],f=ub(E.clone),c.leave(f),q(f,function(a){a.$$NG_REMOVED=!0}),E.scope.$destroy());f=0;for(h=S.length;f<h;f++){w=a===S?f:S[f];u=a[w];E=x[f];x[f-1]&&(l=x[f-1].clone[x[f-1].clone.length-1]);if(E.scope){B=E.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);
E.clone[0]!=n&&c.move(ub(E.clone),null,z(l));l=E.clone[E.clone.length-1]}else B=e.$new();B[A]=u;t&&(B[t]=w);B.$index=f;B.$first=0===f;B.$last=f===y-1;B.$middle=!(B.$first||B.$last);B.$odd=!(B.$even=0===(f&1));E.scope||m(B,function(a){a[a.length++]=R.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,z(l));l=a;E.scope=B;E.clone=a;v[E.id]=E})}D=v})}}}],we=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Oa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],xe=["$animate",
function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Oa(c)?"addClass":"removeClass"](d,"ng-hide")})}}],ye=sa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),ze=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,g){var f,h,m=[];c.$watch(e.ngSwitch||e.on,function(d){for(var l=0,n=m.length;l<n;l++)m[l].$destroy(),a.leave(h[l]);h=[];m=[];if(f=g.cases["!"+
d]||g.cases["?"])c.$eval(e.change),q(f,function(d){var e=c.$new();m.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],Ae=sa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,g){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:g,element:c})}}),Be=sa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,g){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:g,
element:c})}}),Ce=sa({controller:["$element","$transclude",function(a,c){if(!c)throw t("ngTransclude")("orphan",fa(a));this.$transclude=c}],link:function(a,c,d,e){e.$transclude(function(a){c.empty();c.append(a)})}}),De=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Ee=t("ngOptions"),Fe=Y({terminal:!0}),Ge=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
e={$setViewValue:E};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,k={},l=e,n;m.databound=d.ngModel;m.init=function(a,c,d){l=a;n=d};m.addOption=function(c){wa(c,'"option value"');k[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};m.removeOption=function(a){this.hasOption(a)&&(delete k[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ea(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",
!0)};m.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=E})}],link:function(e,f,h,m){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(y.parent()&&y.remove(),c.val(a),""===a&&w.prop("selected",!0)):u(a)&&w?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){y.parent()&&y.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new Sa(d.$viewValue);q(c.find("option"),
function(c){c.selected=D(a.get(c.value))})};a.$watch(function(){ta(e,d.$viewValue)||(e=$(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,s,t,u;t=g.$modelValue;u=z(e)||[];var C=n?Nb(u):u,F,J,x;J={};s=!1;var B,H;if(r)if(w&&L(t))for(s=new Sa([]),x=0;x<t.length;x++)J[m]=t[x],s.put(w(e,J),t[x]);else s=new Sa(t);for(x=0;F=C.length,
x<F;x++){k=x;if(n){k=C[x];if("$"===k.charAt(0))continue;J[n]=k}J[m]=u[k];d=p(e,J)||"";(k=a[d])||(k=a[d]=[],c.push(d));r?d=D(s.remove(w?w(e,J):q(e,J))):(w?(d={},d[m]=t,d=w(e,d)===w(e,J)):d=t===q(e,J),s=s||d);B=l(e,J);B=D(B)?B:"";k.push({id:w?w(e,J):n?C[x]:x,label:B,selected:d})}r||(A||null===t?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));J=0;for(C=c.length;J<C;J++){d=c[J];k=a[d];y.length<=J?(t={element:E.clone().attr("label",d),label:k.label},u=[t],y.push(u),
f.append(t.element)):(u=y[J],t=u[0],t.label!=d&&t.element.attr("label",t.label=d));B=null;x=0;for(F=k.length;x<F;x++)s=k[x],(d=u[x+1])?(B=d.element,d.label!==s.label&&B.text(d.label=s.label),d.id!==s.id&&B.val(d.id=s.id),B[0].selected!==s.selected&&B.prop("selected",d.selected=s.selected)):(""===s.id&&A?H=A:(H=v.clone()).val(s.id).attr("selected",s.selected).text(s.label),u.push({element:H,label:s.label,id:s.id,selected:s.selected}),B?B.after(H):t.element.append(H),B=H);for(x++;u.length>x;)u.pop().element.remove()}for(;y.length>
J;)y.pop()[0].element.remove()}var k;if(!(k=t.match(d)))throw Ee("iexp",t,fa(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=c(k[2]?k[1]:m),z=c(k[7]),w=k[8]?c(k[8]):null,y=[[{element:f,label:""}]];A&&(a(A)(e),A.removeClass("ng-scope"),A.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=z(e)||[],d={},h,k,l,p,t,v,u;if(r)for(k=[],p=0,v=y.length;p<v;p++)for(a=y[p],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(w)for(u=0;u<c.length&&
(d[m]=c[u],w(e,d)!=h);u++);else d[m]=c[h];k.push(q(e,d))}}else if(h=f.val(),"?"==h)k=s;else if(""===h)k=null;else if(w)for(u=0;u<c.length;u++){if(d[m]=c[u],w(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(m[1]){var p=m[0];m=m[1];var r=h.multiple,t=h.ngOptions,A=!1,w,v=z(R.createElement("option")),E=z(R.createElement("optgroup")),y=v.clone();h=0;for(var C=f.children(),x=C.length;h<x;h++)if(""===C[h].value){w=A=C.eq(h);break}p.init(m,A,
y);r&&(m.$isEmpty=function(a){return!a||0===a.length});t?n(e,f,m):r?l(e,f,m):k(e,f,m,p)}}}}],He=["$interpolate",function(a){var c={addOption:E,removeOption:E};return{restrict:"E",priority:100,compile:function(d,e){if(u(e.value)){var g=a(d.text(),!0);g||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),l=k.data("$selectController")||k.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):
l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],Ie=Y({restrict:"E",terminal:!0});(Ca=P.jQuery)?(z=Ca,y(Ca.fn,{scope:Fa.scope,isolateScope:Fa.isolateScope,controller:Fa.controller,injector:Fa.injector,inheritedData:Fa.inheritedData}),vb("remove",!0,!0,!1),vb("empty",!1,!1,!1),vb("html",!1,!1,!0)):z=O;Ba.element=z;(function(a){y(a,{bootstrap:Xb,copy:$,extend:y,equals:ta,element:z,forEach:q,injector:Yb,noop:E,bind:bb,toJson:pa,fromJson:Tb,identity:Aa,isUndefined:u,isDefined:D,
isString:w,isFunction:M,isObject:W,isNumber:rb,isElement:Pc,isArray:L,version:Rd,isDate:Ka,lowercase:x,uppercase:Ha,callbacks:{counter:0},$$minErr:t,$$csp:Sb});Ua=Uc(P);try{Ua("ngLocale")}catch(c){Ua("ngLocale",[]).provider("$locale",rd)}Ua("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Bd});a.provider("$compile",ic).directive({a:Wd,input:Lc,textarea:Lc,form:Xd,script:De,select:Ge,style:Ie,option:He,ngBind:he,ngBindHtml:je,ngBindTemplate:ie,ngClass:ke,ngClassEven:me,ngClassOdd:le,
ngCloak:ne,ngController:oe,ngForm:Yd,ngHide:xe,ngIf:pe,ngInclude:qe,ngInit:se,ngNonBindable:te,ngPluralize:ue,ngRepeat:ve,ngShow:we,ngStyle:ye,ngSwitch:ze,ngSwitchWhen:Ae,ngSwitchDefault:Be,ngOptions:Fe,ngTransclude:Ce,ngModel:ce,ngList:ee,ngChange:de,required:Mc,ngRequired:Mc,ngValue:ge}).directive({ngInclude:re}).directive(Mb).directive(Nc);a.provider({$anchorScroll:cd,$animate:Td,$browser:ed,$cacheFactory:fd,$controller:id,$document:jd,$exceptionHandler:kd,$filter:Ac,$interpolate:pd,$interval:qd,
$http:ld,$httpBackend:nd,$location:td,$log:ud,$parse:xd,$rootScope:Ad,$q:yd,$sce:Ed,$sceDelegate:Dd,$sniffer:Fd,$templateCache:gd,$timeout:Gd,$window:Hd})}])})(Ba);z(R).ready(function(){Sc(R,Xb)})})(window,document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libs/angular/angular.min.js","/libs/angular")
},{"buffer":24,"oMfpAn":27}],20:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* hasScroll
* author: ronglin
* create date: 2014.5.22
*/
module.exports = function (el) {
    // test targets
    var elems = el ? [el] : [document.documentElement, document.body];
    var scrollX = false, scrollY = false;
    for (var i = 0; i < elems.length; i++) {
        var o = elems[i];
        // test horizontal
        var sl = o.scrollLeft;
        o.scrollLeft += (sl > 0) ? -1 : 1;
        o.scrollLeft !== sl && (scrollX = scrollX || true);
        o.scrollLeft = sl;
        // test vertical
        var st = o.scrollTop;
        o.scrollTop += (st > 0) ? -1 : 1;
        o.scrollTop !== st && (scrollY = scrollY || true);
        o.scrollTop = st;
    }
    // ret
    return {
        scrollX: scrollX,
        scrollY: scrollY
    };
};
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libs/hasScroll.js","/libs")
},{"buffer":24,"oMfpAn":27}],21:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* parseUrl
* author: ronglin
* create date: 2014.5.22
*/

module.exports = function (url) {
    var a = document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':', ''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function () {
            var ret = {},
            seg = a.search.replace(/^\?/, '').split('&'),
            len = seg.length, i = 0, s;
            for (; i < len; i++) {
                if (!seg[i]) { continue; }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
        hash: a.hash.replace('#', ''),
        path: a.pathname.replace(/^([^\/])/, '/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
        segments: a.pathname.replace(/^\//, '').split('/')
    };
};
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libs/parseUrl.js","/libs")
},{"buffer":24,"oMfpAn":27}],22:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* utilities
* author: ronglin
* create date: 2014.5.4
*/

var common = require('../../jsg/utilities');

module.exports = common.extend({}, common, {

    dom: {
        parseUrl: require('./parseUrl'),
        hasScroll: require('./hasScroll'),
        isAncestor: function (p, c) {
            var ret = false;
            if (p && c) {
                if (p.contains) {
                    return p.contains(c);
                } else if (p.compareDocumentPosition) {
                    return !!(p.compareDocumentPosition(c) & 16);
                } else {
                    while (c = c.parentNode) {
                        ret = c == p || ret;
                    }
                }
            }
            return ret;
        }
    },

    isWindow: function (obj) {
        return obj != null && obj == obj.window
    },

    viewUrl: function (url){
        return url;
    },

    i18n: function(key, val) {
        var getVal = this.readObj({}, key);
        return getVal !== undefined ? getVal : val;
    }
});
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libs/utilities.js","/libs")
},{"../../jsg/utilities":23,"./hasScroll":20,"./parseUrl":21,"buffer":24,"oMfpAn":27}],23:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* utilities
* author: ronglin
* create date: 2014.6.21
*/

module.exports = {

    arg2arr: function() {
        var splice = Array.prototype.splice;
        return function(args, skip) {
            return splice.call(args, skip || 0);
        };
    }(),

    type: function() {
        var op = Object.prototype;
        var class2type = {}, natives = 'Boolean Number String Function Array Date RegExp Object Error'.split(' ');
        for (var i = 0; i < natives.length; i++) {class2type['[object ' + natives[i] + ']'] = natives[i].toLowerCase(); }
        return function(obj) {
            return obj == null ? String(obj) : class2type[op.toString.call(obj)] || 'object';
        };
    }(),

    isArray: function(obj){
        return this.type(obj) === 'array';
    },

    isFunction: function(obj) {
        return this.type(obj) === 'function';
    },

    isNumeric: function (obj) {
        return !isNaN(parseFloat(obj)) && isFinite(obj)
    },

    isPlainObject: function (obj) {
        if (!obj || this.type(obj) !== "object" || obj.nodeType) {
            return false;
        }
        try {
            if (obj.constructor && !this.hasOwn(obj, "constructor") && !this.hasOwn(obj.constructor.prototype, "isPrototypeOf")) {
                return false;
            }
        } catch (e) {
            return false;
        }
        var key;
        for (key in obj) {}
        return key === undefined || this.hasOwn(obj, key);
    },

    hasOwn: function(o, prop){
        if ( o === null || o === undefined ) {
            return false;
        } else if ( o.hasOwnProperty ) {
            return o.hasOwnProperty( prop );
        } else {
            return ( this.type( o[prop] ) !== 'undefined' ) && o.constructor.prototype[prop] !== o[prop];
        }
    },

    each: function( obj, callback, args ) {
        var name,
            i = 0,
            length = obj.length,
            isObj = length === undefined || this.isFunction( obj );

        if ( args ) {
            if ( isObj ) {
                for ( name in obj ) {
                    if ( callback.apply( obj[ name ], args ) === false ) {
                        break;
                    }
                }
            } else {
                for ( ; i < length; ) {
                    if ( callback.apply( obj[ i++ ], args ) === false ) {
                        break;
                    }
                }
            }

        // A special, fast, case for the most common use of each
        } else {
            if ( isObj ) {
                for ( name in obj ) {
                    if ( callback.call( obj[ name ], name, obj[ name ] ) === false ) {
                        break;
                    }
                }
            } else {
                for ( ; i < length; ) {
                    if ( callback.call( obj[ i ], i, obj[ i++ ] ) === false ) {
                        break;
                    }
                }
            }
        }

        return obj;
    },

    extend: function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        if (this.type(target) === "boolean") {
            deep = target;
            target = arguments[1] || {};
            i = 2;
        }
        if (this.type(target) !== "object" && !this.isFunction(target)) {
            target = {}
        }
        if (length === i) {
            target = this;
            --i;
        }
        for (i; i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    if (target === copy) {
                        continue;
                    }
                    if (deep && copy && (this.isPlainObject(copy) || (copyIsArray = this.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && this.isArray(src) ? src : [];
                        } else {
                            clone = src && this.isPlainObject(src) ? src : {};
                        }
                        // WARNING: RECURSION
                        target[name] = this.extend(deep, clone, copy);
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    },

    guid: function() {
        function s4() { return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1); }
        return function(sep) {
            if (sep === true) { sep = '-'; } else { sep = sep || ''; }
            return (s4() + s4() + sep + s4() + sep + s4() + sep + s4() + sep + s4() + s4() + s4());
        };
    }(),

    unique: function(len) {
        return this.guid().substr(0, len);
    },

    padLeft: function(str, len, chr, reverse) {
        if (str !== null && str !== undefined) {
            str = str + ''; var num = len - str.length;
            if (num > 0) {
                for (var i = 0; i < num; i++) {
                    if (reverse === true) {
                        str = str + chr;
                    } else {
                        str = chr + str;
                    }
                }
            }
        }
        return str;
    },

    padRight: function(str, len, chr) {
        return this.padLeft(str, len, chr, true);
    },

    format: function (format) {
        var args = this.arg2arr(arguments, 1), arg;
        return format.replace(/\{(\d+)\}/g, function (m, i) {
            return (arg = args[i], (arg === null || arg === undefined) ? '' : arg);
        });
    },

    trim: function (str, set) {
        str = str || ''; set = set || {};
        if (set.find) {
            var exp = this.format('^{0}+|{0}+$', set.find);
            return str.replace(new RegExp(exp, 'g'), set.hold || '');
        } else if (set.findEnd) {
            var exp = this.format('{0}+$', set.findEnd);
            return str.replace(new RegExp(exp, 'g'), set.hold || '');
        } else if (set.findStart) {
            var exp = this.format('^{0}+', set.findStart);
            return str.replace(new RegExp(exp, 'g'), set.hold || '');
        } else {
            return str.replace(/^\s+|\s+$/g, set.hold || '');
        }
    },

    readObj: function(obj, namespace) {
        var names = namespace.split(/\.|\[|\]|\(/), ret = obj;
        this.each(names, function (i, key) { if (key && ret) { ret = (isNaN(key) ? (key === ')' ? ret() : ret[key]) : ret[parseInt(key, 10)]); } });
        return ret;
    },

    mapObj: function(obj, namespace, dft) {
        var parts = namespace.split(/\.|\[|\]/), names = [];
        this.each(parts, function (i, key) { if (key) { names.push(key); } });
        var lastName = names[names.length - 1], curr = obj = (obj || {}), prev;
        this.each(names, function (i, key) { prev = curr; curr = (curr[key] ? curr[key] : (curr[key] = isNaN(names[i + 1]) ? {} : [])); });
        if (prev) { prev[lastName] = dft; }
        return obj;
    }
};

}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../jsg/utilities.js","/../jsg")
},{"buffer":24,"oMfpAn":27}],24:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192

/**
 * If `Buffer._useTypedArrays`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (compatible down to IE6)
 */
Buffer._useTypedArrays = (function () {
  // Detect if browser supports Typed Arrays. Supported browsers are IE 10+, Firefox 4+,
  // Chrome 7+, Safari 5.1+, Opera 11.6+, iOS 4.2+. If the browser does not support adding
  // properties to `Uint8Array` instances, then that's the same as no `Uint8Array` support
  // because we need to be able to add all the node Buffer API methods. This is an issue
  // in Firefox 4-29. Now fixed: https://bugzilla.mozilla.org/show_bug.cgi?id=695438
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() &&
        typeof arr.subarray === 'function' // Chrome 9-10 lack `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Workaround: node's base64 implementation allows for non-padded strings
  // while base64-js does not.
  if (encoding === 'base64' && type === 'string') {
    subject = stringtrim(subject)
    while (subject.length % 4 !== 0) {
      subject = subject + '='
    }
  }

  // Find the length
  var length
  if (type === 'number')
    length = coerce(subject)
  else if (type === 'string')
    length = Buffer.byteLength(subject, encoding)
  else if (type === 'object')
    length = coerce(subject.length) // assume that object is array-like
  else
    throw new Error('First argument needs to be a number, array or string.')

  var buf
  if (Buffer._useTypedArrays) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer._useTypedArrays && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    for (i = 0; i < length; i++) {
      if (Buffer.isBuffer(subject))
        buf[i] = subject.readUInt8(i)
      else
        buf[i] = subject[i]
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

// STATIC METHODS
// ==============

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.isBuffer = function (b) {
  return !!(b !== null && b !== undefined && b._isBuffer)
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list, [totalLength])\n' +
      'list should be an Array.')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (typeof totalLength !== 'number') {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

// BUFFER INSTANCE METHODS
// =======================

function _hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  assert(strLen % 2 === 0, 'Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    assert(!isNaN(byte), 'Invalid hex string')
    buf[offset + i] = byte
  }
  Buffer._charsWritten = i * 2
  return i
}

function _utf8Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function _asciiWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function _binaryWrite (buf, string, offset, length) {
  return _asciiWrite(buf, string, offset, length)
}

function _base64Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function _utf16leWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = _asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = _binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = _base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leWrite(this, string, offset, length)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this

  encoding = String(encoding || 'utf8').toLowerCase()
  start = Number(start) || 0
  end = (end !== undefined)
    ? Number(end)
    : end = self.length

  // Fastpath empty strings
  if (end === start)
    return ''

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexSlice(self, start, end)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Slice(self, start, end)
      break
    case 'ascii':
      ret = _asciiSlice(self, start, end)
      break
    case 'binary':
      ret = _binarySlice(self, start, end)
      break
    case 'base64':
      ret = _base64Slice(self, start, end)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leSlice(self, start, end)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  assert(end >= start, 'sourceEnd < sourceStart')
  assert(target_start >= 0 && target_start < target.length,
      'targetStart out of bounds')
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds')
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 100 || !Buffer._useTypedArrays) {
    for (var i = 0; i < len; i++)
      target[i + target_start] = this[i + start]
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

function _base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function _utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function _asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++)
    ret += String.fromCharCode(buf[i])
  return ret
}

function _binarySlice (buf, start, end) {
  return _asciiSlice(buf, start, end)
}

function _hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function _utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i+1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = clamp(start, len, 0)
  end = clamp(end, len, len)

  if (Buffer._useTypedArrays) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  return this[offset]
}

function _readUInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    val = buf[offset]
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
  } else {
    val = buf[offset] << 8
    if (offset + 1 < len)
      val |= buf[offset + 1]
  }
  return val
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return _readUInt16(this, offset, true, noAssert)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return _readUInt16(this, offset, false, noAssert)
}

function _readUInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    if (offset + 2 < len)
      val = buf[offset + 2] << 16
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
    val |= buf[offset]
    if (offset + 3 < len)
      val = val + (buf[offset + 3] << 24 >>> 0)
  } else {
    if (offset + 1 < len)
      val = buf[offset + 1] << 16
    if (offset + 2 < len)
      val |= buf[offset + 2] << 8
    if (offset + 3 < len)
      val |= buf[offset + 3]
    val = val + (buf[offset] << 24 >>> 0)
  }
  return val
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return _readUInt32(this, offset, true, noAssert)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return _readUInt32(this, offset, false, noAssert)
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null,
        'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  var neg = this[offset] & 0x80
  if (neg)
    return (0xff - this[offset] + 1) * -1
  else
    return this[offset]
}

function _readInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt16(buf, offset, littleEndian, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return _readInt16(this, offset, true, noAssert)
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return _readInt16(this, offset, false, noAssert)
}

function _readInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt32(buf, offset, littleEndian, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return _readInt32(this, offset, true, noAssert)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return _readInt32(this, offset, false, noAssert)
}

function _readFloat (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4)
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return _readFloat(this, offset, true, noAssert)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return _readFloat(this, offset, false, noAssert)
}

function _readDouble (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return _readDouble(this, offset, true, noAssert)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return _readDouble(this, offset, false, noAssert)
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'trying to write beyond buffer length')
    verifuint(value, 0xff)
  }

  if (offset >= this.length) return

  this[offset] = value
}

function _writeUInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] =
        (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, false, noAssert)
}

function _writeUInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffffffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] =
        (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, false, noAssert)
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7f, -0x80)
  }

  if (offset >= this.length)
    return

  if (value >= 0)
    this.writeUInt8(value, offset, noAssert)
  else
    this.writeUInt8(0xff + value + 1, offset, noAssert)
}

function _writeInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fff, -0x8000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt16(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, false, noAssert)
}

function _writeInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fffffff, -0x80000000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt32(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, false, noAssert)
}

function _writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 23, 4)
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, false, noAssert)
}

function _writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 7 < buf.length,
        'Trying to write beyond buffer length')
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 52, 8)
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, false, noAssert)
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (typeof value === 'string') {
    value = value.charCodeAt(0)
  }

  assert(typeof value === 'number' && !isNaN(value), 'value is not a number')
  assert(end >= start, 'end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  assert(start >= 0 && start < this.length, 'start out of bounds')
  assert(end >= 0 && end <= this.length, 'end out of bounds')

  for (var i = start; i < end; i++) {
    this[i] = value
  }
}

Buffer.prototype.inspect = function () {
  var out = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i])
    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...'
      break
    }
  }
  return '<Buffer ' + out.join(' ') + '>'
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer._useTypedArrays) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1)
        buf[i] = this[i]
      return buf.buffer
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

// slice(start, end)
function clamp (index, len, defaultValue) {
  if (typeof index !== 'number') return defaultValue
  index = ~~index;  // Coerce to integer.
  if (index >= len) return len
  if (index >= 0) return index
  index += len
  if (index >= 0) return index
  return 0
}

function coerce (length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length)
  return length < 0 ? 0 : length
}

function isArray (subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]'
  })(subject)
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F)
      byteArray.push(str.charCodeAt(i))
    else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++)
        byteArray.push(parseInt(h[j], 16))
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  var pos
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */
function verifuint (value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value >= 0, 'specified a negative value for writing an unsigned value')
  assert(value <= max, 'value is larger than maximum value for type')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifsint (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifIEEE754 (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
}

function assert (test, message) {
  if (!test) throw new Error(message || 'Failed assertion')
}

}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/index.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer")
},{"base64-js":25,"buffer":24,"ieee754":26,"oMfpAn":27}],25:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS)
			return 62 // '+'
		if (code === SLASH)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")
},{"buffer":24,"oMfpAn":27}],26:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
exports.read = function(buffer, offset, isLE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754")
},{"buffer":24,"oMfpAn":27}],27:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process/browser.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process")
},{"buffer":24,"oMfpAn":27}]},{},[11])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvc2h1cWl1L0Rlc2t0b3AvdGVjaG5vbG9neS9qZC9ydWxlZS9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc2h1cWl1L0Rlc2t0b3AvdGVjaG5vbG9neS9qZC9ydWxlZS9jbXMvanMvY29udHJvbGxlcnMvYWxsLmpzIiwiL1VzZXJzL3NodXFpdS9EZXNrdG9wL3RlY2hub2xvZ3kvamQvcnVsZWUvY21zL2pzL2NvbnRyb2xsZXJzL2hvbWUtY29udHJvbGxlci5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9qcy9jb250cm9sbGVycy9tYWluLWNvbnRyb2xsZXIuanMiLCIvVXNlcnMvc2h1cWl1L0Rlc2t0b3AvdGVjaG5vbG9neS9qZC9ydWxlZS9jbXMvanMvZGF0YXNlcnZpY2UvYWxsLmpzIiwiL1VzZXJzL3NodXFpdS9EZXNrdG9wL3RlY2hub2xvZ3kvamQvcnVsZWUvY21zL2pzL2RhdGFzZXJ2aWNlL2Jsb2ctc2VydmljZS5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9qcy9kaXJlY3RpdmVzL2FsbC5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9qcy9kaXJlY3RpdmVzL2Zvb3Rlci5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9qcy9kaXJlY3RpdmVzL2hlYWRlci5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9qcy9kaXJlY3RpdmVzL2ltZ3NyYy5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9qcy9kaXJlY3RpdmVzL21lbnUuanMiLCIvVXNlcnMvc2h1cWl1L0Rlc2t0b3AvdGVjaG5vbG9neS9qZC9ydWxlZS9jbXMvanMvZmFrZV9lMTY5NDQzOS5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9qcy9maWx0ZXJzL2FsbC5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9qcy9maWx0ZXJzL2kxOG4uanMiLCIvVXNlcnMvc2h1cWl1L0Rlc2t0b3AvdGVjaG5vbG9neS9qZC9ydWxlZS9jbXMvanMvbGlicy9hbmd1bGFyL2FsbC5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9qcy9saWJzL2FuZ3VsYXIvYW5ndWxhci1hbmltYXRlLm1pbi5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9qcy9saWJzL2FuZ3VsYXIvYW5ndWxhci1yZXNvdXJjZS5taW4uanMiLCIvVXNlcnMvc2h1cWl1L0Rlc2t0b3AvdGVjaG5vbG9neS9qZC9ydWxlZS9jbXMvanMvbGlicy9hbmd1bGFyL2FuZ3VsYXItcm91dGUubWluLmpzIiwiL1VzZXJzL3NodXFpdS9EZXNrdG9wL3RlY2hub2xvZ3kvamQvcnVsZWUvY21zL2pzL2xpYnMvYW5ndWxhci9hbmd1bGFyLXRvdWNoLm1pbi5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9qcy9saWJzL2FuZ3VsYXIvYW5ndWxhci5taW4uanMiLCIvVXNlcnMvc2h1cWl1L0Rlc2t0b3AvdGVjaG5vbG9neS9qZC9ydWxlZS9jbXMvanMvbGlicy9oYXNTY3JvbGwuanMiLCIvVXNlcnMvc2h1cWl1L0Rlc2t0b3AvdGVjaG5vbG9neS9qZC9ydWxlZS9jbXMvanMvbGlicy9wYXJzZVVybC5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9qcy9saWJzL3V0aWxpdGllcy5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9qc2cvdXRpbGl0aWVzLmpzIiwiL1VzZXJzL3NodXFpdS9EZXNrdG9wL3RlY2hub2xvZ3kvamQvcnVsZWUvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwiL1VzZXJzL3NodXFpdS9EZXNrdG9wL3RlY2hub2xvZ3kvamQvcnVsZWUvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliL2I2NC5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdmxDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxuKiBjb250cm9sbGVyc1xuKiBhdXRob3I6IHJvbmdsaW5cbiogY3JlYXRlIGRhdGU6IDIwMTQuNS40XG4qL1xuXG52YXIgbmFtZSA9IG1vZHVsZS5leHBvcnRzLm5hbWUgPSAnY21zLmNvbnRyb2xsZXJzJztcblxuYW5ndWxhci5tb2R1bGUobmFtZSwgW10pXG4uY29udHJvbGxlcignTWFpbkN0cmwnLCByZXF1aXJlKCcuL21haW4tY29udHJvbGxlcicpKVxuLmNvbnRyb2xsZXIoJ0hvbWVDdHJsJywgcmVxdWlyZSgnLi9ob21lLWNvbnRyb2xsZXInKSk7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm9NZnBBblwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2NvbnRyb2xsZXJzL2FsbC5qc1wiLFwiL2NvbnRyb2xsZXJzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcbiogaG9tZS1jb250cm9sbGVyXG4qIGF1dGhvcjogcm9uZ2xpblxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjRcbiovXG5cbm1vZHVsZS5leHBvcnRzID0gWyckc2NvcGUnLCAnQmxvZ3MnLCBmdW5jdGlvbiAoJHNjb3BlLCBCbG9ncykge1xuICAgICRzY29wZS5ibG9ncyA9IEJsb2dzLnF1ZXJ5KDIwKTtcbn1dO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJvTWZwQW5cIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb250cm9sbGVycy9ob21lLWNvbnRyb2xsZXIuanNcIixcIi9jb250cm9sbGVyc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXG4qIG1haW4tY29udHJvbGxlclxuKiBhdXRob3I6IHJvbmdsaW5cbiogY3JlYXRlIGRhdGU6IDIwMTQuNS40XG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFsnJHNjb3BlJywgJyRyb290U2NvcGUnLCAnJHdpbmRvdycsICckbG9jYXRpb24nLCBmdW5jdGlvbiAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkd2luZG93LCAkbG9jYXRpb24pIHtcbiAgICAkc2NvcGUuc2xpZGUgPSAnJztcbiAgICAkcm9vdFNjb3BlLmJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRzY29wZS5zbGlkZSA9ICdzbGlkZS1yaWdodCc7XG4gICAgICAgICR3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfTtcbiAgICAkcm9vdFNjb3BlLmdvID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgJHNjb3BlLnNsaWRlID0gJ3NsaWRlLWxlZnQnO1xuICAgICAgICAkbG9jYXRpb24udXJsKHBhdGgpO1xuICAgIH07XG59XTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwib01mcEFuXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvY29udHJvbGxlcnMvbWFpbi1jb250cm9sbGVyLmpzXCIsXCIvY29udHJvbGxlcnNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxuKiBkYXRhIHNlcnZpY2VcbiogYXV0aG9yOiByb25nbGluXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuNFxuKi9cblxudmFyIG5hbWUgPSBtb2R1bGUuZXhwb3J0cy5uYW1lID0gJ2Ntcy5kYXRhU2VydmljZSc7XG5cbmFuZ3VsYXIubW9kdWxlKG5hbWUsIFtdKVxuLmZhY3RvcnkoJ0Jsb2dzJywgcmVxdWlyZSgnLi9ibG9nLXNlcnZpY2UnKSk7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm9NZnBBblwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2RhdGFzZXJ2aWNlL2FsbC5qc1wiLFwiL2RhdGFzZXJ2aWNlXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcbiogYmxvZy1zZXJ2aWNlXG4qIGF1dGhvcjogcm9uZ2xpblxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjRcbiovXG5cbm1vZHVsZS5leHBvcnRzID0gW2Z1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBxdWVyeTogZnVuY3Rpb24gKHRha2UpIHtcbiAgICAgICAgXHRyZXR1cm4gW3tcbiAgICAgICAgXHRcdHRpdGxlOid0aXRsZTEnLFxuICAgICAgICBcdFx0Y29udGVudDonY29udGVudDEnXG4gICAgICAgIFx0fSx7XG4gICAgICAgIFx0XHR0aXRsZTondGl0bGUyJyxcbiAgICAgICAgXHRcdGNvbnRlbnQ6J2NvbnRlbnQyJ1xuICAgICAgICBcdH0se1xuICAgICAgICBcdFx0dGl0bGU6J3RpdGxlMycsXG4gICAgICAgIFx0XHRjb250ZW50Oidjb250ZW50MydcbiAgICAgICAgXHR9LHtcbiAgICAgICAgXHRcdHRpdGxlOid0aXRsZTQnLFxuICAgICAgICBcdFx0Y29udGVudDonY29udGVudDQnXG4gICAgICAgIFx0fSx7XG4gICAgICAgIFx0XHR0aXRsZTondGl0bGU1JyxcbiAgICAgICAgXHRcdGNvbnRlbnQ6J2NvbnRlbnQ1J1xuICAgICAgICBcdH1dO1xuICAgICAgICB9XG4gICAgfTtcbn1dO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJvTWZwQW5cIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9kYXRhc2VydmljZS9ibG9nLXNlcnZpY2UuanNcIixcIi9kYXRhc2VydmljZVwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXG4qIGRpcmVjdGl2ZXNcbiogYXV0aG9yOiByb25nbGluXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuNFxuKi9cblxudmFyIG5hbWUgPSBtb2R1bGUuZXhwb3J0cy5uYW1lID0gJ2Ntcy5kaXJlY3RpdmVzJztcblxuYW5ndWxhci5tb2R1bGUobmFtZSwgW10pXG4uZGlyZWN0aXZlKCdjbXNIZWFkZXInLCByZXF1aXJlKCcuL2hlYWRlcicpKVxuLmRpcmVjdGl2ZSgnY21zRm9vdGVyJywgcmVxdWlyZSgnLi9mb290ZXInKSlcbi5kaXJlY3RpdmUoJ2Ntc01lbnUnLCByZXF1aXJlKCcuL21lbnUnKSlcbi5kaXJlY3RpdmUoJ2ltZ1NyYycsIHJlcXVpcmUoJy4vaW1nc3JjJykpO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJvTWZwQW5cIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9kaXJlY3RpdmVzL2FsbC5qc1wiLFwiL2RpcmVjdGl2ZXNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxuKiBmb290ZXJcbiogYXV0aG9yOiByb25nbGluXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuNFxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSBbJ3V0aWxzJywgZnVuY3Rpb24odXRpbHMpIHtcblx0cmV0dXJuIHtcblx0XHR0ZW1wbGF0ZVVybDogdXRpbHMudmlld1VybCgndmlld3MvZGlyZWN0aXZlcy9mb290ZXIuaHRtbCcpLFxuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZVxuXHR9O1xufV07XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm9NZnBBblwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2RpcmVjdGl2ZXMvZm9vdGVyLmpzXCIsXCIvZGlyZWN0aXZlc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXG4qIGhlYWRlclxuKiBhdXRob3I6IHJvbmdsaW5cbiogY3JlYXRlIGRhdGU6IDIwMTQuNS40XG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFsndXRpbHMnLCBmdW5jdGlvbih1dGlscykge1xuXHRyZXR1cm4ge1xuXHRcdHRlbXBsYXRlVXJsOiB1dGlscy52aWV3VXJsKCd2aWV3cy9kaXJlY3RpdmVzL2hlYWRlci5odG1sJyksXG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7XG5cdFx0XHRjdXJyZW50OiAnQGN1cnJlbnQnXG5cdFx0fVxuXHR9O1xufV07XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm9NZnBBblwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2RpcmVjdGl2ZXMvaGVhZGVyLmpzXCIsXCIvZGlyZWN0aXZlc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXG4qIHNyY1xuKiBhdXRob3I6IHJvbmdsaW5cbiogY3JlYXRlIGRhdGU6IDIwMTQuNi4xOVxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSBbJ3V0aWxzJywgZnVuY3Rpb24odXRpbHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgXHRpZiAoZWxlbWVudC5wcm9wKCd0YWdOYW1lJykgPT09ICdJTUcnKSB7XG4gICAgICAgIFx0XHR2YXIgaW1nID0gdXRpbHMudHJpbShhdHRycy5pbWdTcmMsIHsgZmluZDogJy8nfSk7XG4gICAgICAgIFx0XHRlbGVtZW50LmF0dHIoJ3NyYycsIHV0aWxzLmZvcm1hdCgnaW1nL3swfScsIGltZykpO1xuICAgICAgICBcdH1cbiAgICAgICAgfVxuICAgIH07XG59XTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwib01mcEFuXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvZGlyZWN0aXZlcy9pbWdzcmMuanNcIixcIi9kaXJlY3RpdmVzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcbiogbWVudVxuKiBhdXRob3I6IHJvbmdsaW5cbiogY3JlYXRlIGRhdGU6IDIwMTQuNi4xOFxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSBbJ3V0aWxzJywgZnVuY3Rpb24odXRpbHMpIHtcbiAgICAvLyByZXRcbiAgICByZXR1cm4ge1xuICAgICAgICBzY29wZTogeyBjdXJyZW50OiAnQCcgfSxcbiAgICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgICAgICAgICRzY29wZS5zaG93UGFnZSA9IGZ1bmN0aW9uKHBhZ2UpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuY3VycmVudCA9IHBhZ2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XSxcbiAgICAgICAgdGVtcGxhdGVVcmw6IHV0aWxzLnZpZXdVcmwoJ3ZpZXdzL2RpcmVjdGl2ZXMvbWVudS5odG1sJyksXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHJlcGxhY2U6IHRydWVcbiAgICB9O1xufV07XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm9NZnBBblwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2RpcmVjdGl2ZXMvbWVudS5qc1wiLFwiL2RpcmVjdGl2ZXNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxuKiBtYWluXG4qIGF1dGhvcjogcm9uZ2xpblxuKiBjcmVhdGUgZGF0ZTogMjAxNC40LjIyXG4qL1xuXG4ndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4vbGlicy9hbmd1bGFyL2FsbCcpO1xudmFyIHV0aWxpdGllc05hbWUgPSAnY21zLnV0aWxpdGllcyc7XG5hbmd1bGFyLm1vZHVsZSh1dGlsaXRpZXNOYW1lLCBbXSkuY29uc3RhbnQoJ3V0aWxzJywgcmVxdWlyZSgnLi9saWJzL3V0aWxpdGllcycpKTtcblxudmFyIGZpbHRlcnMgPSByZXF1aXJlKCcuL2ZpbHRlcnMvYWxsJyk7XG52YXIgZGlyZWN0aXZlcyA9IHJlcXVpcmUoJy4vZGlyZWN0aXZlcy9hbGwnKTtcbnZhciBkYXRhU2VydmljZSA9IHJlcXVpcmUoJy4vZGF0YXNlcnZpY2UvYWxsJyk7XG52YXIgY29udHJvbGxlcnMgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2FsbCcpO1xuXG52YXIgY21zID0gYW5ndWxhci5tb2R1bGUoJ2NtcycsIFtcbiAgICAnbmdUb3VjaCcsXG4gICAgJ25nUm91dGUnLFxuICAgICduZ0FuaW1hdGUnLFxuICAgIHV0aWxpdGllc05hbWUsXG4gICAgZmlsdGVycy5uYW1lLFxuICAgIGRpcmVjdGl2ZXMubmFtZSxcbiAgICBkYXRhU2VydmljZS5uYW1lLFxuICAgIGNvbnRyb2xsZXJzLm5hbWVcbl0pO1xuXG5jbXMuY29uZmlnKFsnJHJvdXRlUHJvdmlkZXInLCAndXRpbHMnLCBmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIsIHV0aWxzKSB7XG4gICAgJHJvdXRlUHJvdmlkZXIud2hlbignL2hvbWUnLCB7IHRlbXBsYXRlVXJsOiB1dGlscy52aWV3VXJsKCd2aWV3cy9ob21lLmh0bWwnKSwgY29udHJvbGxlcjogJ0hvbWVDdHJsJyB9KTtcbiAgICAkcm91dGVQcm92aWRlci53aGVuKCcvYWJvdXQnLCB7IHRlbXBsYXRlVXJsOiB1dGlscy52aWV3VXJsKCd2aWV3cy9hYm91dC5odG1sJykgfSk7XG4gICAgJHJvdXRlUHJvdmlkZXIud2hlbignL2Jsb2cnLCB7IHRlbXBsYXRlVXJsOiB1dGlscy52aWV3VXJsKCd2aWV3cy9ibG9nLmh0bWwnKSB9KTtcbiAgICAkcm91dGVQcm92aWRlci5vdGhlcndpc2UoeyByZWRpcmVjdFRvOiAnL2hvbWUnIH0pO1xufV0pO1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm9NZnBBblwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2Zha2VfZTE2OTQ0MzkuanNcIixcIi9cIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxuKiBmaWx0ZXJzXG4qIGF1dGhvcjogcm9uZ2xpblxuKiBjcmVhdGUgZGF0ZTogMjAxNC42LjE4XG4qL1xuXG52YXIgbmFtZSA9IG1vZHVsZS5leHBvcnRzLm5hbWUgPSAnY21zLmZpbHRlcnMnO1xuXG5hbmd1bGFyLm1vZHVsZShuYW1lLCBbXSlcbi5maWx0ZXIoJ2kxOG4nLCByZXF1aXJlKCcuL2kxOG4nKSk7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm9NZnBBblwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2ZpbHRlcnMvYWxsLmpzXCIsXCIvZmlsdGVyc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXG4qIGkxOG5cbiogYXV0aG9yOiByb25nbGluXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjYuMThcbiovXG5cbm1vZHVsZS5leHBvcnRzID0gWyd1dGlscycsIGZ1bmN0aW9uKHV0aWxzKSB7XG5cdHJldHVybiBmdW5jdGlvbihrZXkpIHtcblx0XHRyZXR1cm4gdXRpbHMuaTE4bihrZXksIGtleSk7XG5cdH07XG59XTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwib01mcEFuXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvZmlsdGVycy9pMThuLmpzXCIsXCIvZmlsdGVyc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXG4qIGFsbCBhbmd1bGFyXG4qIGF1dGhvcjogcm9uZ2xpblxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjRcbiovXG5cbnJlcXVpcmUoJy4vYW5ndWxhci5taW4nKTtcbnJlcXVpcmUoJy4vYW5ndWxhci10b3VjaC5taW4nKTtcbnJlcXVpcmUoJy4vYW5ndWxhci1yZXNvdXJjZS5taW4nKTtcbnJlcXVpcmUoJy4vYW5ndWxhci1hbmltYXRlLm1pbicpO1xucmVxdWlyZSgnLi9hbmd1bGFyLXJvdXRlLm1pbicpO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJvTWZwQW5cIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9saWJzL2FuZ3VsYXIvYWxsLmpzXCIsXCIvbGlicy9hbmd1bGFyXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcbiBBbmd1bGFySlMgdjEuMi4xMlxuIChjKSAyMDEwLTIwMTQgR29vZ2xlLCBJbmMuIGh0dHA6Ly9hbmd1bGFyanMub3JnXG4gTGljZW5zZTogTUlUXG4qL1xuKGZ1bmN0aW9uKHYsayx0KXsndXNlIHN0cmljdCc7ay5tb2R1bGUoXCJuZ0FuaW1hdGVcIixbXCJuZ1wiXSkuZmFjdG9yeShcIiQkYW5pbWF0ZVJlZmxvd1wiLFtcIiR3aW5kb3dcIixcIiR0aW1lb3V0XCIsZnVuY3Rpb24oayxCKXt2YXIgZD1rLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8ay53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKGQpe3JldHVybiBCKGQsMTAsITEpfSxxPWsuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fGsud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKGQpe3JldHVybiBCLmNhbmNlbChkKX07cmV0dXJuIGZ1bmN0aW9uKHApe3ZhciBrPWQocCk7cmV0dXJuIGZ1bmN0aW9uKCl7cShrKX19fV0pLmNvbmZpZyhbXCIkcHJvdmlkZVwiLFwiJGFuaW1hdGVQcm92aWRlclwiLGZ1bmN0aW9uKFIsQil7ZnVuY3Rpb24gZChkKXtmb3IodmFyIGs9MDtrPGQubGVuZ3RoO2srKyl7dmFyIHA9ZFtrXTtpZihwLm5vZGVUeXBlPT1YKXJldHVybiBwfX12YXIgcT1rLm5vb3AsXG5wPWsuZm9yRWFjaCwkPUIuJCRzZWxlY3RvcnMsWD0xLGw9XCIkJG5nQW5pbWF0ZVN0YXRlXCIsSz1cIm5nLWFuaW1hdGVcIixtPXtydW5uaW5nOiEwfTtSLmRlY29yYXRvcihcIiRhbmltYXRlXCIsW1wiJGRlbGVnYXRlXCIsXCIkaW5qZWN0b3JcIixcIiRzbmlmZmVyXCIsXCIkcm9vdEVsZW1lbnRcIixcIiR0aW1lb3V0XCIsXCIkcm9vdFNjb3BlXCIsXCIkZG9jdW1lbnRcIixmdW5jdGlvbihDLHYsdCxILHksdyxOKXtmdW5jdGlvbiBJKGEpe2lmKGEpe3ZhciBnPVtdLGU9e307YT1hLnN1YnN0cigxKS5zcGxpdChcIi5cIik7KHQudHJhbnNpdGlvbnN8fHQuYW5pbWF0aW9ucykmJmEucHVzaChcIlwiKTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGY9YVtjXSxkPSRbZl07ZCYmIWVbZl0mJihnLnB1c2godi5nZXQoZCkpLGVbZl09ITApfXJldHVybiBnfX1mdW5jdGlvbiByKGEsZyxlLGMsZixrLG0pe2Z1bmN0aW9uIHQoYSl7bigpO2lmKCEwPT09YSl6KCk7ZWxzZXtpZihhPWUuZGF0YShsKSlhLmRvbmU9eixlLmRhdGEobCxcbmEpO0MoRCxcImFmdGVyXCIseil9fWZ1bmN0aW9uIEMoYyxkLGYpe1wiYWZ0ZXJcIj09ZD9yKCk6RSgpO3ZhciBrPWQrXCJFbmRcIjtwKGMsZnVuY3Rpb24oYixhYSl7dmFyIGg9ZnVuY3Rpb24oKXthOnt2YXIgYj1kK1wiQ29tcGxldGVcIixhPWNbYWFdO2FbYl09ITA7KGFba118fHEpKCk7Zm9yKGE9MDthPGMubGVuZ3RoO2ErKylpZighY1thXVtiXSlicmVhayBhO2YoKX19O1wiYmVmb3JlXCIhPWR8fFwiZW50ZXJcIiE9YSYmXCJtb3ZlXCIhPWE/YltkXT9iW2tdPXU/YltkXShlLGcsaCk6YltkXShlLGgpOmgoKTpoKCl9KX1mdW5jdGlvbiB3KGMpe2UudHJpZ2dlckhhbmRsZXIoXCIkYW5pbWF0ZTpcIitjLHtldmVudDphLGNsYXNzTmFtZTpnfSl9ZnVuY3Rpb24gRSgpe3koZnVuY3Rpb24oKXt3KFwiYmVmb3JlXCIpfSwwLCExKX1mdW5jdGlvbiByKCl7eShmdW5jdGlvbigpe3coXCJhZnRlclwiKX0sMCwhMSl9ZnVuY3Rpb24gdigpe3koZnVuY3Rpb24oKXt3KFwiY2xvc2VcIik7bSYmbSgpfSwwLCExKX1mdW5jdGlvbiBuKCl7bi5oYXNCZWVuUnVufHxcbihuLmhhc0JlZW5SdW49ITAsaygpKX1mdW5jdGlvbiB6KCl7aWYoIXouaGFzQmVlblJ1bil7ei5oYXNCZWVuUnVuPSEwO3ZhciBhPWUuZGF0YShsKTthJiYodT9BKGUpOihhLmNsb3NlQW5pbWF0aW9uVGltZW91dD15KGZ1bmN0aW9uKCl7QShlKX0sMCwhMSksZS5kYXRhKGwsYSkpKTt2KCl9fXZhciBzLHgsRz1kKGUpO0cmJihzPUcuY2xhc3NOYW1lLHg9cytcIiBcIitnKTtpZihHJiZMKHgpKXt4PShcIiBcIit4KS5yZXBsYWNlKC9cXHMrL2csXCIuXCIpO2N8fChjPWY/Zi5wYXJlbnQoKTplLnBhcmVudCgpKTt4PUkoeCk7dmFyIHU9XCJhZGRDbGFzc1wiPT1hfHxcInJlbW92ZUNsYXNzXCI9PWE7Zj1lLmRhdGEobCl8fHt9O2lmKGJhKGUsYyl8fDA9PT14Lmxlbmd0aCluKCksRSgpLHIoKSx6KCk7ZWxzZXt2YXIgRD1bXTt1JiYoZi5kaXNhYmxlZHx8Zi5ydW5uaW5nJiZmLnN0cnVjdHVyYWwpfHxwKHgsZnVuY3Rpb24oYyl7aWYoIWMuYWxsb3dDYW5jZWx8fGMuYWxsb3dDYW5jZWwoZSxhLGcpKXt2YXIgZD1cbmNbYV07XCJsZWF2ZVwiPT1hPyhjPWQsZD1udWxsKTpjPWNbXCJiZWZvcmVcIithLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Euc3Vic3RyKDEpXTtELnB1c2goe2JlZm9yZTpjLGFmdGVyOmR9KX19KTswPT09RC5sZW5ndGg/KG4oKSxFKCkscigpLHYoKSk6KGM9XCIgXCIrcytcIiBcIixmLnJ1bm5pbmcmJih5LmNhbmNlbChmLmNsb3NlQW5pbWF0aW9uVGltZW91dCksQShlKSxKKGYuYW5pbWF0aW9ucykseD0ocz11JiYhZi5zdHJ1Y3R1cmFsKSYmZi5jbGFzc05hbWU9PWcmJmEhPWYuZXZlbnQsZi5iZWZvcmVDb21wbGV0ZXx8eD8oZi5kb25lfHxxKSghMCk6cyYmKGM9XCJyZW1vdmVDbGFzc1wiPT1mLmV2ZW50P2MucmVwbGFjZShcIiBcIitmLmNsYXNzTmFtZStcIiBcIixcIiBcIik6YytmLmNsYXNzTmFtZStcIiBcIikpLHM9XCIgXCIrZytcIiBcIixcImFkZENsYXNzXCI9PWEmJjA8PWMuaW5kZXhPZihzKXx8XCJyZW1vdmVDbGFzc1wiPT1hJiYtMT09Yy5pbmRleE9mKHMpPyhuKCksRSgpLHIoKSx2KCkpOihlLmFkZENsYXNzKEspLFxuZS5kYXRhKGwse3J1bm5pbmc6ITAsZXZlbnQ6YSxjbGFzc05hbWU6ZyxzdHJ1Y3R1cmFsOiF1LGFuaW1hdGlvbnM6RCxkb25lOnR9KSxDKEQsXCJiZWZvcmVcIix0KSkpfX1lbHNlIG4oKSxFKCkscigpLHooKX1mdW5jdGlvbiBRKGEpe2E9ZChhKTtwKGEucXVlcnlTZWxlY3RvckFsbChcIi5cIitLKSxmdW5jdGlvbihhKXthPWsuZWxlbWVudChhKTt2YXIgZT1hLmRhdGEobCk7ZSYmKEooZS5hbmltYXRpb25zKSxBKGEpKX0pfWZ1bmN0aW9uIEooYSl7cChhLGZ1bmN0aW9uKGEpe2EuYmVmb3JlQ29tcGxldGV8fChhLmJlZm9yZUVuZHx8cSkoITApO2EuYWZ0ZXJDb21wbGV0ZXx8KGEuYWZ0ZXJFbmR8fHEpKCEwKX0pfWZ1bmN0aW9uIEEoYSl7ZChhKT09ZChIKT9tLmRpc2FibGVkfHwobS5ydW5uaW5nPSExLG0uc3RydWN0dXJhbD0hMSk6KGEucmVtb3ZlQ2xhc3MoSyksYS5yZW1vdmVEYXRhKGwpKX1mdW5jdGlvbiBiYShhLGcpe2lmKG0uZGlzYWJsZWQpcmV0dXJuITA7aWYoZChhKT09ZChIKSlyZXR1cm4gbS5kaXNhYmxlZHx8XG5tLnJ1bm5pbmc7ZG97aWYoMD09PWcubGVuZ3RoKWJyZWFrO3ZhciBlPWQoZyk9PWQoSCksYz1lP206Zy5kYXRhKGwpLGM9YyYmKCEhYy5kaXNhYmxlZHx8ISFjLnJ1bm5pbmcpO2lmKGV8fGMpcmV0dXJuIGM7aWYoZSlicmVha313aGlsZShnPWcucGFyZW50KCkpO3JldHVybiEwfUguZGF0YShsLG0pO3cuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7dy4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXttLnJ1bm5pbmc9ITF9KX0pO3ZhciBNPUIuY2xhc3NOYW1lRmlsdGVyKCksTD1NP2Z1bmN0aW9uKGEpe3JldHVybiBNLnRlc3QoYSl9OmZ1bmN0aW9uKCl7cmV0dXJuITB9O3JldHVybntlbnRlcjpmdW5jdGlvbihhLGQsZSxjKXt0aGlzLmVuYWJsZWQoITEsYSk7Qy5lbnRlcihhLGQsZSk7dy4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXtyKFwiZW50ZXJcIixcIm5nLWVudGVyXCIsYSxkLGUscSxjKX0pfSxsZWF2ZTpmdW5jdGlvbihhLGQpe1EoYSk7dGhpcy5lbmFibGVkKCExLGEpO3cuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7cihcImxlYXZlXCIsXG5cIm5nLWxlYXZlXCIsYSxudWxsLG51bGwsZnVuY3Rpb24oKXtDLmxlYXZlKGEpfSxkKX0pfSxtb3ZlOmZ1bmN0aW9uKGEsZCxlLGMpe1EoYSk7dGhpcy5lbmFibGVkKCExLGEpO0MubW92ZShhLGQsZSk7dy4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXtyKFwibW92ZVwiLFwibmctbW92ZVwiLGEsZCxlLHEsYyl9KX0sYWRkQ2xhc3M6ZnVuY3Rpb24oYSxkLGUpe3IoXCJhZGRDbGFzc1wiLGQsYSxudWxsLG51bGwsZnVuY3Rpb24oKXtDLmFkZENsYXNzKGEsZCl9LGUpfSxyZW1vdmVDbGFzczpmdW5jdGlvbihhLGQsZSl7cihcInJlbW92ZUNsYXNzXCIsZCxhLG51bGwsbnVsbCxmdW5jdGlvbigpe0MucmVtb3ZlQ2xhc3MoYSxkKX0sZSl9LGVuYWJsZWQ6ZnVuY3Rpb24oYSxkKXtzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7Y2FzZSAyOmlmKGEpQShkKTtlbHNle3ZhciBlPWQuZGF0YShsKXx8e307ZS5kaXNhYmxlZD0hMDtkLmRhdGEobCxlKX1icmVhaztjYXNlIDE6bS5kaXNhYmxlZD0hYTticmVhaztkZWZhdWx0OmE9XG4hbS5kaXNhYmxlZH1yZXR1cm4hIWF9fX1dKTtCLnJlZ2lzdGVyKFwiXCIsW1wiJHdpbmRvd1wiLFwiJHNuaWZmZXJcIixcIiR0aW1lb3V0XCIsXCIkJGFuaW1hdGVSZWZsb3dcIixmdW5jdGlvbihtLGwsQixIKXtmdW5jdGlvbiB5KGIsYSl7TyYmTygpO1UucHVzaChhKTt2YXIgaD1kKGIpO2I9ay5lbGVtZW50KGgpO1YucHVzaChiKTt2YXIgaD1iLmRhdGEobiksYz1oLnN0YWdnZXIsYz1oLml0ZW1JbmRleCooTWF0aC5tYXgoYy5hbmltYXRpb25EZWxheSxjLnRyYW5zaXRpb25EZWxheSl8fDApO1A9TWF0aC5tYXgoUCwoYysoaC5tYXhEZWxheStoLm1heER1cmF0aW9uKSpzKSp4KTtoLmFuaW1hdGlvbkNvdW50PUc7Tz1IKGZ1bmN0aW9uKCl7cChVLGZ1bmN0aW9uKGIpe2IoKX0pO3ZhciBiPVtdLGE9RztwKFYsZnVuY3Rpb24oYSl7Yi5wdXNoKGEpfSk7QihmdW5jdGlvbigpe3coYixhKTtiPW51bGx9LFAsITEpO1U9W107Vj1bXTtPPW51bGw7dT17fTtQPTA7RysrfSl9ZnVuY3Rpb24gdyhiLGEpe3AoYixcbmZ1bmN0aW9uKGIpeyhiPWIuZGF0YShuKSkmJmIuYW5pbWF0aW9uQ291bnQ9PWEmJihiLmNsb3NlQW5pbWF0aW9uRm58fHEpKCl9KX1mdW5jdGlvbiBOKGIsYSl7dmFyIGg9YT91W2FdOm51bGw7aWYoIWgpe3ZhciBkPTAsYz0wLGU9MCxrPTAsZyxuLGwscjtwKGIsZnVuY3Rpb24oYil7aWYoYi5ub2RlVHlwZT09WCl7Yj1tLmdldENvbXB1dGVkU3R5bGUoYil8fHt9O2w9YltmK1ldO2Q9TWF0aC5tYXgoSShsKSxkKTtyPWJbZitXXTtnPWJbZitFXTtjPU1hdGgubWF4KEkoZyksYyk7bj1iW0YrRV07az1NYXRoLm1heChJKG4pLGspO3ZhciBhPUkoYltGK1ldKTswPGEmJihhKj1wYXJzZUludChiW0YrUl0sMTApfHwxKTtlPU1hdGgubWF4KGEsZSl9fSk7aD17dG90YWw6MCx0cmFuc2l0aW9uUHJvcGVydHlTdHlsZTpyLHRyYW5zaXRpb25EdXJhdGlvblN0eWxlOmwsdHJhbnNpdGlvbkRlbGF5U3R5bGU6Zyx0cmFuc2l0aW9uRGVsYXk6Yyx0cmFuc2l0aW9uRHVyYXRpb246ZCxhbmltYXRpb25EZWxheVN0eWxlOm4sXG5hbmltYXRpb25EZWxheTprLGFuaW1hdGlvbkR1cmF0aW9uOmV9O2EmJih1W2FdPWgpfXJldHVybiBofWZ1bmN0aW9uIEkoYil7dmFyIGE9MDtiPWsuaXNTdHJpbmcoYik/Yi5zcGxpdCgvXFxzKixcXHMqLyk6W107cChiLGZ1bmN0aW9uKGIpe2E9TWF0aC5tYXgocGFyc2VGbG9hdChiKXx8MCxhKX0pO3JldHVybiBhfWZ1bmN0aW9uIHIoYil7dmFyIGE9Yi5wYXJlbnQoKSxoPWEuZGF0YShaKTtofHwoYS5kYXRhKFosKytEKSxoPUQpO3JldHVybiBoK1wiLVwiK2QoYikuY2xhc3NOYW1lfWZ1bmN0aW9uIFEoYixhLGgpe3ZhciBjPXIoYiksZT1jK1wiIFwiK2Esaz17fSxnPXVbZV0/Kyt1W2VdLnRvdGFsOjA7aWYoMDxnKXt2YXIgbD1hK1wiLXN0YWdnZXJcIixrPWMrXCIgXCIrbDsoYz0hdVtrXSkmJmIuYWRkQ2xhc3MobCk7az1OKGIsayk7YyYmYi5yZW1vdmVDbGFzcyhsKX1oPWh8fGZ1bmN0aW9uKGIpe3JldHVybiBiKCl9O2IuYWRkQ2xhc3MoYSk7aD1oKGZ1bmN0aW9uKCl7cmV0dXJuIE4oYixlKX0pO1xubD1NYXRoLm1heChoLnRyYW5zaXRpb25EZWxheSxoLmFuaW1hdGlvbkRlbGF5KTtjPU1hdGgubWF4KGgudHJhbnNpdGlvbkR1cmF0aW9uLGguYW5pbWF0aW9uRHVyYXRpb24pO2lmKDA9PT1jKXJldHVybiBiLnJlbW92ZUNsYXNzKGEpLCExO3ZhciBtPVwiXCI7MDxoLnRyYW5zaXRpb25EdXJhdGlvbj9kKGIpLnN0eWxlW2YrV109XCJub25lXCI6ZChiKS5zdHlsZVtGXT1cIm5vbmUgMHNcIjtwKGEuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGIsYSl7bSs9KDA8YT9cIiBcIjpcIlwiKStiK1wiLWFjdGl2ZVwifSk7Yi5kYXRhKG4se2NsYXNzTmFtZTphLGFjdGl2ZUNsYXNzTmFtZTptLG1heER1cmF0aW9uOmMsbWF4RGVsYXk6bCxjbGFzc2VzOmErXCIgXCIrbSx0aW1pbmdzOmgsc3RhZ2dlcjprLGl0ZW1JbmRleDpnfSk7cmV0dXJuITB9ZnVuY3Rpb24gSihiKXt2YXIgYT1mK1c7Yj1kKGIpO2Iuc3R5bGVbYV0mJjA8Yi5zdHlsZVthXS5sZW5ndGgmJihiLnN0eWxlW2FdPVwiXCIpfWZ1bmN0aW9uIEEoYil7dmFyIGE9RjtiPVxuZChiKTtiLnN0eWxlW2FdJiYwPGIuc3R5bGVbYV0ubGVuZ3RoJiYoYi5zdHlsZVthXT1cIlwiKX1mdW5jdGlvbiBLKGIsYSxoKXtmdW5jdGlvbiBlKGMpe2Iub2ZmKHYsayk7Yi5yZW1vdmVDbGFzcyhyKTtjPWI7Yy5yZW1vdmVDbGFzcyhhKTtjLnJlbW92ZURhdGEobik7Yz1kKGIpO2Zvcih2YXIgaCBpbiBzKWMuc3R5bGUucmVtb3ZlUHJvcGVydHkoc1toXSl9ZnVuY3Rpb24gayhiKXtiLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBhPWIub3JpZ2luYWxFdmVudHx8YjtiPWEuJG1hbnVhbFRpbWVTdGFtcHx8YS50aW1lU3RhbXB8fERhdGUubm93KCk7YT1wYXJzZUZsb2F0KGEuZWxhcHNlZFRpbWUudG9GaXhlZCh6KSk7TWF0aC5tYXgoYi13LDApPj11JiZhPj1wJiZoKCl9dmFyIGY9Yi5kYXRhKG4pLGc9ZChiKTtpZigtMSE9Zy5jbGFzc05hbWUuaW5kZXhPZihhKSYmZil7dmFyIGw9Zi50aW1pbmdzLG09Zi5zdGFnZ2VyLHA9Zi5tYXhEdXJhdGlvbixyPWYuYWN0aXZlQ2xhc3NOYW1lLHU9TWF0aC5tYXgobC50cmFuc2l0aW9uRGVsYXksXG5sLmFuaW1hdGlvbkRlbGF5KSp4LHc9RGF0ZS5ub3coKSx2PVQrXCIgXCIrUyx0PWYuaXRlbUluZGV4LHE9XCJcIixzPVtdO2lmKDA8bC50cmFuc2l0aW9uRHVyYXRpb24pe3ZhciB5PWwudHJhbnNpdGlvblByb3BlcnR5U3R5bGU7LTE9PXkuaW5kZXhPZihcImFsbFwiKSYmKHErPWMrXCJ0cmFuc2l0aW9uLXByb3BlcnR5OiBcIit5K1wiO1wiLHErPWMrXCJ0cmFuc2l0aW9uLWR1cmF0aW9uOiBcIitsLnRyYW5zaXRpb25EdXJhdGlvblN0eWxlK1wiO1wiLHMucHVzaChjK1widHJhbnNpdGlvbi1wcm9wZXJ0eVwiKSxzLnB1c2goYytcInRyYW5zaXRpb24tZHVyYXRpb25cIikpfTA8dCYmKDA8bS50cmFuc2l0aW9uRGVsYXkmJjA9PT1tLnRyYW5zaXRpb25EdXJhdGlvbiYmKHErPWMrXCJ0cmFuc2l0aW9uLWRlbGF5OiBcIitNKGwudHJhbnNpdGlvbkRlbGF5U3R5bGUsbS50cmFuc2l0aW9uRGVsYXksdCkrXCI7IFwiLHMucHVzaChjK1widHJhbnNpdGlvbi1kZWxheVwiKSksMDxtLmFuaW1hdGlvbkRlbGF5JiYwPT09bS5hbmltYXRpb25EdXJhdGlvbiYmXG4ocSs9YytcImFuaW1hdGlvbi1kZWxheTogXCIrTShsLmFuaW1hdGlvbkRlbGF5U3R5bGUsbS5hbmltYXRpb25EZWxheSx0KStcIjsgXCIscy5wdXNoKGMrXCJhbmltYXRpb24tZGVsYXlcIikpKTswPHMubGVuZ3RoJiYobD1nLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpfHxcIlwiLGcuc2V0QXR0cmlidXRlKFwic3R5bGVcIixsK1wiIFwiK3EpKTtiLm9uKHYsayk7Yi5hZGRDbGFzcyhyKTtmLmNsb3NlQW5pbWF0aW9uRm49ZnVuY3Rpb24oKXtlKCk7aCgpfTtyZXR1cm4gZX1oKCl9ZnVuY3Rpb24gTShiLGEsYyl7dmFyIGQ9XCJcIjtwKGIuc3BsaXQoXCIsXCIpLGZ1bmN0aW9uKGIsZSl7ZCs9KDA8ZT9cIixcIjpcIlwiKSsoYyphK3BhcnNlSW50KGIsMTApKStcInNcIn0pO3JldHVybiBkfWZ1bmN0aW9uIEwoYixhLGMpe2lmKFEoYixhLGMpKXJldHVybiBmdW5jdGlvbihjKXtjJiYoYi5yZW1vdmVDbGFzcyhhKSxiLnJlbW92ZURhdGEobikpfX1mdW5jdGlvbiBhKGEsYyxkKXtpZihhLmRhdGEobikpcmV0dXJuIEsoYSxjLGQpO2EucmVtb3ZlQ2xhc3MoYyk7XG5hLnJlbW92ZURhdGEobik7ZCgpfWZ1bmN0aW9uIGcoYixjLGQpe3ZhciBlPUwoYixjKTtpZihlKXt2YXIgZj1lO3koYixmdW5jdGlvbigpe0ooYik7QShiKTtmPWEoYixjLGQpfSk7cmV0dXJuIGZ1bmN0aW9uKGEpeyhmfHxxKShhKX19ZCgpfWZ1bmN0aW9uIGUoYSxjKXt2YXIgZD1cIlwiO2E9ay5pc0FycmF5KGEpP2E6YS5zcGxpdCgvXFxzKy8pO3AoYSxmdW5jdGlvbihhLGIpe2EmJjA8YS5sZW5ndGgmJihkKz0oMDxiP1wiIFwiOlwiXCIpK2ErYyl9KTtyZXR1cm4gZH12YXIgYz1cIlwiLGYsUyxGLFQ7di5vbnRyYW5zaXRpb25lbmQ9PT10JiZ2Lm9ud2Via2l0dHJhbnNpdGlvbmVuZCE9PXQ/KGM9XCItd2Via2l0LVwiLGY9XCJXZWJraXRUcmFuc2l0aW9uXCIsUz1cIndlYmtpdFRyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZFwiKTooZj1cInRyYW5zaXRpb25cIixTPVwidHJhbnNpdGlvbmVuZFwiKTt2Lm9uYW5pbWF0aW9uZW5kPT09dCYmdi5vbndlYmtpdGFuaW1hdGlvbmVuZCE9PXQ/KGM9XCItd2Via2l0LVwiLEY9XG5cIldlYmtpdEFuaW1hdGlvblwiLFQ9XCJ3ZWJraXRBbmltYXRpb25FbmQgYW5pbWF0aW9uZW5kXCIpOihGPVwiYW5pbWF0aW9uXCIsVD1cImFuaW1hdGlvbmVuZFwiKTt2YXIgWT1cIkR1cmF0aW9uXCIsVz1cIlByb3BlcnR5XCIsRT1cIkRlbGF5XCIsUj1cIkl0ZXJhdGlvbkNvdW50XCIsWj1cIiQkbmdBbmltYXRlS2V5XCIsbj1cIiQkbmdBbmltYXRlQ1NTM0RhdGFcIix6PTMscz0xLjUseD0xRTMsRz0wLHU9e30sRD0wLFU9W10sVj1bXSxPLFA9MDtyZXR1cm57YWxsb3dDYW5jZWw6ZnVuY3Rpb24oYSxjLGgpe3ZhciBmPShhLmRhdGEobil8fHt9KS5jbGFzc2VzO2lmKCFmfHwwPD1bXCJlbnRlclwiLFwibGVhdmVcIixcIm1vdmVcIl0uaW5kZXhPZihjKSlyZXR1cm4hMDt2YXIgbD1hLnBhcmVudCgpLGc9ay5lbGVtZW50KGQoYSkuY2xvbmVOb2RlKCkpO2cuYXR0cihcInN0eWxlXCIsXCJwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOi05OTk5cHg7IGxlZnQ6LTk5OTlweFwiKTtnLnJlbW92ZUF0dHIoXCJpZFwiKTtnLmVtcHR5KCk7cChmLnNwbGl0KFwiIFwiKSxcbmZ1bmN0aW9uKGEpe2cucmVtb3ZlQ2xhc3MoYSl9KTtnLmFkZENsYXNzKGUoaCxcImFkZENsYXNzXCI9PWM/XCItYWRkXCI6XCItcmVtb3ZlXCIpKTtsLmFwcGVuZChnKTthPU4oZyk7Zy5yZW1vdmUoKTtyZXR1cm4gMDxNYXRoLm1heChhLnRyYW5zaXRpb25EdXJhdGlvbixhLmFuaW1hdGlvbkR1cmF0aW9uKX0sZW50ZXI6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gZyhhLFwibmctZW50ZXJcIixjKX0sbGVhdmU6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gZyhhLFwibmctbGVhdmVcIixjKX0sbW92ZTpmdW5jdGlvbihhLGMpe3JldHVybiBnKGEsXCJuZy1tb3ZlXCIsYyl9LGJlZm9yZUFkZENsYXNzOmZ1bmN0aW9uKGEsYyxkKXt2YXIgZj1MKGEsZShjLFwiLWFkZFwiKSxmdW5jdGlvbihkKXthLmFkZENsYXNzKGMpO2Q9ZCgpO2EucmVtb3ZlQ2xhc3MoYyk7cmV0dXJuIGR9KTtpZihmKXJldHVybiB5KGEsZnVuY3Rpb24oKXtKKGEpO0EoYSk7ZCgpfSksZjtkKCl9LGFkZENsYXNzOmZ1bmN0aW9uKGIsYyxkKXtyZXR1cm4gYShiLFxuZShjLFwiLWFkZFwiKSxkKX0sYmVmb3JlUmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSxjLGQpe3ZhciBmPUwoYSxlKGMsXCItcmVtb3ZlXCIpLGZ1bmN0aW9uKGQpe3ZhciBlPWEuYXR0cihcImNsYXNzXCIpO2EucmVtb3ZlQ2xhc3MoYyk7ZD1kKCk7YS5hdHRyKFwiY2xhc3NcIixlKTtyZXR1cm4gZH0pO2lmKGYpcmV0dXJuIHkoYSxmdW5jdGlvbigpe0ooYSk7QShhKTtkKCl9KSxmO2QoKX0scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYixjLGQpe3JldHVybiBhKGIsZShjLFwiLXJlbW92ZVwiKSxkKX19fV0pfV0pfSkod2luZG93LHdpbmRvdy5hbmd1bGFyKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFuZ3VsYXItYW5pbWF0ZS5taW4uanMubWFwXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwib01mcEFuXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvbGlicy9hbmd1bGFyL2FuZ3VsYXItYW5pbWF0ZS5taW4uanNcIixcIi9saWJzL2FuZ3VsYXJcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxuIEFuZ3VsYXJKUyB2MS4yLjEyXG4gKGMpIDIwMTAtMjAxNCBHb29nbGUsIEluYy4gaHR0cDovL2FuZ3VsYXJqcy5vcmdcbiBMaWNlbnNlOiBNSVRcbiovXG4oZnVuY3Rpb24oSCxhLEEpeyd1c2Ugc3RyaWN0JztmdW5jdGlvbiBEKHAsZyl7Zz1nfHx7fTthLmZvckVhY2goZyxmdW5jdGlvbihhLGMpe2RlbGV0ZSBnW2NdfSk7Zm9yKHZhciBjIGluIHApIXAuaGFzT3duUHJvcGVydHkoYyl8fFwiJFwiPT09Yy5jaGFyQXQoMCkmJlwiJFwiPT09Yy5jaGFyQXQoMSl8fChnW2NdPXBbY10pO3JldHVybiBnfXZhciB2PWEuJCRtaW5FcnIoXCIkcmVzb3VyY2VcIiksQz0vXihcXC5bYS16QS1aXyRdWzAtOWEtekEtWl8kXSopKyQvO2EubW9kdWxlKFwibmdSZXNvdXJjZVwiLFtcIm5nXCJdKS5mYWN0b3J5KFwiJHJlc291cmNlXCIsW1wiJGh0dHBcIixcIiRxXCIsZnVuY3Rpb24ocCxnKXtmdW5jdGlvbiBjKGEsYyl7dGhpcy50ZW1wbGF0ZT1hO3RoaXMuZGVmYXVsdHM9Y3x8e307dGhpcy51cmxQYXJhbXM9e319ZnVuY3Rpb24gdChuLHcsbCl7ZnVuY3Rpb24gcihoLGQpe3ZhciBlPXt9O2Q9eCh7fSx3LGQpO3MoZCxmdW5jdGlvbihiLGQpe3UoYikmJihiPWIoKSk7dmFyIGs7aWYoYiYmXG5iLmNoYXJBdCYmXCJAXCI9PWIuY2hhckF0KDApKXtrPWg7dmFyIGE9Yi5zdWJzdHIoMSk7aWYobnVsbD09YXx8XCJcIj09PWF8fFwiaGFzT3duUHJvcGVydHlcIj09PWF8fCFDLnRlc3QoXCIuXCIrYSkpdGhyb3cgdihcImJhZG1lbWJlclwiLGEpO2Zvcih2YXIgYT1hLnNwbGl0KFwiLlwiKSxmPTAsYz1hLmxlbmd0aDtmPGMmJmshPT1BO2YrKyl7dmFyIGc9YVtmXTtrPW51bGwhPT1rP2tbZ106QX19ZWxzZSBrPWI7ZVtkXT1rfSk7cmV0dXJuIGV9ZnVuY3Rpb24gZShhKXtyZXR1cm4gYS5yZXNvdXJjZX1mdW5jdGlvbiBmKGEpe0QoYXx8e30sdGhpcyl9dmFyIEY9bmV3IGMobik7bD14KHt9LEIsbCk7cyhsLGZ1bmN0aW9uKGgsZCl7dmFyIGM9L14oUE9TVHxQVVR8UEFUQ0gpJC9pLnRlc3QoaC5tZXRob2QpO2ZbZF09ZnVuY3Rpb24oYixkLGssdyl7dmFyIHE9e30sbixsLHk7c3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe2Nhc2UgNDp5PXcsbD1rO2Nhc2UgMzpjYXNlIDI6aWYodShkKSl7aWYodShiKSl7bD1cbmI7eT1kO2JyZWFrfWw9ZDt5PWt9ZWxzZXtxPWI7bj1kO2w9azticmVha31jYXNlIDE6dShiKT9sPWI6Yz9uPWI6cT1iO2JyZWFrO2Nhc2UgMDpicmVhaztkZWZhdWx0OnRocm93IHYoXCJiYWRhcmdzXCIsYXJndW1lbnRzLmxlbmd0aCk7fXZhciB0PXRoaXMgaW5zdGFuY2VvZiBmLG09dD9uOmguaXNBcnJheT9bXTpuZXcgZihuKSx6PXt9LEI9aC5pbnRlcmNlcHRvciYmaC5pbnRlcmNlcHRvci5yZXNwb25zZXx8ZSxDPWguaW50ZXJjZXB0b3ImJmguaW50ZXJjZXB0b3IucmVzcG9uc2VFcnJvcnx8QTtzKGgsZnVuY3Rpb24oYSxiKXtcInBhcmFtc1wiIT1iJiYoXCJpc0FycmF5XCIhPWImJlwiaW50ZXJjZXB0b3JcIiE9YikmJih6W2JdPUcoYSkpfSk7YyYmKHouZGF0YT1uKTtGLnNldFVybFBhcmFtcyh6LHgoe30scihuLGgucGFyYW1zfHx7fSkscSksaC51cmwpO3E9cCh6KS50aGVuKGZ1bmN0aW9uKGIpe3ZhciBkPWIuZGF0YSxrPW0uJHByb21pc2U7aWYoZCl7aWYoYS5pc0FycmF5KGQpIT09ISFoLmlzQXJyYXkpdGhyb3cgdihcImJhZGNmZ1wiLFxuaC5pc0FycmF5P1wiYXJyYXlcIjpcIm9iamVjdFwiLGEuaXNBcnJheShkKT9cImFycmF5XCI6XCJvYmplY3RcIik7aC5pc0FycmF5PyhtLmxlbmd0aD0wLHMoZCxmdW5jdGlvbihiKXttLnB1c2gobmV3IGYoYikpfSkpOihEKGQsbSksbS4kcHJvbWlzZT1rKX1tLiRyZXNvbHZlZD0hMDtiLnJlc291cmNlPW07cmV0dXJuIGJ9LGZ1bmN0aW9uKGIpe20uJHJlc29sdmVkPSEwOyh5fHxFKShiKTtyZXR1cm4gZy5yZWplY3QoYil9KTtxPXEudGhlbihmdW5jdGlvbihiKXt2YXIgYT1CKGIpOyhsfHxFKShhLGIuaGVhZGVycyk7cmV0dXJuIGF9LEMpO3JldHVybiB0P3E6KG0uJHByb21pc2U9cSxtLiRyZXNvbHZlZD0hMSxtKX07Zi5wcm90b3R5cGVbXCIkXCIrZF09ZnVuY3Rpb24oYixhLGspe3UoYikmJihrPWEsYT1iLGI9e30pO2I9ZltkXS5jYWxsKHRoaXMsYix0aGlzLGEsayk7cmV0dXJuIGIuJHByb21pc2V8fGJ9fSk7Zi5iaW5kPWZ1bmN0aW9uKGEpe3JldHVybiB0KG4seCh7fSx3LGEpLGwpfTtyZXR1cm4gZn1cbnZhciBCPXtnZXQ6e21ldGhvZDpcIkdFVFwifSxzYXZlOnttZXRob2Q6XCJQT1NUXCJ9LHF1ZXJ5OnttZXRob2Q6XCJHRVRcIixpc0FycmF5OiEwfSxyZW1vdmU6e21ldGhvZDpcIkRFTEVURVwifSxcImRlbGV0ZVwiOnttZXRob2Q6XCJERUxFVEVcIn19LEU9YS5ub29wLHM9YS5mb3JFYWNoLHg9YS5leHRlbmQsRz1hLmNvcHksdT1hLmlzRnVuY3Rpb247Yy5wcm90b3R5cGU9e3NldFVybFBhcmFtczpmdW5jdGlvbihjLGcsbCl7dmFyIHI9dGhpcyxlPWx8fHIudGVtcGxhdGUsZixwLGg9ci51cmxQYXJhbXM9e307cyhlLnNwbGl0KC9cXFcvKSxmdW5jdGlvbihhKXtpZihcImhhc093blByb3BlcnR5XCI9PT1hKXRocm93IHYoXCJiYWRuYW1lXCIpOyEvXlxcZCskLy50ZXN0KGEpJiYoYSYmUmVnRXhwKFwiKF58W15cXFxcXFxcXF0pOlwiK2ErXCIoXFxcXFd8JClcIikudGVzdChlKSkmJihoW2FdPSEwKX0pO2U9ZS5yZXBsYWNlKC9cXFxcOi9nLFwiOlwiKTtnPWd8fHt9O3Moci51cmxQYXJhbXMsZnVuY3Rpb24oZCxjKXtmPWcuaGFzT3duUHJvcGVydHkoYyk/XG5nW2NdOnIuZGVmYXVsdHNbY107YS5pc0RlZmluZWQoZikmJm51bGwhPT1mPyhwPWVuY29kZVVSSUNvbXBvbmVudChmKS5yZXBsYWNlKC8lNDAvZ2ksXCJAXCIpLnJlcGxhY2UoLyUzQS9naSxcIjpcIikucmVwbGFjZSgvJTI0L2csXCIkXCIpLnJlcGxhY2UoLyUyQy9naSxcIixcIikucmVwbGFjZSgvJTIwL2csXCIlMjBcIikucmVwbGFjZSgvJTI2L2dpLFwiJlwiKS5yZXBsYWNlKC8lM0QvZ2ksXCI9XCIpLnJlcGxhY2UoLyUyQi9naSxcIitcIiksZT1lLnJlcGxhY2UoUmVnRXhwKFwiOlwiK2MrXCIoXFxcXFd8JClcIixcImdcIiksZnVuY3Rpb24oYSxjKXtyZXR1cm4gcCtjfSkpOmU9ZS5yZXBsYWNlKFJlZ0V4cChcIigvPyk6XCIrYytcIihcXFxcV3wkKVwiLFwiZ1wiKSxmdW5jdGlvbihhLGMsZCl7cmV0dXJuXCIvXCI9PWQuY2hhckF0KDApP2Q6YytkfSl9KTtlPWUucmVwbGFjZSgvXFwvKyQvLFwiXCIpfHxcIi9cIjtlPWUucmVwbGFjZSgvXFwvXFwuKD89XFx3KygkfFxcPykpLyxcIi5cIik7Yy51cmw9ZS5yZXBsYWNlKC9cXC9cXFxcXFwuLyxcIi8uXCIpO3MoZyxmdW5jdGlvbihhLFxuZSl7ci51cmxQYXJhbXNbZV18fChjLnBhcmFtcz1jLnBhcmFtc3x8e30sYy5wYXJhbXNbZV09YSl9KX19O3JldHVybiB0fV0pfSkod2luZG93LHdpbmRvdy5hbmd1bGFyKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFuZ3VsYXItcmVzb3VyY2UubWluLmpzLm1hcFxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm9NZnBBblwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2xpYnMvYW5ndWxhci9hbmd1bGFyLXJlc291cmNlLm1pbi5qc1wiLFwiL2xpYnMvYW5ndWxhclwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXG4gQW5ndWxhckpTIHYxLjIuMTJcbiAoYykgMjAxMC0yMDE0IEdvb2dsZSwgSW5jLiBodHRwOi8vYW5ndWxhcmpzLm9yZ1xuIExpY2Vuc2U6IE1JVFxuKi9cbihmdW5jdGlvbihoLGUsQSl7J3VzZSBzdHJpY3QnO2Z1bmN0aW9uIHUodyxxLGspe3JldHVybntyZXN0cmljdDpcIkVDQVwiLHRlcm1pbmFsOiEwLHByaW9yaXR5OjQwMCx0cmFuc2NsdWRlOlwiZWxlbWVudFwiLGxpbms6ZnVuY3Rpb24oYSxjLGIsZixuKXtmdW5jdGlvbiB5KCl7bCYmKGwuJGRlc3Ryb3koKSxsPW51bGwpO2cmJihrLmxlYXZlKGcpLGc9bnVsbCl9ZnVuY3Rpb24gdigpe3ZhciBiPXcuY3VycmVudCYmdy5jdXJyZW50LmxvY2FscztpZihlLmlzRGVmaW5lZChiJiZiLiR0ZW1wbGF0ZSkpe3ZhciBiPWEuJG5ldygpLGY9dy5jdXJyZW50O2c9bihiLGZ1bmN0aW9uKGQpe2suZW50ZXIoZCxudWxsLGd8fGMsZnVuY3Rpb24oKXshZS5pc0RlZmluZWQodCl8fHQmJiFhLiRldmFsKHQpfHxxKCl9KTt5KCl9KTtsPWYuc2NvcGU9YjtsLiRlbWl0KFwiJHZpZXdDb250ZW50TG9hZGVkXCIpO2wuJGV2YWwoaCl9ZWxzZSB5KCl9dmFyIGwsZyx0PWIuYXV0b3Njcm9sbCxoPWIub25sb2FkfHxcIlwiO1xuYS4kb24oXCIkcm91dGVDaGFuZ2VTdWNjZXNzXCIsdik7digpfX19ZnVuY3Rpb24geihlLGgsayl7cmV0dXJue3Jlc3RyaWN0OlwiRUNBXCIscHJpb3JpdHk6LTQwMCxsaW5rOmZ1bmN0aW9uKGEsYyl7dmFyIGI9ay5jdXJyZW50LGY9Yi5sb2NhbHM7Yy5odG1sKGYuJHRlbXBsYXRlKTt2YXIgbj1lKGMuY29udGVudHMoKSk7Yi5jb250cm9sbGVyJiYoZi4kc2NvcGU9YSxmPWgoYi5jb250cm9sbGVyLGYpLGIuY29udHJvbGxlckFzJiYoYVtiLmNvbnRyb2xsZXJBc109ZiksYy5kYXRhKFwiJG5nQ29udHJvbGxlckNvbnRyb2xsZXJcIixmKSxjLmNoaWxkcmVuKCkuZGF0YShcIiRuZ0NvbnRyb2xsZXJDb250cm9sbGVyXCIsZikpO24oYSl9fX1oPWUubW9kdWxlKFwibmdSb3V0ZVwiLFtcIm5nXCJdKS5wcm92aWRlcihcIiRyb3V0ZVwiLGZ1bmN0aW9uKCl7ZnVuY3Rpb24gaChhLGMpe3JldHVybiBlLmV4dGVuZChuZXcgKGUuZXh0ZW5kKGZ1bmN0aW9uKCl7fSx7cHJvdG90eXBlOmF9KSksYyl9ZnVuY3Rpb24gcShhLFxuZSl7dmFyIGI9ZS5jYXNlSW5zZW5zaXRpdmVNYXRjaCxmPXtvcmlnaW5hbFBhdGg6YSxyZWdleHA6YX0saD1mLmtleXM9W107YT1hLnJlcGxhY2UoLyhbKCkuXSkvZyxcIlxcXFwkMVwiKS5yZXBsYWNlKC8oXFwvKT86KFxcdyspKFtcXD9cXCpdKT8vZyxmdW5jdGlvbihhLGUsYixjKXthPVwiP1wiPT09Yz9jOm51bGw7Yz1cIipcIj09PWM/YzpudWxsO2gucHVzaCh7bmFtZTpiLG9wdGlvbmFsOiEhYX0pO2U9ZXx8XCJcIjtyZXR1cm5cIlwiKyhhP1wiXCI6ZSkrXCIoPzpcIisoYT9lOlwiXCIpKyhjJiZcIiguKz8pXCJ8fFwiKFteL10rKVwiKSsoYXx8XCJcIikrXCIpXCIrKGF8fFwiXCIpfSkucmVwbGFjZSgvKFtcXC8kXFwqXSkvZyxcIlxcXFwkMVwiKTtmLnJlZ2V4cD1SZWdFeHAoXCJeXCIrYStcIiRcIixiP1wiaVwiOlwiXCIpO3JldHVybiBmfXZhciBrPXt9O3RoaXMud2hlbj1mdW5jdGlvbihhLGMpe2tbYV09ZS5leHRlbmQoe3JlbG9hZE9uU2VhcmNoOiEwfSxjLGEmJnEoYSxjKSk7aWYoYSl7dmFyIGI9XCIvXCI9PWFbYS5sZW5ndGgtMV0/YS5zdWJzdHIoMCxhLmxlbmd0aC1cbjEpOmErXCIvXCI7a1tiXT1lLmV4dGVuZCh7cmVkaXJlY3RUbzphfSxxKGIsYykpfXJldHVybiB0aGlzfTt0aGlzLm90aGVyd2lzZT1mdW5jdGlvbihhKXt0aGlzLndoZW4obnVsbCxhKTtyZXR1cm4gdGhpc307dGhpcy4kZ2V0PVtcIiRyb290U2NvcGVcIixcIiRsb2NhdGlvblwiLFwiJHJvdXRlUGFyYW1zXCIsXCIkcVwiLFwiJGluamVjdG9yXCIsXCIkaHR0cFwiLFwiJHRlbXBsYXRlQ2FjaGVcIixcIiRzY2VcIixmdW5jdGlvbihhLGMsYixmLG4scSx2LGwpe2Z1bmN0aW9uIGcoKXt2YXIgZD10KCksbT1yLmN1cnJlbnQ7aWYoZCYmbSYmZC4kJHJvdXRlPT09bS4kJHJvdXRlJiZlLmVxdWFscyhkLnBhdGhQYXJhbXMsbS5wYXRoUGFyYW1zKSYmIWQucmVsb2FkT25TZWFyY2gmJiF4KW0ucGFyYW1zPWQucGFyYW1zLGUuY29weShtLnBhcmFtcyxiKSxhLiRicm9hZGNhc3QoXCIkcm91dGVVcGRhdGVcIixtKTtlbHNlIGlmKGR8fG0peD0hMSxhLiRicm9hZGNhc3QoXCIkcm91dGVDaGFuZ2VTdGFydFwiLGQsbSksKHIuY3VycmVudD1cbmQpJiZkLnJlZGlyZWN0VG8mJihlLmlzU3RyaW5nKGQucmVkaXJlY3RUbyk/Yy5wYXRoKHUoZC5yZWRpcmVjdFRvLGQucGFyYW1zKSkuc2VhcmNoKGQucGFyYW1zKS5yZXBsYWNlKCk6Yy51cmwoZC5yZWRpcmVjdFRvKGQucGF0aFBhcmFtcyxjLnBhdGgoKSxjLnNlYXJjaCgpKSkucmVwbGFjZSgpKSxmLndoZW4oZCkudGhlbihmdW5jdGlvbigpe2lmKGQpe3ZhciBhPWUuZXh0ZW5kKHt9LGQucmVzb2x2ZSksYyxiO2UuZm9yRWFjaChhLGZ1bmN0aW9uKGQsYyl7YVtjXT1lLmlzU3RyaW5nKGQpP24uZ2V0KGQpOm4uaW52b2tlKGQpfSk7ZS5pc0RlZmluZWQoYz1kLnRlbXBsYXRlKT9lLmlzRnVuY3Rpb24oYykmJihjPWMoZC5wYXJhbXMpKTplLmlzRGVmaW5lZChiPWQudGVtcGxhdGVVcmwpJiYoZS5pc0Z1bmN0aW9uKGIpJiYoYj1iKGQucGFyYW1zKSksYj1sLmdldFRydXN0ZWRSZXNvdXJjZVVybChiKSxlLmlzRGVmaW5lZChiKSYmKGQubG9hZGVkVGVtcGxhdGVVcmw9YixjPXEuZ2V0KGIsXG57Y2FjaGU6dn0pLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJuIGEuZGF0YX0pKSk7ZS5pc0RlZmluZWQoYykmJihhLiR0ZW1wbGF0ZT1jKTtyZXR1cm4gZi5hbGwoYSl9fSkudGhlbihmdW5jdGlvbihjKXtkPT1yLmN1cnJlbnQmJihkJiYoZC5sb2NhbHM9YyxlLmNvcHkoZC5wYXJhbXMsYikpLGEuJGJyb2FkY2FzdChcIiRyb3V0ZUNoYW5nZVN1Y2Nlc3NcIixkLG0pKX0sZnVuY3Rpb24oYyl7ZD09ci5jdXJyZW50JiZhLiRicm9hZGNhc3QoXCIkcm91dGVDaGFuZ2VFcnJvclwiLGQsbSxjKX0pfWZ1bmN0aW9uIHQoKXt2YXIgYSxiO2UuZm9yRWFjaChrLGZ1bmN0aW9uKGYsayl7dmFyIHA7aWYocD0hYil7dmFyIHM9Yy5wYXRoKCk7cD1mLmtleXM7dmFyIGw9e307aWYoZi5yZWdleHApaWYocz1mLnJlZ2V4cC5leGVjKHMpKXtmb3IodmFyIGc9MSxxPXMubGVuZ3RoO2c8cTsrK2cpe3ZhciBuPXBbZy0xXSxyPVwic3RyaW5nXCI9PXR5cGVvZiBzW2ddP2RlY29kZVVSSUNvbXBvbmVudChzW2ddKTpzW2ddO1xubiYmciYmKGxbbi5uYW1lXT1yKX1wPWx9ZWxzZSBwPW51bGw7ZWxzZSBwPW51bGw7cD1hPXB9cCYmKGI9aChmLHtwYXJhbXM6ZS5leHRlbmQoe30sYy5zZWFyY2goKSxhKSxwYXRoUGFyYW1zOmF9KSxiLiQkcm91dGU9Zil9KTtyZXR1cm4gYnx8a1tudWxsXSYmaChrW251bGxdLHtwYXJhbXM6e30scGF0aFBhcmFtczp7fX0pfWZ1bmN0aW9uIHUoYSxjKXt2YXIgYj1bXTtlLmZvckVhY2goKGF8fFwiXCIpLnNwbGl0KFwiOlwiKSxmdW5jdGlvbihhLGQpe2lmKDA9PT1kKWIucHVzaChhKTtlbHNle3ZhciBlPWEubWF0Y2goLyhcXHcrKSguKikvKSxmPWVbMV07Yi5wdXNoKGNbZl0pO2IucHVzaChlWzJdfHxcIlwiKTtkZWxldGUgY1tmXX19KTtyZXR1cm4gYi5qb2luKFwiXCIpfXZhciB4PSExLHI9e3JvdXRlczprLHJlbG9hZDpmdW5jdGlvbigpe3g9ITA7YS4kZXZhbEFzeW5jKGcpfX07YS4kb24oXCIkbG9jYXRpb25DaGFuZ2VTdWNjZXNzXCIsZyk7cmV0dXJuIHJ9XX0pO2gucHJvdmlkZXIoXCIkcm91dGVQYXJhbXNcIixcbmZ1bmN0aW9uKCl7dGhpcy4kZ2V0PWZ1bmN0aW9uKCl7cmV0dXJue319fSk7aC5kaXJlY3RpdmUoXCJuZ1ZpZXdcIix1KTtoLmRpcmVjdGl2ZShcIm5nVmlld1wiLHopO3UuJGluamVjdD1bXCIkcm91dGVcIixcIiRhbmNob3JTY3JvbGxcIixcIiRhbmltYXRlXCJdO3ouJGluamVjdD1bXCIkY29tcGlsZVwiLFwiJGNvbnRyb2xsZXJcIixcIiRyb3V0ZVwiXX0pKHdpbmRvdyx3aW5kb3cuYW5ndWxhcik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmd1bGFyLXJvdXRlLm1pbi5qcy5tYXBcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJvTWZwQW5cIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9saWJzL2FuZ3VsYXIvYW5ndWxhci1yb3V0ZS5taW4uanNcIixcIi9saWJzL2FuZ3VsYXJcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxuIEFuZ3VsYXJKUyB2MS4yLjEyXG4gKGMpIDIwMTAtMjAxNCBHb29nbGUsIEluYy4gaHR0cDovL2FuZ3VsYXJqcy5vcmdcbiBMaWNlbnNlOiBNSVRcbiovXG4oZnVuY3Rpb24oeSx2LHopeyd1c2Ugc3RyaWN0JztmdW5jdGlvbiB0KGcsYSxiKXtxLmRpcmVjdGl2ZShnLFtcIiRwYXJzZVwiLFwiJHN3aXBlXCIsZnVuY3Rpb24obCxuKXt2YXIgcj03NSxoPTAuMyxkPTMwO3JldHVybiBmdW5jdGlvbihwLG0sayl7ZnVuY3Rpb24gZShlKXtpZighdSlyZXR1cm4hMTt2YXIgYz1NYXRoLmFicyhlLnktdS55KTtlPShlLngtdS54KSphO3JldHVybiBmJiZjPHImJjA8ZSYmZT5kJiZjL2U8aH12YXIgYz1sKGtbZ10pLHUsZjtuLmJpbmQobSx7c3RhcnQ6ZnVuY3Rpb24oZSxjKXt1PWU7Zj0hMH0sY2FuY2VsOmZ1bmN0aW9uKGUpe2Y9ITF9LGVuZDpmdW5jdGlvbihhLGYpe2UoYSkmJnAuJGFwcGx5KGZ1bmN0aW9uKCl7bS50cmlnZ2VySGFuZGxlcihiKTtjKHAseyRldmVudDpmfSl9KX19KX19XSl9dmFyIHE9di5tb2R1bGUoXCJuZ1RvdWNoXCIsW10pO3EuZmFjdG9yeShcIiRzd2lwZVwiLFtmdW5jdGlvbigpe2Z1bmN0aW9uIGcoYSl7dmFyIGI9YS50b3VjaGVzJiZhLnRvdWNoZXMubGVuZ3RoP1xuYS50b3VjaGVzOlthXTthPWEuY2hhbmdlZFRvdWNoZXMmJmEuY2hhbmdlZFRvdWNoZXNbMF18fGEub3JpZ2luYWxFdmVudCYmYS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzJiZhLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF18fGJbMF0ub3JpZ2luYWxFdmVudHx8YlswXTtyZXR1cm57eDphLmNsaWVudFgseTphLmNsaWVudFl9fXJldHVybntiaW5kOmZ1bmN0aW9uKGEsYil7dmFyIGwsbixyLGgsZD0hMTthLm9uKFwidG91Y2hzdGFydCBtb3VzZWRvd25cIixmdW5jdGlvbihhKXtyPWcoYSk7ZD0hMDtuPWw9MDtoPXI7Yi5zdGFydCYmYi5zdGFydChyLGEpfSk7YS5vbihcInRvdWNoY2FuY2VsXCIsZnVuY3Rpb24oYSl7ZD0hMTtiLmNhbmNlbCYmYi5jYW5jZWwoYSl9KTthLm9uKFwidG91Y2htb3ZlIG1vdXNlbW92ZVwiLGZ1bmN0aW9uKGEpe2lmKGQmJnIpe3ZhciBtPWcoYSk7bCs9TWF0aC5hYnMobS54LWgueCk7bis9TWF0aC5hYnMobS55LWgueSk7aD1tOzEwPmwmJjEwPm58fFxuKG4+bD8oZD0hMSxiLmNhbmNlbCYmYi5jYW5jZWwoYSkpOihhLnByZXZlbnREZWZhdWx0KCksYi5tb3ZlJiZiLm1vdmUobSxhKSkpfX0pO2Eub24oXCJ0b3VjaGVuZCBtb3VzZXVwXCIsZnVuY3Rpb24oYSl7ZCYmKGQ9ITEsYi5lbmQmJmIuZW5kKGcoYSksYSkpfSl9fX1dKTtxLmNvbmZpZyhbXCIkcHJvdmlkZVwiLGZ1bmN0aW9uKGcpe2cuZGVjb3JhdG9yKFwibmdDbGlja0RpcmVjdGl2ZVwiLFtcIiRkZWxlZ2F0ZVwiLGZ1bmN0aW9uKGEpe2Euc2hpZnQoKTtyZXR1cm4gYX1dKX1dKTtxLmRpcmVjdGl2ZShcIm5nQ2xpY2tcIixbXCIkcGFyc2VcIixcIiR0aW1lb3V0XCIsXCIkcm9vdEVsZW1lbnRcIixmdW5jdGlvbihnLGEsYil7ZnVuY3Rpb24gbChhLGMsYil7Zm9yKHZhciBmPTA7ZjxhLmxlbmd0aDtmKz0yKWlmKE1hdGguYWJzKGFbZl0tYyk8ZCYmTWF0aC5hYnMoYVtmKzFdLWIpPGQpcmV0dXJuIGEuc3BsaWNlKGYsZisyKSwhMDtyZXR1cm4hMX1mdW5jdGlvbiBuKGEpe2lmKCEoRGF0ZS5ub3coKS1tPmgpKXt2YXIgYz1cbmEudG91Y2hlcyYmYS50b3VjaGVzLmxlbmd0aD9hLnRvdWNoZXM6W2FdLGI9Y1swXS5jbGllbnRYLGM9Y1swXS5jbGllbnRZOzE+YiYmMT5jfHxsKGssYixjKXx8KGEuc3RvcFByb3BhZ2F0aW9uKCksYS5wcmV2ZW50RGVmYXVsdCgpLGEudGFyZ2V0JiZhLnRhcmdldC5ibHVyKCkpfX1mdW5jdGlvbiByKGIpe2I9Yi50b3VjaGVzJiZiLnRvdWNoZXMubGVuZ3RoP2IudG91Y2hlczpbYl07dmFyIGM9YlswXS5jbGllbnRYLGQ9YlswXS5jbGllbnRZO2sucHVzaChjLGQpO2EoZnVuY3Rpb24oKXtmb3IodmFyIGE9MDthPGsubGVuZ3RoO2ErPTIpaWYoa1thXT09YyYma1thKzFdPT1kKXtrLnNwbGljZShhLGErMik7YnJlYWt9fSxoLCExKX12YXIgaD0yNTAwLGQ9MjUscD1cIm5nLWNsaWNrLWFjdGl2ZVwiLG0saztyZXR1cm4gZnVuY3Rpb24oYSxjLGQpe2Z1bmN0aW9uIGYoKXtxPSExO2MucmVtb3ZlQ2xhc3MocCl9dmFyIGg9ZyhkLm5nQ2xpY2spLHE9ITEscyx0LHcseDtjLm9uKFwidG91Y2hzdGFydFwiLFxuZnVuY3Rpb24oYSl7cT0hMDtzPWEudGFyZ2V0P2EudGFyZ2V0OmEuc3JjRWxlbWVudDszPT1zLm5vZGVUeXBlJiYocz1zLnBhcmVudE5vZGUpO2MuYWRkQ2xhc3MocCk7dD1EYXRlLm5vdygpO2E9YS50b3VjaGVzJiZhLnRvdWNoZXMubGVuZ3RoP2EudG91Y2hlczpbYV07YT1hWzBdLm9yaWdpbmFsRXZlbnR8fGFbMF07dz1hLmNsaWVudFg7eD1hLmNsaWVudFl9KTtjLm9uKFwidG91Y2htb3ZlXCIsZnVuY3Rpb24oYSl7ZigpfSk7Yy5vbihcInRvdWNoY2FuY2VsXCIsZnVuY3Rpb24oYSl7ZigpfSk7Yy5vbihcInRvdWNoZW5kXCIsZnVuY3Rpb24oYSl7dmFyIGg9RGF0ZS5ub3coKS10LGU9YS5jaGFuZ2VkVG91Y2hlcyYmYS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg/YS5jaGFuZ2VkVG91Y2hlczphLnRvdWNoZXMmJmEudG91Y2hlcy5sZW5ndGg/YS50b3VjaGVzOlthXSxnPWVbMF0ub3JpZ2luYWxFdmVudHx8ZVswXSxlPWcuY2xpZW50WCxnPWcuY2xpZW50WSxwPU1hdGguc3FydChNYXRoLnBvdyhlLVxudywyKStNYXRoLnBvdyhnLXgsMikpO3EmJig3NTA+aCYmMTI+cCkmJihrfHwoYlswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixuLCEwKSxiWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsciwhMCksaz1bXSksbT1EYXRlLm5vdygpLGwoayxlLGcpLHMmJnMuYmx1cigpLHYuaXNEZWZpbmVkKGQuZGlzYWJsZWQpJiYhMSE9PWQuZGlzYWJsZWR8fGMudHJpZ2dlckhhbmRsZXIoXCJjbGlja1wiLFthXSkpO2YoKX0pO2Mub25jbGljaz1mdW5jdGlvbihhKXt9O2Mub24oXCJjbGlja1wiLGZ1bmN0aW9uKGIsYyl7YS4kYXBwbHkoZnVuY3Rpb24oKXtoKGEseyRldmVudDpjfHxifSl9KX0pO2Mub24oXCJtb3VzZWRvd25cIixmdW5jdGlvbihhKXtjLmFkZENsYXNzKHApfSk7Yy5vbihcIm1vdXNlbW92ZSBtb3VzZXVwXCIsZnVuY3Rpb24oYSl7Yy5yZW1vdmVDbGFzcyhwKX0pfX1dKTt0KFwibmdTd2lwZUxlZnRcIiwtMSxcInN3aXBlbGVmdFwiKTt0KFwibmdTd2lwZVJpZ2h0XCIsMSxcInN3aXBlcmlnaHRcIil9KSh3aW5kb3csXG53aW5kb3cuYW5ndWxhcik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmd1bGFyLXRvdWNoLm1pbi5qcy5tYXBcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJvTWZwQW5cIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9saWJzL2FuZ3VsYXIvYW5ndWxhci10b3VjaC5taW4uanNcIixcIi9saWJzL2FuZ3VsYXJcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxuIEFuZ3VsYXJKUyB2MS4yLjEyXG4gKGMpIDIwMTAtMjAxNCBHb29nbGUsIEluYy4gaHR0cDovL2FuZ3VsYXJqcy5vcmdcbiBMaWNlbnNlOiBNSVRcbiovXG4oZnVuY3Rpb24oUCxSLHMpeyd1c2Ugc3RyaWN0JztmdW5jdGlvbiB0KGIpe3JldHVybiBmdW5jdGlvbigpe3ZhciBhPWFyZ3VtZW50c1swXSxjLGE9XCJbXCIrKGI/YitcIjpcIjpcIlwiKSthK1wiXSBodHRwOi8vZXJyb3JzLmFuZ3VsYXJqcy5vcmcvMS4yLjEyL1wiKyhiP2IrXCIvXCI6XCJcIikrYTtmb3IoYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYT1hKygxPT1jP1wiP1wiOlwiJlwiKStcInBcIisoYy0xKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQoXCJmdW5jdGlvblwiPT10eXBlb2YgYXJndW1lbnRzW2NdP2FyZ3VtZW50c1tjXS50b1N0cmluZygpLnJlcGxhY2UoLyBcXHtbXFxzXFxTXSokLyxcIlwiKTpcInVuZGVmaW5lZFwiPT10eXBlb2YgYXJndW1lbnRzW2NdP1widW5kZWZpbmVkXCI6XCJzdHJpbmdcIiE9dHlwZW9mIGFyZ3VtZW50c1tjXT9KU09OLnN0cmluZ2lmeShhcmd1bWVudHNbY10pOmFyZ3VtZW50c1tjXSk7cmV0dXJuIEVycm9yKGEpfX1mdW5jdGlvbiBxYihiKXtpZihudWxsPT1ifHx6YShiKSlyZXR1cm4hMTtcbnZhciBhPWIubGVuZ3RoO3JldHVybiAxPT09Yi5ub2RlVHlwZSYmYT8hMDp3KGIpfHxMKGIpfHwwPT09YXx8XCJudW1iZXJcIj09PXR5cGVvZiBhJiYwPGEmJmEtMSBpbiBifWZ1bmN0aW9uIHEoYixhLGMpe3ZhciBkO2lmKGIpaWYoTShiKSlmb3IoZCBpbiBiKVwicHJvdG90eXBlXCI9PWR8fChcImxlbmd0aFwiPT1kfHxcIm5hbWVcIj09ZHx8Yi5oYXNPd25Qcm9wZXJ0eSYmIWIuaGFzT3duUHJvcGVydHkoZCkpfHxhLmNhbGwoYyxiW2RdLGQpO2Vsc2UgaWYoYi5mb3JFYWNoJiZiLmZvckVhY2ghPT1xKWIuZm9yRWFjaChhLGMpO2Vsc2UgaWYocWIoYikpZm9yKGQ9MDtkPGIubGVuZ3RoO2QrKylhLmNhbGwoYyxiW2RdLGQpO2Vsc2UgZm9yKGQgaW4gYiliLmhhc093blByb3BlcnR5KGQpJiZhLmNhbGwoYyxiW2RdLGQpO3JldHVybiBifWZ1bmN0aW9uIE5iKGIpe3ZhciBhPVtdLGM7Zm9yKGMgaW4gYiliLmhhc093blByb3BlcnR5KGMpJiZhLnB1c2goYyk7cmV0dXJuIGEuc29ydCgpfWZ1bmN0aW9uIE9jKGIsXG5hLGMpe2Zvcih2YXIgZD1OYihiKSxlPTA7ZTxkLmxlbmd0aDtlKyspYS5jYWxsKGMsYltkW2VdXSxkW2VdKTtyZXR1cm4gZH1mdW5jdGlvbiBPYihiKXtyZXR1cm4gZnVuY3Rpb24oYSxjKXtiKGMsYSl9fWZ1bmN0aW9uIFphKCl7Zm9yKHZhciBiPWlhLmxlbmd0aCxhO2I7KXtiLS07YT1pYVtiXS5jaGFyQ29kZUF0KDApO2lmKDU3PT1hKXJldHVybiBpYVtiXT1cIkFcIixpYS5qb2luKFwiXCIpO2lmKDkwPT1hKWlhW2JdPVwiMFwiO2Vsc2UgcmV0dXJuIGlhW2JdPVN0cmluZy5mcm9tQ2hhckNvZGUoYSsxKSxpYS5qb2luKFwiXCIpfWlhLnVuc2hpZnQoXCIwXCIpO3JldHVybiBpYS5qb2luKFwiXCIpfWZ1bmN0aW9uIFBiKGIsYSl7YT9iLiQkaGFzaEtleT1hOmRlbGV0ZSBiLiQkaGFzaEtleX1mdW5jdGlvbiB5KGIpe3ZhciBhPWIuJCRoYXNoS2V5O3EoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2EhPT1iJiZxKGEsZnVuY3Rpb24oYSxjKXtiW2NdPWF9KX0pO1BiKGIsYSk7cmV0dXJuIGJ9ZnVuY3Rpb24gVihiKXtyZXR1cm4gcGFyc2VJbnQoYixcbjEwKX1mdW5jdGlvbiBRYihiLGEpe3JldHVybiB5KG5ldyAoeShmdW5jdGlvbigpe30se3Byb3RvdHlwZTpifSkpLGEpfWZ1bmN0aW9uIEUoKXt9ZnVuY3Rpb24gQWEoYil7cmV0dXJuIGJ9ZnVuY3Rpb24gWShiKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYn19ZnVuY3Rpb24gdShiKXtyZXR1cm5cInVuZGVmaW5lZFwiPT09dHlwZW9mIGJ9ZnVuY3Rpb24gRChiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT09dHlwZW9mIGJ9ZnVuY3Rpb24gVyhiKXtyZXR1cm4gbnVsbCE9YiYmXCJvYmplY3RcIj09PXR5cGVvZiBifWZ1bmN0aW9uIHcoYil7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBifWZ1bmN0aW9uIHJiKGIpe3JldHVyblwibnVtYmVyXCI9PT10eXBlb2YgYn1mdW5jdGlvbiBLYShiKXtyZXR1cm5cIltvYmplY3QgRGF0ZV1cIj09PUxhLmNhbGwoYil9ZnVuY3Rpb24gTChiKXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PT1MYS5jYWxsKGIpfWZ1bmN0aW9uIE0oYil7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGJ9XG5mdW5jdGlvbiAkYShiKXtyZXR1cm5cIltvYmplY3QgUmVnRXhwXVwiPT09TGEuY2FsbChiKX1mdW5jdGlvbiB6YShiKXtyZXR1cm4gYiYmYi5kb2N1bWVudCYmYi5sb2NhdGlvbiYmYi5hbGVydCYmYi5zZXRJbnRlcnZhbH1mdW5jdGlvbiBQYyhiKXtyZXR1cm4hKCFifHwhKGIubm9kZU5hbWV8fGIub24mJmIuZmluZCkpfWZ1bmN0aW9uIFFjKGIsYSxjKXt2YXIgZD1bXTtxKGIsZnVuY3Rpb24oYixnLGYpe2QucHVzaChhLmNhbGwoYyxiLGcsZikpfSk7cmV0dXJuIGR9ZnVuY3Rpb24gYWIoYixhKXtpZihiLmluZGV4T2YpcmV0dXJuIGIuaW5kZXhPZihhKTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKylpZihhPT09YltjXSlyZXR1cm4gYztyZXR1cm4tMX1mdW5jdGlvbiBNYShiLGEpe3ZhciBjPWFiKGIsYSk7MDw9YyYmYi5zcGxpY2UoYywxKTtyZXR1cm4gYX1mdW5jdGlvbiAkKGIsYSl7aWYoemEoYil8fGImJmIuJGV2YWxBc3luYyYmYi4kd2F0Y2gpdGhyb3cgTmEoXCJjcHdzXCIpO2lmKGEpe2lmKGI9PT1cbmEpdGhyb3cgTmEoXCJjcGlcIik7aWYoTChiKSlmb3IodmFyIGM9YS5sZW5ndGg9MDtjPGIubGVuZ3RoO2MrKylhLnB1c2goJChiW2NdKSk7ZWxzZXtjPWEuJCRoYXNoS2V5O3EoYSxmdW5jdGlvbihiLGMpe2RlbGV0ZSBhW2NdfSk7Zm9yKHZhciBkIGluIGIpYVtkXT0kKGJbZF0pO1BiKGEsYyl9fWVsc2UoYT1iKSYmKEwoYik/YT0kKGIsW10pOkthKGIpP2E9bmV3IERhdGUoYi5nZXRUaW1lKCkpOiRhKGIpP2E9UmVnRXhwKGIuc291cmNlKTpXKGIpJiYoYT0kKGIse30pKSk7cmV0dXJuIGF9ZnVuY3Rpb24gUmIoYixhKXthPWF8fHt9O2Zvcih2YXIgYyBpbiBiKSFiLmhhc093blByb3BlcnR5KGMpfHxcIiRcIj09PWMuY2hhckF0KDApJiZcIiRcIj09PWMuY2hhckF0KDEpfHwoYVtjXT1iW2NdKTtyZXR1cm4gYX1mdW5jdGlvbiB0YShiLGEpe2lmKGI9PT1hKXJldHVybiEwO2lmKG51bGw9PT1ifHxudWxsPT09YSlyZXR1cm4hMTtpZihiIT09YiYmYSE9PWEpcmV0dXJuITA7dmFyIGM9dHlwZW9mIGIsXG5kO2lmKGM9PXR5cGVvZiBhJiZcIm9iamVjdFwiPT1jKWlmKEwoYikpe2lmKCFMKGEpKXJldHVybiExO2lmKChjPWIubGVuZ3RoKT09YS5sZW5ndGgpe2ZvcihkPTA7ZDxjO2QrKylpZighdGEoYltkXSxhW2RdKSlyZXR1cm4hMTtyZXR1cm4hMH19ZWxzZXtpZihLYShiKSlyZXR1cm4gS2EoYSkmJmIuZ2V0VGltZSgpPT1hLmdldFRpbWUoKTtpZigkYShiKSYmJGEoYSkpcmV0dXJuIGIudG9TdHJpbmcoKT09YS50b1N0cmluZygpO2lmKGImJmIuJGV2YWxBc3luYyYmYi4kd2F0Y2h8fGEmJmEuJGV2YWxBc3luYyYmYS4kd2F0Y2h8fHphKGIpfHx6YShhKXx8TChhKSlyZXR1cm4hMTtjPXt9O2ZvcihkIGluIGIpaWYoXCIkXCIhPT1kLmNoYXJBdCgwKSYmIU0oYltkXSkpe2lmKCF0YShiW2RdLGFbZF0pKXJldHVybiExO2NbZF09ITB9Zm9yKGQgaW4gYSlpZighYy5oYXNPd25Qcm9wZXJ0eShkKSYmXCIkXCIhPT1kLmNoYXJBdCgwKSYmYVtkXSE9PXMmJiFNKGFbZF0pKXJldHVybiExO3JldHVybiEwfXJldHVybiExfVxuZnVuY3Rpb24gU2IoKXtyZXR1cm4gUi5zZWN1cml0eVBvbGljeSYmUi5zZWN1cml0eVBvbGljeS5pc0FjdGl2ZXx8Ui5xdWVyeVNlbGVjdG9yJiYhKCFSLnF1ZXJ5U2VsZWN0b3IoXCJbbmctY3NwXVwiKSYmIVIucXVlcnlTZWxlY3RvcihcIltkYXRhLW5nLWNzcF1cIikpfWZ1bmN0aW9uIGJiKGIsYSl7dmFyIGM9Mjxhcmd1bWVudHMubGVuZ3RoP3VhLmNhbGwoYXJndW1lbnRzLDIpOltdO3JldHVybiFNKGEpfHxhIGluc3RhbmNlb2YgUmVnRXhwP2E6Yy5sZW5ndGg/ZnVuY3Rpb24oKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD9hLmFwcGx5KGIsYy5jb25jYXQodWEuY2FsbChhcmd1bWVudHMsMCkpKTphLmFwcGx5KGIsYyl9OmZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/YS5hcHBseShiLGFyZ3VtZW50cyk6YS5jYWxsKGIpfX1mdW5jdGlvbiBSYyhiLGEpe3ZhciBjPWE7XCJzdHJpbmdcIj09PXR5cGVvZiBiJiZcIiRcIj09PWIuY2hhckF0KDApP2M9czp6YShhKT9jPVwiJFdJTkRPV1wiOlxuYSYmUj09PWE/Yz1cIiRET0NVTUVOVFwiOmEmJihhLiRldmFsQXN5bmMmJmEuJHdhdGNoKSYmKGM9XCIkU0NPUEVcIik7cmV0dXJuIGN9ZnVuY3Rpb24gcGEoYixhKXtyZXR1cm5cInVuZGVmaW5lZFwiPT09dHlwZW9mIGI/czpKU09OLnN0cmluZ2lmeShiLFJjLGE/XCIgIFwiOm51bGwpfWZ1bmN0aW9uIFRiKGIpe3JldHVybiB3KGIpP0pTT04ucGFyc2UoYik6Yn1mdW5jdGlvbiBPYShiKXtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYj9iPSEwOmImJjAhPT1iLmxlbmd0aD8oYj14KFwiXCIrYiksYj0hKFwiZlwiPT1ifHxcIjBcIj09Ynx8XCJmYWxzZVwiPT1ifHxcIm5vXCI9PWJ8fFwiblwiPT1ifHxcIltdXCI9PWIpKTpiPSExO3JldHVybiBifWZ1bmN0aW9uIGZhKGIpe2I9eihiKS5jbG9uZSgpO3RyeXtiLmVtcHR5KCl9Y2F0Y2goYSl7fXZhciBjPXooXCI8ZGl2PlwiKS5hcHBlbmQoYikuaHRtbCgpO3RyeXtyZXR1cm4gMz09PWJbMF0ubm9kZVR5cGU/eChjKTpjLm1hdGNoKC9eKDxbXj5dKz4pLylbMV0ucmVwbGFjZSgvXjwoW1xcd1xcLV0rKS8sXG5mdW5jdGlvbihhLGIpe3JldHVyblwiPFwiK3goYil9KX1jYXRjaChkKXtyZXR1cm4geChjKX19ZnVuY3Rpb24gVWIoYil7dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQoYil9Y2F0Y2goYSl7fX1mdW5jdGlvbiBWYihiKXt2YXIgYT17fSxjLGQ7cSgoYnx8XCJcIikuc3BsaXQoXCImXCIpLGZ1bmN0aW9uKGIpe2ImJihjPWIuc3BsaXQoXCI9XCIpLGQ9VWIoY1swXSksRChkKSYmKGI9RChjWzFdKT9VYihjWzFdKTohMCxhW2RdP0woYVtkXSk/YVtkXS5wdXNoKGIpOmFbZF09W2FbZF0sYl06YVtkXT1iKSl9KTtyZXR1cm4gYX1mdW5jdGlvbiBXYihiKXt2YXIgYT1bXTtxKGIsZnVuY3Rpb24oYixkKXtMKGIpP3EoYixmdW5jdGlvbihiKXthLnB1c2godmEoZCwhMCkrKCEwPT09Yj9cIlwiOlwiPVwiK3ZhKGIsITApKSl9KTphLnB1c2godmEoZCwhMCkrKCEwPT09Yj9cIlwiOlwiPVwiK3ZhKGIsITApKSl9KTtyZXR1cm4gYS5sZW5ndGg/YS5qb2luKFwiJlwiKTpcIlwifWZ1bmN0aW9uIHNiKGIpe3JldHVybiB2YShiLFxuITApLnJlcGxhY2UoLyUyNi9naSxcIiZcIikucmVwbGFjZSgvJTNEL2dpLFwiPVwiKS5yZXBsYWNlKC8lMkIvZ2ksXCIrXCIpfWZ1bmN0aW9uIHZhKGIsYSl7cmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChiKS5yZXBsYWNlKC8lNDAvZ2ksXCJAXCIpLnJlcGxhY2UoLyUzQS9naSxcIjpcIikucmVwbGFjZSgvJTI0L2csXCIkXCIpLnJlcGxhY2UoLyUyQy9naSxcIixcIikucmVwbGFjZSgvJTIwL2csYT9cIiUyMFwiOlwiK1wiKX1mdW5jdGlvbiBTYyhiLGEpe2Z1bmN0aW9uIGMoYSl7YSYmZC5wdXNoKGEpfXZhciBkPVtiXSxlLGcsZj1bXCJuZzphcHBcIixcIm5nLWFwcFwiLFwieC1uZy1hcHBcIixcImRhdGEtbmctYXBwXCJdLGg9L1xcc25nWzpcXC1dYXBwKDpcXHMqKFtcXHdcXGRfXSspOz8pP1xccy87cShmLGZ1bmN0aW9uKGEpe2ZbYV09ITA7YyhSLmdldEVsZW1lbnRCeUlkKGEpKTthPWEucmVwbGFjZShcIjpcIixcIlxcXFw6XCIpO2IucXVlcnlTZWxlY3RvckFsbCYmKHEoYi5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK2EpLGMpLHEoYi5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK1xuYStcIlxcXFw6XCIpLGMpLHEoYi5xdWVyeVNlbGVjdG9yQWxsKFwiW1wiK2ErXCJdXCIpLGMpKX0pO3EoZCxmdW5jdGlvbihhKXtpZighZSl7dmFyIGI9aC5leGVjKFwiIFwiK2EuY2xhc3NOYW1lK1wiIFwiKTtiPyhlPWEsZz0oYlsyXXx8XCJcIikucmVwbGFjZSgvXFxzKy9nLFwiLFwiKSk6cShhLmF0dHJpYnV0ZXMsZnVuY3Rpb24oYil7IWUmJmZbYi5uYW1lXSYmKGU9YSxnPWIudmFsdWUpfSl9fSk7ZSYmYShlLGc/W2ddOltdKX1mdW5jdGlvbiBYYihiLGEpe3ZhciBjPWZ1bmN0aW9uKCl7Yj16KGIpO2lmKGIuaW5qZWN0b3IoKSl7dmFyIGM9YlswXT09PVI/XCJkb2N1bWVudFwiOmZhKGIpO3Rocm93IE5hKFwiYnRzdHJwZFwiLGMpO31hPWF8fFtdO2EudW5zaGlmdChbXCIkcHJvdmlkZVwiLGZ1bmN0aW9uKGEpe2EudmFsdWUoXCIkcm9vdEVsZW1lbnRcIixiKX1dKTthLnVuc2hpZnQoXCJuZ1wiKTtjPVliKGEpO2MuaW52b2tlKFtcIiRyb290U2NvcGVcIixcIiRyb290RWxlbWVudFwiLFwiJGNvbXBpbGVcIixcIiRpbmplY3RvclwiLFwiJGFuaW1hdGVcIixcbmZ1bmN0aW9uKGEsYixjLGQsZSl7YS4kYXBwbHkoZnVuY3Rpb24oKXtiLmRhdGEoXCIkaW5qZWN0b3JcIixkKTtjKGIpKGEpfSl9XSk7cmV0dXJuIGN9LGQ9L15OR19ERUZFUl9CT09UU1RSQVAhLztpZihQJiYhZC50ZXN0KFAubmFtZSkpcmV0dXJuIGMoKTtQLm5hbWU9UC5uYW1lLnJlcGxhY2UoZCxcIlwiKTtCYS5yZXN1bWVCb290c3RyYXA9ZnVuY3Rpb24oYil7cShiLGZ1bmN0aW9uKGIpe2EucHVzaChiKX0pO2MoKX19ZnVuY3Rpb24gY2IoYixhKXthPWF8fFwiX1wiO3JldHVybiBiLnJlcGxhY2UoVGMsZnVuY3Rpb24oYixkKXtyZXR1cm4oZD9hOlwiXCIpK2IudG9Mb3dlckNhc2UoKX0pfWZ1bmN0aW9uIHRiKGIsYSxjKXtpZighYil0aHJvdyBOYShcImFyZXFcIixhfHxcIj9cIixjfHxcInJlcXVpcmVkXCIpO3JldHVybiBifWZ1bmN0aW9uIFBhKGIsYSxjKXtjJiZMKGIpJiYoYj1iW2IubGVuZ3RoLTFdKTt0YihNKGIpLGEsXCJub3QgYSBmdW5jdGlvbiwgZ290IFwiKyhiJiZcIm9iamVjdFwiPT10eXBlb2YgYj9cbmIuY29uc3RydWN0b3IubmFtZXx8XCJPYmplY3RcIjp0eXBlb2YgYikpO3JldHVybiBifWZ1bmN0aW9uIHdhKGIsYSl7aWYoXCJoYXNPd25Qcm9wZXJ0eVwiPT09Yil0aHJvdyBOYShcImJhZG5hbWVcIixhKTt9ZnVuY3Rpb24gWmIoYixhLGMpe2lmKCFhKXJldHVybiBiO2E9YS5zcGxpdChcIi5cIik7Zm9yKHZhciBkLGU9YixnPWEubGVuZ3RoLGY9MDtmPGc7ZisrKWQ9YVtmXSxiJiYoYj0oZT1iKVtkXSk7cmV0dXJuIWMmJk0oYik/YmIoZSxiKTpifWZ1bmN0aW9uIHViKGIpe3ZhciBhPWJbMF07Yj1iW2IubGVuZ3RoLTFdO2lmKGE9PT1iKXJldHVybiB6KGEpO3ZhciBjPVthXTtkb3thPWEubmV4dFNpYmxpbmc7aWYoIWEpYnJlYWs7Yy5wdXNoKGEpfXdoaWxlKGEhPT1iKTtyZXR1cm4geihjKX1mdW5jdGlvbiBVYyhiKXt2YXIgYT10KFwiJGluamVjdG9yXCIpLGM9dChcIm5nXCIpO2I9Yi5hbmd1bGFyfHwoYi5hbmd1bGFyPXt9KTtiLiQkbWluRXJyPWIuJCRtaW5FcnJ8fHQ7cmV0dXJuIGIubW9kdWxlfHxcbihiLm1vZHVsZT1mdW5jdGlvbigpe3ZhciBiPXt9O3JldHVybiBmdW5jdGlvbihlLGcsZil7aWYoXCJoYXNPd25Qcm9wZXJ0eVwiPT09ZSl0aHJvdyBjKFwiYmFkbmFtZVwiLFwibW9kdWxlXCIpO2cmJmIuaGFzT3duUHJvcGVydHkoZSkmJihiW2VdPW51bGwpO3JldHVybiBiW2VdfHwoYltlXT1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYSxkLGUpe3JldHVybiBmdW5jdGlvbigpe2NbZXx8XCJwdXNoXCJdKFthLGQsYXJndW1lbnRzXSk7cmV0dXJuIG59fWlmKCFnKXRocm93IGEoXCJub21vZFwiLGUpO3ZhciBjPVtdLGQ9W10sbD1iKFwiJGluamVjdG9yXCIsXCJpbnZva2VcIiksbj17X2ludm9rZVF1ZXVlOmMsX3J1bkJsb2NrczpkLHJlcXVpcmVzOmcsbmFtZTplLHByb3ZpZGVyOmIoXCIkcHJvdmlkZVwiLFwicHJvdmlkZXJcIiksZmFjdG9yeTpiKFwiJHByb3ZpZGVcIixcImZhY3RvcnlcIiksc2VydmljZTpiKFwiJHByb3ZpZGVcIixcInNlcnZpY2VcIiksdmFsdWU6YihcIiRwcm92aWRlXCIsXCJ2YWx1ZVwiKSxjb25zdGFudDpiKFwiJHByb3ZpZGVcIixcblwiY29uc3RhbnRcIixcInVuc2hpZnRcIiksYW5pbWF0aW9uOmIoXCIkYW5pbWF0ZVByb3ZpZGVyXCIsXCJyZWdpc3RlclwiKSxmaWx0ZXI6YihcIiRmaWx0ZXJQcm92aWRlclwiLFwicmVnaXN0ZXJcIiksY29udHJvbGxlcjpiKFwiJGNvbnRyb2xsZXJQcm92aWRlclwiLFwicmVnaXN0ZXJcIiksZGlyZWN0aXZlOmIoXCIkY29tcGlsZVByb3ZpZGVyXCIsXCJkaXJlY3RpdmVcIiksY29uZmlnOmwscnVuOmZ1bmN0aW9uKGEpe2QucHVzaChhKTtyZXR1cm4gdGhpc319O2YmJmwoZik7cmV0dXJuIG59KCkpfX0oKSl9ZnVuY3Rpb24gUWEoYil7cmV0dXJuIGIucmVwbGFjZShWYyxmdW5jdGlvbihhLGIsZCxlKXtyZXR1cm4gZT9kLnRvVXBwZXJDYXNlKCk6ZH0pLnJlcGxhY2UoV2MsXCJNb3okMVwiKX1mdW5jdGlvbiB2YihiLGEsYyxkKXtmdW5jdGlvbiBlKGIpe3ZhciBlPWMmJmI/W3RoaXMuZmlsdGVyKGIpXTpbdGhpc10sbT1hLGssbCxuLHAscixGO2lmKCFkfHxudWxsIT1iKWZvcig7ZS5sZW5ndGg7KWZvcihrPWUuc2hpZnQoKSxcbmw9MCxuPWsubGVuZ3RoO2w8bjtsKyspZm9yKHA9eihrW2xdKSxtP3AudHJpZ2dlckhhbmRsZXIoXCIkZGVzdHJveVwiKTptPSFtLHI9MCxwPShGPXAuY2hpbGRyZW4oKSkubGVuZ3RoO3I8cDtyKyspZS5wdXNoKENhKEZbcl0pKTtyZXR1cm4gZy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIGc9Q2EuZm5bYl0sZz1nLiRvcmlnaW5hbHx8ZztlLiRvcmlnaW5hbD1nO0NhLmZuW2JdPWV9ZnVuY3Rpb24gTyhiKXtpZihiIGluc3RhbmNlb2YgTylyZXR1cm4gYjt3KGIpJiYoYj1aKGIpKTtpZighKHRoaXMgaW5zdGFuY2VvZiBPKSl7aWYodyhiKSYmXCI8XCIhPWIuY2hhckF0KDApKXRocm93IHdiKFwibm9zZWxcIik7cmV0dXJuIG5ldyBPKGIpfWlmKHcoYikpe3ZhciBhPVIuY3JlYXRlRWxlbWVudChcImRpdlwiKTthLmlubmVySFRNTD1cIjxkaXY+JiMxNjA7PC9kaXY+XCIrYjthLnJlbW92ZUNoaWxkKGEuZmlyc3RDaGlsZCk7eGIodGhpcyxhLmNoaWxkTm9kZXMpO3ooUi5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkpLmFwcGVuZCh0aGlzKX1lbHNlIHhiKHRoaXMsXG5iKX1mdW5jdGlvbiB5YihiKXtyZXR1cm4gYi5jbG9uZU5vZGUoITApfWZ1bmN0aW9uIERhKGIpeyRiKGIpO3ZhciBhPTA7Zm9yKGI9Yi5jaGlsZE5vZGVzfHxbXTthPGIubGVuZ3RoO2ErKylEYShiW2FdKX1mdW5jdGlvbiBhYyhiLGEsYyxkKXtpZihEKGQpKXRocm93IHdiKFwib2ZmYXJnc1wiKTt2YXIgZT1qYShiLFwiZXZlbnRzXCIpO2phKGIsXCJoYW5kbGVcIikmJih1KGEpP3EoZSxmdW5jdGlvbihhLGMpe3piKGIsYyxhKTtkZWxldGUgZVtjXX0pOnEoYS5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSl7dShjKT8oemIoYixhLGVbYV0pLGRlbGV0ZSBlW2FdKTpNYShlW2FdfHxbXSxjKX0pKX1mdW5jdGlvbiAkYihiLGEpe3ZhciBjPWJbZGJdLGQ9UmFbY107ZCYmKGE/ZGVsZXRlIFJhW2NdLmRhdGFbYV06KGQuaGFuZGxlJiYoZC5ldmVudHMuJGRlc3Ryb3kmJmQuaGFuZGxlKHt9LFwiJGRlc3Ryb3lcIiksYWMoYikpLGRlbGV0ZSBSYVtjXSxiW2RiXT1zKSl9ZnVuY3Rpb24gamEoYixhLGMpe3ZhciBkPVxuYltkYl0sZD1SYVtkfHwtMV07aWYoRChjKSlkfHwoYltkYl09ZD0rK1hjLGQ9UmFbZF09e30pLGRbYV09YztlbHNlIHJldHVybiBkJiZkW2FdfWZ1bmN0aW9uIGJjKGIsYSxjKXt2YXIgZD1qYShiLFwiZGF0YVwiKSxlPUQoYyksZz0hZSYmRChhKSxmPWcmJiFXKGEpO2R8fGZ8fGphKGIsXCJkYXRhXCIsZD17fSk7aWYoZSlkW2FdPWM7ZWxzZSBpZihnKXtpZihmKXJldHVybiBkJiZkW2FdO3koZCxhKX1lbHNlIHJldHVybiBkfWZ1bmN0aW9uIEFiKGIsYSl7cmV0dXJuIGIuZ2V0QXR0cmlidXRlPy0xPChcIiBcIisoYi5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIikrXCIgXCIpLnJlcGxhY2UoL1tcXG5cXHRdL2csXCIgXCIpLmluZGV4T2YoXCIgXCIrYStcIiBcIik6ITF9ZnVuY3Rpb24gQmIoYixhKXthJiZiLnNldEF0dHJpYnV0ZSYmcShhLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhKXtiLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsWigoXCIgXCIrKGIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpK1wiIFwiKS5yZXBsYWNlKC9bXFxuXFx0XS9nLFxuXCIgXCIpLnJlcGxhY2UoXCIgXCIrWihhKStcIiBcIixcIiBcIikpKX0pfWZ1bmN0aW9uIENiKGIsYSl7aWYoYSYmYi5zZXRBdHRyaWJ1dGUpe3ZhciBjPShcIiBcIisoYi5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIikrXCIgXCIpLnJlcGxhY2UoL1tcXG5cXHRdL2csXCIgXCIpO3EoYS5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSl7YT1aKGEpOy0xPT09Yy5pbmRleE9mKFwiIFwiK2ErXCIgXCIpJiYoYys9YStcIiBcIil9KTtiLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsWihjKSl9fWZ1bmN0aW9uIHhiKGIsYSl7aWYoYSl7YT1hLm5vZGVOYW1lfHwhRChhLmxlbmd0aCl8fHphKGEpP1thXTphO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKWIucHVzaChhW2NdKX19ZnVuY3Rpb24gY2MoYixhKXtyZXR1cm4gZWIoYixcIiRcIisoYXx8XCJuZ0NvbnRyb2xsZXJcIikrXCJDb250cm9sbGVyXCIpfWZ1bmN0aW9uIGViKGIsYSxjKXtiPXooYik7OT09YlswXS5ub2RlVHlwZSYmKGI9Yi5maW5kKFwiaHRtbFwiKSk7Zm9yKGE9TChhKT9hOlthXTtiLmxlbmd0aDspe2Zvcih2YXIgZD1cbjAsZT1hLmxlbmd0aDtkPGU7ZCsrKWlmKChjPWIuZGF0YShhW2RdKSkhPT1zKXJldHVybiBjO2I9Yi5wYXJlbnQoKX19ZnVuY3Rpb24gZGMoYil7Zm9yKHZhciBhPTAsYz1iLmNoaWxkTm9kZXM7YTxjLmxlbmd0aDthKyspRGEoY1thXSk7Zm9yKDtiLmZpcnN0Q2hpbGQ7KWIucmVtb3ZlQ2hpbGQoYi5maXJzdENoaWxkKX1mdW5jdGlvbiBlYyhiLGEpe3ZhciBjPWZiW2EudG9Mb3dlckNhc2UoKV07cmV0dXJuIGMmJmZjW2Iubm9kZU5hbWVdJiZjfWZ1bmN0aW9uIFljKGIsYSl7dmFyIGM9ZnVuY3Rpb24oYyxlKXtjLnByZXZlbnREZWZhdWx0fHwoYy5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe2MucmV0dXJuVmFsdWU9ITF9KTtjLnN0b3BQcm9wYWdhdGlvbnx8KGMuc3RvcFByb3BhZ2F0aW9uPWZ1bmN0aW9uKCl7Yy5jYW5jZWxCdWJibGU9ITB9KTtjLnRhcmdldHx8KGMudGFyZ2V0PWMuc3JjRWxlbWVudHx8Uik7aWYodShjLmRlZmF1bHRQcmV2ZW50ZWQpKXt2YXIgZz1jLnByZXZlbnREZWZhdWx0O1xuYy5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe2MuZGVmYXVsdFByZXZlbnRlZD0hMDtnLmNhbGwoYyl9O2MuZGVmYXVsdFByZXZlbnRlZD0hMX1jLmlzRGVmYXVsdFByZXZlbnRlZD1mdW5jdGlvbigpe3JldHVybiBjLmRlZmF1bHRQcmV2ZW50ZWR8fCExPT09Yy5yZXR1cm5WYWx1ZX07dmFyIGY9UmIoYVtlfHxjLnR5cGVdfHxbXSk7cShmLGZ1bmN0aW9uKGEpe2EuY2FsbChiLGMpfSk7OD49Tj8oYy5wcmV2ZW50RGVmYXVsdD1udWxsLGMuc3RvcFByb3BhZ2F0aW9uPW51bGwsYy5pc0RlZmF1bHRQcmV2ZW50ZWQ9bnVsbCk6KGRlbGV0ZSBjLnByZXZlbnREZWZhdWx0LGRlbGV0ZSBjLnN0b3BQcm9wYWdhdGlvbixkZWxldGUgYy5pc0RlZmF1bHRQcmV2ZW50ZWQpfTtjLmVsZW09YjtyZXR1cm4gY31mdW5jdGlvbiBFYShiKXt2YXIgYT10eXBlb2YgYixjO1wib2JqZWN0XCI9PWEmJm51bGwhPT1iP1wiZnVuY3Rpb25cIj09dHlwZW9mKGM9Yi4kJGhhc2hLZXkpP2M9Yi4kJGhhc2hLZXkoKTpjPT09XG5zJiYoYz1iLiQkaGFzaEtleT1aYSgpKTpjPWI7cmV0dXJuIGErXCI6XCIrY31mdW5jdGlvbiBTYShiKXtxKGIsdGhpcy5wdXQsdGhpcyl9ZnVuY3Rpb24gZ2MoYil7dmFyIGEsYztcImZ1bmN0aW9uXCI9PXR5cGVvZiBiPyhhPWIuJGluamVjdCl8fChhPVtdLGIubGVuZ3RoJiYoYz1iLnRvU3RyaW5nKCkucmVwbGFjZShaYyxcIlwiKSxjPWMubWF0Y2goJGMpLHEoY1sxXS5zcGxpdChhZCksZnVuY3Rpb24oYil7Yi5yZXBsYWNlKGJkLGZ1bmN0aW9uKGIsYyxkKXthLnB1c2goZCl9KX0pKSxiLiRpbmplY3Q9YSk6TChiKT8oYz1iLmxlbmd0aC0xLFBhKGJbY10sXCJmblwiKSxhPWIuc2xpY2UoMCxjKSk6UGEoYixcImZuXCIsITApO3JldHVybiBhfWZ1bmN0aW9uIFliKGIpe2Z1bmN0aW9uIGEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7aWYoVyhiKSlxKGIsT2IoYSkpO2Vsc2UgcmV0dXJuIGEoYixjKX19ZnVuY3Rpb24gYyhhLGIpe3dhKGEsXCJzZXJ2aWNlXCIpO2lmKE0oYil8fEwoYikpYj1uLmluc3RhbnRpYXRlKGIpO1xuaWYoIWIuJGdldCl0aHJvdyBUYShcInBnZXRcIixhKTtyZXR1cm4gbFthK2hdPWJ9ZnVuY3Rpb24gZChhLGIpe3JldHVybiBjKGEseyRnZXQ6Yn0pfWZ1bmN0aW9uIGUoYSl7dmFyIGI9W10sYyxkLGcsaDtxKGEsZnVuY3Rpb24oYSl7aWYoIWsuZ2V0KGEpKXtrLnB1dChhLCEwKTt0cnl7aWYodyhhKSlmb3IoYz1VYShhKSxiPWIuY29uY2F0KGUoYy5yZXF1aXJlcykpLmNvbmNhdChjLl9ydW5CbG9ja3MpLGQ9Yy5faW52b2tlUXVldWUsZz0wLGg9ZC5sZW5ndGg7ZzxoO2crKyl7dmFyIGY9ZFtnXSxtPW4uZ2V0KGZbMF0pO21bZlsxXV0uYXBwbHkobSxmWzJdKX1lbHNlIE0oYSk/Yi5wdXNoKG4uaW52b2tlKGEpKTpMKGEpP2IucHVzaChuLmludm9rZShhKSk6UGEoYSxcIm1vZHVsZVwiKX1jYXRjaChyKXt0aHJvdyBMKGEpJiYoYT1hW2EubGVuZ3RoLTFdKSxyLm1lc3NhZ2UmJihyLnN0YWNrJiYtMT09ci5zdGFjay5pbmRleE9mKHIubWVzc2FnZSkpJiYocj1yLm1lc3NhZ2UrXCJcXG5cIityLnN0YWNrKSxcblRhKFwibW9kdWxlcnJcIixhLHIuc3RhY2t8fHIubWVzc2FnZXx8cik7fX19KTtyZXR1cm4gYn1mdW5jdGlvbiBnKGEsYil7ZnVuY3Rpb24gYyhkKXtpZihhLmhhc093blByb3BlcnR5KGQpKXtpZihhW2RdPT09Zil0aHJvdyBUYShcImNkZXBcIixtLmpvaW4oXCIgPC0gXCIpKTtyZXR1cm4gYVtkXX10cnl7cmV0dXJuIG0udW5zaGlmdChkKSxhW2RdPWYsYVtkXT1iKGQpfWNhdGNoKGUpe3Rocm93IGFbZF09PT1mJiZkZWxldGUgYVtkXSxlO31maW5hbGx5e20uc2hpZnQoKX19ZnVuY3Rpb24gZChhLGIsZSl7dmFyIGc9W10saD1nYyhhKSxmLG0sazttPTA7Zm9yKGY9aC5sZW5ndGg7bTxmO20rKyl7az1oW21dO2lmKFwic3RyaW5nXCIhPT10eXBlb2Ygayl0aHJvdyBUYShcIml0a25cIixrKTtnLnB1c2goZSYmZS5oYXNPd25Qcm9wZXJ0eShrKT9lW2tdOmMoaykpfWEuJGluamVjdHx8KGE9YVtmXSk7cmV0dXJuIGEuYXBwbHkoYixnKX1yZXR1cm57aW52b2tlOmQsaW5zdGFudGlhdGU6ZnVuY3Rpb24oYSxcbmIpe3ZhciBjPWZ1bmN0aW9uKCl7fSxlO2MucHJvdG90eXBlPShMKGEpP2FbYS5sZW5ndGgtMV06YSkucHJvdG90eXBlO2M9bmV3IGM7ZT1kKGEsYyxiKTtyZXR1cm4gVyhlKXx8TShlKT9lOmN9LGdldDpjLGFubm90YXRlOmdjLGhhczpmdW5jdGlvbihiKXtyZXR1cm4gbC5oYXNPd25Qcm9wZXJ0eShiK2gpfHxhLmhhc093blByb3BlcnR5KGIpfX19dmFyIGY9e30saD1cIlByb3ZpZGVyXCIsbT1bXSxrPW5ldyBTYSxsPXskcHJvdmlkZTp7cHJvdmlkZXI6YShjKSxmYWN0b3J5OmEoZCksc2VydmljZTphKGZ1bmN0aW9uKGEsYil7cmV0dXJuIGQoYSxbXCIkaW5qZWN0b3JcIixmdW5jdGlvbihhKXtyZXR1cm4gYS5pbnN0YW50aWF0ZShiKX1dKX0pLHZhbHVlOmEoZnVuY3Rpb24oYSxiKXtyZXR1cm4gZChhLFkoYikpfSksY29uc3RhbnQ6YShmdW5jdGlvbihhLGIpe3dhKGEsXCJjb25zdGFudFwiKTtsW2FdPWI7cFthXT1ifSksZGVjb3JhdG9yOmZ1bmN0aW9uKGEsYil7dmFyIGM9bi5nZXQoYStoKSxcbmQ9Yy4kZ2V0O2MuJGdldD1mdW5jdGlvbigpe3ZhciBhPXIuaW52b2tlKGQsYyk7cmV0dXJuIHIuaW52b2tlKGIsbnVsbCx7JGRlbGVnYXRlOmF9KX19fX0sbj1sLiRpbmplY3Rvcj1nKGwsZnVuY3Rpb24oKXt0aHJvdyBUYShcInVucHJcIixtLmpvaW4oXCIgPC0gXCIpKTt9KSxwPXt9LHI9cC4kaW5qZWN0b3I9ZyhwLGZ1bmN0aW9uKGEpe2E9bi5nZXQoYStoKTtyZXR1cm4gci5pbnZva2UoYS4kZ2V0LGEpfSk7cShlKGIpLGZ1bmN0aW9uKGEpe3IuaW52b2tlKGF8fEUpfSk7cmV0dXJuIHJ9ZnVuY3Rpb24gY2QoKXt2YXIgYj0hMDt0aGlzLmRpc2FibGVBdXRvU2Nyb2xsaW5nPWZ1bmN0aW9uKCl7Yj0hMX07dGhpcy4kZ2V0PVtcIiR3aW5kb3dcIixcIiRsb2NhdGlvblwiLFwiJHJvb3RTY29wZVwiLGZ1bmN0aW9uKGEsYyxkKXtmdW5jdGlvbiBlKGEpe3ZhciBiPW51bGw7cShhLGZ1bmN0aW9uKGEpe2J8fFwiYVwiIT09eChhLm5vZGVOYW1lKXx8KGI9YSl9KTtyZXR1cm4gYn1mdW5jdGlvbiBnKCl7dmFyIGI9XG5jLmhhc2goKSxkO2I/KGQ9Zi5nZXRFbGVtZW50QnlJZChiKSk/ZC5zY3JvbGxJbnRvVmlldygpOihkPWUoZi5nZXRFbGVtZW50c0J5TmFtZShiKSkpP2Quc2Nyb2xsSW50b1ZpZXcoKTpcInRvcFwiPT09YiYmYS5zY3JvbGxUbygwLDApOmEuc2Nyb2xsVG8oMCwwKX12YXIgZj1hLmRvY3VtZW50O2ImJmQuJHdhdGNoKGZ1bmN0aW9uKCl7cmV0dXJuIGMuaGFzaCgpfSxmdW5jdGlvbigpe2QuJGV2YWxBc3luYyhnKX0pO3JldHVybiBnfV19ZnVuY3Rpb24gZGQoYixhLGMsZCl7ZnVuY3Rpb24gZShhKXt0cnl7YS5hcHBseShudWxsLHVhLmNhbGwoYXJndW1lbnRzLDEpKX1maW5hbGx5e2lmKEYtLSwwPT09Rilmb3IoO0EubGVuZ3RoOyl0cnl7QS5wb3AoKSgpfWNhdGNoKGIpe2MuZXJyb3IoYil9fX1mdW5jdGlvbiBnKGEsYil7KGZ1bmN0aW9uIFMoKXtxKEgsZnVuY3Rpb24oYSl7YSgpfSk7dj1iKFMsYSl9KSgpfWZ1bmN0aW9uIGYoKXtDPW51bGw7USE9aC51cmwoKSYmKFE9aC51cmwoKSxxKGthLFxuZnVuY3Rpb24oYSl7YShoLnVybCgpKX0pKX12YXIgaD10aGlzLG09YVswXSxrPWIubG9jYXRpb24sbD1iLmhpc3Rvcnksbj1iLnNldFRpbWVvdXQscD1iLmNsZWFyVGltZW91dCxyPXt9O2guaXNNb2NrPSExO3ZhciBGPTAsQT1bXTtoLiQkY29tcGxldGVPdXRzdGFuZGluZ1JlcXVlc3Q9ZTtoLiQkaW5jT3V0c3RhbmRpbmdSZXF1ZXN0Q291bnQ9ZnVuY3Rpb24oKXtGKyt9O2gubm90aWZ5V2hlbk5vT3V0c3RhbmRpbmdSZXF1ZXN0cz1mdW5jdGlvbihhKXtxKEgsZnVuY3Rpb24oYSl7YSgpfSk7MD09PUY/YSgpOkEucHVzaChhKX07dmFyIEg9W10sdjtoLmFkZFBvbGxGbj1mdW5jdGlvbihhKXt1KHYpJiZnKDEwMCxuKTtILnB1c2goYSk7cmV0dXJuIGF9O3ZhciBRPWsuaHJlZixLPWEuZmluZChcImJhc2VcIiksQz1udWxsO2gudXJsPWZ1bmN0aW9uKGEsYyl7ayE9PWIubG9jYXRpb24mJihrPWIubG9jYXRpb24pO2whPT1iLmhpc3RvcnkmJihsPWIuaGlzdG9yeSk7aWYoYSl7aWYoUSE9YSlyZXR1cm4gUT1cbmEsZC5oaXN0b3J5P2M/bC5yZXBsYWNlU3RhdGUobnVsbCxcIlwiLGEpOihsLnB1c2hTdGF0ZShudWxsLFwiXCIsYSksSy5hdHRyKFwiaHJlZlwiLEsuYXR0cihcImhyZWZcIikpKTooQz1hLGM/ay5yZXBsYWNlKGEpOmsuaHJlZj1hKSxofWVsc2UgcmV0dXJuIEN8fGsuaHJlZi5yZXBsYWNlKC8lMjcvZyxcIidcIil9O3ZhciBrYT1bXSxJPSExO2gub25VcmxDaGFuZ2U9ZnVuY3Rpb24oYSl7aWYoIUkpe2lmKGQuaGlzdG9yeSl6KGIpLm9uKFwicG9wc3RhdGVcIixmKTtpZihkLmhhc2hjaGFuZ2UpeihiKS5vbihcImhhc2hjaGFuZ2VcIixmKTtlbHNlIGguYWRkUG9sbEZuKGYpO0k9ITB9a2EucHVzaChhKTtyZXR1cm4gYX07aC5iYXNlSHJlZj1mdW5jdGlvbigpe3ZhciBhPUsuYXR0cihcImhyZWZcIik7cmV0dXJuIGE/YS5yZXBsYWNlKC9eKGh0dHBzP1xcOik/XFwvXFwvW15cXC9dKi8sXCJcIik6XCJcIn07dmFyIFU9e30sYmE9XCJcIixhYT1oLmJhc2VIcmVmKCk7aC5jb29raWVzPWZ1bmN0aW9uKGEsYil7dmFyIGQsZSxnLGg7XG5pZihhKWI9PT1zP20uY29va2llPWVzY2FwZShhKStcIj07cGF0aD1cIithYStcIjtleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UXCI6dyhiKSYmKGQ9KG0uY29va2llPWVzY2FwZShhKStcIj1cIitlc2NhcGUoYikrXCI7cGF0aD1cIithYSkubGVuZ3RoKzEsNDA5NjxkJiZjLndhcm4oXCJDb29raWUgJ1wiK2ErXCInIHBvc3NpYmx5IG5vdCBzZXQgb3Igb3ZlcmZsb3dlZCBiZWNhdXNlIGl0IHdhcyB0b28gbGFyZ2UgKFwiK2QrXCIgPiA0MDk2IGJ5dGVzKSFcIikpO2Vsc2V7aWYobS5jb29raWUhPT1iYSlmb3IoYmE9bS5jb29raWUsZD1iYS5zcGxpdChcIjsgXCIpLFU9e30sZz0wO2c8ZC5sZW5ndGg7ZysrKWU9ZFtnXSxoPWUuaW5kZXhPZihcIj1cIiksMDxoJiYoYT11bmVzY2FwZShlLnN1YnN0cmluZygwLGgpKSxVW2FdPT09cyYmKFVbYV09dW5lc2NhcGUoZS5zdWJzdHJpbmcoaCsxKSkpKTtyZXR1cm4gVX19O2guZGVmZXI9ZnVuY3Rpb24oYSxiKXt2YXIgYztGKys7Yz1uKGZ1bmN0aW9uKCl7ZGVsZXRlIHJbY107XG5lKGEpfSxifHwwKTtyW2NdPSEwO3JldHVybiBjfTtoLmRlZmVyLmNhbmNlbD1mdW5jdGlvbihhKXtyZXR1cm4gclthXT8oZGVsZXRlIHJbYV0scChhKSxlKEUpLCEwKTohMX19ZnVuY3Rpb24gZWQoKXt0aGlzLiRnZXQ9W1wiJHdpbmRvd1wiLFwiJGxvZ1wiLFwiJHNuaWZmZXJcIixcIiRkb2N1bWVudFwiLGZ1bmN0aW9uKGIsYSxjLGQpe3JldHVybiBuZXcgZGQoYixkLGEsYyl9XX1mdW5jdGlvbiBmZCgpe3RoaXMuJGdldD1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixkKXtmdW5jdGlvbiBlKGEpe2EhPW4mJihwP3A9PWEmJihwPWEubik6cD1hLGcoYS5uLGEucCksZyhhLG4pLG49YSxuLm49bnVsbCl9ZnVuY3Rpb24gZyhhLGIpe2EhPWImJihhJiYoYS5wPWIpLGImJihiLm49YSkpfWlmKGIgaW4gYSl0aHJvdyB0KFwiJGNhY2hlRmFjdG9yeVwiKShcImlpZFwiLGIpO3ZhciBmPTAsaD15KHt9LGQse2lkOmJ9KSxtPXt9LGs9ZCYmZC5jYXBhY2l0eXx8TnVtYmVyLk1BWF9WQUxVRSxsPXt9LG49bnVsbCxwPW51bGw7XG5yZXR1cm4gYVtiXT17cHV0OmZ1bmN0aW9uKGEsYil7dmFyIGM9bFthXXx8KGxbYV09e2tleTphfSk7ZShjKTtpZighdShiKSlyZXR1cm4gYSBpbiBtfHxmKyssbVthXT1iLGY+ayYmdGhpcy5yZW1vdmUocC5rZXkpLGJ9LGdldDpmdW5jdGlvbihhKXt2YXIgYj1sW2FdO2lmKGIpcmV0dXJuIGUoYiksbVthXX0scmVtb3ZlOmZ1bmN0aW9uKGEpe3ZhciBiPWxbYV07YiYmKGI9PW4mJihuPWIucCksYj09cCYmKHA9Yi5uKSxnKGIubixiLnApLGRlbGV0ZSBsW2FdLGRlbGV0ZSBtW2FdLGYtLSl9LHJlbW92ZUFsbDpmdW5jdGlvbigpe209e307Zj0wO2w9e307bj1wPW51bGx9LGRlc3Ryb3k6ZnVuY3Rpb24oKXtsPWg9bT1udWxsO2RlbGV0ZSBhW2JdfSxpbmZvOmZ1bmN0aW9uKCl7cmV0dXJuIHkoe30saCx7c2l6ZTpmfSl9fX12YXIgYT17fTtiLmluZm89ZnVuY3Rpb24oKXt2YXIgYj17fTtxKGEsZnVuY3Rpb24oYSxlKXtiW2VdPWEuaW5mbygpfSk7cmV0dXJuIGJ9O2IuZ2V0PWZ1bmN0aW9uKGIpe3JldHVybiBhW2JdfTtcbnJldHVybiBifX1mdW5jdGlvbiBnZCgpe3RoaXMuJGdldD1bXCIkY2FjaGVGYWN0b3J5XCIsZnVuY3Rpb24oYil7cmV0dXJuIGIoXCJ0ZW1wbGF0ZXNcIil9XX1mdW5jdGlvbiBpYyhiLGEpe3ZhciBjPXt9LGQ9XCJEaXJlY3RpdmVcIixlPS9eXFxzKmRpcmVjdGl2ZVxcOlxccyooW1xcZFxcd1xcLV9dKylcXHMrKC4qKSQvLGc9LygoW1xcZFxcd1xcLV9dKykoPzpcXDooW147XSspKT87PykvLGY9L14ob25bYS16XSt8Zm9ybWFjdGlvbikkLzt0aGlzLmRpcmVjdGl2ZT1mdW5jdGlvbiBtKGEsZSl7d2EoYSxcImRpcmVjdGl2ZVwiKTt3KGEpPyh0YihlLFwiZGlyZWN0aXZlRmFjdG9yeVwiKSxjLmhhc093blByb3BlcnR5KGEpfHwoY1thXT1bXSxiLmZhY3RvcnkoYStkLFtcIiRpbmplY3RvclwiLFwiJGV4Y2VwdGlvbkhhbmRsZXJcIixmdW5jdGlvbihiLGQpe3ZhciBlPVtdO3EoY1thXSxmdW5jdGlvbihjLGcpe3RyeXt2YXIgZj1iLmludm9rZShjKTtNKGYpP2Y9e2NvbXBpbGU6WShmKX06IWYuY29tcGlsZSYmZi5saW5rJiYoZi5jb21waWxlPVxuWShmLmxpbmspKTtmLnByaW9yaXR5PWYucHJpb3JpdHl8fDA7Zi5pbmRleD1nO2YubmFtZT1mLm5hbWV8fGE7Zi5yZXF1aXJlPWYucmVxdWlyZXx8Zi5jb250cm9sbGVyJiZmLm5hbWU7Zi5yZXN0cmljdD1mLnJlc3RyaWN0fHxcIkFcIjtlLnB1c2goZil9Y2F0Y2gobSl7ZChtKX19KTtyZXR1cm4gZX1dKSksY1thXS5wdXNoKGUpKTpxKGEsT2IobSkpO3JldHVybiB0aGlzfTt0aGlzLmFIcmVmU2FuaXRpemF0aW9uV2hpdGVsaXN0PWZ1bmN0aW9uKGIpe3JldHVybiBEKGIpPyhhLmFIcmVmU2FuaXRpemF0aW9uV2hpdGVsaXN0KGIpLHRoaXMpOmEuYUhyZWZTYW5pdGl6YXRpb25XaGl0ZWxpc3QoKX07dGhpcy5pbWdTcmNTYW5pdGl6YXRpb25XaGl0ZWxpc3Q9ZnVuY3Rpb24oYil7cmV0dXJuIEQoYik/KGEuaW1nU3JjU2FuaXRpemF0aW9uV2hpdGVsaXN0KGIpLHRoaXMpOmEuaW1nU3JjU2FuaXRpemF0aW9uV2hpdGVsaXN0KCl9O3RoaXMuJGdldD1bXCIkaW5qZWN0b3JcIixcIiRpbnRlcnBvbGF0ZVwiLFxuXCIkZXhjZXB0aW9uSGFuZGxlclwiLFwiJGh0dHBcIixcIiR0ZW1wbGF0ZUNhY2hlXCIsXCIkcGFyc2VcIixcIiRjb250cm9sbGVyXCIsXCIkcm9vdFNjb3BlXCIsXCIkZG9jdW1lbnRcIixcIiRzY2VcIixcIiRhbmltYXRlXCIsXCIkJHNhbml0aXplVXJpXCIsZnVuY3Rpb24oYSxiLGwsbixwLHIsRixBLEgsdixRLEspe2Z1bmN0aW9uIEMoYSxiLGMsZCxlKXthIGluc3RhbmNlb2Ygenx8KGE9eihhKSk7cShhLGZ1bmN0aW9uKGIsYyl7Mz09Yi5ub2RlVHlwZSYmYi5ub2RlVmFsdWUubWF0Y2goL1xcUysvKSYmKGFbY109eihiKS53cmFwKFwiPHNwYW4+PC9zcGFuPlwiKS5wYXJlbnQoKVswXSl9KTt2YXIgZz1JKGEsYixhLGMsZCxlKTtrYShhLFwibmctc2NvcGVcIik7cmV0dXJuIGZ1bmN0aW9uKGIsYyxkKXt0YihiLFwic2NvcGVcIik7dmFyIGU9Yz9GYS5jbG9uZS5jYWxsKGEpOmE7cShkLGZ1bmN0aW9uKGEsYil7ZS5kYXRhKFwiJFwiK2IrXCJDb250cm9sbGVyXCIsYSl9KTtkPTA7Zm9yKHZhciBmPWUubGVuZ3RoO2Q8ZjtkKyspe3ZhciBtPVxuZVtkXS5ub2RlVHlwZTsxIT09bSYmOSE9PW18fGUuZXEoZCkuZGF0YShcIiRzY29wZVwiLGIpfWMmJmMoZSxiKTtnJiZnKGIsZSxlKTtyZXR1cm4gZX19ZnVuY3Rpb24ga2EoYSxiKXt0cnl7YS5hZGRDbGFzcyhiKX1jYXRjaChjKXt9fWZ1bmN0aW9uIEkoYSxiLGMsZCxlLGcpe2Z1bmN0aW9uIGYoYSxjLGQsZSl7dmFyIGcsayxyLGwsbixwLEo7Zz1jLmxlbmd0aDt2YXIgRj1BcnJheShnKTtmb3Iobj0wO248ZztuKyspRltuXT1jW25dO0o9bj0wO2ZvcihwPW0ubGVuZ3RoO248cDtKKyspaz1GW0pdLGM9bVtuKytdLGc9bVtuKytdLHI9eihrKSxjPyhjLnNjb3BlPyhsPWEuJG5ldygpLHIuZGF0YShcIiRzY29wZVwiLGwpKTpsPWEsKHI9Yy50cmFuc2NsdWRlKXx8IWUmJmI/YyhnLGwsayxkLFUoYSxyfHxiKSk6YyhnLGwsayxkLGUpKTpnJiZnKGEsay5jaGlsZE5vZGVzLHMsZSl9Zm9yKHZhciBtPVtdLGsscixsLG4scD0wO3A8YS5sZW5ndGg7cCsrKWs9bmV3IERiLHI9YmEoYVtwXSxbXSxrLFxuMD09PXA/ZDpzLGUpLChnPXIubGVuZ3RoP2dhKHIsYVtwXSxrLGIsYyxudWxsLFtdLFtdLGcpOm51bGwpJiZnLnNjb3BlJiZrYSh6KGFbcF0pLFwibmctc2NvcGVcIiksaz1nJiZnLnRlcm1pbmFsfHwhKGw9YVtwXS5jaGlsZE5vZGVzKXx8IWwubGVuZ3RoP251bGw6SShsLGc/Zy50cmFuc2NsdWRlOmIpLG0ucHVzaChnLGspLG49bnx8Z3x8ayxnPW51bGw7cmV0dXJuIG4/ZjpudWxsfWZ1bmN0aW9uIFUoYSxiKXtyZXR1cm4gZnVuY3Rpb24oYyxkLGUpe3ZhciBnPSExO2N8fChjPWEuJG5ldygpLGc9Yy4kJHRyYW5zY2x1ZGVkPSEwKTtkPWIoYyxkLGUpO2lmKGcpZC5vbihcIiRkZXN0cm95XCIsYmIoYyxjLiRkZXN0cm95KSk7cmV0dXJuIGR9fWZ1bmN0aW9uIGJhKGEsYixjLGQsZil7dmFyIG09Yy4kYXR0cixrO3N3aXRjaChhLm5vZGVUeXBlKXtjYXNlIDE6UyhiLGxhKEdhKGEpLnRvTG93ZXJDYXNlKCkpLFwiRVwiLGQsZik7dmFyIHIsbCxuO2s9YS5hdHRyaWJ1dGVzO2Zvcih2YXIgcD0wLEY9XG5rJiZrLmxlbmd0aDtwPEY7cCsrKXt2YXIgQT0hMSxRPSExO3I9a1twXTtpZighTnx8ODw9Tnx8ci5zcGVjaWZpZWQpe2w9ci5uYW1lO249bGEobCk7VC50ZXN0KG4pJiYobD1jYihuLnN1YnN0cig2KSxcIi1cIikpO3ZhciBDPW4ucmVwbGFjZSgvKFN0YXJ0fEVuZCkkLyxcIlwiKTtuPT09QytcIlN0YXJ0XCImJihBPWwsUT1sLnN1YnN0cigwLGwubGVuZ3RoLTUpK1wiZW5kXCIsbD1sLnN1YnN0cigwLGwubGVuZ3RoLTYpKTtuPWxhKGwudG9Mb3dlckNhc2UoKSk7bVtuXT1sO2Nbbl09cj1aKHIudmFsdWUpO2VjKGEsbikmJihjW25dPSEwKTtPKGEsYixyLG4pO1MoYixuLFwiQVwiLGQsZixBLFEpfX1hPWEuY2xhc3NOYW1lO2lmKHcoYSkmJlwiXCIhPT1hKWZvcig7az1nLmV4ZWMoYSk7KW49bGEoa1syXSksUyhiLG4sXCJDXCIsZCxmKSYmKGNbbl09WihrWzNdKSksYT1hLnN1YnN0cihrLmluZGV4K2tbMF0ubGVuZ3RoKTticmVhaztjYXNlIDM6dChiLGEubm9kZVZhbHVlKTticmVhaztjYXNlIDg6dHJ5e2lmKGs9XG5lLmV4ZWMoYS5ub2RlVmFsdWUpKW49bGEoa1sxXSksUyhiLG4sXCJNXCIsZCxmKSYmKGNbbl09WihrWzJdKSl9Y2F0Y2goSCl7fX1iLnNvcnQodSk7cmV0dXJuIGJ9ZnVuY3Rpb24gYWEoYSxiLGMpe3ZhciBkPVtdLGU9MDtpZihiJiZhLmhhc0F0dHJpYnV0ZSYmYS5oYXNBdHRyaWJ1dGUoYikpe2Rve2lmKCFhKXRocm93IGhhKFwidXRlcmRpclwiLGIsYyk7MT09YS5ub2RlVHlwZSYmKGEuaGFzQXR0cmlidXRlKGIpJiZlKyssYS5oYXNBdHRyaWJ1dGUoYykmJmUtLSk7ZC5wdXNoKGEpO2E9YS5uZXh0U2libGluZ313aGlsZSgwPGUpfWVsc2UgZC5wdXNoKGEpO3JldHVybiB6KGQpfWZ1bmN0aW9uIEIoYSxiLGMpe3JldHVybiBmdW5jdGlvbihkLGUsZyxmLGspe2U9YWEoZVswXSxiLGMpO3JldHVybiBhKGQsZSxnLGYsayl9fWZ1bmN0aW9uIGdhKGEsYyxkLGUsZyxmLG0sbixwKXtmdW5jdGlvbiBBKGEsYixjLGQpe2lmKGEpe2MmJihhPUIoYSxjLGQpKTthLnJlcXVpcmU9Ry5yZXF1aXJlO2lmKEs9PT1cbkd8fEcuJCRpc29sYXRlU2NvcGUpYT1qYyhhLHtpc29sYXRlU2NvcGU6ITB9KTttLnB1c2goYSl9aWYoYil7YyYmKGI9QihiLGMsZCkpO2IucmVxdWlyZT1HLnJlcXVpcmU7aWYoSz09PUd8fEcuJCRpc29sYXRlU2NvcGUpYj1qYyhiLHtpc29sYXRlU2NvcGU6ITB9KTtuLnB1c2goYil9fWZ1bmN0aW9uIFEoYSxiLGMpe3ZhciBkLGU9XCJkYXRhXCIsZz0hMTtpZih3KGEpKXtmb3IoO1wiXlwiPT0oZD1hLmNoYXJBdCgwKSl8fFwiP1wiPT1kOylhPWEuc3Vic3RyKDEpLFwiXlwiPT1kJiYoZT1cImluaGVyaXRlZERhdGFcIiksZz1nfHxcIj9cIj09ZDtkPW51bGw7YyYmXCJkYXRhXCI9PT1lJiYoZD1jW2FdKTtkPWR8fGJbZV0oXCIkXCIrYStcIkNvbnRyb2xsZXJcIik7aWYoIWQmJiFnKXRocm93IGhhKFwiY3RyZXFcIixhLGNhKTt9ZWxzZSBMKGEpJiYoZD1bXSxxKGEsZnVuY3Rpb24oYSl7ZC5wdXNoKFEoYSxiLGMpKX0pKTtyZXR1cm4gZH1mdW5jdGlvbiBIKGEsZSxnLGYscCl7ZnVuY3Rpb24gQShhLGIpe3ZhciBjOzI+XG5hcmd1bWVudHMubGVuZ3RoJiYoYj1hLGE9cyk7dSYmKGM9YWEpO3JldHVybiBwKGEsYixjKX12YXIgSixDLHYsSSxiYSxCLGFhPXt9LGdiO0o9Yz09PWc/ZDpSYihkLG5ldyBEYih6KGcpLGQuJGF0dHIpKTtDPUouJCRlbGVtZW50O2lmKEspe3ZhciB0PS9eXFxzKihbQD0mXSkoXFw/PylcXHMqKFxcdyopXFxzKiQvO2Y9eihnKTtCPWUuJG5ldyghMCk7Z2EmJmdhPT09Sy4kJG9yaWdpbmFsRGlyZWN0aXZlP2YuZGF0YShcIiRpc29sYXRlU2NvcGVcIixCKTpmLmRhdGEoXCIkaXNvbGF0ZVNjb3BlTm9UZW1wbGF0ZVwiLEIpO2thKGYsXCJuZy1pc29sYXRlLXNjb3BlXCIpO3EoSy5zY29wZSxmdW5jdGlvbihhLGMpe3ZhciBkPWEubWF0Y2godCl8fFtdLGc9ZFszXXx8YyxmPVwiP1wiPT1kWzJdLGQ9ZFsxXSxtLGwsbixwO0IuJCRpc29sYXRlQmluZGluZ3NbY109ZCtnO3N3aXRjaChkKXtjYXNlIFwiQFwiOkouJG9ic2VydmUoZyxmdW5jdGlvbihhKXtCW2NdPWF9KTtKLiQkb2JzZXJ2ZXJzW2ddLiQkc2NvcGU9ZTtcbkpbZ10mJihCW2NdPWIoSltnXSkoZSkpO2JyZWFrO2Nhc2UgXCI9XCI6aWYoZiYmIUpbZ10pYnJlYWs7bD1yKEpbZ10pO3A9bC5saXRlcmFsP3RhOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9PT1ifTtuPWwuYXNzaWdufHxmdW5jdGlvbigpe209QltjXT1sKGUpO3Rocm93IGhhKFwibm9uYXNzaWduXCIsSltnXSxLLm5hbWUpO307bT1CW2NdPWwoZSk7Qi4kd2F0Y2goZnVuY3Rpb24oKXt2YXIgYT1sKGUpO3AoYSxCW2NdKXx8KHAoYSxtKT9uKGUsYT1CW2NdKTpCW2NdPWEpO3JldHVybiBtPWF9LG51bGwsbC5saXRlcmFsKTticmVhaztjYXNlIFwiJlwiOmw9cihKW2ddKTtCW2NdPWZ1bmN0aW9uKGEpe3JldHVybiBsKGUsYSl9O2JyZWFrO2RlZmF1bHQ6dGhyb3cgaGEoXCJpc2NwXCIsSy5uYW1lLGMsYSk7fX0pfWdiPXAmJkE7VSYmcShVLGZ1bmN0aW9uKGEpe3ZhciBiPXskc2NvcGU6YT09PUt8fGEuJCRpc29sYXRlU2NvcGU/QjplLCRlbGVtZW50OkMsJGF0dHJzOkosJHRyYW5zY2x1ZGU6Z2J9LGM7XG5iYT1hLmNvbnRyb2xsZXI7XCJAXCI9PWJhJiYoYmE9SlthLm5hbWVdKTtjPUYoYmEsYik7YWFbYS5uYW1lXT1jO3V8fEMuZGF0YShcIiRcIithLm5hbWUrXCJDb250cm9sbGVyXCIsYyk7YS5jb250cm9sbGVyQXMmJihiLiRzY29wZVthLmNvbnRyb2xsZXJBc109Yyl9KTtmPTA7Zm9yKHY9bS5sZW5ndGg7Zjx2O2YrKyl0cnl7ST1tW2ZdLEkoSS5pc29sYXRlU2NvcGU/QjplLEMsSixJLnJlcXVpcmUmJlEoSS5yZXF1aXJlLEMsYWEpLGdiKX1jYXRjaChTKXtsKFMsZmEoQykpfWY9ZTtLJiYoSy50ZW1wbGF0ZXx8bnVsbD09PUsudGVtcGxhdGVVcmwpJiYoZj1CKTthJiZhKGYsZy5jaGlsZE5vZGVzLHMscCk7Zm9yKGY9bi5sZW5ndGgtMTswPD1mO2YtLSl0cnl7ST1uW2ZdLEkoSS5pc29sYXRlU2NvcGU/QjplLEMsSixJLnJlcXVpcmUmJlEoSS5yZXF1aXJlLEMsYWEpLGdiKX1jYXRjaChHKXtsKEcsZmEoQykpfX1wPXB8fHt9O3ZhciB2PS1OdW1iZXIuTUFYX1ZBTFVFLEksVT1wLmNvbnRyb2xsZXJEaXJlY3RpdmVzLFxuSz1wLm5ld0lzb2xhdGVTY29wZURpcmVjdGl2ZSxnYT1wLnRlbXBsYXRlRGlyZWN0aXZlO3A9cC5ub25UbGJUcmFuc2NsdWRlRGlyZWN0aXZlO2Zvcih2YXIgUz0hMSx1PSExLHk9ZC4kJGVsZW1lbnQ9eihjKSxHLGNhLHQsUD1lLE8sTj0wLG1hPWEubGVuZ3RoO048bWE7TisrKXtHPWFbTl07dmFyIFZhPUcuJCRzdGFydCxUPUcuJCRlbmQ7VmEmJih5PWFhKGMsVmEsVCkpO3Q9cztpZih2PkcucHJpb3JpdHkpYnJlYWs7aWYodD1HLnNjb3BlKUk9SXx8RyxHLnRlbXBsYXRlVXJsfHwoeChcIm5ldy9pc29sYXRlZCBzY29wZVwiLEssRyx5KSxXKHQpJiYoSz1HKSk7Y2E9Ry5uYW1lOyFHLnRlbXBsYXRlVXJsJiZHLmNvbnRyb2xsZXImJih0PUcuY29udHJvbGxlcixVPVV8fHt9LHgoXCInXCIrY2ErXCInIGNvbnRyb2xsZXJcIixVW2NhXSxHLHkpLFVbY2FdPUcpO2lmKHQ9Ry50cmFuc2NsdWRlKVM9ITAsRy4kJHRsYnx8KHgoXCJ0cmFuc2NsdXNpb25cIixwLEcseSkscD1HKSxcImVsZW1lbnRcIj09dD8odT1cbiEwLHY9Ry5wcmlvcml0eSx0PWFhKGMsVmEsVCkseT1kLiQkZWxlbWVudD16KFIuY3JlYXRlQ29tbWVudChcIiBcIitjYStcIjogXCIrZFtjYV0rXCIgXCIpKSxjPXlbMF0saGIoZyx6KHVhLmNhbGwodCwwKSksYyksUD1DKHQsZSx2LGYmJmYubmFtZSx7bm9uVGxiVHJhbnNjbHVkZURpcmVjdGl2ZTpwfSkpOih0PXooeWIoYykpLmNvbnRlbnRzKCkseS5lbXB0eSgpLFA9Qyh0LGUpKTtpZihHLnRlbXBsYXRlKWlmKHgoXCJ0ZW1wbGF0ZVwiLGdhLEcseSksZ2E9Ryx0PU0oRy50ZW1wbGF0ZSk/Ry50ZW1wbGF0ZSh5LGQpOkcudGVtcGxhdGUsdD1WKHQpLEcucmVwbGFjZSl7Zj1HO3Q9eihcIjxkaXY+XCIrWih0KStcIjwvZGl2PlwiKS5jb250ZW50cygpO2M9dFswXTtpZigxIT10Lmxlbmd0aHx8MSE9PWMubm9kZVR5cGUpdGhyb3cgaGEoXCJ0cGxydFwiLGNhLFwiXCIpO2hiKGcseSxjKTttYT17JGF0dHI6e319O3Q9YmEoYyxbXSxtYSk7dmFyIFg9YS5zcGxpY2UoTisxLGEubGVuZ3RoLShOKzEpKTtLJiZoYyh0KTtcbmE9YS5jb25jYXQodCkuY29uY2F0KFgpO0QoZCxtYSk7bWE9YS5sZW5ndGh9ZWxzZSB5Lmh0bWwodCk7aWYoRy50ZW1wbGF0ZVVybCl4KFwidGVtcGxhdGVcIixnYSxHLHkpLGdhPUcsRy5yZXBsYWNlJiYoZj1HKSxIPUUoYS5zcGxpY2UoTixhLmxlbmd0aC1OKSx5LGQsZyxQLG0sbix7Y29udHJvbGxlckRpcmVjdGl2ZXM6VSxuZXdJc29sYXRlU2NvcGVEaXJlY3RpdmU6Syx0ZW1wbGF0ZURpcmVjdGl2ZTpnYSxub25UbGJUcmFuc2NsdWRlRGlyZWN0aXZlOnB9KSxtYT1hLmxlbmd0aDtlbHNlIGlmKEcuY29tcGlsZSl0cnl7Tz1HLmNvbXBpbGUoeSxkLFApLE0oTyk/QShudWxsLE8sVmEsVCk6TyYmQShPLnByZSxPLnBvc3QsVmEsVCl9Y2F0Y2goWSl7bChZLGZhKHkpKX1HLnRlcm1pbmFsJiYoSC50ZXJtaW5hbD0hMCx2PU1hdGgubWF4KHYsRy5wcmlvcml0eSkpfUguc2NvcGU9SSYmITA9PT1JLnNjb3BlO0gudHJhbnNjbHVkZT1TJiZQO3JldHVybiBIfWZ1bmN0aW9uIGhjKGEpe2Zvcih2YXIgYj1cbjAsYz1hLmxlbmd0aDtiPGM7YisrKWFbYl09UWIoYVtiXSx7JCRpc29sYXRlU2NvcGU6ITB9KX1mdW5jdGlvbiBTKGIsZSxnLGYsayxyLG4pe2lmKGU9PT1rKXJldHVybiBudWxsO2s9bnVsbDtpZihjLmhhc093blByb3BlcnR5KGUpKXt2YXIgcDtlPWEuZ2V0KGUrZCk7Zm9yKHZhciBGPTAsQT1lLmxlbmd0aDtGPEE7RisrKXRyeXtwPWVbRl0sKGY9PT1zfHxmPnAucHJpb3JpdHkpJiYtMSE9cC5yZXN0cmljdC5pbmRleE9mKGcpJiYociYmKHA9UWIocCx7JCRzdGFydDpyLCQkZW5kOm59KSksYi5wdXNoKHApLGs9cCl9Y2F0Y2goUSl7bChRKX19cmV0dXJuIGt9ZnVuY3Rpb24gRChhLGIpe3ZhciBjPWIuJGF0dHIsZD1hLiRhdHRyLGU9YS4kJGVsZW1lbnQ7cShhLGZ1bmN0aW9uKGQsZSl7XCIkXCIhPWUuY2hhckF0KDApJiYoYltlXSYmKGQrPShcInN0eWxlXCI9PT1lP1wiO1wiOlwiIFwiKStiW2VdKSxhLiRzZXQoZSxkLCEwLGNbZV0pKX0pO3EoYixmdW5jdGlvbihiLGcpe1wiY2xhc3NcIj09Zz8oa2EoZSxcbmIpLGFbXCJjbGFzc1wiXT0oYVtcImNsYXNzXCJdP2FbXCJjbGFzc1wiXStcIiBcIjpcIlwiKStiKTpcInN0eWxlXCI9PWc/KGUuYXR0cihcInN0eWxlXCIsZS5hdHRyKFwic3R5bGVcIikrXCI7XCIrYiksYS5zdHlsZT0oYS5zdHlsZT9hLnN0eWxlK1wiO1wiOlwiXCIpK2IpOlwiJFwiPT1nLmNoYXJBdCgwKXx8YS5oYXNPd25Qcm9wZXJ0eShnKXx8KGFbZ109YixkW2ddPWNbZ10pfSl9ZnVuY3Rpb24gRShhLGIsYyxkLGUsZyxmLGspe3ZhciBtPVtdLHIsbCxGPWJbMF0sQT1hLnNoaWZ0KCksUT15KHt9LEEse3RlbXBsYXRlVXJsOm51bGwsdHJhbnNjbHVkZTpudWxsLHJlcGxhY2U6bnVsbCwkJG9yaWdpbmFsRGlyZWN0aXZlOkF9KSxDPU0oQS50ZW1wbGF0ZVVybCk/QS50ZW1wbGF0ZVVybChiLGMpOkEudGVtcGxhdGVVcmw7Yi5lbXB0eSgpO24uZ2V0KHYuZ2V0VHJ1c3RlZFJlc291cmNlVXJsKEMpLHtjYWNoZTpwfSkuc3VjY2VzcyhmdW5jdGlvbihuKXt2YXIgcCxIO249VihuKTtpZihBLnJlcGxhY2Upe249eihcIjxkaXY+XCIrXG5aKG4pK1wiPC9kaXY+XCIpLmNvbnRlbnRzKCk7cD1uWzBdO2lmKDEhPW4ubGVuZ3RofHwxIT09cC5ub2RlVHlwZSl0aHJvdyBoYShcInRwbHJ0XCIsQS5uYW1lLEMpO249eyRhdHRyOnt9fTtoYihkLGIscCk7dmFyIHY9YmEocCxbXSxuKTtXKEEuc2NvcGUpJiZoYyh2KTthPXYuY29uY2F0KGEpO0QoYyxuKX1lbHNlIHA9RixiLmh0bWwobik7YS51bnNoaWZ0KFEpO3I9Z2EoYSxwLGMsZSxiLEEsZyxmLGspO3EoZCxmdW5jdGlvbihhLGMpe2E9PXAmJihkW2NdPWJbMF0pfSk7Zm9yKGw9SShiWzBdLmNoaWxkTm9kZXMsZSk7bS5sZW5ndGg7KXtuPW0uc2hpZnQoKTtIPW0uc2hpZnQoKTt2YXIgSz1tLnNoaWZ0KCksQj1tLnNoaWZ0KCksdj1iWzBdO2lmKEghPT1GKXt2YXIgYWE9SC5jbGFzc05hbWUsdj15YihwKTtoYihLLHooSCksdik7a2Eoeih2KSxhYSl9SD1yLnRyYW5zY2x1ZGU/VShuLHIudHJhbnNjbHVkZSk6QjtyKGwsbix2LGQsSCl9bT1udWxsfSkuZXJyb3IoZnVuY3Rpb24oYSxiLGMsXG5kKXt0aHJvdyBoYShcInRwbG9hZFwiLGQudXJsKTt9KTtyZXR1cm4gZnVuY3Rpb24oYSxiLGMsZCxlKXttPyhtLnB1c2goYiksbS5wdXNoKGMpLG0ucHVzaChkKSxtLnB1c2goZSkpOnIobCxiLGMsZCxlKX19ZnVuY3Rpb24gdShhLGIpe3ZhciBjPWIucHJpb3JpdHktYS5wcmlvcml0eTtyZXR1cm4gMCE9PWM/YzphLm5hbWUhPT1iLm5hbWU/YS5uYW1lPGIubmFtZT8tMToxOmEuaW5kZXgtYi5pbmRleH1mdW5jdGlvbiB4KGEsYixjLGQpe2lmKGIpdGhyb3cgaGEoXCJtdWx0aWRpclwiLGIubmFtZSxjLm5hbWUsYSxmYShkKSk7fWZ1bmN0aW9uIHQoYSxjKXt2YXIgZD1iKGMsITApO2QmJmEucHVzaCh7cHJpb3JpdHk6MCxjb21waWxlOlkoZnVuY3Rpb24oYSxiKXt2YXIgYz1iLnBhcmVudCgpLGU9Yy5kYXRhKFwiJGJpbmRpbmdcIil8fFtdO2UucHVzaChkKTtrYShjLmRhdGEoXCIkYmluZGluZ1wiLGUpLFwibmctYmluZGluZ1wiKTthLiR3YXRjaChkLGZ1bmN0aW9uKGEpe2JbMF0ubm9kZVZhbHVlPWF9KX0pfSl9XG5mdW5jdGlvbiBQKGEsYil7aWYoXCJzcmNkb2NcIj09YilyZXR1cm4gdi5IVE1MO3ZhciBjPUdhKGEpO2lmKFwieGxpbmtIcmVmXCI9PWJ8fFwiRk9STVwiPT1jJiZcImFjdGlvblwiPT1ifHxcIklNR1wiIT1jJiYoXCJzcmNcIj09Ynx8XCJuZ1NyY1wiPT1iKSlyZXR1cm4gdi5SRVNPVVJDRV9VUkx9ZnVuY3Rpb24gTyhhLGMsZCxlKXt2YXIgZz1iKGQsITApO2lmKGcpe2lmKFwibXVsdGlwbGVcIj09PWUmJlwiU0VMRUNUXCI9PT1HYShhKSl0aHJvdyBoYShcInNlbG11bHRpXCIsZmEoYSkpO2MucHVzaCh7cHJpb3JpdHk6MTAwLGNvbXBpbGU6ZnVuY3Rpb24oKXtyZXR1cm57cHJlOmZ1bmN0aW9uKGMsZCxtKXtkPW0uJCRvYnNlcnZlcnN8fChtLiQkb2JzZXJ2ZXJzPXt9KTtpZihmLnRlc3QoZSkpdGhyb3cgaGEoXCJub2RvbWV2ZW50c1wiKTtpZihnPWIobVtlXSwhMCxQKGEsZSkpKW1bZV09ZyhjKSwoZFtlXXx8KGRbZV09W10pKS4kJGludGVyPSEwLChtLiQkb2JzZXJ2ZXJzJiZtLiQkb2JzZXJ2ZXJzW2VdLiQkc2NvcGV8fFxuYykuJHdhdGNoKGcsZnVuY3Rpb24oYSxiKXtcImNsYXNzXCI9PT1lJiZhIT1iP20uJHVwZGF0ZUNsYXNzKGEsYik6bS4kc2V0KGUsYSl9KX19fX0pfX1mdW5jdGlvbiBoYihhLGIsYyl7dmFyIGQ9YlswXSxlPWIubGVuZ3RoLGc9ZC5wYXJlbnROb2RlLGYsbTtpZihhKWZvcihmPTAsbT1hLmxlbmd0aDtmPG07ZisrKWlmKGFbZl09PWQpe2FbZisrXT1jO209ZitlLTE7Zm9yKHZhciBrPWEubGVuZ3RoO2Y8aztmKyssbSsrKW08az9hW2ZdPWFbbV06ZGVsZXRlIGFbZl07YS5sZW5ndGgtPWUtMTticmVha31nJiZnLnJlcGxhY2VDaGlsZChjLGQpO2E9Ui5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7YS5hcHBlbmRDaGlsZChkKTtjW3ouZXhwYW5kb109ZFt6LmV4cGFuZG9dO2Q9MTtmb3IoZT1iLmxlbmd0aDtkPGU7ZCsrKWc9YltkXSx6KGcpLnJlbW92ZSgpLGEuYXBwZW5kQ2hpbGQoZyksZGVsZXRlIGJbZF07YlswXT1jO2IubGVuZ3RoPTF9ZnVuY3Rpb24gamMoYSxiKXtyZXR1cm4geShmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KG51bGwsXG5hcmd1bWVudHMpfSxhLGIpfXZhciBEYj1mdW5jdGlvbihhLGIpe3RoaXMuJCRlbGVtZW50PWE7dGhpcy4kYXR0cj1ifHx7fX07RGIucHJvdG90eXBlPXskbm9ybWFsaXplOmxhLCRhZGRDbGFzczpmdW5jdGlvbihhKXthJiYwPGEubGVuZ3RoJiZRLmFkZENsYXNzKHRoaXMuJCRlbGVtZW50LGEpfSwkcmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSl7YSYmMDxhLmxlbmd0aCYmUS5yZW1vdmVDbGFzcyh0aGlzLiQkZWxlbWVudCxhKX0sJHVwZGF0ZUNsYXNzOmZ1bmN0aW9uKGEsYil7dGhpcy4kcmVtb3ZlQ2xhc3Moa2MoYixhKSk7dGhpcy4kYWRkQ2xhc3Moa2MoYSxiKSl9LCRzZXQ6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9ZWModGhpcy4kJGVsZW1lbnRbMF0sYSk7ZSYmKHRoaXMuJCRlbGVtZW50LnByb3AoYSxiKSxkPWUpO3RoaXNbYV09YjtkP3RoaXMuJGF0dHJbYV09ZDooZD10aGlzLiRhdHRyW2FdKXx8KHRoaXMuJGF0dHJbYV09ZD1jYihhLFwiLVwiKSk7ZT1HYSh0aGlzLiQkZWxlbWVudCk7XG5pZihcIkFcIj09PWUmJlwiaHJlZlwiPT09YXx8XCJJTUdcIj09PWUmJlwic3JjXCI9PT1hKXRoaXNbYV09Yj1LKGIsXCJzcmNcIj09PWEpOyExIT09YyYmKG51bGw9PT1ifHxiPT09cz90aGlzLiQkZWxlbWVudC5yZW1vdmVBdHRyKGQpOnRoaXMuJCRlbGVtZW50LmF0dHIoZCxiKSk7KGM9dGhpcy4kJG9ic2VydmVycykmJnEoY1thXSxmdW5jdGlvbihhKXt0cnl7YShiKX1jYXRjaChjKXtsKGMpfX0pfSwkb2JzZXJ2ZTpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMsZD1jLiQkb2JzZXJ2ZXJzfHwoYy4kJG9ic2VydmVycz17fSksZT1kW2FdfHwoZFthXT1bXSk7ZS5wdXNoKGIpO0EuJGV2YWxBc3luYyhmdW5jdGlvbigpe2UuJCRpbnRlcnx8YihjW2FdKX0pO3JldHVybiBifX07dmFyIGNhPWIuc3RhcnRTeW1ib2woKSxtYT1iLmVuZFN5bWJvbCgpLFY9XCJ7e1wiPT1jYXx8XCJ9fVwiPT1tYT9BYTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKC9cXHtcXHsvZyxjYSkucmVwbGFjZSgvfX0vZyxtYSl9LFQ9L15uZ0F0dHJbQS1aXS87XG5yZXR1cm4gQ31dfWZ1bmN0aW9uIGxhKGIpe3JldHVybiBRYShiLnJlcGxhY2UoaGQsXCJcIikpfWZ1bmN0aW9uIGtjKGIsYSl7dmFyIGM9XCJcIixkPWIuc3BsaXQoL1xccysvKSxlPWEuc3BsaXQoL1xccysvKSxnPTA7YTpmb3IoO2c8ZC5sZW5ndGg7ZysrKXtmb3IodmFyIGY9ZFtnXSxoPTA7aDxlLmxlbmd0aDtoKyspaWYoZj09ZVtoXSljb250aW51ZSBhO2MrPSgwPGMubGVuZ3RoP1wiIFwiOlwiXCIpK2Z9cmV0dXJuIGN9ZnVuY3Rpb24gaWQoKXt2YXIgYj17fSxhPS9eKFxcUyspKFxccythc1xccysoXFx3KykpPyQvO3RoaXMucmVnaXN0ZXI9ZnVuY3Rpb24oYSxkKXt3YShhLFwiY29udHJvbGxlclwiKTtXKGEpP3koYixhKTpiW2FdPWR9O3RoaXMuJGdldD1bXCIkaW5qZWN0b3JcIixcIiR3aW5kb3dcIixmdW5jdGlvbihjLGQpe3JldHVybiBmdW5jdGlvbihlLGcpe3ZhciBmLGgsbTt3KGUpJiYoZj1lLm1hdGNoKGEpLGg9ZlsxXSxtPWZbM10sZT1iLmhhc093blByb3BlcnR5KGgpP2JbaF06WmIoZy4kc2NvcGUsaCxcbiEwKXx8WmIoZCxoLCEwKSxQYShlLGgsITApKTtmPWMuaW5zdGFudGlhdGUoZSxnKTtpZihtKXtpZighZ3x8XCJvYmplY3RcIiE9dHlwZW9mIGcuJHNjb3BlKXRocm93IHQoXCIkY29udHJvbGxlclwiKShcIm5vc2NwXCIsaHx8ZS5uYW1lLG0pO2cuJHNjb3BlW21dPWZ9cmV0dXJuIGZ9fV19ZnVuY3Rpb24gamQoKXt0aGlzLiRnZXQ9W1wiJHdpbmRvd1wiLGZ1bmN0aW9uKGIpe3JldHVybiB6KGIuZG9jdW1lbnQpfV19ZnVuY3Rpb24ga2QoKXt0aGlzLiRnZXQ9W1wiJGxvZ1wiLGZ1bmN0aW9uKGIpe3JldHVybiBmdW5jdGlvbihhLGMpe2IuZXJyb3IuYXBwbHkoYixhcmd1bWVudHMpfX1dfWZ1bmN0aW9uIGxjKGIpe3ZhciBhPXt9LGMsZCxlO2lmKCFiKXJldHVybiBhO3EoYi5zcGxpdChcIlxcblwiKSxmdW5jdGlvbihiKXtlPWIuaW5kZXhPZihcIjpcIik7Yz14KFooYi5zdWJzdHIoMCxlKSkpO2Q9WihiLnN1YnN0cihlKzEpKTtjJiYoYVtjXT1hW2NdP2FbY10rKFwiLCBcIitkKTpkKX0pO3JldHVybiBhfWZ1bmN0aW9uIG1jKGIpe3ZhciBhPVxuVyhiKT9iOnM7cmV0dXJuIGZ1bmN0aW9uKGMpe2F8fChhPWxjKGIpKTtyZXR1cm4gYz9hW3goYyldfHxudWxsOmF9fWZ1bmN0aW9uIG5jKGIsYSxjKXtpZihNKGMpKXJldHVybiBjKGIsYSk7cShjLGZ1bmN0aW9uKGMpe2I9YyhiLGEpfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gbGQoKXt2YXIgYj0vXlxccyooXFxbfFxce1teXFx7XSkvLGE9L1tcXH1cXF1dXFxzKiQvLGM9L15cXClcXF1cXH0nLD9cXG4vLGQ9e1wiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLThcIn0sZT10aGlzLmRlZmF1bHRzPXt0cmFuc2Zvcm1SZXNwb25zZTpbZnVuY3Rpb24oZCl7dyhkKSYmKGQ9ZC5yZXBsYWNlKGMsXCJcIiksYi50ZXN0KGQpJiZhLnRlc3QoZCkmJihkPVRiKGQpKSk7cmV0dXJuIGR9XSx0cmFuc2Zvcm1SZXF1ZXN0OltmdW5jdGlvbihhKXtyZXR1cm4gVyhhKSYmXCJbb2JqZWN0IEZpbGVdXCIhPT1MYS5jYWxsKGEpP3BhKGEpOmF9XSxoZWFkZXJzOntjb21tb246e0FjY2VwdDpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwifSxcbnBvc3Q6JChkKSxwdXQ6JChkKSxwYXRjaDokKGQpfSx4c3JmQ29va2llTmFtZTpcIlhTUkYtVE9LRU5cIix4c3JmSGVhZGVyTmFtZTpcIlgtWFNSRi1UT0tFTlwifSxnPXRoaXMuaW50ZXJjZXB0b3JzPVtdLGY9dGhpcy5yZXNwb25zZUludGVyY2VwdG9ycz1bXTt0aGlzLiRnZXQ9W1wiJGh0dHBCYWNrZW5kXCIsXCIkYnJvd3NlclwiLFwiJGNhY2hlRmFjdG9yeVwiLFwiJHJvb3RTY29wZVwiLFwiJHFcIixcIiRpbmplY3RvclwiLGZ1bmN0aW9uKGEsYixjLGQsbixwKXtmdW5jdGlvbiByKGEpe2Z1bmN0aW9uIGMoYSl7dmFyIGI9eSh7fSxhLHtkYXRhOm5jKGEuZGF0YSxhLmhlYWRlcnMsZC50cmFuc2Zvcm1SZXNwb25zZSl9KTtyZXR1cm4gMjAwPD1hLnN0YXR1cyYmMzAwPmEuc3RhdHVzP2I6bi5yZWplY3QoYil9dmFyIGQ9e3RyYW5zZm9ybVJlcXVlc3Q6ZS50cmFuc2Zvcm1SZXF1ZXN0LHRyYW5zZm9ybVJlc3BvbnNlOmUudHJhbnNmb3JtUmVzcG9uc2V9LGc9ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhKXt2YXIgYztcbnEoYSxmdW5jdGlvbihiLGQpe00oYikmJihjPWIoKSxudWxsIT1jP2FbZF09YzpkZWxldGUgYVtkXSl9KX12YXIgYz1lLmhlYWRlcnMsZD15KHt9LGEuaGVhZGVycyksZyxmLGM9eSh7fSxjLmNvbW1vbixjW3goYS5tZXRob2QpXSk7YihjKTtiKGQpO2E6Zm9yKGcgaW4gYyl7YT14KGcpO2ZvcihmIGluIGQpaWYoeChmKT09PWEpY29udGludWUgYTtkW2ddPWNbZ119cmV0dXJuIGR9KGEpO3koZCxhKTtkLmhlYWRlcnM9ZztkLm1ldGhvZD1IYShkLm1ldGhvZCk7KGE9RWIoZC51cmwpP2IuY29va2llcygpW2QueHNyZkNvb2tpZU5hbWV8fGUueHNyZkNvb2tpZU5hbWVdOnMpJiYoZ1tkLnhzcmZIZWFkZXJOYW1lfHxlLnhzcmZIZWFkZXJOYW1lXT1hKTt2YXIgZj1bZnVuY3Rpb24oYSl7Zz1hLmhlYWRlcnM7dmFyIGI9bmMoYS5kYXRhLG1jKGcpLGEudHJhbnNmb3JtUmVxdWVzdCk7dShhLmRhdGEpJiZxKGcsZnVuY3Rpb24oYSxiKXtcImNvbnRlbnQtdHlwZVwiPT09eChiKSYmZGVsZXRlIGdbYl19KTtcbnUoYS53aXRoQ3JlZGVudGlhbHMpJiYhdShlLndpdGhDcmVkZW50aWFscykmJihhLndpdGhDcmVkZW50aWFscz1lLndpdGhDcmVkZW50aWFscyk7cmV0dXJuIEYoYSxiLGcpLnRoZW4oYyxjKX0sc10saz1uLndoZW4oZCk7Zm9yKHEodixmdW5jdGlvbihhKXsoYS5yZXF1ZXN0fHxhLnJlcXVlc3RFcnJvcikmJmYudW5zaGlmdChhLnJlcXVlc3QsYS5yZXF1ZXN0RXJyb3IpOyhhLnJlc3BvbnNlfHxhLnJlc3BvbnNlRXJyb3IpJiZmLnB1c2goYS5yZXNwb25zZSxhLnJlc3BvbnNlRXJyb3IpfSk7Zi5sZW5ndGg7KXthPWYuc2hpZnQoKTt2YXIgaD1mLnNoaWZ0KCksaz1rLnRoZW4oYSxoKX1rLnN1Y2Nlc3M9ZnVuY3Rpb24oYSl7ay50aGVuKGZ1bmN0aW9uKGIpe2EoYi5kYXRhLGIuc3RhdHVzLGIuaGVhZGVycyxkKX0pO3JldHVybiBrfTtrLmVycm9yPWZ1bmN0aW9uKGEpe2sudGhlbihudWxsLGZ1bmN0aW9uKGIpe2EoYi5kYXRhLGIuc3RhdHVzLGIuaGVhZGVycyxkKX0pO3JldHVybiBrfTtcbnJldHVybiBrfWZ1bmN0aW9uIEYoYixjLGcpe2Z1bmN0aW9uIGYoYSxiLGMpe3YmJigyMDA8PWEmJjMwMD5hP3YucHV0KHMsW2EsYixsYyhjKV0pOnYucmVtb3ZlKHMpKTttKGIsYSxjKTtkLiQkcGhhc2V8fGQuJGFwcGx5KCl9ZnVuY3Rpb24gbShhLGMsZCl7Yz1NYXRoLm1heChjLDApOygyMDA8PWMmJjMwMD5jP3AucmVzb2x2ZTpwLnJlamVjdCkoe2RhdGE6YSxzdGF0dXM6YyxoZWFkZXJzOm1jKGQpLGNvbmZpZzpifSl9ZnVuY3Rpb24gaygpe3ZhciBhPWFiKHIucGVuZGluZ1JlcXVlc3RzLGIpOy0xIT09YSYmci5wZW5kaW5nUmVxdWVzdHMuc3BsaWNlKGEsMSl9dmFyIHA9bi5kZWZlcigpLEY9cC5wcm9taXNlLHYscSxzPUEoYi51cmwsYi5wYXJhbXMpO3IucGVuZGluZ1JlcXVlc3RzLnB1c2goYik7Ri50aGVuKGssayk7KGIuY2FjaGV8fGUuY2FjaGUpJiYoITEhPT1iLmNhY2hlJiZcIkdFVFwiPT1iLm1ldGhvZCkmJih2PVcoYi5jYWNoZSk/Yi5jYWNoZTpXKGUuY2FjaGUpP2UuY2FjaGU6XG5IKTtpZih2KWlmKHE9di5nZXQocyksRChxKSl7aWYocS50aGVuKXJldHVybiBxLnRoZW4oayxrKSxxO0wocSk/bShxWzFdLHFbMF0sJChxWzJdKSk6bShxLDIwMCx7fSl9ZWxzZSB2LnB1dChzLEYpO3UocSkmJmEoYi5tZXRob2QscyxjLGYsZyxiLnRpbWVvdXQsYi53aXRoQ3JlZGVudGlhbHMsYi5yZXNwb25zZVR5cGUpO3JldHVybiBGfWZ1bmN0aW9uIEEoYSxiKXtpZighYilyZXR1cm4gYTt2YXIgYz1bXTtPYyhiLGZ1bmN0aW9uKGEsYil7bnVsbD09PWF8fHUoYSl8fChMKGEpfHwoYT1bYV0pLHEoYSxmdW5jdGlvbihhKXtXKGEpJiYoYT1wYShhKSk7Yy5wdXNoKHZhKGIpK1wiPVwiK3ZhKGEpKX0pKX0pO3JldHVybiBhKygtMT09YS5pbmRleE9mKFwiP1wiKT9cIj9cIjpcIiZcIikrYy5qb2luKFwiJlwiKX12YXIgSD1jKFwiJGh0dHBcIiksdj1bXTtxKGcsZnVuY3Rpb24oYSl7di51bnNoaWZ0KHcoYSk/cC5nZXQoYSk6cC5pbnZva2UoYSkpfSk7cShmLGZ1bmN0aW9uKGEsYil7dmFyIGM9dyhhKT9wLmdldChhKTpcbnAuaW52b2tlKGEpO3Yuc3BsaWNlKGIsMCx7cmVzcG9uc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGMobi53aGVuKGEpKX0scmVzcG9uc2VFcnJvcjpmdW5jdGlvbihhKXtyZXR1cm4gYyhuLnJlamVjdChhKSl9fSl9KTtyLnBlbmRpbmdSZXF1ZXN0cz1bXTsoZnVuY3Rpb24oYSl7cShhcmd1bWVudHMsZnVuY3Rpb24oYSl7clthXT1mdW5jdGlvbihiLGMpe3JldHVybiByKHkoY3x8e30se21ldGhvZDphLHVybDpifSkpfX0pfSkoXCJnZXRcIixcImRlbGV0ZVwiLFwiaGVhZFwiLFwianNvbnBcIik7KGZ1bmN0aW9uKGEpe3EoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3JbYV09ZnVuY3Rpb24oYixjLGQpe3JldHVybiByKHkoZHx8e30se21ldGhvZDphLHVybDpiLGRhdGE6Y30pKX19KX0pKFwicG9zdFwiLFwicHV0XCIpO3IuZGVmYXVsdHM9ZTtyZXR1cm4gcn1dfWZ1bmN0aW9uIG1kKGIpe2lmKDg+PU4mJighYi5tYXRjaCgvXihnZXR8cG9zdHxoZWFkfHB1dHxkZWxldGV8b3B0aW9ucykkL2kpfHwhUC5YTUxIdHRwUmVxdWVzdCkpcmV0dXJuIG5ldyBQLkFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKTtcbmlmKFAuWE1MSHR0cFJlcXVlc3QpcmV0dXJuIG5ldyBQLlhNTEh0dHBSZXF1ZXN0O3Rocm93IHQoXCIkaHR0cEJhY2tlbmRcIikoXCJub3hoclwiKTt9ZnVuY3Rpb24gbmQoKXt0aGlzLiRnZXQ9W1wiJGJyb3dzZXJcIixcIiR3aW5kb3dcIixcIiRkb2N1bWVudFwiLGZ1bmN0aW9uKGIsYSxjKXtyZXR1cm4gb2QoYixtZCxiLmRlZmVyLGEuYW5ndWxhci5jYWxsYmFja3MsY1swXSl9XX1mdW5jdGlvbiBvZChiLGEsYyxkLGUpe2Z1bmN0aW9uIGcoYSxiKXt2YXIgYz1lLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksZD1mdW5jdGlvbigpe2Mub25yZWFkeXN0YXRlY2hhbmdlPWMub25sb2FkPWMub25lcnJvcj1udWxsO2UuYm9keS5yZW1vdmVDaGlsZChjKTtiJiZiKCl9O2MudHlwZT1cInRleHQvamF2YXNjcmlwdFwiO2Muc3JjPWE7TiYmOD49Tj9jLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpey9sb2FkZWR8Y29tcGxldGUvLnRlc3QoYy5yZWFkeVN0YXRlKSYmZCgpfTpjLm9ubG9hZD1jLm9uZXJyb3I9XG5mdW5jdGlvbigpe2QoKX07ZS5ib2R5LmFwcGVuZENoaWxkKGMpO3JldHVybiBkfXZhciBmPS0xO3JldHVybiBmdW5jdGlvbihlLG0sayxsLG4scCxyLEYpe2Z1bmN0aW9uIEEoKXt2PWY7SyYmSygpO0MmJkMuYWJvcnQoKX1mdW5jdGlvbiBIKGEsZCxlLGcpe0kmJmMuY2FuY2VsKEkpO0s9Qz1udWxsO2Q9MD09PWQ/ZT8yMDA6NDA0OmQ7YSgxMjIzPT1kPzIwNDpkLGUsZyk7Yi4kJGNvbXBsZXRlT3V0c3RhbmRpbmdSZXF1ZXN0KEUpfXZhciB2O2IuJCRpbmNPdXRzdGFuZGluZ1JlcXVlc3RDb3VudCgpO209bXx8Yi51cmwoKTtpZihcImpzb25wXCI9PXgoZSkpe3ZhciBRPVwiX1wiKyhkLmNvdW50ZXIrKykudG9TdHJpbmcoMzYpO2RbUV09ZnVuY3Rpb24oYSl7ZFtRXS5kYXRhPWF9O3ZhciBLPWcobS5yZXBsYWNlKFwiSlNPTl9DQUxMQkFDS1wiLFwiYW5ndWxhci5jYWxsYmFja3MuXCIrUSksZnVuY3Rpb24oKXtkW1FdLmRhdGE/SChsLDIwMCxkW1FdLmRhdGEpOkgobCx2fHwtMik7ZFtRXT1CYS5ub29wfSl9ZWxzZXt2YXIgQz1cbmEoZSk7Qy5vcGVuKGUsbSwhMCk7cShuLGZ1bmN0aW9uKGEsYil7RChhKSYmQy5zZXRSZXF1ZXN0SGVhZGVyKGIsYSl9KTtDLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2lmKEMmJjQ9PUMucmVhZHlTdGF0ZSl7dmFyIGE9bnVsbCxiPW51bGw7diE9PWYmJihhPUMuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCksYj1cInJlc3BvbnNlXCJpbiBDP0MucmVzcG9uc2U6Qy5yZXNwb25zZVRleHQpO0gobCx2fHxDLnN0YXR1cyxiLGEpfX07ciYmKEMud2l0aENyZWRlbnRpYWxzPSEwKTtpZihGKXRyeXtDLnJlc3BvbnNlVHlwZT1GfWNhdGNoKHMpe2lmKFwianNvblwiIT09Ril0aHJvdyBzO31DLnNlbmQoa3x8bnVsbCl9aWYoMDxwKXZhciBJPWMoQSxwKTtlbHNlIHAmJnAudGhlbiYmcC50aGVuKEEpfX1mdW5jdGlvbiBwZCgpe3ZhciBiPVwie3tcIixhPVwifX1cIjt0aGlzLnN0YXJ0U3ltYm9sPWZ1bmN0aW9uKGEpe3JldHVybiBhPyhiPWEsdGhpcyk6Yn07dGhpcy5lbmRTeW1ib2w9ZnVuY3Rpb24oYil7cmV0dXJuIGI/XG4oYT1iLHRoaXMpOmF9O3RoaXMuJGdldD1bXCIkcGFyc2VcIixcIiRleGNlcHRpb25IYW5kbGVyXCIsXCIkc2NlXCIsZnVuY3Rpb24oYyxkLGUpe2Z1bmN0aW9uIGcoZyxrLGwpe2Zvcih2YXIgbixwLHI9MCxGPVtdLEE9Zy5sZW5ndGgsSD0hMSx2PVtdO3I8QTspLTEhPShuPWcuaW5kZXhPZihiLHIpKSYmLTEhPShwPWcuaW5kZXhPZihhLG4rZikpPyhyIT1uJiZGLnB1c2goZy5zdWJzdHJpbmcocixuKSksRi5wdXNoKHI9YyhIPWcuc3Vic3RyaW5nKG4rZixwKSkpLHIuZXhwPUgscj1wK2gsSD0hMCk6KHIhPUEmJkYucHVzaChnLnN1YnN0cmluZyhyKSkscj1BKTsoQT1GLmxlbmd0aCl8fChGLnB1c2goXCJcIiksQT0xKTtpZihsJiYxPEYubGVuZ3RoKXRocm93IG9jKFwibm9jb25jYXRcIixnKTtpZigha3x8SClyZXR1cm4gdi5sZW5ndGg9QSxyPWZ1bmN0aW9uKGEpe3RyeXtmb3IodmFyIGI9MCxjPUEsZjtiPGM7YisrKVwiZnVuY3Rpb25cIj09dHlwZW9mKGY9RltiXSkmJihmPWYoYSksZj1sP2UuZ2V0VHJ1c3RlZChsLFxuZik6ZS52YWx1ZU9mKGYpLG51bGw9PT1mfHx1KGYpP2Y9XCJcIjpcInN0cmluZ1wiIT10eXBlb2YgZiYmKGY9cGEoZikpKSx2W2JdPWY7cmV0dXJuIHYuam9pbihcIlwiKX1jYXRjaChrKXthPW9jKFwiaW50ZXJyXCIsZyxrLnRvU3RyaW5nKCkpLGQoYSl9fSxyLmV4cD1nLHIucGFydHM9RixyfXZhciBmPWIubGVuZ3RoLGg9YS5sZW5ndGg7Zy5zdGFydFN5bWJvbD1mdW5jdGlvbigpe3JldHVybiBifTtnLmVuZFN5bWJvbD1mdW5jdGlvbigpe3JldHVybiBhfTtyZXR1cm4gZ31dfWZ1bmN0aW9uIHFkKCl7dGhpcy4kZ2V0PVtcIiRyb290U2NvcGVcIixcIiR3aW5kb3dcIixcIiRxXCIsZnVuY3Rpb24oYixhLGMpe2Z1bmN0aW9uIGQoZCxmLGgsbSl7dmFyIGs9YS5zZXRJbnRlcnZhbCxsPWEuY2xlYXJJbnRlcnZhbCxuPWMuZGVmZXIoKSxwPW4ucHJvbWlzZSxyPTAsRj1EKG0pJiYhbTtoPUQoaCk/aDowO3AudGhlbihudWxsLG51bGwsZCk7cC4kJGludGVydmFsSWQ9ayhmdW5jdGlvbigpe24ubm90aWZ5KHIrKyk7XG4wPGgmJnI+PWgmJihuLnJlc29sdmUociksbChwLiQkaW50ZXJ2YWxJZCksZGVsZXRlIGVbcC4kJGludGVydmFsSWRdKTtGfHxiLiRhcHBseSgpfSxmKTtlW3AuJCRpbnRlcnZhbElkXT1uO3JldHVybiBwfXZhciBlPXt9O2QuY2FuY2VsPWZ1bmN0aW9uKGEpe3JldHVybiBhJiZhLiQkaW50ZXJ2YWxJZCBpbiBlPyhlW2EuJCRpbnRlcnZhbElkXS5yZWplY3QoXCJjYW5jZWxlZFwiKSxjbGVhckludGVydmFsKGEuJCRpbnRlcnZhbElkKSxkZWxldGUgZVthLiQkaW50ZXJ2YWxJZF0sITApOiExfTtyZXR1cm4gZH1dfWZ1bmN0aW9uIHJkKCl7dGhpcy4kZ2V0PWZ1bmN0aW9uKCl7cmV0dXJue2lkOlwiZW4tdXNcIixOVU1CRVJfRk9STUFUUzp7REVDSU1BTF9TRVA6XCIuXCIsR1JPVVBfU0VQOlwiLFwiLFBBVFRFUk5TOlt7bWluSW50OjEsbWluRnJhYzowLG1heEZyYWM6Myxwb3NQcmU6XCJcIixwb3NTdWY6XCJcIixuZWdQcmU6XCItXCIsbmVnU3VmOlwiXCIsZ1NpemU6MyxsZ1NpemU6M30se21pbkludDoxLG1pbkZyYWM6Mixcbm1heEZyYWM6Mixwb3NQcmU6XCJcXHUwMGE0XCIscG9zU3VmOlwiXCIsbmVnUHJlOlwiKFxcdTAwYTRcIixuZWdTdWY6XCIpXCIsZ1NpemU6MyxsZ1NpemU6M31dLENVUlJFTkNZX1NZTTpcIiRcIn0sREFURVRJTUVfRk9STUFUUzp7TU9OVEg6XCJKYW51YXJ5IEZlYnJ1YXJ5IE1hcmNoIEFwcmlsIE1heSBKdW5lIEp1bHkgQXVndXN0IFNlcHRlbWJlciBPY3RvYmVyIE5vdmVtYmVyIERlY2VtYmVyXCIuc3BsaXQoXCIgXCIpLFNIT1JUTU9OVEg6XCJKYW4gRmViIE1hciBBcHIgTWF5IEp1biBKdWwgQXVnIFNlcCBPY3QgTm92IERlY1wiLnNwbGl0KFwiIFwiKSxEQVk6XCJTdW5kYXkgTW9uZGF5IFR1ZXNkYXkgV2VkbmVzZGF5IFRodXJzZGF5IEZyaWRheSBTYXR1cmRheVwiLnNwbGl0KFwiIFwiKSxTSE9SVERBWTpcIlN1biBNb24gVHVlIFdlZCBUaHUgRnJpIFNhdFwiLnNwbGl0KFwiIFwiKSxBTVBNUzpbXCJBTVwiLFwiUE1cIl0sbWVkaXVtOlwiTU1NIGQsIHkgaDptbTpzcyBhXCIsXCJzaG9ydFwiOlwiTS9kL3l5IGg6bW0gYVwiLGZ1bGxEYXRlOlwiRUVFRSwgTU1NTSBkLCB5XCIsXG5sb25nRGF0ZTpcIk1NTU0gZCwgeVwiLG1lZGl1bURhdGU6XCJNTU0gZCwgeVwiLHNob3J0RGF0ZTpcIk0vZC95eVwiLG1lZGl1bVRpbWU6XCJoOm1tOnNzIGFcIixzaG9ydFRpbWU6XCJoOm1tIGFcIn0scGx1cmFsQ2F0OmZ1bmN0aW9uKGIpe3JldHVybiAxPT09Yj9cIm9uZVwiOlwib3RoZXJcIn19fX1mdW5jdGlvbiBwYyhiKXtiPWIuc3BsaXQoXCIvXCIpO2Zvcih2YXIgYT1iLmxlbmd0aDthLS07KWJbYV09c2IoYlthXSk7cmV0dXJuIGIuam9pbihcIi9cIil9ZnVuY3Rpb24gcWMoYixhLGMpe2I9eGEoYixjKTthLiQkcHJvdG9jb2w9Yi5wcm90b2NvbDthLiQkaG9zdD1iLmhvc3RuYW1lO2EuJCRwb3J0PVYoYi5wb3J0KXx8c2RbYi5wcm90b2NvbF18fG51bGx9ZnVuY3Rpb24gcmMoYixhLGMpe3ZhciBkPVwiL1wiIT09Yi5jaGFyQXQoMCk7ZCYmKGI9XCIvXCIrYik7Yj14YShiLGMpO2EuJCRwYXRoPWRlY29kZVVSSUNvbXBvbmVudChkJiZcIi9cIj09PWIucGF0aG5hbWUuY2hhckF0KDApP2IucGF0aG5hbWUuc3Vic3RyaW5nKDEpOlxuYi5wYXRobmFtZSk7YS4kJHNlYXJjaD1WYihiLnNlYXJjaCk7YS4kJGhhc2g9ZGVjb2RlVVJJQ29tcG9uZW50KGIuaGFzaCk7YS4kJHBhdGgmJlwiL1wiIT1hLiQkcGF0aC5jaGFyQXQoMCkmJihhLiQkcGF0aD1cIi9cIithLiQkcGF0aCl9ZnVuY3Rpb24gbmEoYixhKXtpZigwPT09YS5pbmRleE9mKGIpKXJldHVybiBhLnN1YnN0cihiLmxlbmd0aCl9ZnVuY3Rpb24gV2EoYil7dmFyIGE9Yi5pbmRleE9mKFwiI1wiKTtyZXR1cm4tMT09YT9iOmIuc3Vic3RyKDAsYSl9ZnVuY3Rpb24gRmIoYil7cmV0dXJuIGIuc3Vic3RyKDAsV2EoYikubGFzdEluZGV4T2YoXCIvXCIpKzEpfWZ1bmN0aW9uIHNjKGIsYSl7dGhpcy4kJGh0bWw1PSEwO2E9YXx8XCJcIjt2YXIgYz1GYihiKTtxYyhiLHRoaXMsYik7dGhpcy4kJHBhcnNlPWZ1bmN0aW9uKGEpe3ZhciBlPW5hKGMsYSk7aWYoIXcoZSkpdGhyb3cgR2IoXCJpcHRocHJmeFwiLGEsYyk7cmMoZSx0aGlzLGIpO3RoaXMuJCRwYXRofHwodGhpcy4kJHBhdGg9XCIvXCIpO3RoaXMuJCRjb21wb3NlKCl9O1xudGhpcy4kJGNvbXBvc2U9ZnVuY3Rpb24oKXt2YXIgYT1XYih0aGlzLiQkc2VhcmNoKSxiPXRoaXMuJCRoYXNoP1wiI1wiK3NiKHRoaXMuJCRoYXNoKTpcIlwiO3RoaXMuJCR1cmw9cGModGhpcy4kJHBhdGgpKyhhP1wiP1wiK2E6XCJcIikrYjt0aGlzLiQkYWJzVXJsPWMrdGhpcy4kJHVybC5zdWJzdHIoMSl9O3RoaXMuJCRyZXdyaXRlPWZ1bmN0aW9uKGQpe3ZhciBlO2lmKChlPW5hKGIsZCkpIT09cylyZXR1cm4gZD1lLChlPW5hKGEsZSkpIT09cz9jKyhuYShcIi9cIixlKXx8ZSk6YitkO2lmKChlPW5hKGMsZCkpIT09cylyZXR1cm4gYytlO2lmKGM9PWQrXCIvXCIpcmV0dXJuIGN9fWZ1bmN0aW9uIEhiKGIsYSl7dmFyIGM9RmIoYik7cWMoYix0aGlzLGIpO3RoaXMuJCRwYXJzZT1mdW5jdGlvbihkKXt2YXIgZT1uYShiLGQpfHxuYShjLGQpLGU9XCIjXCI9PWUuY2hhckF0KDApP25hKGEsZSk6dGhpcy4kJGh0bWw1P2U6XCJcIjtpZighdyhlKSl0aHJvdyBHYihcImloc2hwcmZ4XCIsZCxhKTtyYyhlLHRoaXMsYik7XG5kPXRoaXMuJCRwYXRoO3ZhciBnPS9eXFwvPy4qPzooXFwvLiopLzswPT09ZS5pbmRleE9mKGIpJiYoZT1lLnJlcGxhY2UoYixcIlwiKSk7Zy5leGVjKGUpfHwoZD0oZT1nLmV4ZWMoZCkpP2VbMV06ZCk7dGhpcy4kJHBhdGg9ZDt0aGlzLiQkY29tcG9zZSgpfTt0aGlzLiQkY29tcG9zZT1mdW5jdGlvbigpe3ZhciBjPVdiKHRoaXMuJCRzZWFyY2gpLGU9dGhpcy4kJGhhc2g/XCIjXCIrc2IodGhpcy4kJGhhc2gpOlwiXCI7dGhpcy4kJHVybD1wYyh0aGlzLiQkcGF0aCkrKGM/XCI/XCIrYzpcIlwiKStlO3RoaXMuJCRhYnNVcmw9YisodGhpcy4kJHVybD9hK3RoaXMuJCR1cmw6XCJcIil9O3RoaXMuJCRyZXdyaXRlPWZ1bmN0aW9uKGEpe2lmKFdhKGIpPT1XYShhKSlyZXR1cm4gYX19ZnVuY3Rpb24gdGMoYixhKXt0aGlzLiQkaHRtbDU9ITA7SGIuYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciBjPUZiKGIpO3RoaXMuJCRyZXdyaXRlPWZ1bmN0aW9uKGQpe3ZhciBlO2lmKGI9PVdhKGQpKXJldHVybiBkO2lmKGU9bmEoYyxcbmQpKXJldHVybiBiK2ErZTtpZihjPT09ZCtcIi9cIilyZXR1cm4gY319ZnVuY3Rpb24gaWIoYil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbYl19fWZ1bmN0aW9uIHVjKGIsYSl7cmV0dXJuIGZ1bmN0aW9uKGMpe2lmKHUoYykpcmV0dXJuIHRoaXNbYl07dGhpc1tiXT1hKGMpO3RoaXMuJCRjb21wb3NlKCk7cmV0dXJuIHRoaXN9fWZ1bmN0aW9uIHRkKCl7dmFyIGI9XCJcIixhPSExO3RoaXMuaGFzaFByZWZpeD1mdW5jdGlvbihhKXtyZXR1cm4gRChhKT8oYj1hLHRoaXMpOmJ9O3RoaXMuaHRtbDVNb2RlPWZ1bmN0aW9uKGIpe3JldHVybiBEKGIpPyhhPWIsdGhpcyk6YX07dGhpcy4kZ2V0PVtcIiRyb290U2NvcGVcIixcIiRicm93c2VyXCIsXCIkc25pZmZlclwiLFwiJHJvb3RFbGVtZW50XCIsZnVuY3Rpb24oYyxkLGUsZyl7ZnVuY3Rpb24gZihhKXtjLiRicm9hZGNhc3QoXCIkbG9jYXRpb25DaGFuZ2VTdWNjZXNzXCIsaC5hYnNVcmwoKSxhKX12YXIgaCxtPWQuYmFzZUhyZWYoKSxrPWQudXJsKCk7XG5hPyhtPWsuc3Vic3RyaW5nKDAsay5pbmRleE9mKFwiL1wiLGsuaW5kZXhPZihcIi8vXCIpKzIpKSsobXx8XCIvXCIpLGU9ZS5oaXN0b3J5P3NjOnRjKToobT1XYShrKSxlPUhiKTtoPW5ldyBlKG0sXCIjXCIrYik7aC4kJHBhcnNlKGguJCRyZXdyaXRlKGspKTtnLm9uKFwiY2xpY2tcIixmdW5jdGlvbihhKXtpZighYS5jdHJsS2V5JiYhYS5tZXRhS2V5JiYyIT1hLndoaWNoKXtmb3IodmFyIGI9eihhLnRhcmdldCk7XCJhXCIhPT14KGJbMF0ubm9kZU5hbWUpOylpZihiWzBdPT09Z1swXXx8IShiPWIucGFyZW50KCkpWzBdKXJldHVybjt2YXIgZT1iLnByb3AoXCJocmVmXCIpO1coZSkmJlwiW29iamVjdCBTVkdBbmltYXRlZFN0cmluZ11cIj09PWUudG9TdHJpbmcoKSYmKGU9eGEoZS5hbmltVmFsKS5ocmVmKTt2YXIgZj1oLiQkcmV3cml0ZShlKTtlJiYoIWIuYXR0cihcInRhcmdldFwiKSYmZiYmIWEuaXNEZWZhdWx0UHJldmVudGVkKCkpJiYoYS5wcmV2ZW50RGVmYXVsdCgpLGYhPWQudXJsKCkmJihoLiQkcGFyc2UoZiksXG5jLiRhcHBseSgpLFAuYW5ndWxhcltcImZmLTY4NDIwOC1wcmV2ZW50RGVmYXVsdFwiXT0hMCkpfX0pO2guYWJzVXJsKCkhPWsmJmQudXJsKGguYWJzVXJsKCksITApO2Qub25VcmxDaGFuZ2UoZnVuY3Rpb24oYSl7aC5hYnNVcmwoKSE9YSYmKGMuJGV2YWxBc3luYyhmdW5jdGlvbigpe3ZhciBiPWguYWJzVXJsKCk7aC4kJHBhcnNlKGEpO2MuJGJyb2FkY2FzdChcIiRsb2NhdGlvbkNoYW5nZVN0YXJ0XCIsYSxiKS5kZWZhdWx0UHJldmVudGVkPyhoLiQkcGFyc2UoYiksZC51cmwoYikpOmYoYil9KSxjLiQkcGhhc2V8fGMuJGRpZ2VzdCgpKX0pO3ZhciBsPTA7Yy4kd2F0Y2goZnVuY3Rpb24oKXt2YXIgYT1kLnVybCgpLGI9aC4kJHJlcGxhY2U7bCYmYT09aC5hYnNVcmwoKXx8KGwrKyxjLiRldmFsQXN5bmMoZnVuY3Rpb24oKXtjLiRicm9hZGNhc3QoXCIkbG9jYXRpb25DaGFuZ2VTdGFydFwiLGguYWJzVXJsKCksYSkuZGVmYXVsdFByZXZlbnRlZD9oLiQkcGFyc2UoYSk6KGQudXJsKGguYWJzVXJsKCksXG5iKSxmKGEpKX0pKTtoLiQkcmVwbGFjZT0hMTtyZXR1cm4gbH0pO3JldHVybiBofV19ZnVuY3Rpb24gdWQoKXt2YXIgYj0hMCxhPXRoaXM7dGhpcy5kZWJ1Z0VuYWJsZWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIEQoYSk/KGI9YSx0aGlzKTpifTt0aGlzLiRnZXQ9W1wiJHdpbmRvd1wiLGZ1bmN0aW9uKGMpe2Z1bmN0aW9uIGQoYSl7YSBpbnN0YW5jZW9mIEVycm9yJiYoYS5zdGFjaz9hPWEubWVzc2FnZSYmLTE9PT1hLnN0YWNrLmluZGV4T2YoYS5tZXNzYWdlKT9cIkVycm9yOiBcIithLm1lc3NhZ2UrXCJcXG5cIithLnN0YWNrOmEuc3RhY2s6YS5zb3VyY2VVUkwmJihhPWEubWVzc2FnZStcIlxcblwiK2Euc291cmNlVVJMK1wiOlwiK2EubGluZSkpO3JldHVybiBhfWZ1bmN0aW9uIGUoYSl7dmFyIGI9Yy5jb25zb2xlfHx7fSxlPWJbYV18fGIubG9nfHxFO2E9ITE7dHJ5e2E9ISFlLmFwcGx5fWNhdGNoKG0pe31yZXR1cm4gYT9mdW5jdGlvbigpe3ZhciBhPVtdO3EoYXJndW1lbnRzLGZ1bmN0aW9uKGIpe2EucHVzaChkKGIpKX0pO1xucmV0dXJuIGUuYXBwbHkoYixhKX06ZnVuY3Rpb24oYSxiKXtlKGEsbnVsbD09Yj9cIlwiOmIpfX1yZXR1cm57bG9nOmUoXCJsb2dcIiksaW5mbzplKFwiaW5mb1wiKSx3YXJuOmUoXCJ3YXJuXCIpLGVycm9yOmUoXCJlcnJvclwiKSxkZWJ1ZzpmdW5jdGlvbigpe3ZhciBjPWUoXCJkZWJ1Z1wiKTtyZXR1cm4gZnVuY3Rpb24oKXtiJiZjLmFwcGx5KGEsYXJndW1lbnRzKX19KCl9fV19ZnVuY3Rpb24gZGEoYixhKXtpZihcImNvbnN0cnVjdG9yXCI9PT1iKXRocm93IHlhKFwiaXNlY2ZsZFwiLGEpO3JldHVybiBifWZ1bmN0aW9uIFhhKGIsYSl7aWYoYil7aWYoYi5jb25zdHJ1Y3Rvcj09PWIpdGhyb3cgeWEoXCJpc2VjZm5cIixhKTtpZihiLmRvY3VtZW50JiZiLmxvY2F0aW9uJiZiLmFsZXJ0JiZiLnNldEludGVydmFsKXRocm93IHlhKFwiaXNlY3dpbmRvd1wiLGEpO2lmKGIuY2hpbGRyZW4mJihiLm5vZGVOYW1lfHxiLm9uJiZiLmZpbmQpKXRocm93IHlhKFwiaXNlY2RvbVwiLGEpO31yZXR1cm4gYn1mdW5jdGlvbiBqYihiLFxuYSxjLGQsZSl7ZT1lfHx7fTthPWEuc3BsaXQoXCIuXCIpO2Zvcih2YXIgZyxmPTA7MTxhLmxlbmd0aDtmKyspe2c9ZGEoYS5zaGlmdCgpLGQpO3ZhciBoPWJbZ107aHx8KGg9e30sYltnXT1oKTtiPWg7Yi50aGVuJiZlLnVud3JhcFByb21pc2VzJiYocWEoZCksXCIkJHZcImluIGJ8fGZ1bmN0aW9uKGEpe2EudGhlbihmdW5jdGlvbihiKXthLiQkdj1ifSl9KGIpLGIuJCR2PT09cyYmKGIuJCR2PXt9KSxiPWIuJCR2KX1nPWRhKGEuc2hpZnQoKSxkKTtyZXR1cm4gYltnXT1jfWZ1bmN0aW9uIHZjKGIsYSxjLGQsZSxnLGYpe2RhKGIsZyk7ZGEoYSxnKTtkYShjLGcpO2RhKGQsZyk7ZGEoZSxnKTtyZXR1cm4gZi51bndyYXBQcm9taXNlcz9mdW5jdGlvbihmLG0pe3ZhciBrPW0mJm0uaGFzT3duUHJvcGVydHkoYik/bTpmLGw7aWYobnVsbD09aylyZXR1cm4gazsoaz1rW2JdKSYmay50aGVuJiYocWEoZyksXCIkJHZcImluIGt8fChsPWssbC4kJHY9cyxsLnRoZW4oZnVuY3Rpb24oYSl7bC4kJHY9YX0pKSxcbms9ay4kJHYpO2lmKCFhKXJldHVybiBrO2lmKG51bGw9PWspcmV0dXJuIHM7KGs9a1thXSkmJmsudGhlbiYmKHFhKGcpLFwiJCR2XCJpbiBrfHwobD1rLGwuJCR2PXMsbC50aGVuKGZ1bmN0aW9uKGEpe2wuJCR2PWF9KSksaz1rLiQkdik7aWYoIWMpcmV0dXJuIGs7aWYobnVsbD09aylyZXR1cm4gczsoaz1rW2NdKSYmay50aGVuJiYocWEoZyksXCIkJHZcImluIGt8fChsPWssbC4kJHY9cyxsLnRoZW4oZnVuY3Rpb24oYSl7bC4kJHY9YX0pKSxrPWsuJCR2KTtpZighZClyZXR1cm4gaztpZihudWxsPT1rKXJldHVybiBzOyhrPWtbZF0pJiZrLnRoZW4mJihxYShnKSxcIiQkdlwiaW4ga3x8KGw9ayxsLiQkdj1zLGwudGhlbihmdW5jdGlvbihhKXtsLiQkdj1hfSkpLGs9ay4kJHYpO2lmKCFlKXJldHVybiBrO2lmKG51bGw9PWspcmV0dXJuIHM7KGs9a1tlXSkmJmsudGhlbiYmKHFhKGcpLFwiJCR2XCJpbiBrfHwobD1rLGwuJCR2PXMsbC50aGVuKGZ1bmN0aW9uKGEpe2wuJCR2PWF9KSksaz1rLiQkdik7XG5yZXR1cm4ga306ZnVuY3Rpb24oZyxmKXt2YXIgaz1mJiZmLmhhc093blByb3BlcnR5KGIpP2Y6ZztpZihudWxsPT1rKXJldHVybiBrO2s9a1tiXTtpZighYSlyZXR1cm4gaztpZihudWxsPT1rKXJldHVybiBzO2s9a1thXTtpZighYylyZXR1cm4gaztpZihudWxsPT1rKXJldHVybiBzO2s9a1tjXTtpZighZClyZXR1cm4gaztpZihudWxsPT1rKXJldHVybiBzO2s9a1tkXTtyZXR1cm4gZT9udWxsPT1rP3M6az1rW2VdOmt9fWZ1bmN0aW9uIHZkKGIsYSl7ZGEoYixhKTtyZXR1cm4gZnVuY3Rpb24oYSxkKXtyZXR1cm4gbnVsbD09YT9zOihkJiZkLmhhc093blByb3BlcnR5KGIpP2Q6YSlbYl19fWZ1bmN0aW9uIHdkKGIsYSxjKXtkYShiLGMpO2RhKGEsYyk7cmV0dXJuIGZ1bmN0aW9uKGMsZSl7aWYobnVsbD09YylyZXR1cm4gcztjPShlJiZlLmhhc093blByb3BlcnR5KGIpP2U6YylbYl07cmV0dXJuIG51bGw9PWM/czpjW2FdfX1mdW5jdGlvbiB3YyhiLGEsYyl7aWYoSWIuaGFzT3duUHJvcGVydHkoYikpcmV0dXJuIEliW2JdO1xudmFyIGQ9Yi5zcGxpdChcIi5cIiksZT1kLmxlbmd0aCxnO2lmKGEudW53cmFwUHJvbWlzZXN8fDEhPT1lKWlmKGEudW53cmFwUHJvbWlzZXN8fDIhPT1lKWlmKGEuY3NwKWc9Nj5lP3ZjKGRbMF0sZFsxXSxkWzJdLGRbM10sZFs0XSxjLGEpOmZ1bmN0aW9uKGIsZyl7dmFyIGY9MCxoO2RvIGg9dmMoZFtmKytdLGRbZisrXSxkW2YrK10sZFtmKytdLGRbZisrXSxjLGEpKGIsZyksZz1zLGI9aDt3aGlsZShmPGUpO3JldHVybiBofTtlbHNle3ZhciBmPVwidmFyIHA7XFxuXCI7cShkLGZ1bmN0aW9uKGIsZCl7ZGEoYixjKTtmKz1cImlmKHMgPT0gbnVsbCkgcmV0dXJuIHVuZGVmaW5lZDtcXG5zPVwiKyhkP1wic1wiOicoKGsmJmsuaGFzT3duUHJvcGVydHkoXCInK2IrJ1wiKSk/azpzKScpKydbXCInK2IrJ1wiXTtcXG4nKyhhLnVud3JhcFByb21pc2VzPydpZiAocyAmJiBzLnRoZW4pIHtcXG4gcHcoXCInK2MucmVwbGFjZSgvKFtcIlxcclxcbl0pL2csXCJcXFxcJDFcIikrJ1wiKTtcXG4gaWYgKCEoXCIkJHZcIiBpbiBzKSkge1xcbiBwPXM7XFxuIHAuJCR2ID0gdW5kZWZpbmVkO1xcbiBwLnRoZW4oZnVuY3Rpb24odikge3AuJCR2PXY7fSk7XFxufVxcbiBzPXMuJCR2XFxufVxcbic6XG5cIlwiKX0pO3ZhciBmPWYrXCJyZXR1cm4gcztcIixoPW5ldyBGdW5jdGlvbihcInNcIixcImtcIixcInB3XCIsZik7aC50b1N0cmluZz1ZKGYpO2c9YS51bndyYXBQcm9taXNlcz9mdW5jdGlvbihhLGIpe3JldHVybiBoKGEsYixxYSl9Omh9ZWxzZSBnPXdkKGRbMF0sZFsxXSxjKTtlbHNlIGc9dmQoZFswXSxjKTtcImhhc093blByb3BlcnR5XCIhPT1iJiYoSWJbYl09Zyk7cmV0dXJuIGd9ZnVuY3Rpb24geGQoKXt2YXIgYj17fSxhPXtjc3A6ITEsdW53cmFwUHJvbWlzZXM6ITEsbG9nUHJvbWlzZVdhcm5pbmdzOiEwfTt0aGlzLnVud3JhcFByb21pc2VzPWZ1bmN0aW9uKGIpe3JldHVybiBEKGIpPyhhLnVud3JhcFByb21pc2VzPSEhYix0aGlzKTphLnVud3JhcFByb21pc2VzfTt0aGlzLmxvZ1Byb21pc2VXYXJuaW5ncz1mdW5jdGlvbihiKXtyZXR1cm4gRChiKT8oYS5sb2dQcm9taXNlV2FybmluZ3M9Yix0aGlzKTphLmxvZ1Byb21pc2VXYXJuaW5nc307dGhpcy4kZ2V0PVtcIiRmaWx0ZXJcIixcIiRzbmlmZmVyXCIsXG5cIiRsb2dcIixmdW5jdGlvbihjLGQsZSl7YS5jc3A9ZC5jc3A7cWE9ZnVuY3Rpb24oYil7YS5sb2dQcm9taXNlV2FybmluZ3MmJiF4Yy5oYXNPd25Qcm9wZXJ0eShiKSYmKHhjW2JdPSEwLGUud2FybihcIlskcGFyc2VdIFByb21pc2UgZm91bmQgaW4gdGhlIGV4cHJlc3Npb24gYFwiK2IrXCJgLiBBdXRvbWF0aWMgdW53cmFwcGluZyBvZiBwcm9taXNlcyBpbiBBbmd1bGFyIGV4cHJlc3Npb25zIGlzIGRlcHJlY2F0ZWQuXCIpKX07cmV0dXJuIGZ1bmN0aW9uKGQpe3ZhciBlO3N3aXRjaCh0eXBlb2YgZCl7Y2FzZSBcInN0cmluZ1wiOmlmKGIuaGFzT3duUHJvcGVydHkoZCkpcmV0dXJuIGJbZF07ZT1uZXcgSmIoYSk7ZT0obmV3IFlhKGUsYyxhKSkucGFyc2UoZCwhMSk7XCJoYXNPd25Qcm9wZXJ0eVwiIT09ZCYmKGJbZF09ZSk7cmV0dXJuIGU7Y2FzZSBcImZ1bmN0aW9uXCI6cmV0dXJuIGQ7ZGVmYXVsdDpyZXR1cm4gRX19fV19ZnVuY3Rpb24geWQoKXt0aGlzLiRnZXQ9W1wiJHJvb3RTY29wZVwiLFwiJGV4Y2VwdGlvbkhhbmRsZXJcIixcbmZ1bmN0aW9uKGIsYSl7cmV0dXJuIHpkKGZ1bmN0aW9uKGEpe2IuJGV2YWxBc3luYyhhKX0sYSl9XX1mdW5jdGlvbiB6ZChiLGEpe2Z1bmN0aW9uIGMoYSl7cmV0dXJuIGF9ZnVuY3Rpb24gZChhKXtyZXR1cm4gZihhKX12YXIgZT1mdW5jdGlvbigpe3ZhciBmPVtdLGssbDtyZXR1cm4gbD17cmVzb2x2ZTpmdW5jdGlvbihhKXtpZihmKXt2YXIgYz1mO2Y9cztrPWcoYSk7Yy5sZW5ndGgmJmIoZnVuY3Rpb24oKXtmb3IodmFyIGEsYj0wLGQ9Yy5sZW5ndGg7YjxkO2IrKylhPWNbYl0say50aGVuKGFbMF0sYVsxXSxhWzJdKX0pfX0scmVqZWN0OmZ1bmN0aW9uKGEpe2wucmVzb2x2ZShoKGEpKX0sbm90aWZ5OmZ1bmN0aW9uKGEpe2lmKGYpe3ZhciBjPWY7Zi5sZW5ndGgmJmIoZnVuY3Rpb24oKXtmb3IodmFyIGIsZD0wLGU9Yy5sZW5ndGg7ZDxlO2QrKyliPWNbZF0sYlsyXShhKX0pfX0scHJvbWlzZTp7dGhlbjpmdW5jdGlvbihiLGcsaCl7dmFyIGw9ZSgpLEE9ZnVuY3Rpb24oZCl7dHJ5e2wucmVzb2x2ZSgoTShiKT9cbmI6YykoZCkpfWNhdGNoKGUpe2wucmVqZWN0KGUpLGEoZSl9fSxIPWZ1bmN0aW9uKGIpe3RyeXtsLnJlc29sdmUoKE0oZyk/ZzpkKShiKSl9Y2F0Y2goYyl7bC5yZWplY3QoYyksYShjKX19LHY9ZnVuY3Rpb24oYil7dHJ5e2wubm90aWZ5KChNKGgpP2g6YykoYikpfWNhdGNoKGQpe2EoZCl9fTtmP2YucHVzaChbQSxILHZdKTprLnRoZW4oQSxILHYpO3JldHVybiBsLnByb21pc2V9LFwiY2F0Y2hcIjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy50aGVuKG51bGwsYSl9LFwiZmluYWxseVwiOmZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSxjKXt2YXIgZD1lKCk7Yz9kLnJlc29sdmUoYSk6ZC5yZWplY3QoYSk7cmV0dXJuIGQucHJvbWlzZX1mdW5jdGlvbiBkKGUsZyl7dmFyIGY9bnVsbDt0cnl7Zj0oYXx8YykoKX1jYXRjaChrKXtyZXR1cm4gYihrLCExKX1yZXR1cm4gZiYmTShmLnRoZW4pP2YudGhlbihmdW5jdGlvbigpe3JldHVybiBiKGUsZyl9LGZ1bmN0aW9uKGEpe3JldHVybiBiKGEsITEpfSk6XG5iKGUsZyl9cmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gZChhLCEwKX0sZnVuY3Rpb24oYSl7cmV0dXJuIGQoYSwhMSl9KX19fX0sZz1mdW5jdGlvbihhKXtyZXR1cm4gYSYmTShhLnRoZW4pP2E6e3RoZW46ZnVuY3Rpb24oYyl7dmFyIGQ9ZSgpO2IoZnVuY3Rpb24oKXtkLnJlc29sdmUoYyhhKSl9KTtyZXR1cm4gZC5wcm9taXNlfX19LGY9ZnVuY3Rpb24oYSl7dmFyIGI9ZSgpO2IucmVqZWN0KGEpO3JldHVybiBiLnByb21pc2V9LGg9ZnVuY3Rpb24oYyl7cmV0dXJue3RoZW46ZnVuY3Rpb24oZyxmKXt2YXIgaD1lKCk7YihmdW5jdGlvbigpe3RyeXtoLnJlc29sdmUoKE0oZik/ZjpkKShjKSl9Y2F0Y2goYil7aC5yZWplY3QoYiksYShiKX19KTtyZXR1cm4gaC5wcm9taXNlfX19O3JldHVybntkZWZlcjplLHJlamVjdDpmLHdoZW46ZnVuY3Rpb24oaCxrLGwsbil7dmFyIHA9ZSgpLHIsRj1mdW5jdGlvbihiKXt0cnl7cmV0dXJuKE0oayk/azpjKShiKX1jYXRjaChkKXtyZXR1cm4gYShkKSxcbmYoZCl9fSxBPWZ1bmN0aW9uKGIpe3RyeXtyZXR1cm4oTShsKT9sOmQpKGIpfWNhdGNoKGMpe3JldHVybiBhKGMpLGYoYyl9fSxxPWZ1bmN0aW9uKGIpe3RyeXtyZXR1cm4oTShuKT9uOmMpKGIpfWNhdGNoKGQpe2EoZCl9fTtiKGZ1bmN0aW9uKCl7ZyhoKS50aGVuKGZ1bmN0aW9uKGEpe3J8fChyPSEwLHAucmVzb2x2ZShnKGEpLnRoZW4oRixBLHEpKSl9LGZ1bmN0aW9uKGEpe3J8fChyPSEwLHAucmVzb2x2ZShBKGEpKSl9LGZ1bmN0aW9uKGEpe3J8fHAubm90aWZ5KHEoYSkpfSl9KTtyZXR1cm4gcC5wcm9taXNlfSxhbGw6ZnVuY3Rpb24oYSl7dmFyIGI9ZSgpLGM9MCxkPUwoYSk/W106e307cShhLGZ1bmN0aW9uKGEsZSl7YysrO2coYSkudGhlbihmdW5jdGlvbihhKXtkLmhhc093blByb3BlcnR5KGUpfHwoZFtlXT1hLC0tY3x8Yi5yZXNvbHZlKGQpKX0sZnVuY3Rpb24oYSl7ZC5oYXNPd25Qcm9wZXJ0eShlKXx8Yi5yZWplY3QoYSl9KX0pOzA9PT1jJiZiLnJlc29sdmUoZCk7cmV0dXJuIGIucHJvbWlzZX19fVxuZnVuY3Rpb24gQWQoKXt2YXIgYj0xMCxhPXQoXCIkcm9vdFNjb3BlXCIpLGM9bnVsbDt0aGlzLmRpZ2VzdFR0bD1mdW5jdGlvbihhKXthcmd1bWVudHMubGVuZ3RoJiYoYj1hKTtyZXR1cm4gYn07dGhpcy4kZ2V0PVtcIiRpbmplY3RvclwiLFwiJGV4Y2VwdGlvbkhhbmRsZXJcIixcIiRwYXJzZVwiLFwiJGJyb3dzZXJcIixmdW5jdGlvbihkLGUsZyxmKXtmdW5jdGlvbiBoKCl7dGhpcy4kaWQ9WmEoKTt0aGlzLiQkcGhhc2U9dGhpcy4kcGFyZW50PXRoaXMuJCR3YXRjaGVycz10aGlzLiQkbmV4dFNpYmxpbmc9dGhpcy4kJHByZXZTaWJsaW5nPXRoaXMuJCRjaGlsZEhlYWQ9dGhpcy4kJGNoaWxkVGFpbD1udWxsO3RoaXNbXCJ0aGlzXCJdPXRoaXMuJHJvb3Q9dGhpczt0aGlzLiQkZGVzdHJveWVkPSExO3RoaXMuJCRhc3luY1F1ZXVlPVtdO3RoaXMuJCRwb3N0RGlnZXN0UXVldWU9W107dGhpcy4kJGxpc3RlbmVycz17fTt0aGlzLiQkbGlzdGVuZXJDb3VudD17fTt0aGlzLiQkaXNvbGF0ZUJpbmRpbmdzPXt9fVxuZnVuY3Rpb24gbShiKXtpZihwLiQkcGhhc2UpdGhyb3cgYShcImlucHJvZ1wiLHAuJCRwaGFzZSk7cC4kJHBoYXNlPWJ9ZnVuY3Rpb24gayhhLGIpe3ZhciBjPWcoYSk7UGEoYyxiKTtyZXR1cm4gY31mdW5jdGlvbiBsKGEsYixjKXtkbyBhLiQkbGlzdGVuZXJDb3VudFtjXS09YiwwPT09YS4kJGxpc3RlbmVyQ291bnRbY10mJmRlbGV0ZSBhLiQkbGlzdGVuZXJDb3VudFtjXTt3aGlsZShhPWEuJHBhcmVudCl9ZnVuY3Rpb24gbigpe31oLnByb3RvdHlwZT17Y29uc3RydWN0b3I6aCwkbmV3OmZ1bmN0aW9uKGEpe2E/KGE9bmV3IGgsYS4kcm9vdD10aGlzLiRyb290LGEuJCRhc3luY1F1ZXVlPXRoaXMuJCRhc3luY1F1ZXVlLGEuJCRwb3N0RGlnZXN0UXVldWU9dGhpcy4kJHBvc3REaWdlc3RRdWV1ZSk6KGE9ZnVuY3Rpb24oKXt9LGEucHJvdG90eXBlPXRoaXMsYT1uZXcgYSxhLiRpZD1aYSgpKTthW1widGhpc1wiXT1hO2EuJCRsaXN0ZW5lcnM9e307YS4kJGxpc3RlbmVyQ291bnQ9e307YS4kcGFyZW50PVxudGhpczthLiQkd2F0Y2hlcnM9YS4kJG5leHRTaWJsaW5nPWEuJCRjaGlsZEhlYWQ9YS4kJGNoaWxkVGFpbD1udWxsO2EuJCRwcmV2U2libGluZz10aGlzLiQkY2hpbGRUYWlsO3RoaXMuJCRjaGlsZEhlYWQ/dGhpcy4kJGNoaWxkVGFpbD10aGlzLiQkY2hpbGRUYWlsLiQkbmV4dFNpYmxpbmc9YTp0aGlzLiQkY2hpbGRIZWFkPXRoaXMuJCRjaGlsZFRhaWw9YTtyZXR1cm4gYX0sJHdhdGNoOmZ1bmN0aW9uKGEsYixkKXt2YXIgZT1rKGEsXCJ3YXRjaFwiKSxnPXRoaXMuJCR3YXRjaGVycyxmPXtmbjpiLGxhc3Q6bixnZXQ6ZSxleHA6YSxlcTohIWR9O2M9bnVsbDtpZighTShiKSl7dmFyIGg9ayhifHxFLFwibGlzdGVuZXJcIik7Zi5mbj1mdW5jdGlvbihhLGIsYyl7aChjKX19aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJmUuY29uc3RhbnQpe3ZhciBtPWYuZm47Zi5mbj1mdW5jdGlvbihhLGIsYyl7bS5jYWxsKHRoaXMsYSxiLGMpO01hKGcsZil9fWd8fChnPXRoaXMuJCR3YXRjaGVycz1bXSk7Zy51bnNoaWZ0KGYpO1xucmV0dXJuIGZ1bmN0aW9uKCl7TWEoZyxmKTtjPW51bGx9fSwkd2F0Y2hDb2xsZWN0aW9uOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcyxkLGUsZj0wLGg9ZyhhKSxrPVtdLG09e30sbD0wO3JldHVybiB0aGlzLiR3YXRjaChmdW5jdGlvbigpe2U9aChjKTt2YXIgYSxiO2lmKFcoZSkpaWYocWIoZSkpZm9yKGQhPT1rJiYoZD1rLGw9ZC5sZW5ndGg9MCxmKyspLGE9ZS5sZW5ndGgsbCE9PWEmJihmKyssZC5sZW5ndGg9bD1hKSxiPTA7YjxhO2IrKylkW2JdIT09ZVtiXSYmKGYrKyxkW2JdPWVbYl0pO2Vsc2V7ZCE9PW0mJihkPW09e30sbD0wLGYrKyk7YT0wO2ZvcihiIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShiKSYmKGErKyxkLmhhc093blByb3BlcnR5KGIpP2RbYl0hPT1lW2JdJiYoZisrLGRbYl09ZVtiXSk6KGwrKyxkW2JdPWVbYl0sZisrKSk7aWYobD5hKWZvcihiIGluIGYrKyxkKWQuaGFzT3duUHJvcGVydHkoYikmJiFlLmhhc093blByb3BlcnR5KGIpJiYobC0tLGRlbGV0ZSBkW2JdKX1lbHNlIGQhPT1cbmUmJihkPWUsZisrKTtyZXR1cm4gZn0sZnVuY3Rpb24oKXtiKGUsZCxjKX0pfSwkZGlnZXN0OmZ1bmN0aW9uKCl7dmFyIGQsZixnLGgsaz10aGlzLiQkYXN5bmNRdWV1ZSxsPXRoaXMuJCRwb3N0RGlnZXN0UXVldWUscSxDLHM9YixJLFU9W10sdCx6LEI7bShcIiRkaWdlc3RcIik7Yz1udWxsO2Rve0M9ITE7Zm9yKEk9dGhpcztrLmxlbmd0aDspe3RyeXtCPWsuc2hpZnQoKSxCLnNjb3BlLiRldmFsKEIuZXhwcmVzc2lvbil9Y2F0Y2goRCl7cC4kJHBoYXNlPW51bGwsZShEKX1jPW51bGx9YTpkb3tpZihoPUkuJCR3YXRjaGVycylmb3IocT1oLmxlbmd0aDtxLS07KXRyeXtpZihkPWhbcV0paWYoKGY9ZC5nZXQoSSkpIT09KGc9ZC5sYXN0KSYmIShkLmVxP3RhKGYsZyk6XCJudW1iZXJcIj09dHlwZW9mIGYmJlwibnVtYmVyXCI9PXR5cGVvZiBnJiZpc05hTihmKSYmaXNOYU4oZykpKUM9ITAsYz1kLGQubGFzdD1kLmVxPyQoZik6ZixkLmZuKGYsZz09PW4/ZjpnLEkpLDU+cyYmKHQ9NC1zLFVbdF18fFxuKFVbdF09W10pLHo9TShkLmV4cCk/XCJmbjogXCIrKGQuZXhwLm5hbWV8fGQuZXhwLnRvU3RyaW5nKCkpOmQuZXhwLHorPVwiOyBuZXdWYWw6IFwiK3BhKGYpK1wiOyBvbGRWYWw6IFwiK3BhKGcpLFVbdF0ucHVzaCh6KSk7ZWxzZSBpZihkPT09Yyl7Qz0hMTticmVhayBhfX1jYXRjaCh5KXtwLiQkcGhhc2U9bnVsbCxlKHkpfWlmKCEoaD1JLiQkY2hpbGRIZWFkfHxJIT09dGhpcyYmSS4kJG5leHRTaWJsaW5nKSlmb3IoO0khPT10aGlzJiYhKGg9SS4kJG5leHRTaWJsaW5nKTspST1JLiRwYXJlbnR9d2hpbGUoST1oKTtpZigoQ3x8ay5sZW5ndGgpJiYhcy0tKXRocm93IHAuJCRwaGFzZT1udWxsLGEoXCJpbmZkaWdcIixiLHBhKFUpKTt9d2hpbGUoQ3x8ay5sZW5ndGgpO2ZvcihwLiQkcGhhc2U9bnVsbDtsLmxlbmd0aDspdHJ5e2wuc2hpZnQoKSgpfWNhdGNoKHcpe2Uodyl9fSwkZGVzdHJveTpmdW5jdGlvbigpe2lmKCF0aGlzLiQkZGVzdHJveWVkKXt2YXIgYT10aGlzLiRwYXJlbnQ7dGhpcy4kYnJvYWRjYXN0KFwiJGRlc3Ryb3lcIik7XG50aGlzLiQkZGVzdHJveWVkPSEwO3RoaXMhPT1wJiYocSh0aGlzLiQkbGlzdGVuZXJDb3VudCxiYihudWxsLGwsdGhpcykpLGEuJCRjaGlsZEhlYWQ9PXRoaXMmJihhLiQkY2hpbGRIZWFkPXRoaXMuJCRuZXh0U2libGluZyksYS4kJGNoaWxkVGFpbD09dGhpcyYmKGEuJCRjaGlsZFRhaWw9dGhpcy4kJHByZXZTaWJsaW5nKSx0aGlzLiQkcHJldlNpYmxpbmcmJih0aGlzLiQkcHJldlNpYmxpbmcuJCRuZXh0U2libGluZz10aGlzLiQkbmV4dFNpYmxpbmcpLHRoaXMuJCRuZXh0U2libGluZyYmKHRoaXMuJCRuZXh0U2libGluZy4kJHByZXZTaWJsaW5nPXRoaXMuJCRwcmV2U2libGluZyksdGhpcy4kcGFyZW50PXRoaXMuJCRuZXh0U2libGluZz10aGlzLiQkcHJldlNpYmxpbmc9dGhpcy4kJGNoaWxkSGVhZD10aGlzLiQkY2hpbGRUYWlsPW51bGwpfX0sJGV2YWw6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZyhhKSh0aGlzLGIpfSwkZXZhbEFzeW5jOmZ1bmN0aW9uKGEpe3AuJCRwaGFzZXx8cC4kJGFzeW5jUXVldWUubGVuZ3RofHxcbmYuZGVmZXIoZnVuY3Rpb24oKXtwLiQkYXN5bmNRdWV1ZS5sZW5ndGgmJnAuJGRpZ2VzdCgpfSk7dGhpcy4kJGFzeW5jUXVldWUucHVzaCh7c2NvcGU6dGhpcyxleHByZXNzaW9uOmF9KX0sJCRwb3N0RGlnZXN0OmZ1bmN0aW9uKGEpe3RoaXMuJCRwb3N0RGlnZXN0UXVldWUucHVzaChhKX0sJGFwcGx5OmZ1bmN0aW9uKGEpe3RyeXtyZXR1cm4gbShcIiRhcHBseVwiKSx0aGlzLiRldmFsKGEpfWNhdGNoKGIpe2UoYil9ZmluYWxseXtwLiQkcGhhc2U9bnVsbDt0cnl7cC4kZGlnZXN0KCl9Y2F0Y2goYyl7dGhyb3cgZShjKSxjO319fSwkb246ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLiQkbGlzdGVuZXJzW2FdO2N8fCh0aGlzLiQkbGlzdGVuZXJzW2FdPWM9W10pO2MucHVzaChiKTt2YXIgZD10aGlzO2RvIGQuJCRsaXN0ZW5lckNvdW50W2FdfHwoZC4kJGxpc3RlbmVyQ291bnRbYV09MCksZC4kJGxpc3RlbmVyQ291bnRbYV0rKzt3aGlsZShkPWQuJHBhcmVudCk7dmFyIGU9dGhpcztyZXR1cm4gZnVuY3Rpb24oKXtjW2FiKGMsXG5iKV09bnVsbDtsKGUsMSxhKX19LCRlbWl0OmZ1bmN0aW9uKGEsYil7dmFyIGM9W10sZCxmPXRoaXMsZz0hMSxoPXtuYW1lOmEsdGFyZ2V0U2NvcGU6ZixzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXtnPSEwfSxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe2guZGVmYXVsdFByZXZlbnRlZD0hMH0sZGVmYXVsdFByZXZlbnRlZDohMX0saz1baF0uY29uY2F0KHVhLmNhbGwoYXJndW1lbnRzLDEpKSxtLGw7ZG97ZD1mLiQkbGlzdGVuZXJzW2FdfHxjO2guY3VycmVudFNjb3BlPWY7bT0wO2ZvcihsPWQubGVuZ3RoO208bDttKyspaWYoZFttXSl0cnl7ZFttXS5hcHBseShudWxsLGspfWNhdGNoKHApe2UocCl9ZWxzZSBkLnNwbGljZShtLDEpLG0tLSxsLS07aWYoZylicmVhaztmPWYuJHBhcmVudH13aGlsZShmKTtyZXR1cm4gaH0sJGJyb2FkY2FzdDpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz10aGlzLGQ9dGhpcyxmPXtuYW1lOmEsdGFyZ2V0U2NvcGU6dGhpcyxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe2YuZGVmYXVsdFByZXZlbnRlZD1cbiEwfSxkZWZhdWx0UHJldmVudGVkOiExfSxnPVtmXS5jb25jYXQodWEuY2FsbChhcmd1bWVudHMsMSkpLGgsaztjPWQ7KXtmLmN1cnJlbnRTY29wZT1jO2Q9Yy4kJGxpc3RlbmVyc1thXXx8W107aD0wO2ZvcihrPWQubGVuZ3RoO2g8aztoKyspaWYoZFtoXSl0cnl7ZFtoXS5hcHBseShudWxsLGcpfWNhdGNoKG0pe2UobSl9ZWxzZSBkLnNwbGljZShoLDEpLGgtLSxrLS07aWYoIShkPWMuJCRsaXN0ZW5lckNvdW50W2FdJiZjLiQkY2hpbGRIZWFkfHxjIT09dGhpcyYmYy4kJG5leHRTaWJsaW5nKSlmb3IoO2MhPT10aGlzJiYhKGQ9Yy4kJG5leHRTaWJsaW5nKTspYz1jLiRwYXJlbnR9cmV0dXJuIGZ9fTt2YXIgcD1uZXcgaDtyZXR1cm4gcH1dfWZ1bmN0aW9uIEJkKCl7dmFyIGI9L15cXHMqKGh0dHBzP3xmdHB8bWFpbHRvfHRlbHxmaWxlKTovLGE9L15cXHMqKGh0dHBzP3xmdHB8ZmlsZSk6fGRhdGE6aW1hZ2VcXC8vO3RoaXMuYUhyZWZTYW5pdGl6YXRpb25XaGl0ZWxpc3Q9ZnVuY3Rpb24oYSl7cmV0dXJuIEQoYSk/XG4oYj1hLHRoaXMpOmJ9O3RoaXMuaW1nU3JjU2FuaXRpemF0aW9uV2hpdGVsaXN0PWZ1bmN0aW9uKGIpe3JldHVybiBEKGIpPyhhPWIsdGhpcyk6YX07dGhpcy4kZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGMsZCl7dmFyIGU9ZD9hOmIsZztpZighTnx8ODw9TilpZihnPXhhKGMpLmhyZWYsXCJcIiE9PWcmJiFnLm1hdGNoKGUpKXJldHVyblwidW5zYWZlOlwiK2c7cmV0dXJuIGN9fX1mdW5jdGlvbiBDZChiKXtpZihcInNlbGZcIj09PWIpcmV0dXJuIGI7aWYodyhiKSl7aWYoLTE8Yi5pbmRleE9mKFwiKioqXCIpKXRocm93IHJhKFwiaXdjYXJkXCIsYik7Yj1iLnJlcGxhY2UoLyhbLSgpXFxbXFxde30rPyouJFxcXnwsOiM8IVxcXFxdKS9nLFwiXFxcXCQxXCIpLnJlcGxhY2UoL1xceDA4L2csXCJcXFxceDA4XCIpLnJlcGxhY2UoXCJcXFxcKlxcXFwqXCIsXCIuKlwiKS5yZXBsYWNlKFwiXFxcXCpcIixcIlteOi8uPyY7XSpcIik7cmV0dXJuIFJlZ0V4cChcIl5cIitiK1wiJFwiKX1pZigkYShiKSlyZXR1cm4gUmVnRXhwKFwiXlwiK2Iuc291cmNlK1wiJFwiKTtcbnRocm93IHJhKFwiaW1hdGNoZXJcIik7fWZ1bmN0aW9uIHljKGIpe3ZhciBhPVtdO0QoYikmJnEoYixmdW5jdGlvbihiKXthLnB1c2goQ2QoYikpfSk7cmV0dXJuIGF9ZnVuY3Rpb24gRGQoKXt0aGlzLlNDRV9DT05URVhUUz1lYTt2YXIgYj1bXCJzZWxmXCJdLGE9W107dGhpcy5yZXNvdXJjZVVybFdoaXRlbGlzdD1mdW5jdGlvbihhKXthcmd1bWVudHMubGVuZ3RoJiYoYj15YyhhKSk7cmV0dXJuIGJ9O3RoaXMucmVzb3VyY2VVcmxCbGFja2xpc3Q9ZnVuY3Rpb24oYil7YXJndW1lbnRzLmxlbmd0aCYmKGE9eWMoYikpO3JldHVybiBhfTt0aGlzLiRnZXQ9W1wiJGluamVjdG9yXCIsZnVuY3Rpb24oYyl7ZnVuY3Rpb24gZChhKXt2YXIgYj1mdW5jdGlvbihhKXt0aGlzLiQkdW53cmFwVHJ1c3RlZFZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuIGF9fTthJiYoYi5wcm90b3R5cGU9bmV3IGEpO2IucHJvdG90eXBlLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJHVud3JhcFRydXN0ZWRWYWx1ZSgpfTtcbmIucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCR1bndyYXBUcnVzdGVkVmFsdWUoKS50b1N0cmluZygpfTtyZXR1cm4gYn12YXIgZT1mdW5jdGlvbihhKXt0aHJvdyByYShcInVuc2FmZVwiKTt9O2MuaGFzKFwiJHNhbml0aXplXCIpJiYoZT1jLmdldChcIiRzYW5pdGl6ZVwiKSk7dmFyIGc9ZCgpLGY9e307ZltlYS5IVE1MXT1kKGcpO2ZbZWEuQ1NTXT1kKGcpO2ZbZWEuVVJMXT1kKGcpO2ZbZWEuSlNdPWQoZyk7ZltlYS5SRVNPVVJDRV9VUkxdPWQoZltlYS5VUkxdKTtyZXR1cm57dHJ1c3RBczpmdW5jdGlvbihhLGIpe3ZhciBjPWYuaGFzT3duUHJvcGVydHkoYSk/ZlthXTpudWxsO2lmKCFjKXRocm93IHJhKFwiaWNvbnRleHRcIixhLGIpO2lmKG51bGw9PT1ifHxiPT09c3x8XCJcIj09PWIpcmV0dXJuIGI7aWYoXCJzdHJpbmdcIiE9PXR5cGVvZiBiKXRocm93IHJhKFwiaXR5cGVcIixhKTtyZXR1cm4gbmV3IGMoYil9LGdldFRydXN0ZWQ6ZnVuY3Rpb24oYyxkKXtpZihudWxsPT09XG5kfHxkPT09c3x8XCJcIj09PWQpcmV0dXJuIGQ7dmFyIGc9Zi5oYXNPd25Qcm9wZXJ0eShjKT9mW2NdOm51bGw7aWYoZyYmZCBpbnN0YW5jZW9mIGcpcmV0dXJuIGQuJCR1bndyYXBUcnVzdGVkVmFsdWUoKTtpZihjPT09ZWEuUkVTT1VSQ0VfVVJMKXt2YXIgZz14YShkLnRvU3RyaW5nKCkpLGwsbixwPSExO2w9MDtmb3Iobj1iLmxlbmd0aDtsPG47bCsrKWlmKFwic2VsZlwiPT09YltsXT9FYihnKTpiW2xdLmV4ZWMoZy5ocmVmKSl7cD0hMDticmVha31pZihwKWZvcihsPTAsbj1hLmxlbmd0aDtsPG47bCsrKWlmKFwic2VsZlwiPT09YVtsXT9FYihnKTphW2xdLmV4ZWMoZy5ocmVmKSl7cD0hMTticmVha31pZihwKXJldHVybiBkO3Rocm93IHJhKFwiaW5zZWN1cmxcIixkLnRvU3RyaW5nKCkpO31pZihjPT09ZWEuSFRNTClyZXR1cm4gZShkKTt0aHJvdyByYShcInVuc2FmZVwiKTt9LHZhbHVlT2Y6ZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBnP2EuJCR1bndyYXBUcnVzdGVkVmFsdWUoKTphfX19XX1cbmZ1bmN0aW9uIEVkKCl7dmFyIGI9ITA7dGhpcy5lbmFibGVkPWZ1bmN0aW9uKGEpe2FyZ3VtZW50cy5sZW5ndGgmJihiPSEhYSk7cmV0dXJuIGJ9O3RoaXMuJGdldD1bXCIkcGFyc2VcIixcIiRzbmlmZmVyXCIsXCIkc2NlRGVsZWdhdGVcIixmdW5jdGlvbihhLGMsZCl7aWYoYiYmYy5tc2llJiY4PmMubXNpZURvY3VtZW50TW9kZSl0aHJvdyByYShcImllcXVpcmtzXCIpO3ZhciBlPSQoZWEpO2UuaXNFbmFibGVkPWZ1bmN0aW9uKCl7cmV0dXJuIGJ9O2UudHJ1c3RBcz1kLnRydXN0QXM7ZS5nZXRUcnVzdGVkPWQuZ2V0VHJ1c3RlZDtlLnZhbHVlT2Y9ZC52YWx1ZU9mO2J8fChlLnRydXN0QXM9ZS5nZXRUcnVzdGVkPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGJ9LGUudmFsdWVPZj1BYSk7ZS5wYXJzZUFzPWZ1bmN0aW9uKGIsYyl7dmFyIGQ9YShjKTtyZXR1cm4gZC5saXRlcmFsJiZkLmNvbnN0YW50P2Q6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gZS5nZXRUcnVzdGVkKGIsZChhLGMpKX19O3ZhciBnPWUucGFyc2VBcyxcbmY9ZS5nZXRUcnVzdGVkLGg9ZS50cnVzdEFzO3EoZWEsZnVuY3Rpb24oYSxiKXt2YXIgYz14KGIpO2VbUWEoXCJwYXJzZV9hc19cIitjKV09ZnVuY3Rpb24oYil7cmV0dXJuIGcoYSxiKX07ZVtRYShcImdldF90cnVzdGVkX1wiK2MpXT1mdW5jdGlvbihiKXtyZXR1cm4gZihhLGIpfTtlW1FhKFwidHJ1c3RfYXNfXCIrYyldPWZ1bmN0aW9uKGIpe3JldHVybiBoKGEsYil9fSk7cmV0dXJuIGV9XX1mdW5jdGlvbiBGZCgpe3RoaXMuJGdldD1bXCIkd2luZG93XCIsXCIkZG9jdW1lbnRcIixmdW5jdGlvbihiLGEpe3ZhciBjPXt9LGQ9VigoL2FuZHJvaWQgKFxcZCspLy5leGVjKHgoKGIubmF2aWdhdG9yfHx7fSkudXNlckFnZW50KSl8fFtdKVsxXSksZT0vQm94ZWUvaS50ZXN0KChiLm5hdmlnYXRvcnx8e30pLnVzZXJBZ2VudCksZz1hWzBdfHx7fSxmPWcuZG9jdW1lbnRNb2RlLGgsbT0vXihNb3p8d2Via2l0fE98bXMpKD89W0EtWl0pLyxrPWcuYm9keSYmZy5ib2R5LnN0eWxlLGw9ITEsbj0hMTtpZihrKXtmb3IodmFyIHAgaW4gaylpZihsPVxubS5leGVjKHApKXtoPWxbMF07aD1oLnN1YnN0cigwLDEpLnRvVXBwZXJDYXNlKCkraC5zdWJzdHIoMSk7YnJlYWt9aHx8KGg9XCJXZWJraXRPcGFjaXR5XCJpbiBrJiZcIndlYmtpdFwiKTtsPSEhKFwidHJhbnNpdGlvblwiaW4ga3x8aCtcIlRyYW5zaXRpb25cImluIGspO249ISEoXCJhbmltYXRpb25cImluIGt8fGgrXCJBbmltYXRpb25cImluIGspOyFkfHxsJiZufHwobD13KGcuYm9keS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uKSxuPXcoZy5ib2R5LnN0eWxlLndlYmtpdEFuaW1hdGlvbikpfXJldHVybntoaXN0b3J5OiEoIWIuaGlzdG9yeXx8IWIuaGlzdG9yeS5wdXNoU3RhdGV8fDQ+ZHx8ZSksaGFzaGNoYW5nZTpcIm9uaGFzaGNoYW5nZVwiaW4gYiYmKCFmfHw3PGYpLGhhc0V2ZW50OmZ1bmN0aW9uKGEpe2lmKFwiaW5wdXRcIj09YSYmOT09TilyZXR1cm4hMTtpZih1KGNbYV0pKXt2YXIgYj1nLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Y1thXT1cIm9uXCIrYSBpbiBifXJldHVybiBjW2FdfSxjc3A6U2IoKSx2ZW5kb3JQcmVmaXg6aCxcbnRyYW5zaXRpb25zOmwsYW5pbWF0aW9uczpuLGFuZHJvaWQ6ZCxtc2llOk4sbXNpZURvY3VtZW50TW9kZTpmfX1dfWZ1bmN0aW9uIEdkKCl7dGhpcy4kZ2V0PVtcIiRyb290U2NvcGVcIixcIiRicm93c2VyXCIsXCIkcVwiLFwiJGV4Y2VwdGlvbkhhbmRsZXJcIixmdW5jdGlvbihiLGEsYyxkKXtmdW5jdGlvbiBlKGUsaCxtKXt2YXIgaz1jLmRlZmVyKCksbD1rLnByb21pc2Usbj1EKG0pJiYhbTtoPWEuZGVmZXIoZnVuY3Rpb24oKXt0cnl7ay5yZXNvbHZlKGUoKSl9Y2F0Y2goYSl7ay5yZWplY3QoYSksZChhKX1maW5hbGx5e2RlbGV0ZSBnW2wuJCR0aW1lb3V0SWRdfW58fGIuJGFwcGx5KCl9LGgpO2wuJCR0aW1lb3V0SWQ9aDtnW2hdPWs7cmV0dXJuIGx9dmFyIGc9e307ZS5jYW5jZWw9ZnVuY3Rpb24oYil7cmV0dXJuIGImJmIuJCR0aW1lb3V0SWQgaW4gZz8oZ1tiLiQkdGltZW91dElkXS5yZWplY3QoXCJjYW5jZWxlZFwiKSxkZWxldGUgZ1tiLiQkdGltZW91dElkXSxhLmRlZmVyLmNhbmNlbChiLiQkdGltZW91dElkKSk6XG4hMX07cmV0dXJuIGV9XX1mdW5jdGlvbiB4YShiLGEpe3ZhciBjPWI7TiYmKFQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGMpLGM9VC5ocmVmKTtULnNldEF0dHJpYnV0ZShcImhyZWZcIixjKTtyZXR1cm57aHJlZjpULmhyZWYscHJvdG9jb2w6VC5wcm90b2NvbD9ULnByb3RvY29sLnJlcGxhY2UoLzokLyxcIlwiKTpcIlwiLGhvc3Q6VC5ob3N0LHNlYXJjaDpULnNlYXJjaD9ULnNlYXJjaC5yZXBsYWNlKC9eXFw/LyxcIlwiKTpcIlwiLGhhc2g6VC5oYXNoP1QuaGFzaC5yZXBsYWNlKC9eIy8sXCJcIik6XCJcIixob3N0bmFtZTpULmhvc3RuYW1lLHBvcnQ6VC5wb3J0LHBhdGhuYW1lOlwiL1wiPT09VC5wYXRobmFtZS5jaGFyQXQoMCk/VC5wYXRobmFtZTpcIi9cIitULnBhdGhuYW1lfX1mdW5jdGlvbiBFYihiKXtiPXcoYik/eGEoYik6YjtyZXR1cm4gYi5wcm90b2NvbD09PXpjLnByb3RvY29sJiZiLmhvc3Q9PT16Yy5ob3N0fWZ1bmN0aW9uIEhkKCl7dGhpcy4kZ2V0PVkoUCl9ZnVuY3Rpb24gQWMoYil7ZnVuY3Rpb24gYShkLFxuZSl7aWYoVyhkKSl7dmFyIGc9e307cShkLGZ1bmN0aW9uKGIsYyl7Z1tjXT1hKGMsYil9KTtyZXR1cm4gZ31yZXR1cm4gYi5mYWN0b3J5KGQrYyxlKX12YXIgYz1cIkZpbHRlclwiO3RoaXMucmVnaXN0ZXI9YTt0aGlzLiRnZXQ9W1wiJGluamVjdG9yXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBhLmdldChiK2MpfX1dO2EoXCJjdXJyZW5jeVwiLEJjKTthKFwiZGF0ZVwiLENjKTthKFwiZmlsdGVyXCIsSWQpO2EoXCJqc29uXCIsSmQpO2EoXCJsaW1pdFRvXCIsS2QpO2EoXCJsb3dlcmNhc2VcIixMZCk7YShcIm51bWJlclwiLERjKTthKFwib3JkZXJCeVwiLEVjKTthKFwidXBwZXJjYXNlXCIsTWQpfWZ1bmN0aW9uIElkKCl7cmV0dXJuIGZ1bmN0aW9uKGIsYSxjKXtpZighTChiKSlyZXR1cm4gYjt2YXIgZD10eXBlb2YgYyxlPVtdO2UuY2hlY2s9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTA7YjxlLmxlbmd0aDtiKyspaWYoIWVbYl0oYSkpcmV0dXJuITE7cmV0dXJuITB9O1wiZnVuY3Rpb25cIiE9PWQmJlxuKGM9XCJib29sZWFuXCI9PT1kJiZjP2Z1bmN0aW9uKGEsYil7cmV0dXJuIEJhLmVxdWFscyhhLGIpfTpmdW5jdGlvbihhLGIpe2I9KFwiXCIrYikudG9Mb3dlckNhc2UoKTtyZXR1cm4tMTwoXCJcIithKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoYil9KTt2YXIgZz1mdW5jdGlvbihhLGIpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiJiZcIiFcIj09PWIuY2hhckF0KDApKXJldHVybiFnKGEsYi5zdWJzdHIoMSkpO3N3aXRjaCh0eXBlb2YgYSl7Y2FzZSBcImJvb2xlYW5cIjpjYXNlIFwibnVtYmVyXCI6Y2FzZSBcInN0cmluZ1wiOnJldHVybiBjKGEsYik7Y2FzZSBcIm9iamVjdFwiOnN3aXRjaCh0eXBlb2YgYil7Y2FzZSBcIm9iamVjdFwiOnJldHVybiBjKGEsYik7ZGVmYXVsdDpmb3IodmFyIGQgaW4gYSlpZihcIiRcIiE9PWQuY2hhckF0KDApJiZnKGFbZF0sYikpcmV0dXJuITB9cmV0dXJuITE7Y2FzZSBcImFycmF5XCI6Zm9yKGQ9MDtkPGEubGVuZ3RoO2QrKylpZihnKGFbZF0sYikpcmV0dXJuITA7cmV0dXJuITE7ZGVmYXVsdDpyZXR1cm4hMX19O1xuc3dpdGNoKHR5cGVvZiBhKXtjYXNlIFwiYm9vbGVhblwiOmNhc2UgXCJudW1iZXJcIjpjYXNlIFwic3RyaW5nXCI6YT17JDphfTtjYXNlIFwib2JqZWN0XCI6Zm9yKHZhciBmIGluIGEpKGZ1bmN0aW9uKGIpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBhW2JdJiZlLnB1c2goZnVuY3Rpb24oYyl7cmV0dXJuIGcoXCIkXCI9PWI/YzpjJiZjW2JdLGFbYl0pfSl9KShmKTticmVhaztjYXNlIFwiZnVuY3Rpb25cIjplLnB1c2goYSk7YnJlYWs7ZGVmYXVsdDpyZXR1cm4gYn1kPVtdO2ZvcihmPTA7ZjxiLmxlbmd0aDtmKyspe3ZhciBoPWJbZl07ZS5jaGVjayhoKSYmZC5wdXNoKGgpfXJldHVybiBkfX1mdW5jdGlvbiBCYyhiKXt2YXIgYT1iLk5VTUJFUl9GT1JNQVRTO3JldHVybiBmdW5jdGlvbihiLGQpe3UoZCkmJihkPWEuQ1VSUkVOQ1lfU1lNKTtyZXR1cm4gRmMoYixhLlBBVFRFUk5TWzFdLGEuR1JPVVBfU0VQLGEuREVDSU1BTF9TRVAsMikucmVwbGFjZSgvXFx1MDBBNC9nLGQpfX1mdW5jdGlvbiBEYyhiKXt2YXIgYT1cbmIuTlVNQkVSX0ZPUk1BVFM7cmV0dXJuIGZ1bmN0aW9uKGIsZCl7cmV0dXJuIEZjKGIsYS5QQVRURVJOU1swXSxhLkdST1VQX1NFUCxhLkRFQ0lNQUxfU0VQLGQpfX1mdW5jdGlvbiBGYyhiLGEsYyxkLGUpe2lmKGlzTmFOKGIpfHwhaXNGaW5pdGUoYikpcmV0dXJuXCJcIjt2YXIgZz0wPmI7Yj1NYXRoLmFicyhiKTt2YXIgZj1iK1wiXCIsaD1cIlwiLG09W10saz0hMTtpZigtMSE9PWYuaW5kZXhPZihcImVcIikpe3ZhciBsPWYubWF0Y2goLyhbXFxkXFwuXSspZSgtPykoXFxkKykvKTtsJiZcIi1cIj09bFsyXSYmbFszXT5lKzE/Zj1cIjBcIjooaD1mLGs9ITApfWlmKGspMDxlJiYoLTE8YiYmMT5iKSYmKGg9Yi50b0ZpeGVkKGUpKTtlbHNle2Y9KGYuc3BsaXQoR2MpWzFdfHxcIlwiKS5sZW5ndGg7dShlKSYmKGU9TWF0aC5taW4oTWF0aC5tYXgoYS5taW5GcmFjLGYpLGEubWF4RnJhYykpO2Y9TWF0aC5wb3coMTAsZSk7Yj1NYXRoLnJvdW5kKGIqZikvZjtiPShcIlwiK2IpLnNwbGl0KEdjKTtmPWJbMF07Yj1iWzFdfHxcblwiXCI7dmFyIGw9MCxuPWEubGdTaXplLHA9YS5nU2l6ZTtpZihmLmxlbmd0aD49bitwKWZvcihsPWYubGVuZ3RoLW4saz0wO2s8bDtrKyspMD09PShsLWspJXAmJjAhPT1rJiYoaCs9YyksaCs9Zi5jaGFyQXQoayk7Zm9yKGs9bDtrPGYubGVuZ3RoO2srKykwPT09KGYubGVuZ3RoLWspJW4mJjAhPT1rJiYoaCs9YyksaCs9Zi5jaGFyQXQoayk7Zm9yKDtiLmxlbmd0aDxlOyliKz1cIjBcIjtlJiZcIjBcIiE9PWUmJihoKz1kK2Iuc3Vic3RyKDAsZSkpfW0ucHVzaChnP2EubmVnUHJlOmEucG9zUHJlKTttLnB1c2goaCk7bS5wdXNoKGc/YS5uZWdTdWY6YS5wb3NTdWYpO3JldHVybiBtLmpvaW4oXCJcIil9ZnVuY3Rpb24gS2IoYixhLGMpe3ZhciBkPVwiXCI7MD5iJiYoZD1cIi1cIixiPS1iKTtmb3IoYj1cIlwiK2I7Yi5sZW5ndGg8YTspYj1cIjBcIitiO2MmJihiPWIuc3Vic3RyKGIubGVuZ3RoLWEpKTtyZXR1cm4gZCtifWZ1bmN0aW9uIFgoYixhLGMsZCl7Yz1jfHwwO3JldHVybiBmdW5jdGlvbihlKXtlPWVbXCJnZXRcIitcbmJdKCk7aWYoMDxjfHxlPi1jKWUrPWM7MD09PWUmJi0xMj09YyYmKGU9MTIpO3JldHVybiBLYihlLGEsZCl9fWZ1bmN0aW9uIGtiKGIsYSl7cmV0dXJuIGZ1bmN0aW9uKGMsZCl7dmFyIGU9Y1tcImdldFwiK2JdKCksZz1IYShhP1wiU0hPUlRcIitiOmIpO3JldHVybiBkW2ddW2VdfX1mdW5jdGlvbiBDYyhiKXtmdW5jdGlvbiBhKGEpe3ZhciBiO2lmKGI9YS5tYXRjaChjKSl7YT1uZXcgRGF0ZSgwKTt2YXIgZz0wLGY9MCxoPWJbOF0/YS5zZXRVVENGdWxsWWVhcjphLnNldEZ1bGxZZWFyLG09Yls4XT9hLnNldFVUQ0hvdXJzOmEuc2V0SG91cnM7Yls5XSYmKGc9VihiWzldK2JbMTBdKSxmPVYoYls5XStiWzExXSkpO2guY2FsbChhLFYoYlsxXSksVihiWzJdKS0xLFYoYlszXSkpO2c9VihiWzRdfHwwKS1nO2Y9VihiWzVdfHwwKS1mO2g9VihiWzZdfHwwKTtiPU1hdGgucm91bmQoMUUzKnBhcnNlRmxvYXQoXCIwLlwiKyhiWzddfHwwKSkpO20uY2FsbChhLGcsZixoLGIpfXJldHVybiBhfXZhciBjPVxuL14oXFxkezR9KS0/KFxcZFxcZCktPyhcXGRcXGQpKD86VChcXGRcXGQpKD86Oj8oXFxkXFxkKSg/Ojo/KFxcZFxcZCkoPzpcXC4oXFxkKykpPyk/KT8oWnwoWystXSkoXFxkXFxkKTo/KFxcZFxcZCkpPyk/JC87cmV0dXJuIGZ1bmN0aW9uKGMsZSl7dmFyIGc9XCJcIixmPVtdLGgsbTtlPWV8fFwibWVkaXVtRGF0ZVwiO2U9Yi5EQVRFVElNRV9GT1JNQVRTW2VdfHxlO3coYykmJihjPU5kLnRlc3QoYyk/VihjKTphKGMpKTtyYihjKSYmKGM9bmV3IERhdGUoYykpO2lmKCFLYShjKSlyZXR1cm4gYztmb3IoO2U7KShtPU9kLmV4ZWMoZSkpPyhmPWYuY29uY2F0KHVhLmNhbGwobSwxKSksZT1mLnBvcCgpKTooZi5wdXNoKGUpLGU9bnVsbCk7cShmLGZ1bmN0aW9uKGEpe2g9UGRbYV07Zys9aD9oKGMsYi5EQVRFVElNRV9GT1JNQVRTKTphLnJlcGxhY2UoLyheJ3wnJCkvZyxcIlwiKS5yZXBsYWNlKC8nJy9nLFwiJ1wiKX0pO3JldHVybiBnfX1mdW5jdGlvbiBKZCgpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gcGEoYiwhMCl9fWZ1bmN0aW9uIEtkKCl7cmV0dXJuIGZ1bmN0aW9uKGIsXG5hKXtpZighTChiKSYmIXcoYikpcmV0dXJuIGI7YT1WKGEpO2lmKHcoYikpcmV0dXJuIGE/MDw9YT9iLnNsaWNlKDAsYSk6Yi5zbGljZShhLGIubGVuZ3RoKTpcIlwiO3ZhciBjPVtdLGQsZTthPmIubGVuZ3RoP2E9Yi5sZW5ndGg6YTwtYi5sZW5ndGgmJihhPS1iLmxlbmd0aCk7MDxhPyhkPTAsZT1hKTooZD1iLmxlbmd0aCthLGU9Yi5sZW5ndGgpO2Zvcig7ZDxlO2QrKyljLnB1c2goYltkXSk7cmV0dXJuIGN9fWZ1bmN0aW9uIEVjKGIpe3JldHVybiBmdW5jdGlvbihhLGMsZCl7ZnVuY3Rpb24gZShhLGIpe3JldHVybiBPYShiKT9mdW5jdGlvbihiLGMpe3JldHVybiBhKGMsYil9OmF9aWYoIUwoYSl8fCFjKXJldHVybiBhO2M9TChjKT9jOltjXTtjPVFjKGMsZnVuY3Rpb24oYSl7dmFyIGM9ITEsZD1hfHxBYTtpZih3KGEpKXtpZihcIitcIj09YS5jaGFyQXQoMCl8fFwiLVwiPT1hLmNoYXJBdCgwKSljPVwiLVwiPT1hLmNoYXJBdCgwKSxhPWEuc3Vic3RyaW5nKDEpO2Q9YihhKX1yZXR1cm4gZShmdW5jdGlvbihhLFxuYil7dmFyIGM7Yz1kKGEpO3ZhciBlPWQoYiksZj10eXBlb2YgYyxnPXR5cGVvZiBlO2Y9PWc/KFwic3RyaW5nXCI9PWYmJihjPWMudG9Mb3dlckNhc2UoKSxlPWUudG9Mb3dlckNhc2UoKSksYz1jPT09ZT8wOmM8ZT8tMToxKTpjPWY8Zz8tMToxO3JldHVybiBjfSxjKX0pO2Zvcih2YXIgZz1bXSxmPTA7ZjxhLmxlbmd0aDtmKyspZy5wdXNoKGFbZl0pO3JldHVybiBnLnNvcnQoZShmdW5jdGlvbihhLGIpe2Zvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7ZCsrKXt2YXIgZT1jW2RdKGEsYik7aWYoMCE9PWUpcmV0dXJuIGV9cmV0dXJuIDB9LGQpKX19ZnVuY3Rpb24gc2EoYil7TShiKSYmKGI9e2xpbms6Yn0pO2IucmVzdHJpY3Q9Yi5yZXN0cmljdHx8XCJBQ1wiO3JldHVybiBZKGIpfWZ1bmN0aW9uIEhjKGIsYSl7ZnVuY3Rpb24gYyhhLGMpe2M9Yz9cIi1cIitjYihjLFwiLVwiKTpcIlwiO2IucmVtb3ZlQ2xhc3MoKGE/bGI6bWIpK2MpLmFkZENsYXNzKChhP21iOmxiKStjKX12YXIgZD10aGlzLGU9Yi5wYXJlbnQoKS5jb250cm9sbGVyKFwiZm9ybVwiKXx8XG5uYixnPTAsZj1kLiRlcnJvcj17fSxoPVtdO2QuJG5hbWU9YS5uYW1lfHxhLm5nRm9ybTtkLiRkaXJ0eT0hMTtkLiRwcmlzdGluZT0hMDtkLiR2YWxpZD0hMDtkLiRpbnZhbGlkPSExO2UuJGFkZENvbnRyb2woZCk7Yi5hZGRDbGFzcyhJYSk7YyghMCk7ZC4kYWRkQ29udHJvbD1mdW5jdGlvbihhKXt3YShhLiRuYW1lLFwiaW5wdXRcIik7aC5wdXNoKGEpO2EuJG5hbWUmJihkW2EuJG5hbWVdPWEpfTtkLiRyZW1vdmVDb250cm9sPWZ1bmN0aW9uKGEpe2EuJG5hbWUmJmRbYS4kbmFtZV09PT1hJiZkZWxldGUgZFthLiRuYW1lXTtxKGYsZnVuY3Rpb24oYixjKXtkLiRzZXRWYWxpZGl0eShjLCEwLGEpfSk7TWEoaCxhKX07ZC4kc2V0VmFsaWRpdHk9ZnVuY3Rpb24oYSxiLGgpe3ZhciBuPWZbYV07aWYoYiluJiYoTWEobixoKSxuLmxlbmd0aHx8KGctLSxnfHwoYyhiKSxkLiR2YWxpZD0hMCxkLiRpbnZhbGlkPSExKSxmW2FdPSExLGMoITAsYSksZS4kc2V0VmFsaWRpdHkoYSwhMCxkKSkpO2Vsc2V7Z3x8XG5jKGIpO2lmKG4pe2lmKC0xIT1hYihuLGgpKXJldHVybn1lbHNlIGZbYV09bj1bXSxnKyssYyghMSxhKSxlLiRzZXRWYWxpZGl0eShhLCExLGQpO24ucHVzaChoKTtkLiR2YWxpZD0hMTtkLiRpbnZhbGlkPSEwfX07ZC4kc2V0RGlydHk9ZnVuY3Rpb24oKXtiLnJlbW92ZUNsYXNzKElhKS5hZGRDbGFzcyhvYik7ZC4kZGlydHk9ITA7ZC4kcHJpc3RpbmU9ITE7ZS4kc2V0RGlydHkoKX07ZC4kc2V0UHJpc3RpbmU9ZnVuY3Rpb24oKXtiLnJlbW92ZUNsYXNzKG9iKS5hZGRDbGFzcyhJYSk7ZC4kZGlydHk9ITE7ZC4kcHJpc3RpbmU9ITA7cShoLGZ1bmN0aW9uKGEpe2EuJHNldFByaXN0aW5lKCl9KX19ZnVuY3Rpb24gb2EoYixhLGMsZCl7Yi4kc2V0VmFsaWRpdHkoYSxjKTtyZXR1cm4gYz9kOnN9ZnVuY3Rpb24gcGIoYixhLGMsZCxlLGcpe2lmKCFlLmFuZHJvaWQpe3ZhciBmPSExO2Eub24oXCJjb21wb3NpdGlvbnN0YXJ0XCIsZnVuY3Rpb24oYSl7Zj0hMH0pO2Eub24oXCJjb21wb3NpdGlvbmVuZFwiLFxuZnVuY3Rpb24oKXtmPSExfSl9dmFyIGg9ZnVuY3Rpb24oKXtpZighZil7dmFyIGU9YS52YWwoKTtPYShjLm5nVHJpbXx8XCJUXCIpJiYoZT1aKGUpKTtkLiR2aWV3VmFsdWUhPT1lJiYoYi4kJHBoYXNlP2QuJHNldFZpZXdWYWx1ZShlKTpiLiRhcHBseShmdW5jdGlvbigpe2QuJHNldFZpZXdWYWx1ZShlKX0pKX19O2lmKGUuaGFzRXZlbnQoXCJpbnB1dFwiKSlhLm9uKFwiaW5wdXRcIixoKTtlbHNle3ZhciBtLGs9ZnVuY3Rpb24oKXttfHwobT1nLmRlZmVyKGZ1bmN0aW9uKCl7aCgpO209bnVsbH0pKX07YS5vbihcImtleWRvd25cIixmdW5jdGlvbihhKXthPWEua2V5Q29kZTs5MT09PWF8fCgxNTxhJiYxOT5hfHwzNzw9YSYmNDA+PWEpfHxrKCl9KTtpZihlLmhhc0V2ZW50KFwicGFzdGVcIikpYS5vbihcInBhc3RlIGN1dFwiLGspfWEub24oXCJjaGFuZ2VcIixoKTtkLiRyZW5kZXI9ZnVuY3Rpb24oKXthLnZhbChkLiRpc0VtcHR5KGQuJHZpZXdWYWx1ZSk/XCJcIjpkLiR2aWV3VmFsdWUpfTt2YXIgbD1jLm5nUGF0dGVybjtcbmwmJigoZT1sLm1hdGNoKC9eXFwvKC4qKVxcLyhbZ2ltXSopJC8pKT8obD1SZWdFeHAoZVsxXSxlWzJdKSxlPWZ1bmN0aW9uKGEpe3JldHVybiBvYShkLFwicGF0dGVyblwiLGQuJGlzRW1wdHkoYSl8fGwudGVzdChhKSxhKX0pOmU9ZnVuY3Rpb24oYyl7dmFyIGU9Yi4kZXZhbChsKTtpZighZXx8IWUudGVzdCl0aHJvdyB0KFwibmdQYXR0ZXJuXCIpKFwibm9yZWdleHBcIixsLGUsZmEoYSkpO3JldHVybiBvYShkLFwicGF0dGVyblwiLGQuJGlzRW1wdHkoYyl8fGUudGVzdChjKSxjKX0sZC4kZm9ybWF0dGVycy5wdXNoKGUpLGQuJHBhcnNlcnMucHVzaChlKSk7aWYoYy5uZ01pbmxlbmd0aCl7dmFyIG49VihjLm5nTWlubGVuZ3RoKTtlPWZ1bmN0aW9uKGEpe3JldHVybiBvYShkLFwibWlubGVuZ3RoXCIsZC4kaXNFbXB0eShhKXx8YS5sZW5ndGg+PW4sYSl9O2QuJHBhcnNlcnMucHVzaChlKTtkLiRmb3JtYXR0ZXJzLnB1c2goZSl9aWYoYy5uZ01heGxlbmd0aCl7dmFyIHA9VihjLm5nTWF4bGVuZ3RoKTtlPVxuZnVuY3Rpb24oYSl7cmV0dXJuIG9hKGQsXCJtYXhsZW5ndGhcIixkLiRpc0VtcHR5KGEpfHxhLmxlbmd0aDw9cCxhKX07ZC4kcGFyc2Vycy5wdXNoKGUpO2QuJGZvcm1hdHRlcnMucHVzaChlKX19ZnVuY3Rpb24gTGIoYixhKXtiPVwibmdDbGFzc1wiK2I7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiQUNcIixsaW5rOmZ1bmN0aW9uKGMsZCxlKXtmdW5jdGlvbiBnKGIpe2lmKCEwPT09YXx8Yy4kaW5kZXglMj09PWEpe3ZhciBkPWYoYnx8XCJcIik7aD90YShiLGgpfHxlLiR1cGRhdGVDbGFzcyhkLGYoaCkpOmUuJGFkZENsYXNzKGQpfWg9JChiKX1mdW5jdGlvbiBmKGEpe2lmKEwoYSkpcmV0dXJuIGEuam9pbihcIiBcIik7aWYoVyhhKSl7dmFyIGI9W107cShhLGZ1bmN0aW9uKGEsYyl7YSYmYi5wdXNoKGMpfSk7cmV0dXJuIGIuam9pbihcIiBcIil9cmV0dXJuIGF9dmFyIGg7Yy4kd2F0Y2goZVtiXSxnLCEwKTtlLiRvYnNlcnZlKFwiY2xhc3NcIixmdW5jdGlvbihhKXtnKGMuJGV2YWwoZVtiXSkpfSk7XG5cIm5nQ2xhc3NcIiE9PWImJmMuJHdhdGNoKFwiJGluZGV4XCIsZnVuY3Rpb24oZCxnKXt2YXIgaD1kJjE7aWYoaCE9PWcmMSl7dmFyIG49ZihjLiRldmFsKGVbYl0pKTtoPT09YT9lLiRhZGRDbGFzcyhuKTplLiRyZW1vdmVDbGFzcyhuKX19KX19fX12YXIgeD1mdW5jdGlvbihiKXtyZXR1cm4gdyhiKT9iLnRvTG93ZXJDYXNlKCk6Yn0sSGE9ZnVuY3Rpb24oYil7cmV0dXJuIHcoYik/Yi50b1VwcGVyQ2FzZSgpOmJ9LE4seixDYSx1YT1bXS5zbGljZSxRZD1bXS5wdXNoLExhPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsTmE9dChcIm5nXCIpLEJhPVAuYW5ndWxhcnx8KFAuYW5ndWxhcj17fSksVWEsR2EsaWE9W1wiMFwiLFwiMFwiLFwiMFwiXTtOPVYoKC9tc2llIChcXGQrKS8uZXhlYyh4KG5hdmlnYXRvci51c2VyQWdlbnQpKXx8W10pWzFdKTtpc05hTihOKSYmKE49VigoL3RyaWRlbnRcXC8uKjsgcnY6KFxcZCspLy5leGVjKHgobmF2aWdhdG9yLnVzZXJBZ2VudCkpfHxbXSlbMV0pKTtFLiRpbmplY3Q9W107XG5BYS4kaW5qZWN0PVtdO3ZhciBaPWZ1bmN0aW9uKCl7cmV0dXJuIFN0cmluZy5wcm90b3R5cGUudHJpbT9mdW5jdGlvbihiKXtyZXR1cm4gdyhiKT9iLnRyaW0oKTpifTpmdW5jdGlvbihiKXtyZXR1cm4gdyhiKT9iLnJlcGxhY2UoL15cXHNcXHMqLyxcIlwiKS5yZXBsYWNlKC9cXHNcXHMqJC8sXCJcIik6Yn19KCk7R2E9OT5OP2Z1bmN0aW9uKGIpe2I9Yi5ub2RlTmFtZT9iOmJbMF07cmV0dXJuIGIuc2NvcGVOYW1lJiZcIkhUTUxcIiE9Yi5zY29wZU5hbWU/SGEoYi5zY29wZU5hbWUrXCI6XCIrYi5ub2RlTmFtZSk6Yi5ub2RlTmFtZX06ZnVuY3Rpb24oYil7cmV0dXJuIGIubm9kZU5hbWU/Yi5ub2RlTmFtZTpiWzBdLm5vZGVOYW1lfTt2YXIgVGM9L1tBLVpdL2csUmQ9e2Z1bGw6XCIxLjIuMTJcIixtYWpvcjoxLG1pbm9yOjIsZG90OjEyLGNvZGVOYW1lOlwiY2F1bGlmbG93ZXItZXJhZGljYXRpb25cIn0sUmE9Ty5jYWNoZT17fSxkYj1PLmV4cGFuZG89XCJuZy1cIisobmV3IERhdGUpLmdldFRpbWUoKSxYYz0xLEljPVxuUC5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyP2Z1bmN0aW9uKGIsYSxjKXtiLmFkZEV2ZW50TGlzdGVuZXIoYSxjLCExKX06ZnVuY3Rpb24oYixhLGMpe2IuYXR0YWNoRXZlbnQoXCJvblwiK2EsYyl9LHpiPVAuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcj9mdW5jdGlvbihiLGEsYyl7Yi5yZW1vdmVFdmVudExpc3RlbmVyKGEsYywhMSl9OmZ1bmN0aW9uKGIsYSxjKXtiLmRldGFjaEV2ZW50KFwib25cIithLGMpfSxWYz0vKFtcXDpcXC1cXF9dKyguKSkvZyxXYz0vXm1veihbQS1aXSkvLHdiPXQoXCJqcUxpdGVcIiksRmE9Ty5wcm90b3R5cGU9e3JlYWR5OmZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGEoKXtjfHwoYz0hMCxiKCkpfXZhciBjPSExO1wiY29tcGxldGVcIj09PVIucmVhZHlTdGF0ZT9zZXRUaW1lb3V0KGEpOih0aGlzLm9uKFwiRE9NQ29udGVudExvYWRlZFwiLGEpLE8oUCkub24oXCJsb2FkXCIsYSkpfSx0b1N0cmluZzpmdW5jdGlvbigpe3ZhciBiPVtdO3EodGhpcyxmdW5jdGlvbihhKXtiLnB1c2goXCJcIitcbmEpfSk7cmV0dXJuXCJbXCIrYi5qb2luKFwiLCBcIikrXCJdXCJ9LGVxOmZ1bmN0aW9uKGIpe3JldHVybiAwPD1iP3oodGhpc1tiXSk6eih0aGlzW3RoaXMubGVuZ3RoK2JdKX0sbGVuZ3RoOjAscHVzaDpRZCxzb3J0OltdLnNvcnQsc3BsaWNlOltdLnNwbGljZX0sZmI9e307cShcIm11bHRpcGxlIHNlbGVjdGVkIGNoZWNrZWQgZGlzYWJsZWQgcmVhZE9ubHkgcmVxdWlyZWQgb3BlblwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihiKXtmYlt4KGIpXT1ifSk7dmFyIGZjPXt9O3EoXCJpbnB1dCBzZWxlY3Qgb3B0aW9uIHRleHRhcmVhIGJ1dHRvbiBmb3JtIGRldGFpbHNcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYil7ZmNbSGEoYildPSEwfSk7cSh7ZGF0YTpiYyxpbmhlcml0ZWREYXRhOmViLHNjb3BlOmZ1bmN0aW9uKGIpe3JldHVybiB6KGIpLmRhdGEoXCIkc2NvcGVcIil8fGViKGIucGFyZW50Tm9kZXx8YixbXCIkaXNvbGF0ZVNjb3BlXCIsXCIkc2NvcGVcIl0pfSxpc29sYXRlU2NvcGU6ZnVuY3Rpb24oYil7cmV0dXJuIHooYikuZGF0YShcIiRpc29sYXRlU2NvcGVcIil8fFxueihiKS5kYXRhKFwiJGlzb2xhdGVTY29wZU5vVGVtcGxhdGVcIil9LGNvbnRyb2xsZXI6Y2MsaW5qZWN0b3I6ZnVuY3Rpb24oYil7cmV0dXJuIGViKGIsXCIkaW5qZWN0b3JcIil9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYixhKXtiLnJlbW92ZUF0dHJpYnV0ZShhKX0saGFzQ2xhc3M6QWIsY3NzOmZ1bmN0aW9uKGIsYSxjKXthPVFhKGEpO2lmKEQoYykpYi5zdHlsZVthXT1jO2Vsc2V7dmFyIGQ7OD49TiYmKGQ9Yi5jdXJyZW50U3R5bGUmJmIuY3VycmVudFN0eWxlW2FdLFwiXCI9PT1kJiYoZD1cImF1dG9cIikpO2Q9ZHx8Yi5zdHlsZVthXTs4Pj1OJiYoZD1cIlwiPT09ZD9zOmQpO3JldHVybiBkfX0sYXR0cjpmdW5jdGlvbihiLGEsYyl7dmFyIGQ9eChhKTtpZihmYltkXSlpZihEKGMpKWM/KGJbYV09ITAsYi5zZXRBdHRyaWJ1dGUoYSxkKSk6KGJbYV09ITEsYi5yZW1vdmVBdHRyaWJ1dGUoZCkpO2Vsc2UgcmV0dXJuIGJbYV18fChiLmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKGEpfHxFKS5zcGVjaWZpZWQ/XG5kOnM7ZWxzZSBpZihEKGMpKWIuc2V0QXR0cmlidXRlKGEsYyk7ZWxzZSBpZihiLmdldEF0dHJpYnV0ZSlyZXR1cm4gYj1iLmdldEF0dHJpYnV0ZShhLDIpLG51bGw9PT1iP3M6Yn0scHJvcDpmdW5jdGlvbihiLGEsYyl7aWYoRChjKSliW2FdPWM7ZWxzZSByZXR1cm4gYlthXX0sdGV4dDpmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixkKXt2YXIgZT1hW2Iubm9kZVR5cGVdO2lmKHUoZCkpcmV0dXJuIGU/YltlXTpcIlwiO2JbZV09ZH12YXIgYT1bXTs5Pk4/KGFbMV09XCJpbm5lclRleHRcIixhWzNdPVwibm9kZVZhbHVlXCIpOmFbMV09YVszXT1cInRleHRDb250ZW50XCI7Yi4kZHY9XCJcIjtyZXR1cm4gYn0oKSx2YWw6ZnVuY3Rpb24oYixhKXtpZih1KGEpKXtpZihcIlNFTEVDVFwiPT09R2EoYikmJmIubXVsdGlwbGUpe3ZhciBjPVtdO3EoYi5vcHRpb25zLGZ1bmN0aW9uKGEpe2Euc2VsZWN0ZWQmJmMucHVzaChhLnZhbHVlfHxhLnRleHQpfSk7cmV0dXJuIDA9PT1jLmxlbmd0aD9udWxsOmN9cmV0dXJuIGIudmFsdWV9Yi52YWx1ZT1cbmF9LGh0bWw6ZnVuY3Rpb24oYixhKXtpZih1KGEpKXJldHVybiBiLmlubmVySFRNTDtmb3IodmFyIGM9MCxkPWIuY2hpbGROb2RlcztjPGQubGVuZ3RoO2MrKylEYShkW2NdKTtiLmlubmVySFRNTD1hfSxlbXB0eTpkY30sZnVuY3Rpb24oYixhKXtPLnByb3RvdHlwZVthXT1mdW5jdGlvbihhLGQpe3ZhciBlLGc7aWYoYiE9PWRjJiYoMj09Yi5sZW5ndGgmJmIhPT1BYiYmYiE9PWNjP2E6ZCk9PT1zKXtpZihXKGEpKXtmb3IoZT0wO2U8dGhpcy5sZW5ndGg7ZSsrKWlmKGI9PT1iYyliKHRoaXNbZV0sYSk7ZWxzZSBmb3IoZyBpbiBhKWIodGhpc1tlXSxnLGFbZ10pO3JldHVybiB0aGlzfWU9Yi4kZHY7Zz1lPT09cz9NYXRoLm1pbih0aGlzLmxlbmd0aCwxKTp0aGlzLmxlbmd0aDtmb3IodmFyIGY9MDtmPGc7ZisrKXt2YXIgaD1iKHRoaXNbZl0sYSxkKTtlPWU/ZStoOmh9cmV0dXJuIGV9Zm9yKGU9MDtlPHRoaXMubGVuZ3RoO2UrKyliKHRoaXNbZV0sYSxkKTtyZXR1cm4gdGhpc319KTtxKHtyZW1vdmVEYXRhOiRiLFxuZGVhbG9jOkRhLG9uOmZ1bmN0aW9uIGEoYyxkLGUsZyl7aWYoRChnKSl0aHJvdyB3YihcIm9uYXJnc1wiKTt2YXIgZj1qYShjLFwiZXZlbnRzXCIpLGg9amEoYyxcImhhbmRsZVwiKTtmfHxqYShjLFwiZXZlbnRzXCIsZj17fSk7aHx8amEoYyxcImhhbmRsZVwiLGg9WWMoYyxmKSk7cShkLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihkKXt2YXIgZz1mW2RdO2lmKCFnKXtpZihcIm1vdXNlZW50ZXJcIj09ZHx8XCJtb3VzZWxlYXZlXCI9PWQpe3ZhciBsPVIuYm9keS5jb250YWluc3x8Ui5ib2R5LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uP2Z1bmN0aW9uKGEsYyl7dmFyIGQ9OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YSxlPWMmJmMucGFyZW50Tm9kZTtyZXR1cm4gYT09PWV8fCEhKGUmJjE9PT1lLm5vZGVUeXBlJiYoZC5jb250YWlucz9kLmNvbnRhaW5zKGUpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZSkmMTYpKX06ZnVuY3Rpb24oYSxjKXtpZihjKWZvcig7Yz1cbmMucGFyZW50Tm9kZTspaWYoYz09PWEpcmV0dXJuITA7cmV0dXJuITF9O2ZbZF09W107YShjLHttb3VzZWxlYXZlOlwibW91c2VvdXRcIixtb3VzZWVudGVyOlwibW91c2VvdmVyXCJ9W2RdLGZ1bmN0aW9uKGEpe3ZhciBjPWEucmVsYXRlZFRhcmdldDtjJiYoYz09PXRoaXN8fGwodGhpcyxjKSl8fGgoYSxkKX0pfWVsc2UgSWMoYyxkLGgpLGZbZF09W107Zz1mW2RdfWcucHVzaChlKX0pfSxvZmY6YWMsb25lOmZ1bmN0aW9uKGEsYyxkKXthPXooYSk7YS5vbihjLGZ1bmN0aW9uIGcoKXthLm9mZihjLGQpO2Eub2ZmKGMsZyl9KTthLm9uKGMsZCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKGEsYyl7dmFyIGQsZT1hLnBhcmVudE5vZGU7RGEoYSk7cShuZXcgTyhjKSxmdW5jdGlvbihjKXtkP2UuaW5zZXJ0QmVmb3JlKGMsZC5uZXh0U2libGluZyk6ZS5yZXBsYWNlQ2hpbGQoYyxhKTtkPWN9KX0sY2hpbGRyZW46ZnVuY3Rpb24oYSl7dmFyIGM9W107cShhLmNoaWxkTm9kZXMsZnVuY3Rpb24oYSl7MT09PVxuYS5ub2RlVHlwZSYmYy5wdXNoKGEpfSk7cmV0dXJuIGN9LGNvbnRlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBhLmNoaWxkTm9kZXN8fFtdfSxhcHBlbmQ6ZnVuY3Rpb24oYSxjKXtxKG5ldyBPKGMpLGZ1bmN0aW9uKGMpezEhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGV8fGEuYXBwZW5kQ2hpbGQoYyl9KX0scHJlcGVuZDpmdW5jdGlvbihhLGMpe2lmKDE9PT1hLm5vZGVUeXBlKXt2YXIgZD1hLmZpcnN0Q2hpbGQ7cShuZXcgTyhjKSxmdW5jdGlvbihjKXthLmluc2VydEJlZm9yZShjLGQpfSl9fSx3cmFwOmZ1bmN0aW9uKGEsYyl7Yz16KGMpWzBdO3ZhciBkPWEucGFyZW50Tm9kZTtkJiZkLnJlcGxhY2VDaGlsZChjLGEpO2MuYXBwZW5kQ2hpbGQoYSl9LHJlbW92ZTpmdW5jdGlvbihhKXtEYShhKTt2YXIgYz1hLnBhcmVudE5vZGU7YyYmYy5yZW1vdmVDaGlsZChhKX0sYWZ0ZXI6ZnVuY3Rpb24oYSxjKXt2YXIgZD1hLGU9YS5wYXJlbnROb2RlO3EobmV3IE8oYyksZnVuY3Rpb24oYSl7ZS5pbnNlcnRCZWZvcmUoYSxcbmQubmV4dFNpYmxpbmcpO2Q9YX0pfSxhZGRDbGFzczpDYixyZW1vdmVDbGFzczpCYix0b2dnbGVDbGFzczpmdW5jdGlvbihhLGMsZCl7dShkKSYmKGQ9IUFiKGEsYykpOyhkP0NiOkJiKShhLGMpfSxwYXJlbnQ6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9YS5wYXJlbnROb2RlKSYmMTEhPT1hLm5vZGVUeXBlP2E6bnVsbH0sbmV4dDpmdW5jdGlvbihhKXtpZihhLm5leHRFbGVtZW50U2libGluZylyZXR1cm4gYS5uZXh0RWxlbWVudFNpYmxpbmc7Zm9yKGE9YS5uZXh0U2libGluZztudWxsIT1hJiYxIT09YS5ub2RlVHlwZTspYT1hLm5leHRTaWJsaW5nO3JldHVybiBhfSxmaW5kOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWU/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShjKTpbXX0sY2xvbmU6eWIsdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oYSxjLGQpe2M9KGphKGEsXCJldmVudHNcIil8fHt9KVtjXTtkPWR8fFtdO3ZhciBlPVt7cHJldmVudERlZmF1bHQ6RSxzdG9wUHJvcGFnYXRpb246RX1dO1xucShjLGZ1bmN0aW9uKGMpe2MuYXBwbHkoYSxlLmNvbmNhdChkKSl9KX19LGZ1bmN0aW9uKGEsYyl7Ty5wcm90b3R5cGVbY109ZnVuY3Rpb24oYyxlLGcpe2Zvcih2YXIgZixoPTA7aDx0aGlzLmxlbmd0aDtoKyspdShmKT8oZj1hKHRoaXNbaF0sYyxlLGcpLEQoZikmJihmPXooZikpKTp4YihmLGEodGhpc1toXSxjLGUsZykpO3JldHVybiBEKGYpP2Y6dGhpc307Ty5wcm90b3R5cGUuYmluZD1PLnByb3RvdHlwZS5vbjtPLnByb3RvdHlwZS51bmJpbmQ9Ty5wcm90b3R5cGUub2ZmfSk7U2EucHJvdG90eXBlPXtwdXQ6ZnVuY3Rpb24oYSxjKXt0aGlzW0VhKGEpXT1jfSxnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXNbRWEoYSldfSxyZW1vdmU6ZnVuY3Rpb24oYSl7dmFyIGM9dGhpc1thPUVhKGEpXTtkZWxldGUgdGhpc1thXTtyZXR1cm4gY319O3ZhciAkYz0vXmZ1bmN0aW9uXFxzKlteXFwoXSpcXChcXHMqKFteXFwpXSopXFwpL20sYWQ9LywvLGJkPS9eXFxzKihfPykoXFxTKz8pXFwxXFxzKiQvLFpjPVxuLygoXFwvXFwvLiokKXwoXFwvXFwqW1xcc1xcU10qP1xcKlxcLykpL21nLFRhPXQoXCIkaW5qZWN0b3JcIiksU2Q9dChcIiRhbmltYXRlXCIpLFRkPVtcIiRwcm92aWRlXCIsZnVuY3Rpb24oYSl7dGhpcy4kJHNlbGVjdG9ycz17fTt0aGlzLnJlZ2lzdGVyPWZ1bmN0aW9uKGMsZCl7dmFyIGU9YytcIi1hbmltYXRpb25cIjtpZihjJiZcIi5cIiE9Yy5jaGFyQXQoMCkpdGhyb3cgU2QoXCJub3Rjc2VsXCIsYyk7dGhpcy4kJHNlbGVjdG9yc1tjLnN1YnN0cigxKV09ZTthLmZhY3RvcnkoZSxkKX07dGhpcy5jbGFzc05hbWVGaWx0ZXI9ZnVuY3Rpb24oYSl7MT09PWFyZ3VtZW50cy5sZW5ndGgmJih0aGlzLiQkY2xhc3NOYW1lRmlsdGVyPWEgaW5zdGFuY2VvZiBSZWdFeHA/YTpudWxsKTtyZXR1cm4gdGhpcy4kJGNsYXNzTmFtZUZpbHRlcn07dGhpcy4kZ2V0PVtcIiR0aW1lb3V0XCIsZnVuY3Rpb24oYSl7cmV0dXJue2VudGVyOmZ1bmN0aW9uKGQsZSxnLGYpe2c/Zy5hZnRlcihkKTooZSYmZVswXXx8KGU9Zy5wYXJlbnQoKSksZS5hcHBlbmQoZCkpO1xuZiYmYShmLDAsITEpfSxsZWF2ZTpmdW5jdGlvbihkLGUpe2QucmVtb3ZlKCk7ZSYmYShlLDAsITEpfSxtb3ZlOmZ1bmN0aW9uKGEsYyxnLGYpe3RoaXMuZW50ZXIoYSxjLGcsZil9LGFkZENsYXNzOmZ1bmN0aW9uKGQsZSxnKXtlPXcoZSk/ZTpMKGUpP2Uuam9pbihcIiBcIik6XCJcIjtxKGQsZnVuY3Rpb24oYSl7Q2IoYSxlKX0pO2cmJmEoZywwLCExKX0scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oZCxlLGcpe2U9dyhlKT9lOkwoZSk/ZS5qb2luKFwiIFwiKTpcIlwiO3EoZCxmdW5jdGlvbihhKXtCYihhLGUpfSk7ZyYmYShnLDAsITEpfSxlbmFibGVkOkV9fV19XSxoYT10KFwiJGNvbXBpbGVcIik7aWMuJGluamVjdD1bXCIkcHJvdmlkZVwiLFwiJCRzYW5pdGl6ZVVyaVByb3ZpZGVyXCJdO3ZhciBoZD0vXih4W1xcOlxcLV9dfGRhdGFbXFw6XFwtX10pL2ksb2M9dChcIiRpbnRlcnBvbGF0ZVwiKSxVZD0vXihbXlxcPyNdKikoXFw/KFteI10qKSk/KCMoLiopKT8kLyxzZD17aHR0cDo4MCxodHRwczo0NDMsZnRwOjIxfSxHYj10KFwiJGxvY2F0aW9uXCIpO1xudGMucHJvdG90eXBlPUhiLnByb3RvdHlwZT1zYy5wcm90b3R5cGU9eyQkaHRtbDU6ITEsJCRyZXBsYWNlOiExLGFic1VybDppYihcIiQkYWJzVXJsXCIpLHVybDpmdW5jdGlvbihhLGMpe2lmKHUoYSkpcmV0dXJuIHRoaXMuJCR1cmw7dmFyIGQ9VWQuZXhlYyhhKTtkWzFdJiZ0aGlzLnBhdGgoZGVjb2RlVVJJQ29tcG9uZW50KGRbMV0pKTsoZFsyXXx8ZFsxXSkmJnRoaXMuc2VhcmNoKGRbM118fFwiXCIpO3RoaXMuaGFzaChkWzVdfHxcIlwiLGMpO3JldHVybiB0aGlzfSxwcm90b2NvbDppYihcIiQkcHJvdG9jb2xcIiksaG9zdDppYihcIiQkaG9zdFwiKSxwb3J0OmliKFwiJCRwb3J0XCIpLHBhdGg6dWMoXCIkJHBhdGhcIixmdW5jdGlvbihhKXtyZXR1cm5cIi9cIj09YS5jaGFyQXQoMCk/YTpcIi9cIithfSksc2VhcmNoOmZ1bmN0aW9uKGEsYyl7c3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4gdGhpcy4kJHNlYXJjaDtjYXNlIDE6aWYodyhhKSl0aGlzLiQkc2VhcmNoPVZiKGEpO2Vsc2UgaWYoVyhhKSl0aGlzLiQkc2VhcmNoPVxuYTtlbHNlIHRocm93IEdiKFwiaXNyY2hhcmdcIik7YnJlYWs7ZGVmYXVsdDp1KGMpfHxudWxsPT09Yz9kZWxldGUgdGhpcy4kJHNlYXJjaFthXTp0aGlzLiQkc2VhcmNoW2FdPWN9dGhpcy4kJGNvbXBvc2UoKTtyZXR1cm4gdGhpc30saGFzaDp1YyhcIiQkaGFzaFwiLEFhKSxyZXBsYWNlOmZ1bmN0aW9uKCl7dGhpcy4kJHJlcGxhY2U9ITA7cmV0dXJuIHRoaXN9fTt2YXIgeWE9dChcIiRwYXJzZVwiKSx4Yz17fSxxYSxKYT17XCJudWxsXCI6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH0sXCJ0cnVlXCI6ZnVuY3Rpb24oKXtyZXR1cm4hMH0sXCJmYWxzZVwiOmZ1bmN0aW9uKCl7cmV0dXJuITF9LHVuZGVmaW5lZDpFLFwiK1wiOmZ1bmN0aW9uKGEsYyxkLGUpe2Q9ZChhLGMpO2U9ZShhLGMpO3JldHVybiBEKGQpP0QoZSk/ZCtlOmQ6RChlKT9lOnN9LFwiLVwiOmZ1bmN0aW9uKGEsYyxkLGUpe2Q9ZChhLGMpO2U9ZShhLGMpO3JldHVybihEKGQpP2Q6MCktKEQoZSk/ZTowKX0sXCIqXCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxcbmMpKmUoYSxjKX0sXCIvXCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKS9lKGEsYyl9LFwiJVwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyklZShhLGMpfSxcIl5cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpXmUoYSxjKX0sXCI9XCI6RSxcIj09PVwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyk9PT1lKGEsYyl9LFwiIT09XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKSE9PWUoYSxjKX0sXCI9PVwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyk9PWUoYSxjKX0sXCIhPVwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYykhPWUoYSxjKX0sXCI8XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKTxlKGEsYyl9LFwiPlwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyk+ZShhLGMpfSxcIjw9XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKTw9ZShhLGMpfSxcIj49XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxcbmMpPj1lKGEsYyl9LFwiJiZcIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpJiZlKGEsYyl9LFwifHxcIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpfHxlKGEsYyl9LFwiJlwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYykmZShhLGMpfSxcInxcIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZShhLGMpKGEsYyxkKGEsYykpfSxcIiFcIjpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIWQoYSxjKX19LFZkPXtuOlwiXFxuXCIsZjpcIlxcZlwiLHI6XCJcXHJcIix0OlwiXFx0XCIsdjpcIlxcdlwiLFwiJ1wiOlwiJ1wiLCdcIic6J1wiJ30sSmI9ZnVuY3Rpb24oYSl7dGhpcy5vcHRpb25zPWF9O0piLnByb3RvdHlwZT17Y29uc3RydWN0b3I6SmIsbGV4OmZ1bmN0aW9uKGEpe3RoaXMudGV4dD1hO3RoaXMuaW5kZXg9MDt0aGlzLmNoPXM7dGhpcy5sYXN0Q2g9XCI6XCI7dGhpcy50b2tlbnM9W107dmFyIGM7Zm9yKGE9W107dGhpcy5pbmRleDx0aGlzLnRleHQubGVuZ3RoOyl7dGhpcy5jaD10aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuaWYodGhpcy5pcyhcIlxcXCInXCIpKXRoaXMucmVhZFN0cmluZyh0aGlzLmNoKTtlbHNlIGlmKHRoaXMuaXNOdW1iZXIodGhpcy5jaCl8fHRoaXMuaXMoXCIuXCIpJiZ0aGlzLmlzTnVtYmVyKHRoaXMucGVlaygpKSl0aGlzLnJlYWROdW1iZXIoKTtlbHNlIGlmKHRoaXMuaXNJZGVudCh0aGlzLmNoKSl0aGlzLnJlYWRJZGVudCgpLHRoaXMud2FzKFwieyxcIikmJihcIntcIj09PWFbMF0mJihjPXRoaXMudG9rZW5zW3RoaXMudG9rZW5zLmxlbmd0aC0xXSkpJiYoYy5qc29uPS0xPT09Yy50ZXh0LmluZGV4T2YoXCIuXCIpKTtlbHNlIGlmKHRoaXMuaXMoXCIoKXt9W10uLDs6P1wiKSl0aGlzLnRva2Vucy5wdXNoKHtpbmRleDp0aGlzLmluZGV4LHRleHQ6dGhpcy5jaCxqc29uOnRoaXMud2FzKFwiOlssXCIpJiZ0aGlzLmlzKFwie1tcIil8fHRoaXMuaXMoXCJ9XTosXCIpfSksdGhpcy5pcyhcIntbXCIpJiZhLnVuc2hpZnQodGhpcy5jaCksdGhpcy5pcyhcIn1dXCIpJiZhLnNoaWZ0KCksdGhpcy5pbmRleCsrO2Vsc2UgaWYodGhpcy5pc1doaXRlc3BhY2UodGhpcy5jaCkpe3RoaXMuaW5kZXgrKztcbmNvbnRpbnVlfWVsc2V7dmFyIGQ9dGhpcy5jaCt0aGlzLnBlZWsoKSxlPWQrdGhpcy5wZWVrKDIpLGc9SmFbdGhpcy5jaF0sZj1KYVtkXSxoPUphW2VdO2g/KHRoaXMudG9rZW5zLnB1c2goe2luZGV4OnRoaXMuaW5kZXgsdGV4dDplLGZuOmh9KSx0aGlzLmluZGV4Kz0zKTpmPyh0aGlzLnRva2Vucy5wdXNoKHtpbmRleDp0aGlzLmluZGV4LHRleHQ6ZCxmbjpmfSksdGhpcy5pbmRleCs9Mik6Zz8odGhpcy50b2tlbnMucHVzaCh7aW5kZXg6dGhpcy5pbmRleCx0ZXh0OnRoaXMuY2gsZm46Zyxqc29uOnRoaXMud2FzKFwiWyw6XCIpJiZ0aGlzLmlzKFwiKy1cIil9KSx0aGlzLmluZGV4Kz0xKTp0aGlzLnRocm93RXJyb3IoXCJVbmV4cGVjdGVkIG5leHQgY2hhcmFjdGVyIFwiLHRoaXMuaW5kZXgsdGhpcy5pbmRleCsxKX10aGlzLmxhc3RDaD10aGlzLmNofXJldHVybiB0aGlzLnRva2Vuc30saXM6ZnVuY3Rpb24oYSl7cmV0dXJuLTEhPT1hLmluZGV4T2YodGhpcy5jaCl9LHdhczpmdW5jdGlvbihhKXtyZXR1cm4tMSE9PVxuYS5pbmRleE9mKHRoaXMubGFzdENoKX0scGVlazpmdW5jdGlvbihhKXthPWF8fDE7cmV0dXJuIHRoaXMuaW5kZXgrYTx0aGlzLnRleHQubGVuZ3RoP3RoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCthKTohMX0saXNOdW1iZXI6ZnVuY3Rpb24oYSl7cmV0dXJuXCIwXCI8PWEmJlwiOVwiPj1hfSxpc1doaXRlc3BhY2U6ZnVuY3Rpb24oYSl7cmV0dXJuXCIgXCI9PT1hfHxcIlxcclwiPT09YXx8XCJcXHRcIj09PWF8fFwiXFxuXCI9PT1hfHxcIlxcdlwiPT09YXx8XCJcXHUwMGEwXCI9PT1hfSxpc0lkZW50OmZ1bmN0aW9uKGEpe3JldHVyblwiYVwiPD1hJiZcInpcIj49YXx8XCJBXCI8PWEmJlwiWlwiPj1hfHxcIl9cIj09PWF8fFwiJFwiPT09YX0saXNFeHBPcGVyYXRvcjpmdW5jdGlvbihhKXtyZXR1cm5cIi1cIj09PWF8fFwiK1wiPT09YXx8dGhpcy5pc051bWJlcihhKX0sdGhyb3dFcnJvcjpmdW5jdGlvbihhLGMsZCl7ZD1kfHx0aGlzLmluZGV4O2M9RChjKT9cInMgXCIrYytcIi1cIit0aGlzLmluZGV4K1wiIFtcIit0aGlzLnRleHQuc3Vic3RyaW5nKGMsZCkrXG5cIl1cIjpcIiBcIitkO3Rocm93IHlhKFwibGV4ZXJyXCIsYSxjLHRoaXMudGV4dCk7fSxyZWFkTnVtYmVyOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPVwiXCIsYz10aGlzLmluZGV4O3RoaXMuaW5kZXg8dGhpcy50ZXh0Lmxlbmd0aDspe3ZhciBkPXgodGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KSk7aWYoXCIuXCI9PWR8fHRoaXMuaXNOdW1iZXIoZCkpYSs9ZDtlbHNle3ZhciBlPXRoaXMucGVlaygpO2lmKFwiZVwiPT1kJiZ0aGlzLmlzRXhwT3BlcmF0b3IoZSkpYSs9ZDtlbHNlIGlmKHRoaXMuaXNFeHBPcGVyYXRvcihkKSYmZSYmdGhpcy5pc051bWJlcihlKSYmXCJlXCI9PWEuY2hhckF0KGEubGVuZ3RoLTEpKWErPWQ7ZWxzZSBpZighdGhpcy5pc0V4cE9wZXJhdG9yKGQpfHxlJiZ0aGlzLmlzTnVtYmVyKGUpfHxcImVcIiE9YS5jaGFyQXQoYS5sZW5ndGgtMSkpYnJlYWs7ZWxzZSB0aGlzLnRocm93RXJyb3IoXCJJbnZhbGlkIGV4cG9uZW50XCIpfXRoaXMuaW5kZXgrK31hKj0xO3RoaXMudG9rZW5zLnB1c2goe2luZGV4OmMsXG50ZXh0OmEsanNvbjohMCxmbjpmdW5jdGlvbigpe3JldHVybiBhfX0pfSxyZWFkSWRlbnQ6ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcyxjPVwiXCIsZD10aGlzLmluZGV4LGUsZyxmLGg7dGhpcy5pbmRleDx0aGlzLnRleHQubGVuZ3RoOyl7aD10aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO2lmKFwiLlwiPT09aHx8dGhpcy5pc0lkZW50KGgpfHx0aGlzLmlzTnVtYmVyKGgpKVwiLlwiPT09aCYmKGU9dGhpcy5pbmRleCksYys9aDtlbHNlIGJyZWFrO3RoaXMuaW5kZXgrK31pZihlKWZvcihnPXRoaXMuaW5kZXg7Zzx0aGlzLnRleHQubGVuZ3RoOyl7aD10aGlzLnRleHQuY2hhckF0KGcpO2lmKFwiKFwiPT09aCl7Zj1jLnN1YnN0cihlLWQrMSk7Yz1jLnN1YnN0cigwLGUtZCk7dGhpcy5pbmRleD1nO2JyZWFrfWlmKHRoaXMuaXNXaGl0ZXNwYWNlKGgpKWcrKztlbHNlIGJyZWFrfWQ9e2luZGV4OmQsdGV4dDpjfTtpZihKYS5oYXNPd25Qcm9wZXJ0eShjKSlkLmZuPUphW2NdLGQuanNvbj1KYVtjXTtcbmVsc2V7dmFyIG09d2MoYyx0aGlzLm9wdGlvbnMsdGhpcy50ZXh0KTtkLmZuPXkoZnVuY3Rpb24oYSxjKXtyZXR1cm4gbShhLGMpfSx7YXNzaWduOmZ1bmN0aW9uKGQsZSl7cmV0dXJuIGpiKGQsYyxlLGEudGV4dCxhLm9wdGlvbnMpfX0pfXRoaXMudG9rZW5zLnB1c2goZCk7ZiYmKHRoaXMudG9rZW5zLnB1c2goe2luZGV4OmUsdGV4dDpcIi5cIixqc29uOiExfSksdGhpcy50b2tlbnMucHVzaCh7aW5kZXg6ZSsxLHRleHQ6Zixqc29uOiExfSkpfSxyZWFkU3RyaW5nOmZ1bmN0aW9uKGEpe3ZhciBjPXRoaXMuaW5kZXg7dGhpcy5pbmRleCsrO2Zvcih2YXIgZD1cIlwiLGU9YSxnPSExO3RoaXMuaW5kZXg8dGhpcy50ZXh0Lmxlbmd0aDspe3ZhciBmPXRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCksZT1lK2Y7aWYoZylcInVcIj09PWY/KGY9dGhpcy50ZXh0LnN1YnN0cmluZyh0aGlzLmluZGV4KzEsdGhpcy5pbmRleCs1KSxmLm1hdGNoKC9bXFxkYS1mXXs0fS9pKXx8dGhpcy50aHJvd0Vycm9yKFwiSW52YWxpZCB1bmljb2RlIGVzY2FwZSBbXFxcXHVcIitcbmYrXCJdXCIpLHRoaXMuaW5kZXgrPTQsZCs9U3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChmLDE2KSkpOmQ9KGc9VmRbZl0pP2QrZzpkK2YsZz0hMTtlbHNlIGlmKFwiXFxcXFwiPT09ZilnPSEwO2Vsc2V7aWYoZj09PWEpe3RoaXMuaW5kZXgrKzt0aGlzLnRva2Vucy5wdXNoKHtpbmRleDpjLHRleHQ6ZSxzdHJpbmc6ZCxqc29uOiEwLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIGR9fSk7cmV0dXJufWQrPWZ9dGhpcy5pbmRleCsrfXRoaXMudGhyb3dFcnJvcihcIlVudGVybWluYXRlZCBxdW90ZVwiLGMpfX07dmFyIFlhPWZ1bmN0aW9uKGEsYyxkKXt0aGlzLmxleGVyPWE7dGhpcy4kZmlsdGVyPWM7dGhpcy5vcHRpb25zPWR9O1lhLlpFUk89ZnVuY3Rpb24oKXtyZXR1cm4gMH07WWEucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpZYSxwYXJzZTpmdW5jdGlvbihhLGMpe3RoaXMudGV4dD1hO3RoaXMuanNvbj1jO3RoaXMudG9rZW5zPXRoaXMubGV4ZXIubGV4KGEpO2MmJih0aGlzLmFzc2lnbm1lbnQ9dGhpcy5sb2dpY2FsT1IsXG50aGlzLmZ1bmN0aW9uQ2FsbD10aGlzLmZpZWxkQWNjZXNzPXRoaXMub2JqZWN0SW5kZXg9dGhpcy5maWx0ZXJDaGFpbj1mdW5jdGlvbigpe3RoaXMudGhyb3dFcnJvcihcImlzIG5vdCB2YWxpZCBqc29uXCIse3RleHQ6YSxpbmRleDowfSl9KTt2YXIgZD1jP3RoaXMucHJpbWFyeSgpOnRoaXMuc3RhdGVtZW50cygpOzAhPT10aGlzLnRva2Vucy5sZW5ndGgmJnRoaXMudGhyb3dFcnJvcihcImlzIGFuIHVuZXhwZWN0ZWQgdG9rZW5cIix0aGlzLnRva2Vuc1swXSk7ZC5saXRlcmFsPSEhZC5saXRlcmFsO2QuY29uc3RhbnQ9ISFkLmNvbnN0YW50O3JldHVybiBkfSxwcmltYXJ5OmZ1bmN0aW9uKCl7dmFyIGE7aWYodGhpcy5leHBlY3QoXCIoXCIpKWE9dGhpcy5maWx0ZXJDaGFpbigpLHRoaXMuY29uc3VtZShcIilcIik7ZWxzZSBpZih0aGlzLmV4cGVjdChcIltcIikpYT10aGlzLmFycmF5RGVjbGFyYXRpb24oKTtlbHNlIGlmKHRoaXMuZXhwZWN0KFwie1wiKSlhPXRoaXMub2JqZWN0KCk7ZWxzZXt2YXIgYz1cbnRoaXMuZXhwZWN0KCk7KGE9Yy5mbil8fHRoaXMudGhyb3dFcnJvcihcIm5vdCBhIHByaW1hcnkgZXhwcmVzc2lvblwiLGMpO2MuanNvbiYmKGEuY29uc3RhbnQ9ITAsYS5saXRlcmFsPSEwKX1mb3IodmFyIGQ7Yz10aGlzLmV4cGVjdChcIihcIixcIltcIixcIi5cIik7KVwiKFwiPT09Yy50ZXh0PyhhPXRoaXMuZnVuY3Rpb25DYWxsKGEsZCksZD1udWxsKTpcIltcIj09PWMudGV4dD8oZD1hLGE9dGhpcy5vYmplY3RJbmRleChhKSk6XCIuXCI9PT1jLnRleHQ/KGQ9YSxhPXRoaXMuZmllbGRBY2Nlc3MoYSkpOnRoaXMudGhyb3dFcnJvcihcIklNUE9TU0lCTEVcIik7cmV0dXJuIGF9LHRocm93RXJyb3I6ZnVuY3Rpb24oYSxjKXt0aHJvdyB5YShcInN5bnRheFwiLGMudGV4dCxhLGMuaW5kZXgrMSx0aGlzLnRleHQsdGhpcy50ZXh0LnN1YnN0cmluZyhjLmluZGV4KSk7fSxwZWVrVG9rZW46ZnVuY3Rpb24oKXtpZigwPT09dGhpcy50b2tlbnMubGVuZ3RoKXRocm93IHlhKFwidWVvZVwiLHRoaXMudGV4dCk7cmV0dXJuIHRoaXMudG9rZW5zWzBdfSxcbnBlZWs6ZnVuY3Rpb24oYSxjLGQsZSl7aWYoMDx0aGlzLnRva2Vucy5sZW5ndGgpe3ZhciBnPXRoaXMudG9rZW5zWzBdLGY9Zy50ZXh0O2lmKGY9PT1hfHxmPT09Y3x8Zj09PWR8fGY9PT1lfHwhKGF8fGN8fGR8fGUpKXJldHVybiBnfXJldHVybiExfSxleHBlY3Q6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuKGE9dGhpcy5wZWVrKGEsYyxkLGUpKT8odGhpcy5qc29uJiYhYS5qc29uJiZ0aGlzLnRocm93RXJyb3IoXCJpcyBub3QgdmFsaWQganNvblwiLGEpLHRoaXMudG9rZW5zLnNoaWZ0KCksYSk6ITF9LGNvbnN1bWU6ZnVuY3Rpb24oYSl7dGhpcy5leHBlY3QoYSl8fHRoaXMudGhyb3dFcnJvcihcImlzIHVuZXhwZWN0ZWQsIGV4cGVjdGluZyBbXCIrYStcIl1cIix0aGlzLnBlZWsoKSl9LHVuYXJ5Rm46ZnVuY3Rpb24oYSxjKXtyZXR1cm4geShmdW5jdGlvbihkLGUpe3JldHVybiBhKGQsZSxjKX0se2NvbnN0YW50OmMuY29uc3RhbnR9KX0sdGVybmFyeUZuOmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4geShmdW5jdGlvbihlLFxuZyl7cmV0dXJuIGEoZSxnKT9jKGUsZyk6ZChlLGcpfSx7Y29uc3RhbnQ6YS5jb25zdGFudCYmYy5jb25zdGFudCYmZC5jb25zdGFudH0pfSxiaW5hcnlGbjpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIHkoZnVuY3Rpb24oZSxnKXtyZXR1cm4gYyhlLGcsYSxkKX0se2NvbnN0YW50OmEuY29uc3RhbnQmJmQuY29uc3RhbnR9KX0sc3RhdGVtZW50czpmdW5jdGlvbigpe2Zvcih2YXIgYT1bXTs7KWlmKDA8dGhpcy50b2tlbnMubGVuZ3RoJiYhdGhpcy5wZWVrKFwifVwiLFwiKVwiLFwiO1wiLFwiXVwiKSYmYS5wdXNoKHRoaXMuZmlsdGVyQ2hhaW4oKSksIXRoaXMuZXhwZWN0KFwiO1wiKSlyZXR1cm4gMT09PWEubGVuZ3RoP2FbMF06ZnVuY3Rpb24oYyxkKXtmb3IodmFyIGUsZz0wO2c8YS5sZW5ndGg7ZysrKXt2YXIgZj1hW2ddO2YmJihlPWYoYyxkKSl9cmV0dXJuIGV9fSxmaWx0ZXJDaGFpbjpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLmV4cHJlc3Npb24oKSxjOzspaWYoYz10aGlzLmV4cGVjdChcInxcIikpYT1cbnRoaXMuYmluYXJ5Rm4oYSxjLmZuLHRoaXMuZmlsdGVyKCkpO2Vsc2UgcmV0dXJuIGF9LGZpbHRlcjpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLmV4cGVjdCgpLGM9dGhpcy4kZmlsdGVyKGEudGV4dCksZD1bXTs7KWlmKGE9dGhpcy5leHBlY3QoXCI6XCIpKWQucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7ZWxzZXt2YXIgZT1mdW5jdGlvbihhLGUsaCl7aD1baF07Zm9yKHZhciBtPTA7bTxkLmxlbmd0aDttKyspaC5wdXNoKGRbbV0oYSxlKSk7cmV0dXJuIGMuYXBwbHkoYSxoKX07cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGV9fX0sZXhwcmVzc2lvbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmFzc2lnbm1lbnQoKX0sYXNzaWdubWVudDpmdW5jdGlvbigpe3ZhciBhPXRoaXMudGVybmFyeSgpLGMsZDtyZXR1cm4oZD10aGlzLmV4cGVjdChcIj1cIikpPyhhLmFzc2lnbnx8dGhpcy50aHJvd0Vycm9yKFwiaW1wbGllcyBhc3NpZ25tZW50IGJ1dCBbXCIrdGhpcy50ZXh0LnN1YnN0cmluZygwLGQuaW5kZXgpK1xuXCJdIGNhbiBub3QgYmUgYXNzaWduZWQgdG9cIixkKSxjPXRoaXMudGVybmFyeSgpLGZ1bmN0aW9uKGQsZyl7cmV0dXJuIGEuYXNzaWduKGQsYyhkLGcpLGcpfSk6YX0sdGVybmFyeTpmdW5jdGlvbigpe3ZhciBhPXRoaXMubG9naWNhbE9SKCksYyxkO2lmKHRoaXMuZXhwZWN0KFwiP1wiKSl7Yz10aGlzLnRlcm5hcnkoKTtpZihkPXRoaXMuZXhwZWN0KFwiOlwiKSlyZXR1cm4gdGhpcy50ZXJuYXJ5Rm4oYSxjLHRoaXMudGVybmFyeSgpKTt0aGlzLnRocm93RXJyb3IoXCJleHBlY3RlZCA6XCIsZCl9ZWxzZSByZXR1cm4gYX0sbG9naWNhbE9SOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMubG9naWNhbEFORCgpLGM7OylpZihjPXRoaXMuZXhwZWN0KFwifHxcIikpYT10aGlzLmJpbmFyeUZuKGEsYy5mbix0aGlzLmxvZ2ljYWxBTkQoKSk7ZWxzZSByZXR1cm4gYX0sbG9naWNhbEFORDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuZXF1YWxpdHkoKSxjO2lmKGM9dGhpcy5leHBlY3QoXCImJlwiKSlhPXRoaXMuYmluYXJ5Rm4oYSxcbmMuZm4sdGhpcy5sb2dpY2FsQU5EKCkpO3JldHVybiBhfSxlcXVhbGl0eTpmdW5jdGlvbigpe3ZhciBhPXRoaXMucmVsYXRpb25hbCgpLGM7aWYoYz10aGlzLmV4cGVjdChcIj09XCIsXCIhPVwiLFwiPT09XCIsXCIhPT1cIikpYT10aGlzLmJpbmFyeUZuKGEsYy5mbix0aGlzLmVxdWFsaXR5KCkpO3JldHVybiBhfSxyZWxhdGlvbmFsOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5hZGRpdGl2ZSgpLGM7aWYoYz10aGlzLmV4cGVjdChcIjxcIixcIj5cIixcIjw9XCIsXCI+PVwiKSlhPXRoaXMuYmluYXJ5Rm4oYSxjLmZuLHRoaXMucmVsYXRpb25hbCgpKTtyZXR1cm4gYX0sYWRkaXRpdmU6ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy5tdWx0aXBsaWNhdGl2ZSgpLGM7Yz10aGlzLmV4cGVjdChcIitcIixcIi1cIik7KWE9dGhpcy5iaW5hcnlGbihhLGMuZm4sdGhpcy5tdWx0aXBsaWNhdGl2ZSgpKTtyZXR1cm4gYX0sbXVsdGlwbGljYXRpdmU6ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy51bmFyeSgpLGM7Yz10aGlzLmV4cGVjdChcIipcIixcblwiL1wiLFwiJVwiKTspYT10aGlzLmJpbmFyeUZuKGEsYy5mbix0aGlzLnVuYXJ5KCkpO3JldHVybiBhfSx1bmFyeTpmdW5jdGlvbigpe3ZhciBhO3JldHVybiB0aGlzLmV4cGVjdChcIitcIik/dGhpcy5wcmltYXJ5KCk6KGE9dGhpcy5leHBlY3QoXCItXCIpKT90aGlzLmJpbmFyeUZuKFlhLlpFUk8sYS5mbix0aGlzLnVuYXJ5KCkpOihhPXRoaXMuZXhwZWN0KFwiIVwiKSk/dGhpcy51bmFyeUZuKGEuZm4sdGhpcy51bmFyeSgpKTp0aGlzLnByaW1hcnkoKX0sZmllbGRBY2Nlc3M6ZnVuY3Rpb24oYSl7dmFyIGM9dGhpcyxkPXRoaXMuZXhwZWN0KCkudGV4dCxlPXdjKGQsdGhpcy5vcHRpb25zLHRoaXMudGV4dCk7cmV0dXJuIHkoZnVuY3Rpb24oYyxkLGgpe3JldHVybiBlKGh8fGEoYyxkKSl9LHthc3NpZ246ZnVuY3Rpb24oZSxmLGgpe3JldHVybiBqYihhKGUsaCksZCxmLGMudGV4dCxjLm9wdGlvbnMpfX0pfSxvYmplY3RJbmRleDpmdW5jdGlvbihhKXt2YXIgYz10aGlzLGQ9dGhpcy5leHByZXNzaW9uKCk7XG50aGlzLmNvbnN1bWUoXCJdXCIpO3JldHVybiB5KGZ1bmN0aW9uKGUsZyl7dmFyIGY9YShlLGcpLGg9ZChlLGcpLG07aWYoIWYpcmV0dXJuIHM7KGY9WGEoZltoXSxjLnRleHQpKSYmKGYudGhlbiYmYy5vcHRpb25zLnVud3JhcFByb21pc2VzKSYmKG09ZixcIiQkdlwiaW4gZnx8KG0uJCR2PXMsbS50aGVuKGZ1bmN0aW9uKGEpe20uJCR2PWF9KSksZj1mLiQkdik7cmV0dXJuIGZ9LHthc3NpZ246ZnVuY3Rpb24oZSxnLGYpe3ZhciBoPWQoZSxmKTtyZXR1cm4gWGEoYShlLGYpLGMudGV4dClbaF09Z319KX0sZnVuY3Rpb25DYWxsOmZ1bmN0aW9uKGEsYyl7dmFyIGQ9W107aWYoXCIpXCIhPT10aGlzLnBlZWtUb2tlbigpLnRleHQpe2RvIGQucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7d2hpbGUodGhpcy5leHBlY3QoXCIsXCIpKX10aGlzLmNvbnN1bWUoXCIpXCIpO3ZhciBlPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKGcsZil7Zm9yKHZhciBoPVtdLG09Yz9jKGcsZik6ZyxrPTA7azxkLmxlbmd0aDtrKyspaC5wdXNoKGRba10oZyxcbmYpKTtrPWEoZyxmLG0pfHxFO1hhKG0sZS50ZXh0KTtYYShrLGUudGV4dCk7aD1rLmFwcGx5P2suYXBwbHkobSxoKTprKGhbMF0saFsxXSxoWzJdLGhbM10saFs0XSk7cmV0dXJuIFhhKGgsZS50ZXh0KX19LGFycmF5RGVjbGFyYXRpb246ZnVuY3Rpb24oKXt2YXIgYT1bXSxjPSEwO2lmKFwiXVwiIT09dGhpcy5wZWVrVG9rZW4oKS50ZXh0KXtkb3t2YXIgZD10aGlzLmV4cHJlc3Npb24oKTthLnB1c2goZCk7ZC5jb25zdGFudHx8KGM9ITEpfXdoaWxlKHRoaXMuZXhwZWN0KFwiLFwiKSl9dGhpcy5jb25zdW1lKFwiXVwiKTtyZXR1cm4geShmdW5jdGlvbihjLGQpe2Zvcih2YXIgZj1bXSxoPTA7aDxhLmxlbmd0aDtoKyspZi5wdXNoKGFbaF0oYyxkKSk7cmV0dXJuIGZ9LHtsaXRlcmFsOiEwLGNvbnN0YW50OmN9KX0sb2JqZWN0OmZ1bmN0aW9uKCl7dmFyIGE9W10sYz0hMDtpZihcIn1cIiE9PXRoaXMucGVla1Rva2VuKCkudGV4dCl7ZG97dmFyIGQ9dGhpcy5leHBlY3QoKSxkPWQuc3RyaW5nfHxkLnRleHQ7XG50aGlzLmNvbnN1bWUoXCI6XCIpO3ZhciBlPXRoaXMuZXhwcmVzc2lvbigpO2EucHVzaCh7a2V5OmQsdmFsdWU6ZX0pO2UuY29uc3RhbnR8fChjPSExKX13aGlsZSh0aGlzLmV4cGVjdChcIixcIikpfXRoaXMuY29uc3VtZShcIn1cIik7cmV0dXJuIHkoZnVuY3Rpb24oYyxkKXtmb3IodmFyIGU9e30sbT0wO208YS5sZW5ndGg7bSsrKXt2YXIgaz1hW21dO2Vbay5rZXldPWsudmFsdWUoYyxkKX1yZXR1cm4gZX0se2xpdGVyYWw6ITAsY29uc3RhbnQ6Y30pfX07dmFyIEliPXt9LHJhPXQoXCIkc2NlXCIpLGVhPXtIVE1MOlwiaHRtbFwiLENTUzpcImNzc1wiLFVSTDpcInVybFwiLFJFU09VUkNFX1VSTDpcInJlc291cmNlVXJsXCIsSlM6XCJqc1wifSxUPVIuY3JlYXRlRWxlbWVudChcImFcIiksemM9eGEoUC5sb2NhdGlvbi5ocmVmLCEwKTtBYy4kaW5qZWN0PVtcIiRwcm92aWRlXCJdO0JjLiRpbmplY3Q9W1wiJGxvY2FsZVwiXTtEYy4kaW5qZWN0PVtcIiRsb2NhbGVcIl07dmFyIEdjPVwiLlwiLFBkPXt5eXl5OlgoXCJGdWxsWWVhclwiLDQpLFxueXk6WChcIkZ1bGxZZWFyXCIsMiwwLCEwKSx5OlgoXCJGdWxsWWVhclwiLDEpLE1NTU06a2IoXCJNb250aFwiKSxNTU06a2IoXCJNb250aFwiLCEwKSxNTTpYKFwiTW9udGhcIiwyLDEpLE06WChcIk1vbnRoXCIsMSwxKSxkZDpYKFwiRGF0ZVwiLDIpLGQ6WChcIkRhdGVcIiwxKSxISDpYKFwiSG91cnNcIiwyKSxIOlgoXCJIb3Vyc1wiLDEpLGhoOlgoXCJIb3Vyc1wiLDIsLTEyKSxoOlgoXCJIb3Vyc1wiLDEsLTEyKSxtbTpYKFwiTWludXRlc1wiLDIpLG06WChcIk1pbnV0ZXNcIiwxKSxzczpYKFwiU2Vjb25kc1wiLDIpLHM6WChcIlNlY29uZHNcIiwxKSxzc3M6WChcIk1pbGxpc2Vjb25kc1wiLDMpLEVFRUU6a2IoXCJEYXlcIiksRUVFOmtiKFwiRGF5XCIsITApLGE6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gMTI+YS5nZXRIb3VycygpP2MuQU1QTVNbMF06Yy5BTVBNU1sxXX0sWjpmdW5jdGlvbihhKXthPS0xKmEuZ2V0VGltZXpvbmVPZmZzZXQoKTtyZXR1cm4gYT0oMDw9YT9cIitcIjpcIlwiKSsoS2IoTWF0aFswPGE/XCJmbG9vclwiOlwiY2VpbFwiXShhLzYwKSwyKStcbktiKE1hdGguYWJzKGElNjApLDIpKX19LE9kPS8oKD86W155TWRIaG1zYVpFJ10rKXwoPzonKD86W14nXXwnJykqJyl8KD86RSt8eSt8TSt8ZCt8SCt8aCt8bSt8cyt8YXxaKSkoLiopLyxOZD0vXlxcLT9cXGQrJC87Q2MuJGluamVjdD1bXCIkbG9jYWxlXCJdO3ZhciBMZD1ZKHgpLE1kPVkoSGEpO0VjLiRpbmplY3Q9W1wiJHBhcnNlXCJdO3ZhciBXZD1ZKHtyZXN0cmljdDpcIkVcIixjb21waWxlOmZ1bmN0aW9uKGEsYyl7OD49TiYmKGMuaHJlZnx8Yy5uYW1lfHxjLiRzZXQoXCJocmVmXCIsXCJcIiksYS5hcHBlbmQoUi5jcmVhdGVDb21tZW50KFwiSUUgZml4XCIpKSk7aWYoIWMuaHJlZiYmIWMueGxpbmtIcmVmJiYhYy5uYW1lKXJldHVybiBmdW5jdGlvbihhLGMpe3ZhciBnPVwiW29iamVjdCBTVkdBbmltYXRlZFN0cmluZ11cIj09PUxhLmNhbGwoYy5wcm9wKFwiaHJlZlwiKSk/XCJ4bGluazpocmVmXCI6XCJocmVmXCI7Yy5vbihcImNsaWNrXCIsZnVuY3Rpb24oYSl7Yy5hdHRyKGcpfHxhLnByZXZlbnREZWZhdWx0KCl9KX19fSksXG5NYj17fTtxKGZiLGZ1bmN0aW9uKGEsYyl7aWYoXCJtdWx0aXBsZVwiIT1hKXt2YXIgZD1sYShcIm5nLVwiK2MpO01iW2RdPWZ1bmN0aW9uKCl7cmV0dXJue3ByaW9yaXR5OjEwMCxsaW5rOmZ1bmN0aW9uKGEsZyxmKXthLiR3YXRjaChmW2RdLGZ1bmN0aW9uKGEpe2YuJHNldChjLCEhYSl9KX19fX19KTtxKFtcInNyY1wiLFwic3Jjc2V0XCIsXCJocmVmXCJdLGZ1bmN0aW9uKGEpe3ZhciBjPWxhKFwibmctXCIrYSk7TWJbY109ZnVuY3Rpb24oKXtyZXR1cm57cHJpb3JpdHk6OTksbGluazpmdW5jdGlvbihkLGUsZyl7Zy4kb2JzZXJ2ZShjLGZ1bmN0aW9uKGMpe2MmJihnLiRzZXQoYSxjKSxOJiZlLnByb3AoYSxnW2FdKSl9KX19fX0pO3ZhciBuYj17JGFkZENvbnRyb2w6RSwkcmVtb3ZlQ29udHJvbDpFLCRzZXRWYWxpZGl0eTpFLCRzZXREaXJ0eTpFLCRzZXRQcmlzdGluZTpFfTtIYy4kaW5qZWN0PVtcIiRlbGVtZW50XCIsXCIkYXR0cnNcIixcIiRzY29wZVwiXTt2YXIgSmM9ZnVuY3Rpb24oYSl7cmV0dXJuW1wiJHRpbWVvdXRcIixcbmZ1bmN0aW9uKGMpe3JldHVybntuYW1lOlwiZm9ybVwiLHJlc3RyaWN0OmE/XCJFQUNcIjpcIkVcIixjb250cm9sbGVyOkhjLGNvbXBpbGU6ZnVuY3Rpb24oKXtyZXR1cm57cHJlOmZ1bmN0aW9uKGEsZSxnLGYpe2lmKCFnLmFjdGlvbil7dmFyIGg9ZnVuY3Rpb24oYSl7YS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6YS5yZXR1cm5WYWx1ZT0hMX07SWMoZVswXSxcInN1Ym1pdFwiLGgpO2Uub24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7YyhmdW5jdGlvbigpe3piKGVbMF0sXCJzdWJtaXRcIixoKX0sMCwhMSl9KX12YXIgbT1lLnBhcmVudCgpLmNvbnRyb2xsZXIoXCJmb3JtXCIpLGs9Zy5uYW1lfHxnLm5nRm9ybTtrJiZqYihhLGssZixrKTtpZihtKWUub24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7bS4kcmVtb3ZlQ29udHJvbChmKTtrJiZqYihhLGsscyxrKTt5KGYsbmIpfSl9fX19fV19LFhkPUpjKCksWWQ9SmMoITApLFpkPS9eKGZ0cHxodHRwfGh0dHBzKTpcXC9cXC8oXFx3Kzp7MCwxfVxcdypAKT8oXFxTKykoOlswLTldKyk/KFxcL3xcXC8oW1xcdyMhOi4/Kz0mJUAhXFwtXFwvXSkpPyQvLFxuJGQ9L15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+Li1dK0BbYS16MC05LV0rKFxcLlthLXowLTktXSspKiQvaSxhZT0vXlxccyooXFwtfFxcKyk/KFxcZCt8KFxcZCooXFwuXFxkKikpKVxccyokLyxLYz17dGV4dDpwYixudW1iZXI6ZnVuY3Rpb24oYSxjLGQsZSxnLGYpe3BiKGEsYyxkLGUsZyxmKTtlLiRwYXJzZXJzLnB1c2goZnVuY3Rpb24oYSl7dmFyIGM9ZS4kaXNFbXB0eShhKTtpZihjfHxhZS50ZXN0KGEpKXJldHVybiBlLiRzZXRWYWxpZGl0eShcIm51bWJlclwiLCEwKSxcIlwiPT09YT9udWxsOmM/YTpwYXJzZUZsb2F0KGEpO2UuJHNldFZhbGlkaXR5KFwibnVtYmVyXCIsITEpO3JldHVybiBzfSk7ZS4kZm9ybWF0dGVycy5wdXNoKGZ1bmN0aW9uKGEpe3JldHVybiBlLiRpc0VtcHR5KGEpP1wiXCI6XCJcIithfSk7ZC5taW4mJihhPWZ1bmN0aW9uKGEpe3ZhciBjPXBhcnNlRmxvYXQoZC5taW4pO3JldHVybiBvYShlLFwibWluXCIsZS4kaXNFbXB0eShhKXx8YT49YyxhKX0sZS4kcGFyc2Vycy5wdXNoKGEpLGUuJGZvcm1hdHRlcnMucHVzaChhKSk7XG5kLm1heCYmKGE9ZnVuY3Rpb24oYSl7dmFyIGM9cGFyc2VGbG9hdChkLm1heCk7cmV0dXJuIG9hKGUsXCJtYXhcIixlLiRpc0VtcHR5KGEpfHxhPD1jLGEpfSxlLiRwYXJzZXJzLnB1c2goYSksZS4kZm9ybWF0dGVycy5wdXNoKGEpKTtlLiRmb3JtYXR0ZXJzLnB1c2goZnVuY3Rpb24oYSl7cmV0dXJuIG9hKGUsXCJudW1iZXJcIixlLiRpc0VtcHR5KGEpfHxyYihhKSxhKX0pfSx1cmw6ZnVuY3Rpb24oYSxjLGQsZSxnLGYpe3BiKGEsYyxkLGUsZyxmKTthPWZ1bmN0aW9uKGEpe3JldHVybiBvYShlLFwidXJsXCIsZS4kaXNFbXB0eShhKXx8WmQudGVzdChhKSxhKX07ZS4kZm9ybWF0dGVycy5wdXNoKGEpO2UuJHBhcnNlcnMucHVzaChhKX0sZW1haWw6ZnVuY3Rpb24oYSxjLGQsZSxnLGYpe3BiKGEsYyxkLGUsZyxmKTthPWZ1bmN0aW9uKGEpe3JldHVybiBvYShlLFwiZW1haWxcIixlLiRpc0VtcHR5KGEpfHwkZC50ZXN0KGEpLGEpfTtlLiRmb3JtYXR0ZXJzLnB1c2goYSk7ZS4kcGFyc2Vycy5wdXNoKGEpfSxcbnJhZGlvOmZ1bmN0aW9uKGEsYyxkLGUpe3UoZC5uYW1lKSYmYy5hdHRyKFwibmFtZVwiLFphKCkpO2Mub24oXCJjbGlja1wiLGZ1bmN0aW9uKCl7Y1swXS5jaGVja2VkJiZhLiRhcHBseShmdW5jdGlvbigpe2UuJHNldFZpZXdWYWx1ZShkLnZhbHVlKX0pfSk7ZS4kcmVuZGVyPWZ1bmN0aW9uKCl7Y1swXS5jaGVja2VkPWQudmFsdWU9PWUuJHZpZXdWYWx1ZX07ZC4kb2JzZXJ2ZShcInZhbHVlXCIsZS4kcmVuZGVyKX0sY2hlY2tib3g6ZnVuY3Rpb24oYSxjLGQsZSl7dmFyIGc9ZC5uZ1RydWVWYWx1ZSxmPWQubmdGYWxzZVZhbHVlO3coZyl8fChnPSEwKTt3KGYpfHwoZj0hMSk7Yy5vbihcImNsaWNrXCIsZnVuY3Rpb24oKXthLiRhcHBseShmdW5jdGlvbigpe2UuJHNldFZpZXdWYWx1ZShjWzBdLmNoZWNrZWQpfSl9KTtlLiRyZW5kZXI9ZnVuY3Rpb24oKXtjWzBdLmNoZWNrZWQ9ZS4kdmlld1ZhbHVlfTtlLiRpc0VtcHR5PWZ1bmN0aW9uKGEpe3JldHVybiBhIT09Z307ZS4kZm9ybWF0dGVycy5wdXNoKGZ1bmN0aW9uKGEpe3JldHVybiBhPT09XG5nfSk7ZS4kcGFyc2Vycy5wdXNoKGZ1bmN0aW9uKGEpe3JldHVybiBhP2c6Zn0pfSxoaWRkZW46RSxidXR0b246RSxzdWJtaXQ6RSxyZXNldDpFfSxMYz1bXCIkYnJvd3NlclwiLFwiJHNuaWZmZXJcIixmdW5jdGlvbihhLGMpe3JldHVybntyZXN0cmljdDpcIkVcIixyZXF1aXJlOlwiP25nTW9kZWxcIixsaW5rOmZ1bmN0aW9uKGQsZSxnLGYpe2YmJihLY1t4KGcudHlwZSldfHxLYy50ZXh0KShkLGUsZyxmLGMsYSl9fX1dLG1iPVwibmctdmFsaWRcIixsYj1cIm5nLWludmFsaWRcIixJYT1cIm5nLXByaXN0aW5lXCIsb2I9XCJuZy1kaXJ0eVwiLGJlPVtcIiRzY29wZVwiLFwiJGV4Y2VwdGlvbkhhbmRsZXJcIixcIiRhdHRyc1wiLFwiJGVsZW1lbnRcIixcIiRwYXJzZVwiLGZ1bmN0aW9uKGEsYyxkLGUsZyl7ZnVuY3Rpb24gZihhLGMpe2M9Yz9cIi1cIitjYihjLFwiLVwiKTpcIlwiO2UucmVtb3ZlQ2xhc3MoKGE/bGI6bWIpK2MpLmFkZENsYXNzKChhP21iOmxiKStjKX10aGlzLiRtb2RlbFZhbHVlPXRoaXMuJHZpZXdWYWx1ZT1OdW1iZXIuTmFOO1xudGhpcy4kcGFyc2Vycz1bXTt0aGlzLiRmb3JtYXR0ZXJzPVtdO3RoaXMuJHZpZXdDaGFuZ2VMaXN0ZW5lcnM9W107dGhpcy4kcHJpc3RpbmU9ITA7dGhpcy4kZGlydHk9ITE7dGhpcy4kdmFsaWQ9ITA7dGhpcy4kaW52YWxpZD0hMTt0aGlzLiRuYW1lPWQubmFtZTt2YXIgaD1nKGQubmdNb2RlbCksbT1oLmFzc2lnbjtpZighbSl0aHJvdyB0KFwibmdNb2RlbFwiKShcIm5vbmFzc2lnblwiLGQubmdNb2RlbCxmYShlKSk7dGhpcy4kcmVuZGVyPUU7dGhpcy4kaXNFbXB0eT1mdW5jdGlvbihhKXtyZXR1cm4gdShhKXx8XCJcIj09PWF8fG51bGw9PT1hfHxhIT09YX07dmFyIGs9ZS5pbmhlcml0ZWREYXRhKFwiJGZvcm1Db250cm9sbGVyXCIpfHxuYixsPTAsbj10aGlzLiRlcnJvcj17fTtlLmFkZENsYXNzKElhKTtmKCEwKTt0aGlzLiRzZXRWYWxpZGl0eT1mdW5jdGlvbihhLGMpe25bYV0hPT0hYyYmKGM/KG5bYV0mJmwtLSxsfHwoZighMCksdGhpcy4kdmFsaWQ9ITAsdGhpcy4kaW52YWxpZD0hMSkpOihmKCExKSxcbnRoaXMuJGludmFsaWQ9ITAsdGhpcy4kdmFsaWQ9ITEsbCsrKSxuW2FdPSFjLGYoYyxhKSxrLiRzZXRWYWxpZGl0eShhLGMsdGhpcykpfTt0aGlzLiRzZXRQcmlzdGluZT1mdW5jdGlvbigpe3RoaXMuJGRpcnR5PSExO3RoaXMuJHByaXN0aW5lPSEwO2UucmVtb3ZlQ2xhc3Mob2IpLmFkZENsYXNzKElhKX07dGhpcy4kc2V0Vmlld1ZhbHVlPWZ1bmN0aW9uKGQpe3RoaXMuJHZpZXdWYWx1ZT1kO3RoaXMuJHByaXN0aW5lJiYodGhpcy4kZGlydHk9ITAsdGhpcy4kcHJpc3RpbmU9ITEsZS5yZW1vdmVDbGFzcyhJYSkuYWRkQ2xhc3Mob2IpLGsuJHNldERpcnR5KCkpO3EodGhpcy4kcGFyc2VycyxmdW5jdGlvbihhKXtkPWEoZCl9KTt0aGlzLiRtb2RlbFZhbHVlIT09ZCYmKHRoaXMuJG1vZGVsVmFsdWU9ZCxtKGEsZCkscSh0aGlzLiR2aWV3Q2hhbmdlTGlzdGVuZXJzLGZ1bmN0aW9uKGEpe3RyeXthKCl9Y2F0Y2goZCl7YyhkKX19KSl9O3ZhciBwPXRoaXM7YS4kd2F0Y2goZnVuY3Rpb24oKXt2YXIgYz1cbmgoYSk7aWYocC4kbW9kZWxWYWx1ZSE9PWMpe3ZhciBkPXAuJGZvcm1hdHRlcnMsZT1kLmxlbmd0aDtmb3IocC4kbW9kZWxWYWx1ZT1jO2UtLTspYz1kW2VdKGMpO3AuJHZpZXdWYWx1ZSE9PWMmJihwLiR2aWV3VmFsdWU9YyxwLiRyZW5kZXIoKSl9cmV0dXJuIGN9KX1dLGNlPWZ1bmN0aW9uKCl7cmV0dXJue3JlcXVpcmU6W1wibmdNb2RlbFwiLFwiXj9mb3JtXCJdLGNvbnRyb2xsZXI6YmUsbGluazpmdW5jdGlvbihhLGMsZCxlKXt2YXIgZz1lWzBdLGY9ZVsxXXx8bmI7Zi4kYWRkQ29udHJvbChnKTthLiRvbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXtmLiRyZW1vdmVDb250cm9sKGcpfSl9fX0sZGU9WSh7cmVxdWlyZTpcIm5nTW9kZWxcIixsaW5rOmZ1bmN0aW9uKGEsYyxkLGUpe2UuJHZpZXdDaGFuZ2VMaXN0ZW5lcnMucHVzaChmdW5jdGlvbigpe2EuJGV2YWwoZC5uZ0NoYW5nZSl9KX19KSxNYz1mdW5jdGlvbigpe3JldHVybntyZXF1aXJlOlwiP25nTW9kZWxcIixsaW5rOmZ1bmN0aW9uKGEsYyxcbmQsZSl7aWYoZSl7ZC5yZXF1aXJlZD0hMDt2YXIgZz1mdW5jdGlvbihhKXtpZihkLnJlcXVpcmVkJiZlLiRpc0VtcHR5KGEpKWUuJHNldFZhbGlkaXR5KFwicmVxdWlyZWRcIiwhMSk7ZWxzZSByZXR1cm4gZS4kc2V0VmFsaWRpdHkoXCJyZXF1aXJlZFwiLCEwKSxhfTtlLiRmb3JtYXR0ZXJzLnB1c2goZyk7ZS4kcGFyc2Vycy51bnNoaWZ0KGcpO2QuJG9ic2VydmUoXCJyZXF1aXJlZFwiLGZ1bmN0aW9uKCl7ZyhlLiR2aWV3VmFsdWUpfSl9fX19LGVlPWZ1bmN0aW9uKCl7cmV0dXJue3JlcXVpcmU6XCJuZ01vZGVsXCIsbGluazpmdW5jdGlvbihhLGMsZCxlKXt2YXIgZz0oYT0vXFwvKC4qKVxcLy8uZXhlYyhkLm5nTGlzdCkpJiZSZWdFeHAoYVsxXSl8fGQubmdMaXN0fHxcIixcIjtlLiRwYXJzZXJzLnB1c2goZnVuY3Rpb24oYSl7aWYoIXUoYSkpe3ZhciBjPVtdO2EmJnEoYS5zcGxpdChnKSxmdW5jdGlvbihhKXthJiZjLnB1c2goWihhKSl9KTtyZXR1cm4gY319KTtlLiRmb3JtYXR0ZXJzLnB1c2goZnVuY3Rpb24oYSl7cmV0dXJuIEwoYSk/XG5hLmpvaW4oXCIsIFwiKTpzfSk7ZS4kaXNFbXB0eT1mdW5jdGlvbihhKXtyZXR1cm4hYXx8IWEubGVuZ3RofX19fSxmZT0vXih0cnVlfGZhbHNlfFxcZCspJC8sZ2U9ZnVuY3Rpb24oKXtyZXR1cm57cHJpb3JpdHk6MTAwLGNvbXBpbGU6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gZmUudGVzdChjLm5nVmFsdWUpP2Z1bmN0aW9uKGEsYyxnKXtnLiRzZXQoXCJ2YWx1ZVwiLGEuJGV2YWwoZy5uZ1ZhbHVlKSl9OmZ1bmN0aW9uKGEsYyxnKXthLiR3YXRjaChnLm5nVmFsdWUsZnVuY3Rpb24oYSl7Zy4kc2V0KFwidmFsdWVcIixhKX0pfX19fSxoZT1zYShmdW5jdGlvbihhLGMsZCl7Yy5hZGRDbGFzcyhcIm5nLWJpbmRpbmdcIikuZGF0YShcIiRiaW5kaW5nXCIsZC5uZ0JpbmQpO2EuJHdhdGNoKGQubmdCaW5kLGZ1bmN0aW9uKGEpe2MudGV4dChhPT1zP1wiXCI6YSl9KX0pLGllPVtcIiRpbnRlcnBvbGF0ZVwiLGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihjLGQsZSl7Yz1hKGQuYXR0cihlLiRhdHRyLm5nQmluZFRlbXBsYXRlKSk7XG5kLmFkZENsYXNzKFwibmctYmluZGluZ1wiKS5kYXRhKFwiJGJpbmRpbmdcIixjKTtlLiRvYnNlcnZlKFwibmdCaW5kVGVtcGxhdGVcIixmdW5jdGlvbihhKXtkLnRleHQoYSl9KX19XSxqZT1bXCIkc2NlXCIsXCIkcGFyc2VcIixmdW5jdGlvbihhLGMpe3JldHVybiBmdW5jdGlvbihkLGUsZyl7ZS5hZGRDbGFzcyhcIm5nLWJpbmRpbmdcIikuZGF0YShcIiRiaW5kaW5nXCIsZy5uZ0JpbmRIdG1sKTt2YXIgZj1jKGcubmdCaW5kSHRtbCk7ZC4kd2F0Y2goZnVuY3Rpb24oKXtyZXR1cm4oZihkKXx8XCJcIikudG9TdHJpbmcoKX0sZnVuY3Rpb24oYyl7ZS5odG1sKGEuZ2V0VHJ1c3RlZEh0bWwoZihkKSl8fFwiXCIpfSl9fV0sa2U9TGIoXCJcIiwhMCksbGU9TGIoXCJPZGRcIiwwKSxtZT1MYihcIkV2ZW5cIiwxKSxuZT1zYSh7Y29tcGlsZTpmdW5jdGlvbihhLGMpe2MuJHNldChcIm5nQ2xvYWtcIixzKTthLnJlbW92ZUNsYXNzKFwibmctY2xvYWtcIil9fSksb2U9W2Z1bmN0aW9uKCl7cmV0dXJue3Njb3BlOiEwLGNvbnRyb2xsZXI6XCJAXCIsXG5wcmlvcml0eTo1MDB9fV0sTmM9e307cShcImNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZW1vdmUgbW91c2VlbnRlciBtb3VzZWxlYXZlIGtleWRvd24ga2V5dXAga2V5cHJlc3Mgc3VibWl0IGZvY3VzIGJsdXIgY29weSBjdXQgcGFzdGVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSl7dmFyIGM9bGEoXCJuZy1cIithKTtOY1tjXT1bXCIkcGFyc2VcIixmdW5jdGlvbihkKXtyZXR1cm57Y29tcGlsZTpmdW5jdGlvbihlLGcpe3ZhciBmPWQoZ1tjXSk7cmV0dXJuIGZ1bmN0aW9uKGMsZCxlKXtkLm9uKHgoYSksZnVuY3Rpb24oYSl7Yy4kYXBwbHkoZnVuY3Rpb24oKXtmKGMseyRldmVudDphfSl9KX0pfX19fV19KTt2YXIgcGU9W1wiJGFuaW1hdGVcIixmdW5jdGlvbihhKXtyZXR1cm57dHJhbnNjbHVkZTpcImVsZW1lbnRcIixwcmlvcml0eTo2MDAsdGVybWluYWw6ITAscmVzdHJpY3Q6XCJBXCIsJCR0bGI6ITAsbGluazpmdW5jdGlvbihjLGQsZSxnLGYpe3ZhciBoLFxubTtjLiR3YXRjaChlLm5nSWYsZnVuY3Rpb24oZyl7T2EoZyk/bXx8KG09Yy4kbmV3KCksZihtLGZ1bmN0aW9uKGMpe2NbYy5sZW5ndGgrK109Ui5jcmVhdGVDb21tZW50KFwiIGVuZCBuZ0lmOiBcIitlLm5nSWYrXCIgXCIpO2g9e2Nsb25lOmN9O2EuZW50ZXIoYyxkLnBhcmVudCgpLGQpfSkpOihtJiYobS4kZGVzdHJveSgpLG09bnVsbCksaCYmKGEubGVhdmUodWIoaC5jbG9uZSkpLGg9bnVsbCkpfSl9fX1dLHFlPVtcIiRodHRwXCIsXCIkdGVtcGxhdGVDYWNoZVwiLFwiJGFuY2hvclNjcm9sbFwiLFwiJGFuaW1hdGVcIixcIiRzY2VcIixmdW5jdGlvbihhLGMsZCxlLGcpe3JldHVybntyZXN0cmljdDpcIkVDQVwiLHByaW9yaXR5OjQwMCx0ZXJtaW5hbDohMCx0cmFuc2NsdWRlOlwiZWxlbWVudFwiLGNvbnRyb2xsZXI6QmEubm9vcCxjb21waWxlOmZ1bmN0aW9uKGYsaCl7dmFyIG09aC5uZ0luY2x1ZGV8fGguc3JjLGs9aC5vbmxvYWR8fFwiXCIsbD1oLmF1dG9zY3JvbGw7cmV0dXJuIGZ1bmN0aW9uKGYsaCxxLHMsQSl7dmFyIHQ9XG4wLHYseixLPWZ1bmN0aW9uKCl7diYmKHYuJGRlc3Ryb3koKSx2PW51bGwpO3omJihlLmxlYXZlKHopLHo9bnVsbCl9O2YuJHdhdGNoKGcucGFyc2VBc1Jlc291cmNlVXJsKG0pLGZ1bmN0aW9uKGcpe3ZhciBtPWZ1bmN0aW9uKCl7IUQobCl8fGwmJiFmLiRldmFsKGwpfHxkKCl9LHE9Kyt0O2c/KGEuZ2V0KGcse2NhY2hlOmN9KS5zdWNjZXNzKGZ1bmN0aW9uKGEpe2lmKHE9PT10KXt2YXIgYz1mLiRuZXcoKTtzLnRlbXBsYXRlPWE7YT1BKGMsZnVuY3Rpb24oYSl7SygpO2UuZW50ZXIoYSxudWxsLGgsbSl9KTt2PWM7ej1hO3YuJGVtaXQoXCIkaW5jbHVkZUNvbnRlbnRMb2FkZWRcIik7Zi4kZXZhbChrKX19KS5lcnJvcihmdW5jdGlvbigpe3E9PT10JiZLKCl9KSxmLiRlbWl0KFwiJGluY2x1ZGVDb250ZW50UmVxdWVzdGVkXCIpKTooSygpLHMudGVtcGxhdGU9bnVsbCl9KX19fX1dLHJlPVtcIiRjb21waWxlXCIsZnVuY3Rpb24oYSl7cmV0dXJue3Jlc3RyaWN0OlwiRUNBXCIscHJpb3JpdHk6LTQwMCxcbnJlcXVpcmU6XCJuZ0luY2x1ZGVcIixsaW5rOmZ1bmN0aW9uKGMsZCxlLGcpe2QuaHRtbChnLnRlbXBsYXRlKTthKGQuY29udGVudHMoKSkoYyl9fX1dLHNlPXNhKHtwcmlvcml0eTo0NTAsY29tcGlsZTpmdW5jdGlvbigpe3JldHVybntwcmU6ZnVuY3Rpb24oYSxjLGQpe2EuJGV2YWwoZC5uZ0luaXQpfX19fSksdGU9c2Eoe3Rlcm1pbmFsOiEwLHByaW9yaXR5OjFFM30pLHVlPVtcIiRsb2NhbGVcIixcIiRpbnRlcnBvbGF0ZVwiLGZ1bmN0aW9uKGEsYyl7dmFyIGQ9L3t9L2c7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixsaW5rOmZ1bmN0aW9uKGUsZyxmKXt2YXIgaD1mLmNvdW50LG09Zi4kYXR0ci53aGVuJiZnLmF0dHIoZi4kYXR0ci53aGVuKSxrPWYub2Zmc2V0fHwwLGw9ZS4kZXZhbChtKXx8e30sbj17fSxwPWMuc3RhcnRTeW1ib2woKSxyPWMuZW5kU3ltYm9sKCkscz0vXndoZW4oTWludXMpPyguKykkLztxKGYsZnVuY3Rpb24oYSxjKXtzLnRlc3QoYykmJihsW3goYy5yZXBsYWNlKFwid2hlblwiLFwiXCIpLnJlcGxhY2UoXCJNaW51c1wiLFxuXCItXCIpKV09Zy5hdHRyKGYuJGF0dHJbY10pKX0pO3EobCxmdW5jdGlvbihhLGUpe25bZV09YyhhLnJlcGxhY2UoZCxwK2grXCItXCIraytyKSl9KTtlLiR3YXRjaChmdW5jdGlvbigpe3ZhciBjPXBhcnNlRmxvYXQoZS4kZXZhbChoKSk7aWYoaXNOYU4oYykpcmV0dXJuXCJcIjtjIGluIGx8fChjPWEucGx1cmFsQ2F0KGMtaykpO3JldHVybiBuW2NdKGUsZywhMCl9LGZ1bmN0aW9uKGEpe2cudGV4dChhKX0pfX19XSx2ZT1bXCIkcGFyc2VcIixcIiRhbmltYXRlXCIsZnVuY3Rpb24oYSxjKXt2YXIgZD10KFwibmdSZXBlYXRcIik7cmV0dXJue3RyYW5zY2x1ZGU6XCJlbGVtZW50XCIscHJpb3JpdHk6MUUzLHRlcm1pbmFsOiEwLCQkdGxiOiEwLGxpbms6ZnVuY3Rpb24oZSxnLGYsaCxtKXt2YXIgaz1mLm5nUmVwZWF0LGw9ay5tYXRjaCgvXlxccyooW1xcc1xcU10rPylcXHMraW5cXHMrKFtcXHNcXFNdKz8pKD86XFxzK3RyYWNrXFxzK2J5XFxzKyhbXFxzXFxTXSs/KSk/XFxzKiQvKSxuLHAscixzLEEsdCx2PXskaWQ6RWF9O2lmKCFsKXRocm93IGQoXCJpZXhwXCIsXG5rKTtmPWxbMV07aD1sWzJdOyhsPWxbM10pPyhuPWEobCkscD1mdW5jdGlvbihhLGMsZCl7dCYmKHZbdF09YSk7dltBXT1jO3YuJGluZGV4PWQ7cmV0dXJuIG4oZSx2KX0pOihyPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIEVhKGMpfSxzPWZ1bmN0aW9uKGEpe3JldHVybiBhfSk7bD1mLm1hdGNoKC9eKD86KFtcXCRcXHddKyl8XFwoKFtcXCRcXHddKylcXHMqLFxccyooW1xcJFxcd10rKVxcKSkkLyk7aWYoIWwpdGhyb3cgZChcImlpZGV4cFwiLGYpO0E9bFszXXx8bFsxXTt0PWxbMl07dmFyIEQ9e307ZS4kd2F0Y2hDb2xsZWN0aW9uKGgsZnVuY3Rpb24oYSl7dmFyIGYsaCxsPWdbMF0sbix2PXt9LHksQix3LHUsUyxFLHg9W107aWYocWIoYSkpUz1hLG49cHx8cjtlbHNle249cHx8cztTPVtdO2Zvcih3IGluIGEpYS5oYXNPd25Qcm9wZXJ0eSh3KSYmXCIkXCIhPXcuY2hhckF0KDApJiZTLnB1c2godyk7Uy5zb3J0KCl9eT1TLmxlbmd0aDtoPXgubGVuZ3RoPVMubGVuZ3RoO2ZvcihmPTA7ZjxoO2YrKylpZih3PWE9PT1cblM/ZjpTW2ZdLHU9YVt3XSx1PW4odyx1LGYpLHdhKHUsXCJgdHJhY2sgYnlgIGlkXCIpLEQuaGFzT3duUHJvcGVydHkodSkpRT1EW3VdLGRlbGV0ZSBEW3VdLHZbdV09RSx4W2ZdPUU7ZWxzZXtpZih2Lmhhc093blByb3BlcnR5KHUpKXRocm93IHEoeCxmdW5jdGlvbihhKXthJiZhLnNjb3BlJiYoRFthLmlkXT1hKX0pLGQoXCJkdXBlc1wiLGssdSk7eFtmXT17aWQ6dX07dlt1XT0hMX1mb3IodyBpbiBEKUQuaGFzT3duUHJvcGVydHkodykmJihFPURbd10sZj11YihFLmNsb25lKSxjLmxlYXZlKGYpLHEoZixmdW5jdGlvbihhKXthLiQkTkdfUkVNT1ZFRD0hMH0pLEUuc2NvcGUuJGRlc3Ryb3koKSk7Zj0wO2ZvcihoPVMubGVuZ3RoO2Y8aDtmKyspe3c9YT09PVM/ZjpTW2ZdO3U9YVt3XTtFPXhbZl07eFtmLTFdJiYobD14W2YtMV0uY2xvbmVbeFtmLTFdLmNsb25lLmxlbmd0aC0xXSk7aWYoRS5zY29wZSl7Qj1FLnNjb3BlO249bDtkbyBuPW4ubmV4dFNpYmxpbmc7d2hpbGUobiYmbi4kJE5HX1JFTU9WRUQpO1xuRS5jbG9uZVswXSE9biYmYy5tb3ZlKHViKEUuY2xvbmUpLG51bGwseihsKSk7bD1FLmNsb25lW0UuY2xvbmUubGVuZ3RoLTFdfWVsc2UgQj1lLiRuZXcoKTtCW0FdPXU7dCYmKEJbdF09dyk7Qi4kaW5kZXg9ZjtCLiRmaXJzdD0wPT09ZjtCLiRsYXN0PWY9PT15LTE7Qi4kbWlkZGxlPSEoQi4kZmlyc3R8fEIuJGxhc3QpO0IuJG9kZD0hKEIuJGV2ZW49MD09PShmJjEpKTtFLnNjb3BlfHxtKEIsZnVuY3Rpb24oYSl7YVthLmxlbmd0aCsrXT1SLmNyZWF0ZUNvbW1lbnQoXCIgZW5kIG5nUmVwZWF0OiBcIitrK1wiIFwiKTtjLmVudGVyKGEsbnVsbCx6KGwpKTtsPWE7RS5zY29wZT1CO0UuY2xvbmU9YTt2W0UuaWRdPUV9KX1EPXZ9KX19fV0sd2U9W1wiJGFuaW1hdGVcIixmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYyxkLGUpe2MuJHdhdGNoKGUubmdTaG93LGZ1bmN0aW9uKGMpe2FbT2EoYyk/XCJyZW1vdmVDbGFzc1wiOlwiYWRkQ2xhc3NcIl0oZCxcIm5nLWhpZGVcIil9KX19XSx4ZT1bXCIkYW5pbWF0ZVwiLFxuZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGMsZCxlKXtjLiR3YXRjaChlLm5nSGlkZSxmdW5jdGlvbihjKXthW09hKGMpP1wiYWRkQ2xhc3NcIjpcInJlbW92ZUNsYXNzXCJdKGQsXCJuZy1oaWRlXCIpfSl9fV0seWU9c2EoZnVuY3Rpb24oYSxjLGQpe2EuJHdhdGNoKGQubmdTdHlsZSxmdW5jdGlvbihhLGQpe2QmJmEhPT1kJiZxKGQsZnVuY3Rpb24oYSxkKXtjLmNzcyhkLFwiXCIpfSk7YSYmYy5jc3MoYSl9LCEwKX0pLHplPVtcIiRhbmltYXRlXCIsZnVuY3Rpb24oYSl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixyZXF1aXJlOlwibmdTd2l0Y2hcIixjb250cm9sbGVyOltcIiRzY29wZVwiLGZ1bmN0aW9uKCl7dGhpcy5jYXNlcz17fX1dLGxpbms6ZnVuY3Rpb24oYyxkLGUsZyl7dmFyIGYsaCxtPVtdO2MuJHdhdGNoKGUubmdTd2l0Y2h8fGUub24sZnVuY3Rpb24oZCl7Zm9yKHZhciBsPTAsbj1tLmxlbmd0aDtsPG47bCsrKW1bbF0uJGRlc3Ryb3koKSxhLmxlYXZlKGhbbF0pO2g9W107bT1bXTtpZihmPWcuY2FzZXNbXCIhXCIrXG5kXXx8Zy5jYXNlc1tcIj9cIl0pYy4kZXZhbChlLmNoYW5nZSkscShmLGZ1bmN0aW9uKGQpe3ZhciBlPWMuJG5ldygpO20ucHVzaChlKTtkLnRyYW5zY2x1ZGUoZSxmdW5jdGlvbihjKXt2YXIgZT1kLmVsZW1lbnQ7aC5wdXNoKGMpO2EuZW50ZXIoYyxlLnBhcmVudCgpLGUpfSl9KX0pfX19XSxBZT1zYSh7dHJhbnNjbHVkZTpcImVsZW1lbnRcIixwcmlvcml0eTo4MDAscmVxdWlyZTpcIl5uZ1N3aXRjaFwiLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSxnKXtlLmNhc2VzW1wiIVwiK2QubmdTd2l0Y2hXaGVuXT1lLmNhc2VzW1wiIVwiK2QubmdTd2l0Y2hXaGVuXXx8W107ZS5jYXNlc1tcIiFcIitkLm5nU3dpdGNoV2hlbl0ucHVzaCh7dHJhbnNjbHVkZTpnLGVsZW1lbnQ6Y30pfX0pLEJlPXNhKHt0cmFuc2NsdWRlOlwiZWxlbWVudFwiLHByaW9yaXR5OjgwMCxyZXF1aXJlOlwiXm5nU3dpdGNoXCIsbGluazpmdW5jdGlvbihhLGMsZCxlLGcpe2UuY2FzZXNbXCI/XCJdPWUuY2FzZXNbXCI/XCJdfHxbXTtlLmNhc2VzW1wiP1wiXS5wdXNoKHt0cmFuc2NsdWRlOmcsXG5lbGVtZW50OmN9KX19KSxDZT1zYSh7Y29udHJvbGxlcjpbXCIkZWxlbWVudFwiLFwiJHRyYW5zY2x1ZGVcIixmdW5jdGlvbihhLGMpe2lmKCFjKXRocm93IHQoXCJuZ1RyYW5zY2x1ZGVcIikoXCJvcnBoYW5cIixmYShhKSk7dGhpcy4kdHJhbnNjbHVkZT1jfV0sbGluazpmdW5jdGlvbihhLGMsZCxlKXtlLiR0cmFuc2NsdWRlKGZ1bmN0aW9uKGEpe2MuZW1wdHkoKTtjLmFwcGVuZChhKX0pfX0pLERlPVtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7cmV0dXJue3Jlc3RyaWN0OlwiRVwiLHRlcm1pbmFsOiEwLGNvbXBpbGU6ZnVuY3Rpb24oYyxkKXtcInRleHQvbmctdGVtcGxhdGVcIj09ZC50eXBlJiZhLnB1dChkLmlkLGNbMF0udGV4dCl9fX1dLEVlPXQoXCJuZ09wdGlvbnNcIiksRmU9WSh7dGVybWluYWw6ITB9KSxHZT1bXCIkY29tcGlsZVwiLFwiJHBhcnNlXCIsZnVuY3Rpb24oYSxjKXt2YXIgZD0vXlxccyooW1xcc1xcU10rPykoPzpcXHMrYXNcXHMrKFtcXHNcXFNdKz8pKT8oPzpcXHMrZ3JvdXBcXHMrYnlcXHMrKFtcXHNcXFNdKz8pKT9cXHMrZm9yXFxzKyg/OihbXFwkXFx3XVtcXCRcXHddKil8KD86XFwoXFxzKihbXFwkXFx3XVtcXCRcXHddKilcXHMqLFxccyooW1xcJFxcd11bXFwkXFx3XSopXFxzKlxcKSkpXFxzK2luXFxzKyhbXFxzXFxTXSs/KSg/Olxccyt0cmFja1xccytieVxccysoW1xcc1xcU10rPykpPyQvLFxuZT17JHNldFZpZXdWYWx1ZTpFfTtyZXR1cm57cmVzdHJpY3Q6XCJFXCIscmVxdWlyZTpbXCJzZWxlY3RcIixcIj9uZ01vZGVsXCJdLGNvbnRyb2xsZXI6W1wiJGVsZW1lbnRcIixcIiRzY29wZVwiLFwiJGF0dHJzXCIsZnVuY3Rpb24oYSxjLGQpe3ZhciBtPXRoaXMsaz17fSxsPWUsbjttLmRhdGFib3VuZD1kLm5nTW9kZWw7bS5pbml0PWZ1bmN0aW9uKGEsYyxkKXtsPWE7bj1kfTttLmFkZE9wdGlvbj1mdW5jdGlvbihjKXt3YShjLCdcIm9wdGlvbiB2YWx1ZVwiJyk7a1tjXT0hMDtsLiR2aWV3VmFsdWU9PWMmJihhLnZhbChjKSxuLnBhcmVudCgpJiZuLnJlbW92ZSgpKX07bS5yZW1vdmVPcHRpb249ZnVuY3Rpb24oYSl7dGhpcy5oYXNPcHRpb24oYSkmJihkZWxldGUga1thXSxsLiR2aWV3VmFsdWU9PWEmJnRoaXMucmVuZGVyVW5rbm93bk9wdGlvbihhKSl9O20ucmVuZGVyVW5rbm93bk9wdGlvbj1mdW5jdGlvbihjKXtjPVwiPyBcIitFYShjKStcIiA/XCI7bi52YWwoYyk7YS5wcmVwZW5kKG4pO2EudmFsKGMpO24ucHJvcChcInNlbGVjdGVkXCIsXG4hMCl9O20uaGFzT3B0aW9uPWZ1bmN0aW9uKGEpe3JldHVybiBrLmhhc093blByb3BlcnR5KGEpfTtjLiRvbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXttLnJlbmRlclVua25vd25PcHRpb249RX0pfV0sbGluazpmdW5jdGlvbihlLGYsaCxtKXtmdW5jdGlvbiBrKGEsYyxkLGUpe2QuJHJlbmRlcj1mdW5jdGlvbigpe3ZhciBhPWQuJHZpZXdWYWx1ZTtlLmhhc09wdGlvbihhKT8oeS5wYXJlbnQoKSYmeS5yZW1vdmUoKSxjLnZhbChhKSxcIlwiPT09YSYmdy5wcm9wKFwic2VsZWN0ZWRcIiwhMCkpOnUoYSkmJnc/Yy52YWwoXCJcIik6ZS5yZW5kZXJVbmtub3duT3B0aW9uKGEpfTtjLm9uKFwiY2hhbmdlXCIsZnVuY3Rpb24oKXthLiRhcHBseShmdW5jdGlvbigpe3kucGFyZW50KCkmJnkucmVtb3ZlKCk7ZC4kc2V0Vmlld1ZhbHVlKGMudmFsKCkpfSl9KX1mdW5jdGlvbiBsKGEsYyxkKXt2YXIgZTtkLiRyZW5kZXI9ZnVuY3Rpb24oKXt2YXIgYT1uZXcgU2EoZC4kdmlld1ZhbHVlKTtxKGMuZmluZChcIm9wdGlvblwiKSxcbmZ1bmN0aW9uKGMpe2Muc2VsZWN0ZWQ9RChhLmdldChjLnZhbHVlKSl9KX07YS4kd2F0Y2goZnVuY3Rpb24oKXt0YShlLGQuJHZpZXdWYWx1ZSl8fChlPSQoZC4kdmlld1ZhbHVlKSxkLiRyZW5kZXIoKSl9KTtjLm9uKFwiY2hhbmdlXCIsZnVuY3Rpb24oKXthLiRhcHBseShmdW5jdGlvbigpe3ZhciBhPVtdO3EoYy5maW5kKFwib3B0aW9uXCIpLGZ1bmN0aW9uKGMpe2Muc2VsZWN0ZWQmJmEucHVzaChjLnZhbHVlKX0pO2QuJHNldFZpZXdWYWx1ZShhKX0pfSl9ZnVuY3Rpb24gbihlLGYsZyl7ZnVuY3Rpb24gaCgpe3ZhciBhPXtcIlwiOltdfSxjPVtcIlwiXSxkLGsscyx0LHU7dD1nLiRtb2RlbFZhbHVlO3U9eihlKXx8W107dmFyIEM9bj9OYih1KTp1LEYsSix4O0o9e307cz0hMTt2YXIgQixIO2lmKHIpaWYodyYmTCh0KSlmb3Iocz1uZXcgU2EoW10pLHg9MDt4PHQubGVuZ3RoO3grKylKW21dPXRbeF0scy5wdXQodyhlLEopLHRbeF0pO2Vsc2Ugcz1uZXcgU2EodCk7Zm9yKHg9MDtGPUMubGVuZ3RoLFxueDxGO3grKyl7az14O2lmKG4pe2s9Q1t4XTtpZihcIiRcIj09PWsuY2hhckF0KDApKWNvbnRpbnVlO0pbbl09a31KW21dPXVba107ZD1wKGUsSil8fFwiXCI7KGs9YVtkXSl8fChrPWFbZF09W10sYy5wdXNoKGQpKTtyP2Q9RChzLnJlbW92ZSh3P3coZSxKKTpxKGUsSikpKToodz8oZD17fSxkW21dPXQsZD13KGUsZCk9PT13KGUsSikpOmQ9dD09PXEoZSxKKSxzPXN8fGQpO0I9bChlLEopO0I9RChCKT9COlwiXCI7ay5wdXNoKHtpZDp3P3coZSxKKTpuP0NbeF06eCxsYWJlbDpCLHNlbGVjdGVkOmR9KX1yfHwoQXx8bnVsbD09PXQ/YVtcIlwiXS51bnNoaWZ0KHtpZDpcIlwiLGxhYmVsOlwiXCIsc2VsZWN0ZWQ6IXN9KTpzfHxhW1wiXCJdLnVuc2hpZnQoe2lkOlwiP1wiLGxhYmVsOlwiXCIsc2VsZWN0ZWQ6ITB9KSk7Sj0wO2ZvcihDPWMubGVuZ3RoO0o8QztKKyspe2Q9Y1tKXTtrPWFbZF07eS5sZW5ndGg8PUo/KHQ9e2VsZW1lbnQ6RS5jbG9uZSgpLmF0dHIoXCJsYWJlbFwiLGQpLGxhYmVsOmsubGFiZWx9LHU9W3RdLHkucHVzaCh1KSxcbmYuYXBwZW5kKHQuZWxlbWVudCkpOih1PXlbSl0sdD11WzBdLHQubGFiZWwhPWQmJnQuZWxlbWVudC5hdHRyKFwibGFiZWxcIix0LmxhYmVsPWQpKTtCPW51bGw7eD0wO2ZvcihGPWsubGVuZ3RoO3g8Rjt4Kyspcz1rW3hdLChkPXVbeCsxXSk/KEI9ZC5lbGVtZW50LGQubGFiZWwhPT1zLmxhYmVsJiZCLnRleHQoZC5sYWJlbD1zLmxhYmVsKSxkLmlkIT09cy5pZCYmQi52YWwoZC5pZD1zLmlkKSxCWzBdLnNlbGVjdGVkIT09cy5zZWxlY3RlZCYmQi5wcm9wKFwic2VsZWN0ZWRcIixkLnNlbGVjdGVkPXMuc2VsZWN0ZWQpKTooXCJcIj09PXMuaWQmJkE/SD1BOihIPXYuY2xvbmUoKSkudmFsKHMuaWQpLmF0dHIoXCJzZWxlY3RlZFwiLHMuc2VsZWN0ZWQpLnRleHQocy5sYWJlbCksdS5wdXNoKHtlbGVtZW50OkgsbGFiZWw6cy5sYWJlbCxpZDpzLmlkLHNlbGVjdGVkOnMuc2VsZWN0ZWR9KSxCP0IuYWZ0ZXIoSCk6dC5lbGVtZW50LmFwcGVuZChIKSxCPUgpO2Zvcih4Kys7dS5sZW5ndGg+eDspdS5wb3AoKS5lbGVtZW50LnJlbW92ZSgpfWZvcig7eS5sZW5ndGg+XG5KOyl5LnBvcCgpWzBdLmVsZW1lbnQucmVtb3ZlKCl9dmFyIGs7aWYoIShrPXQubWF0Y2goZCkpKXRocm93IEVlKFwiaWV4cFwiLHQsZmEoZikpO3ZhciBsPWMoa1syXXx8a1sxXSksbT1rWzRdfHxrWzZdLG49a1s1XSxwPWMoa1szXXx8XCJcIikscT1jKGtbMl0/a1sxXTptKSx6PWMoa1s3XSksdz1rWzhdP2Moa1s4XSk6bnVsbCx5PVtbe2VsZW1lbnQ6ZixsYWJlbDpcIlwifV1dO0EmJihhKEEpKGUpLEEucmVtb3ZlQ2xhc3MoXCJuZy1zY29wZVwiKSxBLnJlbW92ZSgpKTtmLmVtcHR5KCk7Zi5vbihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7ZS4kYXBwbHkoZnVuY3Rpb24oKXt2YXIgYSxjPXooZSl8fFtdLGQ9e30saCxrLGwscCx0LHYsdTtpZihyKWZvcihrPVtdLHA9MCx2PXkubGVuZ3RoO3A8djtwKyspZm9yKGE9eVtwXSxsPTEsdD1hLmxlbmd0aDtsPHQ7bCsrKXtpZigoaD1hW2xdLmVsZW1lbnQpWzBdLnNlbGVjdGVkKXtoPWgudmFsKCk7biYmKGRbbl09aCk7aWYodylmb3IodT0wO3U8Yy5sZW5ndGgmJlxuKGRbbV09Y1t1XSx3KGUsZCkhPWgpO3UrKyk7ZWxzZSBkW21dPWNbaF07ay5wdXNoKHEoZSxkKSl9fWVsc2UgaWYoaD1mLnZhbCgpLFwiP1wiPT1oKWs9cztlbHNlIGlmKFwiXCI9PT1oKWs9bnVsbDtlbHNlIGlmKHcpZm9yKHU9MDt1PGMubGVuZ3RoO3UrKyl7aWYoZFttXT1jW3VdLHcoZSxkKT09aCl7az1xKGUsZCk7YnJlYWt9fWVsc2UgZFttXT1jW2hdLG4mJihkW25dPWgpLGs9cShlLGQpO2cuJHNldFZpZXdWYWx1ZShrKX0pfSk7Zy4kcmVuZGVyPWg7ZS4kd2F0Y2goaCl9aWYobVsxXSl7dmFyIHA9bVswXTttPW1bMV07dmFyIHI9aC5tdWx0aXBsZSx0PWgubmdPcHRpb25zLEE9ITEsdyx2PXooUi5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKSxFPXooUi5jcmVhdGVFbGVtZW50KFwib3B0Z3JvdXBcIikpLHk9di5jbG9uZSgpO2g9MDtmb3IodmFyIEM9Zi5jaGlsZHJlbigpLHg9Qy5sZW5ndGg7aDx4O2grKylpZihcIlwiPT09Q1toXS52YWx1ZSl7dz1BPUMuZXEoaCk7YnJlYWt9cC5pbml0KG0sQSxcbnkpO3ImJihtLiRpc0VtcHR5PWZ1bmN0aW9uKGEpe3JldHVybiFhfHwwPT09YS5sZW5ndGh9KTt0P24oZSxmLG0pOnI/bChlLGYsbSk6ayhlLGYsbSxwKX19fX1dLEhlPVtcIiRpbnRlcnBvbGF0ZVwiLGZ1bmN0aW9uKGEpe3ZhciBjPXthZGRPcHRpb246RSxyZW1vdmVPcHRpb246RX07cmV0dXJue3Jlc3RyaWN0OlwiRVwiLHByaW9yaXR5OjEwMCxjb21waWxlOmZ1bmN0aW9uKGQsZSl7aWYodShlLnZhbHVlKSl7dmFyIGc9YShkLnRleHQoKSwhMCk7Z3x8ZS4kc2V0KFwidmFsdWVcIixkLnRleHQoKSl9cmV0dXJuIGZ1bmN0aW9uKGEsZCxlKXt2YXIgaz1kLnBhcmVudCgpLGw9ay5kYXRhKFwiJHNlbGVjdENvbnRyb2xsZXJcIil8fGsucGFyZW50KCkuZGF0YShcIiRzZWxlY3RDb250cm9sbGVyXCIpO2wmJmwuZGF0YWJvdW5kP2QucHJvcChcInNlbGVjdGVkXCIsITEpOmw9YztnP2EuJHdhdGNoKGcsZnVuY3Rpb24oYSxjKXtlLiRzZXQoXCJ2YWx1ZVwiLGEpO2EhPT1jJiZsLnJlbW92ZU9wdGlvbihjKTtsLmFkZE9wdGlvbihhKX0pOlxubC5hZGRPcHRpb24oZS52YWx1ZSk7ZC5vbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXtsLnJlbW92ZU9wdGlvbihlLnZhbHVlKX0pfX19fV0sSWU9WSh7cmVzdHJpY3Q6XCJFXCIsdGVybWluYWw6ITB9KTsoQ2E9UC5qUXVlcnkpPyh6PUNhLHkoQ2EuZm4se3Njb3BlOkZhLnNjb3BlLGlzb2xhdGVTY29wZTpGYS5pc29sYXRlU2NvcGUsY29udHJvbGxlcjpGYS5jb250cm9sbGVyLGluamVjdG9yOkZhLmluamVjdG9yLGluaGVyaXRlZERhdGE6RmEuaW5oZXJpdGVkRGF0YX0pLHZiKFwicmVtb3ZlXCIsITAsITAsITEpLHZiKFwiZW1wdHlcIiwhMSwhMSwhMSksdmIoXCJodG1sXCIsITEsITEsITApKTp6PU87QmEuZWxlbWVudD16OyhmdW5jdGlvbihhKXt5KGEse2Jvb3RzdHJhcDpYYixjb3B5OiQsZXh0ZW5kOnksZXF1YWxzOnRhLGVsZW1lbnQ6eixmb3JFYWNoOnEsaW5qZWN0b3I6WWIsbm9vcDpFLGJpbmQ6YmIsdG9Kc29uOnBhLGZyb21Kc29uOlRiLGlkZW50aXR5OkFhLGlzVW5kZWZpbmVkOnUsaXNEZWZpbmVkOkQsXG5pc1N0cmluZzp3LGlzRnVuY3Rpb246TSxpc09iamVjdDpXLGlzTnVtYmVyOnJiLGlzRWxlbWVudDpQYyxpc0FycmF5OkwsdmVyc2lvbjpSZCxpc0RhdGU6S2EsbG93ZXJjYXNlOngsdXBwZXJjYXNlOkhhLGNhbGxiYWNrczp7Y291bnRlcjowfSwkJG1pbkVycjp0LCQkY3NwOlNifSk7VWE9VWMoUCk7dHJ5e1VhKFwibmdMb2NhbGVcIil9Y2F0Y2goYyl7VWEoXCJuZ0xvY2FsZVwiLFtdKS5wcm92aWRlcihcIiRsb2NhbGVcIixyZCl9VWEoXCJuZ1wiLFtcIm5nTG9jYWxlXCJdLFtcIiRwcm92aWRlXCIsZnVuY3Rpb24oYSl7YS5wcm92aWRlcih7JCRzYW5pdGl6ZVVyaTpCZH0pO2EucHJvdmlkZXIoXCIkY29tcGlsZVwiLGljKS5kaXJlY3RpdmUoe2E6V2QsaW5wdXQ6TGMsdGV4dGFyZWE6TGMsZm9ybTpYZCxzY3JpcHQ6RGUsc2VsZWN0OkdlLHN0eWxlOkllLG9wdGlvbjpIZSxuZ0JpbmQ6aGUsbmdCaW5kSHRtbDpqZSxuZ0JpbmRUZW1wbGF0ZTppZSxuZ0NsYXNzOmtlLG5nQ2xhc3NFdmVuOm1lLG5nQ2xhc3NPZGQ6bGUsXG5uZ0Nsb2FrOm5lLG5nQ29udHJvbGxlcjpvZSxuZ0Zvcm06WWQsbmdIaWRlOnhlLG5nSWY6cGUsbmdJbmNsdWRlOnFlLG5nSW5pdDpzZSxuZ05vbkJpbmRhYmxlOnRlLG5nUGx1cmFsaXplOnVlLG5nUmVwZWF0OnZlLG5nU2hvdzp3ZSxuZ1N0eWxlOnllLG5nU3dpdGNoOnplLG5nU3dpdGNoV2hlbjpBZSxuZ1N3aXRjaERlZmF1bHQ6QmUsbmdPcHRpb25zOkZlLG5nVHJhbnNjbHVkZTpDZSxuZ01vZGVsOmNlLG5nTGlzdDplZSxuZ0NoYW5nZTpkZSxyZXF1aXJlZDpNYyxuZ1JlcXVpcmVkOk1jLG5nVmFsdWU6Z2V9KS5kaXJlY3RpdmUoe25nSW5jbHVkZTpyZX0pLmRpcmVjdGl2ZShNYikuZGlyZWN0aXZlKE5jKTthLnByb3ZpZGVyKHskYW5jaG9yU2Nyb2xsOmNkLCRhbmltYXRlOlRkLCRicm93c2VyOmVkLCRjYWNoZUZhY3Rvcnk6ZmQsJGNvbnRyb2xsZXI6aWQsJGRvY3VtZW50OmpkLCRleGNlcHRpb25IYW5kbGVyOmtkLCRmaWx0ZXI6QWMsJGludGVycG9sYXRlOnBkLCRpbnRlcnZhbDpxZCxcbiRodHRwOmxkLCRodHRwQmFja2VuZDpuZCwkbG9jYXRpb246dGQsJGxvZzp1ZCwkcGFyc2U6eGQsJHJvb3RTY29wZTpBZCwkcTp5ZCwkc2NlOkVkLCRzY2VEZWxlZ2F0ZTpEZCwkc25pZmZlcjpGZCwkdGVtcGxhdGVDYWNoZTpnZCwkdGltZW91dDpHZCwkd2luZG93OkhkfSl9XSl9KShCYSk7eihSKS5yZWFkeShmdW5jdGlvbigpe1NjKFIsWGIpfSl9KSh3aW5kb3csZG9jdW1lbnQpOyFhbmd1bGFyLiQkY3NwKCkmJmFuZ3VsYXIuZWxlbWVudChkb2N1bWVudCkuZmluZChcImhlYWRcIikucHJlcGVuZCgnPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPkBjaGFyc2V0IFwiVVRGLThcIjtbbmdcXFxcOmNsb2FrXSxbbmctY2xvYWtdLFtkYXRhLW5nLWNsb2FrXSxbeC1uZy1jbG9ha10sLm5nLWNsb2FrLC54LW5nLWNsb2FrLC5uZy1oaWRle2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50O31uZ1xcXFw6Zm9ybXtkaXNwbGF5OmJsb2NrO308L3N0eWxlPicpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW5ndWxhci5taW4uanMubWFwXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwib01mcEFuXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvbGlicy9hbmd1bGFyL2FuZ3VsYXIubWluLmpzXCIsXCIvbGlicy9hbmd1bGFyXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcbiogaGFzU2Nyb2xsXG4qIGF1dGhvcjogcm9uZ2xpblxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjIyXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAvLyB0ZXN0IHRhcmdldHNcbiAgICB2YXIgZWxlbXMgPSBlbCA/IFtlbF0gOiBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XTtcbiAgICB2YXIgc2Nyb2xsWCA9IGZhbHNlLCBzY3JvbGxZID0gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbyA9IGVsZW1zW2ldO1xuICAgICAgICAvLyB0ZXN0IGhvcml6b250YWxcbiAgICAgICAgdmFyIHNsID0gby5zY3JvbGxMZWZ0O1xuICAgICAgICBvLnNjcm9sbExlZnQgKz0gKHNsID4gMCkgPyAtMSA6IDE7XG4gICAgICAgIG8uc2Nyb2xsTGVmdCAhPT0gc2wgJiYgKHNjcm9sbFggPSBzY3JvbGxYIHx8IHRydWUpO1xuICAgICAgICBvLnNjcm9sbExlZnQgPSBzbDtcbiAgICAgICAgLy8gdGVzdCB2ZXJ0aWNhbFxuICAgICAgICB2YXIgc3QgPSBvLnNjcm9sbFRvcDtcbiAgICAgICAgby5zY3JvbGxUb3AgKz0gKHN0ID4gMCkgPyAtMSA6IDE7XG4gICAgICAgIG8uc2Nyb2xsVG9wICE9PSBzdCAmJiAoc2Nyb2xsWSA9IHNjcm9sbFkgfHwgdHJ1ZSk7XG4gICAgICAgIG8uc2Nyb2xsVG9wID0gc3Q7XG4gICAgfVxuICAgIC8vIHJldFxuICAgIHJldHVybiB7XG4gICAgICAgIHNjcm9sbFg6IHNjcm9sbFgsXG4gICAgICAgIHNjcm9sbFk6IHNjcm9sbFlcbiAgICB9O1xufTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwib01mcEFuXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvbGlicy9oYXNTY3JvbGwuanNcIixcIi9saWJzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcbiogcGFyc2VVcmxcbiogYXV0aG9yOiByb25nbGluXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuMjJcbiovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCkge1xuICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGEuaHJlZiA9IHVybDtcbiAgICByZXR1cm4ge1xuICAgICAgICBzb3VyY2U6IHVybCxcbiAgICAgICAgcHJvdG9jb2w6IGEucHJvdG9jb2wucmVwbGFjZSgnOicsICcnKSxcbiAgICAgICAgaG9zdDogYS5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogYS5wb3J0LFxuICAgICAgICBxdWVyeTogYS5zZWFyY2gsXG4gICAgICAgIHBhcmFtczogKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXQgPSB7fSxcbiAgICAgICAgICAgIHNlZyA9IGEuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykuc3BsaXQoJyYnKSxcbiAgICAgICAgICAgIGxlbiA9IHNlZy5sZW5ndGgsIGkgPSAwLCBzO1xuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghc2VnW2ldKSB7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgcyA9IHNlZ1tpXS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICAgIHJldFtzWzBdXSA9IHNbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9KSgpLFxuICAgICAgICBmaWxlOiAoYS5wYXRobmFtZS5tYXRjaCgvXFwvKFteXFwvPyNdKykkL2kpIHx8IFssICcnXSlbMV0sXG4gICAgICAgIGhhc2g6IGEuaGFzaC5yZXBsYWNlKCcjJywgJycpLFxuICAgICAgICBwYXRoOiBhLnBhdGhuYW1lLnJlcGxhY2UoL14oW15cXC9dKS8sICcvJDEnKSxcbiAgICAgICAgcmVsYXRpdmU6IChhLmhyZWYubWF0Y2goL3Rwcz86XFwvXFwvW15cXC9dKyguKykvKSB8fCBbLCAnJ10pWzFdLFxuICAgICAgICBzZWdtZW50czogYS5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpLnNwbGl0KCcvJylcbiAgICB9O1xufTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwib01mcEFuXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvbGlicy9wYXJzZVVybC5qc1wiLFwiL2xpYnNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxuKiB1dGlsaXRpZXNcbiogYXV0aG9yOiByb25nbGluXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuNFxuKi9cblxudmFyIGNvbW1vbiA9IHJlcXVpcmUoJy4uLy4uL2pzZy91dGlsaXRpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb21tb24uZXh0ZW5kKHt9LCBjb21tb24sIHtcblxuICAgIGRvbToge1xuICAgICAgICBwYXJzZVVybDogcmVxdWlyZSgnLi9wYXJzZVVybCcpLFxuICAgICAgICBoYXNTY3JvbGw6IHJlcXVpcmUoJy4vaGFzU2Nyb2xsJyksXG4gICAgICAgIGlzQW5jZXN0b3I6IGZ1bmN0aW9uIChwLCBjKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAocCAmJiBjKSB7XG4gICAgICAgICAgICAgICAgaWYgKHAuY29udGFpbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAuY29udGFpbnMoYyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIShwLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGMpICYgMTYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChjID0gYy5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXQgPSBjID09IHAgfHwgcmV0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBpc1dpbmRvdzogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqID09IG9iai53aW5kb3dcbiAgICB9LFxuXG4gICAgdmlld1VybDogZnVuY3Rpb24gKHVybCl7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfSxcblxuICAgIGkxOG46IGZ1bmN0aW9uKGtleSwgdmFsKSB7XG4gICAgICAgIHZhciBnZXRWYWwgPSB0aGlzLnJlYWRPYmooe30sIGtleSk7XG4gICAgICAgIHJldHVybiBnZXRWYWwgIT09IHVuZGVmaW5lZCA/IGdldFZhbCA6IHZhbDtcbiAgICB9XG59KTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwib01mcEFuXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvbGlicy91dGlsaXRpZXMuanNcIixcIi9saWJzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcbiogdXRpbGl0aWVzXG4qIGF1dGhvcjogcm9uZ2xpblxuKiBjcmVhdGUgZGF0ZTogMjAxNC42LjIxXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGFyZzJhcnI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3BsaWNlID0gQXJyYXkucHJvdG90eXBlLnNwbGljZTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGFyZ3MsIHNraXApIHtcbiAgICAgICAgICAgIHJldHVybiBzcGxpY2UuY2FsbChhcmdzLCBza2lwIHx8IDApO1xuICAgICAgICB9O1xuICAgIH0oKSxcblxuICAgIHR5cGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb3AgPSBPYmplY3QucHJvdG90eXBlO1xuICAgICAgICB2YXIgY2xhc3MydHlwZSA9IHt9LCBuYXRpdmVzID0gJ0Jvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3InLnNwbGl0KCcgJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmF0aXZlcy5sZW5ndGg7IGkrKykge2NsYXNzMnR5cGVbJ1tvYmplY3QgJyArIG5hdGl2ZXNbaV0gKyAnXSddID0gbmF0aXZlc1tpXS50b0xvd2VyQ2FzZSgpOyB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBvYmogPT0gbnVsbCA/IFN0cmluZyhvYmopIDogY2xhc3MydHlwZVtvcC50b1N0cmluZy5jYWxsKG9iaildIHx8ICdvYmplY3QnO1xuICAgICAgICB9O1xuICAgIH0oKSxcblxuICAgIGlzQXJyYXk6IGZ1bmN0aW9uKG9iail7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUob2JqKSA9PT0gJ2FycmF5JztcbiAgICB9LFxuXG4gICAgaXNGdW5jdGlvbjogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUob2JqKSA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9LFxuXG4gICAgaXNOdW1lcmljOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdChvYmopKSAmJiBpc0Zpbml0ZShvYmopXG4gICAgfSxcblxuICAgIGlzUGxhaW5PYmplY3Q6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgaWYgKCFvYmogfHwgdGhpcy50eXBlKG9iaikgIT09IFwib2JqZWN0XCIgfHwgb2JqLm5vZGVUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChvYmouY29uc3RydWN0b3IgJiYgIXRoaXMuaGFzT3duKG9iaiwgXCJjb25zdHJ1Y3RvclwiKSAmJiAhdGhpcy5oYXNPd24ob2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSwgXCJpc1Byb3RvdHlwZU9mXCIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChrZXkgaW4gb2JqKSB7fVxuICAgICAgICByZXR1cm4ga2V5ID09PSB1bmRlZmluZWQgfHwgdGhpcy5oYXNPd24ob2JqLCBrZXkpO1xuICAgIH0sXG5cbiAgICBoYXNPd246IGZ1bmN0aW9uKG8sIHByb3Ape1xuICAgICAgICBpZiAoIG8gPT09IG51bGwgfHwgbyA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKCBvLmhhc093blByb3BlcnR5ICkge1xuICAgICAgICAgICAgcmV0dXJuIG8uaGFzT3duUHJvcGVydHkoIHByb3AgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoIHRoaXMudHlwZSggb1twcm9wXSApICE9PSAndW5kZWZpbmVkJyApICYmIG8uY29uc3RydWN0b3IucHJvdG90eXBlW3Byb3BdICE9PSBvW3Byb3BdO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGVhY2g6IGZ1bmN0aW9uKCBvYmosIGNhbGxiYWNrLCBhcmdzICkge1xuICAgICAgICB2YXIgbmFtZSxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gb2JqLmxlbmd0aCxcbiAgICAgICAgICAgIGlzT2JqID0gbGVuZ3RoID09PSB1bmRlZmluZWQgfHwgdGhpcy5pc0Z1bmN0aW9uKCBvYmogKTtcblxuICAgICAgICBpZiAoIGFyZ3MgKSB7XG4gICAgICAgICAgICBpZiAoIGlzT2JqICkge1xuICAgICAgICAgICAgICAgIGZvciAoIG5hbWUgaW4gb2JqICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGNhbGxiYWNrLmFwcGx5KCBvYmpbIG5hbWUgXSwgYXJncyApID09PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKCA7IGkgPCBsZW5ndGg7ICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGNhbGxiYWNrLmFwcGx5KCBvYmpbIGkrKyBdLCBhcmdzICkgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgLy8gQSBzcGVjaWFsLCBmYXN0LCBjYXNlIGZvciB0aGUgbW9zdCBjb21tb24gdXNlIG9mIGVhY2hcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICggaXNPYmogKSB7XG4gICAgICAgICAgICAgICAgZm9yICggbmFtZSBpbiBvYmogKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggY2FsbGJhY2suY2FsbCggb2JqWyBuYW1lIF0sIG5hbWUsIG9ialsgbmFtZSBdICkgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoIDsgaSA8IGxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggY2FsbGJhY2suY2FsbCggb2JqWyBpIF0sIGksIG9ialsgaSsrIF0gKSA9PT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcblxuICAgIGV4dGVuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZSwgdGFyZ2V0ID0gYXJndW1lbnRzWzBdIHx8IHt9LFxuICAgICAgICAgICAgaSA9IDEsXG4gICAgICAgICAgICBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICAgICAgZGVlcCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUodGFyZ2V0KSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIGRlZXAgPSB0YXJnZXQ7XG4gICAgICAgICAgICB0YXJnZXQgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgICAgICAgICBpID0gMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50eXBlKHRhcmdldCkgIT09IFwib2JqZWN0XCIgJiYgIXRoaXMuaXNGdW5jdGlvbih0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB7fVxuICAgICAgICB9XG4gICAgICAgIGlmIChsZW5ndGggPT09IGkpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHRoaXM7XG4gICAgICAgICAgICAtLWk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgob3B0aW9ucyA9IGFyZ3VtZW50c1tpXSkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHNyYyA9IHRhcmdldFtuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgY29weSA9IG9wdGlvbnNbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IGNvcHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWVwICYmIGNvcHkgJiYgKHRoaXMuaXNQbGFpbk9iamVjdChjb3B5KSB8fCAoY29weUlzQXJyYXkgPSB0aGlzLmlzQXJyYXkoY29weSkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvcHlJc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29weUlzQXJyYXkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9uZSA9IHNyYyAmJiB0aGlzLmlzQXJyYXkoc3JjKSA/IHNyYyA6IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9uZSA9IHNyYyAmJiB0aGlzLmlzUGxhaW5PYmplY3Qoc3JjKSA/IHNyYyA6IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV0FSTklORzogUkVDVVJTSU9OXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0gPSB0aGlzLmV4dGVuZChkZWVwLCBjbG9uZSwgY29weSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29weSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0gPSBjb3B5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcblxuICAgIGd1aWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBmdW5jdGlvbiBzNCgpIHsgcmV0dXJuICgoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApIHwgMCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTsgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oc2VwKSB7XG4gICAgICAgICAgICBpZiAoc2VwID09PSB0cnVlKSB7IHNlcCA9ICctJzsgfSBlbHNlIHsgc2VwID0gc2VwIHx8ICcnOyB9XG4gICAgICAgICAgICByZXR1cm4gKHM0KCkgKyBzNCgpICsgc2VwICsgczQoKSArIHNlcCArIHM0KCkgKyBzZXAgKyBzNCgpICsgc2VwICsgczQoKSArIHM0KCkgKyBzNCgpKTtcbiAgICAgICAgfTtcbiAgICB9KCksXG5cbiAgICB1bmlxdWU6IGZ1bmN0aW9uKGxlbikge1xuICAgICAgICByZXR1cm4gdGhpcy5ndWlkKCkuc3Vic3RyKDAsIGxlbik7XG4gICAgfSxcblxuICAgIHBhZExlZnQ6IGZ1bmN0aW9uKHN0ciwgbGVuLCBjaHIsIHJldmVyc2UpIHtcbiAgICAgICAgaWYgKHN0ciAhPT0gbnVsbCAmJiBzdHIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3RyID0gc3RyICsgJyc7IHZhciBudW0gPSBsZW4gLSBzdHIubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXZlcnNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBzdHIgKyBjaHI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBjaHIgKyBzdHI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9LFxuXG4gICAgcGFkUmlnaHQ6IGZ1bmN0aW9uKHN0ciwgbGVuLCBjaHIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFkTGVmdChzdHIsIGxlbiwgY2hyLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgZm9ybWF0OiBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgICAgIHZhciBhcmdzID0gdGhpcy5hcmcyYXJyKGFyZ3VtZW50cywgMSksIGFyZztcbiAgICAgICAgcmV0dXJuIGZvcm1hdC5yZXBsYWNlKC9cXHsoXFxkKylcXH0vZywgZnVuY3Rpb24gKG0sIGkpIHtcbiAgICAgICAgICAgIHJldHVybiAoYXJnID0gYXJnc1tpXSwgKGFyZyA9PT0gbnVsbCB8fCBhcmcgPT09IHVuZGVmaW5lZCkgPyAnJyA6IGFyZyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICB0cmltOiBmdW5jdGlvbiAoc3RyLCBzZXQpIHtcbiAgICAgICAgc3RyID0gc3RyIHx8ICcnOyBzZXQgPSBzZXQgfHwge307XG4gICAgICAgIGlmIChzZXQuZmluZCkge1xuICAgICAgICAgICAgdmFyIGV4cCA9IHRoaXMuZm9ybWF0KCdeezB9K3x7MH0rJCcsIHNldC5maW5kKTtcbiAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGV4cCwgJ2cnKSwgc2V0LmhvbGQgfHwgJycpO1xuICAgICAgICB9IGVsc2UgaWYgKHNldC5maW5kRW5kKSB7XG4gICAgICAgICAgICB2YXIgZXhwID0gdGhpcy5mb3JtYXQoJ3swfSskJywgc2V0LmZpbmRFbmQpO1xuICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoZXhwLCAnZycpLCBzZXQuaG9sZCB8fCAnJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2V0LmZpbmRTdGFydCkge1xuICAgICAgICAgICAgdmFyIGV4cCA9IHRoaXMuZm9ybWF0KCdeezB9KycsIHNldC5maW5kU3RhcnQpO1xuICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoZXhwLCAnZycpLCBzZXQuaG9sZCB8fCAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csIHNldC5ob2xkIHx8ICcnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZWFkT2JqOiBmdW5jdGlvbihvYmosIG5hbWVzcGFjZSkge1xuICAgICAgICB2YXIgbmFtZXMgPSBuYW1lc3BhY2Uuc3BsaXQoL1xcLnxcXFt8XFxdfFxcKC8pLCByZXQgPSBvYmo7XG4gICAgICAgIHRoaXMuZWFjaChuYW1lcywgZnVuY3Rpb24gKGksIGtleSkgeyBpZiAoa2V5ICYmIHJldCkgeyByZXQgPSAoaXNOYU4oa2V5KSA/IChrZXkgPT09ICcpJyA/IHJldCgpIDogcmV0W2tleV0pIDogcmV0W3BhcnNlSW50KGtleSwgMTApXSk7IH0gfSk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcblxuICAgIG1hcE9iajogZnVuY3Rpb24ob2JqLCBuYW1lc3BhY2UsIGRmdCkge1xuICAgICAgICB2YXIgcGFydHMgPSBuYW1lc3BhY2Uuc3BsaXQoL1xcLnxcXFt8XFxdLyksIG5hbWVzID0gW107XG4gICAgICAgIHRoaXMuZWFjaChwYXJ0cywgZnVuY3Rpb24gKGksIGtleSkgeyBpZiAoa2V5KSB7IG5hbWVzLnB1c2goa2V5KTsgfSB9KTtcbiAgICAgICAgdmFyIGxhc3ROYW1lID0gbmFtZXNbbmFtZXMubGVuZ3RoIC0gMV0sIGN1cnIgPSBvYmogPSAob2JqIHx8IHt9KSwgcHJldjtcbiAgICAgICAgdGhpcy5lYWNoKG5hbWVzLCBmdW5jdGlvbiAoaSwga2V5KSB7IHByZXYgPSBjdXJyOyBjdXJyID0gKGN1cnJba2V5XSA/IGN1cnJba2V5XSA6IChjdXJyW2tleV0gPSBpc05hTihuYW1lc1tpICsgMV0pID8ge30gOiBbXSkpOyB9KTtcbiAgICAgICAgaWYgKHByZXYpIHsgcHJldltsYXN0TmFtZV0gPSBkZnQ7IH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG59O1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm9NZnBBblwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uL2pzZy91dGlsaXRpZXMuanNcIixcIi8uLi9qc2dcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5fdXNlVHlwZWRBcnJheXNgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAoY29tcGF0aWJsZSBkb3duIHRvIElFNilcbiAqL1xuQnVmZmVyLl91c2VUeXBlZEFycmF5cyA9IChmdW5jdGlvbiAoKSB7XG4gIC8vIERldGVjdCBpZiBicm93c2VyIHN1cHBvcnRzIFR5cGVkIEFycmF5cy4gU3VwcG9ydGVkIGJyb3dzZXJzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssXG4gIC8vIENocm9tZSA3KywgU2FmYXJpIDUuMSssIE9wZXJhIDExLjYrLCBpT1MgNC4yKy4gSWYgdGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBhZGRpbmdcbiAgLy8gcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLCB0aGVuIHRoYXQncyB0aGUgc2FtZSBhcyBubyBgVWludDhBcnJheWAgc3VwcG9ydFxuICAvLyBiZWNhdXNlIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBhZGQgYWxsIHRoZSBub2RlIEJ1ZmZlciBBUEkgbWV0aG9kcy4gVGhpcyBpcyBhbiBpc3N1ZVxuICAvLyBpbiBGaXJlZm94IDQtMjkuIE5vdyBmaXhlZDogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4XG4gIHRyeSB7XG4gICAgdmFyIGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcigwKVxuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgYXJyLmZvbyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH1cbiAgICByZXR1cm4gNDIgPT09IGFyci5mb28oKSAmJlxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nIC8vIENocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn0pKClcblxuLyoqXG4gKiBDbGFzczogQnVmZmVyXG4gKiA9PT09PT09PT09PT09XG4gKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBhcmUgYXVnbWVudGVkXG4gKiB3aXRoIGZ1bmN0aW9uIHByb3BlcnRpZXMgZm9yIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBBUEkgZnVuY3Rpb25zLiBXZSB1c2VcbiAqIGBVaW50OEFycmF5YCBzbyB0aGF0IHNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0IHJldHVybnNcbiAqIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIEJ5IGF1Z21lbnRpbmcgdGhlIGluc3RhbmNlcywgd2UgY2FuIGF2b2lkIG1vZGlmeWluZyB0aGUgYFVpbnQ4QXJyYXlgXG4gKiBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIEJ1ZmZlciAoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSlcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKVxuXG4gIHZhciB0eXBlID0gdHlwZW9mIHN1YmplY3RcblxuICAvLyBXb3JrYXJvdW5kOiBub2RlJ3MgYmFzZTY0IGltcGxlbWVudGF0aW9uIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBzdHJpbmdzXG4gIC8vIHdoaWxlIGJhc2U2NC1qcyBkb2VzIG5vdC5cbiAgaWYgKGVuY29kaW5nID09PSAnYmFzZTY0JyAmJiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHN1YmplY3QgPSBzdHJpbmd0cmltKHN1YmplY3QpXG4gICAgd2hpbGUgKHN1YmplY3QubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgICAgc3ViamVjdCA9IHN1YmplY3QgKyAnPSdcbiAgICB9XG4gIH1cblxuICAvLyBGaW5kIHRoZSBsZW5ndGhcbiAgdmFyIGxlbmd0aFxuICBpZiAodHlwZSA9PT0gJ251bWJlcicpXG4gICAgbGVuZ3RoID0gY29lcmNlKHN1YmplY3QpXG4gIGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKVxuICAgIGxlbmd0aCA9IEJ1ZmZlci5ieXRlTGVuZ3RoKHN1YmplY3QsIGVuY29kaW5nKVxuICBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0JylcbiAgICBsZW5ndGggPSBjb2VyY2Uoc3ViamVjdC5sZW5ndGgpIC8vIGFzc3VtZSB0aGF0IG9iamVjdCBpcyBhcnJheS1saWtlXG4gIGVsc2VcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG5lZWRzIHRvIGJlIGEgbnVtYmVyLCBhcnJheSBvciBzdHJpbmcuJylcblxuICB2YXIgYnVmXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgLy8gUHJlZmVycmVkOiBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIGJ1ZiA9IEJ1ZmZlci5fYXVnbWVudChuZXcgVWludDhBcnJheShsZW5ndGgpKVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gVEhJUyBpbnN0YW5jZSBvZiBCdWZmZXIgKGNyZWF0ZWQgYnkgYG5ld2ApXG4gICAgYnVmID0gdGhpc1xuICAgIGJ1Zi5sZW5ndGggPSBsZW5ndGhcbiAgICBidWYuX2lzQnVmZmVyID0gdHJ1ZVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgJiYgdHlwZW9mIHN1YmplY3QuYnl0ZUxlbmd0aCA9PT0gJ251bWJlcicpIHtcbiAgICAvLyBTcGVlZCBvcHRpbWl6YXRpb24gLS0gdXNlIHNldCBpZiB3ZSdyZSBjb3B5aW5nIGZyb20gYSB0eXBlZCBhcnJheVxuICAgIGJ1Zi5fc2V0KHN1YmplY3QpXG4gIH0gZWxzZSBpZiAoaXNBcnJheWlzaChzdWJqZWN0KSkge1xuICAgIC8vIFRyZWF0IGFycmF5LWlzaCBvYmplY3RzIGFzIGEgYnl0ZSBhcnJheVxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdWJqZWN0KSlcbiAgICAgICAgYnVmW2ldID0gc3ViamVjdC5yZWFkVUludDgoaSlcbiAgICAgIGVsc2VcbiAgICAgICAgYnVmW2ldID0gc3ViamVjdFtpXVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGJ1Zi53cml0ZShzdWJqZWN0LCAwLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiAhQnVmZmVyLl91c2VUeXBlZEFycmF5cyAmJiAhbm9aZXJvKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBidWZbaV0gPSAwXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG4vLyBTVEFUSUMgTUVUSE9EU1xuLy8gPT09PT09PT09PT09PT1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIChiKSB7XG4gIHJldHVybiAhIShiICE9PSBudWxsICYmIGIgIT09IHVuZGVmaW5lZCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmJ5dGVMZW5ndGggPSBmdW5jdGlvbiAoc3RyLCBlbmNvZGluZykge1xuICB2YXIgcmV0XG4gIHN0ciA9IHN0ciArICcnXG4gIHN3aXRjaCAoZW5jb2RpbmcgfHwgJ3V0ZjgnKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggLyAyXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IHV0ZjhUb0J5dGVzKHN0cikubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBiYXNlNjRUb0J5dGVzKHN0cikubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoICogMlxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiAobGlzdCwgdG90YWxMZW5ndGgpIHtcbiAgYXNzZXJ0KGlzQXJyYXkobGlzdCksICdVc2FnZTogQnVmZmVyLmNvbmNhdChsaXN0LCBbdG90YWxMZW5ndGhdKVxcbicgK1xuICAgICAgJ2xpc3Qgc2hvdWxkIGJlIGFuIEFycmF5LicpXG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoMClcbiAgfSBlbHNlIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBsaXN0WzBdXG4gIH1cblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHRvdGFsTGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgIHRvdGFsTGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b3RhbExlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWYgPSBuZXcgQnVmZmVyKHRvdGFsTGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIGl0ZW0uY29weShidWYsIHBvcylcbiAgICBwb3MgKz0gaXRlbS5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cbi8vIEJVRkZFUiBJTlNUQU5DRSBNRVRIT0RTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBfaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBhc3NlcnQoc3RyTGVuICUgMiA9PT0gMCwgJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciBieXRlID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGFzc2VydCghaXNOYU4oYnl0ZSksICdJbnZhbGlkIGhleCBzdHJpbmcnKVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVcbiAgfVxuICBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9IGkgKiAyXG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIF91dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBfYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBfYmluYXJ5V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gX2FzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBfYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF91dGYxNmxlV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIFN1cHBvcnQgYm90aCAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpXG4gIC8vIGFuZCB0aGUgbGVnYWN5IChzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBpZiAoIWlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIH0gZWxzZSB7ICAvLyBsZWdhY3lcbiAgICB2YXIgc3dhcCA9IGVuY29kaW5nXG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBvZmZzZXQgPSBsZW5ndGhcbiAgICBsZW5ndGggPSBzd2FwXG4gIH1cblxuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG4gIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nIHx8ICd1dGY4JykudG9Mb3dlckNhc2UoKVxuXG4gIHZhciByZXRcbiAgc3dpdGNoIChlbmNvZGluZykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBfaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gX3V0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgICByZXQgPSBfYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiaW5hcnknOlxuICAgICAgcmV0ID0gX2JpbmFyeVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBfYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IF91dGYxNmxlV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nIHx8ICd1dGY4JykudG9Mb3dlckNhc2UoKVxuICBzdGFydCA9IE51bWJlcihzdGFydCkgfHwgMFxuICBlbmQgPSAoZW5kICE9PSB1bmRlZmluZWQpXG4gICAgPyBOdW1iZXIoZW5kKVxuICAgIDogZW5kID0gc2VsZi5sZW5ndGhcblxuICAvLyBGYXN0cGF0aCBlbXB0eSBzdHJpbmdzXG4gIGlmIChlbmQgPT09IHN0YXJ0KVxuICAgIHJldHVybiAnJ1xuXG4gIHZhciByZXRcbiAgc3dpdGNoIChlbmNvZGluZykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBfaGV4U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gX3V0ZjhTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgICByZXQgPSBfYXNjaWlTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiaW5hcnknOlxuICAgICAgcmV0ID0gX2JpbmFyeVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBfYmFzZTY0U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IF91dGYxNmxlU2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAodGFyZ2V0LCB0YXJnZXRfc3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHNvdXJjZSA9IHRoaXNcblxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAoIXRhcmdldF9zdGFydCkgdGFyZ2V0X3N0YXJ0ID0gMFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHNvdXJjZS5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgYXNzZXJ0KGVuZCA+PSBzdGFydCwgJ3NvdXJjZUVuZCA8IHNvdXJjZVN0YXJ0JylcbiAgYXNzZXJ0KHRhcmdldF9zdGFydCA+PSAwICYmIHRhcmdldF9zdGFydCA8IHRhcmdldC5sZW5ndGgsXG4gICAgICAndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChzdGFydCA+PSAwICYmIHN0YXJ0IDwgc291cmNlLmxlbmd0aCwgJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoZW5kID49IDAgJiYgZW5kIDw9IHNvdXJjZS5sZW5ndGgsICdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKVxuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0IDwgZW5kIC0gc3RhcnQpXG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCArIHN0YXJ0XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG5cbiAgaWYgKGxlbiA8IDEwMCB8fCAhQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICB0YXJnZXRbaSArIHRhcmdldF9zdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQuX3NldCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksIHRhcmdldF9zdGFydClcbiAgfVxufVxuXG5mdW5jdGlvbiBfYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIF91dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmVzID0gJydcbiAgdmFyIHRtcCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIGlmIChidWZbaV0gPD0gMHg3Rikge1xuICAgICAgcmVzICs9IGRlY29kZVV0ZjhDaGFyKHRtcCkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgICAgIHRtcCA9ICcnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRtcCArPSAnJScgKyBidWZbaV0udG9TdHJpbmcoMTYpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcyArIGRlY29kZVV0ZjhDaGFyKHRtcClcbn1cblxuZnVuY3Rpb24gX2FzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKVxuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBfYmluYXJ5U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICByZXR1cm4gX2FzY2lpU2xpY2UoYnVmLCBzdGFydCwgZW5kKVxufVxuXG5mdW5jdGlvbiBfaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiBfdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpKzFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IGNsYW1wKHN0YXJ0LCBsZW4sIDApXG4gIGVuZCA9IGNsYW1wKGVuZCwgbGVuLCBsZW4pXG5cbiAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICByZXR1cm4gQnVmZmVyLl9hdWdtZW50KHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZCkpXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICB2YXIgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkLCB0cnVlKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47IGkrKykge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICAgIHJldHVybiBuZXdCdWZcbiAgfVxufVxuXG4vLyBgZ2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuZ2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy5yZWFkVUludDgob2Zmc2V0KVxufVxuXG4vLyBgc2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodiwgb2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuc2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy53cml0ZVVJbnQ4KHYsIG9mZnNldClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKVxuICAgIHJldHVyblxuXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuZnVuY3Rpb24gX3JlYWRVSW50MTYgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsXG4gIGlmIChsaXR0bGVFbmRpYW4pIHtcbiAgICB2YWwgPSBidWZbb2Zmc2V0XVxuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAxXSA8PCA4XG4gIH0gZWxzZSB7XG4gICAgdmFsID0gYnVmW29mZnNldF0gPDwgOFxuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAxXVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MTYodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MTYodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkVUludDMyIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbFxuICBpZiAobGl0dGxlRW5kaWFuKSB7XG4gICAgaWYgKG9mZnNldCArIDIgPCBsZW4pXG4gICAgICB2YWwgPSBidWZbb2Zmc2V0ICsgMl0gPDwgMTZcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV0gPDwgOFxuICAgIHZhbCB8PSBidWZbb2Zmc2V0XVxuICAgIGlmIChvZmZzZXQgKyAzIDwgbGVuKVxuICAgICAgdmFsID0gdmFsICsgKGJ1ZltvZmZzZXQgKyAzXSA8PCAyNCA+Pj4gMClcbiAgfSBlbHNlIHtcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCA9IGJ1ZltvZmZzZXQgKyAxXSA8PCAxNlxuICAgIGlmIChvZmZzZXQgKyAyIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAyXSA8PCA4XG4gICAgaWYgKG9mZnNldCArIDMgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDNdXG4gICAgdmFsID0gdmFsICsgKGJ1ZltvZmZzZXRdIDw8IDI0ID4+PiAwKVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MzIodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MzIodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCxcbiAgICAgICAgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKVxuICAgIHJldHVyblxuXG4gIHZhciBuZWcgPSB0aGlzW29mZnNldF0gJiAweDgwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5mdW5jdGlvbiBfcmVhZEludDE2IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbCA9IF9yZWFkVUludDE2KGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIHRydWUpXG4gIHZhciBuZWcgPSB2YWwgJiAweDgwMDBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmZmZiAtIHZhbCArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDE2KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQxNih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWRJbnQzMiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWwgPSBfcmVhZFVJbnQzMihidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCB0cnVlKVxuICB2YXIgbmVnID0gdmFsICYgMHg4MDAwMDAwMFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZmZmZmZmZiAtIHZhbCArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDMyKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQzMih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWRGbG9hdCAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICByZXR1cm4gaWVlZTc1NC5yZWFkKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRmxvYXQodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEZsb2F0KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZERvdWJsZSAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICsgNyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICByZXR1cm4gaWVlZTc1NC5yZWFkKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZERvdWJsZSh0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZERvdWJsZSh0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmYpXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKSByZXR1cm5cblxuICB0aGlzW29mZnNldF0gPSB2YWx1ZVxufVxuXG5mdW5jdGlvbiBfd3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICd0cnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmdWludCh2YWx1ZSwgMHhmZmZmKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihsZW4gLSBvZmZzZXQsIDIpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID1cbiAgICAgICAgKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgICAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICd0cnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmdWludCh2YWx1ZSwgMHhmZmZmZmZmZilcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4obGVuIC0gb2Zmc2V0LCA0KTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9XG4gICAgICAgICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZiwgLTB4ODApXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIHRoaXMud3JpdGVVSW50OCh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydClcbiAgZWxzZVxuICAgIHRoaXMud3JpdGVVSW50OCgweGZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmZmYsIC0weDgwMDApXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICBfd3JpdGVVSW50MTYoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgX3dyaXRlVUludDE2KGJ1ZiwgMHhmZmZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgX3dyaXRlVUludDMyKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbiAgZWxzZVxuICAgIF93cml0ZVVJbnQzMihidWYsIDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmSUVFRTc1NCh2YWx1ZSwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDcgPCBidWYubGVuZ3RoLFxuICAgICAgICAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZklFRUU3NTQodmFsdWUsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGZpbGwodmFsdWUsIHN0YXJ0PTAsIGVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gKHZhbHVlLCBzdGFydCwgZW5kKSB7XG4gIGlmICghdmFsdWUpIHZhbHVlID0gMFxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQpIGVuZCA9IHRoaXMubGVuZ3RoXG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLmNoYXJDb2RlQXQoMClcbiAgfVxuXG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmICFpc05hTih2YWx1ZSksICd2YWx1ZSBpcyBub3QgYSBudW1iZXInKVxuICBhc3NlcnQoZW5kID49IHN0YXJ0LCAnZW5kIDwgc3RhcnQnKVxuXG4gIC8vIEZpbGwgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgYXNzZXJ0KHN0YXJ0ID49IDAgJiYgc3RhcnQgPCB0aGlzLmxlbmd0aCwgJ3N0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoZW5kID49IDAgJiYgZW5kIDw9IHRoaXMubGVuZ3RoLCAnZW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgdGhpc1tpXSA9IHZhbHVlXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgb3V0ID0gW11cbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBvdXRbaV0gPSB0b0hleCh0aGlzW2ldKVxuICAgIGlmIChpID09PSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTKSB7XG4gICAgICBvdXRbaSArIDFdID0gJy4uLidcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgb3V0LmpvaW4oJyAnKSArICc+J1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYEFycmF5QnVmZmVyYCB3aXRoIHRoZSAqY29waWVkKiBtZW1vcnkgb2YgdGhlIGJ1ZmZlciBpbnN0YW5jZS5cbiAqIEFkZGVkIGluIE5vZGUgMC4xMi4gT25seSBhdmFpbGFibGUgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IEFycmF5QnVmZmVyLlxuICovXG5CdWZmZXIucHJvdG90eXBlLnRvQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgICAgcmV0dXJuIChuZXcgQnVmZmVyKHRoaXMpKS5idWZmZXJcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGJ1ZiA9IG5ldyBVaW50OEFycmF5KHRoaXMubGVuZ3RoKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJ1Zi5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSlcbiAgICAgICAgYnVmW2ldID0gdGhpc1tpXVxuICAgICAgcmV0dXJuIGJ1Zi5idWZmZXJcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdCdWZmZXIudG9BcnJheUJ1ZmZlciBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcicpXG4gIH1cbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG52YXIgQlAgPSBCdWZmZXIucHJvdG90eXBlXG5cbi8qKlxuICogQXVnbWVudCBhIFVpbnQ4QXJyYXkgKmluc3RhbmNlKiAobm90IHRoZSBVaW50OEFycmF5IGNsYXNzISkgd2l0aCBCdWZmZXIgbWV0aG9kc1xuICovXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5faXNCdWZmZXIgPSB0cnVlXG5cbiAgLy8gc2F2ZSByZWZlcmVuY2UgdG8gb3JpZ2luYWwgVWludDhBcnJheSBnZXQvc2V0IG1ldGhvZHMgYmVmb3JlIG92ZXJ3cml0aW5nXG4gIGFyci5fZ2V0ID0gYXJyLmdldFxuICBhcnIuX3NldCA9IGFyci5zZXRcblxuICAvLyBkZXByZWNhdGVkLCB3aWxsIGJlIHJlbW92ZWQgaW4gbm9kZSAwLjEzK1xuICBhcnIuZ2V0ID0gQlAuZ2V0XG4gIGFyci5zZXQgPSBCUC5zZXRcblxuICBhcnIud3JpdGUgPSBCUC53cml0ZVxuICBhcnIudG9TdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9Mb2NhbGVTdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9KU09OID0gQlAudG9KU09OXG4gIGFyci5jb3B5ID0gQlAuY29weVxuICBhcnIuc2xpY2UgPSBCUC5zbGljZVxuICBhcnIucmVhZFVJbnQ4ID0gQlAucmVhZFVJbnQ4XG4gIGFyci5yZWFkVUludDE2TEUgPSBCUC5yZWFkVUludDE2TEVcbiAgYXJyLnJlYWRVSW50MTZCRSA9IEJQLnJlYWRVSW50MTZCRVxuICBhcnIucmVhZFVJbnQzMkxFID0gQlAucmVhZFVJbnQzMkxFXG4gIGFyci5yZWFkVUludDMyQkUgPSBCUC5yZWFkVUludDMyQkVcbiAgYXJyLnJlYWRJbnQ4ID0gQlAucmVhZEludDhcbiAgYXJyLnJlYWRJbnQxNkxFID0gQlAucmVhZEludDE2TEVcbiAgYXJyLnJlYWRJbnQxNkJFID0gQlAucmVhZEludDE2QkVcbiAgYXJyLnJlYWRJbnQzMkxFID0gQlAucmVhZEludDMyTEVcbiAgYXJyLnJlYWRJbnQzMkJFID0gQlAucmVhZEludDMyQkVcbiAgYXJyLnJlYWRGbG9hdExFID0gQlAucmVhZEZsb2F0TEVcbiAgYXJyLnJlYWRGbG9hdEJFID0gQlAucmVhZEZsb2F0QkVcbiAgYXJyLnJlYWREb3VibGVMRSA9IEJQLnJlYWREb3VibGVMRVxuICBhcnIucmVhZERvdWJsZUJFID0gQlAucmVhZERvdWJsZUJFXG4gIGFyci53cml0ZVVJbnQ4ID0gQlAud3JpdGVVSW50OFxuICBhcnIud3JpdGVVSW50MTZMRSA9IEJQLndyaXRlVUludDE2TEVcbiAgYXJyLndyaXRlVUludDE2QkUgPSBCUC53cml0ZVVJbnQxNkJFXG4gIGFyci53cml0ZVVJbnQzMkxFID0gQlAud3JpdGVVSW50MzJMRVxuICBhcnIud3JpdGVVSW50MzJCRSA9IEJQLndyaXRlVUludDMyQkVcbiAgYXJyLndyaXRlSW50OCA9IEJQLndyaXRlSW50OFxuICBhcnIud3JpdGVJbnQxNkxFID0gQlAud3JpdGVJbnQxNkxFXG4gIGFyci53cml0ZUludDE2QkUgPSBCUC53cml0ZUludDE2QkVcbiAgYXJyLndyaXRlSW50MzJMRSA9IEJQLndyaXRlSW50MzJMRVxuICBhcnIud3JpdGVJbnQzMkJFID0gQlAud3JpdGVJbnQzMkJFXG4gIGFyci53cml0ZUZsb2F0TEUgPSBCUC53cml0ZUZsb2F0TEVcbiAgYXJyLndyaXRlRmxvYXRCRSA9IEJQLndyaXRlRmxvYXRCRVxuICBhcnIud3JpdGVEb3VibGVMRSA9IEJQLndyaXRlRG91YmxlTEVcbiAgYXJyLndyaXRlRG91YmxlQkUgPSBCUC53cml0ZURvdWJsZUJFXG4gIGFyci5maWxsID0gQlAuZmlsbFxuICBhcnIuaW5zcGVjdCA9IEJQLmluc3BlY3RcbiAgYXJyLnRvQXJyYXlCdWZmZXIgPSBCUC50b0FycmF5QnVmZmVyXG5cbiAgcmV0dXJuIGFyclxufVxuXG4vLyBzbGljZShzdGFydCwgZW5kKVxuZnVuY3Rpb24gY2xhbXAgKGluZGV4LCBsZW4sIGRlZmF1bHRWYWx1ZSkge1xuICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykgcmV0dXJuIGRlZmF1bHRWYWx1ZVxuICBpbmRleCA9IH5+aW5kZXg7ICAvLyBDb2VyY2UgdG8gaW50ZWdlci5cbiAgaWYgKGluZGV4ID49IGxlbikgcmV0dXJuIGxlblxuICBpZiAoaW5kZXggPj0gMCkgcmV0dXJuIGluZGV4XG4gIGluZGV4ICs9IGxlblxuICBpZiAoaW5kZXggPj0gMCkgcmV0dXJuIGluZGV4XG4gIHJldHVybiAwXG59XG5cbmZ1bmN0aW9uIGNvZXJjZSAobGVuZ3RoKSB7XG4gIC8vIENvZXJjZSBsZW5ndGggdG8gYSBudW1iZXIgKHBvc3NpYmx5IE5hTiksIHJvdW5kIHVwXG4gIC8vIGluIGNhc2UgaXQncyBmcmFjdGlvbmFsIChlLmcuIDEyMy40NTYpIHRoZW4gZG8gYVxuICAvLyBkb3VibGUgbmVnYXRlIHRvIGNvZXJjZSBhIE5hTiB0byAwLiBFYXN5LCByaWdodD9cbiAgbGVuZ3RoID0gfn5NYXRoLmNlaWwoK2xlbmd0aClcbiAgcmV0dXJuIGxlbmd0aCA8IDAgPyAwIDogbGVuZ3RoXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkgKHN1YmplY3QpIHtcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChzdWJqZWN0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzdWJqZWN0KSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xuICB9KShzdWJqZWN0KVxufVxuXG5mdW5jdGlvbiBpc0FycmF5aXNoIChzdWJqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5KHN1YmplY3QpIHx8IEJ1ZmZlci5pc0J1ZmZlcihzdWJqZWN0KSB8fFxuICAgICAgc3ViamVjdCAmJiB0eXBlb2Ygc3ViamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIHR5cGVvZiBzdWJqZWN0Lmxlbmd0aCA9PT0gJ251bWJlcidcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIHZhciBiID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBpZiAoYiA8PSAweDdGKVxuICAgICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpXG4gICAgZWxzZSB7XG4gICAgICB2YXIgc3RhcnQgPSBpXG4gICAgICBpZiAoYiA+PSAweEQ4MDAgJiYgYiA8PSAweERGRkYpIGkrK1xuICAgICAgdmFyIGggPSBlbmNvZGVVUklDb21wb25lbnQoc3RyLnNsaWNlKHN0YXJ0LCBpKzEpKS5zdWJzdHIoMSkuc3BsaXQoJyUnKVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBoLmxlbmd0aDsgaisrKVxuICAgICAgICBieXRlQXJyYXkucHVzaChwYXJzZUludChoW2pdLCAxNikpXG4gICAgfVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KHN0cilcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBwb3NcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSlcbiAgICAgIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gZGVjb2RlVXRmOENoYXIgKHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweEZGRkQpIC8vIFVURiA4IGludmFsaWQgY2hhclxuICB9XG59XG5cbi8qXG4gKiBXZSBoYXZlIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSB2YWx1ZSBpcyBhIHZhbGlkIGludGVnZXIuIFRoaXMgbWVhbnMgdGhhdCBpdFxuICogaXMgbm9uLW5lZ2F0aXZlLiBJdCBoYXMgbm8gZnJhY3Rpb25hbCBjb21wb25lbnQgYW5kIHRoYXQgaXQgZG9lcyBub3RcbiAqIGV4Y2VlZCB0aGUgbWF4aW11bSBhbGxvd2VkIHZhbHVlLlxuICovXG5mdW5jdGlvbiB2ZXJpZnVpbnQgKHZhbHVlLCBtYXgpIHtcbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdjYW5ub3Qgd3JpdGUgYSBub24tbnVtYmVyIGFzIGEgbnVtYmVyJylcbiAgYXNzZXJ0KHZhbHVlID49IDAsICdzcGVjaWZpZWQgYSBuZWdhdGl2ZSB2YWx1ZSBmb3Igd3JpdGluZyBhbiB1bnNpZ25lZCB2YWx1ZScpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBpcyBsYXJnZXIgdGhhbiBtYXhpbXVtIHZhbHVlIGZvciB0eXBlJylcbiAgYXNzZXJ0KE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZSwgJ3ZhbHVlIGhhcyBhIGZyYWN0aW9uYWwgY29tcG9uZW50Jylcbn1cblxuZnVuY3Rpb24gdmVyaWZzaW50ICh2YWx1ZSwgbWF4LCBtaW4pIHtcbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdjYW5ub3Qgd3JpdGUgYSBub24tbnVtYmVyIGFzIGEgbnVtYmVyJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGxhcmdlciB0aGFuIG1heGltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydCh2YWx1ZSA+PSBtaW4sICd2YWx1ZSBzbWFsbGVyIHRoYW4gbWluaW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZSwgJ3ZhbHVlIGhhcyBhIGZyYWN0aW9uYWwgY29tcG9uZW50Jylcbn1cblxuZnVuY3Rpb24gdmVyaWZJRUVFNzU0ICh2YWx1ZSwgbWF4LCBtaW4pIHtcbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdjYW5ub3Qgd3JpdGUgYSBub24tbnVtYmVyIGFzIGEgbnVtYmVyJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGxhcmdlciB0aGFuIG1heGltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydCh2YWx1ZSA+PSBtaW4sICd2YWx1ZSBzbWFsbGVyIHRoYW4gbWluaW11bSBhbGxvd2VkIHZhbHVlJylcbn1cblxuZnVuY3Rpb24gYXNzZXJ0ICh0ZXN0LCBtZXNzYWdlKSB7XG4gIGlmICghdGVzdCkgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgfHwgJ0ZhaWxlZCBhc3NlcnRpb24nKVxufVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm9NZnBBblwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qc1wiLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlclwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbnZhciBsb29rdXAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbjsoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG4gIHZhciBBcnIgPSAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKVxuICAgID8gVWludDhBcnJheVxuICAgIDogQXJyYXlcblxuXHR2YXIgUExVUyAgID0gJysnLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIICA9ICcvJy5jaGFyQ29kZUF0KDApXG5cdHZhciBOVU1CRVIgPSAnMCcuY2hhckNvZGVBdCgwKVxuXHR2YXIgTE9XRVIgID0gJ2EnLmNoYXJDb2RlQXQoMClcblx0dmFyIFVQUEVSICA9ICdBJy5jaGFyQ29kZUF0KDApXG5cblx0ZnVuY3Rpb24gZGVjb2RlIChlbHQpIHtcblx0XHR2YXIgY29kZSA9IGVsdC5jaGFyQ29kZUF0KDApXG5cdFx0aWYgKGNvZGUgPT09IFBMVVMpXG5cdFx0XHRyZXR1cm4gNjIgLy8gJysnXG5cdFx0aWYgKGNvZGUgPT09IFNMQVNIKVxuXHRcdFx0cmV0dXJuIDYzIC8vICcvJ1xuXHRcdGlmIChjb2RlIDwgTlVNQkVSKVxuXHRcdFx0cmV0dXJuIC0xIC8vbm8gbWF0Y2hcblx0XHRpZiAoY29kZSA8IE5VTUJFUiArIDEwKVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBOVU1CRVIgKyAyNiArIDI2XG5cdFx0aWYgKGNvZGUgPCBVUFBFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBVUFBFUlxuXHRcdGlmIChjb2RlIDwgTE9XRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gTE9XRVIgKyAyNlxuXHR9XG5cblx0ZnVuY3Rpb24gYjY0VG9CeXRlQXJyYXkgKGI2NCkge1xuXHRcdHZhciBpLCBqLCBsLCB0bXAsIHBsYWNlSG9sZGVycywgYXJyXG5cblx0XHRpZiAoYjY0Lmxlbmd0aCAlIDQgPiAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuXHRcdH1cblxuXHRcdC8vIHRoZSBudW1iZXIgb2YgZXF1YWwgc2lnbnMgKHBsYWNlIGhvbGRlcnMpXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHR3byBwbGFjZWhvbGRlcnMsIHRoYW4gdGhlIHR3byBjaGFyYWN0ZXJzIGJlZm9yZSBpdFxuXHRcdC8vIHJlcHJlc2VudCBvbmUgYnl0ZVxuXHRcdC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lLCB0aGVuIHRoZSB0aHJlZSBjaGFyYWN0ZXJzIGJlZm9yZSBpdCByZXByZXNlbnQgMiBieXRlc1xuXHRcdC8vIHRoaXMgaXMganVzdCBhIGNoZWFwIGhhY2sgdG8gbm90IGRvIGluZGV4T2YgdHdpY2Vcblx0XHR2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXHRcdHBsYWNlSG9sZGVycyA9ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAyKSA/IDIgOiAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMSkgPyAxIDogMFxuXG5cdFx0Ly8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5cdFx0YXJyID0gbmV3IEFycihiNjQubGVuZ3RoICogMyAvIDQgLSBwbGFjZUhvbGRlcnMpXG5cblx0XHQvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG5cdFx0bCA9IHBsYWNlSG9sZGVycyA+IDAgPyBiNjQubGVuZ3RoIC0gNCA6IGI2NC5sZW5ndGhcblxuXHRcdHZhciBMID0gMFxuXG5cdFx0ZnVuY3Rpb24gcHVzaCAodikge1xuXHRcdFx0YXJyW0wrK10gPSB2XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgaiA9IDA7IGkgPCBsOyBpICs9IDQsIGogKz0gMykge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxOCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCAxMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA8PCA2KSB8IGRlY29kZShiNjQuY2hhckF0KGkgKyAzKSlcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMDAwKSA+PiAxNilcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMCkgPj4gOClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRpZiAocGxhY2VIb2xkZXJzID09PSAyKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPj4gNClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9IGVsc2UgaWYgKHBsYWNlSG9sZGVycyA9PT0gMSkge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxMCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCA0KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpID4+IDIpXG5cdFx0XHRwdXNoKCh0bXAgPj4gOCkgJiAweEZGKVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdHJldHVybiBhcnJcblx0fVxuXG5cdGZ1bmN0aW9uIHVpbnQ4VG9CYXNlNjQgKHVpbnQ4KSB7XG5cdFx0dmFyIGksXG5cdFx0XHRleHRyYUJ5dGVzID0gdWludDgubGVuZ3RoICUgMywgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcblx0XHRcdG91dHB1dCA9IFwiXCIsXG5cdFx0XHR0ZW1wLCBsZW5ndGhcblxuXHRcdGZ1bmN0aW9uIGVuY29kZSAobnVtKSB7XG5cdFx0XHRyZXR1cm4gbG9va3VwLmNoYXJBdChudW0pXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcblx0XHRcdHJldHVybiBlbmNvZGUobnVtID4+IDE4ICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDEyICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDYgJiAweDNGKSArIGVuY29kZShudW0gJiAweDNGKVxuXHRcdH1cblxuXHRcdC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcblx0XHRmb3IgKGkgPSAwLCBsZW5ndGggPSB1aW50OC5sZW5ndGggLSBleHRyYUJ5dGVzOyBpIDwgbGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdHRlbXAgPSAodWludDhbaV0gPDwgMTYpICsgKHVpbnQ4W2kgKyAxXSA8PCA4KSArICh1aW50OFtpICsgMl0pXG5cdFx0XHRvdXRwdXQgKz0gdHJpcGxldFRvQmFzZTY0KHRlbXApXG5cdFx0fVxuXG5cdFx0Ly8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuXHRcdHN3aXRjaCAoZXh0cmFCeXRlcykge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0ZW1wID0gdWludDhbdWludDgubGVuZ3RoIC0gMV1cblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDIpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz09J1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0ZW1wID0gKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDJdIDw8IDgpICsgKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMTApXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPj4gNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDIpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9J1xuXHRcdFx0XHRicmVha1xuXHRcdH1cblxuXHRcdHJldHVybiBvdXRwdXRcblx0fVxuXG5cdGV4cG9ydHMudG9CeXRlQXJyYXkgPSBiNjRUb0J5dGVBcnJheVxuXHRleHBvcnRzLmZyb21CeXRlQXJyYXkgPSB1aW50OFRvQmFzZTY0XG59KHR5cGVvZiBleHBvcnRzID09PSAndW5kZWZpbmVkJyA/ICh0aGlzLmJhc2U2NGpzID0ge30pIDogZXhwb3J0cykpXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwib01mcEFuXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliL2I2NC5qc1wiLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYlwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbmV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sXG4gICAgICBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxLFxuICAgICAgZU1heCA9ICgxIDw8IGVMZW4pIC0gMSxcbiAgICAgIGVCaWFzID0gZU1heCA+PiAxLFxuICAgICAgbkJpdHMgPSAtNyxcbiAgICAgIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMCxcbiAgICAgIGQgPSBpc0xFID8gLTEgOiAxLFxuICAgICAgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXTtcblxuICBpICs9IGQ7XG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gIHMgPj49ICgtbkJpdHMpO1xuICBuQml0cyArPSBlTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gZSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KTtcblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgZSA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IG1MZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSBtICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpO1xuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhcztcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpO1xuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbik7XG4gICAgZSA9IGUgLSBlQmlhcztcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKTtcbn07XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbihidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgYyxcbiAgICAgIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDEsXG4gICAgICBlTWF4ID0gKDEgPDwgZUxlbikgLSAxLFxuICAgICAgZUJpYXMgPSBlTWF4ID4+IDEsXG4gICAgICBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMCksXG4gICAgICBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSksXG4gICAgICBkID0gaXNMRSA/IDEgOiAtMSxcbiAgICAgIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDA7XG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSk7XG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDA7XG4gICAgZSA9IGVNYXg7XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpO1xuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLTtcbiAgICAgIGMgKj0gMjtcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKys7XG4gICAgICBjIC89IDI7XG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMDtcbiAgICAgIGUgPSBlTWF4O1xuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSBlICsgZUJpYXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSAwO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpO1xuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG07XG4gIGVMZW4gKz0gbUxlbjtcbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KTtcblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjg7XG59O1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm9NZnBBblwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qc1wiLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaWVlZTc1NFwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gZXYuc291cmNlO1xuICAgICAgICAgICAgaWYgKChzb3VyY2UgPT09IHdpbmRvdyB8fCBzb3VyY2UgPT09IG51bGwpICYmIGV2LmRhdGEgPT09ICdwcm9jZXNzLXRpY2snKSB7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ3Byb2Nlc3MtdGljaycsICcqJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59KSgpO1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn1cblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm9NZnBBblwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3NcIikiXX0=
