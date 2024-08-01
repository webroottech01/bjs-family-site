(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 9560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ more_info_MoreInfoContent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@bjsdistribution/components"
var components_ = __webpack_require__(2699);
;// CONCATENATED MODULE: ./components/cookies-consent/more-info/CookieProviderName.tsx



function CookieProviderName({ name , className  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        className: className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Title, {
                children: [
                    "Cookies set by ",
                    name
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(YellowAccent, {})
        ]
    }));
}
const YellowAccent = external_styled_components_default().div.withConfig({
    componentId: "sc-600d7753-0"
})`
  height: 2px;
  width: 40px;
  background: ${components_.colours.yellow};
  border-radius: 66px;
`;
const Title = external_styled_components_default().span.withConfig({
    componentId: "sc-600d7753-1"
})`
  font-size: 16px;
  font-weight: bold;
`;
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-600d7753-2"
})`
  display: flex;
  flex-direction: column;

  ${Title} {
      margin-bottom: 10px;
  }
`;
/* harmony default export */ const more_info_CookieProviderName = (external_styled_components_default()(CookieProviderName).withConfig({
    componentId: "sc-600d7753-3"
})``);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "react-table"
const external_react_table_namespaceObject = require("react-table");
;// CONCATENATED MODULE: ./components/cookies-consent/more-info/CookieTable.tsx




const Styles = external_styled_components_default().div.withConfig({
    componentId: "sc-c4331bef-0"
})`
  table {
    border-spacing: 0;
    text-align: left;

    thead {
      background: transparent
        linear-gradient(93deg, #758588 0%, #677578 21%, #30373a 100%) 0% 0%
        no-repeat padding-box;
    }

    tbody {
      min-width: 100%;
    }

    th {
      color: white;
    }

    td {
      padding-top: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #d9d9d9;
    }

    th:nth-child(1) {
      padding-left: 40px;
    }

    td:nth-child(1) {
      font-style: italic;
      padding-left: 40px;
      padding-right: 10px;
    }

    td:nth-child(2) {
      padding-left: 30px;
      padding-bottom: 20px;
      max-width: 470px;
    }

    td:nth-child(2),
    td:nth-child(3) {
      padding-right: 30px;
    }

    th:last-child,
    td:last-child {
      padding-right: 45px;
    }

    td {
      background: white;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem 0px;

      :last-child {
        border-right: 0;
      }
    }

    th:nth-child(1) {
      padding-right: 10px;
    }
    th:nth-child(3) {
      padding-right: 30px;
    }

    td {
      padding: 20px 0px;
    }

    @media only screen and (max-width: 680px) {
      padding: 0;
      width: 100%;
      background: white;
      overflow: scroll;

      td {
        //   border: 1px solid red;
      }

      td,
      th,
      tr {
        padding: 0 !important;
        font-size: 13px;
      }

      th {
        padding: 10px 0px !important;
      }

      td {
        padding: 10px !important;
      }

      th:nth-child(1),
      td:nth-child(1) {
        max-width: 100px !important;
        min-width: 100px;
        overflow: scroll;
      }

      th:nth-child(2) {
        max-width: 300px !important;
      }
      td:nth-child(2) {
        display: block;
        max-height: 300px;
        max-width: 150px !important;
        min-width: 150px;
        overflow: scroll;

        @media only screen and (max-width: 310px) {
          max-width: 80px !important;
          min-width: 80px;
        }
      }
    }
  }
`;
function Table() {
    const columns = external_react_default().useMemo(()=>[
            {
                Header: "Name",
                accessor: "name"
            },
            {
                Header: "Description",
                accessor: "description",
                width: 50
            },
            {
                Header: "Duration",
                accessor: "duration"
            },
            {
                Header: "Datatype",
                accessor: "dataType"
            }, 
        ]
    , []);
    const data = external_react_default().useMemo(()=>[
            {
                name: "_ga",
                description: "Used to distinguish users.",
                duration: "2 years",
                dataType: "string"
            },
            {
                name: "_gid",
                description: "Used to distinguish users.",
                duration: "24 hours",
                dataType: "string"
            },
            {
                name: "_ga_<container-id>",
                description: "Used to persist session state.",
                duration: "2 years",
                dataType: "string"
            },
            {
                name: "_gac_gb_<container-id>",
                description: "Contains campaign related information. If you have linked your Google Analytics and Google Ads accounts, Google Ads website conversion tags will read this cookie unless you opt-out.",
                duration: "90 days",
                dataType: "string"
            }, 
        ]
    , []);
    // Use the state and functions returned from useTable to build your UI
    const { getTableProps , getTableBodyProps , headerGroups , rows , prepareRow  } = (0,external_react_table_namespaceObject.useTable)({
        columns,
        data
    });
    // Render the UI for your table
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
        ...getTableProps(),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                children: headerGroups.map((headerGroup)=>/*#__PURE__*/ jsx_runtime_.jsx("tr", {
                        ...headerGroup.getHeaderGroupProps(),
                        children: headerGroup.headers.map((column)=>/*#__PURE__*/ jsx_runtime_.jsx("th", {
                                ...column.getHeaderProps(),
                                children: column.render("Header")
                            })
                        )
                    })
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                ...getTableBodyProps(),
                children: rows.map((row, i)=>{
                    prepareRow(row);
                    return(/*#__PURE__*/ jsx_runtime_.jsx("tr", {
                        ...row.getRowProps(),
                        children: row.cells.map((cell)=>{
                            return(/*#__PURE__*/ jsx_runtime_.jsx("td", {
                                ...cell.getCellProps(),
                                children: cell.render("Cell")
                            }));
                        })
                    }));
                })
            })
        ]
    }));
}
function App() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Styles, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Table, {})
    }));
}
/* harmony default export */ const CookieTable = (App);

;// CONCATENATED MODULE: ./components/cookies-consent/more-info/MoreInfoContent.tsx




function MoreInfoContent(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(MoreInfoContent_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CookieProvider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(more_info_CookieProviderName, {
                    name: "Google Analytics"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CookieTable, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    }));
}
const Footer = external_styled_components_default().div.withConfig({
    componentId: "sc-c3bc1c4c-0"
})`
  min-height: 14px;
  min-width: 100%;
  border-radius: 0px 0px 66px 66px;
  background: white;
`;
const CookieProvider = external_styled_components_default().div.withConfig({
    componentId: "sc-c3bc1c4c-1"
})`
  padding: 40px 0px 30px 40px;
  background: white;
`;
const MoreInfoContent_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-c3bc1c4c-2"
})`
  display: flex;
  flex-direction: column;
`;
/* harmony default export */ const more_info_MoreInfoContent = (MoreInfoContent);


/***/ }),

/***/ 1567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3562);
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1638);
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4910);







function MoreInfoHeader(props) {
    const close = (0,_store__WEBPACK_IMPORTED_MODULE_6__/* .useClose */ .$)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TitleContainer, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CookieIcon, {
                        icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faCookieBite
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        children: "Our cookies"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CloseIcon, {
                icon: _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
                onClick: close
            })
        ]
    }));
}
const CookieIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon).withConfig({
    componentId: "sc-3761e688-0"
})`
  font-size: 22px !important;
  color: ${_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2__.colours.yellow};
`;
const TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-3761e688-1"
})`
  display: flex;
  align-items: center;
  ${CookieIcon} {
    margin-right: 12px;
  }
`;
const CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon).withConfig({
    componentId: "sc-3761e688-2"
})`
  font-size: 48px !important;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;

  :hover {
    color: ${_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_2__.colours.yellow};
  }
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
    componentId: "sc-3761e688-3"
})`
  font-size: 20px;
  font-family: "Eveleth";
  color: white;
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-3761e688-4"
})`
  background: transparent
    linear-gradient(95deg, #758588 0%, #677578 21%, #30373a 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000029;
  padding: 16px 40px;

  display: flex;
  align-items: center;
  ${CloseIcon} {
    margin-left: auto;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_1___default()(MoreInfoHeader).withConfig({
    componentId: "sc-3761e688-5"
})``);


/***/ }),

/***/ 9053:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MoreInfoHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1567);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7362);
/* harmony import */ var components_util_modal_modal_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7318);
/* harmony import */ var _MoreInfoContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9560);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_dom__WEBPACK_IMPORTED_MODULE_4__]);
react_dom__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function MoreInfo(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MoreInfoHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MoreInfoContent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
        ]
    }));
}
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-309b6567-0"
})`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 680px) {
    height: 100%;
    width: 100% !important;
  }
  ${_MoreInfoHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z} {
    border-radius: 20px 20px 0px 0px;
  }
