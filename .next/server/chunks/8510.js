"use strict";
exports.id = 8510;
exports.ids = [8510];
exports.modules = {

/***/ 8124:
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
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3562);
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_talk_to_us_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2831);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);







function Exit(props) {
    const setOpen = (0,components_talk_to_us_store__WEBPACK_IMPORTED_MODULE_5__/* .useSetOpen */ .f6)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const onClick = ()=>{
        setOpen(false);
        const path = router.asPath;
        if (path === "/talk-to-us") {
            router.push("/", undefined, {
                shallow: true
            });
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
        className: props.className,
        icon: _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTimes,
        onClick: onClick
    }));
}
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon).withConfig({
    componentId: "sc-916017de-0"
})`
  font-size: 60px !important;
  cursor: pointer;
  color: rgba(58, 54, 48, 0.3);

  :hover {
    color: ${_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2__.colours.yellow};
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Exit).withConfig({
    componentId: "sc-916017de-1"
})``);


/***/ }),

/***/ 1805:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2699);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _section_talk_to_us__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7409);
/* harmony import */ var _section_booking_quote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8341);
/* harmony import */ var components_talk_to_us_form_Exit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8124);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_section_booking_quote__WEBPACK_IMPORTED_MODULE_4__]);
_section_booking_quote__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function DesktopTalkToUs(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Left, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        children: "Talk to us"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_section_talk_to_us__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Right, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_section_booking_quote__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_talk_to_us_form_Exit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                ]
            })
        ]
    }));
}
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
    componentId: "sc-d7a9be7-0"
})`
  font-family: "Eveleth";
  font-size: 26px;
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-d7a9be7-1"
})`
  display: flex;
  //box-shadow: 0px 3px 20px #0000001a;
  border-radius: 12px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
  background: white;
  max-width: 1720px;
`;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-d7a9be7-2"
})`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const Section = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-d7a9be7-3"
})`
  display: flex;
  flex-direction: column;
  ${Title} {
    margin-bottom: 25px;
  }
`;
const Right = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Section).withConfig({
    componentId: "sc-d7a9be7-4"
})`
  background: white;
  padding: 65px 140px 0px 100px;
  border-radius: 12px;

  @media only screen and (max-width: 1400px) {
    padding-left: 30px;
    padding-right: 30px;
  }
position: relative;
  ${components_talk_to_us_form_Exit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z} {
    position: absolute;
    right: 40px;
    top: 40px;
  }

  ${_section_booking_quote__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z} {

    ${_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2__.Form.Inputs.Label.Section} {
      label {
        font-size: 11px;
        color: #888075;
      }
    }
  }
  
`;
const Left = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Section).withConfig({
    componentId: "sc-d7a9be7-5"
})`
  background: transparent linear-gradient(360deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;
  padding: 60px 40px;
  border-radius: 12px 0px 0px 12px;
  max-width: 500px;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_1___default()(DesktopTalkToUs).withConfig({
    componentId: "sc-d7a9be7-6"
})``);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6170);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_talk_to_us_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2831);
/* harmony import */ var _util_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8280);
/* harmony import */ var _desktop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1805);
/* harmony import */ var components_util_useIsTabletOrSmaller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3176);
/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4180);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_util_modal_modal_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7318);
/* harmony import */ var react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1704);
/* harmony import */ var react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_modal__WEBPACK_IMPORTED_MODULE_4__, _desktop__WEBPACK_IMPORTED_MODULE_5__, _landing__WEBPACK_IMPORTED_MODULE_7__]);
([_util_modal__WEBPACK_IMPORTED_MODULE_4__, _desktop__WEBPACK_IMPORTED_MODULE_5__, _landing__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function TalkToUsForm() {
    const setShowBackground = (0,components_util_modal_modal_store__WEBPACK_IMPORTED_MODULE_9__/* .useSetShowingBackground */ .I9)();
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        setShowBackground(false);
        return ()=>setShowBackground(true)
        ;
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TalkToUsModal, {
        showing: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_10__.GoogleReCaptchaProvider, {
            reCaptchaKey: "6LeOuZIdAAAAAA0Au8eoMH0VjDDpXHquiVieDYkM",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TalkToUsContent, {})
        })
    }));
}
function TalkToUsContent() {
    const isTabletOrLower = (0,components_util_useIsTabletOrSmaller__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)();
    const selected = (0,components_talk_to_us_store__WEBPACK_IMPORTED_MODULE_3__/* .useSelectedSubsidiaryValue */ .kB)();
    if (!selected || isTabletOrLower) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_landing__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_desktop__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}));
}
const TalkToUsModal = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_util_modal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-5f82eaa9-0"
})`
  //position: fixed;
  left: 0;
  overflow-y: scroll;
  background-color: gba(255,255,255,0.95);
  width: 100%;

  ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__.down)("md")} {
    height: 100%;
  }

  padding: 40px;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1880px) {
    //This is where constructIT begins to get cut off, going to tablet padding helps this
    padding: 20px;
  }

  @media only screen and (max-width: 1225px) {
    //This is where constructIT begins to get cut off, going to tablet padding helps this
    padding: 0px;
  }

  ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__.down)("sm")} {
    padding: 0px;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TalkToUsForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ FormContainer),
  "Z": () => (/* binding */ booking_quote_BookingQuote)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__(6170);
// EXTERNAL MODULE: ./components/talk-to-us/form/section/booking-quote/header-store.ts
var header_store = __webpack_require__(3305);
// EXTERNAL MODULE: external "@bjsdistribution/components"
var components_ = __webpack_require__(2699);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
// EXTERNAL MODULE: ./components/util/InputValidationMessage.tsx
var InputValidationMessage = __webpack_require__(6336);
// EXTERNAL MODULE: ./components/talk-to-us/form/section/booking-quote/submission/agree-store.ts
var agree_store = __webpack_require__(3165);
// EXTERNAL MODULE: ./components/footer/useClickInformation.ts
var useClickInformation = __webpack_require__(5031);
// EXTERNAL MODULE: ./components/util/Checkbox.tsx
var Checkbox = __webpack_require__(816);
;// CONCATENATED MODULE: ./components/talk-to-us/form/section/booking-quote/submission/AgreeToTerms.tsx






function AgreeToTerms(props) {
    const [agree, setAgree] = (0,agree_store/* useAgreeState */.b$)();
    const toggle = ()=>setAgree(!agree)
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Checkbox/* default */.Z, {
                checked: agree,
                onClick: toggle
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                children: [
                    "I agree to the BJS",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: useClickInformation/* privacyPolicyUrl */.w,
                        target: "_blank",
                        children: "Privacy Policy"
                    })
                ]
            })
        ]
    }));
}
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-f7f35f78-0"
})`
  display: flex;
  align-items: center;

  > :not(:last-child) {
    margin-right: 10px;
  }
  cursor: pointer;

  span {
    color: #9c9a97;

    :hover {
      //color: ${components_.colours.yellow};
    }
  }
