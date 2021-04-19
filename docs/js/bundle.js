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
    alert('Something went wrong: ' + err);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL1RhYmxlR2VuLmpzIiwid2VicGFjazovL3VudGl0bGVkMTMvLi9zcmMvanMvZ2V0SlNPTi5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VudGl0bGVkMTMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3VudGl0bGVkMTMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly91bnRpdGxlZDEzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy8uL3NyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJUYWJsZUdlbiIsInRhYmxlIiwiZGF0YSIsImRhdGFSZWNvcmRzIiwiZ2VuZXJhdGVUYWJsZUhlYWQiLCJnZW5lcmF0ZVRhYmxlIiwidGhlYWQiLCJjcmVhdGVUSGVhZCIsInJvdyIsImluc2VydFJvdyIsImtleSIsInRoIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50IiwiY2VsbCIsImluc2VydENlbGwiLCJnZXRKU09OIiwidXJsIiwiY2FsbGJhY2siLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJvbmxvYWQiLCJzdGF0dXMiLCJyZXNwb25zZSIsInNlbmQiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwicmVjb3JkcyIsImFsZXJ0IiwicXVlcnlTZWxlY3RvciIsIk9iamVjdCIsImtleXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxRO0FBQ25CLG9CQUFZQyxLQUFaLEVBQW1CQyxJQUFuQixFQUF5QkMsV0FBekIsRUFBc0M7QUFBQTs7QUFD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R0FBRyxLQUFLLElBQVosRUFBa0I7QUFDaEJFLFNBQUssQ0FBQywyQkFBMkJGLEdBQTVCLENBQUw7QUFDRCxHQUZELE1BRU87QUFDTCxRQUFNaEMsS0FBSyxHQUFHVyxRQUFRLENBQUN3QixhQUFULENBQXVCLE9BQXZCLENBQWQ7QUFDQSxRQUFNbEMsSUFBSSxHQUFHbUMsTUFBTSxDQUFDQyxJQUFQLENBQWFKLE9BQU8sQ0FBQ2hDLElBQVIsQ0FBYSxDQUFiLENBQWIsQ0FBYjtBQUNBLFFBQU1DLFdBQVcsR0FBRytCLE9BQU8sQ0FBQ2hDLElBQTVCO0FBRUEsUUFBSUYsOENBQUosQ0FBYUMsS0FBYixFQUFvQkMsSUFBcEIsRUFBMEJDLFdBQTFCO0FBQ0Q7QUFDRixDQVhJLENBQVAsQyIsImZpbGUiOiJqcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZUdlbiB7XG4gIGNvbnN0cnVjdG9yKHRhYmxlLCBkYXRhLCBkYXRhUmVjb3Jkcykge1xuICAgIHRoaXMuZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpO1xuICAgIHRoaXMuZ2VuZXJhdGVUYWJsZSh0YWJsZSwgZGF0YVJlY29yZHMpO1xuICB9XG5cbiAgZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpIHtcbiAgICBjb25zdCB0aGVhZCA9IHRhYmxlLmNyZWF0ZVRIZWFkKCk7XG4gICAgY29uc3Qgcm93ID0gdGhlYWQuaW5zZXJ0Um93KCk7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgZGF0YSkge1xuICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGtleSk7XG4gICAgICB0aC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgIHJvdy5hcHBlbmRDaGlsZCh0aCk7XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVUYWJsZSh0YWJsZSwgZGF0YSkge1xuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBkYXRhKSB7XG4gICAgICBjb25zdCByb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgbGV0IGtleTtcbiAgICAgIGZvciAoa2V5IGluIGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlbGVtZW50W2tleV0pO1xuICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SlNPTih1cmwsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICB4aHIub3BlbignR0VUJywgdXJsLCB0cnVlKTtcbiAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzdGF0dXMgPSB4aHIuc3RhdHVzO1xuICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xuICAgICAgY2FsbGJhY2sobnVsbCwgeGhyLnJlc3BvbnNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soc3RhdHVzLCB4aHIucmVzcG9uc2UpO1xuICAgIH1cbiAgfTtcbiAgeGhyLnNlbmQoKTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRKU09OIGZyb20gJy4vZ2V0SlNPTic7XG5pbXBvcnQgVGFibGVHZW4gZnJvbSAnLi9UYWJsZUdlbic7XG5cbmdldEpTT04oJycsIChkYXRhKSA9PiB7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xufSk7XG5cbmdldEpTT04oJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdjEvY2l0aWVzJyxcbiAgKGVyciwgcmVjb3JkcykgPT4ge1xuICAgIGlmIChlcnIgIT09IG51bGwpIHtcbiAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZzogJyArIGVycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUnKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBPYmplY3Qua2V5cygocmVjb3Jkcy5kYXRhWzBdKSk7XG4gICAgICBjb25zdCBkYXRhUmVjb3JkcyA9IHJlY29yZHMuZGF0YTtcblxuICAgICAgbmV3IFRhYmxlR2VuKHRhYmxlLCBkYXRhLCBkYXRhUmVjb3Jkcyk7XG4gICAgfVxuICB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=