`;
const MoreInfoModal = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-309b6567-1"
})`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: transparent linear-gradient(1deg, #1c2121 0%, #30373a 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000029;
  z-index: 5000;

  display: flex;
  align-items: center;
  justify-content: center;

  ${Container} {
    width: fit-content;
  }

  @media only screen and (max-width: 680px) {
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
  }
`;
function MoreInfoIndex() {
    const { 0: isBrowser , 1: setIsBrowser  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const hideBackground = (0,components_util_modal_modal_store__WEBPACK_IMPORTED_MODULE_5__/* .useSetShowingBackground */ .I9)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setIsBrowser(true);
    }, []);
    if (!isBrowser) {
        return null;
    }
    return(/*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_4__["default"].createPortal(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MoreInfoModal, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MoreInfo, {})
    }), document.body));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoreInfoIndex);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ useClose),
/* harmony export */   "y3": () => (/* binding */ useOpen),
/* harmony export */   "W8": () => (/* binding */ useIsOpen)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const isOpenAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "cookies_more_info_open",
    default: false
});
function useOpenState() {
    return useRecoilState(isOpenAtom);
}
function useClose() {
    const setOpen = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(isOpenAtom);
    const close = ()=>setOpen(false)
    ;
    return close;
}
function useOpen() {
    const setOpen = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(isOpenAtom);
    const open = ()=>setOpen(true)
    ;
    return open;
}
function useIsOpen() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(isOpenAtom);
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (useOpenState)));


/***/ }),

/***/ 3104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ notification)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@bjsdistribution/components"
var components_ = __webpack_require__(2699);
// EXTERNAL MODULE: ./components/cookies-consent/more-info/store.ts
var store = __webpack_require__(4910);
;// CONCATENATED MODULE: ./components/cookies-consent/notification/LearnMoreButton.tsx




function LearnMoreButton(props) {
    const open = (0,store/* useOpen */.y3)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(Container, {
        id: "notification-go-to-cookies-learn-more",
        className: props.className,
        onClick: open,
        children: "Learn more"
    }));
}
const Container = external_styled_components_default()(components_.Button).withConfig({
    componentId: "sc-6c5deb84-0"
})`
  font-size: 14px;
  background: transparent;
  color: #cccccc;
  border: 1px solid #8f8e8e;
  font-family: "Gotham SSm A", "Gotham SSm B";
  text-transform: unset;
  padding: 16px 20px;
  min-height: 47px;
  max-height: 47px;
`;
/* harmony default export */ const notification_LearnMoreButton = (external_styled_components_default()(LearnMoreButton).withConfig({
    componentId: "sc-6c5deb84-1"
})``);

// EXTERNAL MODULE: ./components/cookies-consent/useShowNotification.ts
var useShowNotification = __webpack_require__(2481);
;// CONCATENATED MODULE: ./components/cookies-consent/notification/AcceptButton.tsx




function AcceptButton(props) {
    const onClick = (0,useShowNotification/* useGivenConsent */.q)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(AcceptButton_Container, {
        id: "notification-go-to-cookies-accept",
        className: props.className,
        onClick: onClick,
        children: "Accept"
    }));
}
const AcceptButton_Container = external_styled_components_default()(components_.Button).withConfig({
    componentId: "sc-daf82712-0"
})`
  font-size: 14px;
  background: transparent linear-gradient(112deg, #b6dc69 0%, #57db7a 100%) 0%
    0% no-repeat padding-box;
  color: ${components_.colours.black};
  min-height: 47px;
  max-height: 47px;
  border: none;
  :hover {
    border: none;
  }
`;
/* harmony default export */ const notification_AcceptButton = (external_styled_components_default()(AcceptButton).withConfig({
    componentId: "sc-daf82712-1"
})``);

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
;// CONCATENATED MODULE: ./components/cookies-consent/notification/index.tsx





function CookiesConsent(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(notification_Container, {
        className: props.className,
        initial: false,
        exit: {
            height: 0
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                children: "We use cookies to make your experience the best it can be."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Buttons, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(notification_LearnMoreButton, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(notification_AcceptButton, {})
                ]
            })
        ]
    }));
}
const Buttons = external_styled_components_default().div.withConfig({
    componentId: "sc-56c4c423-0"
})`
  display: flex;
`;
const Text = external_styled_components_default().span.withConfig({
    componentId: "sc-56c4c423-1"
})`
  color: white;
  font-size: 16px;
  text-align: center;

  @media only screen and (min-width: 790px) {
    white-space: nowrap;
  }
`;
const notification_Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-56c4c423-2"
})`
  display: flex;
  align-items: center;

  ${Text} {
    margin-right: 15px;
  }
  ${notification_LearnMoreButton} {
    margin-right: 10px;
  }

  padding: 15px 40px;
  z-index: 500000;
  background: linear-gradient(96deg, #758588 0%, #677578 21%, #30373a 100%);
  box-shadow: 0px 3px 10px #00000029;
  border-radius: 20px 20px 0px 0px;

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  @media only screen and (max-width: 790px) {
    width: 100%;
    ${Text} {
      margin-right: 0px;
      margin-bottom: 10px;
    }

    flex-direction: column;
  }
`;
/* harmony default export */ const notification = (external_styled_components_default()(CookiesConsent).withConfig({
    componentId: "sc-56c4c423-3"
})``);


/***/ }),

/***/ 2481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ useGivenConsent),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _more_info_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4910);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const readValueAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.atom)({
    key: "cookies_read_value",
    default: null
});
function useShowNotification() {
    const isOpen = (0,_more_info_store__WEBPACK_IMPORTED_MODULE_0__/* .useIsOpen */ .W8)();
    const [readValue, setReadValue] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(readValueAtom);
    const { 0: hasRead , 1: setHasRead  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const value = localStorage.getItem("answered_cookies");
        if (value !== null) {
            const parsed = value === "true" ? true : false;
            setReadValue(parsed);
        }
        setHasRead(true);
    }, []);
    const shouldShow = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        if (isOpen) {
            return false;
        }
        if (!hasRead) {
            return false; //Do not show whilst reading
        }
        if (readValue !== null) {
            return false;
        }
        return true;
    }, [
        readValue,
        hasRead,
        isOpen
    ]);
    return shouldShow;
}
function useGivenConsent() {
    const setGiven = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useSetRecoilState)(readValueAtom);
    const give = ()=>{
        localStorage.setItem("answered_cookies", "true");
        setGiven(true);
    };
    return give;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useShowNotification);


/***/ }),

/***/ 9509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ footer)
});

// UNUSED EXPORTS: email, phoneNumber

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@bjsdistribution/components"
var components_ = __webpack_require__(2699);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/pro-light-svg-icons"
var pro_light_svg_icons_ = __webpack_require__(3562);
;// CONCATENATED MODULE: ./components/footer/mobile/item/SitemapItem.tsx






function SitemapItem({ className , title , onClick  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        className: className,
        layout: true,
        onClick: onClick,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Name, {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                icon: pro_light_svg_icons_.faPlus
            })
        ]
    }));
}
const Name = external_styled_components_default().span.withConfig({
    componentId: "sc-aec38e1-0"
})`
  font-size: 15px;
  font-weight: bold;
  color: ${components_.colours.black};
  text-transform: capitalize;
`;
const Icon = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-aec38e1-1"
})`
  font-size: 26px !important;
  color: rgba(58, 54, 48, 0.5);
  cursor: pointer;
`;
const Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-aec38e1-2"
})`
  color: #615e59;
  display: flex;
  padding: 24px 30px;
  align-items: center;
  justify-content: space-between; ;
`;
/* harmony default export */ const item_SitemapItem = (external_styled_components_default()(SitemapItem).withConfig({
    componentId: "sc-aec38e1-3"
})``);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/services/useServicesState.tsx
var useServicesState = __webpack_require__(3044);
// EXTERNAL MODULE: ./components/footer/useClickInformation.ts
var useClickInformation = __webpack_require__(5031);
;// CONCATENATED MODULE: ./components/footer/useClickSitemapEntry.tsx



function useClickSitemapEntry(title) {
    const router = (0,router_.useRouter)();
    const navigateToService = (0,useServicesState/* useNavigateTo */.jU)();
    const clickInformation = (0,useClickInformation/* default */.Z)();
    title = title.toLowerCase();
    const onClick = (entry)=>{
        entry = entry.toLowerCase();
        if (title === "about bjs") {
            const subpath = entry.replaceAll(" ", "-");
            router.push(`/about/${subpath}`);
        } else if (title === "our services") {
            const subsidiary = getSubsidiaryFromName(entry);
            navigateToService(subsidiary);
        } else if (title === "information") {
            clickInformation(entry);
        }
    };
    return onClick;
}
const getSubsidiaryFromName = (input)=>{
    switch(input){
        case "two-man home delivery":
            return "home delivery";
        case "bjs extra":
            return "extra";
        case "haulage":
            return "haulage";
        case "specialist construction haulage":
            return "constructit";
        default:
            return "home delivery";
    }
};
/* harmony default export */ const footer_useClickSitemapEntry = (useClickSitemapEntry);

;// CONCATENATED MODULE: ./components/footer/mobile/item/ExpandedSitemapItem.tsx




function ExpandedSitemapItem({ section , title , close , className  }) {
    const navigateTo = footer_useClickSitemapEntry(section);
    const onClick = ()=>{
        navigateTo(title);
        close();
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(ExpandedSitemapItem_Container, {
        className: className,
        layout: true,
        onClick: onClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            children: title
        })
    }));
}
const ExpandedSitemapItem_Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-2cdc1cf5-0"
})`
  padding: 10px 30px;
  text-transform: capitalize;
`;
/* harmony default export */ const item_ExpandedSitemapItem = (ExpandedSitemapItem);

;// CONCATENATED MODULE: ./components/footer/mobile/item/index.tsx






function SitemapItemRoot({ className , item  }) {
    const { 0: isOpen , 1: setOpen  } = (0,external_react_.useState)(false);
    const toggle = ()=>setOpen((old)=>!old
        )
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(item_Container, {
        className: className,
        layout: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(item_SitemapItem, {
                title: item.title,
                onClick: toggle
            }),
            isOpen && /*#__PURE__*/ jsx_runtime_.jsx(ExpandedContainer, {
                layout: true,
                children: item.entries.map((expanded)=>/*#__PURE__*/ jsx_runtime_.jsx(item_ExpandedSitemapItem, {
                        section: item.title,
                        title: expanded,
                        close: ()=>setOpen(false)
                    }, expanded)
                )
            })
        ]
    }));
}
const item_Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-325ae6cc-0"
})`
  display: flex;
  flex-direction: column;
`;
const ExpandedContainer = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-325ae6cc-1"
})`
  display: flex;
  flex-direction: column;
`;
/* harmony default export */ const item = (external_styled_components_default()(SitemapItemRoot).withConfig({
    componentId: "sc-325ae6cc-2"
})``);

// EXTERNAL MODULE: external "@fortawesome/pro-solid-svg-icons"
var pro_solid_svg_icons_ = __webpack_require__(1638);
;// CONCATENATED MODULE: ./components/footer/mobile/Phone.tsx




function Phone(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Phone_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Phone_Icon, {
                icon: pro_solid_svg_icons_.faPhone,
                rotation: 90
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                href: `tel:${props.number}`,
                children: props.number
            })
        ]
    }));
}
const Phone_Icon = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-efa25138-0"
})`
  font-size: 20px !important;
`;
const Text = external_styled_components_default().a.withConfig({
    componentId: "sc-efa25138-1"
})`
  font-weight: 500;
  font-size: 20px;
  text-decoration: underline;
`;
const Phone_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-efa25138-2"
})`
  display: flex;
  align-items: center;

  ${Phone_Icon} {
    margin-right: 12px;
  }
  
`;
/* harmony default export */ const mobile_Phone = (external_styled_components_default()(Phone).withConfig({
    componentId: "sc-efa25138-3"
})``);

;// CONCATENATED MODULE: external "@fortawesome/free-brands-svg-icons"
const free_brands_svg_icons_namespaceObject = require("@fortawesome/free-brands-svg-icons");
;// CONCATENATED MODULE: ./public/SVGs/TikTokIcon.tsx


const TikTokIcon = ({ color , width , height  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512",
        color: color,
        width: width || "100%",
        height: height || "100%",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            className: "one",
            d: "M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"
        })
    }));
};
/* harmony default export */ const SVGs_TikTokIcon = (TikTokIcon);

;// CONCATENATED MODULE: ./components/footer/SocialIcons.tsx







const getUrl = (input)=>{
    switch(input){
        case "instagram":
            return process.env[`NEXT_PUBLIC_INSTAGRAM_URL`];
        case "linkedin":
            return process.env[`NEXT_PUBLIC_LINKEDIN_URL`];
        case "trustpilot":
            return process.env[`NEXT_PUBLIC_TRUSTPILOT_URL`];
        case "facebook":
            return process.env[`NEXT_PUBLIC_FACEBOOK_URL`];
        case "tiktok":
            return process.env[`NEXT_PUBLIC_TIKTOK_URL`];
        case "instagram-construct-it":
            return process.env[`NEXT_PUBLIC_CONTRUCTIT_INSTAGRAM_URL`];
        case "linkedin-construct-it":
            return process.env[`NEXT_PUBLIC_CONTRUCTIT_LINKEDIN_URL`];
    }
};
function SocialIcons(props) {
    const AdditionalIcons = ()=>{
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(SocialIcons_Container, {
            className: props.className,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(TrustpilotIcon, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons_Icon, {
                    icon: free_brands_svg_icons_namespaceObject.faFacebook,
                    link: getUrl("facebook")
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons_Icon, {
                    icon: free_brands_svg_icons_namespaceObject.faInstagram,
                    link: getUrl("instagram-construct-it")
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons_Icon, {
                    icon: free_brands_svg_icons_namespaceObject.faLinkedinIn,
                    link: getUrl("linkedin-construct-it")
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(AbstractIcon, {
                    link: getUrl("tiktok"),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SVGs_TikTokIcon, {
                        width: "32.64",
                        height: "31.043",
                        color: "white"
                    })
                })
            ]
        }));
    };
    const router = (0,router_.useRouter)();
    const path = router.asPath;
    if (path === "/services/construct-it") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(AdditionalIcons, {}));
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(SocialIcons_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TrustpilotIcon, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons_Icon, {
                icon: free_brands_svg_icons_namespaceObject.faInstagram,
                link: getUrl("instagram")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons_Icon, {
                icon: free_brands_svg_icons_namespaceObject.faLinkedinIn,
                link: getUrl("linkedin")
            })
        ]
    }));
}
const SocialIcons_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-8d936e25-0"
})`
  display: flex;
  justify-content: space-between;
  z-index: 3;

  > :not(:last-child) {
    margin-right: 10px;
  }
`;
function SocialIcons_Icon({ link , icon  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(AbstractIcon, {
        link: link,
        children: /*#__PURE__*/ jsx_runtime_.jsx(IconElement, {
            icon: icon
        })
    }));
}
function TrustpilotIcon() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(AbstractIcon, {
        link: getUrl("trustpilot"),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32.64",
            height: "31.043",
            viewBox: "0 0 32.64 31.043",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M32.64,11.859l-12.468,0L16.32,0,12.469,11.856,0,11.854l10.088,7.331L6.235,31.043l10.086-7.328L26.4,31.043,22.553,19.187,32.64,11.859Z",
                    className: "one"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M142.777,162.184,141.9,159.5l-6.232,4.528Z",
                    transform: "translate(-119.351 -140.309)",
                    className: "two"
                })
            ]
        })
    }));
}
function AbstractIcon({ link , children , className  }) {
    /*
        {!('src' in icon) && <IconElement icon={icon} />}*/ return(/*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: link,
        target: "_blank",
        children: /*#__PURE__*/ jsx_runtime_.jsx(IconContainer, {
            className: className,
            children: children
        })
    }));
}
const IconElement = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-8d936e25-1"
})`
  font-size: 26px !important;
  color: white;
`;
const IconContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-8d936e25-2"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  background:${components_.colours.black};
  border-radius: 50%;
  cursor: pointer;

  svg {
    .one {
      fill: #fff;
    }
    .two {
      fill: #ccc;
    }

    :hover {
      .one,
      .two {
        fill: ${components_.colours.yellow} !important;
      }
    }
  }

  :hover {
    ${IconElement}, svg {
      color: ${components_.colours.yellow};
    }
  }
`;

/* harmony default export */ const footer_SocialIcons = (external_styled_components_default()(SocialIcons).withConfig({
    componentId: "sc-8d936e25-3"
})``);

// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__(6170);
;// CONCATENATED MODULE: ./public/images/footer/desktop_background.jpg
/* harmony default export */ const desktop_background = ({"src":"/_next/static/media/desktop_background.d62ecb1f.jpg","height":360,"width":433,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAHAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAUWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AsNwAH//Z"});
;// CONCATENATED MODULE: ./public/images/footer/mobile_background.jpg
/* harmony default export */ const mobile_background = ({"src":"/_next/static/media/mobile_background.8ee494c4.jpg","height":360,"width":460,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAEUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AsWUAH//Z"});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/images/footer/what3words_icon.png
/* harmony default export */ const what3words_icon = ({"src":"/_next/static/media/what3words_icon.d200b37e.png","height":14,"width":18,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAALVBMVEXbExjhHSTgHSTgHSXgHSXhHiThGyPhHCPgHSTgHSThHSXgHSThHSThHSTgHSMGVHHYAAAAD3RSTlMBpL2QyNEXM0dY4iWBUDmMndZ2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAALklEQVQImQXBBwEAMAzDMKd3nz/cSfAM3R3gzioX5J5GDm5iowN0aqEDUVNY8wEYNgDeHo9GQwAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/footer/map/config.ts
const what3words = "retire.grow.empire";


;// CONCATENATED MODULE: ./components/footer/map/What3Words.tsx






const url = `https://what3words.com/${what3words}`;
function What3Words(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(What3Words_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: what3words_icon,
                height: 14,
                width: 18,
                layout: "fixed"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(What3Words_Text, {
                href: url,
                target: "_blank",
                children: what3words
            })
        ]
    }));
}
const What3Words_Text = external_styled_components_default().a.withConfig({
    componentId: "sc-7c8604d5-0"
})`
  font-size: 16px;
  text-decoration: underline;
  color: ${components_.colours.black};
  z-index: 3;
`;
const What3Words_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-7c8604d5-1"
})`
  display: flex;
  align-items: center;
  gap: 10px;
`;
/* harmony default export */ const map_What3Words = (external_styled_components_default()(What3Words).withConfig({
    componentId: "sc-7c8604d5-2"
})``);

// EXTERNAL MODULE: ./components/footer/map/ViewOnGoogleMaps.tsx + 1 modules
var ViewOnGoogleMaps = __webpack_require__(160);
;// CONCATENATED MODULE: ./components/footer/map/HeadOfficePointer.tsx


function HeadOfficePointer(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(HeadOfficePointer_Container, {
        className: props.className,
        children: /*#__PURE__*/ jsx_runtime_.jsx(HeadOfficePointer_Text, {
            children: "BJS head office"
        })
    }));
}
const HeadOfficePointer_Text = external_styled_components_default().span.withConfig({
    componentId: "sc-5b542917-0"
})`
  font-family: "Eveleth";
  font-size: 12px;
  color: #5f5d5b;
`;
const HeadOfficePointer_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-5b542917-1"
})`
  background: #fafafa 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 30px #00000029;
  border-radius: 12px;

  padding: 19px 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  z-index: 2;

  ::before {
    z-index: 1;
    position: absolute;
    bottom: -14px;
    content: "";
    width: 0;
    height: 0;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-top: 16px solid white;
  }

  ::after {
    z-index: 1;
    position: absolute;
    bottom: -20px;
    border-radius: 50%;
   // background: red;
    height: 8px;
    width: 8px;
    left: auto;
    right: auto;
    content: "";
  }
`;
/* harmony default export */ const map_HeadOfficePointer = (external_styled_components_default()(HeadOfficePointer).withConfig({
    componentId: "sc-5b542917-2"
})``);

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
;// CONCATENATED MODULE: ./components/footer/map/PointerBounce.tsx




const Lottie = (0,dynamic["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9094, 23))
, {
    loadableGenerated: {
        modules: [
            "..\\components\\footer\\map\\PointerBounce.tsx -> " + "react-lottie-player"
        ]
    }
});
function PointerBounce(props) {
    const { 0: animationData , 1: setAnimationData  } = (0,external_react_.useState)();
    const fetchAndSet = async ()=>{
        const result = await fetch("https://assets1.lottiefiles.com/private_files/lf30_odksdxsq.json");
        const json = await result.json();
        setAnimationData(json);
    };
    (0,external_react_.useEffect)(()=>{
        fetchAndSet();
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx(Lottie, {
        loop: true,
        className: props.className,
        animationData: animationData,
        play: true,
        style: {
            height: 60,
            position: "absolute"
        }
    }));
}
/* harmony default export */ const map_PointerBounce = (external_styled_components_default()(PointerBounce).withConfig({
    componentId: "sc-548c04df-0"
})``);

;// CONCATENATED MODULE: ./components/footer/map/Content.tsx







function Content({ className  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Content_Container, {
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(map_HeadOfficePointer, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(map_PointerBounce, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(map_What3Words, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(ViewOnGoogleMaps/* default */.Z, {})
        ]
    }));
}
const Content_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-781d3e93-0"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  ${map_What3Words}, ${ViewOnGoogleMaps/* default */.Z}, ${map_HeadOfficePointer} {
    z-index: 5;
  }

  ${map_PointerBounce} {
    z-index: 6;
    position: absolute;
    top: 115px;

    ${(0,external_styled_breakpoints_.down)("sm")} {
      top: 140px;
    }
  }
  ${map_HeadOfficePointer} {
    margin-top: 95px;

    ${(0,external_styled_breakpoints_.down)("sm")} {
      margin-top: 120px;
    }
  }

  ${map_What3Words} {
    margin-top: 30px;

    ${(0,external_styled_breakpoints_.down)("sm")} {
      margin-top: 60px;
    }
  }

  ${ViewOnGoogleMaps/* default */.Z} {
    margin-top: auto;
    margin-bottom: 40px;
  }
`;
/* harmony default export */ const map_Content = (external_styled_components_default()(Content).withConfig({
    componentId: "sc-781d3e93-1"
})``);

// EXTERNAL MODULE: ./components/util/useIsMobile.tsx
var useIsMobile = __webpack_require__(6658);
;// CONCATENATED MODULE: ./components/footer/map/index.tsx








function Map(props) {
    const isMobile = (0,useIsMobile/* default */.Z)();
    const image = (0,external_react_.useMemo)(()=>{
        if (isMobile) {
            return mobile_background;
        }
        return desktop_background;
    }, [
        isMobile
    ]);
    if (isMobile) {
        return null;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(map_Container, {
        className: props.className,
        children: /*#__PURE__*/ jsx_runtime_.jsx(map_Content, {})
    }));
}
const map_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-53cb3bea-0"
})`
  position: relative;
  display: flex;

  ${(0,external_styled_breakpoints_.up)("md")} {
    justify-content: flex-end;
    padding-right: 50px;
    width: 433px;
    height: 300px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    justify-content: center;
    height: 360px;
  }
`;
/* harmony default export */ const map = (external_styled_components_default()(Map).withConfig({
    componentId: "sc-53cb3bea-1"
})``);

;// CONCATENATED MODULE: ./components/footer/mobile/index.tsx








const email = "hello@bjsfamily.com";
function MobileFooter(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(mobile_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SitemapContainer, {
                children: props.sitemap.map((entry)=>/*#__PURE__*/ jsx_runtime_.jsx(item, {
                        item: entry
                    }, entry.title)
                )
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MapContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                        children: "Sales:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(mobile_Phone, {
                        number: props.contact.saleNumber
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                        children: "Customer Service:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(mobile_Phone, {
                        number: props.contact.phoneNumber
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Email, {
                        href: `mailto:${email}`,
                        children: email
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(map, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer_SocialIcons, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(CopyrightNotice, {
                children: "©BJS Distribution Limited, 2022 - All rights reserved."
            })
        ]
    }));
}
const Email = external_styled_components_default().a.withConfig({
    componentId: "sc-35e5b354-0"
})`
  font-size: 16px;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
`;
const Label = external_styled_components_default().div.withConfig({
    componentId: "sc-35e5b354-1"
})`
  text-align: center;
  font-weight: 500;
  font-size: 22px;
`;
const MapContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-35e5b354-2"
})`
  position: relative;
  // height: 125px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 10px;

  ${map}, ${mobile_Phone}, ${Email} {
    // position: absolute;
    width: 100%;
  }

  ${mobile_Phone} {
    z-index: 6;
    margin-bottom: 0px !important;
    margin-top: 10px;
  }
  ${mobile_Phone} {
    z-index: 6;
    margin-top: 0px;
    margin-bottom: 0px !important;
  }

  ${Email} {
    z-index: 6;
    margin-bottom: 20px;
  }
`;
const SitemapContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-35e5b354-3"
})`
  display: flex;
  flex-direction: column;
  background: #fafafa;

  ${item}:first-child {
    border-top: 1px solid rgb(0, 0, 0, 0.1);
  }

  ${item} {
    border-bottom: 1px solid rgb(0, 0, 0, 0.1);
  }
`;
const CopyrightNotice = external_styled_components_default().span.withConfig({
    componentId: "sc-35e5b354-4"
})`
  color: rgba(58, 54, 48, 0.5);
  text-align: center;

  font-size: 12px;
`;
const mobile_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-35e5b354-5"
})`
  display: flex;
  flex-direction: column;

  ${mobile_Phone} {
    margin-bottom: 20px;
    justify-content: center;
  }

  ${footer_SocialIcons} {
    justify-content: center;
    margin-bottom: 40px;
  }

  ${IconContainer} {
    background: black;
  }

  ${(0,external_styled_breakpoints_.down)("xs")} {
    padding-bottom: 50px;
  }
`;
/* harmony default export */ const mobile = (MobileFooter);

;// CONCATENATED MODULE: ./components/footer/desktop/Contact.tsx





const addressData = (/* unused pure expression or super */ null && ([
    "BJS house, unit 2, bull lane",
    "western way",
    "wednesbury",
    "WS10 8RR", 
]));
function Contact(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Contact_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PhoneContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Contact_Label, {
                        children: "Sales:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Contact_Icon, {
                        icon: pro_solid_svg_icons_.faPhone,
                        rotation: 90
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PhoneNumber, {
                        href: `tel:${props.saleNumber}`,
                        children: props.saleNumber
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PhoneContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Contact_Label, {
                        children: "Customer Service:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Contact_Icon, {
                        icon: pro_solid_svg_icons_.faPhone,
                        rotation: 90
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PhoneNumber, {
                        href: `tel:${props.phoneNumber}`,
                        children: props.phoneNumber
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Contact_Email, {
                href: `mailto:${props.email}`,
                children: props.email
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(map, {})
        ]
    }));
}
function OldAddress() {
    return(/*#__PURE__*/ _jsx(AddressContainer, {
        children: addressData.map((address)=>/*#__PURE__*/ _jsx(Info, {
                children: address
            }, address)
        )
    }));
}
const Contact_Icon = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-12987091-0"
})`
  font-size: 18px !important;
`;
const Contact_Label = external_styled_components_default().div.withConfig({
    componentId: "sc-12987091-1"
})`
  font-size: 20px;
`;
const AddressContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-12987091-2"
})`
  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 15px;
  }
  text-transform: capitalize;
`;
const Info = external_styled_components_default().span.withConfig({
    componentId: "sc-12987091-3"
})``;
const PhoneContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-12987091-4"
})`
  display: flex;
  z-index: 3;
  align-items: center;

  > :not(:last-child) {
    margin-right: 12px;
  }
`;
const PhoneNumber = external_styled_components_default().a.withConfig({
    componentId: "sc-12987091-5"
})`
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  text-decoration: none;
  line-height: 0.7;
`;
const Contact_Email = external_styled_components_default().a.withConfig({
    componentId: "sc-12987091-6"
})`
  text-decoration: underline;
  font-size: 18px;
  z-index: 3;
  align-self: flex-end;
  text-align: right;
`;
const Contact_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-12987091-7"
})`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;

  ${PhoneContainer} {
    margin-bottom: 15px;
  }

  ${Contact_Email} {
    margin-bottom: 8px;
  }

  position: relative;
  ${map} {
    position: absolute;
    right: -50px;
    top: 30px;
  }
`;
/* harmony default export */ const desktop_Contact = (external_styled_components_default()(Contact).withConfig({
    componentId: "sc-12987091-8"
})``);

// EXTERNAL MODULE: ./components/util/useIsTabletOrSmaller.tsx
var useIsTabletOrSmaller = __webpack_require__(3176);
;// CONCATENATED MODULE: ./components/footer/desktop/Sitemap.tsx







function Sitemap(props) {
    const entries = props.sitemap;
    const isTabletOrSmaller = (0,useIsTabletOrSmaller/* default */.ZP)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(Sitemap_Container, {
        children: entries.map((entry, index)=>{
            const row = /*#__PURE__*/ jsx_runtime_.jsx(Row, {
                title: entry.title,
                entries: entry.entries
            }, entry.title);
            if (isTabletOrSmaller) {
                const lastIndex = index === entries.length - 1;
                const firstIndex = index === 0;
                if (firstIndex) {
                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(FirstTabletRow, {
                        children: [
                            row,
                            /*#__PURE__*/ jsx_runtime_.jsx(footer_SocialIcons, {})
                        ]
                    }));
                } else if (lastIndex) {
                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(FinalTabletRow, {
                        children: [
                            row,
                            /*#__PURE__*/ jsx_runtime_.jsx(desktop_Contact, {
                                ...props.contact
                            })
                        ]
                    }));
                }
            }
            return row;
        })
    }));
}
const Sitemap_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-b577b787-0"
})`
  display: flex;
  z-index: 3;
  > :not(:last-child) {
    margin-right: 60px;
  }
`;
function Row(props) {
    const onClick = footer_useClickSitemapEntry(props.title);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(RowContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                children: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(EntryContainer, {
                children: props.entries.map((entry)=>/*#__PURE__*/ jsx_runtime_.jsx(Entry, {
                        onClick: ()=>onClick(entry)
                        ,
                        children: entry
                    }, entry)
                )
            })
        ]
    }));
}
const FirstTabletRow = external_styled_components_default().div.withConfig({
    componentId: "sc-b577b787-1"
})`
  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 90px;
  }

  ${footer_SocialIcons} {
    position: relative !important;
  }
`;
const FinalTabletRow = external_styled_components_default().div.withConfig({
    componentId: "sc-b577b787-2"
})`
  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 36px;
  }

  ${desktop_Contact} {
    align-items: flex-start;
    text-align: left;
  }