`;
/* harmony default export */ const submission_AgreeToTerms = (external_styled_components_default()(AgreeToTerms).withConfig({
    componentId: "sc-f7f35f78-1"
})``);

// EXTERNAL MODULE: ./components/talk-to-us/form/section/booking-quote/submission/submitting-store.ts
var submitting_store = __webpack_require__(7205);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/pro-regular-svg-icons"
var pro_regular_svg_icons_ = __webpack_require__(5403);
;// CONCATENATED MODULE: ./components/talk-to-us/form/section/booking-quote/submission/index.tsx









function SubmissionContainer(props) {
    const isAgreed = (0,agree_store/* useAgreedValue */.pW)();
    const [isSubmitting] = (0,submitting_store/* default */.Z)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(submission_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(submission_AgreeToTerms, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_.Button, {
                type: "submit",
                disabled: !isAgreed || isSubmitting,
                icon: isSubmitting ? /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                    icon: pro_regular_svg_icons_.faSpinner,
                    spin: true
                }) : undefined,
                children: "Submit"
            })
        ]
    }));
}
const submission_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-8a1e793c-0"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${components_.Button.PlainButton} {
    height: 56px;
    width: 200px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    flex-direction: column;

    ${submission_AgreeToTerms} {
      margin-bottom: 15px;
      text-align: center;
    }

    ${components_.Button.PlainButton} {
      width: 100%;
    }
  }

`;
/* harmony default export */ const submission = (external_styled_components_default()(SubmissionContainer).withConfig({
    componentId: "sc-8a1e793c-1"
})``);

;// CONCATENATED MODULE: ./components/talk-to-us/form/section/booking-quote/BookingQuote.tsx









const MOBILE_NUMBER_PATTERN = /^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$/;
const LANDLINE_NUMBER_PATTERN = /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/;
const EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
function BookingQuote({ subsidiary , className , children  }) {
    const showHeader = (0,header_store/* useShowHeader */.X)();
    const form = components_.Form.useForm();
    const { "email address": emailAddressErr , "telephone number": telephoneNumberErr  } = form.formState.errors;
    const subsidiaryName = (0,external_react_.useMemo)(()=>{
        if (subsidiary === "constructit") {
            return "Construct IT";
        }
        return subsidiary;
    }, [
        subsidiary
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(BookingQuote_Container, {
        className: className,
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        children: [
            showHeader && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Header, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Title, {
                        children: [
                            subsidiaryName,
                            " booking quote"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Subtitle, {
                        children: "We know forms can be tedious but the more you tell us the faster we’ll be able to help – it’ll be worth it, we promise!"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FormContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_.Form.Inputs.Input, {
                        name: "name",
                        label: "your name",
                        width: 300,
                        required: "Please provide a name"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_.Form.Inputs.Input, {
                        name: "company",
                        label: "company name",
                        width: 300,
                        required: "Please provide your company name"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InputFieldWrapper, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Form.Inputs.Input, {
                                name: "telephone number",
                                label: "telephone number",
                                width: 300,
                                required: "Please provide a contact number",
                                validate: isValidContactNumber
                            }),
                            (telephoneNumberErr === null || telephoneNumberErr === void 0 ? void 0 : telephoneNumberErr.type) === "validate" && /*#__PURE__*/ jsx_runtime_.jsx(InputValidationMessage/* default */.Z, {
                                children: "Please provide a valid phone number"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InputFieldWrapper, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(EmailInput, {
                                name: "email address",
                                label: "email address",
                                required: "Please provide a contact email",
                                type: "email",
                                pattern: {
                                    value: EMAIL_PATTERN,
                                    message: "Please provide a valid email address"
                                }
                            }),
                            (emailAddressErr === null || emailAddressErr === void 0 ? void 0 : emailAddressErr.type) === "pattern" && /*#__PURE__*/ jsx_runtime_.jsx(InputValidationMessage/* default */.Z, {
                                children: emailAddressErr === null || emailAddressErr === void 0 ? void 0 : emailAddressErr.message
                            })
                        ]
                    }),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(submission, {})
                ]
            })
        ]
    }));
}
const isValidContactNumber = (input)=>{
    const success = MOBILE_NUMBER_PATTERN.test(input) || LANDLINE_NUMBER_PATTERN.test(input);
    if (!success) {
        return "Please provide a valid contact number";
    }
    return true;
};
const InputFieldWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-ad2fe4f-0"
})``;
const EmailInput = external_styled_components_default()(components_.Form.Inputs.Input).withConfig({
    componentId: "sc-ad2fe4f-1"
})`
  width: 600px;

  @media only screen and (max-width: 1200px) {
    width: 400px;
  }
  ${(0,external_styled_breakpoints_.only)("md")} {
    width: 300px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    width: 100%;
  }
`;
const FormContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-ad2fe4f-2"
})`
  display: flex;

  ${(0,external_styled_breakpoints_.down)("sm")} {
    flex-direction: column;
  }
  > :not(:last-child) {
    margin-right: 40px;

    ${(0,external_styled_breakpoints_.down)("sm")} {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    ${components_.Form.Inputs.Label.Container} {
      width: 100%;
    }
  }

  flex-wrap: wrap;
`;
const Title = external_styled_components_default().span.withConfig({
    componentId: "sc-ad2fe4f-3"
})`
  font-family: "Eveleth";
  font-size: 20px;
`;
const Subtitle = external_styled_components_default().span.withConfig({
    componentId: "sc-ad2fe4f-4"
})`
  font-size: 14px;
  max-width: 130ch;
`;
const Header = external_styled_components_default().div.withConfig({
    componentId: "sc-ad2fe4f-5"
})`
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    margin-bottom: 20px;
  }
`;
const BookingQuote_Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-ad2fe4f-6"
})`
  display: flex;
  flex-direction: column;

  ${Header} {
    margin-bottom: 55px;
  }

  ${submission} {
    margin-top: 15px;
    padding-bottom: 135px;

    @media only screen and (max-width: 1200px) {
      padding-bottom: 30px;
    }
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    padding: 40px;
  }
`;

/* harmony default export */ const booking_quote_BookingQuote = (BookingQuote);


/***/ }),

/***/ 8727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2699);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BookingQuote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(830);
/* harmony import */ var _components_util_InputValidationMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6336);
/* harmony import */ var components_talk_to_us_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3167);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);






