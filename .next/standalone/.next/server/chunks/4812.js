"use strict";
exports.id = 4812;
exports.ids = [4812];
exports.modules = {

/***/ 160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B": () => (/* binding */ GoogleMapsLogo),
  "Z": () => (/* binding */ map_ViewOnGoogleMaps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@bjsdistribution/components"
var components_ = __webpack_require__(2699);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/images/footer/google_maps_icon.png
/* harmony default export */ const google_maps_icon = ({"src":"/_next/static/media/google_maps_icon.a3708c36.png","height":21,"width":14,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAUVBMVEVNqkU0p0/4wAIOdO4ofv//vQCwtCAyp1E1qFEmplbCS1b/uQA+iN8tgvI9g/H7wwBEht3uXCcsp1XwfR3/vQAgdelJZb7wQS5FhPiWsSs2oHRNTTi2AAAAEnRSTlMBIa/UKxzo+a9U0SrVuda8f4RIIvdrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANElEQVQImQXBiQGAIAwAsUOqbcEPFFD3H9QEiW0XUt+elVE4P64jmzLdbzXmpWoAVwcw+AEuqgGdmi9iggAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/footer/map/ViewOnGoogleMaps.tsx





function ViewOnGoogleMaps(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(CustomButton, {
        className: props.className,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            href: "https://www.google.com/maps/dir/?api=1&destination=52.558147,-2.043908",
            target: "_blank",
            style: {
                zIndex: 2,
                height: 21
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(GoogleMapsLogo, {}),
                "View on Google Maps"
            ]
        })
    }));
}
function GoogleMapsLogoUnstyled(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
        className: props.className,
        src: google_maps_icon,
        width: 14,
        height: 21,
        layout: "fixed"
    }));
}
const GoogleMapsLogo = external_styled_components_default()(GoogleMapsLogoUnstyled).withConfig({
    componentId: "sc-a2530554-0"
})``;
const CustomButton = external_styled_components_default()(components_.Button).withConfig({
    componentId: "sc-a2530554-1"
})`
  font-size: 12px;
  text-transform: initial;
  padding: 8px 20px;
  max-height: 36px;
  display: flex;
  align-items: center;

  :hover {
    background: #888075;
    border: 1px solid #888075;
  }
  a {
    text-decoration: none;
    color: white;
    font-size: 12px;
    font-weight: 500;
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;
/* harmony default export */ const map_ViewOnGoogleMaps = (external_styled_components_default()(ViewOnGoogleMaps).withConfig({
    componentId: "sc-a2530554-2"
})``);


/***/ }),

/***/ 4170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ allSubsidiaries)
/* harmony export */ });
const allSubsidiaries = [
    "home delivery",
    "extra",
    "haulage",
    "constructit"
];



/***/ })

};
;