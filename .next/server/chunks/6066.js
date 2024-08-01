"use strict";
exports.id = 6066;
exports.ids = [6066];
exports.modules = {

/***/ 6066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useWindowDimensions)
/* harmony export */ });
/* unused harmony export useGlobalWidth */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);


const widthState = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.atom)({
    key: "subsidiary_showcase_width",
    default: -1
});
function getWindowDimensions() {
    const { innerWidth: width , innerHeight: height  } = window;
    const result = {
        width,
        height
    };
    return result;
}
function useGlobalWidth() {
    return useRecoilValue(widthState);
}
function useWindowDimensions() {
    const { 0: windowDimensions , 1: setWindowDimensions  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        width: -1,
        height: 0
    });
    const setWidth = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useSetRecoilState)(widthState);
    function handleResize() {
        const dimensions = getWindowDimensions();
        setWindowDimensions(dimensions);
        setWidth(dimensions.width);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize)
        ;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (windowDimensions.width === -1) {
            handleResize();
        }
    }, [
        windowDimensions
    ]);
    return windowDimensions;
};


/***/ })

};
;