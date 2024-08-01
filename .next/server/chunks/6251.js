"use strict";
exports.id = 6251;
exports.ids = [6251];
exports.modules = {

/***/ 6251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ component)
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
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/pro-light-svg-icons"
var pro_light_svg_icons_ = __webpack_require__(3562);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
;// CONCATENATED MODULE: ./components/landing/track-your-order/useOrderTrackPreferences.ts

const visibleState = (0,external_recoil_.atom)({
    key: "order_track_visible",
    default: true
});
function useTrackOrderPreferences() {
    return useRecoilState(visibleState);
}
function useTrackOrderVisible() {
    return (0,external_recoil_.useRecoilValue)(visibleState);
}
function useSetTrackOrderVisible() {
    return (0,external_recoil_.useSetRecoilState)(visibleState);
}


;// CONCATENATED MODULE: ./components/landing/track-your-order/component/Close.tsx






function Close(props) {
    const setVisible = useSetTrackOrderVisible();
    const hide = ()=>setVisible(false)
    ;
    return(/*#__PURE__*/ jsx_runtime_.jsx(Icon, {
        className: props.className,
        icon: pro_light_svg_icons_.faTimes,
        onClick: hide
    }));
}
const Icon = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-e3df3950-0"
})`
  color: #e0dfdf;
  font-size: 26px !important;
  cursor: pointer;

  :hover {
    color: ${components_.colours.yellow};
  }
`;
/* harmony default export */ const component_Close = (external_styled_components_default()(Close).withConfig({
    componentId: "sc-e3df3950-1"
})``);

// EXTERNAL MODULE: ./components/util/useIsMobile.tsx
var useIsMobile = __webpack_require__(6658);
;// CONCATENATED MODULE: ./components/landing/track-your-order/component/TrackYourOrderText.tsx




const orderTrackingUri = "https://track.bjshomedelivery.com";
function TrackYourOrderText(props) {
    const isMobile = (0,useIsMobile/* default */.Z)();
    if (isMobile) {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Text, {
            children: [
                "Looking to ",
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: orderTrackingUri,
                    target: "_blank",
                    children: "Track Your Order?"
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Text, {
        className: props.className,
        children: [
            "Looking to track your order? Head over to our",
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: orderTrackingUri,
                target: "_blank",
                children: "Tracking Service"
            })
        ]
    }));
}
const Text = external_styled_components_default().span.withConfig({
    componentId: "sc-5ba336f8-0"
})`
  color: white;
  transition: color 0.3s;
  a {
    color: white;
    text-decoration: underline;
  }

  ${(0,external_styled_breakpoints_.up)("md")} {
    font-size: 16px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    font-size: 14px;
    white-space: nowrap;
  }
`;
/* harmony default export */ const component_TrackYourOrderText = (external_styled_components_default()(TrackYourOrderText).withConfig({
    componentId: "sc-5ba336f8-1"
})``);

