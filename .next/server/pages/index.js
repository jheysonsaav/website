module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/atoms/WorkspaceButton.tsx":
/*!**********************************************!*\
  !*** ./components/atoms/WorkspaceButton.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_atoms_WorkspaceButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/atoms/WorkspaceButton */ \"./styles/atoms/WorkspaceButton.ts\");\n\nvar _jsxFileName = \"/home/jheyson/Dev/Projects/JheysonDev/website/components/atoms/WorkspaceButton.tsx\";\n\n\nfunction WorkspaceButton(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_atoms_WorkspaceButton__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    backgroundColor: props.color,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      children: props.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkspaceButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F0b21zL1dvcmtzcGFjZUJ1dHRvbi50c3g/YzZhOSJdLCJuYW1lcyI6WyJXb3Jrc3BhY2VCdXR0b24iLCJwcm9wcyIsImNvbG9yIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsZUFBVCxDQUF5QkMsS0FBekIsRUFBbUU7QUFDakUsc0JBQ0UscUVBQUMsdUVBQUQ7QUFBVyxtQkFBZSxFQUFFQSxLQUFLLENBQUNDLEtBQWxDO0FBQUEsMkJBQ0U7QUFBQSxnQkFBT0QsS0FBSyxDQUFDRTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFY0gsOEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b21zL1dvcmtzcGFjZUJ1dHRvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcIkAvc3R5bGVzL2F0b21zL1dvcmtzcGFjZUJ1dHRvblwiO1xuXG5mdW5jdGlvbiBXb3Jrc3BhY2VCdXR0b24ocHJvcHM6IFdvcmtzcGFjZUJ1dHRvblByb3BzKTogSlNYLkVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgYmFja2dyb3VuZENvbG9yPXtwcm9wcy5jb2xvcn0+XG4gICAgICA8c3Bhbj57cHJvcHMubmFtZX08L3NwYW4+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmtzcGFjZUJ1dHRvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/atoms/WorkspaceButton.tsx\n");

/***/ }),

/***/ "./components/molecules/TaskBarWorkspaces.tsx":
/*!****************************************************!*\
  !*** ./components/molecules/TaskBarWorkspaces.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_atoms_WorkspaceButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/atoms/WorkspaceButton */ \"./components/atoms/WorkspaceButton.tsx\");\n/* harmony import */ var _styles_molecules_TaskbarWorkspaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/molecules/TaskbarWorkspaces */ \"./styles/molecules/TaskbarWorkspaces.ts\");\n\nvar _jsxFileName = \"/home/jheyson/Dev/Projects/JheysonDev/website/components/molecules/TaskBarWorkspaces.tsx\";\n\n\n\nfunction TaskBarWorkspaces() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_molecules_TaskbarWorkspaces__WEBPACK_IMPORTED_MODULE_2__[\"WorkspacesContainer\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_atoms_WorkspaceButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      name: \"I\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_atoms_WorkspaceButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      name: \"II\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_atoms_WorkspaceButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      name: \"III\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_atoms_WorkspaceButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      name: \"IV\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_atoms_WorkspaceButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      name: \"V\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskBarWorkspaces);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vbGVjdWxlcy9UYXNrQmFyV29ya3NwYWNlcy50c3g/NTM0MiJdLCJuYW1lcyI6WyJUYXNrQmFyV29ya3NwYWNlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsaUJBQVQsR0FBMEM7QUFDMUMsc0JBQ0kscUVBQUMsdUZBQUQ7QUFBQSw0QkFDRSxxRUFBQyx5RUFBRDtBQUFpQixVQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMseUVBQUQ7QUFBaUIsVUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLHFFQUFDLHlFQUFEO0FBQWlCLFVBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFJRSxxRUFBQyx5RUFBRDtBQUFpQixVQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0UscUVBQUMseUVBQUQ7QUFBaUIsVUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVNDOztBQUVjQSxnRkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbW9sZWN1bGVzL1Rhc2tCYXJXb3Jrc3BhY2VzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXb3Jrc3BhY2VCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9hdG9tcy9Xb3Jrc3BhY2VCdXR0b25cIjtcbmltcG9ydCB7IFdvcmtzcGFjZXNDb250YWluZXIgfSBmcm9tIFwiQC9zdHlsZXMvbW9sZWN1bGVzL1Rhc2tiYXJXb3Jrc3BhY2VzXCI7XG5cbmZ1bmN0aW9uIFRhc2tCYXJXb3Jrc3BhY2VzKCk6IEpTWC5FbGVtZW50IHtcbnJldHVybiAoXG4gICAgPFdvcmtzcGFjZXNDb250YWluZXI+XG4gICAgICA8V29ya3NwYWNlQnV0dG9uIG5hbWU9XCJJXCIgLz5cbiAgICAgIDxXb3Jrc3BhY2VCdXR0b24gbmFtZT1cIklJXCIgLz5cbiAgICAgIDxXb3Jrc3BhY2VCdXR0b24gbmFtZT1cIklJSVwiIC8+XG4gICAgICA8V29ya3NwYWNlQnV0dG9uIG5hbWU9XCJJVlwiIC8+XG4gICAgICA8V29ya3NwYWNlQnV0dG9uIG5hbWU9XCJWXCIgLz5cbiAgICA8L1dvcmtzcGFjZXNDb250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tCYXJXb3Jrc3BhY2VzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/molecules/TaskBarWorkspaces.tsx\n");

