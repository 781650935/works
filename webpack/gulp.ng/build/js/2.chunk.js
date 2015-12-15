webpackJsonp([2],{

/***/ 13:
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },

/***/ 14:
/***/ function(module, exports) {

	/**
	 * Created by Rayr Lee on 15/12/14.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var PersonController = function PersonController() {
	    'ngInject';
	
	    _classCallCheck(this, PersonController);
	
	    this.title = '这是个人中心!';
	};
	
	exports['default'] = angular.module('PersonModule', []).controller('PersonController', PersonController);
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=2.chunk.js.map