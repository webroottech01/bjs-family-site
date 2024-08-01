"use strict";
exports.id = 6801;
exports.ids = [6801];
exports.modules = {

/***/ 6801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xv": () => (/* binding */ Text),
/* harmony export */   "VY": () => (/* binding */ Content),
/* harmony export */   "UD": () => (/* binding */ QuoteMark),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export QuoteStyling */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2699);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6170);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_breakpoints__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);





const Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.span).withConfig({
    componentId: "sc-66efcb7a-0"
})`
  ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_3__.down)("sm")} {
    font-size: 20px;
  }
`;
const QuoteStyling = styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
  font-size: 100px;
  font-weight: bold;
  font-style: italic;
  color: ${_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2__.colours.yellow};
  content: open-quote;

  line-height: 0.8;
`;
const QuoteMark = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
    componentId: "sc-66efcb7a-1"
})`
  position: relative;
  ::before {
    position: absolute;
    // left: -17px;
    left: -10px;
    top: -50px;
    ${QuoteStyling};
  }

  ::after {
    content: no-close-quote;
  }
`;
const InlineMark = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
    componentId: "sc-66efcb7a-2"
})`
  ::before {
    ${QuoteStyling};
  }

  ::after {
    content: no-close-quote;
  }
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-66efcb7a-3"
})`
  display: flex;
  font-size: 22px;
  flex-direction: ${(props)=>props.inline ? "row" : "column"
};
  padding-top: 50px;

  ${InlineMark} {
    margin-right: 32px;
  }
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div).withConfig({
    componentId: "sc-66efcb7a-4"
})`
  display: flex;

  > :not(:last-child) {
    margin-right: 40px;
  }
`;
function LargeQuote(props) {
    var _inline;
    const inline = (_inline = props.inline) !== null && _inline !== void 0 ? _inline : false;
    var _relativeToQuote;
    const relativeToQuote = (_relativeToQuote = props.relativeToQuote) !== null && _relativeToQuote !== void 0 ? _relativeToQuote : false;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        className: relativeToQuote ? undefined : props.className,
        inline: inline,
        children: [
            inline && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InlineMark, {}),
            !inline && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(QuoteMark, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Content, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                        className: relativeToQuote ? props.className : undefined,
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        children: props.text
                    }),
                    props.children
                ]
            })
        ]
    }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_1___default()(LargeQuote).withConfig({
    componentId: "sc-66efcb7a-5"
})``);


/***/ })

};
;