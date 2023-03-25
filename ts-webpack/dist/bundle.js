/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Dog.ts":
/*!********************!*\
  !*** ./src/Dog.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dog)\n/* harmony export */ });\nclass Dog {\n    constructor(name, breed, age) {\n        this.name = name;\n        this.breed = breed;\n        this.age = age;\n    }\n    bark() {\n        console.log(\"Wofff\");\n    }\n}\n\n\n//# sourceURL=webpack://ts-webpack/./src/Dog.ts?");

/***/ }),

/***/ "./src/ShelterDog.ts":
/*!***************************!*\
  !*** ./src/ShelterDog.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ShelterDog)\n/* harmony export */ });\n/* harmony import */ var _Dog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dog */ \"./src/Dog.ts\");\n\nclass ShelterDog extends _Dog__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(name, breed, age, shelter) {\n        super(name, breed, age);\n        this.shelter = shelter;\n    }\n}\n\n\n//# sourceURL=webpack://ts-webpack/./src/ShelterDog.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Dog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dog */ \"./src/Dog.ts\");\n/* harmony import */ var _ShelterDog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShelterDog */ \"./src/ShelterDog.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n\n\n\nconsole.log(\"FROM INDEX FILE!!!!!!!!\");\nconst elton = new _Dog__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Elton\", \"Aussie\", 0.5);\nelton.bark();\nconsole.log((0,_utils__WEBPACK_IMPORTED_MODULE_2__.add)(4, 5));\nconsole.log((0,_utils__WEBPACK_IMPORTED_MODULE_2__.multiply)(4, 5));\nconsole.log((0,_utils__WEBPACK_IMPORTED_MODULE_2__.divide)(4, 5));\nconst buffy = new _ShelterDog__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Buffy\", \"Pitbull\", 5, \"Desert Springs Shelter\");\n\n\n//# sourceURL=webpack://ts-webpack/./src/index.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"divide\": () => (/* binding */ divide),\n/* harmony export */   \"multiply\": () => (/* binding */ multiply)\n/* harmony export */ });\nfunction add(x, y) {\n    return x + y;\n}\nfunction multiply(x, y) {\n    return x * y;\n}\nfunction divide(x, y) {\n    return x / y;\n}\n\n\n//# sourceURL=webpack://ts-webpack/./src/utils.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;