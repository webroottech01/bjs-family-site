"use strict";
exports.id = 2349;
exports.ids = [2349];
exports.modules = {

/***/ 2349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gr": () => (/* binding */ getUrl),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export richerSoundsWide */
const basePath = `/images/logos/clients`;
const logoBasePath = `${"https://bjs-static.s3.eu-west-2.amazonaws.com"}/bjs-family/partner_logos/home_delivery/partnerLogos_`;
const paths = {
    cotswold: "cotswold.svg",
    MADE: "made.svg",
    "julian bowen": "julian-bowen.svg",
    "nectar sleep": "nectar-sleep.png",
    "oliver bonas": "oliver-bonas.png",
    "one call furniture": "one-call-furniture.png",
    "richer sounds": "richer-sounds.png",
    tarmac: "tarmac.png",
    wienerberger: "wienerberger.png",
    "happy beds": "happyBeds.png",
    "tv bed store": "tvBedStore.png",
    wayfair: "wayfair_logo.png",
    timeforsleep: "Logos_Time4Sleep.jpg",
    julianBowen: "SVG_JulianBowen.svg",
    richerSounds: "SVG_RicherSounds.svg"
};
const urls = {
    cotswold: "https://www.cotswoldco.com/",
    MADE: "https://www.made.com/",
    "julian bowen": "https://julian-bowen.co.uk/",
    "nectar sleep": "https://www.nectarsleep.co.uk/",
    "oliver bonas": "https://www.oliverbonas.com/",
    "one call furniture": "https://onecall.furniture/",
    "richer sounds": "https://www.richersounds.com/",
    tarmac: "https://tarmac.com/",
    wienerberger: "https://www.wienerberger.co.uk/",
    "happy beds": "https://www.happybeds.co.uk/",
    "tv bed store": "https://www.tvbedstore.co.uk/",
    wayfair: "https://www.wayfair.co.uk/",
    timeforsleep: "https://www.time4sleep.co.uk/",
    julianBowen: "https://julian-bowen.co.uk/",
    richerSounds: "https://www.richersounds.com/"
};
const richerSoundsWide = `${basePath}/logos_richerSounds_HQ.png`;
function getSubpath(input) {
    const result = paths[input];
    if (!result) {
        throw new Error("Cannot find " + input);
    }
    return result;
}
function getClientLogo(input) {
    if (input === "julianBowen" || input === "richerSounds") {
        return `${logoBasePath}${getSubpath(input)}`;
    }
    return `${basePath}/${getSubpath(input)}`;
}
function getUrl(input) {
    return urls[input];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getClientLogo);


/***/ })

};
;