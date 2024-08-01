"use strict";
exports.id = 2763;
exports.ids = [2763];
exports.modules = {

/***/ 2763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kS": () => (/* binding */ Entry),
/* harmony export */   "ig": () => (/* binding */ Large),
/* harmony export */   "bh": () => (/* binding */ Double),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6170);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);




const EntryContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-599708af-0"
})`
  position: relative;
  height: 310px;
  width: 310px;

  @media only screen and (min-width: 1921px) {
    height: 461px;
    width: 461px;
  }

  ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__.down)("sm")} {
    height: 205px;
    width: 205px;
  }
`;
function Entry({ src  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EntryContainer, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
            src: src,
            layout: "fill"
        })
    }));
}
const LargeContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-599708af-1"
})`
  position: relative;
  min-height: 633px;
  min-width: 633px;

  @media only screen and (min-width: 1921px) {
    min-height: 840px;
    min-width: 840px;
  }

  ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__.down)("sm")} {
    min-height: 428px;
    min-width: 428px;
  }
`;
function Large({ src  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LargeContainer, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
            src: src,
            layout: "fill"
        })
    }));
}
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-599708af-2"
})`
  display: flex;
  > :not(:last-child) {
    margin-right: 11px;
  }
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
const Double = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-599708af-3"
})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-599708af-4"
})`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "a c d f"
    "b c e f";
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ })

};
;