const vehicleTypeOptions = _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1__.Form.Options.create([
    "articulated crane",
    "drawbar crane",
    "closed extender crane",
    "rigid crane",
    "articulated curtainsider/flatbed", 
]);
function ConstructITBookingQuote(props) {
    const { className , todayDate , getMinDeliveryDate  } = props;
    const form = _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1__.Form.useForm();
    const collectionDate = form.watch("collection date");
    const deliveryDate = form.watch("delivery date");
    const { "collection date": collectionDateError , "delivery date": deliveryDateError  } = form.formState.errors;
    const cd = new Date(collectionDate).valueOf();
    const dd = new Date(deliveryDate).valueOf();
    const td = new Date(todayDate).valueOf();
    const minDeliveryDate = getMinDeliveryDate(new Date((0,components_talk_to_us_utils__WEBPACK_IMPORTED_MODULE_5__/* .compareTodayAndCollectionDates */ .hZ)(cd, td)).toLocaleDateString("en-GB").split('/').reverse().join('-'));
    const sameDateErrMsg = (0,components_talk_to_us_utils__WEBPACK_IMPORTED_MODULE_5__/* .compareCollectionAndDeliveryDates */ .oN)(cd, dd);
    const currentDeliveryDateMsg = (0,components_talk_to_us_utils__WEBPACK_IMPORTED_MODULE_5__/* .compareTodayAndDeliveryDates */ .tn)(td, dd);
    const futureDeliveryDateMsg = (0,components_talk_to_us_utils__WEBPACK_IMPORTED_MODULE_5__/* .compareAllDates */ .zn)(td, cd, dd);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_BookingQuote__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        subsidiary: "constructit",
        className: className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1__.Form.Inputs.Input, {
                name: "collection post code",
                width: 160
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1__.Form.Inputs.Input, {
                name: "delivery post code",
                width: 160
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InputFieldWrapper, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1__.Form.Inputs.Input, {
                        name: "collection date",
                        label: "collection date",
                        type: "date",
                        width: 240,
                        min: todayDate,
                        max: "9999-12-31"
                    }),
                    sameDateErrMsg ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_util_InputValidationMessage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        children: sameDateErrMsg
                    }) : collectionDateError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_util_InputValidationMessage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        children: "Collection date must not be in past"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InputFieldWrapper, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1__.Form.Inputs.Input, {
                        name: "delivery date",
                        label: "delivery date",
                        type: "date",
                        width: 240,
                        min: minDeliveryDate,
                        max: "9999-12-31",
                        disabled: collectionDate ? false : true
                    }),
                    futureDeliveryDateMsg ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_util_InputValidationMessage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        children: futureDeliveryDateMsg
                    }) : sameDateErrMsg ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_util_InputValidationMessage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        children: sameDateErrMsg
                    }) : currentDeliveryDateMsg ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_util_InputValidationMessage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        children: currentDeliveryDateMsg
                    }) : deliveryDateError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_util_InputValidationMessage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        children: "Delivery date must not be in past"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1__.Form.Inputs.Select, {
                name: "vehicle type required",
                options: vehicleTypeOptions
            })
        ]
    }));
}
const InputFieldWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-f0fe6c5b-0"
})``;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_4___default()(ConstructITBookingQuote).withConfig({
    componentId: "sc-f0fe6c5b-1"
})``);


/***/ }),

/***/ 8517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ booking_quote_GenericBookingQuote)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__(6170);
// EXTERNAL MODULE: external "@bjsdistribution/components"
var components_ = __webpack_require__(2699);
// EXTERNAL MODULE: ./components/talk-to-us/form/section/booking-quote/BookingQuote.tsx + 2 modules
var BookingQuote = __webpack_require__(830);
;// CONCATENATED MODULE: ./components/talk-to-us/form/section/booking-quote/ProductTypeSelect.tsx


const productTypes = [
    "Home furniture",
    "Home Entertainment & Electronics",
    "Garden Furniture",
    "White Goods",
    "Lighting",
    "Mirrors",
    "Gym equipment",
    "Other", 
];
const productOptions = components_.Form.Options.create(productTypes);
const ProductTypeSelect_name = "product types";
function ProductTypeSelect() {
    const form = components_.Form.useForm();
    var ref;
    const value = (ref = form.watch(ProductTypeSelect_name)) !== null && ref !== void 0 ? ref : [];
    return(/*#__PURE__*/ jsx_runtime_.jsx(components_.Form.Options.Dropdown, {
        name: ProductTypeSelect_name,
        label: "type of product(s)",
        isMulti: true,
        selected: {
            value: value,
            setValue: (options)=>{
                form.setValue(ProductTypeSelect_name, options);
            }
        },
        allOptions: productOptions,
        resolver: resolver,
        noneSelected: "Select some products",
        allSelected: "All products",
        width: 380
    }));
}
const resolver = (selected)=>{
    return selected.length + " products";
};

/* harmony default export */ const booking_quote_ProductTypeSelect = (ProductTypeSelect);

;// CONCATENATED MODULE: ./components/talk-to-us/form/section/booking-quote/ServiceLevelSelect.tsx


const oldServiceTypes = (/* unused pure expression or super */ null && ([
    "Hallway delivery",
    "Room of Choice",
    "Assembly",
    "Packaging Removal",
    "Packaging Disposal",
    "Collection",
    "Other",
    "Unsure"
]));
const serviceTypes = [
    "1 Man",
    "2 Man",
    "collections",
    "next day",
    "assembly",
    "recycle",
    "unpack",
    "packaging disposal",
    "let's chat first"
];
const serviceOptions = components_.Form.Options.create(serviceTypes);
const ServiceLevelSelect_name = "service";
function ServiceLevelSelect() {
    const form = components_.Form.useForm();
    var ref;
    const value = (ref = form.watch(ServiceLevelSelect_name)) !== null && ref !== void 0 ? ref : [];
    return(/*#__PURE__*/ jsx_runtime_.jsx(components_.Form.Options.Dropdown, {
        name: ServiceLevelSelect_name,
        selected: {
            value: value,
            setValue: (options)=>{
                form.setValue(ServiceLevelSelect_name, options);
            }
        },
        allOptions: serviceOptions,
        noneSelected: "Select a service",
        width: 250
    }));
/*
  return (
    <Form.Inputs.Select
    name={name}
    options={serviceOptions}
    />
    <Form.Options.Dropdown
      name={name}
      selected={{
        value: value,
        setValue: (options: any) => {
          form.setValue(name, options);
        },
      }}
      allOptions={productOptions}
      resolver={resolver}
      noneSelected="Select a service level"
      width={380}
    />
  );*/ }
/* harmony default export */ const booking_quote_ServiceLevelSelect = (ServiceLevelSelect);

// EXTERNAL MODULE: ./components/util/InputValidationMessage.tsx
var InputValidationMessage = __webpack_require__(6336);
;// CONCATENATED MODULE: ./components/talk-to-us/form/section/booking-quote/GenericBookingQuote.tsx








const POSTCODE_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
function GenericBookingQuote({ className , subsidiary  }) {
    const form = components_.Form.useForm();
    const { "expected weekly volume": expectedWeeklyVolumeErr  } = form.formState.errors;
    const isValidWeeklyVolume = (input)=>input >= 0 ? true : "Please provide a valid weekly volume"
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        subsidiary: subsidiary,
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(RegistrationInput, {
                name: "location",
                label: "location/postcode",
                width: 300
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(booking_quote_ServiceLevelSelect, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(booking_quote_ProductTypeSelect, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InputFieldWrapper, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_.Form.Inputs.Input, {
                        name: "expected weekly volume",
                        label: "expected weekly volume",
                        type: "number",
                        min: 0,
                        required: "Please provide a valid weekly volume",
                        validate: isValidWeeklyVolume,
                        defaultValue: 0
                    }),
                    (expectedWeeklyVolumeErr === null || expectedWeeklyVolumeErr === void 0 ? void 0 : expectedWeeklyVolumeErr.type) === "required" ? /*#__PURE__*/ jsx_runtime_.jsx(InputValidationMessage/* default */.Z, {
                        children: expectedWeeklyVolumeErr === null || expectedWeeklyVolumeErr === void 0 ? void 0 : expectedWeeklyVolumeErr.message
                    }) : (expectedWeeklyVolumeErr === null || expectedWeeklyVolumeErr === void 0 ? void 0 : expectedWeeklyVolumeErr.type) === "min" && /*#__PURE__*/ jsx_runtime_.jsx(InputValidationMessage/* default */.Z, {
                        children: "Weekly volume cannot be negative"
                    })
                ]
            })
        ]
    }));
}
const InputFieldWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-e360f4f1-0"
})``;
const RegistrationInput = external_styled_components_default()(components_.Form.Inputs.Input).withConfig({
    componentId: "sc-e360f4f1-1"
})`
  ${(0,external_styled_breakpoints_.down)("md")} {
    width: 640px;
  }
`;
const Container = external_styled_components_default()(BookingQuote/* default */.Z).withConfig({
    componentId: "sc-e360f4f1-2"
})`
  @media only screen and (max-width: 800px) {
    ${BookingQuote/* FormContainer */.Y} {
      flex-direction: column;
    }

    ${components_.Form.Inputs.Label.Container} {
      width: 100%;
      input {
        width: 100%;
      }
    }
  }
`;
/* harmony default export */ const booking_quote_GenericBookingQuote = (external_styled_components_default()(GenericBookingQuote).withConfig({
    componentId: "sc-e360f4f1-3"
})``);


