"use strict";
exports.id = 1709;
exports.ids = [1709];
exports.modules = {

/***/ 5031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ privacyPolicyUrl),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const RESOURCE_URL = "https://bjs-static.s3.eu-west-2.amazonaws.com";
function useClickInformation() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const click = (input)=>{
        const url = getUrl(input);
        window.open(url, "_blank");
    };
    return click;
}
const getUrl = (input)=>{
    switch(input.toLowerCase()){
        case "careers":
            return "/careers";
        case "privacy policy":
            return privacyPolicyUrl;
        case "cctv policy":
            return `${RESOURCE_URL}/CCTV+Policy.pdf`;
        default:
            throw new Error(`Cannot find ${input}`);
    }
};
const privacyPolicyUrl = `${RESOURCE_URL}/privacy+policy.pdf`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useClickInformation);


/***/ }),

/***/ 7318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I9": () => (/* binding */ useSetShowingBackground),
/* harmony export */   "Qx": () => (/* binding */ useIsHidingBackground)
/* harmony export */ });
/* unused harmony export useShowingBackground */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const showingBackgroundState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "showing_background",
    default: true
});
function useShowingBackground() {
    return useRecoilState(showingBackgroundState);
}
function useSetShowingBackground() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(showingBackgroundState);
}
function useIsHidingBackground() {
    const isShowing = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(showingBackgroundState);
    return !isShowing;
}



/***/ })

};
;