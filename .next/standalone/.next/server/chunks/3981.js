"use strict";
exports.id = 3981;
exports.ids = [3981];
exports.modules = {

/***/ 7934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ email_view)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/careers/listing/form/response/email-view/Entry.tsx


function Entry(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                children: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                children: props.value
            })
        ]
    }));
}
const Title = external_styled_components_default().td.withConfig({
    componentId: "sc-62ed3f7c-0"
})`
`;
const Value = external_styled_components_default().td.withConfig({
    componentId: "sc-62ed3f7c-1"
})`

`;
const Container = external_styled_components_default().tr.withConfig({
    componentId: "sc-62ed3f7c-2"
})`
`;
/* harmony default export */ const email_view_Entry = (Entry);

;// CONCATENATED MODULE: ./components/careers/listing/form/response/email-view/index.tsx



function EmailView({ className , application  }) {
    var ref, ref1, ref2, ref3;
    const fromField = (input)=>{
        if (input) {
            return input + "";
        }
        return "None specified";
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(email_view_Container, {
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            children: "Field"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            children: "Value"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(email_view_Entry, {
                title: "job title",
                value: application.jobTitle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(email_view_Entry, {
                title: "name",
                value: application.firstName
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(email_view_Entry, {
                title: "surname",
                value: application.surname
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(email_view_Entry, {
                title: "address",
                value: ((ref = application.address) === null || ref === void 0 ? void 0 : ref.lineOne) + " " + ((ref1 = application.address) === null || ref1 === void 0 ? void 0 : ref1.lineTwo)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(email_view_Entry, {
                title: "email",
                value: application.emailAddress
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(email_view_Entry, {
                title: "contact number",
                value: application.contactNumber
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(email_view_Entry, {
                title: "salary expectation",
                value: fromField(application.salaryExpectation)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(email_view_Entry, {
                title: "authorised to work in the UK",
                value: application.authorisedInUK ? "Yes" : "No"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(email_view_Entry, {
                title: "availability",
                value: application.availability
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(email_view_Entry, {
                title: "reference",
                value: application.reference
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(email_view_Entry, {
                title: "special adjustments",
                value: fromField(application.adjustments)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(email_view_Entry, {
                title: "work history",
                value: application === null || application === void 0 ? void 0 : (ref2 = application.workHistory) === null || ref2 === void 0 ? void 0 : ref2.map((item)=>JSON.stringify(item)
                ).join(",")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(email_view_Entry, {
                title: "education history",
                value: application === null || application === void 0 ? void 0 : (ref3 = application.educationHistory) === null || ref3 === void 0 ? void 0 : ref3.map((item)=>JSON.stringify(item)
                ).join(",")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(email_view_Entry, {
                title: "background",
                value: application.background
            })
        ]
    }));
}
const email_view_Container = external_styled_components_default().table.withConfig({
    componentId: "sc-2eed862b-0"
})``;
/* harmony default export */ const email_view = (EmailView);


/***/ }),

/***/ 4787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yL": () => (/* binding */ useIsSubmitting),
/* harmony export */   "Q6": () => (/* binding */ useSetSubmittingState)
/* harmony export */ });
/* unused harmony export useSubmittingState */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const submitting = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "careers_submitting",
    default: false
});
function useIsSubmitting() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(submitting);
}
function useSubmittingState() {
    return useRecoilState(submitting);
}
function useSetSubmittingState() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(submitting);
}



/***/ }),

/***/ 5918:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ formBody),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact_render_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7430);
/* harmony import */ var _email_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7934);
/* harmony import */ var _submission_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4787);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([preact_render_to_string__WEBPACK_IMPORTED_MODULE_1__]);
preact_render_to_string__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const endpoint = `${"https://api.bjshomedelivery.com"}/v1/website/careers/email`;
const API_KEY = "C00015TG2464M0J10837E65YT1WBT1730646QNSZEY3859NY3X";
function usePushEmail() {
    const setSubmitting = (0,_submission_store__WEBPACK_IMPORTED_MODULE_3__/* .useSetSubmittingState */ .Q6)();
    const push = async (input, token)=>{
        setSubmitting(true);
        const html = generateHtml(input);
        const senderName = `${input.firstName} ${input.surname}`;
        const files = [
            ...input.documents
        ];
        if (input.cv) {
            files.push(input.cv);
        }
        const body = formBody(html, files, token, senderName);
        const response = await fetch(endpoint, {
            method: "POST",
            // mode: "no-cors",
            headers: {
                Key: API_KEY,
                Accept: "application/json"
            },
            body
        });
        setSubmitting(false);
        if (response.ok) {
            return true;
        }
        const json = await response.json();
        const message = await json.message;
        if (message.toLowerCase() === "unauthorised.") {
            return "You have already submitted an application.";
        }
        return message;
    };
    return push;
}
const RECAPTCHA_PUBLIC_KEY = "6LeOuZIdAAAAAA0Au8eoMH0VjDDpXHquiVieDYkM";
const formBody = (rawHtml, files, token, senderName)=>{
    const data = new FormData();
    for (const file of files){
        data.append("files", file, file.name);
    }
    data.append("Message", rawHtml);
    data.append("SenderName", senderName);
    data.append("VerificationToken", token);
    data.append("PublicKey", RECAPTCHA_PUBLIC_KEY);
    return data;
};
const generateHtml = (input)=>{
    const htmlString = (0,preact_render_to_string__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_email_view__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        application: input
    }));
    return htmlString;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePushEmail);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2699);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_0__);

const ERROR_LIMIT = 4;
function usePushError() {
    const notifications = _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_0__.Notifications.useNotifications();
    function pushError(id, e) {
        const error = createError(id, e, "Missing required fields");
        notifications.add(error);
    }
    return pushError;
}
const createError = (id, errors, errorTitle)=>{
    return {
        title: errorTitle !== null && errorTitle !== void 0 ? errorTitle : "Please amend the following errors",
        body: computeDescription(errors),
        type: "failure",
        id
    };
};
const computeDescription = (errors)=>{
    const result = {};
    let count = 0;
    for (const key of Object.keys(errors)){
        if (count === ERROR_LIMIT) {
            break;
        }
        const error = errors[key];
        var _message;
        let errorMessage = (_message = error.message) !== null && _message !== void 0 ? _message : Object.keys(error)[0];
        errorMessage = errorMessage.substring(0, 1).toUpperCase() + errorMessage.substring(1) + ".";
        result[key] = errorMessage;
        count++;
    }
    return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePushError);


/***/ }),

/***/ 3210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Kq": () => (/* reexport */ common_ClosingDate),
  "RJ": () => (/* reexport */ common_ContractType),
  "yE": () => (/* reexport */ common_Department),
  "rC": () => (/* reexport */ common_DetailPair),
  "Xq": () => (/* binding */ JobTitle),
  "O_": () => (/* reexport */ common_MapMarker),
  "$m": () => (/* binding */ SalaryType),
  "Zi": () => (/* reexport */ common_SubsidiaryLogo),
  "GV": () => (/* reexport */ common_SubsidiaryName)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/careers/listing/item/high-level/common/ContractType.tsx


function ContractType(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Container, {
        className: props.className,
        children: props.type
    }));
}
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-9bcf533f-0"
})`
  padding: 10px 35px;
  background: #f3f2f1;
  border-radius: 6px;

  text-align: center;
  text-transform: uppercase;
  
  font-weight: medium;
  font-size: 14px;
  color: #888075;
`;
/* harmony default export */ const common_ContractType = (external_styled_components_default()(ContractType).withConfig({
    componentId: "sc-9bcf533f-1"
})``);

// EXTERNAL MODULE: external "@bjsdistribution/components"
var components_ = __webpack_require__(2699);
// EXTERNAL MODULE: external "@fortawesome/pro-solid-svg-icons"
var pro_solid_svg_icons_ = __webpack_require__(1638);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
;// CONCATENATED MODULE: ./components/careers/listing/item/high-level/common/MapMarker.tsx





function MapMarker(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(MapMarker_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                icon: pro_solid_svg_icons_.faMapMarkerAlt
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                children: props.location
            })
        ]
    }));
}
const MapMarker_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-3d4cc08a-0"
})`
  display: flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 8px;
  }
  color: ${components_.colours.black};
  font-size: 16px;
`;
const Text = external_styled_components_default().span.withConfig({
    componentId: "sc-3d4cc08a-1"
})`
  text-transform: capitalize !important;
`;
/* harmony default export */ const common_MapMarker = (external_styled_components_default()(MapMarker).withConfig({
    componentId: "sc-3d4cc08a-2"
})``);

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
;// CONCATENATED MODULE: ./components/careers/listing/item/high-level/common/ClosingDate.tsx



