"use strict";
exports.id = 1473;
exports.ids = [1473];
exports.modules = {

/***/ 9900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ allPages),
/* harmony export */   "j": () => (/* binding */ useNavigateTo)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const allPages = [
    "our values",
    "Our technology",
    "What makes BJS different",
    "Training academy",
    "Charity and community",
    "our story", 
];
function useNavigateTo() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const navigateTo = (input)=>{
        const name = input.replaceAll(" ", "-").replace("&", "and").toLowerCase();
        router.push(`/about/${name}`);
    };
    return navigateTo;
}



/***/ }),

/***/ 3044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vt": () => (/* binding */ useSelected),
/* harmony export */   "jU": () => (/* binding */ useNavigateTo),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export useSetSelected */
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const subsidiaryNames = {
    "home-delivery": "home delivery",
    extra: "extra",
    haulage: "haulage",
    "construct-it": "constructit"
};
function getNameFromSubsidiary(input) {
    var ref;
    return (ref = Object.entries(subsidiaryNames).find((entry)=>entry[1] === input
    )) === null || ref === void 0 ? void 0 : ref[0];
}
function useSelectedFromRouter() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const rawName = router.query.subsidiary;
    const name = getFirstOrAny(rawName);
    if (name) {
        return subsidiaryNames[name];
    }
    return undefined;
}
function getFirstOrAny(input) {
    if (Array.isArray(input)) {
        return input[0];
    }
    return input;
}
function useNavigateTo() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const navigateTo = (input)=>{
        const name = getNameFromSubsidiary(input);
        router.push(`/services/${name}`, undefined, {
            scroll: true
        });
    };
    return navigateTo;
}
function useSelected() {
    const fromRouter = useSelectedFromRouter();
    return fromRouter !== null && fromRouter !== void 0 ? fromRouter : "home delivery";
}
function useSelectedState() {
    const state = useSelected();
    const setSelected = useSetSelected();
    return [
        state,
        setSelected
    ];
}
function useSetSelected() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const setSelected = (input)=>{
        const subsidiaryName = getNameFromSubsidiary(input);
        router.push(`/services/${subsidiaryName}`);
        return input;
    };
    return setSelected;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSelectedState);


/***/ })

};
;