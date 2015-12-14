webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _underscore = __webpack_require__(3);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _angular = __webpack_require__(4);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(6);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _oclazyload = __webpack_require__(7);
	
	var _oclazyload2 = _interopRequireDefault(_oclazyload);
	
	var _commonCommonRouter = __webpack_require__(8);
	
	var _commonCommonRouter2 = _interopRequireDefault(_commonCommonRouter);
	
	var _commonCommonService = __webpack_require__(15);
	
	var _commonCommonService2 = _interopRequireDefault(_commonCommonService);
	
	var _commonCommonController = __webpack_require__(16);
	
	var _commonCommonController2 = _interopRequireDefault(_commonCommonController);
	
	var app = _angular2['default'].module('myApp', [_angularUiRouter2['default'], 'oc.lazyLoad', _commonCommonService2['default'].name, _commonCommonController2['default'].name]);
	
	app.run(["$rootScope", "$state", "$stateParams", function ($rootScope, $state, $stateParams) {
	
	    $rootScope.$state = $state;
	    $rootScope.$stateParams = $stateParams;
	    $rootScope.$on('$stateChangeStart', function () {});
	}]);
	
	//路由器
	app.config(_commonCommonRouter2['default']);
	
	_angular2['default'].bootstrap(document, [app.name], { strictDi: true });

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Rayr Lee on 2015/12/14.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _underscore = __webpack_require__(3);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	exports['default'] = ["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
	
	    'ngInject';
	    $urlRouterProvider.otherwise('/index');
	
	    $stateProvider.state('index', {
	        url: '/index',
	        views: {
	            main: {
	                template: __webpack_require__(9),
	                controller: 'IndexController as vm',
	                resolve: {
	                    loadIndexCtrl: ["$q", "$ocLazyLoad", function loadIndexCtrl($q, $ocLazyLoad) {
	                        return $q(function (resolve) {
	                            __webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(11), __webpack_require__(12)]; (function (module1, module2) {
	                                var _mdoule = _underscore2['default'].toArray(arguments);
	                                $ocLazyLoad.load(_mdoule);
	                                resolve([module1.controller, module2.directive]);
	                            }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	                        });
	                    }]
	                }
	            }
	        }
	    });
	
	    $stateProvider.state('person', {
	        url: '/person',
	        views: {
	            main: {
	                template: __webpack_require__(10),
	                controller: 'PersonController as vm',
	                resolve: {
	                    loadIndexCtrl: ["$q", "$ocLazyLoad", function loadIndexCtrl($q, $ocLazyLoad) {
	                        return $q(function (resolve) {
	                            __webpack_require__.e/* require */(2, function(__webpack_require__) { /* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(14)]; (function (module) {
	                                $ocLazyLoad.load({ name: module.name });
	                                resolve(module.controller);
	                            }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));
	/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)(module)))});
	                        });
	                    }]
	                }
	            }
	        }
	    });
	    // 常见问题&帮助界面
	}];
	
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<h1>{{vm.title}}</h1>\n<input ng-enter=\"vm.show('test')\">"

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<h1>{{vm.title}}</h1>"

/***/ },
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	/**
	 * Created by Rayr Lee on 15/12/10.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var commonService = angular.module('commonService', []);
	
	commonService.factory('$_test', function () {
	    'ngInject';
	    return {
	        add: function add(str) {
	            return 'hello ' + str + ' !';
	        }
	    };
	});
	
	exports['default'] = commonService;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Rayr Lee on 2015/12/14.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _commonService = __webpack_require__(15);
	
	var _commonService2 = _interopRequireDefault(_commonService);
	
	var Test = (function () {
	    function Test($timeout, $_test) {
	        'ngInject';
	
	        _classCallCheck(this, Test);
	
	        this.str = $_test.add('lilei');
	        this.$timeout = $timeout;
	    }
	    Test.$inject = ["$timeout", "$_test"];
	
	    _createClass(Test, [{
	        key: 'show',
	        value: function show() {
	            var _this = this;
	
	            this.$timeout(function () {
	                console.log(_this.str);
	            }, 2000);
	        }
	    }]);
	
	    return Test;
	})();
	
	exports['default'] = angular.module('commonController', [_commonService2['default'].name]).controller('testController', Test);
	module.exports = exports['default'];

/***/ }
]);
//# sourceMappingURL=bundle.js.map