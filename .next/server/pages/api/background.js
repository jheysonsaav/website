module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/background.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/background.ts":
/*!*********************************!*\
  !*** ./pages/api/background.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var unsplash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unsplash-js */ \"unsplash-js\");\n/* harmony import */ var unsplash_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(unsplash_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nasync function Background(req, res) {\n  const unsplash = Object(unsplash_js__WEBPACK_IMPORTED_MODULE_0__[\"createApi\"])({\n    accessKey: \"DAQrUWKCxhZMjDH2S_X0sFv27A3OO0X3usud_ryy2CM\"\n  });\n  let q = await unsplash.search.getPhotos({\n    query: \"technology\"\n  });\n  let urls = q.response.results.map(e => e.urls);\n  const index = ~~(Math.random() * urls.length - 1);\n  const image = urls[index];\n  const response = {\n    status: q.status,\n    urls: image\n  };\n  res.status(q.status).json(response);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Background);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYmFja2dyb3VuZC50cz81ZTc4Il0sIm5hbWVzIjpbIkJhY2tncm91bmQiLCJyZXEiLCJyZXMiLCJ1bnNwbGFzaCIsImNyZWF0ZUFwaSIsImFjY2Vzc0tleSIsInEiLCJzZWFyY2giLCJnZXRQaG90b3MiLCJxdWVyeSIsInVybHMiLCJyZXNwb25zZSIsInJlc3VsdHMiLCJtYXAiLCJlIiwiaW5kZXgiLCJNYXRoIiwicmFuZG9tIiwibGVuZ3RoIiwiaW1hZ2UiLCJzdGF0dXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFPQSxlQUFlQSxVQUFmLENBQTBCQyxHQUExQixFQUErQ0MsR0FBL0MsRUFBcUU7QUFDbkUsUUFBTUMsUUFBUSxHQUFHQyw2REFBUyxDQUFDO0FBQ3pCQyxhQUFTLEVBQUU7QUFEYyxHQUFELENBQTFCO0FBSUEsTUFBSUMsQ0FBQyxHQUFHLE1BQU1ILFFBQVEsQ0FBQ0ksTUFBVCxDQUFnQkMsU0FBaEIsQ0FBMEI7QUFDdENDLFNBQUssRUFBRTtBQUQrQixHQUExQixDQUFkO0FBSUEsTUFBSUMsSUFBYyxHQUFHSixDQUFDLENBQUNLLFFBQUYsQ0FBV0MsT0FBWCxDQUFtQkMsR0FBbkIsQ0FBd0JDLENBQUQsSUFBT0EsQ0FBQyxDQUFDSixJQUFoQyxDQUFyQjtBQUVBLFFBQU1LLEtBQUssR0FBRyxDQUFDLEVBQUVDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQlAsSUFBSSxDQUFDUSxNQUFyQixHQUE4QixDQUFoQyxDQUFmO0FBQ0EsUUFBTUMsS0FBSyxHQUFHVCxJQUFJLENBQUNLLEtBQUQsQ0FBbEI7QUFFQSxRQUFNSixRQUE0QixHQUFHO0FBQ25DUyxVQUFNLEVBQUVkLENBQUMsQ0FBQ2MsTUFEeUI7QUFFbkNWLFFBQUksRUFBRVM7QUFGNkIsR0FBckM7QUFLQWpCLEtBQUcsQ0FBQ2tCLE1BQUosQ0FBV2QsQ0FBQyxDQUFDYyxNQUFiLEVBQXFCQyxJQUFyQixDQUEwQlYsUUFBMUI7QUFDRDs7QUFFY1gseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvYmFja2dyb3VuZC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgY3JlYXRlQXBpIH0gZnJvbSBcInVuc3BsYXNoLWpzXCI7XG5cbmludGVyZmFjZSBCYWNrZ3JvdW5kUmVzcG9uc2Uge1xuICBzdGF0dXM/OiBudW1iZXI7XG4gIHVybHM6IHN0cmluZztcbn1cblxuYXN5bmMgZnVuY3Rpb24gQmFja2dyb3VuZChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICBjb25zdCB1bnNwbGFzaCA9IGNyZWF0ZUFwaSh7XG4gICAgYWNjZXNzS2V5OiBcIkRBUXJVV0tDeGhaTWpESDJTX1gwc0Z2MjdBM09PMFgzdXN1ZF9yeXkyQ01cIixcbiAgfSk7XG5cbiAgbGV0IHEgPSBhd2FpdCB1bnNwbGFzaC5zZWFyY2guZ2V0UGhvdG9zKHtcbiAgICBxdWVyeTogXCJ0ZWNobm9sb2d5XCIsXG4gIH0pO1xuXG4gIGxldCB1cmxzOiBzdHJpbmdbXSA9IHEucmVzcG9uc2UucmVzdWx0cy5tYXAoKGUpID0+IGUudXJscyk7XG5cbiAgY29uc3QgaW5kZXggPSB+fihNYXRoLnJhbmRvbSgpICogdXJscy5sZW5ndGggLSAxKTtcbiAgY29uc3QgaW1hZ2UgPSB1cmxzW2luZGV4XTtcblxuICBjb25zdCByZXNwb25zZTogQmFja2dyb3VuZFJlc3BvbnNlID0ge1xuICAgIHN0YXR1czogcS5zdGF0dXMsXG4gICAgdXJsczogaW1hZ2UsXG4gIH07XG5cbiAgcmVzLnN0YXR1cyhxLnN0YXR1cykuanNvbihyZXNwb25zZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/background.ts\n");

/***/ }),

/***/ "unsplash-js":
/*!******************************!*\
  !*** external "unsplash-js" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"unsplash-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1bnNwbGFzaC1qc1wiPzdmYjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoidW5zcGxhc2gtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bnNwbGFzaC1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///unsplash-js\n");

/***/ })

/******/ });