`;
const RowContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-b577b787-3"
})`
  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 23px;
  }
  font-size: 14px;
`;
const Title = external_styled_components_default().span.withConfig({
    componentId: "sc-b577b787-4"
})`
  font-weight: bold;
  text-transform: uppercase;
  color: #6A6763;
`;
const EntryContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-b577b787-5"
})`
  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 15px;
  }
  white-space: nowrap;
`;
const Entry = external_styled_components_default().span.withConfig({
    componentId: "sc-b577b787-6"
})`
  text-transform: capitalize;
  white-space: normal;
  cursor: pointer;
  color: #6A6763;

  :hover {
    color: ${components_.colours.yellow};
  }

`;
/* harmony default export */ const desktop_Sitemap = (Sitemap);

;// CONCATENATED MODULE: ./public/images/footer/footer-full-width.jpg
/* harmony default export */ const footer_full_width = ({"src":"/_next/static/media/footer-full-width.c86cf322.jpg","height":720,"width":3840,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAACAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAVEAEBAAAAAAAAAAAAAAAAAAAAAf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCw0AH/2Q=="});
;// CONCATENATED MODULE: ./components/footer/desktop/index.tsx









function Footer(props) {
    const isTablet = (0,useIsTabletOrSmaller/* default */.ZP)();
    const isDesktop = !isTablet;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Root, {
        className: props.className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(desktop_Container, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(desktop_Sitemap, {
                        ...props
                    }),
                    isDesktop && /*#__PURE__*/ jsx_runtime_.jsx(footer_SocialIcons, {}),
                    isDesktop && /*#__PURE__*/ jsx_runtime_.jsx(desktop_Contact, {
                        ...props.contact
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(FooterMapContainer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(FooterImageContainer, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: footer_full_width,
                                layout: "fill"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(desktop_CopyrightNotice, {
                children: "©BJS Distribution Limited, 2022 - All rights reserved."
            })
        ]
    }));
}
const FooterImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-322f3703-0"
})`
  position: relative;
  width: 1920px; //Base image, means the pointer will remain at the same location
  height: 100%;
`;
const FooterMapContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-322f3703-1"
})`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
`;
const desktop_CopyrightNotice = external_styled_components_default().div.withConfig({
    componentId: "sc-322f3703-2"
})`
  font-size: 11px;
  color: #9c9a97;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
