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
	
	var _jsCommon = __webpack_require__(4);
	
	var _jsCommon2 = _interopRequireDefault(_jsCommon);
	
	console.log((0, _jsCommon2['default'])('world'));
	
	(0, _jquery2['default'])('#div1').on('click', function () {
	
	    __webpack_require__.e/* nsure */(1, function () {
	        console.log(__webpack_require__(6)(_jsCommon2['default'])('child3'));
	        //console.log(require('child1')(10));
	    });
	});
	
	(0, _jquery2['default'])('#div2').on('click', function () {
	
	    __webpack_require__.e/* require */(2, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(7)]; (function (child2) {
	        console.log(child2(10));
	    }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	});

/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	/**
	 * Created by Rayr Lee on 2015/12/10.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (name) {
	  return 'hello ' + name + ' !';
	};
	
	module.exports = exports['default'];

/***/ }
]);
//# sourceMappingURL=bundle.js.map