/***/ }),

/***/ 2355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2699);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BookingQuote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(830);
/* harmony import */ var _components_util_InputValidationMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6336);
/* harmony import */ var components_talk_to_us_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3167);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);






function HaulageBookingQuote(props) {
    const { className , todayDate , getMinDeliveryDate  } = props;
    const form = _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1__.Form.useForm();
    const collectionDate = form.watch("collection date");
    const deliveryDate = form.watch("delivery date");
    const { "collection date": collectionDateError , "delivery date": deliveryDateError  } = form.formState.errors;
    const cd = new Date(collectionDate).valueOf();
    const dd = new Date(deliveryDate).valueOf();
    const td = new Date(todayDate).valueOf();
    const minDeliveryDate = getMinDeliveryDate(new Date((0,components_talk_to_us_utils__WEBPACK_IMPORTED_MODULE_5__/* .compareTodayAndCollectionDates */ .hZ)(cd, td)).toLocaleDateString("en-GB").split('/').reverse().join('-'));
    const sameDateErrMsg = (0,components_talk_to_us_utils__WEBPACK_IMPORTED_MODULE_5__/* .compareCollectionAndDeliveryDates */ .oN)(cd, dd);
    const currentDeliveryDateMsg = (0,components_talk_to_us_utils__WEBPACK_IMPORTED_MODULE_5__/* .compareTodayAndDeliveryDates */ .tn)(td, dd);
    const futureDeliveryDateMsg = (0,components_talk_to_us_utils__WEBPACK_IMPORTED_MODULE_5__/* .compareAllDates */ .zn)(td, cd, dd);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_BookingQuote__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        subsidiary: "haulage",
        className: className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1__.Form.Inputs.Input, {
                name: "collection post code",
                width: 160
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1__.Form.Inputs.Input, {
                name: "delivery post code",
                width: 160
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InputFieldWrapper, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1__.Form.Inputs.Input, {
                        name: "collection date",
                        label: "collection date",
                        type: "date",
                        width: 240,
                        min: todayDate,
                        max: "9999-12-31"
                    }),
                    sameDateErrMsg ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_util_InputValidationMessage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        children: sameDateErrMsg
                    }) : collectionDateError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_util_InputValidationMessage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        children: "Collection date must not be in past"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InputFieldWrapper, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_1__.Form.Inputs.Input, {
                        name: "delivery date",
                        label: "delivery date",
                        type: "date",
                        width: 240,
                        min: minDeliveryDate,
                        max: "9999-12-31",
                        disabled: collectionDate ? false : true
                    }),
                    futureDeliveryDateMsg ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_util_InputValidationMessage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        children: futureDeliveryDateMsg
                    }) : sameDateErrMsg ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_util_InputValidationMessage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        children: sameDateErrMsg
                    }) : currentDeliveryDateMsg ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_util_InputValidationMessage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        children: currentDeliveryDateMsg
                    }) : deliveryDateError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_util_InputValidationMessage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        children: "Delivery date must not be in past"
                    })
                ]
            })
        ]
    }));
}
const InputFieldWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-7ff4cf48-0"
})``;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HaulageBookingQuote);


/***/ }),

/***/ 3305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ useShowHeader),
/* harmony export */   "_": () => (/* binding */ useSetShowHeader)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const showHeader = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "talk_to_us_content_show_header",
    default: true
});
function useShowHeader() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(showHeader);
}
function useSetShowHeader() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(showHeader);
}



/***/ }),

/***/ 8341:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2699);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_talk_to_us_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2831);
/* harmony import */ var _GenericBookingQuote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8517);
/* harmony import */ var _HaulageBookingQuote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2355);
/* harmony import */ var _ConstructITBookingQuote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8727);
/* harmony import */ var components_careers_listing_form_response_usePushError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5025);
/* harmony import */ var components_talk_to_us_form_submission_usePushEmail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6706);
/* harmony import */ var _components_careers_listing_form_response_token_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2847);
/* harmony import */ var _submission_submitting_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7205);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_talk_to_us_form_submission_usePushEmail__WEBPACK_IMPORTED_MODULE_8__]);
components_talk_to_us_form_submission_usePushEmail__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













function BookingQuote({ className  }) {
    const selected = (0,components_talk_to_us_store__WEBPACK_IMPORTED_MODULE_3__/* .useSelectedSubsidiaryValue */ .kB)();
    const form = _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2__.Form.useForm();
    const date = new Date();
    const currentDate = date.toLocaleDateString("en-GB").split('/').reverse().join('-'); // required format :- yyyy-mm-dd eg-> 2022-10-31
    const getMinDeliveryDate = (collectionDate)=>{
        const formattedCollectionDate = new Date(collectionDate);
        const deliveryDate = new Date(formattedCollectionDate);
        deliveryDate.setDate(formattedCollectionDate.getDate() + 1);
        const minDeliveryDate = deliveryDate.toLocaleDateString("en-GB").split('/').reverse().join('-');
        return minDeliveryDate;
    };
    const compareDates = (d1, d2)=>{
        if (d1 - d2 === 0) {
            return "* Collection and Delivery dates can not be same";
        } else if (d1 > d2) {
            return "* Delivery date must not be in past";
        } else {
            return "";
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!selected) {
            return;
        }
        form.setValue("subsidiary", selected);
    }, [
        selected
    ]);
    if (!selected) {
        return null;
    }
    switch(selected){
        case "home delivery":
        case "extra":
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GenericBookingQuote__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                subsidiary: selected,
                className: className
            }));
        case "haulage":
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HaulageBookingQuote__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: className,
                todayDate: currentDate,
                getMinDeliveryDate: getMinDeliveryDate,
                compareDates: compareDates
            }));
        case "constructit":
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ConstructITBookingQuote__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: className,
                todayDate: currentDate,
                getMinDeliveryDate: getMinDeliveryDate,
                compareDates: compareDates
            }));
        default:
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    "Cannot find subsisidary ",
                    selected
                ]
            }));
    }
}
const id = "talk_to_us";
function BookingQuoteWrapper({ className  }) {
    const pushError = (0,components_careers_listing_form_response_usePushError__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const pushEmail = (0,components_talk_to_us_form_submission_usePushEmail__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const notifications = _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2__.Notifications.useNotifications();
    const token = (0,_components_careers_listing_form_response_token_store__WEBPACK_IMPORTED_MODULE_9__/* .useToken */ .dQ)();
    const setTalkToUsOpen = (0,components_talk_to_us_store__WEBPACK_IMPORTED_MODULE_3__/* .useSetOpen */ .f6)();
    const [, setSubmitting] = (0,_submission_submitting_store__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    const onSubmit = async (values)=>{
        const clone = {
            ...values
        };
        const newValues = {
            ...clone,
            service: clone["service"] === undefined ? [] : clone["service"],
            "product types": clone["product types"] === undefined ? [] : clone["product types"]
        };
        if (!token) {
            notifications.add({
                id,
                title: "An error occurred",
                description: "Cannot find token",
                type: "failure"
            });
            return;
        }
        const subsidiary = newValues.subsidiary;
        try {
            setSubmitting(true);
            await pushEmail(newValues, token);
            await notifications.add({
                id,
                title: "Submitted quote",
                description: `Your ${subsidiary} quote has been submitted! Please allow up to 7 working days for us to get back to you!`,
                type: "success",
                duration: 10
            });
            await setTalkToUsOpen(false);
        } catch (error) {
            const message = error.message;
            notifications.add({
                id,
                title: "An error occurred",
                description: message,
                type: "failure"
            });
        } finally{
            setSubmitting(false);
        }
    };
    const onError = (error)=>{
        pushError("booking_quote", error);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2__.Form, {
        onCancel: ()=>{},
        onSubmit: onSubmit,
        onError: onError,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BookingQuote, {
            className: className
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_11___default()(BookingQuoteWrapper).withConfig({
    componentId: "sc-80b05e01-0"
})``);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const submitState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "talk_to_us_submitting",
    default: false
});
function useSubmitState() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState)(submitState);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSubmitState);


/***/ }),

