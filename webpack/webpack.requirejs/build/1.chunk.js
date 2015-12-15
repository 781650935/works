webpackJsonp([1],{

/***/ 5:
/***/ function(module, exports) {

	/**
	 * Created by Rayr Lee on 2015/12/9.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	console.log('child1');
	
	exports['default'] = function (num) {
	  return 40 + num;
	};
	
	module.exports = exports['default'];

/***/ },

/***/ 6:
/***/ function(module, exports) {

	/**
	 * Created by Rayr Lee on 2015/12/9.
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports["default"] = function (fn) {
	  return function (name) {
	    return fn(name);
	  };
	};
	
	module.exports = exports["default"];

/***/ }

});
//# sourceMappingURL=1.chunk.js.map