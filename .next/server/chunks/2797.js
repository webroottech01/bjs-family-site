"use strict";
exports.id = 2797;
exports.ids = [2797];
exports.modules = {

/***/ 2617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ feedback)
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
// EXTERNAL MODULE: ./components/about/page/AboutPage.ts
var AboutPage = __webpack_require__(9900);
;// CONCATENATED MODULE: ./public/images/landing/hands-together.jpg
/* harmony default export */ const hands_together = ({"src":"/_next/static/media/hands-together.ca4a1482.jpg","height":828,"width":960,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAHAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAbEAEAAgIDAAAAAAAAAAAAAAABAAIEBREhgf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AmNhmWcpS9ionJ49RERJv/9k="});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/feedback/values-splash/index.tsx







function ValuesSplash(props) {
    const navigateTo = (0,AboutPage/* useNavigateTo */.j)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Content, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: hands_together,
                layout: "fill",
                quality: 100,
                objectFit: "cover",
                alt: "Dark image of hands together, representing unity"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                children: "Truthful and..."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(AuthenticSplash, {
                children: "Authentic"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                children: "BJS is a corporate built on compassionate values; named after Baba Jaswant Singh Ji - who remains the spiritual inspiration and guidance behind the brand after his death in 2020 – BJS has an authentic desire to make a lasting and positive impact on the world."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_.Button, {
                id: "values-splash-go-to-our-values",
                wide: true,
                colors: "secondary",
                onClick: ()=>navigateTo("our values")
                ,
                children: "Our values"
            })
        ]
    }));
}
const Title = external_styled_components_default().span.withConfig({
    componentId: "sc-7a83bf90-0"
})`
  font-size: 30px;
  font-weight: bold;
`;
const AuthenticSplash = external_styled_components_default().span.withConfig({
    componentId: "sc-7a83bf90-1"
})`
  font-size: 116px;
  font-weight: bold;
  transform: matrix(1, -0.09, 0.09, 1, 0, 0);
  font-family: "Eveleth";
  text-align: center;
  overflow: hidden;

  @media only screen and (max-width: 1910px) {
    font-size: 100px;
  }

  @media only screen and (max-width: 1710px) {
    font-size: 78px;
  }
  @media only screen and (max-width: 1575px) {
    font-size: 50px;
  }

  ${(0,external_styled_breakpoints_.only)("md")} {
    font-size: 113px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    font-size: 60px; //Might make this 60px, breaks on Galay S5
  }

  ${(0,external_styled_breakpoints_.down)("xs")} {
    font-size: 50px;
  }

  @media only screen and (max-width: 340px) {
    font-size: 30px;
  }
`;
const Text = external_styled_components_default().span.withConfig({
    componentId: "sc-7a83bf90-2"
})`
  font-size: 20px;
  text-align: center;
  font-weight: 300;
`;
const Content = external_styled_components_default().div.withConfig({
    componentId: "sc-7a83bf90-3"
})`
  display: flex;
  flex-direction: column;
  color: white;

  align-items: center;

  ${components_.Button.PlainButton} {
    margin-left: auto;
    margin-right: auto;
  }

  position: relative;

  ${Title}, ${AuthenticSplash}, ${Text}, ${components_.Button.PlainButton} {
    z-index: 5;
  }
  /* background: url("/images/landing/hands-together.png");
  background-size: cover;
  background-repeat: no-repeat;*/

  padding: 100px;


  @media only screen and (max-width: 1600px) {
    padding: 100px 140px;
  }

  @media only screen and (max-width: 1400px) {
    padding: 100px 90px;
  }

  @media only screen and (max-width: 1200px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  ${Title} {
    margin-bottom: 50px;
  }

  ${AuthenticSplash} {
    margin-bottom: 50px;
  }

  ${Text} {
    margin-bottom: 70px;
  }

  ${components_.Button.PlainButton} {
  /*  background: white;
    color: ${components_.colours.black};*/
    width: min-content;
    font-family: "Eveleth";
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    padding: 100px 40px;

    ${Title} {
      margin-bottom: 16px;
    }
    ${AuthenticSplash} {
      margin-bottom: 40px;
    }
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    padding: 189px 32px 145px 32px;
    align-items: center;

    ${Title} {
      margin-bottom: 40px;
      font-size: 26px;
    }
    ${AuthenticSplash} {
      margin-bottom: 40px;
    }
  }

  ${(0,external_styled_breakpoints_.down)("xs")} {
    background-size: auto 100%;
    background-position: center;
    padding: 100px 30px 100px 30px;
  }
`;
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-7a83bf90-4"
})`
  position: relative;
`;
/* harmony default export */ const values_splash = (external_styled_components_default()(ValuesSplash).withConfig({
    componentId: "sc-7a83bf90-5"
})``);

// EXTERNAL MODULE: ./components/feedback/what-customers-think/WhatCustomersThink.tsx + 4 modules
var what_customers_think_WhatCustomersThink = __webpack_require__(6606);
// EXTERNAL MODULE: ./components/feedback/what-customers-think/trustpilot/index.tsx + 5 modules
var trustpilot = __webpack_require__(2769);
;// CONCATENATED MODULE: ./components/feedback/what-customers-think/WhatCustomersThinkLarge.tsx




