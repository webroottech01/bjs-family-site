"use strict";
exports.id = 2506;
exports.ids = [2506];
exports.modules = {

/***/ 1788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6170);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_breakpoints__WEBPACK_IMPORTED_MODULE_1__);


const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-b31fb8b0-0"
})`
  ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_1__.up)("lg")} {
    font-size: 16px;
  }
  ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_1__.down)("md")} {
    font-size: 14px;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);


/***/ }),

/***/ 2506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1788);
/* harmony import */ var _egg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4628);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1029);







function Person(props) {
    const isEgg = (0,_egg__WEBPACK_IMPORTED_MODULE_4__/* .useIsEnabled */ .bd)();
    const details = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        if (isEgg) {
            return [
                (0,_decode__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)("QW5pc2ggRGhhbmth"),
                (0,_decode__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)("U29sdXRpb25zIEFyY2hpdGVjdA=="), 
            ];
        }
        return [
            "Harinder Singh",
            "Managing Director"
        ];
    }, [
        isEgg
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImageContainer, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    alt: "Headshot of Harinder Singh, Managing Director of BJS Home Delivery",
                    src: isEgg ? (0,_decode__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)("aHR0cHM6Ly9jYS5zbGFjay1lZGdlLmNvbS9UMzdENTZDUU4tVTRDSFpNOTlRLTg0YzMxNGMyNWJmMi01MTI=") : "/images/landing/harinder.png",
                    layout: "fill"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PersonInfo, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Name, {
                        children: details[0]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        children: details[1]
                    })
                ]
            })
        ]
    }));
}
const Name = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-5166d9d0-0"
})`
  font-weight: bold;
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-5166d9d0-1"
})`
  display: flex;
  align-items: center;

  > :not(:last-child) {
    margin-right: 30px;
  }
`;
const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-5166d9d0-2"
})`
  position: relative;
  height: 140px;
  width: 140px;

  @media only screen and (max-width: 350px) {
    height: 80px;
    width: 80px;
  }
`;
const PersonInfo = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-5166d9d0-3"
})`
  display: flex;
  flex-direction: column;
  // justify-content: space-around;
  white-space: nowrap;
  gap: 14px;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_2___default()(Person).withConfig({
    componentId: "sc-5166d9d0-4"
})``);


/***/ }),

/***/ 1029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const decode = (input)=>{
    return Buffer.from(input, "base64").toString("ascii");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (decode);


/***/ }),

/***/ 4628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bd": () => (/* binding */ useIsEnabled),
/* harmony export */   "g0": () => (/* binding */ useSetEnabled)
/* harmony export */ });
/* unused harmony export useEnabled */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const enabledState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "enabled",
    default: false
});
function useEnabled() {
    return useRecoilState(enabledState);
}
function useIsEnabled() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(enabledState);
}
function useSetEnabled() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(enabledState);
}



/***/ })

};
;