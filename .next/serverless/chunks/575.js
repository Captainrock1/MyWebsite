"use strict";
exports.id = 575;
exports.ids = [575];
exports.modules = {

/***/ 2980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);


const Footer = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "text-darkgrey py-3 bg-gray-50 dark:bg-black dark:text-grey",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-center w-11/12 mx-auto mt-1 items-center text-sm",
                children: [
                    "\xa9 ",
                    new Date().getFullYear(),
                    " | Made in Phitsanulok 💜💜💜 \xa0by\xa0\xa0Peerapon Chaijittiprasert"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-center w-11/12 mx-auto mt-1 items-center text-sm",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://nextjs.org/",
                        children: "Next JS"
                    }),
                    "\xa0\xa0",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://www.typescriptlang.org/",
                        children: "Typescript"
                    }),
                    "\xa0\xa0",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://tailwindcss.com",
                        children: "Tailwind CSS"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 6166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _lib_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5442);
/* harmony import */ var _theme_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7028);






const Nav = (props)=>{
    const { dark , toggleDark  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_theme_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "px-10 md:px-32 flex justify-between flex-wrap items-center lg:py-0 py-2 text-darkgrey bg-opacity-70 top-0 fixed w-screen z-10 bg-gray-50 border-b dark:border-darkergrey border-gray-200 dark:bg-black dark:text-white",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/",
                        passHref: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            className: "text-3xl font-bold text-black dark:text-white",
                            children: [
                                _lib_content__WEBPACK_IMPORTED_MODULE_3__/* .nav.logo */ .$n.logo,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "rounded-full bg-blue h-2 w-2 inline-block"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: toggleDark,
                        className: "ml-4 fill-current focus:outline-none",
                        accessKey: "t",
                        children: dark ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            className: "border-white",
                            id: "moon",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                            })
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            id: "sun",
                            className: "border-black",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "5"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                    x1: "12",
                                    y1: "1",
                                    x2: "12",
                                    y2: "3"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                    x1: "12",
                                    y1: "21",
                                    x2: "12",
                                    y2: "23"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                    x1: "4.22",
                                    y1: "4.22",
                                    x2: "5.64",
                                    y2: "5.64"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                    x1: "18.36",
                                    y1: "18.36",
                                    x2: "19.78",
                                    y2: "19.78"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                    x1: "1",
                                    y1: "12",
                                    x2: "3",
                                    y2: "12"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                    x1: "21",
                                    y1: "12",
                                    x2: "23",
                                    y2: "12"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                    x1: "4.22",
                                    y1: "19.78",
                                    x2: "5.64",
                                    y2: "18.36"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                    x1: "18.36",
                                    y1: "5.64",
                                    x2: "19.78",
                                    y2: "4.22"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: "menu-toggle",
                className: "pointer-cursor lg:hidden block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    className: "fill-current text-blue dark:text-white",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: "hidden",
                type: "checkbox",
                id: "menu-toggle"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden lg:flex lg:items-center lg:w-auto w-full",
                id: "menu",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "lg:flex-1 items-center justify-between pt-4 lg:pt-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: _lib_content__WEBPACK_IMPORTED_MODULE_3__/* .nav.links.map */ .$n.links.map((link, index)=>{
                                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    href: link.to,
                                    passHref: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: `
									${props.name === link.to.replace('/', '') ? 'text-blue' : ''}
									text-sm font-medium hover:text-blue lg:p-4 py-3 px-0 block lg:inline`,
                                        children: link.text
                                    })
                                }, index));
                            })
                        })
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav); // border-bottom: 1px solid #e9e9e9;


/***/ })

};
;