function WhatCustomersThinkExtended({ trustpilot , className  }) {
    return(/*#__PURE__*/ _jsxs(WhatCustomersThinkLarge_Container, {
        className: className,
        children: [
            /*#__PURE__*/ _jsx(WhatCustomersThink, {
                ...trustpilot,
                hideTrustPilot: true
            }),
            /*#__PURE__*/ _jsx(TrustPilotReviews, {
                ...trustpilot.average
            })
        ]
    }));
}
const WhatCustomersThinkLarge_Container = external_styled_components_default()(what_customers_think_WhatCustomersThink/* ContainerStyling */.Yl).withConfig({
    componentId: "sc-cc4ed1bf-0"
})`
  display: flex;
  justify-content: space-between;

  ${what_customers_think_WhatCustomersThink/* default */.ZP} {
    max-width: 70%;
  }
`;
/* harmony default export */ const WhatCustomersThinkLarge = ((/* unused pure expression or super */ null && (WhatCustomersThinkExtended)));

;// CONCATENATED MODULE: ./components/feedback/what-customers-think/index.tsx


/* harmony default export */ const what_customers_think = (what_customers_think_WhatCustomersThink/* default */.ZP);

// EXTERNAL MODULE: ./components/util/getClientLogo.ts
var getClientLogo = __webpack_require__(2349);
// EXTERNAL MODULE: ./components/services/case-study/blueprint/LargeQuote.tsx
var LargeQuote = __webpack_require__(6801);
;// CONCATENATED MODULE: ./components/feedback/what-clients-think/ClientTestimonial.tsx



function ClientTestimonial({ testimony , testifier , className  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ClientTestimonial_Container, {
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(LargeQuote/* default */.ZP, {
                text: testimony
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Testifier, {
                children: testifier
            })
        ]
    }));
}
const Testifier = external_styled_components_default().span.withConfig({
    componentId: "sc-c3d7efe4-0"
})`
    font-weight: 500;
    font-size: 16px;
    color: rgba(58, 54, 48, 0.65);
`;
const ClientTestimonial_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-c3d7efe4-1"
})`
  display: flex;
  flex-direction: column;

  ${LargeQuote/* QuoteMark */.UD} {
    ::before {
      color: #8d8b87;
      top: -85px;
    }
  }
  ${LargeQuote/* Text */.xv} {
    font-size: 16px;
    font-style: italic;
  }

  ${LargeQuote/* default */.ZP} {
      margin-bottom: 30px;
  }
`;
/* harmony default export */ const what_clients_think_ClientTestimonial = (external_styled_components_default()(ClientTestimonial).withConfig({
    componentId: "sc-c3d7efe4-2"
})``);

;// CONCATENATED MODULE: ./components/feedback/what-clients-think/index.tsx






function WhatClientsThink(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(what_clients_think_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(what_customers_think_WhatCustomersThink/* Header */.h4, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(what_customers_think_WhatCustomersThink/* Title */.Dx, {
                    children: "What our clients think"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(WienerBergerLogo, {
                src: (0,getClientLogo/* default */.ZP)("wienerberger"),
                layout: "fixed",
                width: 254,
                height: 82
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(what_clients_think_ClientTestimonial, {
                testimony: "We are pleased to announce our partnership with Construct IT. Whilst only in their infancy as a mechanical off-load supplier, they have shown themselves to be a reliable service provider and we believe they will be a great asset to our haulier network. We look forward to growing together in the future.",
                testifier: "Gavin Atkins, Head of Logistics at Wienerberger"
            })
        ]
    }));
}
const WienerBergerLogo = external_styled_components_default()(next_image["default"]).withConfig({
    componentId: "sc-e9e9c8fb-0"
})``;
const what_clients_think_Container = external_styled_components_default()(what_customers_think_WhatCustomersThink/* Container */.W2).withConfig({
    componentId: "sc-e9e9c8fb-1"
})`
  ${what_clients_think_ClientTestimonial} {
    margin-top: 80px;
  }

  ${what_customers_think_WhatCustomersThink/* Title */.Dx} {
      margin-bottom: 30px; //For now whilst there are no double arrows
  }
`;
/* harmony default export */ const what_clients_think = (external_styled_components_default()(WhatClientsThink).withConfig({
    componentId: "sc-e9e9c8fb-2"
})``);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/feedback/CustomerFeedback.tsx





function CustomerFeedback({ trustpilot , className  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(CustomerFeedback_Container, {
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx(FeedbackComponent, {
            trustpilot: trustpilot
        })
    }));
}
function FeedbackComponent({ trustpilot  }) {
    const router = (0,router_.useRouter)();
    const path = router.asPath;
    if (path === "/services/construct-it") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(what_clients_think, {}));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(what_customers_think, {
        ...trustpilot
    }));
}
const CustomerFeedback_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-f9a1444d-0"
})`
  min-height: 100%;
  width: 100%;
`;
/* harmony default export */ const feedback_CustomerFeedback = (external_styled_components_default()(CustomerFeedback).withConfig({
    componentId: "sc-f9a1444d-1"
})``);

;// CONCATENATED MODULE: ./components/feedback/index.tsx





function FeedbackSection({ trustpilot  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(feedback_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(feedback_CustomerFeedback, {
                trustpilot: trustpilot
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(values_splash, {})
        ]
    }));
}
const feedback_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-b68238f3-0"
})`
  display: flex;
  justify-content: center;
  ${(0,external_styled_breakpoints_.up)("lg")} {
    ${feedback_CustomerFeedback}, ${values_splash} {
      width: 50%;
    }
  }
  ${(0,external_styled_breakpoints_.down)("md")} {
    flex-direction: column;
  }
`;
/* harmony default export */ const feedback = (FeedbackSection);


