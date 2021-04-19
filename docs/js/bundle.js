/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/TableGen.js":
/*!****************************!*\
  !*** ./src/js/TableGen.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableGen)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TableGen = /*#__PURE__*/function () {
  function TableGen(table, data, dataRecords) {
    _classCallCheck(this, TableGen);

    this.generateTableHead(table, data);
    this.generateTable(table, dataRecords);
  }

  _createClass(TableGen, [{
    key: "generateTableHead",
    value: function generateTableHead(table, data) {
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
  }, {
    key: "generateTable",
    value: function generateTable(table, data) {
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
  }]);

  return TableGen;
}();



/***/ }),

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
;

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
/* harmony import */ var _TableGen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableGen */ "./src/js/TableGen.js");


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
    new _TableGen__WEBPACK_IMPORTED_MODULE_1__.default(table, data, dataRecords);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL1RhYmxlR2VuLmpzIiwid2VicGFjazovL3VudGl0bGVkMTMvLi9zcmMvanMvZ2V0SlNPTi5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VudGl0bGVkMTMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3VudGl0bGVkMTMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly91bnRpdGxlZDEzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy8uL3NyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJUYWJsZUdlbiIsInRhYmxlIiwiZGF0YSIsImRhdGFSZWNvcmRzIiwiZ2VuZXJhdGVUYWJsZUhlYWQiLCJnZW5lcmF0ZVRhYmxlIiwidGhlYWQiLCJjcmVhdGVUSGVhZCIsInJvdyIsImluc2VydFJvdyIsImtleSIsInRoIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50IiwiY2VsbCIsImluc2VydENlbGwiLCJnZXRKU09OIiwidXJsIiwiY2FsbGJhY2siLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJvbmxvYWQiLCJzdGF0dXMiLCJyZXNwb25zZSIsInNlbmQiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwicmVjb3JkcyIsImFsZXJ0IiwicXVlcnlTZWxlY3RvciIsIk9iamVjdCIsImtleXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxRO0FBQ25CLG9CQUFZQyxLQUFaLEVBQW1CQyxJQUFuQixFQUF5QkMsV0FBekIsRUFBc0M7QUFBQTs7QUFD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R0FBRyxLQUFLLElBQVosRUFBa0I7QUFDaEJFLFNBQUssaUNBQTBCRixHQUExQixFQUFMO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBTWhDLEtBQUssR0FBR1csUUFBUSxDQUFDd0IsYUFBVCxDQUF1QixPQUF2QixDQUFkO0FBQ0EsUUFBTWxDLElBQUksR0FBR21DLE1BQU0sQ0FBQ0MsSUFBUCxDQUFhSixPQUFPLENBQUNoQyxJQUFSLENBQWEsQ0FBYixDQUFiLENBQWI7QUFDQSxRQUFNQyxXQUFXLEdBQUcrQixPQUFPLENBQUNoQyxJQUE1QjtBQUVBLFFBQUlGLDhDQUFKLENBQWFDLEtBQWIsRUFBb0JDLElBQXBCLEVBQTBCQyxXQUExQjtBQUNEO0FBQ0YsQ0FYSSxDQUFQLEMiLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVHZW4ge1xuICBjb25zdHJ1Y3Rvcih0YWJsZSwgZGF0YSwgZGF0YVJlY29yZHMpIHtcbiAgICB0aGlzLmdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKTtcbiAgICB0aGlzLmdlbmVyYXRlVGFibGUodGFibGUsIGRhdGFSZWNvcmRzKTtcbiAgfVxuXG4gIGdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKSB7XG4gICAgY29uc3QgdGhlYWQgPSB0YWJsZS5jcmVhdGVUSGVhZCgpO1xuICAgIGNvbnN0IHJvdyA9IHRoZWFkLmluc2VydFJvdygpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGRhdGEpIHtcbiAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShrZXkpO1xuICAgICAgdGguYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQodGgpO1xuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlVGFibGUodGFibGUsIGRhdGEpIHtcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZGF0YSkge1xuICAgICAgY29uc3Qgcm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICAgIGxldCBrZXk7XG4gICAgICBmb3IgKGtleSBpbiBlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZWxlbWVudFtrZXldKTtcbiAgICAgICAgY2VsbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEpTT04odXJsLCBjYWxsYmFjaykge1xuICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gIHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc3RhdHVzID0geGhyLnN0YXR1cztcbiAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGNhbGxiYWNrKG51bGwsIHhoci5yZXNwb25zZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKHN0YXR1cywgeGhyLnJlc3BvbnNlKTtcbiAgICB9XG4gIH07XG4gIHhoci5zZW5kKCk7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0SlNPTiBmcm9tICcuL2dldEpTT04nO1xuaW1wb3J0IFRhYmxlR2VuIGZyb20gJy4vVGFibGVHZW4nO1xuXG5nZXRKU09OKCcnLCAoZGF0YSkgPT4ge1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbn0pO1xuXG5nZXRKU09OKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3YxL2NpdGllcycsXG4gIChlcnIsIHJlY29yZHMpID0+IHtcbiAgICBpZiAoZXJyICE9PSBudWxsKSB7XG4gICAgICBhbGVydChgU29tZXRoaW5nIHdlbnQgd3Jvbmc6ICR7ZXJyfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XG4gICAgICBjb25zdCBkYXRhID0gT2JqZWN0LmtleXMoKHJlY29yZHMuZGF0YVswXSkpO1xuICAgICAgY29uc3QgZGF0YVJlY29yZHMgPSByZWNvcmRzLmRhdGE7XG5cbiAgICAgIG5ldyBUYWJsZUdlbih0YWJsZSwgZGF0YSwgZGF0YVJlY29yZHMpO1xuICAgIH1cbiAgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9