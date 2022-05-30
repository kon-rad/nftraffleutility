"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_tina_components_TinaProvider_jsx",{

/***/ "./components/blocks/hero.tsx":
/*!************************************!*\
  !*** ./components/blocks/hero.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Hero\": function() { return /* binding */ Hero; },\n/* harmony export */   \"heroBlockSchema\": function() { return /* binding */ heroBlockSchema; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/actions */ \"./components/util/actions.tsx\");\n/* harmony import */ var _util_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/container */ \"./components/util/container.tsx\");\n/* harmony import */ var _util_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/section */ \"./components/util/section.tsx\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout */ \"./components/layout/index.tsx\");\n/* harmony import */ var tinacms_dist_rich_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tinacms/dist/rich-text */ \"./node_modules/tinacms/dist/rich-text.js\");\n/* harmony import */ var tinacms_dist_rich_text__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tinacms_dist_rich_text__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Hero = function(param) {\n    var data = param.data, parentField = param.parentField;\n    _s();\n    var theme = (0,_layout__WEBPACK_IMPORTED_MODULE_5__.useTheme)();\n    var headlineColorClasses = {\n        blue: \"from-blue-400 to-blue-600\",\n        teal: \"from-teal-400 to-teal-600\",\n        green: \"from-green-400 to-green-600\",\n        red: \"from-red-400 to-red-600\",\n        pink: \"from-pink-400 to-pink-600\",\n        purple: \"from-purple-400 to-purple-600\",\n        orange: \"from-orange-300 to-orange-600\",\n        yellow: \"from-yellow-400 to-yellow-600\"\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_util_section__WEBPACK_IMPORTED_MODULE_4__.Section, {\n        color: data.color,\n        __source: {\n            fileName: \"/Users/konradgnat/dev/hackathons/chainlink2022/nftraffle/app/components/blocks/hero.tsx\",\n            lineNumber: 23,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_util_container__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            size: \"large\",\n            className: \"grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-8 items-center justify-center\",\n            __source: {\n                fileName: \"/Users/konradgnat/dev/hackathons/chainlink2022/nftraffle/app/components/blocks/hero.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"row-start-2 lg:row-start-1 lg:col-start-1 lg:col-end-3 text-center lg:text-left\",\n                    __source: {\n                        fileName: \"/Users/konradgnat/dev/hackathons/chainlink2022/nftraffle/app/components/blocks/hero.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        data.tagline && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h2\", {\n                            \"data-tinafield\": \"\".concat(parentField, \".tagline\"),\n                            className: \"relative inline-block px-3 py-1 mb-8 text-md font-bold tracking-wide title-font z-20\",\n                            __source: {\n                                fileName: \"/Users/konradgnat/dev/hackathons/chainlink2022/nftraffle/app/components/blocks/hero.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: [\n                                data.tagline,\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    className: \"absolute w-full h-full left-0 top-0 rounded-full -z-1 bg-current opacity-7\",\n                                    __source: {\n                                        fileName: \"/Users/konradgnat/dev/hackathons/chainlink2022/nftraffle/app/components/blocks/hero.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this\n                                })\n                            ]\n                        }),\n                        data.headline && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                            \"data-tinafield\": \"\".concat(parentField, \".headline\"),\n                            className: \"w-full relative\\tmb-10 text-5xl font-extrabold tracking-normal leading-tight title-font\",\n                            __source: {\n                                fileName: \"/Users/konradgnat/dev/hackathons/chainlink2022/nftraffle/app/components/blocks/hero.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                className: \"bg-clip-text text-transparent bg-gradient-to-r  \".concat(data.color === \"primary\" ? \"from-white to-gray-100\" : headlineColorClasses[theme.color]),\n                                __source: {\n                                    fileName: \"/Users/konradgnat/dev/hackathons/chainlink2022/nftraffle/app/components/blocks/hero.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: data.headline\n                            })\n                        }),\n                        data.text && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            \"data-tinafield\": \"\".concat(parentField, \".text\"),\n                            className: \"prose prose-lg mx-auto lg:mx-0 mb-10 \".concat(data.color === \"primary\" ? \"prose-primary\" : \"dark:prose-dark\"),\n                            __source: {\n                                fileName: \"/Users/konradgnat/dev/hackathons/chainlink2022/nftraffle/app/components/blocks/hero.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(tinacms_dist_rich_text__WEBPACK_IMPORTED_MODULE_6__.TinaMarkdown, {\n                                content: data.text,\n                                __source: {\n                                    fileName: \"/Users/konradgnat/dev/hackathons/chainlink2022/nftraffle/app/components/blocks/hero.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                },\n                                __self: _this\n                            })\n                        }),\n                        data.actions && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_util_actions__WEBPACK_IMPORTED_MODULE_2__.Actions, {\n                            parentField: \"\".concat(parentField, \".actions\"),\n                            className: \"justify-center lg:justify-start py-2\",\n                            parentColor: data.color,\n                            actions: data.actions,\n                            __source: {\n                                fileName: \"/Users/konradgnat/dev/hackathons/chainlink2022/nftraffle/app/components/blocks/hero.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            },\n                            __self: _this\n                        })\n                    ]\n                }),\n                data.image && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    \"data-tinafield\": \"\".concat(parentField, \".image\"),\n                    className: \"row-start-1 flex justify-center\",\n                    __source: {\n                        fileName: \"/Users/konradgnat/dev/hackathons/chainlink2022/nftraffle/app/components/blocks/hero.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        className: \"w-full max-w-xs lg:max-w-none h-auto border-radius-\",\n                        alt: data.image.alt,\n                        src: data.image.src,\n                        __source: {\n                            fileName: \"/Users/konradgnat/dev/hackathons/chainlink2022/nftraffle/app/components/blocks/hero.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        },\n                        __self: _this\n                    })\n                })\n            ]\n        })\n    }));\n};\n_s(Hero, \"VrMvFCCB9Haniz3VCRPNUiCauHs=\", false, function() {\n    return [\n        _layout__WEBPACK_IMPORTED_MODULE_5__.useTheme\n    ];\n});\n_c = Hero;\nvar heroBlockSchema = {\n    name: \"hero\",\n    label: \"Hero\",\n    ui: {\n        previewSrc: \"/blocks/hero.png\",\n        defaultItem: {\n            tagline: \"Here's some text above the other text\",\n            headline: \"This Big Text is Totally Awesome\",\n            text: \"Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.\"\n        }\n    },\n    fields: [\n        {\n            type: \"string\",\n            label: \"Tagline\",\n            name: \"tagline\"\n        },\n        {\n            type: \"string\",\n            label: \"Headline\",\n            name: \"headline\"\n        },\n        {\n            label: \"Text\",\n            name: \"text\",\n            type: \"rich-text\"\n        },\n        {\n            label: \"Actions\",\n            name: \"actions\",\n            type: \"object\",\n            list: true,\n            ui: {\n                defaultItem: {\n                    label: \"Action Label\",\n                    type: \"button\",\n                    icon: true,\n                    link: \"/\"\n                }\n            },\n            fields: [\n                {\n                    label: \"Label\",\n                    name: \"label\",\n                    type: \"string\"\n                },\n                {\n                    label: \"Type\",\n                    name: \"type\",\n                    type: \"string\",\n                    options: [\n                        {\n                            label: \"Button\",\n                            value: \"button\"\n                        },\n                        {\n                            label: \"Link\",\n                            value: \"link\"\n                        }, \n                    ]\n                },\n                {\n                    label: \"Icon\",\n                    name: \"icon\",\n                    type: \"boolean\"\n                },\n                {\n                    label: \"Link\",\n                    name: \"link\",\n                    type: \"string\"\n                }, \n            ]\n        },\n        {\n            type: \"object\",\n            label: \"Image\",\n            name: \"image\",\n            fields: [\n                {\n                    name: \"src\",\n                    label: \"Image Source\",\n                    type: \"image\"\n                },\n                {\n                    name: \"alt\",\n                    label: \"Alt Text\",\n                    type: \"string\"\n                }, \n            ]\n        },\n        {\n            type: \"string\",\n            label: \"Color\",\n            name: \"color\",\n            options: [\n                {\n                    label: \"Default\",\n                    value: \"default\"\n                },\n                {\n                    label: \"Tint\",\n                    value: \"tint\"\n                },\n                {\n                    label: \"Primary\",\n                    value: \"primary\"\n                }, \n            ]\n        }, \n    ]\n};\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLENBQVM7Z0JBQUMsQ0FBQztnQkFDdEMsQ0FBQztvQkFBQ1YsS0FBSyxFQUFFLENBQU07b0JBQUVVLEtBQUssRUFBRSxDQUFNO2dCQUFDLENBQUM7Z0JBQ2hDLENBQUM7b0JBQUNWLEtBQUssRUFBRSxDQUFTO29CQUFFVSxLQUFLLEVBQUUsQ0FBUztnQkFBQyxDQUFDO1lBQ3hDLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9ja3MvaGVyby50c3g/ODRjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tIFwiLi4vdXRpbC9hY3Rpb25zXCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi4vdXRpbC9jb250YWluZXJcIjtcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tIFwiLi4vdXRpbC9zZWN0aW9uXCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCIuLi9sYXlvdXRcIjtcbmltcG9ydCB7IFRpbmFNYXJrZG93biB9IGZyb20gXCJ0aW5hY21zL2Rpc3QvcmljaC10ZXh0XCI7XG5pbXBvcnQgdHlwZSB7IFRpbmFUZW1wbGF0ZSB9IGZyb20gXCJ0aW5hY21zXCI7XG5cbmV4cG9ydCBjb25zdCBIZXJvID0gKHsgZGF0YSwgcGFyZW50RmllbGQgfSkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGhlYWRsaW5lQ29sb3JDbGFzc2VzID0ge1xuICAgIGJsdWU6IFwiZnJvbS1ibHVlLTQwMCB0by1ibHVlLTYwMFwiLFxuICAgIHRlYWw6IFwiZnJvbS10ZWFsLTQwMCB0by10ZWFsLTYwMFwiLFxuICAgIGdyZWVuOiBcImZyb20tZ3JlZW4tNDAwIHRvLWdyZWVuLTYwMFwiLFxuICAgIHJlZDogXCJmcm9tLXJlZC00MDAgdG8tcmVkLTYwMFwiLFxuICAgIHBpbms6IFwiZnJvbS1waW5rLTQwMCB0by1waW5rLTYwMFwiLFxuICAgIHB1cnBsZTogXCJmcm9tLXB1cnBsZS00MDAgdG8tcHVycGxlLTYwMFwiLFxuICAgIG9yYW5nZTogXCJmcm9tLW9yYW5nZS0zMDAgdG8tb3JhbmdlLTYwMFwiLFxuICAgIHllbGxvdzogXCJmcm9tLXllbGxvdy00MDAgdG8teWVsbG93LTYwMFwiLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24gY29sb3I9e2RhdGEuY29sb3J9PlxuICAgICAgPENvbnRhaW5lclxuICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0zIGdhcC14LTEwIGdhcC15LTggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctc3RhcnQtMiBsZzpyb3ctc3RhcnQtMSBsZzpjb2wtc3RhcnQtMSBsZzpjb2wtZW5kLTMgdGV4dC1jZW50ZXIgbGc6dGV4dC1sZWZ0XCI+XG4gICAgICAgICAge2RhdGEudGFnbGluZSAmJiAoXG4gICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgZGF0YS10aW5hZmllbGQ9e2Ake3BhcmVudEZpZWxkfS50YWdsaW5lYH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWJsb2NrIHB4LTMgcHktMSBtYi04IHRleHQtbWQgZm9udC1ib2xkIHRyYWNraW5nLXdpZGUgdGl0bGUtZm9udCB6LTIwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2RhdGEudGFnbGluZX1cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCBsZWZ0LTAgdG9wLTAgcm91bmRlZC1mdWxsIC16LTEgYmctY3VycmVudCBvcGFjaXR5LTdcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2RhdGEuaGVhZGxpbmUgJiYgKFxuICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgIGRhdGEtdGluYWZpZWxkPXtgJHtwYXJlbnRGaWVsZH0uaGVhZGxpbmVgfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgcmVsYXRpdmVcdG1iLTEwIHRleHQtNXhsIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLW5vcm1hbCBsZWFkaW5nLXRpZ2h0IHRpdGxlLWZvbnRgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50IGJnLWdyYWRpZW50LXRvLXIgICR7XG4gICAgICAgICAgICAgICAgICBkYXRhLmNvbG9yID09PSBcInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICA/IGBmcm9tLXdoaXRlIHRvLWdyYXktMTAwYFxuICAgICAgICAgICAgICAgICAgICA6IGhlYWRsaW5lQ29sb3JDbGFzc2VzW3RoZW1lLmNvbG9yXVxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2RhdGEuaGVhZGxpbmV9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7ZGF0YS50ZXh0ICYmIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgZGF0YS10aW5hZmllbGQ9e2Ake3BhcmVudEZpZWxkfS50ZXh0YH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJvc2UgcHJvc2UtbGcgbXgtYXV0byBsZzpteC0wIG1iLTEwICR7XG4gICAgICAgICAgICAgICAgZGF0YS5jb2xvciA9PT0gXCJwcmltYXJ5XCIgPyBgcHJvc2UtcHJpbWFyeWAgOiBgZGFyazpwcm9zZS1kYXJrYFxuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRpbmFNYXJrZG93biBjb250ZW50PXtkYXRhLnRleHR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtkYXRhLmFjdGlvbnMgJiYgKFxuICAgICAgICAgICAgPEFjdGlvbnNcbiAgICAgICAgICAgICAgcGFyZW50RmllbGQ9e2Ake3BhcmVudEZpZWxkfS5hY3Rpb25zYH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgbGc6anVzdGlmeS1zdGFydCBweS0yXCJcbiAgICAgICAgICAgICAgcGFyZW50Q29sb3I9e2RhdGEuY29sb3J9XG4gICAgICAgICAgICAgIGFjdGlvbnM9e2RhdGEuYWN0aW9uc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtkYXRhLmltYWdlICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBkYXRhLXRpbmFmaWVsZD17YCR7cGFyZW50RmllbGR9LmltYWdlYH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdy1zdGFydC0xIGZsZXgganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LXhzIGxnOm1heC13LW5vbmUgaC1hdXRvIGJvcmRlci1yYWRpdXMtXCJcbiAgICAgICAgICAgICAgYWx0PXtkYXRhLmltYWdlLmFsdH1cbiAgICAgICAgICAgICAgc3JjPXtkYXRhLmltYWdlLnNyY31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgaGVyb0Jsb2NrU2NoZW1hOiBUaW5hVGVtcGxhdGUgPSB7XG4gIG5hbWU6IFwiaGVyb1wiLFxuICBsYWJlbDogXCJIZXJvXCIsXG4gIHVpOiB7XG4gICAgcHJldmlld1NyYzogXCIvYmxvY2tzL2hlcm8ucG5nXCIsXG4gICAgZGVmYXVsdEl0ZW06IHtcbiAgICAgIHRhZ2xpbmU6IFwiSGVyZSdzIHNvbWUgdGV4dCBhYm92ZSB0aGUgb3RoZXIgdGV4dFwiLFxuICAgICAgaGVhZGxpbmU6IFwiVGhpcyBCaWcgVGV4dCBpcyBUb3RhbGx5IEF3ZXNvbWVcIixcbiAgICAgIHRleHQ6IFwiUGhhc2VsbHVzIHNjZWxlcmlzcXVlLCBsaWJlcm8gZXUgZmluaWJ1cyBydXRydW0sIHJpc3VzIHJpc3VzIGFjY3Vtc2FuIGxpYmVybywgbmVjIG1vbGVzdGllIHVybmEgZHVpIGEgbGVvLlwiLFxuICAgIH0sXG4gIH0sXG4gIGZpZWxkczogW1xuICAgIHtcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICBsYWJlbDogXCJUYWdsaW5lXCIsXG4gICAgICBuYW1lOiBcInRhZ2xpbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICBsYWJlbDogXCJIZWFkbGluZVwiLFxuICAgICAgbmFtZTogXCJoZWFkbGluZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiVGV4dFwiLFxuICAgICAgbmFtZTogXCJ0ZXh0XCIsXG4gICAgICB0eXBlOiBcInJpY2gtdGV4dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiQWN0aW9uc1wiLFxuICAgICAgbmFtZTogXCJhY3Rpb25zXCIsXG4gICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgbGlzdDogdHJ1ZSxcbiAgICAgIHVpOiB7XG4gICAgICAgIGRlZmF1bHRJdGVtOiB7XG4gICAgICAgICAgbGFiZWw6IFwiQWN0aW9uIExhYmVsXCIsXG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICBpY29uOiB0cnVlLFxuICAgICAgICAgIGxpbms6IFwiL1wiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGZpZWxkczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiTGFiZWxcIixcbiAgICAgICAgICBuYW1lOiBcImxhYmVsXCIsXG4gICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIlR5cGVcIixcbiAgICAgICAgICBuYW1lOiBcInR5cGVcIixcbiAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiQnV0dG9uXCIsIHZhbHVlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIkxpbmtcIiwgdmFsdWU6IFwibGlua1wiIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkljb25cIixcbiAgICAgICAgICBuYW1lOiBcImljb25cIixcbiAgICAgICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkxpbmtcIixcbiAgICAgICAgICBuYW1lOiBcImxpbmtcIixcbiAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICBsYWJlbDogXCJJbWFnZVwiLFxuICAgICAgbmFtZTogXCJpbWFnZVwiLFxuICAgICAgZmllbGRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInNyY1wiLFxuICAgICAgICAgIGxhYmVsOiBcIkltYWdlIFNvdXJjZVwiLFxuICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiYWx0XCIsXG4gICAgICAgICAgbGFiZWw6IFwiQWx0IFRleHRcIixcbiAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICBsYWJlbDogXCJDb2xvclwiLFxuICAgICAgbmFtZTogXCJjb2xvclwiLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7IGxhYmVsOiBcIkRlZmF1bHRcIiwgdmFsdWU6IFwiZGVmYXVsdFwiIH0sXG4gICAgICAgIHsgbGFiZWw6IFwiVGludFwiLCB2YWx1ZTogXCJ0aW50XCIgfSxcbiAgICAgICAgeyBsYWJlbDogXCJQcmltYXJ5XCIsIHZhbHVlOiBcInByaW1hcnlcIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFjdGlvbnMiLCJDb250YWluZXIiLCJTZWN0aW9uIiwidXNlVGhlbWUiLCJUaW5hTWFya2Rvd24iLCJIZXJvIiwiZGF0YSIsInBhcmVudEZpZWxkIiwidGhlbWUiLCJoZWFkbGluZUNvbG9yQ2xhc3NlcyIsImJsdWUiLCJ0ZWFsIiwiZ3JlZW4iLCJyZWQiLCJwaW5rIiwicHVycGxlIiwib3JhbmdlIiwieWVsbG93IiwiY29sb3IiLCJzaXplIiwiY2xhc3NOYW1lIiwiZGl2IiwidGFnbGluZSIsImgyIiwiZGF0YS10aW5hZmllbGQiLCJzcGFuIiwiaGVhZGxpbmUiLCJoMyIsInRleHQiLCJjb250ZW50IiwiYWN0aW9ucyIsInBhcmVudENvbG9yIiwiaW1hZ2UiLCJpbWciLCJhbHQiLCJzcmMiLCJoZXJvQmxvY2tTY2hlbWEiLCJuYW1lIiwibGFiZWwiLCJ1aSIsInByZXZpZXdTcmMiLCJkZWZhdWx0SXRlbSIsImZpZWxkcyIsInR5cGUiLCJsaXN0IiwiaWNvbiIsImxpbmsiLCJvcHRpb25zIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/blocks/hero.tsx\n");

/***/ })

});