/***/ }),

/***/ 8031:
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
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2699);
/* harmony import */ var _bjsdistribution_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5403);
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__);






function DoubleArrow(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
                icon: _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAngleLeft,
                onClick: props.onClickLeft
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
                icon: _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAngleRight,
                onClick: props.onClickRight
            })
        ]
    }));
}
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-d82bbe09-0"
})`
  display: flex;
  align-items: center;

  > :not(:last-child) {
    margin-right: 30px;
  }

  color: black;
`;
const Arrow = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon).withConfig({
    componentId: "sc-d82bbe09-1"
})`
  font-size: 60px !important;
  cursor: pointer;

  :hover {
    color: ${_bjsdistribution_components__WEBPACK_IMPORTED_MODULE_3__.colours.yellow};
  }

  ${(0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_2__.down)("sm")} {
    font-size: 40px;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_1___default()(DoubleArrow).withConfig({
    componentId: "sc-d82bbe09-2"
})``);


/***/ }),

/***/ 6606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W2": () => (/* binding */ WhatCustomersThink_Container),
  "Yl": () => (/* binding */ ContainerStyling),
  "h4": () => (/* binding */ Header),
  "bP": () => (/* binding */ TRUSTPILOT_DISPLAY_COUNT),
  "Dx": () => (/* binding */ WhatCustomersThink_Title),
  "ZP": () => (/* binding */ what_customers_think_WhatCustomersThink)
});

// UNUSED EXPORTS: DoubleArrow

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__(6170);
// EXTERNAL MODULE: ./components/feedback/what-customers-think/DoubleArrow.tsx
var DoubleArrow = __webpack_require__(8031);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
// EXTERNAL MODULE: external "@bjsdistribution/components"
var components_ = __webpack_require__(2699);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
;// CONCATENATED MODULE: ./public/images/feedback/trustpilot-ratings-5star.png
/* harmony default export */ const trustpilot_ratings_5star = ({"src":"/_next/static/media/trustpilot-ratings-5star.401f12d8.png","height":96,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAADFBMVEUbvogrwpAhv4sowY+aJF+WAAAAA3RSTlPm6uxaNN35AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGUlEQVQImQXBAQEAAAjDIOb7dxbMcWaq7AEAxgAVEGRuCwAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/feedback/what-customers-think/FeedbackStars.tsx




// import { faStar } from "@fortawesome/pro-solid-svg-icons";

// type Props = { stars: number };
function FeedbackStars(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Container, {
        className: props.className,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Image, {
            src: trustpilot_ratings_5star.src,
            alt: "star",
            height: 50
        })
    }));
}
const Image = external_styled_components_default().img.withConfig({
    componentId: "sc-d83aa323-0"
})`
  max-width: 100%;
  margin-bottom: 22px;
`;
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-d83aa323-1"
})`
  display: flex;
  align-items: center;
  gap: 1px;
`;
const Star = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-d83aa323-2"
})`
  font-size: 26px !important;
  color: ${components_.colours.yellow};

  @media only screen and (max-width: 1600px) {
    font-size: 30px !important;
  }
`;
/* harmony default export */ const what_customers_think_FeedbackStars = (external_styled_components_default()(FeedbackStars).withConfig({
    componentId: "sc-d83aa323-3"
})``);

;// CONCATENATED MODULE: ./components/feedback/what-customers-think/CustomerReview.tsx





function CustomerReview(props) {
    const { review , direction  } = props;
    const { title , reviewer , rating , id  } = review;
    const details = review.review;
    const navigateToEntry = ()=>window.open(`https://uk.trustpilot.com/reviews/${id}`, "_blank")
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(CustomerReview_Container, {
        ...props,
        initial: {
            opacity: 0,
            x: direction === "back" ? 40 : -40
        },
        animate: {
            opacity: 1,
            x: 0
        },
        exit: {
            opacity: 0,
            x: direction === "back" ? -40 : 40
        },
        onClick: navigateToEntry,
        // whileHover={{ color: colours.yellow }}
        layout: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(what_customers_think_FeedbackStars, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Details, {
                children: details
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Reviewer, {
                children: reviewer
            })
        ]
    }));
}
const Title = external_styled_components_default().span.withConfig({
    componentId: "sc-baf2413b-0"
})`
  font-size: 20px;
`;
const Details = external_styled_components_default().span.withConfig({
    componentId: "sc-baf2413b-1"
})`
  font-style: italic;

  @media only screen and (max-width: 1600px) {
    font-size: 14px;
    max-width: 70ch;
  }

  // ${(0,external_styled_breakpoints_.up)("lg")} {
  //   min-height: 130px;
  // }
`;
const Reviewer = external_styled_components_default().span.withConfig({
    componentId: "sc-baf2413b-2"
})`
  color: rgba(58, 54, 48, 0.65);
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
`;
const CustomerReview_Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-baf2413b-3"
})`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  cursor: pointer;

  // ${what_customers_think_FeedbackStars} {
  //   // margin-bottom: 30px;
  // }

  ${Title} {
    margin-bottom: 22px;
  }

  ${Details} {
    margin-bottom: 30px;

    ${(0,external_styled_breakpoints_.down)("md")} {
      margin-bottom: 40px;
    }
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    // ${what_customers_think_FeedbackStars} {
    //   margin-bottom: 30px;
    // }

    ${Title} {
      order: -1;
      margin-bottom: 24px;
    }
  }
`;
/* harmony default export */ const what_customers_think_CustomerReview = (external_styled_components_default()(CustomerReview).withConfig({
    componentId: "sc-baf2413b-4"
})``);

