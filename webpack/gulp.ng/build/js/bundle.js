webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(2);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(4);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _oclazyload = __webpack_require__(5);
	
	var _oclazyload2 = _interopRequireDefault(_oclazyload);
	
	var _commonsService = __webpack_require__(6);
	
	var _commonsService2 = _interopRequireDefault(_commonsService);
	
	var app = _angular2['default'].module('myApp', [_angularUiRouter2['default'], 'oc.lazyLoad', _commonsService2['default'].name]);
	
	app.controller('test', ['$scope', '$_test', function ($scope, $_test) {
	
	    $scope.str = $_test.add('lilei');
	}]);
	
	//angular.bootstrap(document, app.name, {strictDi: true});

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
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

/***/ }
]);
//# sourceMappingURL=bundle.js.map