`;
const desktop_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-322f3703-3"
})`
  display: flex;
  background: #fafafa;
  justify-content: space-between;
  padding: 60px;
  position: relative;
  overflow: hidden;

  ${(0,external_styled_breakpoints_.only)("md")} {
    padding: 60px 40px 117px 40px;
    margin-bottom: 20px;
  }



  @media only screen and (max-width: 1780px) {
    overflow: visible;
  }

  ${footer_SocialIcons} {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);

    @media only screen and (max-width: 1780px) {
      // position: static;
    }

    @media only screen and (max-width: 1780px) {
      position: absolute;
      left: 150px;
      bottom: -20px;
    }

    @media (orientation: landscape) {
      @media only screen and (max-width: 1024px) {
        bottom: 50px;
        left: 370px;
      }
    }

    ${(0,external_styled_breakpoints_.only)("md")} {
      left: 0;
      transform: none;
    }
  }
`;
const Root = external_styled_components_default().div.withConfig({
    componentId: "sc-322f3703-4"
})`
  display: flex;
  flex-direction: column;

  ${desktop_CopyrightNotice} {
    // margin-top: 60px;
  }
`;
/* harmony default export */ const desktop = (Footer);

;// CONCATENATED MODULE: ./components/footer/index.tsx




const sitemap = [
    {
        title: "about BJS",
        entries: [
            "our story",
            "our values",
            "what makes BJS different",
            "our technology",
            "charity and community",
            "training academy", 
        ]
    },
    {
        title: "our services",
        entries: [
            "two-man home delivery",
            "BJS extra",
            "haulage",
            "specialist construction haulage"
        ]
    },
    {
        title: "information",
        entries: [
            "careers",
            "privacy policy",
            "CCTV policy", 
        ]
    }, 
];
const footer_email = "hello@bjsfamily.com";
if (!footer_email) {
    throw new Error(`Cannot find contact email`);
}
const phoneNumber = "01922 645 650";
if (!phoneNumber) {
    throw new Error(`Cannot find phone number`);
}
const saleNumber = "01922 324 090";
if (!saleNumber) {
    throw new Error(`Cannot find sale number`);
}
const contact = {
    phoneNumber,
    email: footer_email,
    saleNumber
};
const props = {
    sitemap,
    contact
};
function footer_Footer() {
    const isMobile = (0,useIsMobile/* default */.Z)();
    if (isMobile) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(mobile, {
            ...props
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(desktop, {
        ...props
    }));
}

/* harmony default export */ const footer = (footer_Footer);


/***/ }),

/***/ 9707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ navigation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@bjsdistribution/components"
var components_ = __webpack_require__(2699);
// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__(6170);
;// CONCATENATED MODULE: ./components/util/BjsFamilyLogoDesktop.tsx



function BjsFamilyLogo(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        className: props.className,
        onClick: props.onClick,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Yellow, {
                children: "BJS"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                children: "Family"
            })
        ]
    }));
}
const Text = external_styled_components_default().span.withConfig({
    componentId: "sc-61a4ab88-0"
})`
  text-transform: uppercase;
  color: #24292C;
  font-family: "Eveleth";
`;
const Yellow = external_styled_components_default()(Text).withConfig({
    componentId: "sc-61a4ab88-1"
})`
  color: #FEBA30;
`;
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-61a4ab88-2"
})`
  display: flex;

  > * {
    margin-right: 8px;
  }

  font-size: 26px;

  ${(0,external_styled_breakpoints_.down)("xs")} {
    font-size: 18px;
  }
`;
/* harmony default export */ const BjsFamilyLogoDesktop = (external_styled_components_default()(BjsFamilyLogo).withConfig({
    componentId: "sc-61a4ab88-3"
})``);

// EXTERNAL MODULE: ./components/talk-to-us/button/index.tsx
var talk_to_us_button = __webpack_require__(3082);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/pro-solid-svg-icons"
var pro_solid_svg_icons_ = __webpack_require__(1638);
;// CONCATENATED MODULE: ./components/navigation/mobile/entry/MobileNavigationEntry.tsx





const getIcon = (props)=>{
    const title = props.entry.title.toLowerCase();
    if (title === "news" || title === "careers") {
        return pro_solid_svg_icons_.faChevronRight;
    }
    if (props.isOpened) {
        return pro_solid_svg_icons_.faChevronUp;
    }
    return pro_solid_svg_icons_.faChevronDown;
};
function MobileNavigationEntry(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(MobileNavigationEntry_Container, {
        className: props.className,
        layout: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Name, {
                children: props.entry.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                icon: getIcon(props)
            })
        ]
    }));
}
const Name = external_styled_components_default().span.withConfig({
    componentId: "sc-dfa77b7b-0"
})`
  font-family: "Eveleth";
  font-size: 18px;
`;
const Icon = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-dfa77b7b-1"
})`
  height: 22px;
`;
const MobileNavigationEntry_Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-dfa77b7b-2"
})`
  display: flex;
  padding: 30px;
  align-items: center;
  justify-content: space-between;
`;
/* harmony default export */ const entry_MobileNavigationEntry = (external_styled_components_default()(MobileNavigationEntry).withConfig({
    componentId: "sc-dfa77b7b-3"
})``);

;// CONCATENATED MODULE: ./components/navigation/mobile/expanded/index.tsx



function ExpandedMenu(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(expanded_Container, {
        className: props.className,
        layout: true,
        initial: {
            height: 0
        },
        animate: {
            height: "auto"
        },
        exit: {
            height: 0
        },
        children: props.children
    }));
}
const expanded_Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-47a4a239-0"
})`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  margin: 0px 30px;

  > :not(:last-child) {
    margin-bottom: 25px;
  }
  border-top: 1px solid rgba(58, 54, 48, 0.1);
`;
/* harmony default export */ const expanded = (external_styled_components_default()(ExpandedMenu).withConfig({
    componentId: "sc-47a4a239-1"
})``);

// EXTERNAL MODULE: external "@fortawesome/pro-regular-svg-icons"
var pro_regular_svg_icons_ = __webpack_require__(5403);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/navigation/mobile/expanded/about-us/AboutUsItem.tsx






function AboutUsItem(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(AboutUsItem_Container, {
        className: props.className,
        onClick: props.onClick,
        layout: "position",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ImageContainer, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(CircleImage, {
                    className: props.className,
                    width: 60,
                    height: 60,
                    layout: "fixed",
                    src: props.image.src
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                children: props.name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(AboutUsItem_Icon, {
                icon: pro_regular_svg_icons_.faChevronRight
            })
        ]
    }));
}
const AboutUsItem_Icon = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-19fdd4f8-0"
})`
  font-size: 18px;
  margin-left: auto;
`;
const Title = external_styled_components_default().span.withConfig({
    componentId: "sc-19fdd4f8-1"
})`
  color: #57534e;
  text-transform: capitalize;
`;
const ImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-19fdd4f8-2"
})``;
const CircleImage = external_styled_components_default()(next_image["default"]).withConfig({
    componentId: "sc-19fdd4f8-3"
})`
  border-radius: 50%;
`;
const Circle = external_styled_components_default().div.withConfig({
    componentId: "sc-19fdd4f8-4"
})`
  min-height: 60px;
  min-width: 60px;
  border-radius: 50%;
  border: 1px solid black;
`;
const AboutUsItem_Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-19fdd4f8-5"
})`
  display: flex;
  align-items: center;

  ${ImageContainer} {
    margin-right: 20px;
  }
`;
/* harmony default export */ const about_us_AboutUsItem = (AboutUsItem);

// EXTERNAL MODULE: ./components/about/page/AboutPage.ts
var AboutPage = __webpack_require__(9900);
// EXTERNAL MODULE: ./components/navigation/mobile/mobile-navigation-state.ts
var mobile_navigation_state = __webpack_require__(2429);
;// CONCATENATED MODULE: ./public/images/header/mobile/about/our-story.jpg
/* harmony default export */ const our_story = ({"src":"/_next/static/media/our-story.b3f9df11.jpg","height":103,"width":103,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAcEAACAgIDAAAAAAAAAAAAAAAAAgESBAURIaH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAS/9oADAMBAAIRAxEAPwCdg6Rl1UrXGl14rd/OwAEof//Z"});
;// CONCATENATED MODULE: ./public/images/header/mobile/about/our-technology.jpg
/* harmony default export */ const our_technology = ({"src":"/_next/static/media/our-technology.9c35551b.jpg","height":103,"width":103,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAACAgIDAAAAAAAAAAAAAAABAgADESEFEkH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Apdl11fI5R9G4IyspOUPQDB82SYiIH//Z"});
;// CONCATENATED MODULE: ./public/images/header/mobile/about/training-academy.jpg
/* harmony default export */ const training_academy = ({"src":"/_next/static/media/training-academy.5e7d1eb2.jpg","height":102,"width":103,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAfEAABAwMFAAAAAAAAAAAAAAABAAIDBQYSBBEVMWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/8QAGREAAgMBAAAAAAAAAAAAAAAAAAECEkFR/9oADAMBAAIRAxEAPwCzctx1TSXhTY6fM7jsmNndGMmkEnfLzpERGtwQoLT/2Q=="});
;// CONCATENATED MODULE: ./public/images/header/mobile/about/our-values.jpg
/* harmony default export */ const our_values = ({"src":"/_next/static/media/our-values.f88e507c.jpg","height":103,"width":103,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAABAgQHAAAAAAAAAAAAAAABAAIDBAURBhITFCExQf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCfwJ+qyuGIVPY8beZc52llBJuRz1fxERB//9k="});
;// CONCATENATED MODULE: ./public/images/header/mobile/about/charity-and-community.jpg
/* harmony default export */ const charity_and_community = ({"src":"/_next/static/media/charity-and-community.ada566c9.jpg","height":103,"width":103,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAeEAACAQQDAQAAAAAAAAAAAAABAgMABBESBRUxQf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAISEf/aAAwDAQACEQMRAD8AmveGuYR2HFW6mDXSYrqyzBcl2kGfcqPfppSlGWeEXBpJ/9k="});
;// CONCATENATED MODULE: ./public/images/header/mobile/about/what-makes-us-different.jpg
/* harmony default export */ const what_makes_us_different = ({"src":"/_next/static/media/what-makes-us-different.c37653eb.jpg","height":103,"width":103,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAfEAABAwMFAAAAAAAAAAAAAAACAAEDBAUhBhIUQXH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABYRAQEBAAAAAAAAAAAAAAAAAAERAP/aAAwDAQACEQMRAD8ApXPU1eF040AiMQV8ce4mwTdD4+XREUkCTO3f/9k="});
;// CONCATENATED MODULE: ./components/navigation/mobile/expanded/about-us/index.tsx












function AboutUsExpanded(props) {
    const navigateTo = (0,AboutPage/* useNavigateTo */.j)();
    const setOpen = (0,mobile_navigation_state/* useSetOpen */.f6)();
    const onClick = (page)=>{
        navigateTo(page);
        setOpen(false);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(expanded, {
        className: props.className,
        children: AboutPage/* allPages.map */.v.map((entry)=>{
            return(/*#__PURE__*/ jsx_runtime_.jsx(about_us_AboutUsItem, {
                image: getImage(entry),
                name: entry,
                onClick: ()=>onClick(entry)
            }, entry));
        })
    }));
}
const getImage = (input)=>{
    switch(input){
        case "our story":
            return our_story;
        case "our values":
            return our_values;
        case "What makes BJS different":
            return what_makes_us_different;
        case "Charity and community":
            return charity_and_community;
        case "Our technology":
            return our_technology;
        case "Training academy":
            return training_academy;
    }
};
/* harmony default export */ const about_us = (external_styled_components_default()(AboutUsExpanded).withConfig({
    componentId: "sc-7ae61d43-0"
})``);

;// CONCATENATED MODULE: ./public/images/header/mobile/services/home-delivery.jpg
/* harmony default export */ const home_delivery = ({"src":"/_next/static/media/home-delivery.8be56b2a.jpg","height":103,"width":103,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAgEAABAgcAAwAAAAAAAAAAAAACAAEDBAUREhQhBjGh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARL/2gAMAwEAAhEDEQA/AKNXrFWPzyDpys9pSw4PiJCEWzu5v3j2+257REU5Mr//2Q=="});
;// CONCATENATED MODULE: ./public/images/header/mobile/services/extra.jpg
/* harmony default export */ const extra = ({"src":"/_next/static/media/extra.fa3cfad5.jpg","height":103,"width":103,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAcEAABBQADAAAAAAAAAAAAAAABAAIDBBETUWH/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBv/EABsRAAEEAwAAAAAAAAAAAAAAAAEAAiGRAxIU/9oADAMBAAIRAxEAPwC+jfosrTGem+V4ORjhcHE+6czrERE04g6STan+jWAxtL//2Q=="});
;// CONCATENATED MODULE: ./public/images/header/mobile/services/haulage.jpg
/* harmony default export */ const haulage = ({"src":"/_next/static/media/haulage.7bb5e418.jpg","height":103,"width":103,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAdEAACAQQDAAAAAAAAAAAAAAABAgADBBGBEhMx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCY2lp2rUDVVDAABCG5ax5uIiUH/9k="});
;// CONCATENATED MODULE: ./public/images/header/mobile/services/construct-it.jpg
/* harmony default export */ const construct_it = ({"src":"/_next/static/media/construct-it.4a507234.jpg","height":103,"width":103,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAABBAIDAAAAAAAAAAAAAAADAAECEgQRBSJB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAYEQADAQEAAAAAAAAAAAAAAAAAAQJBUf/aAAwDAQACEQMRAD8AjcQ3HjAXQJZJLRpBw0q3vbb7RESTqdJqZ4f/2Q=="});
;// CONCATENATED MODULE: ./components/navigation/mobile/expanded/our-services/item/OurServiceItem.tsx









function OurServiceItem(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(OurServiceItem_Container, {
        className: props.className,
        onClick: props.onClick,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(OurServiceItem_ImageContainer, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(OurServiceItem_CircleImage, {
                    src: OurServiceItem_getImage(props.subsidiary),
                    layout: "fixed",
                    width: 60,
                    height: 60
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Body, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(OurServiceItem_Title, {
                        children: props.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Description, {
                        children: props.description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(OurServiceItem_Icon, {
                icon: pro_regular_svg_icons_.faChevronRight
            })
        ]
    }));
}
const OurServiceItem_ImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-b03a142f-0"
})`
  position: relative;

  min-height: 60px;
  min-width: 60px;