;// CONCATENATED MODULE: ./components/feedback/what-customers-think/CurrentReviewIndicator.tsx



function CurrentReviewIndicator({ selected , onSelect , className , total  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(CurrentReviewIndicator_Container, {
        className: className,
        children: Array.from({
            length: total
        }).map((_, index)=>{
            const isSelected = selected === index;
            const opacity = isSelected ? 1 : 0.25;
            return(/*#__PURE__*/ jsx_runtime_.jsx(Part, {
                onClick: ()=>onSelect(index)
                ,
                whileHover: {
                    backgroundColor: "#5c5853"
                },
                animate: {
                    backgroundColor: `rgba(92, 88, 83, ${opacity})`
                }
            }, index));
        })
    }));
}
const Part = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-52b538ff-0"
})`
  border-radius: 66px;
  height: 10px;
  width: 50px;
  border-radius: 66px;
  cursor: pointer;
`;
const CurrentReviewIndicator_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-52b538ff-1"
})`
  display: flex;
  > :not(:last-child) {
    margin-right: 10px;
  }
`;
/* harmony default export */ const what_customers_think_CurrentReviewIndicator = (external_styled_components_default()(CurrentReviewIndicator).withConfig({
    componentId: "sc-52b538ff-2"
})``);

// EXTERNAL MODULE: ./components/feedback/what-customers-think/trustpilot/index.tsx + 5 modules
var trustpilot = __webpack_require__(2769);
;// CONCATENATED MODULE: ./components/feedback/what-customers-think/WhatCustomersThink.tsx









const TRUSTPILOT_DISPLAY_COUNT = 7;
const TIMER_DURATION = 15;
function WhatCustomersThink({ className , reviews , average , hideTrustPilot  }) {
    const { 0: index , 1: setIndex  } = (0,external_react_.useState)(0);
    const direction = (0,external_react_.useRef)("forward");
    const timerStatus = (0,external_react_.useRef)("playing");
    const timer = (0,external_react_.useRef)(0);
    var ref;
    const showTrustPilot = (ref = !hideTrustPilot) !== null && ref !== void 0 ? ref : true;
    const tick = ()=>{
        const status = timerStatus.current;
        if (status === "paused") {
            return;
        }
        let newTimer = timer.current + 1;
        if (newTimer >= TIMER_DURATION) {
            goForward();
            return;
        }
        timer.current = newTimer;
    };
    (0,external_react_.useEffect)(()=>{
        const intervalId = setInterval(tick, 1000);
        return ()=>clearTimeout(intervalId)
        ;
    }, []);
    const currentReview = (0,external_react_.useMemo)(()=>{
        if (!reviews || reviews.length === 0) {
            return undefined;
        }
        return reviews[index];
    }, [
        reviews,
        index
    ]);
    const resetTimer = ()=>timer.current = 0
    ;
    const pauseTimer = ()=>timerStatus.current = "paused"
    ;
    const resumeTimer = ()=>timerStatus.current = "playing"
    ;
    const goBack = ()=>{
        direction.current = "back";
        resetTimer();
        setIndex((old)=>{
            let newIndex = old - 1;
            if (newIndex < 0) {
                newIndex = reviews.length - 1;
            }
            return newIndex;
        });
    };
    const goForward = ()=>{
        direction.current = "forward";
        resetTimer();
        setIndex((old)=>{
            let newIndex = old + 1;
            if (newIndex > reviews.length - 1) {
                newIndex = 0;
            }
            return newIndex;
        });
    };
    /* if (1 === 1) {
    return (
      <Container className={props.className}>
        <TrustPilotWidget />
      </Container>
    );
  }*/ return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(WhatCustomersThink_Container, {
        className: className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Header, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(WhatCustomersThink_Title, {
                        children: "What our customer's think"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DoubleArrow/* default */.Z, {
                        onClickLeft: goBack,
                        onClickRight: goForward
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
                exitBeforeEnter: true,
                children: currentReview && /*#__PURE__*/ jsx_runtime_.jsx(what_customers_think_CustomerReview, {
                    review: currentReview,
                    direction: direction.current,
                    onMouseEnter: pauseTimer,
                    onMouseLeave: resumeTimer
                }, currentReview.title)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(what_customers_think_CurrentReviewIndicator, {
                selected: index,
                onSelect: (number)=>setIndex(number)
                ,
                total: TRUSTPILOT_DISPLAY_COUNT
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(trustpilot/* default */.Z, {
                total: average.total,
                trustScore: average.trustScore,
                starRating: average.starRating
            })
        ]
    }));
}
const WhatCustomersThink_Title = external_styled_components_default().h3.withConfig({
    componentId: "sc-8c2a9fdd-0"
})`
  font-family: "Eveleth";
  font-size: 22px;
  margin:0px;

  ${(0,external_styled_breakpoints_.down)("sm")} {
    font-size: 21px;
  }
`;
const Header = external_styled_components_default().div.withConfig({
    componentId: "sc-8c2a9fdd-1"
})`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${DoubleArrow/* default */.Z} {
    font-size: 35px !important;
    color: #8d8b87;
  }

  position: relative;
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: -9px;
    height: 1px;
    background: rgba(58, 54, 48, 0.15);
  }
`;
const ContainerStyling = external_styled_components_default().div.withConfig({
    componentId: "sc-8c2a9fdd-2"
})`
  background: transparent linear-gradient(360deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;
  padding: 90px 100px;

  @media only screen and (max-width: 1600px) {
    padding: 100px 60px;
  }

  @media only screen and (max-width: 1400px) {
    padding: 80px 40px;
  }
`;
const WhatCustomersThink_Container = external_styled_components_default()(ContainerStyling).withConfig({
    componentId: "sc-8c2a9fdd-3"
})`
  display: flex;
  flex-direction: column;
  min-height: 100%;

  ${trustpilot/* default */.Z} {
    margin-top: 75px;
  }

  ${Header} {
    margin-bottom: 70px;
  }

  ${what_customers_think_CustomerReview} {
    margin-bottom: 60px;
  }

  ${(0,external_styled_breakpoints_.only)("md")} {
    padding: 42px 40px;
    ${Header} {
      margin-bottom: 40px;
    }
    ${what_customers_think_CustomerReview} {
      margin-bottom: 30px;
    }
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    padding: 65px 20px;

    ${what_customers_think_CustomerReview} {
      margin-bottom: 60px;
    }

    ${Header} {
      margin-bottom: 50px;
    }
  }
`;

/* harmony default export */ const what_customers_think_WhatCustomersThink = (external_styled_components_default()(WhatCustomersThink).withConfig({
    componentId: "sc-8c2a9fdd-4"
})``);


/***/ }),

/***/ 2769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ trustpilot)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__(6170);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/images/feedback/trustpilot-logo-new.svg
/* harmony default export */ const trustpilot_logo_new = ({"src":"/_next/static/media/trustpilot-logo-new.992686f2.svg","height":63,"width":257});
;// CONCATENATED MODULE: ./public/images/feedback/trustpilot-star-white.png
/* harmony default export */ const trustpilot_star_white = ({"src":"/_next/static/media/trustpilot-star-white.48356104.png","height":951,"width":1000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAALVBMVEVMaXH///////////////////////////////////////////////////////9xAJ22AAAAD3RSTlMAM/4HoUTgw6pYWiOPbs6jpDk5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAANElEQVQImR3KtxHAMBDEQNy9IWX7L1fzQoBoIVARTHfOdVZ3HeJatr0EpP385O3cg5URW3wVMwC2otAwwQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/feedback/what-customers-think/trustpilot/utils.ts
const createStarRatingArray = (input)=>{
    let arr = [];
    for(let i = 0; i < 5; i++){
        if (input >= i + 1) {
            arr.push(1);
        } else if (input > i) {
            arr.push(input - i);
        } else {
            arr.push(0);
        }
    }
    return arr;
};

;// CONCATENATED MODULE: ./components/feedback/what-customers-think/trustpilot/StarRating.tsx





function StarRating(props) {
    const ratingArr = createStarRatingArray(props.rating);
    return(/*#__PURE__*/ jsx_runtime_.jsx(Container, {
        className: props.className,
        children: [
            ...Array(5).keys()
        ].map((index)=>/*#__PURE__*/ jsx_runtime_.jsx(Star, {
                rating: ratingArr[index]
            }, index)
        )
    }));
}
function Star(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoxContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Box, {
                style: {
                    width: `${props.rating * 100}%`
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Image, {
                src: trustpilot_star_white.src,
                alt: "star",
                height: 50,
                width: 50
            })
        ]
    }));
}
const Image = external_styled_components_default().img.withConfig({
    componentId: "sc-52a5fb97-0"
})`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;
const BoxContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-52a5fb97-1"
})`
  height: 75px;
  width: 75px;
  position: relative;
  background: #dcdce6;