/***/ 7409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ talk_to_us)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/subsidiary-showcase/Subsidiary.ts
var Subsidiary = __webpack_require__(4170);
// EXTERNAL MODULE: ./subsidiary-config/index.tsx
var subsidiary_config = __webpack_require__(1683);
;// CONCATENATED MODULE: ./components/talk-to-us/form/section/talk-to-us/SubsidiaryLogo.tsx



function SubsidiaryLogo({ subsidiary , className  }) {
    let [height, width] = getDimensions(subsidiary);
    let usedWidth = width === -1 ? "auto" : width;
    const source = (0,subsidiary_config/* default */.Z)(subsidiary);
    return(/*#__PURE__*/ jsx_runtime_.jsx("img", {
        className: className,
        src: source.logoUrl,
        height: height,
        width: usedWidth
    }));
}
const getDimensions = (input)=>{
    switch(input){
        case "home delivery":
            return [
                54,
                78
            ];
        case "constructit":
            return [
                22,
                108
            ];
        case "haulage":
            return [
                47,
                78
            ];
        case "extra":
            return [
                61,
                78
            ];
        default:
            throw new Error(`Unknown dimensions for subsidiary for ${input}`);
    }
};
/* harmony default export */ const talk_to_us_SubsidiaryLogo = (external_styled_components_default()(SubsidiaryLogo).withConfig({
    componentId: "sc-c5370717-0"
})``);

// EXTERNAL MODULE: ./components/talk-to-us/form/shared/index.tsx + 1 modules
var shared = __webpack_require__(8021);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@bjsdistribution/components"
var components_ = __webpack_require__(2699);
// EXTERNAL MODULE: ./components/talk-to-us/store/index.tsx
var store = __webpack_require__(2831);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
;// CONCATENATED MODULE: ./components/talk-to-us/form/section/talk-to-us/quote-button/SelectedSubsidiary.tsx



function SelectedSubsidiary(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Container, {
        className: props.className,
        layoutId: "quote",
        children: "Your quote"
    }));
}
const Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-22c0c5c6-0"
})`
  background: white;
  border-radius: 66px 0px 0px 66px;
  padding: 15px 0px 15px 25px;
  font-weight: bold;
  text-transform: capitalize;
  min-width: 134px;
  max-width: 134px;
`;
/* harmony default export */ const quote_button_SelectedSubsidiary = (external_styled_components_default()(SelectedSubsidiary).withConfig({
    componentId: "sc-22c0c5c6-1"
})``);

;// CONCATENATED MODULE: ./components/talk-to-us/form/section/talk-to-us/quote-button/index.tsx






function QuoteButton({ subsidiary , className  }) {
    const [selected, setSelected] = (0,store/* useSelectedSubsidiary */.Lp)();
    const isSelected = (0,external_react_.useMemo)(()=>{
        return selected === subsidiary;
    }, [
        selected,
        subsidiary
    ]);
    const select = ()=>setSelected(subsidiary)
    ;
    if (isSelected) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(quote_button_SelectedSubsidiary, {
            className: className
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(QuoteButtonContainer, {
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_.Button, {
            onClick: select,
            children: "Quote"
        })
    }));
}
const QuoteButtonContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-65dbae16-0"
})`
  min-width: 134px;
  ${components_.Button.PlainButton} {
    font-size: 14px;
    max-height: 46px;
    max-width: 94px;
  }
`;
/* harmony default export */ const quote_button = (external_styled_components_default()(QuoteButton).withConfig({
    componentId: "sc-65dbae16-1"
})``);

;// CONCATENATED MODULE: ./components/talk-to-us/form/section/talk-to-us/SubsidiaryItem.tsx






function SubsidiaryItem({ subsidiary , className  }) {
    const selected = (0,store/* useSelectedSubsidiaryValue */.kB)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(SubsidiaryItem_Container, {
        className: className,
        isSelected: selected === subsidiary,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(talk_to_us_SubsidiaryLogo, {
                subsidiary: subsidiary
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DetailsContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(shared/* PhoneSection */.X1, {
                        subsidiary: subsidiary
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(shared/* EmailSection */.Nd, {
                        subsidiary: subsidiary
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(quote_button, {
                subsidiary: subsidiary
            })
        ]
    }));
}
const DetailsContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-e996fb49-0"
})`
  display: flex;
  flex-direction: column;
    > :not(:last-child) {
      margin-bottom: 14px;
    }
  margin-left: 130px;
  margin-right: 40px;
`;
const SubsidiaryItem_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-e996fb49-1"
})`
  display: flex;
  position: relative;
  justify-content: flex-end;

  align-items: center;

  ${talk_to_us_SubsidiaryLogo} {
    left: 0;
    position: absolute;
  }
  margin-right: -40px;
`;
/* harmony default export */ const talk_to_us_SubsidiaryItem = (external_styled_components_default()(SubsidiaryItem).withConfig({
    componentId: "sc-e996fb49-2"
})``);

;// CONCATENATED MODULE: ./components/talk-to-us/form/section/talk-to-us/SubsidiaryItems.tsx