/***/ }),

/***/ "./components/organisms/TaskBar.tsx":
/*!******************************************!*\
  !*** ./components/organisms/TaskBar.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_molecules_TaskBarWorkspaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/molecules/TaskBarWorkspaces */ \"./components/molecules/TaskBarWorkspaces.tsx\");\n/* harmony import */ var _styles_organisms_TaskBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/organisms/TaskBar */ \"./styles/organisms/TaskBar.ts\");\n\nvar _jsxFileName = \"/home/jheyson/Dev/Projects/JheysonDev/website/components/organisms/TaskBar.tsx\";\n\n\n\n\nfunction TaskBar() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_organisms_TaskBar__WEBPACK_IMPORTED_MODULE_3__[\"TaskBarContainer\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_molecules_TaskBarWorkspaces__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29yZ2FuaXNtcy9UYXNrQmFyLnRzeD8yMzJhIl0sIm5hbWVzIjpbIlRhc2tCYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULEdBQWdDO0FBQzlCLHNCQUNFLHFFQUFDLDBFQUFEO0FBQUEsMkJBQ0UscUVBQUMsK0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVjQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvb3JnYW5pc21zL1Rhc2tCYXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRhc2tCYXJXb3Jrc3BhY2VzIGZyb20gXCJAL2NvbXBvbmVudHMvbW9sZWN1bGVzL1Rhc2tCYXJXb3Jrc3BhY2VzXCI7XG5pbXBvcnQge1Rhc2tCYXJDb250YWluZXJ9IGZyb20gXCJAL3N0eWxlcy9vcmdhbmlzbXMvVGFza0JhclwiO1xuXG5mdW5jdGlvbiBUYXNrQmFyKCk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8VGFza0JhckNvbnRhaW5lcj5cbiAgICAgIDxUYXNrQmFyV29ya3NwYWNlcyAvPlxuICAgIDwvVGFza0JhckNvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFza0JhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/organisms/TaskBar.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_organisms_TaskBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/organisms/TaskBar */ \"./components/organisms/TaskBar.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/jheyson/Dev/Projects/JheysonDev/website/pages/index.tsx\";\n\n\n\n\nfunction changeBackground() {\n  let url = axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"/api/background\").then(res => res.data.urls.regular).catch(err => console.log(err));\n  setInterval(() => {\n    document.body.style.backgroundImage = `url(${url})`;\n  }, 5000);\n}\n\nfunction Home() {\n  changeBackground();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_organisms_TaskBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 10\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJjaGFuZ2VCYWNrZ3JvdW5kIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInVybHMiLCJyZWd1bGFyIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic2V0SW50ZXJ2YWwiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsZ0JBQVQsR0FBNEI7QUFDMUIsTUFBSUMsR0FBRyxHQUFHQyw0Q0FBSyxDQUNaQyxHQURPLENBQ0gsaUJBREcsRUFFUEMsSUFGTyxDQUVEQyxHQUFELElBQVNBLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxJQUFULENBQWNDLE9BRnJCLEVBR1BDLEtBSE8sQ0FHQUMsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUhSLENBQVY7QUFLQUcsYUFBVyxDQUFDLE1BQU07QUFDaEJDLFlBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CQyxlQUFwQixHQUF1QyxPQUFNaEIsR0FBSSxHQUFqRDtBQUNELEdBRlUsRUFFUixJQUZRLENBQVg7QUFHRDs7QUFFRCxTQUFTaUIsSUFBVCxHQUE2QjtBQUMzQmxCLGtCQUFnQjtBQUNoQixzQkFBTyxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7QUFFY2tCLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRhc2tCYXIgZnJvbSBcIkAvY29tcG9uZW50cy9vcmdhbmlzbXMvVGFza0JhclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5mdW5jdGlvbiBjaGFuZ2VCYWNrZ3JvdW5kKCkge1xuICBsZXQgdXJsID0gYXhpb3NcbiAgICAuZ2V0KFwiL2FwaS9iYWNrZ3JvdW5kXCIpXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEudXJscy5yZWd1bGFyKVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dXJsfSlgO1xuICB9LCA1MDAwKTtcbn1cblxuZnVuY3Rpb24gSG9tZSgpOiBKU1guRWxlbWVudCB7XG4gIGNoYW5nZUJhY2tncm91bmQoKVxuICByZXR1cm4gPFRhc2tCYXIgLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./styles/atoms/WorkspaceButton.ts":