`;
const Box = external_styled_components_default().div.withConfig({
    componentId: "sc-52a5fb97-2"
})`
  height: 75px;
  width: 40px;
  background: #00b67a;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  /*
  ${(0,external_styled_breakpoints_.only)("md")} {
    height: 25px;
    width: 25px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    height: 40px;
  }*/
`;
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-52a5fb97-3"
})`
  display: flex;
  gap: 7px;

  // > :not(:last-child) {
  //   margin-right: 10px;
  // }
`;
/* harmony default export */ const trustpilot_StarRating = (external_styled_components_default()(StarRating).withConfig({
    componentId: "sc-52a5fb97-4"
})``);

;// CONCATENATED MODULE: ./components/feedback/what-customers-think/trustpilot/AverageReviewSection.tsx




function AverageReviewSection({ score , rating , className  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(AverageReviewSection_Container, {
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx(trustpilot_StarRating, {
            rating: rating
        })
    }));
}
const TextContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-7d0f596-0"
})`
  display: flex;

  > :not(:last-child) {
    margin-right: 20px;
  }
  align-items: center;

  @media only screen and (max-width: 1125px) {
    flex-direction: column;

    > :not(:last-child) {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }
`;
const Conclusion = external_styled_components_default().span.withConfig({
    componentId: "sc-7d0f596-1"
})`
  font-size: 16px;
  font-family: "Eveleth";
`;
const Average = external_styled_components_default().span.withConfig({
    componentId: "sc-7d0f596-2"
})`
  font-size: 16px;
`;
const AverageReviewSection_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-7d0f596-3"
})`
  display: flex;
  align-items: center;

  > :not(:last-child) {
    margin-right: 20px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    flex-direction: column;
    > :not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media only screen and (max-width: 400px) {
    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 20px;
    }
  }
`;
/* harmony default export */ const trustpilot_AverageReviewSection = (external_styled_components_default()(AverageReviewSection).withConfig({
    componentId: "sc-7d0f596-4"
})``);

;// CONCATENATED MODULE: ./components/feedback/what-customers-think/trustpilot/index.tsx




// import trustPilotLogo from "public/images/feedback/trustpilot-logo.png";


function TrustPilotReviews({ className , total , trustScore , starRating  }) {
    const navigateToTrustpilot = ()=>window.open("https://uk.trustpilot.com/review/bjshomedelivery.com", "_blank")
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(trustpilot_Container, {
        className: className,
        onClick: navigateToTrustpilot,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                src: trustpilot_logo_new,
                width: 265,
                height: 60,
                layout: "fixed"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(trustpilot_AverageReviewSection, {
                score: trustScore,
                rating: starRating
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ReviewText, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TrustScore, {
                        children: [
                            "TrustScore ",
                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                children: trustScore
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Separator, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(ReviewsScore, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                            children: Number(total).toLocaleString()
                        })
                    }),
                    " ",
                    "reviews"
                ]
            })
        ]
    }));
}
const ReviewsScore = external_styled_components_default().span.withConfig({
    componentId: "sc-bd63b099-0"
})`
  margin-right: 10px;
`;
const Separator = external_styled_components_default().span.withConfig({
    componentId: "sc-bd63b099-1"
})`
  display: inline-block;
  height: 30px;
  width: 2px;
  background: #000032;
  margin-left: 10px;
  margin-right: 15px;
`;
const TrustScore = external_styled_components_default().span.withConfig({
    componentId: "sc-bd63b099-2"
})``;
const Reviews = external_styled_components_default().span.withConfig({
    componentId: "sc-bd63b099-3"
})``;
const Logo = external_styled_components_default()(next_image["default"]).withConfig({
    componentId: "sc-bd63b099-4"
})``;
const ReviewText = external_styled_components_default().div.withConfig({
    componentId: "sc-bd63b099-5"
})`
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;
const trustpilot_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-bd63b099-6"
})`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-top: 30px;
  gap: 25px;

  // ${trustpilot_AverageReviewSection} {
  //   margin-top: 35px;
  //   margin-bottom: 30px;

  //   ${(0,external_styled_breakpoints_.down)("sm")} {
  //     margin-bottom: 43px;
  //   }
  // }
`;
/* harmony default export */ const trustpilot = (external_styled_components_default()(TrustPilotReviews).withConfig({
    componentId: "sc-bd63b099-7"
})``);