const getNoticePeriod = ()=>{
    const period = "5";
    if (!period) {
        throw new Error("Cannot find notice_priod");
    }
    return parseInt(period);
};
const noticePeriod = getNoticePeriod();
const getDifference = (date, deadline)=>{
    const difference = Math.abs((0,external_date_fns_.differenceInDays)(date, deadline));
    const isExpiring = difference <= noticePeriod;
    return [
        difference,
        isExpiring
    ];
};
function ClosingDate(props) {
    if (isNaN(props.date.getTime())) {
        return null;
    }
    const formattedDate = (0,external_date_fns_.format)(props.date, "dd-MM-yyyy");
    const [difference, isExpiring] = getDifference(new Date(), props.date);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ClosingDate_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                children: [
                    "Closing date: ",
                    formattedDate
                ]
            }),
            isExpiring && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ExpiryNotice, {
                children: [
                    "(",
                    difference,
                    " days left to apply!)"
                ]
            })
        ]
    }));
}
const ClosingDate_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-c7db2ac7-0"
})`
  display: flex;
  font-size: 14px;
  gap: 10px;
`;
const ExpiryNotice = external_styled_components_default().span.withConfig({
    componentId: "sc-c7db2ac7-1"
})`
  font-style: italic;
  color: #ec563e;
`;
/* harmony default export */ const common_ClosingDate = (external_styled_components_default()(ClosingDate).withConfig({
    componentId: "sc-c7db2ac7-2"
})``);

