"use strict";
(() => {
var exports = {};
exports.id = 1930;
exports.ids = [1930];
exports.modules = {

/***/ 5034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./components/util/useCallSlackApi.ts
function useCallSlackApi() {
    const perform = async (data)=>{
        const endpoint = "https://hooks.slack.com/services/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";
        const payload = {
            text: data
        };
        try {
            const requestOptions = {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                body: JSON.stringify(payload)
            };
            const response = await fetch(endpoint, requestOptions);
        // if (response.ok) {
        //   console.log(response, "response success slack api");
        // } else {
        //   console.log(response, "response failure slack api");
        // }
        } catch (err) {
            console.log(err, "slack api");
        }
    };
    return perform;
}
/* harmony default export */ const util_useCallSlackApi = (useCallSlackApi);

;// CONCATENATED MODULE: ./pages/api/trustpilot/revalidate.ts

async function handler(req, res) {
    if (req.query.secret !== "999og9pSIj") {
        console.log(req.query, "req.query");
        return res.status(401).json({
            message: "Invalid token"
        });
    }
    const callSlackApi = util_useCallSlackApi();
    const pathsToRevalidate = [
        "/",
        "/services/home-delivery",
        "/services/haulage",
        "/services/extra", 
    ];
    try {
        for (const path of pathsToRevalidate){
            await res.unstable_revalidate(`${path}`);
            console.log(path, "pathtorevalidate...");
        }
        callSlackApi(`new trustpilot review added`);
        return res.json({
            revalidated: true
        });
    } catch (err) {
        // Note: Next.js will continue showing the last successfully generated page
        callSlackApi(`${err} while revalidating`);
        return res.status(500).json({
            message: "Error revalidating"
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5034));
module.exports = __webpack_exports__;

})();