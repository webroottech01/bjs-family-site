"use strict";
exports.id = 1917;
exports.ids = [1917];
exports.modules = {

/***/ 5938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dx": () => (/* binding */ Title),
/* harmony export */   "ty": () => (/* binding */ Seperator),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2699);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6170);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_breakpoints__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BulletpointEntry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9678);





const Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default().h3.withConfig({
    componentId: "sc-43dc259f-0"
})`
  font-family: "Eveleth";
  font-size: 16px;
  color: #615e59;
  margin-top:0px;
`;
const Seperator = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-43dc259f-1"
})`
  border-radius: 66px;
  background: ${_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1__.colours.yellow};
  min-height: 4px;
  content: "";
  width: 60px;
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-43dc259f-2"
})`
  display: flex;
  flex-direction: column;

  ${Title} {
    margin-bottom: 18px;
  }
  ${Seperator} {
    margin-bottom: 40px !important;

    ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_3__.down)("sm")} {
      margin-bottom: 30px;
    }
  }
  ${_BulletpointEntry__WEBPACK_IMPORTED_MODULE_4__/* .ResetListStyling */ .k8};
`;
function AbstractEntry(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                children: props.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Seperator, {}),
            props.children
        ]
    }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_2___default()(AbstractEntry).withConfig({
    componentId: "sc-43dc259f-3"
})``);


/***/ }),

/***/ 9678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l2": () => (/* binding */ Container),
/* harmony export */   "k8": () => (/* binding */ ResetListStyling),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6170);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AbstractEntry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5938);




function BulletpointEntry(props) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AbstractEntry__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        title: props.title,
        className: props.className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
            children: props.entries.map((entry)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: entry
                }, entry)
            )
        })
    }));
}
const ResetListStyling = styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
  ul {
    margin-block-start: 0em;
    padding-inline-start: 1.2em;
    margin-bottom: 0;

    li:not(:last-child) {
      margin-bottom: 4px;

      ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__.down)("md")} {
        margin-bottom: 17px;
      }
    }
  }
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().ul.withConfig({
    componentId: "sc-19743230-0"
})`
  display: grid;

  justify-content: space-between;
  grid-gap: 13px;
  width: 100%;

  li::marker {
    width: 6px;
    height: 6px;
    color: rgba(0, 0, 0, 0.4);
  }

  grid-template-columns: repeat(1, 1fr);

  ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__.only)("md")} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${ResetListStyling};

  li {
    margin-bottom: 0px !important;
  }
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_1___default()(BulletpointEntry).withConfig({
    componentId: "sc-19743230-1"
})``);


/***/ }),

/***/ 1917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* reexport safe */ _AbstractEntry__WEBPACK_IMPORTED_MODULE_0__.ZP),
/* harmony export */   "L": () => (/* reexport safe */ _BulletpointEntry__WEBPACK_IMPORTED_MODULE_1__.ZP)
/* harmony export */ });
/* harmony import */ var _AbstractEntry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5938);
/* harmony import */ var _BulletpointEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9678);




/***/ })

};
;