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

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeEditDescriptionForm\": () => (/* binding */ closeEditDescriptionForm),\n/* harmony export */   \"closeEditDueDateForm\": () => (/* binding */ closeEditDueDateForm),\n/* harmony export */   \"closeEditNotesForm\": () => (/* binding */ closeEditNotesForm),\n/* harmony export */   \"closeEditTitleForm\": () => (/* binding */ closeEditTitleForm),\n/* harmony export */   \"closeEditTodoForm\": () => (/* binding */ closeEditTodoForm),\n/* harmony export */   \"closePForm\": () => (/* binding */ closePForm),\n/* harmony export */   \"closePPCForm\": () => (/* binding */ closePPCForm),\n/* harmony export */   \"closeTDForm\": () => (/* binding */ closeTDForm),\n/* harmony export */   \"closeTDPCForm\": () => (/* binding */ closeTDPCForm),\n/* harmony export */   \"openEditDescriptionForm\": () => (/* binding */ openEditDescriptionForm),\n/* harmony export */   \"openEditDueDateForm\": () => (/* binding */ openEditDueDateForm),\n/* harmony export */   \"openEditNotesForm\": () => (/* binding */ openEditNotesForm),\n/* harmony export */   \"openEditTitleForm\": () => (/* binding */ openEditTitleForm),\n/* harmony export */   \"openEditTodoForm\": () => (/* binding */ openEditTodoForm),\n/* harmony export */   \"openPForm\": () => (/* binding */ openPForm),\n/* harmony export */   \"openPPCForm\": () => (/* binding */ openPPCForm),\n/* harmony export */   \"openTDForm\": () => (/* binding */ openTDForm),\n/* harmony export */   \"openTDPCForm\": () => (/* binding */ openTDPCForm)\n/* harmony export */ });\n// Display and hide forms\nfunction openPForm() {\n    document.getElementById('newProject').style.display = 'flex';\n};\n\nfunction closePForm() {\n    document.getElementById('newProject').style.display = 'none';\n    document.getElementById('newProject').reset();\n};\n\nfunction openTDForm() {\n    document.getElementById('todo').style.display = 'flex';\n};\n\nfunction closeTDForm() {\n    document.getElementById('todo').style.display = 'none';\n    document.getElementById('todo').reset();\n};\n\nfunction openPPCForm() {\n    document.getElementById('projectPriChange').style.display = 'flex';\n};\n\nfunction closePPCForm() {\n    document.getElementById('projectPriChange').style.display = 'none';\n    document.getElementById('projectPriChange').reset();\n};\n\nfunction openTDPCForm() {\n    document.getElementById('todoPriChange').style.display = 'flex';\n};\n\nfunction closeTDPCForm() {\n    document.getElementById('todoPriChange').style.display = 'none';\n    document.getElementById('todoPriChange').reset();\n};\n\nfunction openEditTodoForm() {\n    document.getElementById('editTodo').style.display = 'flex';\n};\n\nfunction closeEditTodoForm() {\n    document.getElementById('editTodo').style.display = 'none';\n    document.getElementById('editTodo').reset();\n};\n\nfunction openEditTitleForm() {\n    document.getElementById('editTitleForm').style.display = 'flex';\n};\n\nfunction closeEditTitleForm() {\n    document.getElementById('editTitleForm').style.display = 'none';\n    document.getElementById('editTitleForm').reset();\n};\n\nfunction openEditDescriptionForm() {\n    document.getElementById('editDescriptionForm').style.display = 'flex';\n};\n\nfunction closeEditDescriptionForm() {\n    document.getElementById('editDescriptionForm').style.display = 'none';\n    document.getElementById('editDescriptionForm').reset();\n};\n\nfunction openEditDueDateForm() {\n    document.getElementById('editDueDateForm').style.display = 'flex';\n};\n\nfunction closeEditDueDateForm() {\n    document.getElementById('editDueDateForm').style.display = 'none';\n    document.getElementById('editDueDateForm').reset();\n};\n\nfunction openEditNotesForm() {\n    document.getElementById('editNotesForm').style.display = 'flex';\n};\n\nfunction closeEditNotesForm() {\n    document.getElementById('editNotesForm').style.display = 'none';\n    document.getElementById('editNotesForm').reset();\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/functions.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/functions.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;