/***/ }),

/***/ 9829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ subsidiary_showcase_SubsidiaryBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__(6170);
// EXTERNAL MODULE: ./components/subsidiary-showcase/grid/SubsidiaryGrid.tsx + 1 modules
var SubsidiaryGrid = __webpack_require__(9836);
// EXTERNAL MODULE: ./components/talk-to-us/button/index.tsx
var talk_to_us_button = __webpack_require__(3082);
// EXTERNAL MODULE: external "@bjsdistribution/components"
var components_ = __webpack_require__(2699);
;// CONCATENATED MODULE: ./components/subsidiary-showcase/notice/Notice.tsx



function Notice(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                children: props.text
            }),
            props.children
        ]
    }));
}
const Text = external_styled_components_default().span.withConfig({
    componentId: "sc-36bb5ae-0"
})`
  font-size: 14px;

  color: #695f50;
  letter-spacing: -0.28px;
  white-space: nowrap;
`;
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-36bb5ae-1"
})`
  display: flex;

  > :not(:last-child) {
    margin-right: 20px;
  }
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: transparent
    linear-gradient(
      270deg,
      rgba(204, 204, 204, 0.2) 0%,
      rgba(226, 224, 221, 0.2) 100%
    )
    0% 0% no-repeat padding-box;

  ${components_.Button.PlainButton} {
    padding: 17px 40px;
    font-family: "Eveleth";
  }
`;

/* harmony default export */ const notice_Notice = (external_styled_components_default()(Notice).withConfig({
    componentId: "sc-36bb5ae-2"
})``);

;// CONCATENATED MODULE: ./components/subsidiary-showcase/notice/TalkToUsWithNotice.tsx




function TalkToUsWithNotice(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(TalkToUsWithNotice_Container, {
        text: "Ready to get in touch?",
        className: props.className,
        children: /*#__PURE__*/ jsx_runtime_.jsx(talk_to_us_button/* default */.Z, {})
    }));
}
const TalkToUsWithNotice_Container = external_styled_components_default()(notice_Notice).withConfig({
    componentId: "sc-fd174298-0"
})`
  background: transparent linear-gradient(270deg, #cccccc 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;

  ${Text} {
    color: #695f50;
  }
`;
/* harmony default export */ const notice_TalkToUsWithNotice = (external_styled_components_default()(TalkToUsWithNotice).withConfig({
    componentId: "sc-fd174298-1"
})``);

// EXTERNAL MODULE: ./components/subsidiary-showcase/notice/useNavigateToTracker.ts
var useNavigateToTracker = __webpack_require__(9673);
;// CONCATENATED MODULE: ./components/subsidiary-showcase/notice/TrackOrderWithNotice.tsx