`;
const OurServiceItem_CircleImage = external_styled_components_default()(next_image["default"]).withConfig({
    componentId: "sc-b03a142f-1"
})`
  border-radius: 50%;
`;
const OurServiceItem_getImage = (input)=>{
    switch(input){
        case "home delivery":
            return home_delivery;
        case "extra":
            return extra;
        case "haulage":
            return haulage;
        case "constructit":
            return construct_it;
    }
};
const OurServiceItem_Icon = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-b03a142f-2"
})`
  margin-left: auto;
`;
const OurServiceItem_Circle = external_styled_components_default().div.withConfig({
    componentId: "sc-b03a142f-3"
})`
  min-height: 60px;
  min-width: 60px;
  max-height: 60px;
  border: 1px solid black;
  border-radius: 50%;
`;
const OurServiceItem_Title = external_styled_components_default().span.withConfig({
    componentId: "sc-b03a142f-4"
})`
  font-family: "Eveleth";
  font-size: 13px;
`;
const Description = external_styled_components_default().span.withConfig({
    componentId: "sc-b03a142f-5"
})`
  font-size: 14px;
`;
const Body = external_styled_components_default().div.withConfig({
    componentId: "sc-b03a142f-6"
})`
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    margin-bottom: 15px;
  }

  color: #57534e;
`;
const OurServiceItem_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-b03a142f-7"
})`
  display: flex;
  > :not(:last-child) {
    margin-right: 20px;
  }
  width: 100%;
`;
/* harmony default export */ const item_OurServiceItem = (OurServiceItem);

// EXTERNAL MODULE: ./components/subsidiary-showcase/Subsidiary.ts
var Subsidiary = __webpack_require__(4170);
// EXTERNAL MODULE: ./subsidiary-config/index.tsx
var subsidiary_config = __webpack_require__(1683);
// EXTERNAL MODULE: ./components/services/useServicesState.tsx
var useServicesState = __webpack_require__(3044);
;// CONCATENATED MODULE: ./components/navigation/mobile/expanded/our-services/index.tsx








function OurServicesExpanded(props) {
    const navigateTo = (0,useServicesState/* useNavigateTo */.jU)();
    const setNavigationOpened = (0,mobile_navigation_state/* useSetOpen */.f6)();
    const onClick = (subsidiary)=>{
        navigateTo(subsidiary);
        setNavigationOpened(false);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(expanded, {
        className: props.className,
        children: Subsidiary/* allSubsidiaries.map */.Y.map((subsidiary)=>{
            const config = (0,subsidiary_config/* default */.Z)(subsidiary);
            return(/*#__PURE__*/ jsx_runtime_.jsx(item_OurServiceItem, {
                subsidiary: subsidiary,
                title: config.title,
                description: getDescription(subsidiary),
                onClick: ()=>onClick(subsidiary)
            }, subsidiary));
        })
    }));
}
const getDescription = (input)=>{
    const description = (0,subsidiary_config/* default */.Z)(input).description;
    const getFirstSentenceFromSecondEntry = ()=>description[1].split(".")[0]
    ;
    if (input === "home delivery" || input === "extra") {
        return getFirstSentenceFromSecondEntry();
    }
    return description[0];
};
/* harmony default export */ const our_services = (external_styled_components_default()(OurServicesExpanded).withConfig({
    componentId: "sc-f22ed1e5-0"
})``);

;// CONCATENATED MODULE: ./components/navigation/mobile/expanded/ExpandedMenu.tsx




function ExpandedMenu_ExpandedMenu(props) {
    const name = props.dropdownName.toLowerCase();
    const className = props.className;
    if (name === "about") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(about_us, {
            className: className
        }));
    } else if (name === "services") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(our_services, {
            className: className
        }));
    }
    throw new Error(`Cannot find expanded menu for ${name}`);
}
/* harmony default export */ const expanded_ExpandedMenu = (external_styled_components_default()(ExpandedMenu_ExpandedMenu).withConfig({
    componentId: "sc-4a516e67-0"
})``);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/navigation/mobile/entry/index.tsx








function MobileNavigationEntryContainer(props) {
    const router = (0,router_.useRouter)();
    const setNavigationOpened = (0,mobile_navigation_state/* useSetOpen */.f6)();
    const { 0: isOpened , 1: setOpened  } = (0,external_react_.useState)(false);
    const toggle = ()=>setOpened((old)=>!old
        )
    ;
    const onClick = ()=>{
        const title = props.entry.title.toLowerCase();
        if (props.entry.entries.length === 0) {
            router.push(`/${title}`);
            setNavigationOpened(false);
        } else {
            toggle();
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(entry_Container, {
        initial: {
            opacity: 0,
            height: 0
        },
        animate: {
            opacity: 1,
            height: "auto"
        },
        exit: {
            opacity: 0,
            height: 0
        },
        onClick: onClick,
        isOpened: isOpened,
        layout: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(entry_MobileNavigationEntry, {
                ...props,
                isOpened: isOpened
            }),
            isOpened && /*#__PURE__*/ jsx_runtime_.jsx(expanded_ExpandedMenu, {
                dropdownName: props.entry.title.toLowerCase() === "about us" ? "about" : "services"
            })
        ]
    }));
}
const entry_Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-6b06c78b-0"
})`
  display: flex;
  flex-direction: column;

  ${(props)=>props.isOpened && OpenedStyling
};
  ${(props)=>!props.isOpened && ClosedStyling
};

  ${entry_MobileNavigationEntry} {
    ${(props)=>!props.isOpened && SeperatorStyling
};
  }