function SubsidiaryItems(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.AnimateSharedLayout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(SubsidiaryItems_Container, {
            className: props.className,
            children: Subsidiary/* allSubsidiaries.map */.Y.map((subsidiary)=>/*#__PURE__*/ jsx_runtime_.jsx(talk_to_us_SubsidiaryItem, {
                    subsidiary: subsidiary
                })
            )
        })
    }));
}
const SubsidiaryItems_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-10523bfb-0"
})`
  display: flex;
  flex-direction: column;

  ${talk_to_us_SubsidiaryItem} {
    padding: 33px 0px;
  }

  ${talk_to_us_SubsidiaryItem}:not(:last-child) {
    border-bottom: 1px solid rgba(58, 54, 48, 0.15);
  }
`;
/* harmony default export */ const talk_to_us_SubsidiaryItems = (SubsidiaryItems);

;// CONCATENATED MODULE: ./components/talk-to-us/form/section/talk-to-us/index.tsx



function TalkToUs(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(talk_to_us_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Intro, {
                children: "Contact us to discuss your requirements, obtain a quote, or to join the BJS family."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(talk_to_us_SubsidiaryItems, {})
        ]
    }));
}
const talk_to_us_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-edada244-0"
})`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
const Intro = external_styled_components_default().span.withConfig({
    componentId: "sc-edada244-1"
})`
  font-size: 14px;
`;
/* harmony default export */ const talk_to_us = (external_styled_components_default()(TalkToUs).withConfig({
    componentId: "sc-edada244-2"
})``);


/***/ }),

/***/ 9306:
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
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);




function IconPair(props) {
    var _gap;
    const gap = (_gap = props.gap) !== null && _gap !== void 0 ? _gap : 10;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        gap: gap,
        className: props.className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                icon: props.icon,
                rotation: props.rotation
            }),
            props.children
        ]
    }));
}
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon).withConfig({
    componentId: "sc-61e4b680-0"
})`
  font-size: 16px !important;
  color: ${_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2__.colours.yellow};
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-61e4b680-1"
})`
  display: flex;
  align-items: center;


  > :not(:last-child) {
    margin-right: ${(props)=>props.gap
}px;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_1___default()(IconPair).withConfig({
    componentId: "sc-61e4b680-2"
})``);


/***/ }),

/***/ 5759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bh": () => (/* binding */ PhoneNumber),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export getNumber */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1638);
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _IconPair__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9306);




function PhoneSection({ subsidiary , className  }) {
    const number = getNumber(subsidiary);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IconPair__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faPhone,
        rotation: 90,
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PhoneNumber, {
            href: `tel:${number}`,
            children: number
        })
    }));
}
const getNumber = (input)=>{
    switch(input){
        case "extra":
            return "01922 308 093";
        case "haulage":
            return "0333 344 1172";
        case "constructit":
            return "0333 880 1504";
        case "home delivery":
        default:
            return "01922 324 090";
    }
};
const PhoneNumber = styled_components__WEBPACK_IMPORTED_MODULE_1___default().a.withConfig({
    componentId: "sc-9a39c4bc-0"
})`
  font-size: 16px;
  text-decoration: underline;
  white-space: nowrap;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_1___default()(PhoneSection).withConfig({
    componentId: "sc-9a39c4bc-1"
})``);


/***/ }),

/***/ 8021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Nd": () => (/* reexport */ shared_EmailSection),
  "Q_": () => (/* reexport */ IconPair/* default */.Z),
  "X1": () => (/* reexport */ PhoneSection/* default */.ZP)
});

// EXTERNAL MODULE: ./components/talk-to-us/form/shared/IconPair.tsx
var IconPair = __webpack_require__(9306);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@fortawesome/pro-solid-svg-icons"
var pro_solid_svg_icons_ = __webpack_require__(1638);
;// CONCATENATED MODULE: ./components/talk-to-us/form/shared/EmailSection.tsx




function EmailSection({ subsidiary , className  }) {
    const email = getEmail(subsidiary);
    return(/*#__PURE__*/ jsx_runtime_.jsx(IconPair/* default */.Z, {
        icon: pro_solid_svg_icons_.faEnvelope,
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Email, {
            href: `mailto:${email}`,
            children: "Send us an email"
        })
    }));
}
const Email = external_styled_components_default().a.withConfig({
    componentId: "sc-d5e82587-0"
})`
  font-size: 16px;
  text-decoration: underline;
  white-space: nowrap;
`;
const getEmail = (input)=>{
    switch(input){
        case "extra":
            return "extra@bjsfamily.com";
        case "haulage":
            return "sales@bjshaulage.com";
        case "constructit":
            return "info@construct-IT.com";
        case "home delivery":
            return "sales@bjshomedelivery.com";
        default:
            return "hello@bjsfamily.com";
    }
};
/* harmony default export */ const shared_EmailSection = (external_styled_components_default()(EmailSection).withConfig({
    componentId: "sc-d5e82587-1"
})``);

// EXTERNAL MODULE: ./components/talk-to-us/form/shared/PhoneSection.tsx
var PhoneSection = __webpack_require__(5759);
;// CONCATENATED MODULE: ./components/talk-to-us/form/shared/index.tsx





/***/ }),

/***/ 6466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function TalkToUsSubmissionView(props) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                children: Object.entries(props.values).map(([key, value])=>{
                    if (key === "product types" || key === "service") {
                        value = value.map((item)=>item.label
                        ).join(",");
                    }
                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                                children: [
                                    key,
                                    ":"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                children: value
                            })
                        ]
                    }));
                })
            })
        })
    }));
}
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-41014ef7-0"
})``;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TalkToUsSubmissionView);


/***/ }),

/***/ 6706:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_careers_listing_form_response_usePushEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5918);
/* harmony import */ var _TalkToUsSubmissionView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6466);
/* harmony import */ var preact_render_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_careers_listing_form_response_usePushEmail__WEBPACK_IMPORTED_MODULE_1__, preact_render_to_string__WEBPACK_IMPORTED_MODULE_3__]);
([components_careers_listing_form_response_usePushEmail__WEBPACK_IMPORTED_MODULE_1__, preact_render_to_string__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const endpoint = `${"https://api.bjshomedelivery.com"}/v1/website/talk-to-us`;
const API_KEY = "C00015TG2464M0J10837E65YT1WBT1730646QNSZEY3859NY3X";
function usePushEmail() {
    const push = async (values, token)=>{
        const html = generateHtml(values);
        const body = (0,components_careers_listing_form_response_usePushEmail__WEBPACK_IMPORTED_MODULE_1__/* .formBody */ .v)(html, [], token, "Talk to us enquiry");
        const response = await fetch(endpoint, {
            method: "POST",
            // mode: "no-cors",
            headers: {
                Key: API_KEY,
                Accept: "application/json"
            },
            body
        });
        if (response.ok) {
            return true;
        }
        const json = await response.json();
        const message = await json.message;
        return message;
    };
    return push;
}
const generateHtml = (values)=>{
    const htmlString = (0,preact_render_to_string__WEBPACK_IMPORTED_MODULE_3__["default"])(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TalkToUsSubmissionView__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        values: values
    }));
    return htmlString;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePushEmail);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4419:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_util_useIsTabletOrSmaller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3176);