function TrackOrderWithNotice(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(TrackOrderWithNotice_Container, {
        text: "Looking to track your order?",
        className: props.className,
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_.Button, {
            id: "subsidiary-showcase-go-to-track-order",
            colors: "dark",
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: useNavigateToTracker/* orderTrackingUri */.d,
                target: "_blank",
                children: "Track order"
            })
        })
    }));
}
const TrackOrderWithNotice_Container = external_styled_components_default()(notice_Notice).withConfig({
    componentId: "sc-95a6b1e3-0"
})`
  ${components_.Button.PlainButton} {
    a {
      text-decoration: none;
      color: white;
    }
    ${(0,external_styled_breakpoints_.down)("sm")} {
      font-size: 12px;
      padding: 10px 15px;
    }
  }
`;
/* harmony default export */ const notice_TrackOrderWithNotice = (external_styled_components_default()(TrackOrderWithNotice).withConfig({
    componentId: "sc-95a6b1e3-1"
})``);

;// CONCATENATED MODULE: ./components/subsidiary-showcase/notice/index.tsx



// EXTERNAL MODULE: ./components/util/useIsMobile.tsx
var useIsMobile = __webpack_require__(6658);
;// CONCATENATED MODULE: ./components/subsidiary-showcase/SubsidiaryBar.tsx






function SubsidiaryBar(props) {
    const isMobile = (0,useIsMobile/* default */.Z)();
    let right = props.right === "track order" ? /*#__PURE__*/ jsx_runtime_.jsx(notice_TrackOrderWithNotice, {}) : /*#__PURE__*/ jsx_runtime_.jsx(notice_TalkToUsWithNotice, {});
    // if (isMobile) {
    //   right = undefined;
    // }
    return(/*#__PURE__*/ jsx_runtime_.jsx(Root, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SubsidiaryBar_Container, {
            className: props.className,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(SubsidiaryGrid/* default */.Z, {}),
                right
            ]
        })
    }));
}
const Root = external_styled_components_default().div.withConfig({
    componentId: "sc-5b7f704e-0"
})`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const SubsidiaryBar_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-5b7f704e-1"
})`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #cccccc;

  overflow-x: scroll;
  //  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  box-shadow: 0px 3px 20px #00000014;

  ${(0,external_styled_breakpoints_.only)("md")} {
    max-height: 112px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    height: 90px;
  }
`;
/* harmony default export */ const subsidiary_showcase_SubsidiaryBar = (external_styled_components_default()(SubsidiaryBar).withConfig({
    componentId: "sc-5b7f704e-2"
})``);


/***/ }),

/***/ 239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kk": () => (/* binding */ SubsidiaryProvider),
/* harmony export */   "Lp": () => (/* binding */ useSelectedSubsidiary),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export useSetSelectedSubsidiary */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    selected: "home delivery",
    setSelected: (old)=>old
});
function SubsidiaryProvider(props) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Context.Provider, {
        value: {
            selected: props.selected,
            setSelected: props.setSelected
        },
        children: props.children
    }));
}
function useSelectedSubsidiary() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context).selected;
}
function useSetSelectedSubsidiary() {
    return useContext(Context).setSelected;
}
function useSubsidiary() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context);
    return [
        context.selected,
        context.setSelected
    ];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSubsidiary);


/***/ }),

/***/ 9458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HQ": () => (/* binding */ SelectedIndicator),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Placeholder */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SubsidiaryContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(239);
/* harmony import */ var subsidiary_config_construct_it_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7729);





function SubsidiaryElement(props) {
    const [selected, setSelected] = (0,_SubsidiaryContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)();
    const isSelected = selected === props.name;
    const setAsSelected = ()=>{
        setSelected(props.name);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        onClick: setAsSelected,
        className: props.className,
        children: [
            isSelected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SelectedIndicator, {
                layoutId: "border",
                animate: {
                    background: selected === "constructit" ? subsidiary_config_construct_it_config__WEBPACK_IMPORTED_MODULE_4__/* ["default"].primaryColour */ .Z.primaryColour : "#ffc805"
                }
            }),
            !isSelected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Placeholder, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LogoContainer, {
                className: props.className,
                children: props.children
            })
        ]
    }));
}
const SelectedIndicator = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div).withConfig({
    componentId: "sc-57ed251a-0"
})`
  min-height: 4px;
  width: 100%;
  min-width: 100%;
  //text-alignborder-radius: 0px 0px 66px 66px;
  top: 0px !important;
  z-index: 5;

  overflow: visible;
`;
const Placeholder = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-57ed251a-1"
})`
  min-height: 4px;
  width: 100%;
  content: "";
  background: transparent;
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div).withConfig({
    componentId: "sc-57ed251a-2"
})`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: visible;
`;
const LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-57ed251a-3"
})`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_1___default()(SubsidiaryElement).withConfig({
    componentId: "sc-57ed251a-4"
})``);


/***/ }),

/***/ 9836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ grid_SubsidiaryGrid)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__(6170);
;// CONCATENATED MODULE: ./components/subsidiary-showcase/grid/SubsidiaryGridContainer.tsx



const SeperatorStyling = external_styled_components_.css`
  position: absolute;
  right: 0px;
  margin: 0 auto;
  height: 50%;
  top: 25%;
  width: 1px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: RGBA(0, 0, 0, 0.2);

  content: "";
`;
const Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-3baecc4-0"
})`
  display: grid;
  grid-template-columns: repeat(4, 300px);

  ${(0,external_styled_breakpoints_.only)("md")} {
    grid-template-columns: repeat(4, 248px);
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    grid-template-columns: repeat(4, 190px);
  }

  box-sizing: border-box;
  cursor: pointer;
