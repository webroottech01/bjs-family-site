"use strict";
exports.id = 9178;
exports.ids = [9178];
exports.modules = {

/***/ 2847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dQ": () => (/* binding */ useToken),
/* harmony export */   "SV": () => (/* binding */ useSetTokenState)
/* harmony export */ });
/* unused harmony export useTokenState */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const token = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "careers_captcha_token",
    default: undefined
});
function useToken() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(token);
}
function useTokenState() {
    return useRecoilState(token);
}
function useSetTokenState() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(token);
}



/***/ }),

/***/ 3165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b$": () => (/* binding */ useAgreeState),
/* harmony export */   "pW": () => (/* binding */ useAgreedValue),
/* harmony export */   "Je": () => (/* binding */ useResetAgreement)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1704);
/* harmony import */ var react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_careers_listing_form_response_token_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2847);



const agreeState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "talk_to_us_agree_to_policy",
    default: false
});
function useAgreeState() {
    const [agreed, setAgreed] = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState)(agreeState);
    const { executeRecaptcha  } = (0,react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_1__.useGoogleReCaptcha)();
    const setToken = (0,components_careers_listing_form_response_token_store__WEBPACK_IMPORTED_MODULE_2__/* .useSetTokenState */ .SV)();
    const setAgreedWrapper = async (newValue)=>{
        if (!executeRecaptcha) {
            console.log(`Recaptcha not ready`);
            return;
        }
        const token = await executeRecaptcha("action");
        if (!token) {
            console.log("No token");
            return;
        }
        setToken(token);
        setAgreed(newValue);
    };
    return [
        agreed,
        setAgreedWrapper
    ];
}
function useAgreedValue() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(agreeState);
}
function useResetAgreement() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useResetRecoilState)(agreeState);
}



/***/ }),

/***/ 2831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lp": () => (/* binding */ useSelectedSubsidiary),
/* harmony export */   "Ri": () => (/* binding */ useSetSelectedSubsidiary),
/* harmony export */   "kB": () => (/* binding */ useSelectedSubsidiaryValue),
/* harmony export */   "Zo": () => (/* binding */ useResetSelectedSubsidiary),
/* harmony export */   "f6": () => (/* binding */ useSetOpen),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _form_section_booking_quote_submission_agree_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3165);


const isOpenState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "is_open",
    default: false
});
const selectedSubsidiary = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "talk_to_us_selected_subsidiary",
    default: undefined
});
function useSelectedSubsidiary() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState)(selectedSubsidiary);
}
function useSelectedSubsidiaryValue() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(selectedSubsidiary);
}
function useResetSelectedSubsidiary() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useResetRecoilState)(selectedSubsidiary);
}
function useSetSelectedSubsidiary() {
    const resetAgreement = (0,_form_section_booking_quote_submission_agree_store__WEBPACK_IMPORTED_MODULE_1__/* .useResetAgreement */ .Je)();
    const internalSet = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(selectedSubsidiary);
    const select = (newSubsidiary)=>{
        internalSet(newSubsidiary);
        resetAgreement();
    };
    return select;
}
function useIsOpen() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState)(isOpenState);
}
function useSetOpen() {
    const setInternal = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(isOpenState);
    const setSubsidiary = useSetSelectedSubsidiary();
    const setOpen = (value)=>{
        if (!value) {
            setSubsidiary(undefined);
        }
        setInternal(value);
    };
    return setOpen;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsOpen);


/***/ })

};
;