/* harmony import */ var components_talk_to_us_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2831);
/* harmony import */ var _SubsidiaryItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2673);
/* harmony import */ var components_talk_to_us_form_section_booking_quote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8341);
/* harmony import */ var _form_section_booking_quote_header_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3305);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_talk_to_us_form_section_booking_quote__WEBPACK_IMPORTED_MODULE_5__]);
components_talk_to_us_form_section_booking_quote__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function Content() {
    const isTabletOrSmaller = (0,components_util_useIsTabletOrSmaller__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)();
    const setHeader = (0,_form_section_booking_quote_header_store__WEBPACK_IMPORTED_MODULE_6__/* .useSetShowHeader */ ._)();
    const selectedSubidiary = (0,components_talk_to_us_store__WEBPACK_IMPORTED_MODULE_3__/* .useSelectedSubsidiaryValue */ .kB)();
    const hasSelectedSubsidiary = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return !!selectedSubidiary;
    }, [
        selectedSubidiary
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setHeader(false);
        return ()=>setHeader(true)
        ;
    }, []);
    if (isTabletOrSmaller && hasSelectedSubsidiary) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_talk_to_us_form_section_booking_quote__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubsidiaryItems__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export getSubsidiaryName */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6170);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_breakpoints__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_util_useIsTabletOrSmaller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3176);
/* harmony import */ var components_talk_to_us_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2831);
/* harmony import */ var components_talk_to_us_form_Exit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8124);







function Header(props) {
    const isTabletOrSmaller = (0,components_util_useIsTabletOrSmaller__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)();
    const selectedSubsidiary = (0,components_talk_to_us_store__WEBPACK_IMPORTED_MODULE_5__/* .useSelectedSubsidiaryValue */ .kB)();
    const reset = (0,components_talk_to_us_store__WEBPACK_IMPORTED_MODULE_5__/* .useResetSelectedSubsidiary */ .Zo)();
    const hasSelectedSubsidiary = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return !!selectedSubsidiary;
    }, [
        selectedSubsidiary
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Headers, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        isSelected: !hasSelectedSubsidiary,
                        onClick: reset,
                        children: "Talk to us"
                    }),
                    isTabletOrSmaller && hasSelectedSubsidiary && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        isSelected: true,
                        children: "Request quote"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Subtitle, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_talk_to_us_form_Exit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
        ]
    }));
}
function Subtitle() {
    const isTabletOrSmaller = (0,components_util_useIsTabletOrSmaller__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)();
    const selectedSubsidiary = (0,components_talk_to_us_store__WEBPACK_IMPORTED_MODULE_5__/* .useSelectedSubsidiaryValue */ .kB)();
    const hasSelectedSubsidiary = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return !!selectedSubsidiary;
    }, [
        selectedSubsidiary
    ]);
    if (hasSelectedSubsidiary && isTabletOrSmaller) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SubtitleText, {
            children: [
                "Please complete your",
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    style: {
                        fontWeight: 500
                    },
                    children: getSubsidiaryName(selectedSubsidiary)
                }),
                " ",
                "quote and a member of our team will be in touch with you as soon as possible."
            ]
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubtitleText, {
        children: "Contact us to discuss your requirements, obtain a quote, or to join the BJS family."
    }));
}
const getSubsidiaryName = (input)=>{
    switch(input){
        case "constructit":
            return "ConstructIT";
        case "extra":
            return "Extra";
        case "haulage":
            return "Haulage";
        case "home delivery":
            return "Home Delivery";
    }
};
const Headers = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-6825e35f-0"
})`
  display: flex;
  > :not(:last-child) {
    margin-right: 30px;
  }
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
    componentId: "sc-6825e35f-1"
})`
  font-family: "Eveleth";
  font-size: 26px;

  ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_3__.down)("md")} {
    font-size: 20px;
  }

  ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_3__.down)("sm")} {
    font-size: 18px;
  }

  ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_3__.down)("xs")} {
    font-size: 13px;
  }
  opacity: ${(props)=>props.isSelected ? "1" : "0.25"
};
`;
const SubtitleText = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
    componentId: "sc-6825e35f-2"
})`
  font-size: 16px;

  ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_3__.down)("md")} {
    font-size: 14px;
    color: #888075;
  }
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-6825e35f-3"
})`
  position: relative;
  display: flex;
  flex-direction: column;
  background: transparent linear-gradient(360deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;

  ${components_talk_to_us_form_Exit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z} {
    position: absolute;
    right: 40px;
    top: 20px;
  }

  padding: 40px;

  ${Title} {
    margin-bottom: 30px;
  }

  ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_3__.down)("md")} {
    padding: 39px 40px;
    ${Title} {
      margin-bottom: 15px;
    }
  }
  ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_3__.down)("sm")} {
    padding: 40px 20px;

    ${components_talk_to_us_form_Exit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z} {
      font-size: 30px !important;
      right: 20px;
      top: 20px;
    }
  }

  ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_3__.down)("xs")} {
   // padding: 10px 0px;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_2___default()(Header).withConfig({
    componentId: "sc-6825e35f-4"
})``);


/***/ }),

/***/ 2673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ landing_SubsidiaryItems)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__(6170);
// EXTERNAL MODULE: external "@bjsdistribution/components"
var components_ = __webpack_require__(2699);
// EXTERNAL MODULE: ./components/util/useIsMobile.tsx
var useIsMobile = __webpack_require__(6658);
;// CONCATENATED MODULE: ./components/talk-to-us/landing/useSubsidiaryLogoDimensions.ts

function useSubsidiaryLogoDimensions() {
    const isMobile = (0,useIsMobile/* default */.Z)();
    const getDimensions = (input)=>{
        if (isMobile) {
            return getMobileDimensions(input);
        }
        return getDesktopDimensions(input);
    };
    return getDimensions;
}
const getMobileDimensions = (input)=>{
    switch(input){
        case "home delivery":
            return [
                80,
                -1
            ];
        case "constructit":
            return [
                85,
                -1
            ];
        case "haulage":
            return [
                76,
                -1
            ];
        case "extra":
            return [
                40,
                136
            ];
        default:
            throw new Error(`Unknown dimensions for subsidiary for ${input}`);
    }
};
const getDesktopDimensions = (input)=>{
    switch(input){
        case "home delivery":
            return [
                106,
                140
            ];
        case "constructit":
            return [
                47,
                -1
            ];
        case "haulage":
            return [
                96,
                -1
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
/* harmony default export */ const landing_useSubsidiaryLogoDimensions = (useSubsidiaryLogoDimensions);

// EXTERNAL MODULE: ./components/talk-to-us/form/shared/PhoneSection.tsx
var PhoneSection = __webpack_require__(5759);
// EXTERNAL MODULE: ./components/talk-to-us/form/shared/index.tsx + 1 modules
var shared = __webpack_require__(8021);
// EXTERNAL MODULE: ./components/careers/listing/item/high-level/common/index.tsx + 7 modules
var common = __webpack_require__(3210);
// EXTERNAL MODULE: ./components/talk-to-us/store/index.tsx
var store = __webpack_require__(2831);
// EXTERNAL MODULE: ./components/talk-to-us/form/shared/IconPair.tsx
var IconPair = __webpack_require__(9306);
// EXTERNAL MODULE: external "@fortawesome/pro-solid-svg-icons"
var pro_solid_svg_icons_ = __webpack_require__(1638);
// EXTERNAL MODULE: ./components/footer/map/ViewOnGoogleMaps.tsx + 1 modules
var ViewOnGoogleMaps = __webpack_require__(160);
;// CONCATENATED MODULE: ./components/talk-to-us/form/shared/AddressSection.tsx





function AddressSection({ className , subsidiary  }) {
    const address = getAddress(subsidiary);
    return(/*#__PURE__*/ jsx_runtime_.jsx(Container, {
        icon: pro_solid_svg_icons_.faMapMarker,
        className: className,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Content, {
            children: [
                address.map((detail)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: detail
                    })
                ),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GoogleMapLink, {
                    href: getGoogleAddressLink(subsidiary),
                    target: "_blank",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(ViewOnGoogleMaps/* GoogleMapsLogo */.B, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "View on Google Maps"
                        })
                    ]
                })
            ]
        })
    }));
}
const GoogleMapLink = external_styled_components_default().a.withConfig({
    componentId: "sc-933ea0ab-0"
})`
  text-decoration: underline;
  display: flex;
  align-items: center;
  span {
    margin-left: 8px;
  }