//  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  > div {
    position: relative;
    ::after {
      ${SeperatorStyling};
    }
  }
`;
/* harmony default export */ const SubsidiaryGridContainer = (Container);

// EXTERNAL MODULE: ./components/subsidiary-showcase/grid/SubsidiaryElement.tsx
var SubsidiaryElement = __webpack_require__(9458);
;// CONCATENATED MODULE: ./components/subsidiary-showcase/grid/SubsidiaryGrid.tsx






function SubsidiaryGrid(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.AnimateSharedLayout, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SubsidiaryGridContainer, {
            className: props.className,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(HomeDelivery, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(BjsExtra, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(BjsHaulage, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(ConstructIT, {})
            ]
        })
    }));
}
function HomeDelivery(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(SubsidiaryElement/* default */.ZP, {
        name: "home delivery",
        className: props.className,
        children: /*#__PURE__*/ jsx_runtime_.jsx(HomeDeliveryContainer, {
            alt: "BJS Home Delivery logo",
            src: "/images/logos/homedelivery.svg"
        })
    }));
}
const HomeDeliveryContainer = external_styled_components_default().img.withConfig({
    componentId: "sc-1f284c58-0"
})`
  position: relative;

  height: 50px;
`;
function BjsExtra(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(SubsidiaryElement/* default */.ZP, {
        name: "extra",
        className: props.className,
        children: /*#__PURE__*/ jsx_runtime_.jsx(ExtraContainer, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: "/images/logos/extra.svg",
                alt: "BJS Extra logo",
                layout: "fill"
            })
        })
    }));
}
const ExtraContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-1f284c58-1"
})`
  position: relative;
  width: 100%;
  height: 52px;
`;
function BjsHaulage(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(SubsidiaryElement/* default */.ZP, {
        name: "haulage",
        className: props.className,
        children: /*#__PURE__*/ jsx_runtime_.jsx(HaulageContainer, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                src: "/images/logos/haulage.svg",
                alt: "BJS Haulage logo",
                layout: "fill"
            })
        })
    }));
}
const HaulageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-1f284c58-2"
})`
  position: relative;

  height: 48px;
  width: 70px;
`;
function ConstructIT(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(SubsidiaryElement/* default */.ZP, {
        name: "constructit",
        className: props.className,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
            src: "/images/logos/constructit.svg",
            alt: "ConstructIT logo",
            height: 40,
            width: 140
        })
    }));
}
const Logo = external_styled_components_default()(next_image["default"]).withConfig({
    componentId: "sc-1f284c58-3"
})`
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
`;
/* harmony default export */ const grid_SubsidiaryGrid = (external_styled_components_default()(SubsidiaryGrid).withConfig({
    componentId: "sc-1f284c58-4"
})``);


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


/***/ }),

/***/ 7670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ util_getTrustpilotProps)
});

// EXTERNAL MODULE: ./components/feedback/what-customers-think/WhatCustomersThink.tsx + 4 modules
var WhatCustomersThink = __webpack_require__(6606);
;// CONCATENATED MODULE: ./components/feedback/what-customers-think/fetchReviews.ts

const accessTokenUrl = "https://api.trustpilot.com/v1/oauth/oauth-business-users-for-applications/accesstoken";
const apiKey = "KzK63W3wEZA3TxqFTH2GZkya84O7gxAF";
const apiSecret = "sqb9U3oATsQk1nb3";
const businessUnitId = "5742cf130000ff00058d3d26";
async function getAccessToken() {
    const body = {
        grant_type: "password",
        username: process.env.TRUSTPILOT_USERNAME,
        password: process.env.TRUSTPILOT_PASSWORD
    };
    const encodedKeyAndSecret = btoa(`${apiKey}:${apiSecret}`);
    const response = await fetch(accessTokenUrl, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${encodedKeyAndSecret}`
        },
        body: new URLSearchParams(body),
        method: "POST"
    });
    const json = await response.json();
    return json.access_token;
}
async function fetchReviews() {
    const headers = {
        apikey: apiKey
    };
    const reviewsResponse = await fetch(`https://api.trustpilot.com/v1/business-units/${businessUnitId}/reviews?stars=5`, {
        headers
    });
    const json = await reviewsResponse.json();
    const reviewsJson = await json.reviews;
    const averageResponse = await fetch(`https://api.trustpilot.com/v1/business-units/${businessUnitId}`, {
        headers
    });
    const averageJson = await averageResponse.json();
    const average = {
        total: averageJson.numberOfReviews.total,
        trustScore: averageJson.score.trustScore,
        starRating: averageJson.score.stars
    };
    const allReviews = reviewsJson.map(mapReview).slice(0, WhatCustomersThink/* TRUSTPILOT_DISPLAY_COUNT */.bP);
    return {
        reviews: allReviews,
        average
    };
}
const mapReview = (input)=>{
    return {
        reviewer: input.consumer.displayName,
        review: input.text,
        rating: input.stars,
        title: input.title,
        id: input.id
    };
};
/* harmony default export */ const what_customers_think_fetchReviews = (fetchReviews);

;// CONCATENATED MODULE: ./components/util/getTrustpilotProps.ts

async function getTrustpilotProps() {
    const trustpilot = await what_customers_think_fetchReviews();
    return {
        // revalidate: 60 * 5, //5 minutes () now we are using on demand revalidation
        props: {
            trustpilot
        }
    };
}
/* harmony default export */ const util_getTrustpilotProps = (getTrustpilotProps);


/***/ })

};
;