`;
const OpenedStyling = external_styled_components_.css`
  background: transparent
    linear-gradient(
      180deg,
      rgba(58, 54, 48, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 100%
    )
    0% 0% no-repeat padding-box;
`;
const ClosedStyling = external_styled_components_.css`
  background: transparent linear-gradient(180deg, #f9f9f9 0%, #ffffff 100%) 0%
    0% no-repeat padding-box;
`;
const SeperatorStyling = external_styled_components_.css`
  border-bottom: 1px solid #f4efe9;
`;
/* harmony default export */ const mobile_entry = (external_styled_components_default()(MobileNavigationEntryContainer).withConfig({
    componentId: "sc-6b06c78b-1"
})``);

;// CONCATENATED MODULE: ./components/navigation/mobile/MobileNavigationEntries.tsx





function MobileNavigationEntries(props) {
    const open = (0,mobile_navigation_state/* default */.ZP)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
        children: open && /*#__PURE__*/ jsx_runtime_.jsx(MobileNavigationEntries_Container, {
            initial: {
                opacity: 0,
                height: 0
            },
            animate: {
                opacity: 1,
                height: "auto"
            },
            exit: {
                opacity: 0,
                height: 0
            },
            layout: true,
            children: props.entries.map((entry)=>/*#__PURE__*/ jsx_runtime_.jsx(mobile_entry, {
                    entry: entry
                }, entry.title)
            )
        }, "mobile navigation entries")
    }));
}
const MobileNavigationEntries_Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-3b1f48e-0"
})`
  display: flex;
  flex-direction: column;
`;
/* harmony default export */ const mobile_MobileNavigationEntries = (external_styled_components_default()(MobileNavigationEntries).withConfig({
    componentId: "sc-3b1f48e-1"
})``);

;// CONCATENATED MODULE: ./components/navigation/mobile/entries/index.tsx



function OpenedNavigation(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(mobile_MobileNavigationEntries, {
        className: props.className,
        entries: props.entries
    }));
}
/* harmony default export */ const entries = (external_styled_components_default()(OpenedNavigation).withConfig({
    componentId: "sc-ff706d1b-0"
})``);

;// CONCATENATED MODULE: ./components/navigation/mobile/HamburgerMenu.tsx




function HamburgerMenu(props) {
    const toggle = (0,mobile_navigation_state/* useToggle */.OT)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(HamburgerMenu_Container, {
        className: props.className,
        onClick: toggle,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Top, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Middle, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Bottom, {})
        ]
    }));
}
const HamburgerMenu_Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-9cf679a0-0"
})`
  display: flex;
  flex-direction: column;


  > :not(:last-child) {
    margin-bottom: 6px;
  }
`;
const Line = external_styled_components_default().div.withConfig({
    componentId: "sc-9cf679a0-1"
})`
  min-height: 4px;
  border-radius: 66px;
  background: black;
  content: "";
`;
const Top = external_styled_components_default()(Line).withConfig({
    componentId: "sc-9cf679a0-2"
})`
  width: 32px;
`;
const Middle = external_styled_components_default()(Line).withConfig({
    componentId: "sc-9cf679a0-3"
})`
  width: 22px;
`;
const Bottom = external_styled_components_default()(Line).withConfig({
    componentId: "sc-9cf679a0-4"
})`
  width: 26px;
`;
/* harmony default export */ const mobile_HamburgerMenu = (external_styled_components_default()(HamburgerMenu).withConfig({
    componentId: "sc-9cf679a0-5"
})``);

;// CONCATENATED MODULE: ./components/navigation/mobile/CloseIcon.tsx






function CloseIcon() {
    const setOpen = (0,mobile_navigation_state/* useSetOpen */.f6)();
    const close = ()=>setOpen(false)
    ;
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
        icon: pro_solid_svg_icons_.faTimes,
        height: 25,
        onClick: close
    }));
}
const CloseIcon_Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-12216a8-0"
})``;
/* harmony default export */ const mobile_CloseIcon = (CloseIcon);

;// CONCATENATED MODULE: ./components/navigation/mobile/LeftIcon.tsx







function LeftIcon() {
    const isOpened = (0,mobile_navigation_state/* default */.ZP)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_framer_motion_.AnimatePresence, {
        children: [
            isOpened && /*#__PURE__*/ jsx_runtime_.jsx(LeftIcon_Container, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.3
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(mobile_CloseIcon, {})
            }),
            !isOpened && /*#__PURE__*/ jsx_runtime_.jsx(LeftIcon_Container, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.3
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(mobile_HamburgerMenu, {})
            })
        ]
    }));
}
const LeftIcon_Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-f192901a-0"
})`
  height: 100%;
  min-width: 30px;
  content: "";
`;
/* harmony default export */ const mobile_LeftIcon = (LeftIcon);

;// CONCATENATED MODULE: ./components/navigation/useGoToHome.tsx

function useGoToHome() {
    const router = (0,router_.useRouter)();
    const goToHome = ()=>{
        router.push("/");
    };
    return goToHome;
}
/* harmony default export */ const navigation_useGoToHome = (useGoToHome);

;// CONCATENATED MODULE: ./components/navigation/mobile/index.tsx









function MobileNavigationBar(props) {
    const goToHome = navigation_useGoToHome();
    const setOpen = (0,mobile_navigation_state/* useSetOpen */.f6)();
    const close = ()=>{
        setOpen(false);
        goToHome();
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BarContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(mobile_LeftIcon, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(BjsFamilyLogoDesktop, {
                        onClick: close
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TalkToUsContainer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(talk_to_us_button/* default */.Z, {})
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(entries, {
                entries: props.entries
            })
        ]
    }));
}
const TalkToUsContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-e12f2dd1-0"
})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 11px 9px;
  background: ${components_.colours.yellow};
  border-radius: 50%;
`;
const BarContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-e12f2dd1-1"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  box-shadow: 0px 3px 10px #0000001a;
  z-index: 50;
`;
/* harmony default export */ const mobile = (MobileNavigationBar);

;// CONCATENATED MODULE: external "@tippyjs/react"
const react_namespaceObject = require("@tippyjs/react");
var react_default = /*#__PURE__*/__webpack_require__.n(react_namespaceObject);
// EXTERNAL MODULE: ./node_modules/tippy.js/dist/tippy.css
var tippy = __webpack_require__(8933);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
;// CONCATENATED MODULE: ./components/navigation/desktop/navigation-item/services-dropdown/services-dropdown-store.ts

const currentHoveredState = (0,external_recoil_.atom)({
    key: "services_dropdown_hovered",
    default: "home delivery"
});
function useCurrentHovered() {
    return (0,external_recoil_.useRecoilValue)(currentHoveredState);
}
function useSetCurrentHovered() {
    return useSetRecoilState(currentHoveredState);
}
function useHoveredState() {
    return (0,external_recoil_.useRecoilState)(currentHoveredState);
}

/* harmony default export */ const services_dropdown_store = (useCurrentHovered);

;// CONCATENATED MODULE: ./components/navigation/desktop/navigation-item/TippyContainer.tsx







const getDelta = (input)=>{
    if (!input.startsWith("matrix")) {
        throw new Error(`Invalid input - must be a matrix variant`);
    }
    const betweenParenthesis = /\(([^)]+)\)/;
    const values = betweenParenthesis.exec(input);
    if (!values) {
        throw new Error(`Invalid input - must have parenthesis`);
    }
    const numbers = values[1].split(",");
    if (numbers.length != 6) {
        throw new Error(`Invalid input - matrix must be of length 6`);
    }
    return parseInt(numbers[4]);
};
const TippyContainer_Container = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>{
    const hovered = services_dropdown_store();
    const { 0: isOverlapping , 1: setOverlapping  } = (0,external_react_.useState)(false);
    const determineIsOverlapping = ()=>{
        if (!document) {
            return false;
        }
        const arrow = document.querySelector(".tippy-arrow");
        if (!arrow) {
            return false;
        }
        const transform = getComputedStyle(arrow).transform;
        const delta = getDelta(transform);
        let navigationWidth = getNavigationWidth(props.dropdownName);
        if (delta < 350) {
            navigationWidth = delta - 1;
        }
        return delta < navigationWidth;
    };
    const arrowColourPlugin = {
        fn: ()=>({
                onMount: ()=>{
                    handleResize();
                },
                onHidden: ()=>{}
            })
    };
    const handleResize = ()=>{
        setOverlapping(determineIsOverlapping());
    };
    (0,external_react_.useEffect)(()=>{
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize)
        ;
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx(TippyContainer, {
        interactive: true,
        arrow: true,
        offset: [
            0,
            30
        ],
        color: getColour(props.dropdownName, isOverlapping, hovered),
        placement: "bottom-end",
        content: props.component,
        ref: ref,
        plugins: [
            arrowColourPlugin
        ],
        children: props.children
    }));
});
const getNavigationWidth = (input)=>{
    if (input === "about") {
        return 387;
    } else if (input === "services") {
        return 1093;
    }
    return -1;
};
const getColour = (input, isOverLeft, subsidiary)=>{
    if (isOverLeft) {
        return "white";
    }
    if (input === "about") {
        return "white";
    }
    if (input === "services") {
        return getSubsidiaryColour(subsidiary);
    }
    return "#E7E5E1";
};
const getSubsidiaryColour = (input)=>{
    switch(input){
        case "home delivery":
            return "#E2E0DD";
        case "extra":
            return (0,subsidiary_config/* default */.Z)("extra").primaryColour;
        case "haulage":
            return "black";
        case "constructit":
            return "#171E24";
        default:
            return "none";
    }
};
const TippyContainer = external_styled_components_default()((react_default())).withConfig({
    componentId: "sc-a39e061e-0"
})`
  max-width: 100% !important;
  background-color: transparent;
  &.tippy-box {
    background: transparent;
    background-color: transparent;
    @media only screen and (min-width: 856px) and (max-width: 991px) {
      .tippy-arrow {
        color: #fff;      
      }
    }
    @media only screen and (min-width: 1020px) and (max-width: 4600px) {
      .tippy-arrow {
        color: #fff;
      }
    }
    }

  .tippy-content {
    padding: 0px;
  }

  .tippy-arrow {
    color: ${(props)=>props.color
};
    @media (hover: none) and (pointer: fine) {
      color: ${(props)=>props.color
};
    }
    z-index: 1;
    ::before {
      top: -20px !important;
      border-width: 0 20px 23px !important;
    }
  }
  @media (hover: none) and (pointer: fine) {
    .tippy-arrow {
      color: ${(props)=>props.color
} !important;
    }
  }
`;
/* harmony default export */ const navigation_item_TippyContainer = (TippyContainer_Container);

;// CONCATENATED MODULE: ./components/navigation/desktop/navigation-item/useIsSelected.ts

function useIsSelected(text) {
    const router = (0,router_.useRouter)();
    const route = router.route;
    text = getName(text);
    return route.toLowerCase().includes(text);
}
function getName(input) {
    const text = input.toLowerCase();
    if (text === "about bjs") {
        return "about";
    } else if (text === "our services") {
        return "services";
    }
    return text;
}
/* harmony default export */ const navigation_item_useIsSelected = (useIsSelected);

;// CONCATENATED MODULE: ./components/navigation/desktop/navigation-item/AbstractNavigationItem.tsx




function AbstractNavigationItem({ isSelected , className , children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(AbstractNavigationItem_Container, {
        className: className,
        children: [
            children,
            isSelected && /*#__PURE__*/ jsx_runtime_.jsx(HighlightedItem, {
                layoutId: "underline",
                animate: {
                    background: isSelected ? components_.colours.yellow : "transparent"
                }
            }),
            !isSelected && /*#__PURE__*/ jsx_runtime_.jsx(NonHighlightedItem, {})
        ]
    }));
}
const AbstractNavigationItem_Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-120dda6f-0"
})`
  display: flex;
  flex-direction: column;
`;
const HighlightedItem = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-120dda6f-1"
})`
  min-height: 2px;
  width: 100%;
`;
const NonHighlightedItem = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-120dda6f-2"
})`
  min-height: 2px;
  width: 100%;
`;
/* harmony default export */ const navigation_item_AbstractNavigationItem = (external_styled_components_default()(AbstractNavigationItem).withConfig({
    componentId: "sc-120dda6f-3"
})``);

;// CONCATENATED MODULE: ./components/navigation/desktop/navigation-item/NavigationItem.tsx









const NavigationEntryIndex = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>{
    const isSelected = navigation_item_useIsSelected(props.text);
    const component = /*#__PURE__*/ jsx_runtime_.jsx(NavigationEntry, {
        ...props
    });
    if (props.overlay) {
        const dropdownName = getName(props.text);
        return(/*#__PURE__*/ jsx_runtime_.jsx(navigation_item_AbstractNavigationItem, {
            isSelected: isSelected,
            children: /*#__PURE__*/ jsx_runtime_.jsx(navigation_item_TippyContainer, {
                component: props.overlay.component,
                dropdownName: dropdownName,
                ref: ref,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavigationItem_Container, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem_Text, {
                            children: props.text
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem_Icon, {
                            icon: pro_solid_svg_icons_.faChevronDown
                        })
                    ]
                })
            })
        }));
    }
    return component;
});
const NavigationItem_Icon = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-4a072a45-0"
})`
  font-size: 15px !important;
`;
function NavigationEntry({ text , onClick  }) {
    const isSelected = navigation_item_useIsSelected(text);
    return(/*#__PURE__*/ jsx_runtime_.jsx(navigation_item_AbstractNavigationItem, {
        isSelected: isSelected,
        children: /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem_Container, {
            onClick: onClick,
            children: /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem_Text, {
                children: text
            })
        })
    }));
}
const NavigationItem_Text = external_styled_components_default().span.withConfig({
    componentId: "sc-4a072a45-1"
})`
  text-transform: capitalize;
  font-size: 16px;
  font-weight: bold;
`;
const NavigationItem_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-4a072a45-2"
})`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #5f5d5b;
  position: relative;


  > :not(:last-child) {
    margin-right: 12px;
  }

  :hover {
    ${NavigationItem_Text}, ${NavigationItem_Icon} {
      color: ${components_.colours.yellow};
    }
  }
`;
/* harmony default export */ const NavigationItem = (NavigationEntryIndex);

;// CONCATENATED MODULE: ./components/navigation/desktop/navigation-item/services-dropdown/featured-image/GeneralContainer.ts

const GeneralContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-1656f2f3-0"
})`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  min-width: 100%;
  max-width: 100%;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;

  align-items: center;
  justify-content: center;

`;
/* harmony default export */ const featured_image_GeneralContainer = (GeneralContainer);

;// CONCATENATED MODULE: ./components/navigation/desktop/navigation-item/services-dropdown/featured-image/HomeDeliveryFeaturedImage.tsx




const HomeDeliveryFeaturedImage_Container = external_styled_components_default()(featured_image_GeneralContainer).withConfig({
    componentId: "sc-8297c819-0"
})`

  background: linear-gradient(#E2E0DD, #F5F0EA);
  gap: 20px;
`;
function HomeDeliveryFeaturedImage(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(HomeDeliveryFeaturedImage_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/images/logos/homedelivery.svg",
                height: 129
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: "/images/showcase/menholdingsofa.png",
                height: 280,
                width: 290,
                layout: "fixed"
            })
        ]
    }));
}
/* harmony default export */ const featured_image_HomeDeliveryFeaturedImage = (external_styled_components_default()(HomeDeliveryFeaturedImage).withConfig({
    componentId: "sc-8297c819-1"
})``);

// EXTERNAL MODULE: ./subsidiary-config/haulage-config.ts
var haulage_config = __webpack_require__(685);
;// CONCATENATED MODULE: ./components/navigation/desktop/navigation-item/services-dropdown/featured-image/HaulageFeaturedImage.tsx




const HaulageFeaturedImage_Container = external_styled_components_default()(featured_image_GeneralContainer).withConfig({
    componentId: "sc-8f2ce52-0"
})`
  background: black no-repeat url("/images/services/haulage/navigation.jpg");

  background-position: bottom;
  position: relative;
  justify-content: flex-start;

  img {
    margin-top: 70px;
  }
`;
function HaulageFeaturedImage(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(HaulageFeaturedImage_Container, {
        className: props.className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: haulage_config/* logoWhiteUrl */.X,
            height: 100
        })
    }));
}
/* harmony default export */ const featured_image_HaulageFeaturedImage = (external_styled_components_default()(HaulageFeaturedImage).withConfig({
    componentId: "sc-8f2ce52-1"
})``);

// EXTERNAL MODULE: ./subsidiary-config/extra-config.ts
var extra_config = __webpack_require__(9437);
;// CONCATENATED MODULE: ./components/navigation/desktop/navigation-item/services-dropdown/featured-image/ExtraFeaturedImage.tsx




const ExtraFeaturedImage_Container = external_styled_components_default()(featured_image_GeneralContainer).withConfig({
    componentId: "sc-9664d888-0"
})`
  background: ${extra_config/* default.primaryColour */.Z.primaryColour};
  position: relative;

  gap: 30px;
`;
function ExtraFeaturedImage(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ExtraFeaturedImage_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: extra_config/* logoWhiteUrl */.X,
                height: 150
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Van, {
                src: "/images/services/extra/van.png"
            })
        ]
    }));
}
const Van = external_styled_components_default().img.withConfig({
    componentId: "sc-9664d888-1"
})`
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
  width: 90%;
 // height: auto;
`;
/* harmony default export */ const featured_image_ExtraFeaturedImage = (external_styled_components_default()(ExtraFeaturedImage).withConfig({
    componentId: "sc-9664d888-2"
})``);

// EXTERNAL MODULE: ./subsidiary-config/construct-it-config.ts
var construct_it_config = __webpack_require__(7729);
;// CONCATENATED MODULE: ./components/navigation/desktop/navigation-item/services-dropdown/featured-image/ConstructITFeaturedImage.tsx




const ConstructITFeaturedImage_Container = external_styled_components_default()(featured_image_GeneralContainer).withConfig({
    componentId: "sc-f559b9df-0"
})`
  background: black no-repeat
    url("/images/services/construct-it/navigation_background.jpg");
  background-position: bottom;
  background-size: cover;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  color: white;
  img {
    margin-top: 75px;
  }
`;
function ConstructITFeaturedImage(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(ConstructITFeaturedImage_Container, {
        className: props.className,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
            src: construct_it_config/* logoWhiteUrl */.X,
            height: 60
        })
    }));
}
const Logo = external_styled_components_default().img.withConfig({
    componentId: "sc-f559b9df-1"
})`
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
`;
/* harmony default export */ const featured_image_ConstructITFeaturedImage = (external_styled_components_default()(ConstructITFeaturedImage).withConfig({
    componentId: "sc-f559b9df-2"
})``);

;// CONCATENATED MODULE: ./components/navigation/desktop/navigation-item/services-dropdown/featured-image/index.tsx






function FeaturedImage(props) {
    const subsidiary = props.subsidiary;
    if (subsidiary === "haulage") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(featured_image_HaulageFeaturedImage, {
            className: props.className
        }));
    } else if (subsidiary === "extra") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(featured_image_ExtraFeaturedImage, {
            className: props.className
        }));
    } else if (subsidiary === "constructit") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(featured_image_ConstructITFeaturedImage, {
            className: props.className
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(featured_image_HomeDeliveryFeaturedImage, {
        className: props.className
    }));
}
/* harmony default export */ const featured_image = (external_styled_components_default()(FeaturedImage).withConfig({
    componentId: "sc-931377b4-0"
})``);

;// CONCATENATED MODULE: external "tippy.js"
const external_tippy_js_namespaceObject = require("tippy.js");
// EXTERNAL MODULE: ./components/util/useIsTabletOrSmaller.tsx
var useIsTabletOrSmaller = __webpack_require__(3176);
;// CONCATENATED MODULE: ./components/navigation/desktop/navigation-item/services-dropdown/SubsidiaryEntry.tsx









const SubsidiaryEntry_Body = external_styled_components_default().div.withConfig({
    componentId: "sc-4d2c8322-0"
})`
  display: flex;
  flex-direction: column;
  font-size: 14px;

  > :not(:last-child) {
    margin-bottom: 18px;
  }
  color: ${components_.colours.black};
`;
const TitleContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-4d2c8322-1"
})`
  position: relative;
  width: fit-content;
`;
const SubsidiaryEntry_Title = external_styled_components_default()(external_framer_motion_.motion.span).withConfig({
    componentId: "sc-4d2c8322-2"
})`
  font-family: "Eveleth";
  color: ${(props)=>props.isHovered ? components_.colours.black : "#57534E"
};
`;
const TitleUnderline = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-4d2c8322-3"
})`
  position: absolute;
  bottom: -6px;
  height: 2px;
  border-radius: 66px;
  background: ${(props)=>getUnderlineColour(props.subsidiary)
};
  @media (hover: none) and (pointer: fine) {
    background: ${(props)=>getUnderlineColour(props.subsidiary)
};
  }
`;
const getUnderlineColour = (subsidiary)=>{
    if (subsidiary === "home delivery" || subsidiary === "haulage") {
        return components_.colours.yellow;
    }
    return (0,subsidiary_config/* default */.Z)(subsidiary).primaryColour;
};
const SubsidiaryEntry_Description = external_styled_components_default().div.withConfig({
    componentId: "sc-4d2c8322-4"
})`
  white-space: pre-line;
`;
const LogoImage = external_styled_components_default().img.withConfig({
    componentId: "sc-4d2c8322-5"
})``;
const SubsidiaryEntry_Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-4d2c8322-6"
})`
  display: flex;
  align-items: center;
  position: relative;

  > :not(:last-child) {
    margin-right: 60px;
  }

  cursor: pointer;

  img {
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;
  }

  ${(props)=>props.subsidiary === "constructit" && ConstructITStyling
};
`;
const ConstructITStyling = external_styled_components_.css`
  ${LogoImage} {
    position: absolute;
    left: -12px;
  }
  ${SubsidiaryEntry_Body} {
    position: relative;
    margin-left: 130px;
  }
`;
function SubsidiaryEntry({ className , image , description , name , subsidiary  }) {
    const [hover, setHover] = useHoveredState();
    const navigateTo = (0,useServicesState/* useNavigateTo */.jU)();
    const isDesktop = (0,useIsTabletOrSmaller/* useIsDesktop */.Ce)();
    const setHovered = ()=>setHover(subsidiary)
    ;
    const isHovered = hover === subsidiary;
    const [height, width] = getLogoDimensions(subsidiary);
    const click = ()=>{
        navigateTo(subsidiary);
        (0,external_tippy_js_namespaceObject.hideAll)({
            duration: 100
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(SubsidiaryEntry_Container, {
        className: className,
        onHoverStart: setHovered,
        onClick: click,
        subsidiary: subsidiary,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(LogoImage, {
                src: image,
                height: height,
                width: width
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SubsidiaryEntry_Body, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TitleContainer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SubsidiaryEntry_Title, {
                                isHovered: isHovered,
                                children: name
                            }),
                            isHovered && /*#__PURE__*/ jsx_runtime_.jsx(TitleUnderline, {
                                subsidiary: subsidiary,
                                initial: {
                                    width: "0"
                                },
                                animate: {
                                    width: "100%"
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SubsidiaryEntry_Description, {
                        children: description
                    })
                ]
            })
        ]
    }));
}
const getLogoDimensions = (input)=>{
    switch(input){
        case "home delivery":
            return [
                48,
                69
            ];
        case "extra":
            return [
                54,
                69
            ];
        case "haulage":
            return [
                43,
                72
            ];
        case "constructit":
            return [
                23,
                113
            ];
    }
};
/* harmony default export */ const services_dropdown_SubsidiaryEntry = (external_styled_components_default()(SubsidiaryEntry).withConfig({
    componentId: "sc-4d2c8322-7"
})``);

;// CONCATENATED MODULE: ./components/navigation/desktop/navigation-item/services-dropdown/SubsidiaryEntries.tsx



function SubsidiaryEntries() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(services_dropdown_SubsidiaryEntry, {
                subsidiary: "home delivery",
                image: "/images/logos/homedelivery.svg",
                name: "two-man home delivery",
                description: `Award winning two-man home delivery teams, trained in excellence and trusted by leading\nbrands.`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(services_dropdown_SubsidiaryEntry, {
                subsidiary: "extra",
                image: "/images/logos/extra.svg",
                name: "an extra helping hand",
                description: `BJS Extra is all the experience of BJS Home Delivery with an extra helping hand for up and\ncoming companies.`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(services_dropdown_SubsidiaryEntry, {
                subsidiary: "haulage",
                image: "/images/logos/haulage.svg",
                name: "with you at every turn",
                description: `BJS Haulage is the UK’s leading national haulage company and can help you to navigate the\ntwists and turns of your day-to-day nationwide transport needs with a service-led approach.`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(HaulageEntry, {
                subsidiary: "constructit",
                image: "/images/logos/constructit.svg",
                name: "specialist construction haulage",
                description: `Construct IT provides a safe and reliable service for market-leading construction product\nmanufacturers.`
            })
        ]
    }));
}
const HaulageEntry = external_styled_components_default()(services_dropdown_SubsidiaryEntry).withConfig({
    componentId: "sc-a63bec44-0"
})`
  img {
    /* position: relative;
    left: -5x;
    width: 114px;
    height: 25px;*/
    height: 25px;
  }
`;
/* harmony default export */ const services_dropdown_SubsidiaryEntries = (SubsidiaryEntries);

;// CONCATENATED MODULE: ./components/navigation/desktop/navigation-item/services-dropdown/index.tsx







function ServicesDropdown() {
    const currentHovered = services_dropdown_store();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(services_dropdown_Container, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 0.4
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Right, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(featured_image, {
                    subsidiary: currentHovered
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Left, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(services_dropdown_SubsidiaryEntries, {})
            })
        ]
    }));
}
const ContainerStyling = external_styled_components_.css`
  position: relative;
  box-shadow: 0px 3px 30px #0000001a;
  border-radius: 12px;
  z-index: 5000;
`;
const services_dropdown_Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-e2e60361-0"
})`
  ${ContainerStyling};
  background: white;
  display: flex;
`;
const Left = external_styled_components_default().div.withConfig({
    componentId: "sc-e2e60361-1"
})`
  ${ContainerStyling};
  padding: 45px;
  display: flex;
  flex-direction: column;

  ${(0,external_styled_breakpoints_.down)("md")} {
    padding: 30px 15px;
  }
  

  > :not(:last-child) {
    margin-bottom: 45px;

    ${(0,external_styled_breakpoints_.down)("md")} {
      margin-bottom: 25px;
    }
  }
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
`;
const Right = external_styled_components_default().div.withConfig({
    componentId: "sc-e2e60361-2"
})`
  ${ContainerStyling};
  min-height: 100%;
  min-width: 370px;
  max-width: 370px;
  background: #57534e;
  content: "";
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;

`;
/* harmony default export */ const services_dropdown = (ServicesDropdown);

;// CONCATENATED MODULE: ./public/images/header/about/default.png
/* harmony default export */ const about_default = ({"src":"/_next/static/media/default.ed769f55.png","height":445,"width":320,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAATlBMVEVMaXHFfhifXjBrRDmDdG8dLTLglRZfXl/YmYNnaGeleHHhq5KYiYXZqZW2lokpLCw2NjMkHht1T0JNR0W3eFdaXGC4lIiwk4iLZFfmo4ldm4yiAAAAE3RSTlMAacXc/Sg4kBv9qTe0lfhjX/T5lOvVmAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADdJREFUCJkdxdsWQCAUQMGdLqdC0aH4/x+18jIDmAAQr2VGtn+iMk1JD1Z3O63so7zNE7f+nP4DHM8BlPoL9mgAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/header/about/our-story.png
/* harmony default export */ const about_our_story = ({"src":"/_next/static/media/our-story.719180d4.png","height":445,"width":320,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAVFBMVEVMaXH/swD/iACSd2syMzE/PT0yPDzNkHNfZWp0cXN2c3fcr5/diB/UizZBSE+hVh9xbGmxiXjKnInLm4NmeognIyAeISB2ZFqoc1mvgnFKTVC0hnIPKbzpAAAAF3RSTlMAGAv7V/4jRP39ikqO/puKb7JY+VDt+gAovLEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA4SURBVAiZFcVJEoAgDADBARM2FQUVXP7/T4u+NGAswLL60XbPo9x3QN4QEojG6am46zuKxzWNJz8jZQGiZiLc7AAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/images/header/about/our-technology.png
/* harmony default export */ const about_our_technology = ({"src":"/_next/static/media/our-technology.9181a4c3.png","height":445,"width":320,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAVFBMVEVMaXFOVVtCVWUrND769fRiaXB2fYTk5OTR0M7U1taKioqWmZyJiocgLjyCiY7f0ctceYdWVV2BkZmJi43f3twiMkHe39/Y19Xt5uS7u7eZmpnawsO0tsKvAAAAGnRSTlMAZhVT/X6c/fn8CI7aRo76J1KSQ+U//////mlNb+8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAA5SURBVAiZBcEHAoAgDACxY5ah4iyg//+nCeWoBTi/sQPRp2WzBMnzXTEqvjucSuuGJ8+kAVuve8QfOjsCODwfM+AAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/header/about/our-values.png
/* harmony default export */ const about_our_values = ({"src":"/_next/static/media/our-values.beedb74b.png","height":445,"width":320,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAVFBMVEVMaXGoYCx5OyLdmhvpqxPYmyf9vQTenBX5yg7wuBWabGZ2SxxJGymwZR7KlD3/2h3CfCD//1t4TzTLmRuneWP0tBLJhiK6dhp+ThSYXR6ZcFpfOSwDRCTAAAAAFXRSTlMAP/1Q/fhJ/v3761Ep/fWDzx0TsY5oVH+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOElEQVQImQXBBwKAIAwAsUPAtooTGeL//2kCzB7A1TcB9/KtwDMmyVx73EQ4aghiWFMtjXhqsf4DLrkB/TDjlr4AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/header/about/what-makes-bjs-different.png
/* harmony default export */ const what_makes_bjs_different = ({"src":"/_next/static/media/what-makes-bjs-different.6d7d9eac.png","height":445,"width":320,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAWlBMVEVMaXFqcHgpLjSVXCubckZcS0Hov1g0O0FdYWbwtBo0OT1lbnjGhiMqMzhebnI3AAB6fIJqb3lrTkNJRkhfZW1HT1FHSE5wYFiWc2FwcXaDgX02O0JMR0hQWmNwlQizAAAAFXRSTlMAr/tI6/srhP1v/Hk34pwD0JbZ3ZbnbXg2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOUlEQVQImQXBCwJAIBBAwRfVbuRvC3H/a5oBIGViAt8T/TIWYVanxXhqvULgfvfDJtZPnA2cKlvrfjK8AkKtMFexAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/images/header/about/training-academy.png
/* harmony default export */ const about_training_academy = ({"src":"/_next/static/media/training-academy.7bc6ec22.png","height":445,"width":320,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAARVBMVEVMaXFQUk0uM0rGhh8eKDB2aGA9Qka4kGXwtj1iSz7/xBFnWFKldFdDTVuLe0wvKSCyjHB0WktBOC0oKCivhlymf1cFCg0pLjTXAAAAE3RSTlMAJILg+NGg/Rn6mOo+xZnkbrO5/OaqiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADRJREFUCJktxUkOgCAQAMFGwBlAZOf/TyUx1qXgp/oV7WWAN4wbyG54UO92gtp6CQ8iInMdF0cBSFgHTnoAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/header/about/charity.png
/* harmony default export */ const charity = ({"src":"/_next/static/media/charity.f99c9f51.png","height":445,"width":320,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAS1BMVEVMaXGgoKCfn6BxcXGTk5PKysqwsLCYmJnb29y+vr9+fn+hoqLW1tdGRkaXl5cmJyeOjo5RUVGQkJB5eXrBwcGtra13d3eqqqqQkJHoQ0P7AAAAGHRSTlMAsJuTfSwbTz8OfjaqVd8N901g1eB+9uleL3TpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVQImQXBBwKAIAwAsWO2BZXhgP+/1ATAfaDYCrCLvhlGzCYeUjUJpEvihMPhb3ga2s8fJc8BcgJhOywAAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./components/word-ladder/index.tsx
var word_ladder = __webpack_require__(5141);
;// CONCATENATED MODULE: ./components/navigation/desktop/navigation-item/about-dropdown/AboutSplash.tsx




const AboutSplash_entries = [
    [
        "Experience",
        "High standards"
    ],
    [
        "Customer Service",
        "Heart"
    ],
    [
        "Reputation",
        "Family Run"
    ],
    [
        "Flexible"
    ], 
];
function AboutSplash(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Splash, {
        repeat: 2,
        columns: 40,
        entries: AboutSplash_entries,
        className: props.className,
        type: "checkered",
        children: props.children
    }));
}
const Splash = external_styled_components_default()(word_ladder/* default */.ZP).withConfig({
    componentId: "sc-5658e9f9-0"
})`
  ${word_ladder/* Container */.W2} {
    top: -10px;
    left: -30px;
    font-size: 6px;
    max-height: 442px;
    min-width: 320px;
  }

  ${word_ladder/* Text */.xv} {
    color: ${components_.colours.black};
  }
  height: 100%;
  max-width: 320px;
    border-radius: 12px 0px 0px 12px;
}


`;
/* harmony default export */ const about_dropdown_AboutSplash = (external_styled_components_default()(AboutSplash).withConfig({
    componentId: "sc-5658e9f9-1"
})``);

;// CONCATENATED MODULE: ./components/navigation/desktop/navigation-item/about-dropdown/SupportingImage.tsx











function SupportingImage({ entry  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(about_dropdown_AboutSplash, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Image, {
            src: SupportingImage_getImage(entry).src,
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1,
                transition: {
                    duration: 0.5
                }
            },
            exit: {
                y: 0,
                opacity: 0,
                transition: {
                    duration: 0.5
                }
            }
        }, entry)
    }));
}
const Image = external_styled_components_default()(external_framer_motion_.motion.img).withConfig({
    componentId: "sc-d02e0d24-0"
})`
  z-index: 50;
  position: absolute;
  left: 0px;
  bottom: 0px;
`;
const SupportingImage_getImage = (input)=>{
    switch(input){
        case "our story":
            return about_our_story;
        case "Our technology":
            return about_our_technology;
        case "our values":
            return about_our_values;
        case "What makes BJS different":
            return what_makes_bjs_different;
        case "Charity and community":
            return charity;
        case "Training academy":
            return about_training_academy;
        default:
            return about_default;
    }
};
/* harmony default export */ const about_dropdown_SupportingImage = (SupportingImage);

;// CONCATENATED MODULE: ./components/navigation/desktop/navigation-item/about-dropdown/index.tsx










const leftRef = (0,external_recoil_.atom)({
    key: "navigation_about_dropdown",
    default: undefined
});
function useLeftLayout() {
    return useRecoilValue(leftRef);
}
function AboutDropdown() {
    const { 0: hovered , 1: setHovered  } = (0,external_react_.useState)("our story");
    const navigateTo = (0,AboutPage/* useNavigateTo */.j)();
    const setLayout = (0,external_recoil_.useSetRecoilState)(leftRef);
    const onClick = (entry)=>{
        navigateTo(entry);
        (0,external_tippy_js_namespaceObject.hideAll)({
            duration: 100
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(about_dropdown_Container, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 0.4
        },
        layout: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.AnimateSharedLayout, {
                type: "crossfade",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
                    initial: false,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(about_dropdown_Left, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(about_dropdown_SupportingImage, {
                            entry: hovered
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(about_dropdown_Right, {
                ref: (instance)=>setLayout(instance)
                ,
                children: AboutPage/* allPages.map */.v.map((entry)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(EntryName, {
                        onHoverStart: ()=>setHovered(entry)
                        ,
                        onClick: ()=>onClick(entry)
                        ,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(BulletPoint, {}),
                            entry
                        ]
                    }, entry)
                )
            })
        ]
    }));
}
const about_dropdown_ContainerStyling = external_styled_components_.css`
  box-shadow: 0px 3px 30px #0000001a;
  border-radius: 12px;
`;
const about_dropdown_Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-82561ed3-0"
})`
  ${about_dropdown_ContainerStyling};
  background: white;
  display: flex;
`;
const about_dropdown_Right = external_styled_components_default().div.withConfig({
    componentId: "sc-82561ed3-1"
})`
  ${about_dropdown_ContainerStyling};
  padding: 60px 40px;
  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 40px;
  }

  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
`;
const about_dropdown_Left = external_styled_components_default().div.withConfig({
    componentId: "sc-82561ed3-2"
})`
  ${about_dropdown_ContainerStyling};
  min-height: 100%;
  max-height: 100%;
  min-width: 320px;
  background: transparent linear-gradient(360deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;
  content: "";
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;

  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
`;
const BulletPoint = external_styled_components_default().div.withConfig({
    componentId: "sc-82561ed3-3"
})`
  height: 8px;
  width: 8px;
  background: #acaaa7;
  border-radius: 50%;
`;
const EntryName = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-82561ed3-4"
})`
  font-family: "Eveleth";
  font-size: 14px;
  text-transform: uppercase;
  color: #57534e;
  cursor: pointer;
  display: flex;
  align-items: center;

  ${BulletPoint} {
    margin-right: 25px;
  }

  :hover {
    color: ${components_.colours.yellow};
    ${BulletPoint} {
      background: ${components_.colours.yellow};
    }
  }
`;
/* harmony default export */ const about_dropdown = (AboutDropdown);

;// CONCATENATED MODULE: ./components/navigation/desktop/AboutNavigationItem.tsx




function AboutNavigationItem() {
    const ref = (0,external_react_.useRef)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(NavigationItem, {
        ref: ref,
        text: "about BJS",
        overlay: {
            component: /*#__PURE__*/ jsx_runtime_.jsx(about_dropdown, {}),
            placement: "bottomLeft"
        }
    }, "about bjs"));
}
/* harmony default export */ const desktop_AboutNavigationItem = (AboutNavigationItem);

;// CONCATENATED MODULE: ./components/navigation/desktop/DesktopNavigationItems.tsx







function NavigationEntries(props) {
    const router = (0,router_.useRouter)();
    const toNews = ()=>router.push("/news")
    ;
    const toCareers = ()=>router.push("/careers")
    ;
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.AnimateSharedLayout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DesktopNavigationItems_Container, {
                className: props.className,
                layout: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem, {
                        text: "our services",
                        overlay: {
                            component: /*#__PURE__*/ jsx_runtime_.jsx(services_dropdown, {}),
                            placement: "bottomLeft"
                        }
                    }, "our services"),
                    /*#__PURE__*/ jsx_runtime_.jsx(desktop_AboutNavigationItem, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem, {
                        text: "news",
                        onClick: toNews
                    }, "news"),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem, {
                        text: "careers",
                        onClick: toCareers
                    }, "careers")
                ]
            })
        })
    }));
}
const DesktopNavigationItems_Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-23362502-0"
})`
  display: flex;

  > :not(:last-child) {
    margin-right: 30px;
  }
`;
/* harmony default export */ const DesktopNavigationItems = (external_styled_components_default()(NavigationEntries).withConfig({
    componentId: "sc-23362502-1"
})``);

;// CONCATENATED MODULE: ./components/navigation/desktop/Container.ts





const Container_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-4c0793dc-0"
})`
  display: flex;
  align-items: center;

  ${(0,external_styled_breakpoints_.up)("lg")} {
    padding: 18px 40px;
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    padding: 18px 30px;
  }

  background: white;
  box-shadow: 0px 3px 10px #0000001a;

  ${BjsFamilyLogoDesktop} {
    cursor: pointer;
  }

  ${talk_to_us_button/* default */.Z} {
    margin-left: 30px;
  }
  ${DesktopNavigationItems} {
    margin-left: auto;
  }
`;
/* harmony default export */ const desktop_Container = (Container_Container);

;// CONCATENATED MODULE: ./components/navigation/desktop/index.tsx






function DesktopNavigationBar() {
    const goToHome = navigation_useGoToHome();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(desktop_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(BjsFamilyLogoDesktop, {
                onClick: goToHome
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(DesktopNavigationItems, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(talk_to_us_button/* default */.Z, {})
        ]
    }));
}
/* harmony default export */ const desktop = (DesktopNavigationBar);

// EXTERNAL MODULE: ./components/util/useIsMobile.tsx
var useIsMobile = __webpack_require__(6658);
;// CONCATENATED MODULE: ./components/navigation/Root.ts

const Root = external_styled_components_default().div.withConfig({
    componentId: "sc-9ef5e98b-0"
})`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0px;
  width: 100%;
  z-index: 1000001;
  background: white;
  height: 100%;
`;
/* harmony default export */ const navigation_Root = (Root);

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
;// CONCATENATED MODULE: ./components/navigation/index.tsx









const TrackYourOrderNotice = (0,dynamic["default"])(()=>__webpack_require__.e(/* import() */ 6251).then(__webpack_require__.bind(__webpack_require__, 6251))
, {
    loadableGenerated: {
        modules: [
            "..\\components\\navigation\\index.tsx -> " + "components/landing/track-your-order/component"
        ]
    }
});
const navigation_entries = [
    {
        title: "Our services",
        entries: Subsidiary/* allSubsidiaries */.Y
    },
    {
        title: "About us",
        entries: AboutPage/* allPages */.v
    },
    {
        title: "News",
        entries: []
    },
    {
        title: "Careers",
        entries: []
    }, 
];
function NavigationBar() {
    const isMobile = (0,useIsMobile/* default */.Z)();
    if (isMobile) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(mobile, {
            entries: navigation_entries
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(desktop, {}));
}
function NavigationIndex() {
    const router = (0,router_.useRouter)();
    const isLanding = router.asPath === "/";
    const isOnHomeDeliveryService = router.asPath === "/services/home-delivery";
    const shouldDisplayTrackOrderNotice = isLanding || isOnHomeDeliveryService;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(navigation_Root, {
        children: [
            shouldDisplayTrackOrderNotice && /*#__PURE__*/ jsx_runtime_.jsx(TrackYourOrderNotice, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(NavigationBar, {})
        ]
    }));
}
/* harmony default export */ const navigation = (NavigationIndex);


/***/ }),

/***/ 2429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OT": () => (/* binding */ useToggle),
/* harmony export */   "f6": () => (/* binding */ useSetOpen),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export useIsOpenState */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const openedState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "mobile_navigation_open",
    default: false
});
function useIsOpen() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(openedState);
}
function useIsOpenState() {
    return useRecoilState(openedState);
}
function useSetOpen() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(openedState);
}
function useToggle() {
    const setOpen = useSetOpen();
    const toggle = ()=>setOpen((old)=>!old
        )
    ;
    return toggle;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsOpen);


/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2699);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9707);
/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9509);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3195);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_navigation_mobile_mobile_navigation_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2429);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_util_modal_modal_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7318);
/* harmony import */ var components_talk_to_us_store_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2831);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5152);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4780);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var components_cookies_consent_notification__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3104);
/* harmony import */ var components_cookies_consent_more_info__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9053);
/* harmony import */ var _components_cookies_consent_useShowNotification__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2481);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_cookies_consent_more_info_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4910);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_cookies_consent_more_info__WEBPACK_IMPORTED_MODULE_15__]);
components_cookies_consent_more_info__WEBPACK_IMPORTED_MODULE_15__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





















_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__.config.autoAddCss = false;
const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_3__.createGlobalStyle`
.sc-jIkYaL{
  ${_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_4__.Button.PlainButton} {
    pointer-events: auto !important;
  }
}
${_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_4__.Button.PlainButton} {
      font-family: "Eveleth";
    }
    ${_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__.dom.css()}
 body {
  overscroll-behavior: none;
	 margin: 0;
}

.sc-hGPAah {
  display: block !important;
}

    * {
      box-sizing: border-box;
      line-height: 1.5em;
    }
`;
const theme = {
    breakpoints: {
        xs: "375px",
        sm: "460px",
        md: "768px",
        lg: "992px",
        xl: "1200px"
    }
};
const GA_TRACKING_ID = "G-F119RT40QW";
const hotJarScript = `
(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2782400,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`;
function FamilyApp(appProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "BJS Home Delivery",
        "URL": "https://bjshomedelivery.com/",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "01922645650",
            "contactType": "technical support",
            "areaServed": "GB",
            "availableLanguage": "en"
        },
        "sameAs": [
            "https://www.instagram.com/bjsdelivery/",
            "https://www.linkedin.com/company/bjs-distribution"
        ]
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(recoil__WEBPACK_IMPORTED_MODULE_2__.RecoilRoot, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico",
                        sizes: "any"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/icon.svg",
                        type: "image/svg+xml"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "apple-touch-icon",
                        href: "/apple-touch-icon.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "manifest",
                        href: "/manifest.webmanifest"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "robots",
                        content: "index, follow"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_13___default()), {
                        dangerouslySetInnerHTML: {
                            __html: ` (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TRLKZZT');
          `
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "google-site-verification",
                        content: "NaqtcW4rM7EdJiNCzn8s_0pdChvb805OtHNhoTuC88E"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: "https://bjshomedelivery.com/"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(schema)
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styled_components__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
                theme: theme,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_13___default()), {
                        strategy: "beforeInteractive",
                        src: `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_13___default()), {
                        strategy: "beforeInteractive",
                        dangerouslySetInnerHTML: {
                            __html: ` window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}');
  `
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_13___default()), {
                        strategy: "beforeInteractive",
                        dangerouslySetInnerHTML: {
                            __html: hotJarScript
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GlobalStyles, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "modal-root"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(App, {
                        ...appProps
                    })
                ]
            })
        ]
    }));
}
function App({ Component , pageProps  }) {
    const isHiding = (0,components_util_modal_modal_store__WEBPACK_IMPORTED_MODULE_10__/* .useIsHidingBackground */ .Qx)();
    const isMobileNavigationOpen = (0,components_navigation_mobile_mobile_navigation_state__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP)();
    const [isTalkToUsOpen] = (0,components_talk_to_us_store_index__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP)();
    const isCookiesInfoOpen = (0,_components_cookies_consent_more_info_store__WEBPACK_IMPORTED_MODULE_18__/* .useIsOpen */ .W8)();
    const showCookieNotification = (0,_components_cookies_consent_useShowNotification__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_17__.useRouter)();
    const isOnService = router.asPath.startsWith("/services");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const loadGotham = ()=>{
            let link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.referrerPolicy = "origin";
            link.href = "https://cloud.typography.com/7313560/6905232/css/fonts.css";
            let headScript = document.querySelector("script");
            if (headScript) {
                if (headScript.parentNode) {
                    headScript.parentNode.insertBefore(link, headScript);
                }
            }
        };
        loadGotham();
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
        hide: isHiding,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_4__.BreakpointProvider, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_4__.Notifications.Provider, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_navigation__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_19__.AnimatePresence, {
                        children: [
                            isCookiesInfoOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_cookies_consent_more_info__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}, "info"),
                            showCookieNotification && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_cookies_consent_notification__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}, "notification")
                        ]
                    }),
                    isTalkToUsOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShowTalkToUs, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Content, {
                        hide: isMobileNavigationOpen || isCookiesInfoOpen,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {}),
                            isOnService && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArtificialPadding, {})
                        ]
                    })
                ]
            })
        })
    }));
}
const ArtificialPadding = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-3eb66996-0"
})`
  width: 100%;
  height: 70px;
`;
const TalkToUsForm = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_12__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(3981), __webpack_require__.e(8510)]).then(__webpack_require__.bind(__webpack_require__, 8510))
, {
    loadableGenerated: {
        modules: [
            "_app.tsx -> " + "components/talk-to-us/form"
        ]
    }
});
function ShowTalkToUs() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TalkToUsForm, {}));
}
const Content = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-3eb66996-1"
})`
  ${(props)=>props.hide && "display: none;"
};
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-3eb66996-2"
})`
  ${(props)=>props.hide && "display: none;"
};
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FamilyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8933:
/***/ (() => {



/***/ }),