/*!*****************************************!*\
  !*** ./styles/atoms/WorkspaceButton.ts ***!
  \*****************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  width: 1.5rem;\n  padding: auto;\n  margin: auto;\n  color: var(--font-color);\n  text-align: center;\n  align-items: center;\n  background-color: var(--${props => props.backgroundColor || \"bg-one\"});\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvYXRvbXMvV29ya3NwYWNlQnV0dG9uLnRzPzg2NTIiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLHNEQUFNLENBQUNDLEdBQW9CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE2QkMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLGVBQU4sSUFBeUIsUUFBUztBQUN6RSxDQVhBIiwiZmlsZSI6Ii4vc3R5bGVzL2F0b21zL1dvcmtzcGFjZUJ1dHRvbi50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2PENvbnRhaW5lclN0eWxlPmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgcGFkZGluZzogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tJHsocHJvcHMpID0+IHByb3BzLmJhY2tncm91bmRDb2xvciB8fCBcImJnLW9uZVwifSk7XG5gO1xuXG5leHBvcnQgeyBDb250YWluZXIgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/atoms/WorkspaceButton.ts\n");

/***/ }),

/***/ "./styles/molecules/TaskbarWorkspaces.ts":
/*!***********************************************!*\
  !*** ./styles/molecules/TaskbarWorkspaces.ts ***!
  \***********************************************/
/*! exports provided: WorkspacesContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WorkspacesContainer\", function() { return WorkspacesContainer; });\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);\n\nconst WorkspacesContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  display: flex;\n  justify-content: center;\n  position: relative;\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvbW9sZWN1bGVzL1Rhc2tiYXJXb3Jrc3BhY2VzLnRzPzNjNmUiXSwibmFtZXMiOlsiV29ya3NwYWNlc0NvbnRhaW5lciIsInN0eWxlZCIsImRpdiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLG1CQUFtQixHQUFHQyxzREFBTSxDQUFDQyxHQUFJO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLENBSkEiLCJmaWxlIjoiLi9zdHlsZXMvbW9sZWN1bGVzL1Rhc2tiYXJXb3Jrc3BhY2VzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IFdvcmtzcGFjZXNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuZXhwb3J0IHsgV29ya3NwYWNlc0NvbnRhaW5lciB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/molecules/TaskbarWorkspaces.ts\n");

/***/ }),

/***/ "./styles/organisms/TaskBar.ts":
/*!*************************************!*\
  !*** ./styles/organisms/TaskBar.ts ***!
  \*************************************/
/*! exports provided: TaskBarContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TaskBarContainer\", function() { return TaskBarContainer; });\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TaskBarContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.header`\n  display: flex;\n  justify-content: space-between;\n  height: 35px;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n  background-color: var(--bg-two);\n  overflow: hidden;\n\n  * {\n    padding: 0;\n    margin: 0;\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvb3JnYW5pc21zL1Rhc2tCYXIudHM/MjI4NSJdLCJuYW1lcyI6WyJUYXNrQmFyQ29udGFpbmVyIiwic3R5bGVkIiwiaGVhZGVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsZ0JBQWdCLEdBQUdDLHNEQUFNLENBQUNDLE1BQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWRBIiwiZmlsZSI6Ii4vc3R5bGVzL29yZ2FuaXNtcy9UYXNrQmFyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IFRhc2tCYXJDb250YWluZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogMzVweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXR3byk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCB7IFRhc2tCYXJDb250YWluZXIgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/organisms/TaskBar.ts\n");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/styled\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9zdHlsZWRcIj9hYjA5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBlbW90aW9uL3N0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@emotion/styled\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });