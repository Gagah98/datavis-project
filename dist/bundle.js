/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/championsResults.json":
/*!************************************!*\
  !*** ./data/championsResults.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

eval("module.exports = [[{\"country\":\"SLO\",\"points\":\"517.70\"},{\"country\":\"AUT\",\"points\":\"487.10\"},{\"country\":\"KOR\",\"points\":\"314.44\"},{\"country\":\"JPN\",\"points\":\"214.61\"},{\"country\":\"FRA\",\"points\":\"202.62\"},{\"country\":\"BEL\",\"points\":\"168.26\"},{\"country\":\"USA\",\"points\":\"163.60\"},{\"country\":\"SUI\",\"points\":\"95.82\"},{\"country\":\"NOR\",\"points\":\"76.34\"},{\"country\":\"ITA\",\"points\":\"52.54\"},{\"country\":\"UKR\",\"points\":\"40.73\"},{\"country\":\"GBR\",\"points\":\"38.27\"},{\"country\":\"SRB\",\"points\":\"24.85\"},{\"country\":\"RUS\",\"points\":\"18.33\"},{\"country\":\"AUS\",\"points\":\"14.38\"},{\"country\":\"CHN\",\"points\":\"13.74\"},{\"country\":\"CZE\",\"points\":\"6.39\"},{\"country\":\"POL\",\"points\":\"4.76\"},{\"country\":\"TPE\",\"points\":\"4.62\"},{\"country\":\"CAN\",\"points\":\"3.92\"},{\"country\":\"NED\",\"points\":\"2.52\"},{\"country\":\"SVK\",\"points\":\"2.13\"},{\"country\":\"INA\",\"points\":\"0.65\"}],[{\"country\":\"AUT\",\"points\":\"468.95\"},{\"country\":\"ITA\",\"points\":\"390.31\"},{\"country\":\"SLO\",\"points\":\"318.17\"},{\"country\":\"FRA\",\"points\":\"258.34\"},{\"country\":\"GER\",\"points\":\"234.38\"},{\"country\":\"SUI\",\"points\":\"192.45\"},{\"country\":\"KOR\",\"points\":\"180.82\"},{\"country\":\"JPN\",\"points\":\"156.69\"},{\"country\":\"CZE\",\"points\":\"110.10\"},{\"country\":\"USA\",\"points\":\"90.80\"},{\"country\":\"GBR\",\"points\":\"90.24\"},{\"country\":\"SWE\",\"points\":\"82.14\"},{\"country\":\"UKR\",\"points\":\"81.84\"},{\"country\":\"BEL\",\"points\":\"78.68\"},{\"country\":\"CAN\",\"points\":\"53.66\"},{\"country\":\"ESP\",\"points\":\"33.54\"},{\"country\":\"NED\",\"points\":\"29.04\"},{\"country\":\"CHN\",\"points\":\"24.90\"},{\"country\":\"RUS\",\"points\":\"8.40\"},{\"country\":\"ISR\",\"points\":\"7.56\"},{\"country\":\"INA\",\"points\":\"3.10\"}],[{\"country\":\"JPN\",\"points\":\"508.75\"},{\"country\":\"SLO\",\"points\":\"425.00\"},{\"country\":\"FRA\",\"points\":\"323.81\"},{\"country\":\"AUT\",\"points\":\"210.85\"},{\"country\":\"SUI\",\"points\":\"185.82\"},{\"country\":\"SRB\",\"points\":\"160.50\"},{\"country\":\"CAN\",\"points\":\"157.43\"},{\"country\":\"KOR\",\"points\":\"154.37\"},{\"country\":\"GBR\",\"points\":\"148.70\"},{\"country\":\"RUS\",\"points\":\"139.66\"},{\"country\":\"USA\",\"points\":\"132.14\"},{\"country\":\"GER\",\"points\":\"112.13\"},{\"country\":\"UKR\",\"points\":\"85.85\"},{\"country\":\"BEL\",\"points\":\"79.36\"},{\"country\":\"CHN\",\"points\":\"52.23\"},{\"country\":\"IRI\",\"points\":\"48.03\"},{\"country\":\"AUS\",\"points\":\"43.39\"},{\"country\":\"TPE\",\"points\":\"31.83\"},{\"country\":\"NED\",\"points\":\"9.60\"},{\"country\":\"ARG\",\"points\":\"7.89\"},{\"country\":\"SGP\",\"points\":\"7.50\"},{\"country\":\"ITA\",\"points\":\"4.76\"},{\"country\":\"POL\",\"points\":\"1.95\"},{\"country\":\"DEN\",\"points\":\"1.95\"}],[{\"country\":\"JPN\",\"points\":\"491.10\"},{\"country\":\"SLO\",\"points\":\"426.44\"},{\"country\":\"RUS\",\"points\":\"338.70\"},{\"country\":\"KOR\",\"points\":\"317.58\"},{\"country\":\"GER\",\"points\":\"267.91\"},{\"country\":\"AUT\",\"points\":\"239.21\"},{\"country\":\"FRA\",\"points\":\"213.25\"},{\"country\":\"CZE\",\"points\":\"187.98\"},{\"country\":\"ISR\",\"points\":\"180.99\"},{\"country\":\"ITA\",\"points\":\"153.91\"},{\"country\":\"CAN\",\"points\":\"104.41\"},{\"country\":\"GBR\",\"points\":\"99.29\"},{\"country\":\"USA\",\"points\":\"81.46\"},{\"country\":\"CHN\",\"points\":\"78.51\"},{\"country\":\"SUI\",\"points\":\"59.76\"},{\"country\":\"UKR\",\"points\":\"43.53\"},{\"country\":\"NED\",\"points\":\"31.38\"},{\"country\":\"ESP\",\"points\":\"18.79\"},{\"country\":\"IRI\",\"points\":\"8.01\"},{\"country\":\"AUS\",\"points\":\"7.83\"},{\"country\":\"BEL\",\"points\":\"2.82\"},{\"country\":\"SGP\",\"points\":\"0.92\"},{\"country\":\"LTU\",\"points\":\"0.78\"}],[{\"country\":\"FRA\",\"points\":\"511.70\"},{\"country\":\"INA\",\"points\":\"412.91\"},{\"country\":\"RUS\",\"points\":\"381.83\"},{\"country\":\"POL\",\"points\":\"316.45\"},{\"country\":\"CHN\",\"points\":\"309.73\"},{\"country\":\"ECU\",\"points\":\"90.06\"},{\"country\":\"UKR\",\"points\":\"72.38\"},{\"country\":\"ITA\",\"points\":\"65.18\"},{\"country\":\"AUT\",\"points\":\"47.75\"},{\"country\":\"USA\",\"points\":\"24.36\"},{\"country\":\"JPN\",\"points\":\"19.55\"},{\"country\":\"TPE\",\"points\":\"12.71\"},{\"country\":\"AUS\",\"points\":\"12.24\"},{\"country\":\"KAZ\",\"points\":\"10.06\"},{\"country\":\"SLO\",\"points\":\"7.84\"},{\"country\":\"VEN\",\"points\":\"7.20\"},{\"country\":\"SUI\",\"points\":\"5.52\"},{\"country\":\"KOR\",\"points\":\"3.85\"},{\"country\":\"SRB\",\"points\":\"3.00\"},{\"country\":\"GER\",\"points\":\"2.04\"},{\"country\":\"CAN\",\"points\":\"1.52\"},{\"country\":\"IRI\",\"points\":\"1.44\"},{\"country\":\"CZE\",\"points\":\"0.68\"},{\"country\":\"CHI\",\"points\":\"0.60\"}],[{\"country\":\"FRA\",\"points\":\"542.39\"},{\"country\":\"RUS\",\"points\":\"457.62\"},{\"country\":\"IRI\",\"points\":\"415.70\"},{\"country\":\"INA\",\"points\":\"345.06\"},{\"country\":\"UKR\",\"points\":\"321.28\"},{\"country\":\"ITA\",\"points\":\"268.61\"},{\"country\":\"POL\",\"points\":\"195.59\"},{\"country\":\"CHN\",\"points\":\"175.45\"},{\"country\":\"CZE\",\"points\":\"168.06\"},{\"country\":\"USA\",\"points\":\"62.74\"},{\"country\":\"KAZ\",\"points\":\"54.91\"},{\"country\":\"ECU\",\"points\":\"50.11\"},{\"country\":\"AUT\",\"points\":\"14.25\"},{\"country\":\"JPN\",\"points\":\"13.90\"},{\"country\":\"KOR\",\"points\":\"12.07\"},{\"country\":\"HKG\",\"points\":\"6.31\"},{\"country\":\"SGP\",\"points\":\"5.61\"},{\"country\":\"BEL\",\"points\":\"3.40\"},{\"country\":\"GER\",\"points\":\"2.80\"},{\"country\":\"SUI\",\"points\":\"2.61\"},{\"country\":\"KGZ\",\"points\":\"2.13\"},{\"country\":\"CAN\",\"points\":\"1.70\"}]];\n\n//# sourceURL=webpack:///./data/championsResults.json?");

/***/ }),

