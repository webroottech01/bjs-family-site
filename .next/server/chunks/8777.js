"use strict";
exports.id = 8777;
exports.ids = [8777];
exports.modules = {

/***/ 6196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ Title),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6170);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2699);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_3__);




function WordLadderLink(props) {
    var _more;
    const more = (_more = props.more) !== null && _more !== void 0 ? _more : "Learn more";
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                children: props.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Description, {
                description: props.description
            }),
            props.onClick && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonMover, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                    id: props.id,
                    colors: "alternate",
                    wide: true,
                    onClick: props.onClick,
                    children: more
                })
            })
        ]
    }));
}
function Description(props) {
    const description = props.description;
    if (typeof description === "string") {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
            children: props.description
        }));
    }
    return description;
}
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default().h2.withConfig({
    componentId: "sc-fea4cda2-0"
})`
  font-size: 50px;
  font-family: "Eveleth";
  margin-top:0px;

  @media only screen and (max-width: 1200px) {
    font-size: 40px;
  }


  ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__.down)("sm")} {
    font-size: 30px;
  }
  ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__.down)("xs")} {
    font-size: 18px;
  }
`;
const Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
    componentId: "sc-fea4cda2-1"
})``;
const ButtonMover = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-fea4cda2-2"
})`
  position: relative;
  margin-bottom: 60px;
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-fea4cda2-3"
})`
  display: flex;
  flex-direction: column;
  padding: 64px 60px 60px 54px;
  font-size: 16px;
  background: ${_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_3__.colours.black};

  color: white;
  ${Title} {
    margin-bottom: 30px;

    @media only screen and (max-width: 1200px) {
      margin-bottom: 25px;
    }
  }
  ${Text} {
    margin-bottom: 50px;

    ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__.down)("xs")} {
      font-size: 14px;
      margin-bottom: 37px;
    }
  }

  ${_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_3__.Button.PlainButton} {
    left: -10px;
    position: absolute;
    color: ${_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_3__.colours.black};
    font-family: "Eveleth";
  }

  ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__.down)("sm")} {
    align-items: center;
    text-align: center;
    ${_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_3__.Button.PlainButton} {
      position: relative;
      margin-bottom: 0px;
      width: 100%;
    }
    ${ButtonMover} {
      margin-bottom: 0px;
      width: 100%;
      left: 10px;
    }
  }

  ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__.down)("xs")} {
    padding: 34px 20px 40px 20px;
  }
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_1___default()(WordLadderLink).withConfig({
    componentId: "sc-fea4cda2-4"
})``);


/***/ }),

/***/ 8777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5141);
/* harmony import */ var _WordLadderLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6196);
/* harmony import */ var components_util_useIsTabletOrSmaller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3176);






function WordLadderWithLink(props) {
    const isTabletOrSmaller = (0,components_util_useIsTabletOrSmaller__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)();
    const compact = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        var _compact;
        return (_compact = props.compact) !== null && _compact !== void 0 ? _compact : isTabletOrSmaller;
    }, [
        props.compact,
        isTabletOrSmaller
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
                columns: props.columns,
                repeat: props.repeat,
                entries: props.entries,
                type: props.type,
                children: [
                    props.children,
                    !compact && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BoxedWordLadderLink, {
                        title: props.title,
                        description: props.description,
                        onClick: props.onClick,
                        id: props.id,
                        more: props.more
                    })
                ]
            }),
            compact && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WordLadderLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: props.title,
                more: props.more,
                description: props.description,
                onClick: props.onClick,
                id: props.id
            })
        ]
    }));
}
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-94ccb406-0"
})`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const BoxedWordLadderLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_WordLadderLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-94ccb406-1"
})`
  position: absolute;
  bottom: 0px;
  z-index: 7;
  border-top-left-radius: 20px;

  box-shadow: -10px 20px 20px #00000059;
  width: 50%;
  right: 0px;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_1___default()(WordLadderWithLink).withConfig({
    componentId: "sc-94ccb406-2"
})``);


/***/ })

};
;