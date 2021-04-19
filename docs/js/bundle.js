/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/getJSON.js":
/*!***************************!*\
  !*** ./src/js/getJSON.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getJSON)
/* harmony export */ });
function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function () {
    var status = xhr.status;

    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };

  xhr.send();
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
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getJSON__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getJSON */ "./src/js/getJSON.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function generateTableHead(table, data) {
  var thead = table.createTHead();
  var row = thead.insertRow();

  var _iterator = _createForOfIteratorHelper(data),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      var th = document.createElement('th');
      var text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function generateTable(table, data) {
  var _iterator2 = _createForOfIteratorHelper(data),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var element = _step2.value;
      var row = table.insertRow(); // console.log(element);

      var key = void 0;

      for (key in element) {
        var cell = row.insertCell();
        var text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

(0,_getJSON__WEBPACK_IMPORTED_MODULE_0__.default)('', function (data) {
  console.log(data);
});
(0,_getJSON__WEBPACK_IMPORTED_MODULE_0__.default)('http://localhost:8000/api/v1/cities', function (err, records) {
  if (err !== null) {
    alert("Something went wrong: ".concat(err));
  } else {
    var table = document.querySelector('table');
    var data = Object.keys(records.data[0]);
    var dataRecords = records.data;
    generateTableHead(table, data);
    generateTable(table, dataRecords);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL2dldEpTT04uanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91bnRpdGxlZDEzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VudGl0bGVkMTMvLi9zcmMvanMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2V0SlNPTiIsInVybCIsImNhbGxiYWNrIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2UiLCJzZW5kIiwiZ2VuZXJhdGVUYWJsZUhlYWQiLCJ0YWJsZSIsImRhdGEiLCJ0aGVhZCIsImNyZWF0ZVRIZWFkIiwicm93IiwiaW5zZXJ0Um93Iiwia2V5IiwidGgiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsImdlbmVyYXRlVGFibGUiLCJlbGVtZW50IiwiY2VsbCIsImluc2VydENlbGwiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwicmVjb3JkcyIsImFsZXJ0IiwicXVlcnlTZWxlY3RvciIsIk9iamVjdCIsImtleXMiLCJkYXRhUmVjb3JkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQkMsUUFBdEIsRUFBZ0M7QUFDN0MsTUFBTUMsR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBWjtBQUNBRCxLQUFHLENBQUNFLElBQUosQ0FBUyxLQUFULEVBQWdCSixHQUFoQixFQUFx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T0FBTyxDQUFDbkIsSUFBNUI7QUFFQUYscUJBQWlCLENBQUNDLEtBQUQsRUFBUUMsSUFBUixDQUFqQjtBQUNBWSxpQkFBYSxDQUFDYixLQUFELEVBQVF5QixXQUFSLENBQWI7QUFDRDtBQUNGLENBWkksQ0FBUCxDIiwiZmlsZSI6ImpzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEpTT04odXJsLCBjYWxsYmFjaykge1xuICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gIHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgeyBzdGF0dXMgfSA9IHhocjtcbiAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGNhbGxiYWNrKG51bGwsIHhoci5yZXNwb25zZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKHN0YXR1cywgeGhyLnJlc3BvbnNlKTtcbiAgICB9XG4gIH07XG4gIHhoci5zZW5kKCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRKU09OIGZyb20gJy4vZ2V0SlNPTic7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKSB7XG4gIGNvbnN0IHRoZWFkID0gdGFibGUuY3JlYXRlVEhlYWQoKTtcbiAgY29uc3Qgcm93ID0gdGhlYWQuaW5zZXJ0Um93KCk7XG4gIGZvciAoY29uc3Qga2V5IG9mIGRhdGEpIHtcbiAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGtleSk7XG4gICAgdGguYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgcm93LmFwcGVuZENoaWxkKHRoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRhYmxlKHRhYmxlLCBkYXRhKSB7XG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBkYXRhKSB7XG4gICAgY29uc3Qgcm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XG4gICAgLy8gY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgbGV0IGtleTtcbiAgICBmb3IgKGtleSBpbiBlbGVtZW50KSB7XG4gICAgICBjb25zdCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcbiAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlbGVtZW50W2tleV0pO1xuICAgICAgY2VsbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxuZ2V0SlNPTignJywgKGRhdGEpID0+IHtcbiAgY29uc29sZS5sb2coZGF0YSk7XG59KTtcblxuZ2V0SlNPTignaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS92MS9jaXRpZXMnLFxuICAoZXJyLCByZWNvcmRzKSA9PiB7XG4gICAgaWYgKGVyciAhPT0gbnVsbCkge1xuICAgICAgYWxlcnQoYFNvbWV0aGluZyB3ZW50IHdyb25nOiAke2Vycn1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xuICAgICAgY29uc3QgZGF0YSA9IE9iamVjdC5rZXlzKChyZWNvcmRzLmRhdGFbMF0pKTtcbiAgICAgIGNvbnN0IGRhdGFSZWNvcmRzID0gcmVjb3Jkcy5kYXRhO1xuXG4gICAgICBnZW5lcmF0ZVRhYmxlSGVhZCh0YWJsZSwgZGF0YSk7XG4gICAgICBnZW5lcmF0ZVRhYmxlKHRhYmxlLCBkYXRhUmVjb3Jkcyk7XG4gICAgfVxuICB9KTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==