"use strict";
exports.id = 3082;
exports.ids = [3082];
exports.modules = {

/***/ 3822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2699);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);




function TalkToUsIcon(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 29.764,
        height: 26.22,
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                "data-name": "Path 2",
                d: "M18.184 14.873h-9.8l-4.277 3.208a.5.5 0 01-.7-.1.485.485 0 01-.1-.3v-2.8A3.309 3.309 0 010 11.572V3.306A3.309 3.309 0 013.306 0h14.878a3.309 3.309 0 013.306 3.306v8.265a3.3 3.3 0 01-3.306 3.3z",
                fill: "#5f5d5b",
                opacity: 0.4
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                "data-name": "Path 3",
                d: "M29.764 11.971v7.917a3.17 3.17 0 01-3.167 3.167h-1.583v2.687a.477.477 0 01-.48.48.5.5 0 01-.287-.094l-4.1-3.073h-6.22a3.17 3.17 0 01-3.163-3.168V16.72h7.917a4.758 4.758 0 004.75-4.75V8.804h3.167a3.17 3.17 0 013.166 3.167z",
                fill: "#5f5d5b"
            })
        ]
    }));
}
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon).withConfig({
    componentId: "sc-e1be7636-0"
})`
  height: 30px;
  color: white;// ${_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2__.colours.black};
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-e1be7636-1"
})`
  position: relative;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_1___default()(TalkToUsIcon).withConfig({
    componentId: "sc-e1be7636-2"
})``);


/***/ }),

/***/ 3082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ getSubsidiaryForRawQuery),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2699);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_util_useIsTabletOrSmaller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3176);
/* harmony import */ var _TalkToUsIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3822);
/* harmony import */ var components_talk_to_us_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2831);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);







function TalkToUsButton(props) {
    const isTabletOrSmaller = (0,components_util_useIsTabletOrSmaller__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)();
    const setSelectedSubsidiary = (0,components_talk_to_us_store__WEBPACK_IMPORTED_MODULE_5__/* .useSetSelectedSubsidiary */ .Ri)();
    var _desktop;
    const forceDesktop = (_desktop = props.desktop) !== null && _desktop !== void 0 ? _desktop : false;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const [open, setOpen] = (0,components_talk_to_us_store__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)();
    const navigateTo = ()=>{
        const path = router.pathname;
        if (path.startsWith("/services")) {
            var ref;
            var ref1;
            //If we're on the services page
            const query = (ref1 = (ref = router.query) === null || ref === void 0 ? void 0 : ref.subsidiary) !== null && ref1 !== void 0 ? ref1 : [];
            if (query.length === 0) {
                return;
            }
            const rawSubsidiary = query[0];
            const subsidiary = getSubsidiaryForRawQuery(rawSubsidiary);
            setSelectedSubsidiary(subsidiary);
        }
        setOpen(true);
    };
    if (isTabletOrSmaller && !forceDesktop) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TalkToUsIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            className: props.className,
            onClick: navigateTo
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MyButton, {
        colors: "dark",
        onClick: navigateTo,
        className: props.className,
        id: "talk-to-us-go-to-talk-to-us",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TalkToUsIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Talk to us"
            })
        ]
    }));
}
const getSubsidiaryForRawQuery = (input)=>{
    switch(input.toLowerCase()){
        case "construct-it":
            return "constructit";
        case "haulage":
            return "haulage";
        case "extra":
            return "extra";
        case "home-delivery":
        default:
            return "home delivery";
    }
};
const MyButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1__.Button).withConfig({
    componentId: "sc-6280cbed-0"
})`
  padding: 13px 27px;
  align-items: center;
  background: ${_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1__.colours.yellow};
  border: 1px solid ${_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1__.colours.yellow};
  span {
    font-family: "Eveleth";
  }
  color: #5f5d5b;
  font-size: 14px;
  transition: color 0.3s;

  > :not(:last-child) {
    margin-right: 8px;
  }

  :hover {
    background: black;
    border: 1px solid black;
    svg path {
      :nth-of-type(2) {
        fill: white;
      }
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_2___default()(TalkToUsButton).withConfig({
    componentId: "sc-6280cbed-1"
})``);


/***/ })

};
;