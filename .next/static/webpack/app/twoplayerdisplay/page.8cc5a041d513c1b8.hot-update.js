"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/twoplayerdisplay/page",{

/***/ "(app-pages-browser)/./components/Timer.jsx":
/*!******************************!*\
  !*** ./components/Timer.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Timer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Timer() {\n    _s();\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [minutes, setMinutes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    let timer;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isPlaying) {\n            timer = setInterval(()=>{\n                setSeconds(seconds + 1);\n                if (seconds === 59) {\n                    setMinutes(minutes + 1);\n                    setSeconds(0);\n                }\n            }, 1000);\n        }\n        return ()=>clearInterval(timer);\n    });\n    function handletimer() {\n        if (isPlaying) {\n            setIsPlaying(false);\n        } else {\n            setIsPlaying(true);\n        }\n    }\n    const restart = ()=>{\n        setSeconds(0);\n        setMinutes(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Timer\"\n            }, void 0, false, {\n                fileName: \"/Users/jamesyuill/Desktop/Northcoders/project-phase/guess-what-fe/components/Timer.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    String(minutes).length < 2 && 0,\n                    minutes,\n                    \":\",\n                    String(seconds).length < 2 && 0,\n                    seconds\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jamesyuill/Desktop/Northcoders/project-phase/guess-what-fe/components/Timer.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"stopstart\",\n                onClick: handletimer,\n                children: [\n                    \" \",\n                    \"Stop\",\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jamesyuill/Desktop/Northcoders/project-phase/guess-what-fe/components/Timer.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"stopstart\",\n                onClick: restart,\n                children: \"Restart\"\n            }, void 0, false, {\n                fileName: \"/Users/jamesyuill/Desktop/Northcoders/project-phase/guess-what-fe/components/Timer.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jamesyuill/Desktop/Northcoders/project-phase/guess-what-fe/components/Timer.jsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Timer, \"//b4dgRwo2rRQ2jQ/0LZuFA5vvU=\");\n_c = Timer;\nvar _c;\n$RefreshReg$(_c, \"Timer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVGltZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRDtBQUVwQyxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ0ksU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFFM0MsSUFBSVE7SUFFSlQsZ0RBQVNBLENBQUM7UUFDUixJQUFJTyxXQUFXO1lBQ2JFLFFBQVFDLFlBQVk7Z0JBQ2xCTixXQUFXRCxVQUFVO2dCQUVyQixJQUFJQSxZQUFZLElBQUk7b0JBQ2xCRyxXQUFXRCxVQUFVO29CQUNyQkQsV0FBVztnQkFDYjtZQUNGLEdBQUc7UUFDTDtRQUVBLE9BQU8sSUFBTU8sY0FBY0Y7SUFDN0I7SUFDQSxTQUFTRztRQUNQLElBQUlMLFdBQVc7WUFDYkMsYUFBYTtRQUNmLE9BQU87WUFDTEEsYUFBYTtRQUNmO0lBQ0Y7SUFFQSxNQUFNSyxVQUFVO1FBQ2RULFdBQVc7UUFDWEUsV0FBVztJQUNiO0lBRUEscUJBQ0UsOERBQUNROzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0E7O29CQUNFQyxPQUFPWCxTQUFTWSxNQUFNLEdBQUcsS0FBSztvQkFDOUJaO29CQUFRO29CQUFFVyxPQUFPYixTQUFTYyxNQUFNLEdBQUcsS0FBSztvQkFDeENkOzs7Ozs7OzBCQUVILDhEQUFDZTtnQkFBT0MsV0FBVTtnQkFBWUMsU0FBU1I7O29CQUNwQztvQkFBSTtvQkFDQTs7Ozs7OzswQkFHUCw4REFBQ007Z0JBQU9DLFdBQVU7Z0JBQVlDLFNBQVNQOzBCQUFTOzs7Ozs7Ozs7Ozs7QUFLdEQ7R0FwRHdCWDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RpbWVyLmpzeD84NGY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaW1lcigpIHtcbiAgY29uc3QgW3NlY29uZHMsIHNldFNlY29uZHNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFttaW51dGVzLCBzZXRNaW51dGVzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgbGV0IHRpbWVyO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzUGxheWluZykge1xuICAgICAgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNldFNlY29uZHMoc2Vjb25kcyArIDEpO1xuXG4gICAgICAgIGlmIChzZWNvbmRzID09PSA1OSkge1xuICAgICAgICAgIHNldE1pbnV0ZXMobWludXRlcyArIDEpO1xuICAgICAgICAgIHNldFNlY29uZHMoMCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgfSk7XG4gIGZ1bmN0aW9uIGhhbmRsZXRpbWVyKCkge1xuICAgIGlmIChpc1BsYXlpbmcpIHtcbiAgICAgIHNldElzUGxheWluZyhmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElzUGxheWluZyh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCByZXN0YXJ0ID0gKCkgPT4ge1xuICAgIHNldFNlY29uZHMoMCk7XG4gICAgc2V0TWludXRlcygwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+VGltZXI8L2gxPlxuICAgICAgPGgxPlxuICAgICAgICB7U3RyaW5nKG1pbnV0ZXMpLmxlbmd0aCA8IDIgJiYgMH1cbiAgICAgICAge21pbnV0ZXN9OntTdHJpbmcoc2Vjb25kcykubGVuZ3RoIDwgMiAmJiAwfVxuICAgICAgICB7c2Vjb25kc31cbiAgICAgIDwvaDE+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN0b3BzdGFydFwiIG9uQ2xpY2s9e2hhbmRsZXRpbWVyfT5cbiAgICAgICAgeycgJ31cbiAgICAgICAgU3RvcHsnICd9XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdG9wc3RhcnRcIiBvbkNsaWNrPXtyZXN0YXJ0fT5cbiAgICAgICAgUmVzdGFydFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRpbWVyIiwic2Vjb25kcyIsInNldFNlY29uZHMiLCJtaW51dGVzIiwic2V0TWludXRlcyIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiaGFuZGxldGltZXIiLCJyZXN0YXJ0IiwiZGl2IiwiaDEiLCJTdHJpbmciLCJsZW5ndGgiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Timer.jsx\n"));

/***/ })

});