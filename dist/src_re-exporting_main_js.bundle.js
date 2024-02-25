"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["src_re-exporting_main_js"],{

/***/ "./src/re-exporting/barrel.js":
/*!************************************!*\
  !*** ./src/re-exporting/barrel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* reexport safe */ _constructors_js__WEBPACK_IMPORTED_MODULE_1__.Player),
/* harmony export */   createMap: () => (/* reexport safe */ _constructors_js__WEBPACK_IMPORTED_MODULE_1__.createMap),
/* harmony export */   defVar: () => (/* reexport safe */ _test_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../test.js */ "./src/test.js");
/* harmony import */ var _constructors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constructors.js */ "./src/constructors.js");
// Practicing "re-exporting" aka. "aggregating"



// export all named exports from that module, except default export




/***/ }),

/***/ "./src/re-exporting/main.js":
/*!**********************************!*\
  !*** ./src/re-exporting/main.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _barrel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./barrel.js */ "./src/re-exporting/barrel.js");


console.log(`barrel: ${_barrel_js__WEBPACK_IMPORTED_MODULE_0__.Player}`);

const ninja = new _barrel_js__WEBPACK_IMPORTED_MODULE_0__.Player('Naruto', 50, 'Konoha');
ninja.attack();

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3JlLWV4cG9ydGluZ19tYWluX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUU2Qzs7QUFFN0M7QUFDbUM7Ozs7Ozs7Ozs7Ozs7O0FDTFU7O0FBRTdDLHVCQUF1Qiw4Q0FBb0IsQ0FBQzs7QUFFNUMsa0JBQWtCLDhDQUFvQjtBQUN0QyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9yZS1leHBvcnRpbmcvYmFycmVsLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9yZS1leHBvcnRpbmcvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQcmFjdGljaW5nIFwicmUtZXhwb3J0aW5nXCIgYWthLiBcImFnZ3JlZ2F0aW5nXCJcblxuZXhwb3J0IHtkZWZhdWx0IGFzIGRlZlZhcn0gZnJvbSAnLi4vdGVzdC5qcyc7XG5cbi8vIGV4cG9ydCBhbGwgbmFtZWQgZXhwb3J0cyBmcm9tIHRoYXQgbW9kdWxlLCBleGNlcHQgZGVmYXVsdCBleHBvcnRcbmV4cG9ydCAqIGZyb20gJy4uL2NvbnN0cnVjdG9ycy5qcyc7XG5cbiIsImltcG9ydCAqIGFzIGJhcnJlbE1vZHVsZXMgZnJvbSAnLi9iYXJyZWwuanMnO1xuXG5jb25zb2xlLmxvZyhgYmFycmVsOiAke2JhcnJlbE1vZHVsZXMuUGxheWVyfWApO1xuXG5jb25zdCBuaW5qYSA9IG5ldyBiYXJyZWxNb2R1bGVzLlBsYXllcignTmFydXRvJywgNTAsICdLb25vaGEnKTtcbm5pbmphLmF0dGFjaygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==