"use strict";
exports.id = 2242;
exports.ids = [2242];
exports.modules = {

/***/ 1760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ above_and_beyond)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@bjsdistribution/components"
var components_ = __webpack_require__(2699);
// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__(6170);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/word-ladder/WordLadderWithLink.tsx
var WordLadderWithLink = __webpack_require__(8777);
// EXTERNAL MODULE: ./components/word-ladder/index.tsx
var word_ladder = __webpack_require__(5141);
// EXTERNAL MODULE: ./components/about/page/AboutPage.ts
var AboutPage = __webpack_require__(9900);
// EXTERNAL MODULE: external "styled-breakpoints/react-styled"
var react_styled_ = __webpack_require__(4097);
;// CONCATENATED MODULE: ./components/util/useBreakpoints.ts


function useBreakpoints() {
    const isExtraSmall = (0,react_styled_.useBreakpoint)((0,external_styled_breakpoints_.down)("xs"));
    const isSmall = (0,react_styled_.useBreakpoint)((0,external_styled_breakpoints_.only)("sm"));
    const isMedium = (0,react_styled_.useBreakpoint)((0,external_styled_breakpoints_.down)("md"));
    const isLarge = (0,react_styled_.useBreakpoint)((0,external_styled_breakpoints_.up)("lg"));
    if (isExtraSmall) {
        return "xs";
    } else if (isSmall) {
        return "sm";
    } else if (isMedium) {
        return "md";
    } else if (isLarge) {
        return "lg";
    }
    return "lg";
}
/* harmony default export */ const util_useBreakpoints = (useBreakpoints);

// EXTERNAL MODULE: ./components/util/useWindowDimensions.ts
var useWindowDimensions = __webpack_require__(6066);
;// CONCATENATED MODULE: ./components/landing/above-and-beyond/index.tsx











function AboveAndBeyond() {
    const breakpoint = util_useBreakpoints();
    const { width  } = (0,useWindowDimensions/* default */.Z)();
    const navigateTo = (0,AboutPage/* useNavigateTo */.j)();
    const goToWhatMakesUsDifferent = ()=>{
        navigateTo("What makes BJS different");
    };
    const columns = (0,external_react_.useMemo)(()=>{
        if (breakpoint === "sm") {
            return 28;
        }
        return 43;
    }, [
        breakpoint
    ]);
    const repeat = (0,external_react_.useMemo)(()=>{
        if (width >= 2000) {
            return 6;
        }
        return 3;
    }, [
        width
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Root, {
        columns: columns,
        repeat: repeat,
        title: "What makes BJS different",
        description: "We provide the very best customer service at every stage of the delivery process, putting customers at the heart of everything we do – so that your products, reputation, customers and peace of mind really are safe in our hands.",
        type: "odd per",
        onClick: goToWhatMakesUsDifferent,
        compact: width <= 1200,
        id: "above-and-beyond-go-to-learn-more",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(OptimisedHandyMen, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                children: "Above & Beyond"
            })
        ]
    }));
}
function OptimisedHandyMen() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(HandyMenContainer, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(HandyMenMiniContainer, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                lazyBoundary: "330px",
                src: "/images/landing/handy-men.png",
                layout: "fill",
                alt: "2 BJS Home Delivery handymen equipped with drills"
            })
        })
    }));
}
const Root = external_styled_components_default()(WordLadderWithLink/* default */.Z).withConfig({
    componentId: "sc-8c85a5ca-0"
})`
  ${word_ladder/* Container */.W2} {
    ${(0,external_styled_breakpoints_.up)("lg")} {
      top: -100px;
      left: -50px;
    }
  }

  ${word_ladder/* Root */.fC} {
    ${(0,external_styled_breakpoints_.up)("lg")} {
      max-height: 768px !important;
    }

    @media only screen and (max-width: 1200px) {
      max-height: 700px !important;
    }

    ${(0,external_styled_breakpoints_.down)("md")} {
      max-height: 610px !important;
    }

    ${(0,external_styled_breakpoints_.down)("xs")} {
      max-height: 440px !important;
    }
  }
`;
const Text = external_styled_components_default().span.withConfig({
    componentId: "sc-8c85a5ca-1"
})`
  position: absolute;
  top: 20%;
  transform: rotate(-6deg);
  text-transform: uppercase;
  color: ${components_.colours.black};
  font-family: "Eveleth";
  z-index: 3;

  ${(0,external_styled_breakpoints_.up)("lg")} {
    font-size: 180px;
    white-space: nowrap;
  }

  @media only screen and (max-width: 1800px) {
    font-size: 150px;
  }

  @media only screen and (max-width: 1550px) {
    font-size: 130px;
  }

  @media only screen and (max-width: 1305px) {
    font-size: 105px;
  }

  @media only screen and (max-width: 995px) {
    font-size: 100px;
    text-align: center;
    top: 1%;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    top: 2%;
    left: unset;
    right: auto;
    text-align: center;
    font-size: 75px;
  }

  ${(0,external_styled_breakpoints_.down)("xs")} {
    font-size: 60px;
  }

  @media only screen and (max-width: 490px) {
    font-size: 60px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 40px;
  }
`;
const HandyMenContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-8c85a5ca-2"
})`
  position: absolute;
  width: 100%;
  z-index: 4;
  height: 1300px;
  width: 1070px;
  left: 75px;

  @media only screen and (max-width: 1200px) {
    left: -65px;
  }

  @media only screen and (max-width: 995px) {
    width: 100%;
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    left: auto;
    height: 1000px;
    top: 55px;
  }

  @media only screen and (max-width: 745px) {
    height: 800px;
  }

  @media only screen and (max-width: 650px) {
    height: 700px;
    top: 140px;
  }

  @media only screen and (max-width: 550px) {
    height: 615px;
  }

  @media only screen and (max-width: 870px) {
    width: 100%;
  }

  ${(0,external_styled_breakpoints_.down)("xs")} {
    // top: 60px;
    height: 500px;
  }

  @media only screen and (max-width: 416px) {
    // height: 450px; //400px
    width: 100%;
  }
`;
const HandyMenMiniContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-8c85a5ca-3"
})`
  position: relative;
  width: 100%;
  height: 100%;
`;
/* harmony default export */ const above_and_beyond = (AboveAndBeyond);


/***/ }),

/***/ 4043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ ListItem),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const List = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
    componentId: "sc-8ab594d0-0"
})`
  display: flex;
  flex-direction: column;
  list-style-position: inside;
  
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0 !important;
`;
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
    componentId: "sc-8ab594d0-1"
})`
  ::after {
    border-radius: 50%;
    height: 6px;
    width: 6px;
    top: 0.8em;
    transform: translateY(-50%);
    background: #feba30;
    content: "";
    position: absolute;
    left: 0px;
  }
  ::before {
    margin-right: 12px;
    content: "";
  }
  position: relative;
  list-style: none;
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);


/***/ })

};
;