;// CONCATENATED MODULE: ./components/careers/listing/item/high-level/common/Department.tsx


function Department(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Department_Container, {
        className: props.className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            children: props.department
        })
    }));
}
const Department_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-916f572c-0"
})`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: "Eveleth";
  font-size: 14px;
  color: #f7b42f;
  width: 100%;

  ::before {
    min-height: 8px;
    min-width: 8px;
    background: #f7b42f;
    content: "";
    border-radius: 50%;
    margin-right: 12px;
  }
`;
/* harmony default export */ const common_Department = (external_styled_components_default()(Department).withConfig({
    componentId: "sc-916f572c-1"
})``);

// EXTERNAL MODULE: ./subsidiary-config/index.tsx
var subsidiary_config = __webpack_require__(1683);
// EXTERNAL MODULE: ./components/util/useIsMobile.tsx
var useIsMobile = __webpack_require__(6658);
;// CONCATENATED MODULE: ./components/careers/listing/item/high-level/common/SubsidiaryLogo.tsx




const getDimensions = (input, subsidiary)=>{
    if (!input) {
        return getStaticDimensions(subsidiary);
    }
    if (Array.isArray(input)) {
        return input;
    }
    const getDimension = input;
    return getDimension(subsidiary);
};
function SubsidiaryLogo({ subsidiary , className , dimensions  }) {
    const isMobile = (0,useIsMobile/* default */.Z)();
    let [height, width] = getDimensions(dimensions, subsidiary);
    const source = (0,subsidiary_config/* default */.Z)(subsidiary);
    if (isMobile) {
        height = getMobileHeight(subsidiary);
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(Image, {
        className: className,
        src: source.logoUrl,
        height: height,
        width: width
    }));
}
const Image = external_styled_components_default().img.withConfig({
    componentId: "sc-3d3bbd3c-0"
})`
  height: ${(props)=>props.height === -1 ? "auto" : props.height + "px"
};
  width: ${(props)=>props.width === -1 ? "auto" : props.width + "px"
};
`;
const getMobileHeight = (input)=>{
    switch(input){
        case "home delivery":
            return 96;
        case "extra":
            return 90;
        case "haulage":
            return 73;
        case "constructit":
            return 38;
    }
};
const getStaticDimensions = (input)=>{
    switch(input){
        case "home delivery":
            return [
                90,
                140
            ];
        case "constructit":
            return [
                36,
                168
            ];
        case "haulage":
            return [
                73,
                114
            ];
        case "extra":
            return [
                111,
                136
            ];
        default:
            throw new Error(`Unknown dimensions for subsidiary for ${input}`);
    }
};
/* harmony default export */ const common_SubsidiaryLogo = (external_styled_components_default()(SubsidiaryLogo).withConfig({
    componentId: "sc-3d3bbd3c-1"
})``);

;// CONCATENATED MODULE: ./components/careers/listing/item/high-level/common/SubsidiaryName.tsx


const getName = (input)=>{
    switch(input){
        case "home delivery":
            return "BJS Two-Man Home Delivery";
        case "extra":
            return "BJS Extra";
        case "haulage":
            return "BJS Haulage";
        case "constructit":
            return "ConstructIT";
        default:
            throw new Error(`Cannot find match for ${input}`);
    }
};
const SubsidiaryName_Text = external_styled_components_default().span.withConfig({
    componentId: "sc-17199f0b-0"
})`
  font-size: 14px;

  color: #888075;
`;
function SubsidiaryName(props) {
    const name = getName(props.subsidiary);
    return(/*#__PURE__*/ jsx_runtime_.jsx(SubsidiaryName_Text, {
        className: props.className,
        children: name
    }));
}
/* harmony default export */ const common_SubsidiaryName = (external_styled_components_default()(SubsidiaryName).withConfig({
    componentId: "sc-17199f0b-1"
})``);

