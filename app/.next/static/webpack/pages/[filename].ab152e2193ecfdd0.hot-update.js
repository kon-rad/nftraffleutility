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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Raffle\": function() { return /* binding */ Raffle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Raffle = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), nftAddress = ref1[0], setNftAddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), nftTokenId = ref2[0], setNftTokenId = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), ticketPrice = ref3[0], setTicketPrice = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), ticketGoal = ref4[0], setTicketGoal = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), raffleDuration = ref5[0], setRaffleDuration = ref5[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"flex-1 flex flex-col gap-6 text-center items-center lg:items-start lg:text-left max-w-xl mx-auto\",\n        style: {\n            flexBasis: \"16rem\"\n        },\n        __source: {\n            fileName: \"/Users/konradgnat/dev/hackathons/chainlink2022/nftraffle/app/components/blocks/raffle.tsx\",\n            lineNumber: 12,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                className: \"prose prose-lg mx-auto lg:mx-0 mb-10 prose-primary my-6\",\n                __source: {\n                    fileName: \"/Users/konradgnat/dev/hackathons/chainlink2022/nftraffle/app/components/blocks/raffle.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Raffle\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h5\", {\n                className: \"prose prose-lg mx-auto lg:mx-0 mb-10 prose-primary my-6\",\n                __source: {\n                    fileName: \"/Users/konradgnat/dev/hackathons/chainlink2022/nftraffle/app/components/blocks/raffle.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Create a raffle\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                value: name,\n                onChange: function(e) {\n                    return setName(e.target.value);\n                },\n                placeholder: \"name\",\n                __source: {\n                    fileName: \"/Users/konradgnat/dev/hackathons/chainlink2022/nftraffle/app/components/blocks/raffle.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                value: nftAddress,\n                onChange: function(e) {\n                    return setNftAddress(e.target.value);\n                },\n                placeholder: \"nftAddress\",\n                __source: {\n                    fileName: \"/Users/konradgnat/dev/hackathons/chainlink2022/nftraffle/app/components/blocks/raffle.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                value: nftTokenId,\n                onChange: function(e) {\n                    return setNftTokenId(e.target.value);\n                },\n                placeholder: \"nftTokenId\",\n                __source: {\n                    fileName: \"/Users/konradgnat/dev/hackathons/chainlink2022/nftraffle/app/components/blocks/raffle.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s(Raffle, \"vi8I2SscJ0d+4IEWf8gGPXfM0dA=\");\n_c = Raffle;\nvar _c;\n$RefreshReg$(_c, \"Raffle\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jsb2Nrcy9yYWZmbGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUM7OztBQUdoQyxHQUFLLENBQUNFLE1BQU0sR0FBRyxRQUN0QixHQUQ0QixDQUFDOztJQUN6QixHQUFLLENBQW1CRCxHQUFvQixHQUFwQkEsK0NBQVEsQ0FBUyxDQUFFLElBQXBDRSxJQUFJLEdBQWFGLEdBQW9CLEtBQS9CRyxPQUFPLEdBQUlILEdBQW9CO0lBQzVDLEdBQUssQ0FBK0JBLElBQW9CLEdBQXBCQSwrQ0FBUSxDQUFTLENBQUUsSUFBaERJLFVBQVUsR0FBbUJKLElBQW9CLEtBQXJDSyxhQUFhLEdBQUlMLElBQW9CO0lBQ3hELEdBQUssQ0FBK0JBLElBQW9CLEdBQXBCQSwrQ0FBUSxDQUFTLENBQUUsSUFBaERNLFVBQVUsR0FBbUJOLElBQW9CLEtBQXJDTyxhQUFhLEdBQUlQLElBQW9CO0lBQ3hELEdBQUssQ0FBaUNBLElBQW9CLEdBQXBCQSwrQ0FBUSxDQUFTLENBQUUsSUFBbERRLFdBQVcsR0FBb0JSLElBQW9CLEtBQXRDUyxjQUFjLEdBQUlULElBQW9CO0lBQzFELEdBQUssQ0FBK0JBLElBQW9CLEdBQXBCQSwrQ0FBUSxDQUFTLENBQUUsSUFBaERVLFVBQVUsR0FBbUJWLElBQW9CLEtBQXJDVyxhQUFhLEdBQUlYLElBQW9CO0lBQ3hELEdBQUssQ0FBdUNBLElBQW9CLEdBQXBCQSwrQ0FBUSxDQUFTLENBQUUsSUFBeERZLGNBQWMsR0FBdUJaLElBQW9CLEtBQXpDYSxpQkFBaUIsR0FBSWIsSUFBb0I7SUFDaEUsTUFBTSx1RUFDRGMsQ0FBRztRQUNBQyxTQUFTLEVBQUMsQ0FBa0c7UUFDNUdDLEtBQUssRUFBRSxDQUFDO1lBQUNDLFNBQVMsRUFBRSxDQUFPO1FBQUMsQ0FBQzs7Ozs7Ozs7aUZBRTVCQyxDQUFFO2dCQUFDSCxTQUFTLEVBQUcsQ0FBdUQ7Ozs7Ozs7MEJBQUcsQ0FBTTs7aUZBQy9FSSxDQUFFO2dCQUFDSixTQUFTLEVBQUcsQ0FBdUQ7Ozs7Ozs7MEJBQUcsQ0FBZTs7aUZBQ3hGSyxDQUFLO2dCQUFDQyxLQUFLLEVBQUVuQixJQUFJO2dCQUFFb0IsUUFBUSxFQUFFLFFBQVEsQ0FBUEMsQ0FBTTtvQkFBS3BCLE1BQU0sQ0FBTkEsT0FBTyxDQUFDb0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUs7O2dCQUFHSSxXQUFXLEVBQUMsQ0FBTTs7Ozs7Ozs7aUZBQ3BGTCxDQUFLO2dCQUFDQyxLQUFLLEVBQUVqQixVQUFVO2dCQUFFa0IsUUFBUSxFQUFFLFFBQVEsQ0FBUEMsQ0FBTTtvQkFBS2xCLE1BQU0sQ0FBTkEsYUFBYSxDQUFDa0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUs7O2dCQUFHSSxXQUFXLEVBQUMsQ0FBWTs7Ozs7Ozs7aUZBQ3RHTCxDQUFLO2dCQUFDQyxLQUFLLEVBQUVmLFVBQVU7Z0JBQUVnQixRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFNO29CQUFLaEIsTUFBTSxDQUFOQSxhQUFhLENBQUNnQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSzs7Z0JBQUdJLFdBQVcsRUFBQyxDQUFZOzs7Ozs7Ozs7O0FBV25ILENBQUM7R0EzQll4QixNQUFNO0tBQU5BLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9ja3MvcmFmZmxlLnRzeD85ZDhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgVGluYVRlbXBsYXRlIH0gZnJvbSBcInRpbmFjbXNcIjtcblxuZXhwb3J0IGNvbnN0IFJhZmZsZSA9ICgpID0+IHtcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IFtuZnRBZGRyZXNzLCBzZXROZnRBZGRyZXNzXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW25mdFRva2VuSWQsIHNldE5mdFRva2VuSWRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbdGlja2V0UHJpY2UsIHNldFRpY2tldFByaWNlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW3RpY2tldEdvYWwsIHNldFRpY2tldEdvYWxdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbcmFmZmxlRHVyYXRpb24sIHNldFJhZmZsZUR1cmF0aW9uXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2wgZ2FwLTYgdGV4dC1jZW50ZXIgaXRlbXMtY2VudGVyIGxnOml0ZW1zLXN0YXJ0IGxnOnRleHQtbGVmdCBtYXgtdy14bCBteC1hdXRvXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZsZXhCYXNpczogXCIxNnJlbVwiIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e2Bwcm9zZSBwcm9zZS1sZyBteC1hdXRvIGxnOm14LTAgbWItMTAgcHJvc2UtcHJpbWFyeSBteS02YH0+UmFmZmxlPC9oMz5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9e2Bwcm9zZSBwcm9zZS1sZyBteC1hdXRvIGxnOm14LTAgbWItMTAgcHJvc2UtcHJpbWFyeSBteS02YH0+Q3JlYXRlIGEgcmFmZmxlPC9oNT5cbiAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9eyhlOiBhbnkpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIm5hbWVcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtuZnRBZGRyZXNzfSBvbkNoYW5nZT17KGU6IGFueSkgPT4gc2V0TmZ0QWRkcmVzcyhlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwibmZ0QWRkcmVzc1wiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9e25mdFRva2VuSWR9IG9uQ2hhbmdlPXsoZTogYW55KSA9PiBzZXROZnRUb2tlbklkKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJuZnRUb2tlbklkXCIgLz5cblxuXG4gICAgICAgIHsvKiBzdHJpbmcgbWVtb3J5IF9uYW1lLFxuICAgICAgICBhZGRyZXNzIF9wcml6ZU5GVEFkZHJlc3MsXG4gICAgICAgIHVpbnQyNTYgX3ByaXplTkZUVG9rZW5JZCxcbiAgICAgICAgdWludDI1NiBfdGlja2V0UHJpY2UsXG4gICAgICAgIHVpbnQyNTYgX3RpY2tldEdvYWwsXG4gICAgICAgIHVpbnQyNTYgX3JhZmZsZUR1cmF0aW9uRGF5cyAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJSYWZmbGUiLCJuYW1lIiwic2V0TmFtZSIsIm5mdEFkZHJlc3MiLCJzZXROZnRBZGRyZXNzIiwibmZ0VG9rZW5JZCIsInNldE5mdFRva2VuSWQiLCJ0aWNrZXRQcmljZSIsInNldFRpY2tldFByaWNlIiwidGlja2V0R29hbCIsInNldFRpY2tldEdvYWwiLCJyYWZmbGVEdXJhdGlvbiIsInNldFJhZmZsZUR1cmF0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJmbGV4QmFzaXMiLCJoMyIsImg1IiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/blocks/raffle.tsx\n");

/***/ })

});