/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var $__index_46_config__,
	    $__index_46_route__,
	    $__index_46_run__,
	    $__main_47_main_46_controller__,
	    $___46__46__47_app_47_components_47_githubContributor_47_githubContributor_46_service__,
	    $___46__46__47_app_47_components_47_webDevTec_47_webDevTec_46_service__,
	    $___46__46__47_app_47_components_47_navbar_47_navbar_46_directive__,
	    $___46__46__47_app_47_components_47_malarkey_47_malarkey_46_directive__;
	var config = ($__index_46_config__ = __webpack_require__(1), $__index_46_config__ && $__index_46_config__.__esModule && $__index_46_config__ || {default: $__index_46_config__}).config;
	var routerConfig = ($__index_46_route__ = __webpack_require__(2), $__index_46_route__ && $__index_46_route__.__esModule && $__index_46_route__ || {default: $__index_46_route__}).routerConfig;
	var runBlock = ($__index_46_run__ = __webpack_require__(3), $__index_46_run__ && $__index_46_run__.__esModule && $__index_46_run__ || {default: $__index_46_run__}).runBlock;
	var MainController = ($__main_47_main_46_controller__ = __webpack_require__(4), $__main_47_main_46_controller__ && $__main_47_main_46_controller__.__esModule && $__main_47_main_46_controller__ || {default: $__main_47_main_46_controller__}).MainController;
	var GithubContributorService = ($___46__46__47_app_47_components_47_githubContributor_47_githubContributor_46_service__ = __webpack_require__(5), $___46__46__47_app_47_components_47_githubContributor_47_githubContributor_46_service__ && $___46__46__47_app_47_components_47_githubContributor_47_githubContributor_46_service__.__esModule && $___46__46__47_app_47_components_47_githubContributor_47_githubContributor_46_service__ || {default: $___46__46__47_app_47_components_47_githubContributor_47_githubContributor_46_service__}).GithubContributorService;
	var WebDevTecService = ($___46__46__47_app_47_components_47_webDevTec_47_webDevTec_46_service__ = __webpack_require__(6), $___46__46__47_app_47_components_47_webDevTec_47_webDevTec_46_service__ && $___46__46__47_app_47_components_47_webDevTec_47_webDevTec_46_service__.__esModule && $___46__46__47_app_47_components_47_webDevTec_47_webDevTec_46_service__ || {default: $___46__46__47_app_47_components_47_webDevTec_47_webDevTec_46_service__}).WebDevTecService;
	var NavbarDirective = ($___46__46__47_app_47_components_47_navbar_47_navbar_46_directive__ = __webpack_require__(7), $___46__46__47_app_47_components_47_navbar_47_navbar_46_directive__ && $___46__46__47_app_47_components_47_navbar_47_navbar_46_directive__.__esModule && $___46__46__47_app_47_components_47_navbar_47_navbar_46_directive__ || {default: $___46__46__47_app_47_components_47_navbar_47_navbar_46_directive__}).NavbarDirective;
	var MalarkeyDirective = ($___46__46__47_app_47_components_47_malarkey_47_malarkey_46_directive__ = __webpack_require__(8), $___46__46__47_app_47_components_47_malarkey_47_malarkey_46_directive__ && $___46__46__47_app_47_components_47_malarkey_47_malarkey_46_directive__.__esModule && $___46__46__47_app_47_components_47_malarkey_47_malarkey_46_directive__ || {default: $___46__46__47_app_47_components_47_malarkey_47_malarkey_46_directive__}).MalarkeyDirective;
	angular.module('angularGulp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr']).constant('malarkey', malarkey).constant('moment', moment).config(config).config(routerConfig).run(runBlock).service('githubContributor', GithubContributorService).service('webDevTec', WebDevTecService).controller('MainController', MainController).directive('acmeNavbar', NavbarDirective).directive('acmeMalarkey', MalarkeyDirective);
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  config: {get: function() {
	      return config;
	    }},
	  __esModule: {value: true}
	});
	function config($logProvider, toastrConfig) {
	  'ngInject';
	  $logProvider.debugEnabled(true);
	  toastrConfig.allowHtml = true;
	  toastrConfig.timeOut = 3000;
	  toastrConfig.positionClass = 'toast-top-right';
	  toastrConfig.preventDuplicates = true;
	  toastrConfig.progressBar = true;
	}
	config.$inject = ["$logProvider", "toastrConfig"];
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  routerConfig: {get: function() {
	      return routerConfig;
	    }},
	  __esModule: {value: true}
	});
	function routerConfig($stateProvider, $urlRouterProvider) {
	  'ngInject';
	  $stateProvider.state('home', {
	    url: '/',
	    templateUrl: 'app/main/main.html',
	    controller: 'MainController',
	    controllerAs: 'main'
	  });
	  $urlRouterProvider.otherwise('/');
	}
	routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  runBlock: {get: function() {
	      return runBlock;
	    }},
	  __esModule: {value: true}
	});
	function runBlock($log) {
	  'ngInject';
	  $log.debug('runBlock end');
	}
	runBlock.$inject = ["$log"];
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  MainController: {get: function() {
	      return MainController;
	    }},
	  __esModule: {value: true}
	});
	var MainController = function MainController($timeout, webDevTec, toastr) {
	  'ngInject';
	  this.awesomeThings = [];
	  this.classAnimation = '';
	  this.creationDate = 1447238751574;
	  this.toastr = toastr;
	  this.activate($timeout, webDevTec);
	};
	MainController.$inject = ["$timeout", "webDevTec", "toastr"];
	($traceurRuntime.createClass)(MainController, {
	  activate: function($timeout, webDevTec) {
	    var $__0 = this;
	    this.getWebDevTec(webDevTec);
	    $timeout((function() {
	      $__0.classAnimation = 'rubberBand';
	    }), 4000);
	  },
	  getWebDevTec: function(webDevTec) {
	    this.awesomeThings = webDevTec.getTec();
	    angular.forEach(this.awesomeThings, (function(awesomeThing) {
	      awesomeThing.rank = Math.random();
	    }));
	  },
	  showToastr: function() {
	    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
	    this.classAnimation = '';
	  }
	}, {});
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  GithubContributorService: {get: function() {
	      return GithubContributorService;
	    }},
	  __esModule: {value: true}
	});
	var GithubContributorService = function GithubContributorService($log, $http) {
	  'ngInject';
	  this.$log = $log;
	  this.$http = $http;
	  this.apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';
	};
	GithubContributorService.$inject = ["$log", "$http"];
	($traceurRuntime.createClass)(GithubContributorService, {getContributors: function(limit) {
	    var $__0 = this;
	    if (!limit) {
	      limit = 30;
	    }
	    return this.$http.get(this.apiHost + '/contributors?per_page=' + limit).then((function(response) {
	      return response.data;
	    })).catch((function(error) {
	      $__0.$log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
	    }));
	  }}, {});
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  WebDevTecService: {get: function() {
	      return WebDevTecService;
	    }},
	  __esModule: {value: true}
	});
	var WebDevTecService = function WebDevTecService() {
	  'ngInject';
	  this.data = [{
	    'title': 'AngularJS',
	    'url': 'https://angularjs.org/',
	    'description': 'HTML enhanced for web apps!',
	    'logo': 'angular.png'
	  }, {
	    'title': 'BrowserSync',
	    'url': 'http://browsersync.io/',
	    'description': 'Time-saving synchronised browser testing.',
	    'logo': 'browsersync.png'
	  }, {
	    'title': 'GulpJS',
	    'url': 'http://gulpjs.com/',
	    'description': 'The streaming build system.',
	    'logo': 'gulp.png'
	  }, {
	    'title': 'Jasmine',
	    'url': 'http://jasmine.github.io/',
	    'description': 'Behavior-Driven JavaScript.',
	    'logo': 'jasmine.png'
	  }, {
	    'title': 'Karma',
	    'url': 'http://karma-runner.github.io/',
	    'description': 'Spectacular Test Runner for JavaScript.',
	    'logo': 'karma.png'
	  }, {
	    'title': 'Protractor',
	    'url': 'https://github.com/angular/protractor',
	    'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
	    'logo': 'protractor.png'
	  }, {
	    'title': 'Bootstrap',
	    'url': 'http://getbootstrap.com/',
	    'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
	    'logo': 'bootstrap.png'
	  }, {
	    'title': 'Angular UI Bootstrap',
	    'url': 'http://angular-ui.github.io/bootstrap/',
	    'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
	    'logo': 'ui-bootstrap.png'
	  }, {
	    'title': 'ES6 (Traceur)',
	    'url': 'https://github.com/google/traceur-compiler',
	    'description': 'A JavaScript.next-to-JavaScript-of-today compiler that allows you to use features from the future today.',
	    'logo': 'traceur.png'
	  }, {
	    'key': 'jade',
	    'title': 'Jade',
	    'url': 'http://jade-lang.com/',
	    'description': 'Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node.',
	    'logo': 'jade.png'
	  }];
	};
	($traceurRuntime.createClass)(WebDevTecService, {getTec: function() {
	    return this.data;
	  }}, {});
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  NavbarDirective: {get: function() {
	      return NavbarDirective;
	    }},
	  __esModule: {value: true}
	});
	function NavbarDirective() {
	  'ngInject';
	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/navbar/navbar.html',
	    scope: {creationDate: '='},
	    controller: NavbarController,
	    controllerAs: 'vm',
	    bindToController: true
	  };
	  return directive;
	}
	var NavbarController = function NavbarController(moment) {
	  'ngInject';
	  this.relativeDate = moment(this.creationDate).fromNow();
	};
	NavbarController.$inject = ["moment"];
	($traceurRuntime.createClass)(NavbarController, {}, {});
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperties(exports, {
	  MalarkeyDirective: {get: function() {
	      return MalarkeyDirective;
	    }},
	  __esModule: {value: true}
	});
	function MalarkeyDirective(malarkey) {
	  'ngInject';
	  var directive = {
	    restrict: 'E',
	    scope: {extraValues: '='},
	    template: '&nbsp;',
	    link: linkFunc,
	    controller: MalarkeyController,
	    controllerAs: 'vm'
	  };
	  return directive;
	  function linkFunc(scope, el, attr, vm) {
	    var watcher;
	    var typist = malarkey(el[0], {
	      typeSpeed: 40,
	      deleteSpeed: 40,
	      pauseDelay: 800,
	      loop: true,
	      postfix: ' '
	    });
	    el.addClass('acme-malarkey');
	    angular.forEach(scope.extraValues, (function(value) {
	      typist.type(value).pause().delete();
	    }));
	    watcher = scope.$watch('vm.contributors', (function() {
	      angular.forEach(vm.contributors, (function(contributor) {
	        typist.type(contributor.login).pause().delete();
	      }));
	    }));
	    scope.$on('$destroy', (function() {
	      watcher();
	    }));
	  }
	}
	MalarkeyDirective.$inject = ["malarkey"];
	var MalarkeyController = function MalarkeyController($log, githubContributor) {
	  'ngInject';
	  this.$log = $log;
	  this.contributors = [];
	  this.activate(githubContributor);
	};
	MalarkeyController.$inject = ["$log", "githubContributor"];
	($traceurRuntime.createClass)(MalarkeyController, {
	  activate: function(githubContributor) {
	    var $__0 = this;
	    return this.getContributors(githubContributor).then((function() {
	      $__0.$log.info('Activated Contributors View');
	    }));
	  },
	  getContributors: function(githubContributor) {
	    var $__0 = this;
	    return githubContributor.getContributors(10).then((function(data) {
	      $__0.contributors = data;
	      return $__0.contributors;
	    }));
	  }
	}, {});
	
	//# sourceMappingURL=<compileOutput>


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTFlOTU5MWRkMDBmZTY3NzIzMmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanM/YzNjMCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcuanM/MjY5MiIsIndlYnBhY2s6Ly8vQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vL0B0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci80Iiwid2VicGFjazovLy9AdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMiIsIndlYnBhY2s6Ly8vQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzMiLCJ3ZWJwYWNrOi8vL0B0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci81Iiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucm91dGUuanM/ZWUyZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzPzFjZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5ydW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qcz9mMmRmIiwid2VicGFjazovLy8uL3NyYy9hcHAvbWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vL0B0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci83Iiwid2VicGFjazovLy9AdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvOCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcz81MjE3Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanM/OWVlYiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcz8zMTY5Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzP2Y1ZDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3BDQTtBQ0RBLEtBQUk7S0FDQTtLQUNBO0tBQ0E7S0FDQTtLQUNBO0tBQ0E7S0FDQTtBQUNKLEtEUFMsU0VGUix3QkFBb0Isb0JBQU0sSUFDbkIsd0JBQXFCLG1DQUEyQix3QkFBMkIsVUFBTSx1QkFBcUI7QURTOUcsS0RQUyxlRUhSLHVCQUFvQixvQkFBTSxJQUNuQix1QkFB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bUI7R0FDakM7R0FFQSxLQUFHLE9BQVM7R0FDWixLQUFHLGVBQWlCO0dBRXBCLEtBQUcsU0FBVzs7O0FQcER0QixrQkFBZSxhQUFhO0dPdUR4QixtQkFBUyxtQkFBZ0I7S0NOekIsSUFBSSxPQUFPO0tET1AsT0FBTyxLQUFHLGdCQUFrQixtQkFBaUIsTUFBTyxXQUFNO09BQ3RELFVBQVEsS0FBTzs7O0dBSXZCLDBCQUFnQixtQkFBZ0I7S0NOaEMsSUFBSSxPQUFPO0tET1AsT0FBTyxrQkFBZ0IsZ0JBQWtCLElBQUUsTUFBTyxTQUFDLE1BQVM7T0FDeEQsb0JBQW9CO09BRXBCLE9BQU87OztJQ0poQiIsImZpbGUiOiJpbmRleC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDUxZTk1OTFkZDAwZmU2NzcyMzJmXG4gKiovIiwiLyogZ2xvYmFsIG1hbGFya2V5OmZhbHNlLCBtb21lbnQ6ZmFsc2UgKi9cblxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9pbmRleC5jb25maWcnO1xuaW1wb3J0IHsgcm91dGVyQ29uZmlnIH0gZnJvbSAnLi9pbmRleC5yb3V0ZSc7XG5pbXBvcnQgeyBydW5CbG9jayB9IGZyb20gJy4vaW5kZXgucnVuJztcbmltcG9ydCB7IE1haW5Db250cm9sbGVyIH0gZnJvbSAnLi9tYWluL21haW4uY29udHJvbGxlcic7XG5pbXBvcnQgeyBHaXRodWJDb250cmlidXRvclNlcnZpY2UgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IFdlYkRldlRlY1NlcnZpY2UgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmF2YmFyRGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWFsYXJrZXlEaXJlY3RpdmUgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUnO1xuXG5hbmd1bGFyLm1vZHVsZSgnYW5ndWxhckd1bHAnLCBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLCAnbmdBcmlhJywgJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICd0b2FzdHInXSlcbiAgICAuY29uc3RhbnQoJ21hbGFya2V5JywgbWFsYXJrZXkpXG4gICAgLmNvbnN0YW50KCdtb21lbnQnLCBtb21lbnQpXG4gICAgLmNvbmZpZyhjb25maWcpXG4gICAgLmNvbmZpZyhyb3V0ZXJDb25maWcpXG4gICAgLnJ1bihydW5CbG9jaylcbiAgICAuc2VydmljZSgnZ2l0aHViQ29udHJpYnV0b3InLCBHaXRodWJDb250cmlidXRvclNlcnZpY2UpXG4gICAgLnNlcnZpY2UoJ3dlYkRldlRlYycsIFdlYkRldlRlY1NlcnZpY2UpXG4gICAgLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgTWFpbkNvbnRyb2xsZXIpXG4gICAgLmRpcmVjdGl2ZSgnYWNtZU5hdmJhcicsIE5hdmJhckRpcmVjdGl2ZSkgLy/mjIfku6RcbiAgICAuZGlyZWN0aXZlKCdhY21lTWFsYXJrZXknLCBNYWxhcmtleURpcmVjdGl2ZSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvaW5kZXgubW9kdWxlLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgJF9faW5kZXhfNDZfY29uZmlnX18sXG4gICAgJF9faW5kZXhfNDZfcm91dGVfXyxcbiAgICAkX19pbmRleF80Nl9ydW5fXyxcbiAgICAkX19tYWluXzQ3X21haW5fNDZfY29udHJvbGxlcl9fLFxuICAgICRfX180Nl9fNDZfXzQ3X2FwcF80N19jb21wb25lbnRzXzQ3X2dpdGh1YkNvbnRyaWJ1dG9yXzQ3X2dpdGh1YkNvbnRyaWJ1dG9yXzQ2X3NlcnZpY2VfXyxcbiAgICAkX19fNDZfXzQ2X180N19hcHBfNDdfY29tcG9uZW50c180N193ZWJEZXZUZWNfNDdfd2ViRGV2VGVjXzQ2X3NlcnZpY2VfXyxcbiAgICAkX19fNDZfXzQ2X180N19hcHBfNDdfY29tcG9uZW50c180N19uYXZiYXJfNDdfbmF2YmFyXzQ2X2RpcmVjdGl2ZV9fLFxuICAgICRfX180Nl9fNDZfXzQ3X2FwcF80N19jb21wb25lbnRzXzQ3X21hbGFya2V5XzQ3X21hbGFya2V5XzQ2X2RpcmVjdGl2ZV9fO1xudmFyIGNvbmZpZyA9ICgkX19pbmRleF80Nl9jb25maWdfXyA9IHJlcXVpcmUoXCIuL2luZGV4LmNvbmZpZ1wiKSwgJF9faW5kZXhfNDZfY29uZmlnX18gJiYgJF9faW5kZXhfNDZfY29uZmlnX18uX19lc01vZHVsZSAmJiAkX19pbmRleF80Nl9jb25maWdfXyB8fCB7ZGVmYXVsdDogJF9faW5kZXhfNDZfY29uZmlnX199KS5jb25maWc7XG52YXIgcm91dGVyQ29uZmlnID0gKCRfX2luZGV4XzQ2X3JvdXRlX18gPSByZXF1aXJlKFwiLi9pbmRleC5yb3V0ZVwiKSwgJF9faW5kZXhfNDZfcm91dGVfXyAmJiAkX19pbmRleF80Nl9yb3V0ZV9fLl9fZXNNb2R1bGUgJiYgJF9faW5kZXhfNDZfcm91dGVfXyB8fCB7ZGVmYXVsdDogJF9faW5kZXhfNDZfcm91dGVfX30pLnJvdXRlckNvbmZpZztcbnZhciBydW5CbG9jayA9ICgkX19pbmRleF80Nl9ydW5fXyA9IHJlcXVpcmUoXCIuL2luZGV4LnJ1blwiKSwgJF9faW5kZXhfNDZfcnVuX18gJiYgJF9faW5kZXhfNDZfcnVuX18uX19lc01vZHVsZSAmJiAkX19pbmRleF80Nl9ydW5fXyB8fCB7ZGVmYXVsdDogJF9faW5kZXhfNDZfcnVuX199KS5ydW5CbG9jaztcbnZhciBNYWluQ29udHJvbGxlciA9ICgkX19tYWluXzQ3X21haW5fNDZfY29udHJvbGxlcl9fID0gcmVxdWlyZShcIi4vbWFpbi9tYWluLmNvbnRyb2xsZXJcIiksICRfX21haW5fNDdfbWFpbl80Nl9jb250cm9sbGVyX18gJiYgJF9fbWFpbl80N19tYWluXzQ2X2NvbnRyb2xsZXJfXy5fX2VzTW9kdWxlICYmICRfX21haW5fNDdfbWFpbl80Nl9jb250cm9sbGVyX18gfHwge2RlZmF1bHQ6ICRfX21haW5fNDdfbWFpbl80Nl9jb250cm9sbGVyX199KS5NYWluQ29udHJvbGxlcjtcbnZhciBHaXRodWJDb250cmlidXRvclNlcnZpY2UgPSAoJF9fXzQ2X180Nl9fNDdfYXBwXzQ3X2NvbXBvbmVudHNfNDdfZ2l0aHViQ29udHJpYnV0b3JfNDdfZ2l0aHViQ29udHJpYnV0b3JfNDZfc2VydmljZV9fID0gcmVxdWlyZShcIi4uL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2VcIiksICRfX180Nl9fNDZfXzQ3X2FwcF80N19jb21wb25lbnRzXzQ3X2dpdGh1YkNvbnRyaWJ1dG9yXzQ3X2dpdGh1YkNvbnRyaWJ1dG9yXzQ2X3NlcnZpY2VfXyAmJiAkX19fNDZfXzQ2X180N19hcHBfNDdfY29tcG9uZW50c180N19naXRodWJDb250cmlidXRvcl80N19naXRodWJDb250cmlidXRvcl80Nl9zZXJ2aWNlX18uX19lc01vZHVsZSAmJiAkX19fNDZfXzQ2X180N19hcHBfNDdfY29tcG9uZW50c180N19naXRodWJDb250cmlidXRvcl80N19naXRodWJDb250cmlidXRvcl80Nl9zZXJ2aWNlX18gfHwge2RlZmF1bHQ6ICRfX180Nl9fNDZfXzQ3X2FwcF80N19jb21wb25lbnRzXzQ3X2dpdGh1YkNvbnRyaWJ1dG9yXzQ3X2dpdGh1YkNvbnRyaWJ1dG9yXzQ2X3NlcnZpY2VfX30pLkdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZTtcbnZhciBXZWJEZXZUZWNTZXJ2aWNlID0gKCRfX180Nl9fNDZfXzQ3X2FwcF80N19jb21wb25lbnRzXzQ3X3dlYkRldlRlY180N193ZWJEZXZUZWNfNDZfc2VydmljZV9fID0gcmVxdWlyZShcIi4uL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZVwiKSwgJF9fXzQ2X180Nl9fNDdfYXBwXzQ3X2NvbXBvbmVudHNfNDdfd2ViRGV2VGVjXzQ3X3dlYkRldlRlY180Nl9zZXJ2aWNlX18gJiYgJF9fXzQ2X180Nl9fNDdfYXBwXzQ3X2NvbXBvbmVudHNfNDdfd2ViRGV2VGVjXzQ3X3dlYkRldlRlY180Nl9zZXJ2aWNlX18uX19lc01vZHVsZSAmJiAkX19fNDZfXzQ2X180N19hcHBfNDdfY29tcG9uZW50c180N193ZWJEZXZUZWNfNDdfd2ViRGV2VGVjXzQ2X3NlcnZpY2VfXyB8fCB7ZGVmYXVsdDogJF9fXzQ2X180Nl9fNDdfYXBwXzQ3X2NvbXBvbmVudHNfNDdfd2ViRGV2VGVjXzQ3X3dlYkRldlRlY180Nl9zZXJ2aWNlX199KS5XZWJEZXZUZWNTZXJ2aWNlO1xudmFyIE5hdmJhckRpcmVjdGl2ZSA9ICgkX19fNDZfXzQ2X180N19hcHBfNDdfY29tcG9uZW50c180N19uYXZiYXJfNDdfbmF2YmFyXzQ2X2RpcmVjdGl2ZV9fID0gcmVxdWlyZShcIi4uL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlXCIpLCAkX19fNDZfXzQ2X180N19hcHBfNDdfY29tcG9uZW50c180N19uYXZiYXJfNDdfbmF2YmFyXzQ2X2RpcmVjdGl2ZV9fICYmICRfX180Nl9fNDZfXzQ3X2FwcF80N19jb21wb25lbnRzXzQ3X25hdmJhcl80N19uYXZiYXJfNDZfZGlyZWN0aXZlX18uX19lc01vZHVsZSAmJiAkX19fNDZfXzQ2X180N19hcHBfNDdfY29tcG9uZW50c180N19uYXZiYXJfNDdfbmF2YmFyXzQ2X2RpcmVjdGl2ZV9fIHx8IHtkZWZhdWx0OiAkX19fNDZfXzQ2X180N19hcHBfNDdfY29tcG9uZW50c180N19uYXZiYXJfNDdfbmF2YmFyXzQ2X2RpcmVjdGl2ZV9ffSkuTmF2YmFyRGlyZWN0aXZlO1xudmFyIE1hbGFya2V5RGlyZWN0aXZlID0gKCRfX180Nl9fNDZfXzQ3X2FwcF80N19jb21wb25lbnRzXzQ3X21hbGFya2V5XzQ3X21hbGFya2V5XzQ2X2RpcmVjdGl2ZV9fID0gcmVxdWlyZShcIi4uL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZVwiKSwgJF9fXzQ2X180Nl9fNDdfYXBwXzQ3X2NvbXBvbmVudHNfNDdfbWFsYXJrZXlfNDdfbWFsYXJrZXlfNDZfZGlyZWN0aXZlX18gJiYgJF9fXzQ2X180Nl9fNDdfYXBwXzQ3X2NvbXBvbmVudHNfNDdfbWFsYXJrZXlfNDdfbWFsYXJrZXlfNDZfZGlyZWN0aXZlX18uX19lc01vZHVsZSAmJiAkX19fNDZfXzQ2X180N19hcHBfNDdfY29tcG9uZW50c180N19tYWxhcmtleV80N19tYWxhcmtleV80Nl9kaXJlY3RpdmVfXyB8fCB7ZGVmYXVsdDogJF9fXzQ2X180Nl9fNDdfYXBwXzQ3X2NvbXBvbmVudHNfNDdfbWFsYXJrZXlfNDdfbWFsYXJrZXlfNDZfZGlyZWN0aXZlX199KS5NYWxhcmtleURpcmVjdGl2ZTtcbmFuZ3VsYXIubW9kdWxlKCdhbmd1bGFyR3VscCcsIFsnbmdBbmltYXRlJywgJ25nQ29va2llcycsICduZ1RvdWNoJywgJ25nU2FuaXRpemUnLCAnbmdNZXNzYWdlcycsICduZ0FyaWEnLCAnbmdSZXNvdXJjZScsICd1aS5yb3V0ZXInLCAndWkuYm9vdHN0cmFwJywgJ3RvYXN0ciddKS5jb25zdGFudCgnbWFsYXJrZXknLCBtYWxhcmtleSkuY29uc3RhbnQoJ21vbWVudCcsIG1vbWVudCkuY29uZmlnKGNvbmZpZykuY29uZmlnKHJvdXRlckNvbmZpZykucnVuKHJ1bkJsb2NrKS5zZXJ2aWNlKCdnaXRodWJDb250cmlidXRvcicsIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSkuc2VydmljZSgnd2ViRGV2VGVjJywgV2ViRGV2VGVjU2VydmljZSkuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBNYWluQ29udHJvbGxlcikuZGlyZWN0aXZlKCdhY21lTmF2YmFyJywgTmF2YmFyRGlyZWN0aXZlKS5kaXJlY3RpdmUoJ2FjbWVNYWxhcmtleScsIE1hbGFya2V5RGlyZWN0aXZlKTtcblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvaW5kZXgubW9kdWxlLmpzXG4gKiovIiwibnVsbFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8wXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZygkbG9nUHJvdmlkZXIsIHRvYXN0ckNvbmZpZykge1xuICAgICduZ0luamVjdCc7XG4gICAgLy8gRW5hYmxlIGxvZ1xuICAgICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XG5cbiAgICAvLyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcbiAgICB0b2FzdHJDb25maWcuYWxsb3dIdG1sID0gdHJ1ZTtcbiAgICB0b2FzdHJDb25maWcudGltZU91dCA9IDMwMDA7XG4gICAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcbiAgICB0b2FzdHJDb25maWcucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlO1xuICAgIHRvYXN0ckNvbmZpZy5wcm9ncmVzc0JhciA9IHRydWU7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvaW5kZXguY29uZmlnLmpzXG4gKiovIiwibnVsbFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci82XG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhleHBvcnRzLCB7XG4gIGNvbmZpZzoge2dldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH19LFxuICBfX2VzTW9kdWxlOiB7dmFsdWU6IHRydWV9XG59KTtcbmZ1bmN0aW9uIGNvbmZpZygkbG9nUHJvdmlkZXIsIHRvYXN0ckNvbmZpZykge1xuICAnbmdJbmplY3QnO1xuICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkKHRydWUpO1xuICB0b2FzdHJDb25maWcuYWxsb3dIdG1sID0gdHJ1ZTtcbiAgdG9hc3RyQ29uZmlnLnRpbWVPdXQgPSAzMDAwO1xuICB0b2FzdHJDb25maWcucG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnO1xuICB0b2FzdHJDb25maWcucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlO1xuICB0b2FzdHJDb25maWcucHJvZ3Jlc3NCYXIgPSB0cnVlO1xufVxuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9pbmRleC5jb25maWcuanNcbiAqKi8iLCJudWxsXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzRcbiAqKi8iLCJudWxsXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzJcbiAqKi8iLCJudWxsXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzNcbiAqKi8iLCJudWxsXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzVcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gcm91dGVyQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAnbmdJbmplY3QnO1xuICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdob21lJywge1xuICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9tYWluLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdtYWluJ1xuICAgIH0pO1xuXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2luZGV4LnJvdXRlLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhleHBvcnRzLCB7XG4gIHJvdXRlckNvbmZpZzoge2dldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcm91dGVyQ29uZmlnO1xuICAgIH19LFxuICBfX2VzTW9kdWxlOiB7dmFsdWU6IHRydWV9XG59KTtcbmZ1bmN0aW9uIHJvdXRlckNvbmZpZygkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG4gICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdob21lJywge1xuICAgIHVybDogJy8nLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbWFpbi5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInLFxuICAgIGNvbnRyb2xsZXJBczogJ21haW4nXG4gIH0pO1xuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG59XG5cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2luZGV4LnJvdXRlLmpzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIHJ1bkJsb2NrKCRsb2cpIHtcbiAgICAnbmdJbmplY3QnO1xuICAgICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2luZGV4LnJ1bi5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZXhwb3J0cywge1xuICBydW5CbG9jazoge2dldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcnVuQmxvY2s7XG4gICAgfX0sXG4gIF9fZXNNb2R1bGU6IHt2YWx1ZTogdHJ1ZX1cbn0pO1xuZnVuY3Rpb24gcnVuQmxvY2soJGxvZykge1xuICAnbmdJbmplY3QnO1xuICAkbG9nLmRlYnVnKCdydW5CbG9jayBlbmQnKTtcbn1cblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvaW5kZXgucnVuLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIE1haW5Db250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0cikge1xuICAgICAgICAnbmdJbmplY3QnO1xuXG4gICAgICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IFtdO1xuICAgICAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuY3JlYXRpb25EYXRlID0gMTQ0NzIzODc1MTU3NDtcbiAgICAgICAgdGhpcy50b2FzdHIgPSB0b2FzdHI7XG5cbiAgICAgICAgdGhpcy5hY3RpdmF0ZSgkdGltZW91dCwgd2ViRGV2VGVjKTtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZSgkdGltZW91dCwgd2ViRGV2VGVjKSB7XG4gICAgICAgIHRoaXMuZ2V0V2ViRGV2VGVjKHdlYkRldlRlYyk7XG4gICAgICAgICR0aW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAncnViYmVyQmFuZCc7XG4gICAgICAgIH0sIDQwMDApO1xuICAgIH1cblxuICAgIGdldFdlYkRldlRlYyh3ZWJEZXZUZWMpIHtcbiAgICAgICAgdGhpcy5hd2Vzb21lVGhpbmdzID0gd2ViRGV2VGVjLmdldFRlYygpO1xuXG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaCh0aGlzLmF3ZXNvbWVUaGluZ3MsIChhd2Vzb21lVGhpbmcpID0+IHtcbiAgICAgICAgICAgIGF3ZXNvbWVUaGluZy5yYW5rID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd1RvYXN0cigpIHtcbiAgICAgICAgdGhpcy50b2FzdHIuaW5mbygnRm9yayA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48Yj5nZW5lcmF0b3ItZ3VscC1hbmd1bGFyPC9iPjwvYT4nKTtcbiAgICAgICAgdGhpcy5jbGFzc0FuaW1hdGlvbiA9ICcnO1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZXhwb3J0cywge1xuICBNYWluQ29udHJvbGxlcjoge2dldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gTWFpbkNvbnRyb2xsZXI7XG4gICAgfX0sXG4gIF9fZXNNb2R1bGU6IHt2YWx1ZTogdHJ1ZX1cbn0pO1xudmFyIE1haW5Db250cm9sbGVyID0gZnVuY3Rpb24gTWFpbkNvbnRyb2xsZXIoJHRpbWVvdXQsIHdlYkRldlRlYywgdG9hc3RyKSB7XG4gICduZ0luamVjdCc7XG4gIHRoaXMuYXdlc29tZVRoaW5ncyA9IFtdO1xuICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJyc7XG4gIHRoaXMuY3JlYXRpb25EYXRlID0gMTQ0NzIzODc1MTU3NDtcbiAgdGhpcy50b2FzdHIgPSB0b2FzdHI7XG4gIHRoaXMuYWN0aXZhdGUoJHRpbWVvdXQsIHdlYkRldlRlYyk7XG59O1xuKCR0cmFjZXVyUnVudGltZS5jcmVhdGVDbGFzcykoTWFpbkNvbnRyb2xsZXIsIHtcbiAgYWN0aXZhdGU6IGZ1bmN0aW9uKCR0aW1lb3V0LCB3ZWJEZXZUZWMpIHtcbiAgICB2YXIgJF9fMCA9IHRoaXM7XG4gICAgdGhpcy5nZXRXZWJEZXZUZWMod2ViRGV2VGVjKTtcbiAgICAkdGltZW91dCgoZnVuY3Rpb24oKSB7XG4gICAgICAkX18wLmNsYXNzQW5pbWF0aW9uID0gJ3J1YmJlckJhbmQnO1xuICAgIH0pLCA0MDAwKTtcbiAgfSxcbiAgZ2V0V2ViRGV2VGVjOiBmdW5jdGlvbih3ZWJEZXZUZWMpIHtcbiAgICB0aGlzLmF3ZXNvbWVUaGluZ3MgPSB3ZWJEZXZUZWMuZ2V0VGVjKCk7XG4gICAgYW5ndWxhci5mb3JFYWNoKHRoaXMuYXdlc29tZVRoaW5ncywgKGZ1bmN0aW9uKGF3ZXNvbWVUaGluZykge1xuICAgICAgYXdlc29tZVRoaW5nLnJhbmsgPSBNYXRoLnJhbmRvbSgpO1xuICAgIH0pKTtcbiAgfSxcbiAgc2hvd1RvYXN0cjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50b2FzdHIuaW5mbygnRm9yayA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48Yj5nZW5lcmF0b3ItZ3VscC1hbmd1bGFyPC9iPjwvYT4nKTtcbiAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJyc7XG4gIH1cbn0sIHt9KTtcblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvbWFpbi9tYWluLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJudWxsXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzdcbiAqKi8iLCJudWxsXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzhcbiAqKi8iLCJleHBvcnQgY2xhc3MgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigkbG9nLCAkaHR0cCkge1xuXG4gICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLmFwaUhvc3QgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyJztcbiAgICB9XG5cbiAgICBnZXRDb250cmlidXRvcnMobGltaXQpIHtcbiAgICAgICAgaWYgKCFsaW1pdCkge1xuICAgICAgICAgICAgbGltaXQgPSAzMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLmFwaUhvc3QgKyAnL2NvbnRyaWJ1dG9ycz9wZXJfcGFnZT0nICsgbGltaXQpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJyArIGFuZ3VsYXIudG9Kc29uKGVycm9yLmRhdGEsIHRydWUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGV4cG9ydHMsIHtcbiAgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlOiB7Z2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBHaXRodWJDb250cmlidXRvclNlcnZpY2U7XG4gICAgfX0sXG4gIF9fZXNNb2R1bGU6IHt2YWx1ZTogdHJ1ZX1cbn0pO1xudmFyIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSA9IGZ1bmN0aW9uIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSgkbG9nLCAkaHR0cCkge1xuICAnbmdJbmplY3QnO1xuICB0aGlzLiRsb2cgPSAkbG9nO1xuICB0aGlzLiRodHRwID0gJGh0dHA7XG4gIHRoaXMuYXBpSG9zdCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXInO1xufTtcbigkdHJhY2V1clJ1bnRpbWUuY3JlYXRlQ2xhc3MpKEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSwge2dldENvbnRyaWJ1dG9yczogZnVuY3Rpb24obGltaXQpIHtcbiAgICB2YXIgJF9fMCA9IHRoaXM7XG4gICAgaWYgKCFsaW1pdCkge1xuICAgICAgbGltaXQgPSAzMDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuYXBpSG9zdCArICcvY29udHJpYnV0b3JzP3Blcl9wYWdlPScgKyBsaW1pdCkudGhlbigoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pKS5jYXRjaCgoZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICRfXzAuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicgKyBhbmd1bGFyLnRvSnNvbihlcnJvci5kYXRhLCB0cnVlKSk7XG4gICAgfSkpO1xuICB9fSwge30pO1xuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgV2ViRGV2VGVjU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgdGhpcy5kYXRhID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdBbmd1bGFySlMnLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cHM6Ly9hbmd1bGFyanMub3JnLycsXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0hUTUwgZW5oYW5jZWQgZm9yIHdlYiBhcHBzIScsXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAnYW5ndWxhci5wbmcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdCcm93c2VyU3luYycsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8vYnJvd3NlcnN5bmMuaW8vJyxcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGltZS1zYXZpbmcgc3luY2hyb25pc2VkIGJyb3dzZXIgdGVzdGluZy4nLFxuICAgICAgICAgICAgICAgICdsb2dvJzogJ2Jyb3dzZXJzeW5jLnBuZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0d1bHBKUycsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8vZ3VscGpzLmNvbS8nLFxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGUgc3RyZWFtaW5nIGJ1aWxkIHN5c3RlbS4nLFxuICAgICAgICAgICAgICAgICdsb2dvJzogJ2d1bHAucG5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnSmFzbWluZScsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8vamFzbWluZS5naXRodWIuaW8vJyxcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnQmVoYXZpb3ItRHJpdmVuIEphdmFTY3JpcHQuJyxcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdqYXNtaW5lLnBuZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0thcm1hJyxcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHA6Ly9rYXJtYS1ydW5uZXIuZ2l0aHViLmlvLycsXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1NwZWN0YWN1bGFyIFRlc3QgUnVubmVyIGZvciBKYXZhU2NyaXB0LicsXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAna2FybWEucG5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnUHJvdHJhY3RvcicsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9wcm90cmFjdG9yJyxcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnRW5kIHRvIGVuZCB0ZXN0IGZyYW1ld29yayBmb3IgQW5ndWxhckpTIGFwcGxpY2F0aW9ucyBidWlsdCBvbiB0b3Agb2YgV2ViRHJpdmVySlMuJyxcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdwcm90cmFjdG9yLnBuZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0Jvb3RzdHJhcCcsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nLFxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdCb290c3RyYXAgaXMgdGhlIG1vc3QgcG9wdWxhciBIVE1MLCBDU1MsIGFuZCBKUyBmcmFtZXdvcmsgZm9yIGRldmVsb3BpbmcgcmVzcG9uc2l2ZSwgbW9iaWxlIGZpcnN0IHByb2plY3RzIG9uIHRoZSB3ZWIuJyxcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdib290c3RyYXAucG5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnQW5ndWxhciBVSSBCb290c3RyYXAnLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cDovL2FuZ3VsYXItdWkuZ2l0aHViLmlvL2Jvb3RzdHJhcC8nLFxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdCb290c3RyYXAgY29tcG9uZW50cyB3cml0dGVuIGluIHB1cmUgQW5ndWxhckpTIGJ5IHRoZSBBbmd1bGFyVUkgVGVhbS4nLFxuICAgICAgICAgICAgICAgICdsb2dvJzogJ3VpLWJvb3RzdHJhcC5wbmcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdFUzYgKFRyYWNldXIpJyxcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvdHJhY2V1ci1jb21waWxlcicsXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0EgSmF2YVNjcmlwdC5uZXh0LXRvLUphdmFTY3JpcHQtb2YtdG9kYXkgY29tcGlsZXIgdGhhdCBhbGxvd3MgeW91IHRvIHVzZSBmZWF0dXJlcyBmcm9tIHRoZSBmdXR1cmUgdG9kYXkuJyxcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICd0cmFjZXVyLnBuZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ2tleSc6ICdqYWRlJyxcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnSmFkZScsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwOi8vamFkZS1sYW5nLmNvbS8nLFxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdKYWRlIGlzIGEgaGlnaCBwZXJmb3JtYW5jZSB0ZW1wbGF0ZSBlbmdpbmUgaGVhdmlseSBpbmZsdWVuY2VkIGJ5IEhhbWwgYW5kIGltcGxlbWVudGVkIHdpdGggSmF2YVNjcmlwdCBmb3Igbm9kZS4nLFxuICAgICAgICAgICAgICAgICdsb2dvJzogJ2phZGUucG5nJ1xuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIGdldFRlYygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGV4cG9ydHMsIHtcbiAgV2ViRGV2VGVjU2VydmljZToge2dldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gV2ViRGV2VGVjU2VydmljZTtcbiAgICB9fSxcbiAgX19lc01vZHVsZToge3ZhbHVlOiB0cnVlfVxufSk7XG52YXIgV2ViRGV2VGVjU2VydmljZSA9IGZ1bmN0aW9uIFdlYkRldlRlY1NlcnZpY2UoKSB7XG4gICduZ0luamVjdCc7XG4gIHRoaXMuZGF0YSA9IFt7XG4gICAgJ3RpdGxlJzogJ0FuZ3VsYXJKUycsXG4gICAgJ3VybCc6ICdodHRwczovL2FuZ3VsYXJqcy5vcmcvJyxcbiAgICAnZGVzY3JpcHRpb24nOiAnSFRNTCBlbmhhbmNlZCBmb3Igd2ViIGFwcHMhJyxcbiAgICAnbG9nbyc6ICdhbmd1bGFyLnBuZydcbiAgfSwge1xuICAgICd0aXRsZSc6ICdCcm93c2VyU3luYycsXG4gICAgJ3VybCc6ICdodHRwOi8vYnJvd3NlcnN5bmMuaW8vJyxcbiAgICAnZGVzY3JpcHRpb24nOiAnVGltZS1zYXZpbmcgc3luY2hyb25pc2VkIGJyb3dzZXIgdGVzdGluZy4nLFxuICAgICdsb2dvJzogJ2Jyb3dzZXJzeW5jLnBuZydcbiAgfSwge1xuICAgICd0aXRsZSc6ICdHdWxwSlMnLFxuICAgICd1cmwnOiAnaHR0cDovL2d1bHBqcy5jb20vJyxcbiAgICAnZGVzY3JpcHRpb24nOiAnVGhlIHN0cmVhbWluZyBidWlsZCBzeXN0ZW0uJyxcbiAgICAnbG9nbyc6ICdndWxwLnBuZydcbiAgfSwge1xuICAgICd0aXRsZSc6ICdKYXNtaW5lJyxcbiAgICAndXJsJzogJ2h0dHA6Ly9qYXNtaW5lLmdpdGh1Yi5pby8nLFxuICAgICdkZXNjcmlwdGlvbic6ICdCZWhhdmlvci1Ecml2ZW4gSmF2YVNjcmlwdC4nLFxuICAgICdsb2dvJzogJ2phc21pbmUucG5nJ1xuICB9LCB7XG4gICAgJ3RpdGxlJzogJ0thcm1hJyxcbiAgICAndXJsJzogJ2h0dHA6Ly9rYXJtYS1ydW5uZXIuZ2l0aHViLmlvLycsXG4gICAgJ2Rlc2NyaXB0aW9uJzogJ1NwZWN0YWN1bGFyIFRlc3QgUnVubmVyIGZvciBKYXZhU2NyaXB0LicsXG4gICAgJ2xvZ28nOiAna2FybWEucG5nJ1xuICB9LCB7XG4gICAgJ3RpdGxlJzogJ1Byb3RyYWN0b3InLFxuICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvcHJvdHJhY3RvcicsXG4gICAgJ2Rlc2NyaXB0aW9uJzogJ0VuZCB0byBlbmQgdGVzdCBmcmFtZXdvcmsgZm9yIEFuZ3VsYXJKUyBhcHBsaWNhdGlvbnMgYnVpbHQgb24gdG9wIG9mIFdlYkRyaXZlckpTLicsXG4gICAgJ2xvZ28nOiAncHJvdHJhY3Rvci5wbmcnXG4gIH0sIHtcbiAgICAndGl0bGUnOiAnQm9vdHN0cmFwJyxcbiAgICAndXJsJzogJ2h0dHA6Ly9nZXRib290c3RyYXAuY29tLycsXG4gICAgJ2Rlc2NyaXB0aW9uJzogJ0Jvb3RzdHJhcCBpcyB0aGUgbW9zdCBwb3B1bGFyIEhUTUwsIENTUywgYW5kIEpTIGZyYW1ld29yayBmb3IgZGV2ZWxvcGluZyByZXNwb25zaXZlLCBtb2JpbGUgZmlyc3QgcHJvamVjdHMgb24gdGhlIHdlYi4nLFxuICAgICdsb2dvJzogJ2Jvb3RzdHJhcC5wbmcnXG4gIH0sIHtcbiAgICAndGl0bGUnOiAnQW5ndWxhciBVSSBCb290c3RyYXAnLFxuICAgICd1cmwnOiAnaHR0cDovL2FuZ3VsYXItdWkuZ2l0aHViLmlvL2Jvb3RzdHJhcC8nLFxuICAgICdkZXNjcmlwdGlvbic6ICdCb290c3RyYXAgY29tcG9uZW50cyB3cml0dGVuIGluIHB1cmUgQW5ndWxhckpTIGJ5IHRoZSBBbmd1bGFyVUkgVGVhbS4nLFxuICAgICdsb2dvJzogJ3VpLWJvb3RzdHJhcC5wbmcnXG4gIH0sIHtcbiAgICAndGl0bGUnOiAnRVM2IChUcmFjZXVyKScsXG4gICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL3RyYWNldXItY29tcGlsZXInLFxuICAgICdkZXNjcmlwdGlvbic6ICdBIEphdmFTY3JpcHQubmV4dC10by1KYXZhU2NyaXB0LW9mLXRvZGF5IGNvbXBpbGVyIHRoYXQgYWxsb3dzIHlvdSB0byB1c2UgZmVhdHVyZXMgZnJvbSB0aGUgZnV0dXJlIHRvZGF5LicsXG4gICAgJ2xvZ28nOiAndHJhY2V1ci5wbmcnXG4gIH0sIHtcbiAgICAna2V5JzogJ2phZGUnLFxuICAgICd0aXRsZSc6ICdKYWRlJyxcbiAgICAndXJsJzogJ2h0dHA6Ly9qYWRlLWxhbmcuY29tLycsXG4gICAgJ2Rlc2NyaXB0aW9uJzogJ0phZGUgaXMgYSBoaWdoIHBlcmZvcm1hbmNlIHRlbXBsYXRlIGVuZ2luZSBoZWF2aWx5IGluZmx1ZW5jZWQgYnkgSGFtbCBhbmQgaW1wbGVtZW50ZWQgd2l0aCBKYXZhU2NyaXB0IGZvciBub2RlLicsXG4gICAgJ2xvZ28nOiAnamFkZS5wbmcnXG4gIH1dO1xufTtcbigkdHJhY2V1clJ1bnRpbWUuY3JlYXRlQ2xhc3MpKFdlYkRldlRlY1NlcnZpY2UsIHtnZXRUZWM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH19LCB7fSk7XG5cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIE5hdmJhckRpcmVjdGl2ZSgpIHtcbiAgICAnbmdJbmplY3QnO1xuICAgIGxldCBkaXJlY3RpdmUgPSB7XG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5odG1sJyxcbiAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgIGNyZWF0aW9uRGF0ZTogJz0nXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRyb2xsZXI6IE5hdmJhckNvbnRyb2xsZXIsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcbn1cblxuY2xhc3MgTmF2YmFyQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IobW9tZW50KSB7XG4gICAgICAgICduZ0luamVjdCc7XG4gICAgICAgIC8vIFwidGhpcy5jcmVhdGlvblwiIGlzIGF2YWlibGUgYnkgZGlyZWN0aXZlIG9wdGlvbiBcImJpbmRUb0NvbnRyb2xsZXI6IHRydWVcIlxuICAgICAgICB0aGlzLnJlbGF0aXZlRGF0ZSA9IG1vbWVudCh0aGlzLmNyZWF0aW9uRGF0ZSkuZnJvbU5vdygpO1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhleHBvcnRzLCB7XG4gIE5hdmJhckRpcmVjdGl2ZToge2dldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gTmF2YmFyRGlyZWN0aXZlO1xuICAgIH19LFxuICBfX2VzTW9kdWxlOiB7dmFsdWU6IHRydWV9XG59KTtcbmZ1bmN0aW9uIE5hdmJhckRpcmVjdGl2ZSgpIHtcbiAgJ25nSW5qZWN0JztcbiAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5odG1sJyxcbiAgICBzY29wZToge2NyZWF0aW9uRGF0ZTogJz0nfSxcbiAgICBjb250cm9sbGVyOiBOYXZiYXJDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG4gIHJldHVybiBkaXJlY3RpdmU7XG59XG52YXIgTmF2YmFyQ29udHJvbGxlciA9IGZ1bmN0aW9uIE5hdmJhckNvbnRyb2xsZXIobW9tZW50KSB7XG4gICduZ0luamVjdCc7XG4gIHRoaXMucmVsYXRpdmVEYXRlID0gbW9tZW50KHRoaXMuY3JlYXRpb25EYXRlKS5mcm9tTm93KCk7XG59O1xuKCR0cmFjZXVyUnVudGltZS5jcmVhdGVDbGFzcykoTmF2YmFyQ29udHJvbGxlciwge30sIHt9KTtcblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBNYWxhcmtleURpcmVjdGl2ZShtYWxhcmtleSkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBsZXQgZGlyZWN0aXZlID0ge1xuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgZXh0cmFWYWx1ZXM6ICc9J1xuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgICAgIGxpbms6IGxpbmtGdW5jLFxuICAgICAgICBjb250cm9sbGVyOiBNYWxhcmtleUNvbnRyb2xsZXIsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gICAgZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGUsIGVsLCBhdHRyLCB2bSkge1xuICAgICAgICBsZXQgd2F0Y2hlcjtcbiAgICAgICAgbGV0IHR5cGlzdCA9IG1hbGFya2V5KGVsWzBdLCB7XG4gICAgICAgICAgICB0eXBlU3BlZWQ6IDQwLFxuICAgICAgICAgICAgZGVsZXRlU3BlZWQ6IDQwLFxuICAgICAgICAgICAgcGF1c2VEZWxheTogODAwLFxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgIHBvc3RmaXg6ICcgJ1xuICAgICAgICB9KTtcblxuICAgICAgICBlbC5hZGRDbGFzcygnYWNtZS1tYWxhcmtleScpO1xuXG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChzY29wZS5leHRyYVZhbHVlcywgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0eXBpc3QudHlwZSh2YWx1ZSkucGF1c2UoKS5kZWxldGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2F0Y2hlciA9IHNjb3BlLiR3YXRjaCgndm0uY29udHJpYnV0b3JzJywgKCkgPT4ge1xuICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHZtLmNvbnRyaWJ1dG9ycywgKGNvbnRyaWJ1dG9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdHlwaXN0LnR5cGUoY29udHJpYnV0b3IubG9naW4pLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2NvcGUuJG9uKCckZGVzdHJveScsICgpID0+IHtcbiAgICAgICAgICAgIHdhdGNoZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbmNsYXNzIE1hbGFya2V5Q29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoJGxvZywgZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgICAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IFtdO1xuXG4gICAgICAgIHRoaXMuYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpO1xuICAgIH1cblxuICAgIGFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRsb2cuaW5mbygnQWN0aXZhdGVkIENvbnRyaWJ1dG9ycyBWaWV3Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikge1xuICAgICAgICByZXR1cm4gZ2l0aHViQ29udHJpYnV0b3IuZ2V0Q29udHJpYnV0b3JzKDEwKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IGRhdGE7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyaWJ1dG9ycztcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhleHBvcnRzLCB7XG4gIE1hbGFya2V5RGlyZWN0aXZlOiB7Z2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBNYWxhcmtleURpcmVjdGl2ZTtcbiAgICB9fSxcbiAgX19lc01vZHVsZToge3ZhbHVlOiB0cnVlfVxufSk7XG5mdW5jdGlvbiBNYWxhcmtleURpcmVjdGl2ZShtYWxhcmtleSkge1xuICAnbmdJbmplY3QnO1xuICB2YXIgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtleHRyYVZhbHVlczogJz0nfSxcbiAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgbGluazogbGlua0Z1bmMsXG4gICAgY29udHJvbGxlcjogTWFsYXJrZXlDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICB9O1xuICByZXR1cm4gZGlyZWN0aXZlO1xuICBmdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIHZtKSB7XG4gICAgdmFyIHdhdGNoZXI7XG4gICAgdmFyIHR5cGlzdCA9IG1hbGFya2V5KGVsWzBdLCB7XG4gICAgICB0eXBlU3BlZWQ6IDQwLFxuICAgICAgZGVsZXRlU3BlZWQ6IDQwLFxuICAgICAgcGF1c2VEZWxheTogODAwLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIHBvc3RmaXg6ICcgJ1xuICAgIH0pO1xuICAgIGVsLmFkZENsYXNzKCdhY21lLW1hbGFya2V5Jyk7XG4gICAgYW5ndWxhci5mb3JFYWNoKHNjb3BlLmV4dHJhVmFsdWVzLCAoZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHR5cGlzdC50eXBlKHZhbHVlKS5wYXVzZSgpLmRlbGV0ZSgpO1xuICAgIH0pKTtcbiAgICB3YXRjaGVyID0gc2NvcGUuJHdhdGNoKCd2bS5jb250cmlidXRvcnMnLCAoZnVuY3Rpb24oKSB7XG4gICAgICBhbmd1bGFyLmZvckVhY2godm0uY29udHJpYnV0b3JzLCAoZnVuY3Rpb24oY29udHJpYnV0b3IpIHtcbiAgICAgICAgdHlwaXN0LnR5cGUoY29udHJpYnV0b3IubG9naW4pLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgICB9KSk7XG4gICAgfSkpO1xuICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCAoZnVuY3Rpb24oKSB7XG4gICAgICB3YXRjaGVyKCk7XG4gICAgfSkpO1xuICB9XG59XG52YXIgTWFsYXJrZXlDb250cm9sbGVyID0gZnVuY3Rpb24gTWFsYXJrZXlDb250cm9sbGVyKCRsb2csIGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICduZ0luamVjdCc7XG4gIHRoaXMuJGxvZyA9ICRsb2c7XG4gIHRoaXMuY29udHJpYnV0b3JzID0gW107XG4gIHRoaXMuYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpO1xufTtcbigkdHJhY2V1clJ1bnRpbWUuY3JlYXRlQ2xhc3MpKE1hbGFya2V5Q29udHJvbGxlciwge1xuICBhY3RpdmF0ZTogZnVuY3Rpb24oZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICB2YXIgJF9fMCA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICRfXzAuJGxvZy5pbmZvKCdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnKTtcbiAgICB9KSk7XG4gIH0sXG4gIGdldENvbnRyaWJ1dG9yczogZnVuY3Rpb24oZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICB2YXIgJF9fMCA9IHRoaXM7XG4gICAgcmV0dXJuIGdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMCkudGhlbigoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgJF9fMC5jb250cmlidXRvcnMgPSBkYXRhO1xuICAgICAgcmV0dXJuICRfXzAuY29udHJpYnV0b3JzO1xuICAgIH0pKTtcbiAgfVxufSwge30pO1xuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=