;// CONCATENATED MODULE: ./components/careers/listing/item/high-level/common/DetailPair.tsx


function DetailPair(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(DetailPair_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DetailPair_Text, {
                children: props.employmentType
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Circle, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(DetailPair_Text, {
                children: props.contractType
            })
        ]
    }));
}
const DetailPair_Text = external_styled_components_default().span.withConfig({
    componentId: "sc-96bb54bf-0"
})`
  color: #9a9a9a;
  font-size: 12px;
  font-weight: bold;
  white-space: nowrap;
`;
const Circle = external_styled_components_default().div.withConfig({
    componentId: "sc-96bb54bf-1"
})`
  max-height: 4px;
  min-height: 4px;
  min-width: 4px;
  background: #888075;
  border-radius: 50%;
`;
const DetailPair_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-96bb54bf-2"
})`
  display: flex;
  > :not(:last-child) {
    margin-right: 7px;
  }
  position: relative;
  align-items: center;
  justify-content: space-between;
`;
/* harmony default export */ const common_DetailPair = (external_styled_components_default()(DetailPair).withConfig({
    componentId: "sc-96bb54bf-3"
})``);

;// CONCATENATED MODULE: ./components/careers/listing/item/high-level/common/index.tsx








const JobTitle = external_styled_components_default().span.withConfig({
    componentId: "sc-ca049ee4-0"
})`
  font-size: 16px;
  font-family: "Eveleth";
`;
const SalaryType = external_styled_components_default().span.withConfig({
    componentId: "sc-ca049ee4-1"
})`
  color: #888075;
`;



/***/ }),

/***/ 816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2699);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5403);
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__);






const Checkbox = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)((props, ref)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CheckboxInput, {
                checked: props.checked,
                ref: ref
            }),
            props.checked && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tick, {
                icon: _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faCheck
            })
        ]
    }));
});
const CheckboxInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default().input.attrs({
    type: "checkbox"
}).withConfig({
    componentId: "sc-7d00bd66-0"
})`
  display: none;
`;
const Tick = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon).withConfig({
    componentId: "sc-7d00bd66-1"
})`
  font-size: 24px !important;
  color: ${_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2__.colours.yellow};
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-7d00bd66-2"
})`
  cursor: pointer;
  border: 1px solid #9c9a97;
  border-radius: 6px;
  height: 25px;
  width: 25px;
  position: relative;

  ${Tick} {
    position: absolute;
    bottom: 4px;
    right: -5px;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Checkbox).withConfig({
    componentId: "sc-7d00bd66-3"
})``);


/***/ }),

/***/ 6336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6170);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__);



const InputValidationMessage = (props)=>{
    const { children , maxWidth =240  } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ErrorMessageContainer, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "*"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ErrorMessage, {
                maxWidth: maxWidth,
                children: children
            })
        ]
    }));
};
const ErrorMessageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-2c79b6fd-0"
})`
  font-size: 12px;
  color: #C43232;
  margin: 0;
  display: flex;
`;
const ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
    componentId: "sc-2c79b6fd-1"
})`
  padding-left: 5px;
  margin: 0;
  ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__.up)("lg")}{
    max-width: ${(props)=>props.maxWidth
}px;
  }    
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputValidationMessage);


/***/ }),

/***/ 8280:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7362);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modal_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7318);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_dom__WEBPACK_IMPORTED_MODULE_3__]);
react_dom__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Modal(props) {
    const { 0: isBrowser , 1: setIsBrowser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const setShowingBackground = (0,_modal_store__WEBPACK_IMPORTED_MODULE_5__/* .useSetShowingBackground */ .I9)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsBrowser(true);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.hideBackground) {
            setShowingBackground(false);
        }
        return ()=>setShowingBackground(true)
        ;
    }, [
        props.hideBackground
    ]);
    const modalContent = props.showing ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledModalOverlay, {
        className: props.className,
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        children: props.children
    }) : null;
    if (isBrowser) {
        return(/*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_3__["default"].createPortal(modalContent, document.getElementById("modal-root")));
    } else {
        return null;
    }
}
const StyledModalOverlay = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div).withConfig({
    componentId: "sc-f74cea35-0"
})`
  display: flex;
  background: white;
  z-index: 10000;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;