/***/ 2699:
/***/ ((module) => {

"use strict";
module.exports = require("@bjsdistribution/components");

/***/ }),

/***/ 3195:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ 3562:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/pro-light-svg-icons");

/***/ }),

/***/ 5403:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/pro-regular-svg-icons");

/***/ }),

/***/ 1638:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/pro-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 4146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 9034:
/***/ ((module) => {

"use strict";
module.exports = require("framer-motion");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 4780:
/***/ ((module) => {

"use strict";
module.exports = require("next/script");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1704:
/***/ ((module) => {

"use strict";
module.exports = require("react-google-recaptcha-v3");

/***/ }),

/***/ 9094:
/***/ ((module) => {

"use strict";
module.exports = require("react-lottie-player");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ 6170:
/***/ ((module) => {

"use strict";
module.exports = require("styled-breakpoints");

/***/ }),

/***/ 4097:
/***/ ((module) => {

"use strict";
module.exports = require("styled-breakpoints/react-styled");

/***/ }),

/***/ 7518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 7430:
/***/ ((module) => {

"use strict";
module.exports = import("preact-render-to-string");;

/***/ }),

/***/ 7362:
/***/ ((module) => {

"use strict";
module.exports = import("react-dom");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5675,5152,324,7729,5141,7982,9178,1683,3082,1473,1709,4812], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();