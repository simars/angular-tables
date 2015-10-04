/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    ngmodule: __webpack_require__(1),
	    directive: __webpack_require__(2)
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	module.exports = angular.module('angularTables', []);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(3);
	var ngmodule = __webpack_require__(1);
	module.exports = ngmodule.directive('datatable', ['$compile', function ($compile) {
	    return {
	        restrict: 'A',
	        link: function link(scope, element, attrs) {

	            function rowCompiler(row) {
	                row = $compile(row)(scope);
	                return row;
	            }

	            var options = {};

	            if (attrs.options !== undefined) {
	                _.each(scope.$eval(attrs.options), function (opts) {
	                    return _(options).extend(opts);
	                });
	            }

	            if (attrs.columns) {
	                var columns = scope.$eval(attrs.columns);
	                options['columns'] = _.map(columns, function (column) {
	                    if (typeof column === 'object') {
	                        return column;
	                    } else {
	                        return { 'title': column };
	                    }
	                });
	            }
	            if (attrs.columnDefs !== undefined) {
	                options['columnDefs'] = scope.$eval(attrs.columnDefs);
	            }

	            options['rowCallback'] = rowCompiler;

	            var datatable = element.DataTable(options);

	            scope.$watch(attrs.data, function (value) {
	                var val = value || null;
	                if (val) {

	                    datatable.clear();
	                    datatable.rows.add(scope.$eval(attrs.data));
	                    datatable.draw();
	                }
	            }, true);
	        }
	    };
	}]);

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = _;

/***/ }
/******/ ]);