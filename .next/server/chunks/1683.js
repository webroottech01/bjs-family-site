"use strict";
exports.id = 1683;
exports.ids = [1683];
exports.modules = {

/***/ 9288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const homeDeliveryConfig = {
    subsidiary: "home delivery",
    primaryColour: "green",
    title: "All roads lead to home - BJS Two Man Home Delivery",
    logoUrl: "/images/logos/homedelivery.svg",
    established: 2009,
    metaDescription: "BJS home delivery provides an exclusive service of BJS two man home delivery in the UK. Our trained teams of specialists provide next day delivery. Contact us!",
    metaTags: [],
    description: [
        "We provide the very best two-man home delivery in the UK, offering a wide range of flexible services carried out by our friendly and well-trained teams of specialists.",
        "Award winning two-man home delivery teams, trained in excellence and trusted by leading brands. With an enviable track record of more than a decade the BJS family offer a range of flexible services to keep you and your customers happy.", 
    ],
    information: [
        {
            title: "We offer flexibility",
            points: [
                "Next day delivery",
                "Choice of day delivery",
                "Three hour delivery window",
                "Room of choice", 
            ]
        },
        {
            title: "We go above & beyond",
            points: [
                "Room of choice",
                "Professionally built & installed",
                "Packaging removal & recycle",
                "Removal of old furniture", 
            ]
        }, 
    ]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeDeliveryConfig);


/***/ }),

/***/ 1683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_delivery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9288);
/* harmony import */ var _extra_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9437);
/* harmony import */ var _haulage_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(685);
/* harmony import */ var _construct_it_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7729);




const configurationArray = [
    _home_delivery__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
    _extra_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    _haulage_config__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    _construct_it_config__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
];
function getConfig(input) {
    const result = configurationArray.find((configuration)=>configuration.subsidiary === input
    );
    return result !== null && result !== void 0 ? result : _home_delivery__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getConfig);


/***/ })

};
;