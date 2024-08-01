"use strict";
(() => {
var exports = {};
exports.id = 239;
exports.ids = [239];
exports.modules = {

/***/ 4571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNews": () => (/* binding */ getNews),
/* harmony export */   "getNewsBySlug": () => (/* binding */ getNewsBySlug),
/* harmony export */   "getMedia": () => (/* binding */ getMedia)
/* harmony export */ });
const endpoint = "https://cms.bjshomedelivery.com";
const getNews = async ()=>{
    const res = await fetch(`${endpoint}/articles/?status=Published&_sort=date:asc`);
    const data = await res.json();
    let newsArr = [
        ...data
    ];
    newsArr = newsArr.sort(function(a, b) {
        return Date.parse(b.date) - Date.parse(a.date);
    });
    return newsArr;
};
const getNewsBySlug = async (slug)=>{
    const res = await fetch(`${endpoint}/articles?slug=${slug}`);
    return res;
};
const getMedia = async ()=>{
    const res = await fetch(`${endpoint}/mentioned-in-the-medias/`);
    const data = await res.json();
    return data;
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4571));
module.exports = __webpack_exports__;

})();