`;
const getGoogleAddressLink = (input)=>{
    switch(input){
        case "home delivery":
        case "extra":
            return "https://goo.gl/maps/wNk9KocP4Q3baBuC8";
        case "haulage":
        case "constructit":
            return "https://goo.gl/maps/AaeWVJd96Nq7iJTh7";
    }
};
const getAddress = (input)=>{
    switch(input){
        case "home delivery":
        case "extra":
            return [
                "BJS House, Unit 2, Bull Lane,",
                "Western Way,",
                "Wednesbury",
                "WS10 8RR", 
            ];
        case "haulage":
        case "constructit":
            return [
                "Boxworks, Unit 7",
                "Western Way",
                "Wednesbury",
                "WS10 7BW"
            ];
    }
};
const Container = external_styled_components_default()(IconPair/* default */.Z).withConfig({
    componentId: "sc-933ea0ab-1"
})`
  align-items: flex-start;
`;
const Content = external_styled_components_default().div.withConfig({
    componentId: "sc-933ea0ab-2"
})`
  display: flex;
  flex-direction: column;
  ${GoogleMapLink} {
    margin-top: 20px;
  }
`;
/* harmony default export */ const shared_AddressSection = (external_styled_components_default()(AddressSection).withConfig({
    componentId: "sc-933ea0ab-3"
})``);

;// CONCATENATED MODULE: ./components/talk-to-us/landing/SubsidiaryItem.tsx










function SubsidiaryItem({ className , subsidiary  }) {
    const setSelected = (0,store/* useSetSelectedSubsidiary */.Ri)();
    const getDimensions = landing_useSubsidiaryLogoDimensions();
    const select = ()=>{
        setSelected(subsidiary);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(SubsidiaryItem_Container, {
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(LogoContainer, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(common/* SubsidiaryLogo */.Zi, {
                    subsidiary: subsidiary,
                    dimensions: getDimensions(subsidiary)
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PhoneSection/* default */.ZP, {
                subsidiary: subsidiary
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_.Button, {
                wide: true,
                onClick: select,
                children: "Request quote"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(shared/* EmailSection */.Nd, {
                subsidiary: subsidiary
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(shared_AddressSection, {
                subsidiary: subsidiary
            })
        ]
    }));
}
const LogoContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-d3a6bf38-0"
})`
  min-height: 117px;

  ${(0,external_styled_breakpoints_.down)("sm")} {
    min-height: 97px;
  }
`;
const SubsidiaryItem_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-d3a6bf38-1"
})`
  padding: 97px 96px;
  display: flex;
  flex-direction: column;

  ${LogoContainer} {
    margin-left: auto;
    margin-right: auto;
  }

  ${PhoneSection/* PhoneNumber */.Bh} {
    font-size: 24px;
    font-weight: bold;
  }

  ${PhoneSection/* default */.ZP}, ${components_.Button.PlainButton}, ${LogoContainer}, ${shared/* EmailSection */.Nd} {
    margin-bottom: 30px;
  }

  ${shared/* IconPair */.Q_} {
    > :not(:last-child) {
      margin-right: 20px;
    }
  }

  ${components_.Button.PlainButton} {
    font-family: "Eveleth";
    text-transform: capitalize;

    ${(0,external_styled_breakpoints_.up)("lg")} {
      min-width: 224px;
      max-width: 224px;
    }
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    padding: 95px 30px;

    ${shared_AddressSection}, ${components_.Button.PlainButton} {
      font-size: 14px;
    }

    ${common/* SubsidiaryLogo */.Zi} {
      img {
        width: auto;
      }
    }
  }
`;
/* harmony default export */ const landing_SubsidiaryItem = (external_styled_components_default()(SubsidiaryItem).withConfig({
    componentId: "sc-d3a6bf38-2"
})``);

// EXTERNAL MODULE: ./components/subsidiary-showcase/Subsidiary.ts
var Subsidiary = __webpack_require__(4170);
;// CONCATENATED MODULE: ./components/talk-to-us/landing/SubsidiaryItems.tsx




function SubsidiaryItems(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(SubsidiaryItems_Container, {
        className: props.className,
        children: Subsidiary/* allSubsidiaries.map */.Y.map((subsidiary)=>/*#__PURE__*/ jsx_runtime_.jsx(landing_SubsidiaryItem, {
                subsidiary: subsidiary
            }, subsidiary)
        )
    }));
}
const SubsidiaryItems_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-25678875-0"
})`
  display: flex;
  overflow: scroll;
  background: white;

  ${landing_SubsidiaryItem} {
    border-right: 1px solid #f2eee8;
  }
`;
/* harmony default export */ const landing_SubsidiaryItems = (external_styled_components_default()(SubsidiaryItems).withConfig({
    componentId: "sc-25678875-1"
})``);


/***/ }),

/***/ 4180:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6170);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5733);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4419);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Content__WEBPACK_IMPORTED_MODULE_5__]);
_Content__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function TalkToUsLanding(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Content__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    }));
}
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div).withConfig({
    componentId: "sc-b3dd7eeb-0"
})`
  display: flex;
  flex-direction: column;

  width: 100%;


//  height: 100vh;
  box-shadow: 0px 3px 20px #0000001a;

  ${_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z} {
    border-radius: 12px 12px 0px 0px;
  }

  ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__.down)("sm")} {
    height: 100%;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TalkToUsLanding);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hZ": () => (/* binding */ compareTodayAndCollectionDates),
/* harmony export */   "oN": () => (/* binding */ compareCollectionAndDeliveryDates),
/* harmony export */   "tn": () => (/* binding */ compareTodayAndDeliveryDates),
/* harmony export */   "zn": () => (/* binding */ compareAllDates)
/* harmony export */ });
const compareTodayAndCollectionDates = (cd, td)=>{
    if (td > cd) return td;
    else return cd;
};
const compareCollectionAndDeliveryDates = (cd, dd)=>{
    if (cd - dd === 0) return "Collection and Delivery dates can not be same";
    else return "";
};
const compareTodayAndDeliveryDates = (td, dd)=>{
    if (td - dd === 0) return "Delivery date must not be current date";
};
const compareAllDates = (td, cd, dd)=>{
    if ((cd && dd) > td) {
        if (dd < cd) {
            return "Delivery cannot be done prior to collection";
        }
    }
};


/***/ })

};
;