/***/ "./src/drawResults.js":
/*!****************************!*\
  !*** ./src/drawResults.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const climbingResults = __webpack_require__(/*! ../data/championsResults.json */ \"./data/championsResults.json\")\r\n\r\nconsole.log(climbingResults)\r\n\r\n\r\nconst leadWomen = climbingResults[0];\r\nconst leadMen = climbingResults[1];\r\nconst boulderingWomen = climbingResults[2];\r\nconst boulderingMen = climbingResults[3];\r\nconst speedWomen = climbingResults[4];\r\nconst speedMen = climbingResults[5];\r\n\r\nvar chart = bb.generate({\r\n  data: {\r\n    json: {\r\n      \"leadWomen\": leadWomen.map(r => r.points),\r\n      \"leadMen\": leadMen.map(r => r.points),\r\n      \"boulderingWomen\": boulderingWomen.map(r => r.points),\r\n      \"boulderingMen\": boulderingMen.map(r => r.points),\r\n      \"speedWomen\": speedWomen.map(r => r.points),\r\n      \"speedMen\": speedMen.map(r => r.points),\r\n    },\r\n    type: \"bar\",\r\n    groups: [\r\n      [\r\n        \"leadWomen\",\r\n        \"leadMen\",\r\n        \"boulderingWomen\",\r\n        \"boulderingMen\",\r\n        \"speedWomen\",\r\n        \"speedMen\",\r\n       \r\n      ]\r\n    ]\r\n  },\r\n  axis: {\r\n    x: {\r\n      type: \"category\",\r\n      categories: climbingResults.forEach(r => r.country),\r\n    },\r\n    y: {\r\n      label: {\r\n        text: \"Number of points\",\r\n        position: \"outer-center\"\r\n      },\r\n    },\r\n  },\r\n    bindto: \"#resultsChart\"\r\n  });\n\n//# sourceURL=webpack:///./src/drawResults.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _drawResults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawResults */ \"./src/drawResults.js\");\n/* harmony import */ var _drawResults__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_drawResults__WEBPACK_IMPORTED_MODULE_0__);\n//import drawRoutes from \"./drawRoutes\";\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });