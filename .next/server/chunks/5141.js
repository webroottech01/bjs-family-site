"use strict";
exports.id = 5141;
exports.ids = [5141];
exports.modules = {

/***/ 5141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "xv": () => (/* binding */ Text),
/* harmony export */   "fC": () => (/* binding */ Root),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2699);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2__);



const defaultEntries = [
    [
        "family run",
        "flexible"
    ],
    [
        "experience",
        "high standards"
    ],
    [
        "customer service",
        "heart"
    ],
    [
        "reputation"
    ], 
];
function RepeatedTextSplash(props) {
    var _entries;
    const entries = (_entries = props.entries) !== null && _entries !== void 0 ? _entries : defaultEntries;
    var _repeat;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Root, {
        className: props.className,
        children: [
            props.children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
                children: [
                    ...Array(props.columns)
                ].map((value, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Column, {
                        entries: entries,
                        row: index,
                        type: props.type,
                        repeat: (_repeat = props.repeat) !== null && _repeat !== void 0 ? _repeat : 1
                    }, index)
                )
            })
        ]
    }));
}
function Column(props) {
    let array = [];
    for(let i = 0; i < props.repeat; i++){
        array.push(...props.entries);
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ColumnContainer, {
        children: array.map((text, index)=>{
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Entry, {
                text: text,
                type: props.type,
                row: props.row
            }, index));
        })
    }));
}
function Entry(props) {
    const { type: type1 , row  } = props;
    const getType = (index)=>{
        if (type1 === "odd") {
            if (index % 2 === 0) {
                return "normal";
            }
            return "yellow";
        } else if (type1 === "checkered") {
            if (row % 2 === 0) {
                return "normal";
            }
            return "yellow";
        } else if (type1 === "odd per") {
            if (row % 2 === 0) {
                if (index % 2 === 0) {
                    return "yellow";
                }
                return "normal";
            }
            if (index % 2 === 0) {
                return "normal";
            }
            return "yellow";
        }
        return "normal";
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EntryContainer, {
        children: props.text.map((text, index)=>{
            const type = getType(index);
            const key = `${text}-${index}`;
            if (type === "normal") {
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                    children: text
                }, key));
            }
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(YellowText, {
                children: text
            }, key));
        })
    }));
}
const Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
    componentId: "sc-3a26fc58-0"
})`
  font-family: "Eveleth";
  white-space: nowrap;
  color: #888075;
`;
const YellowText = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Text).withConfig({
    componentId: "sc-3a26fc58-1"
})`
  color: ${_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2__.colours.yellow} !important;
`;
const EntryContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-3a26fc58-2"
})`
  display: flex;

  > :not(:last-child) {
    margin-right: 18px;
  }
`;
const ColumnContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-3a26fc58-3"
})`
  display: flex;

  > :not(:last-child) {
    margin-right: 10px;
  }
`;
const Root = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-3a26fc58-4"
})`
  position: relative;
  background: transparent linear-gradient(360deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;

  overflow: hidden;
  user-select: none;
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-3a26fc58-5"
})`
  position: relative;
  overflow: visible;
  display: flex;
  flex-direction: column;
  font-size: 12px;

  //transform-origin:center center;

  // clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);

  > :not(:last-child) {
    margin-bottom: 5px;
  }

  transform: rotate(-6deg);
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_1___default()(RepeatedTextSplash).withConfig({
    componentId: "sc-3a26fc58-6"
})``);


/***/ })

};
;