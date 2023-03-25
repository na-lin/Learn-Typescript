/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Dog.ts":
/*!********************!*\
  !*** ./src/Dog.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dog)
/* harmony export */ });
class Dog {
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
    bark() {
        console.log("Wofff");
    }
}


/***/ }),

/***/ "./src/ShelterDog.ts":
/*!***************************!*\
  !*** ./src/ShelterDog.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShelterDog)
/* harmony export */ });
/* harmony import */ var _Dog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dog */ "./src/Dog.ts");

class ShelterDog extends _Dog__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(name, breed, age, shelter) {
        super(name, breed, age);
        this.shelter = shelter;
    }
}


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "divide": () => (/* binding */ divide),
/* harmony export */   "multiply": () => (/* binding */ multiply)
/* harmony export */ });
function add(x, y) {
    return x + y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dog */ "./src/Dog.ts");
/* harmony import */ var _ShelterDog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShelterDog */ "./src/ShelterDog.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");



console.log("FROM INDEX FILE!!!!");
const elton = new _Dog__WEBPACK_IMPORTED_MODULE_0__["default"]("Elton", "Aussie", 0.5);
elton.bark();
console.log((0,_utils__WEBPACK_IMPORTED_MODULE_2__.add)(4, 5));
console.log((0,_utils__WEBPACK_IMPORTED_MODULE_2__.multiply)(4, 5));
console.log((0,_utils__WEBPACK_IMPORTED_MODULE_2__.divide)(4, 5));
const buffy = new _ShelterDog__WEBPACK_IMPORTED_MODULE_1__["default"]("Buffy", "Pitbull", 5, "Desert Springs Shelter");

})();

/******/ })()
;
//# sourceMappingURL=d2205b90ca85b9715be7.bundle.js.map