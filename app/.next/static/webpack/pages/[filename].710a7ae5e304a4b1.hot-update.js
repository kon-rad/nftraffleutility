"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[filename]",{

/***/ "./components/blocks/raffle.tsx":
/*!**************************************!*\
  !*** ./components/blocks/raffle.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Raffle\": function() { return /* binding */ Raffle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar Raffle = function() {\n    _s1();\n    var ref = _slicedToArray(useState(\"\"), 2), name = ref[0], setName = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"flex-1 flex flex-col gap-6 text-center items-center lg:items-start lg:text-left max-w-xl mx-auto\",\n        style: {\n            flexBasis: \"16rem\"\n        },\n        __source: {\n            fileName: \"/Users/konradgnat/dev/hackathons/chainlink2022/nftraffle/app/components/blocks/raffle.tsx\",\n            lineNumber: 7,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                className: \"prose prose-lg mx-auto lg:mx-0 mb-10 prose-primary my-6\",\n                __source: {\n                    fileName: \"/Users/konradgnat/dev/hackathons/chainlink2022/nftraffle/app/components/blocks/raffle.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Raffle\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h5\", {\n                className: \"prose prose-lg mx-auto lg:mx-0 mb-10 prose-primary my-6\",\n                __source: {\n                    fileName: \"/Users/konradgnat/dev/hackathons/chainlink2022/nftraffle/app/components/blocks/raffle.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Create a raffle\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                value: name,\n                onChange: function(e) {\n                    return setName(e.target.value);\n                },\n                placeholder: \"name\",\n                __source: {\n                    fileName: \"/Users/konradgnat/dev/hackathons/chainlink2022/nftraffle/app/components/blocks/raffle.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s1(Raffle, \"gFPpQ6rgfiGkmgRsh4q2nIO1W+Q=\");\n_c = Raffle;\nvar _c;\n$RefreshReg$(_c, \"Raffle\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jsb2Nrcy9yYWZmbGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHdkIsR0FBSyxDQUFDQyxNQUFNLEdBQUcsUUFDdEIsR0FENEIsQ0FBQzs7SUFDekIsR0FBSyxDQUFtQkMsR0FBb0Isa0JBQXBCQSxRQUFRLENBQVMsQ0FBRSxRQUFwQ0MsSUFBSSxHQUFhRCxHQUFvQixLQUEvQkUsT0FBTyxHQUFJRixHQUFvQjtJQUM1QyxNQUFNLHVFQUNERyxDQUFHO1FBQ0FDLFNBQVMsRUFBQyxDQUFrRztRQUM1R0MsS0FBSyxFQUFFLENBQUM7WUFBQ0MsU0FBUyxFQUFFLENBQU87UUFBQyxDQUFDOzs7Ozs7OztpRkFFNUJDLENBQUU7Z0JBQUNILFNBQVMsRUFBRyxDQUF1RDs7Ozs7OzswQkFBRyxDQUFNOztpRkFDL0VJLENBQUU7Z0JBQUNKLFNBQVMsRUFBRyxDQUF1RDs7Ozs7OzswQkFBRyxDQUFlOztpRkFDeEZLLENBQUs7Z0JBQUNDLEtBQUssRUFBRVQsSUFBSTtnQkFBRVUsUUFBUSxFQUFFLFFBQVEsQ0FBUEMsQ0FBTTtvQkFBS1YsTUFBTSxDQUFOQSxPQUFPLENBQUNVLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLOztnQkFBR0ksV0FBVyxFQUFDLENBQU07Ozs7Ozs7Ozs7QUFHakcsQ0FBQztJQVpZZixNQUFNO0tBQU5BLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9ja3MvcmFmZmxlLnRzeD85ZDhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgVGluYVRlbXBsYXRlIH0gZnJvbSBcInRpbmFjbXNcIjtcblxuZXhwb3J0IGNvbnN0IFJhZmZsZSA9ICgpID0+IHtcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY29sIGdhcC02IHRleHQtY2VudGVyIGl0ZW1zLWNlbnRlciBsZzppdGVtcy1zdGFydCBsZzp0ZXh0LWxlZnQgbWF4LXcteGwgbXgtYXV0b1wiXG4gICAgICAgICAgICBzdHlsZT17eyBmbGV4QmFzaXM6IFwiMTZyZW1cIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtgcHJvc2UgcHJvc2UtbGcgbXgtYXV0byBsZzpteC0wIG1iLTEwIHByb3NlLXByaW1hcnkgbXktNmB9PlJhZmZsZTwvaDM+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtgcHJvc2UgcHJvc2UtbGcgbXgtYXV0byBsZzpteC0wIG1iLTEwIHByb3NlLXByaW1hcnkgbXktNmB9PkNyZWF0ZSBhIHJhZmZsZTwvaDU+XG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXsoZTogYW55KSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJuYW1lXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmFmZmxlIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiZmxleEJhc2lzIiwiaDMiLCJoNSIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/blocks/raffle.tsx\n");

/***/ })

});