// EXTERNAL MODULE: ./components/subsidiary-showcase/notice/useNavigateToTracker.ts
var useNavigateToTracker = __webpack_require__(9673);
;// CONCATENATED MODULE: ./public/images/landing/track-your-order/van.png
/* harmony default export */ const van = ({"src":"/_next/static/media/van.7fbb758b.png","height":258,"width":471,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAASFBMVEUAGRNXWVqSlZZiY2Sms7WcrbiMjo6lqqx8fn+qt7eBiYkTFBYODxFFRkckJiiQlpb///+ktryJnaeeoaRUVliRqbOBgoNpcnPgKMnvAAAAEXRSTlMEt/DR1L9m+8HqpLHl5Oq/FWJJRAgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAsSURBVAiZY2Bg4Gdi52RhZRDgEhcRFhQUZOAVERNmFxUSYuDm4WPm4GBkAwAZ9wF/2KohgAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/images/landing/track-your-order/icon.svg
/* harmony default export */ const icon = ({"src":"/_next/static/media/icon.41960598.svg","height":43,"width":39});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
;// CONCATENATED MODULE: ./components/landing/track-your-order/component/OrderIllustration.tsx







const height = 38.77;
const width = 70.83;
const Lottie = (0,dynamic["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9094, 23))
, {
    loadableGenerated: {
        modules: [
            "..\\components\\landing\\track-your-order\\component\\OrderIllustration.tsx -> " + "react-lottie-player"
        ]
    }
});
function OrderIllustration({ className  }) {
    const { 0: animationData , 1: setAnimationData  } = (0,external_react_.useState)();
    const fetchAndSet = async ()=>{
        const result = await fetch("https://assets2.lottiefiles.com/packages/lf20_0x2ezbaj.json");
        const json = await result.json();
        setAnimationData(json);
    };
    (0,external_react_.useEffect)(()=>{
        fetchAndSet();
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        className: className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(IconContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Lottie, {
                        loop: true,
                        animationData: animationData,
                        play: true,
                        style: {
                            position: "absolute",
                            top: "-6px",
                            left: "-3px"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(OrderIllustration_Icon, {
                        src: icon.src
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(VanContainer, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(VanImage, {
                    src: van,
                    width: width,
                    height: height,
                    layout: "fixed",
                    placeholder: "blur"
                })
            })
        ]
    }));
}
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-7a3e07a6-0"
})`
  display: flex;
  min-width: 70px;
  max-height: 39px;
  max-width: 70px;
  position: relative;

`;
const IconContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-7a3e07a6-1"
})`
  display: flex;
  position: relative;
  z-index: 0;
  left: -10px;
  top: -5px;
`;
const OrderIllustration_Icon = external_styled_components_default().img.withConfig({
    componentId: "sc-7a3e07a6-2"
})``;
const VanContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-7a3e07a6-3"
})`position:absolute;P`;
const VanImage = external_styled_components_default()(next_image["default"]).withConfig({
    componentId: "sc-7a3e07a6-4"
})`
  position: absolute;
`;
/* harmony default export */ const component_OrderIllustration = (external_styled_components_default()(OrderIllustration).withConfig({
    componentId: "sc-7a3e07a6-5"
})``);

;// CONCATENATED MODULE: ./components/landing/track-your-order/component/OrderBody.tsx







function OrderBody(props) {
    const navigateToTracker = (0,useNavigateToTracker/* default */.Z)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(OrderBody_Container, {
        className: props.className,
        onClick: navigateToTracker,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(component_OrderIllustration, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(component_TrackYourOrderText, {})
        ]
    }));
}
const OrderBody_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-fa22d10a-0"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${(0,external_styled_breakpoints_.down)("xs")} {
    ${component_OrderIllustration} {
      display: none;
    }
  }

  > :not(:last-child) {
    margin-right: 14.5px;
  }

  :hover {
    ${component_TrackYourOrderText} {
      a {
        color: ${components_.colours.yellow};
      }
    }
  }
`;
/* harmony default export */ const component_OrderBody = (external_styled_components_default()(OrderBody).withConfig({
    componentId: "sc-fa22d10a-1"
})``);

;// CONCATENATED MODULE: ./components/landing/track-your-order/component/Container.ts




const Container_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-ad3dc7a2-0"
})`
  display: grid;
  grid-template-columns: auto auto;
  background: #5f5d5b;
  align-items: center;

  padding: 13px 40px 8px 0px;

  ${(0,external_styled_breakpoints_.down)("md")} {
    padding-right: 40px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    padding-left: 20px;
    padding-right: 20px;
  }

  ${(0,external_styled_breakpoints_.down)("xs")} {
  }

  ${component_OrderBody}, ${component_Close} {
    justify-self: right;
  }
`;
/* harmony default export */ const component_Container = (Container_Container);

;// CONCATENATED MODULE: ./components/landing/track-your-order/component/index.tsx





function TrackYourOrder() {
    const isTrackOrderVisible = useTrackOrderVisible();
    if (!isTrackOrderVisible) {
        return null;
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(component_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(component_OrderBody, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(component_Close, {})
        ]
    }));
}
/* harmony default export */ const component = (TrackYourOrder);


/***/ }),

/***/ 9673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ orderTrackingUri),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const orderTrackingUri = "https://track.bjshomedelivery.com";
if (!orderTrackingUri) {
    throw new Error(`Cannot find order tracking URI`);
}
function useNavigateToTracker() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const navigateToTracker = ()=>router.push(orderTrackingUri)
    ;
    return navigateToTracker;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useNavigateToTracker);


/***/ })

};
;