"use strict";
exports.id = 1481;
exports.ids = [1481];
exports.modules = {

/***/ 9900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ allPages),
/* harmony export */   "j": () => (/* binding */ useNavigateTo)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const allPages = [
    "our values",
    "Our technology",
    "What makes BJS different",
    "Training academy",
    "Charity and community",
    "our story", 
];
function useNavigateTo() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const navigateTo = (input)=>{
        const name = input.replaceAll(" ", "-").replace("&", "and").toLowerCase();
        router.push(`/about/${name}`);
    };
    return navigateTo;
}



/***/ }),

/***/ 1481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mn": () => (/* binding */ FirstElement),
  "Dx": () => (/* binding */ page_Title),
  "ZP": () => (/* binding */ page)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__(6170);
// EXTERNAL MODULE: external "@bjsdistribution/components"
var components_ = __webpack_require__(2699);
// EXTERNAL MODULE: ./components/about/page/AboutPage.ts
var AboutPage = __webpack_require__(9900);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/pro-regular-svg-icons"
var pro_regular_svg_icons_ = __webpack_require__(5403);
;// CONCATENATED MODULE: ./components/about/page/navigation/NavigationButton.tsx






function NavigationButton(props) {
    const { direction , page , id  } = props;
    const navigateTo = (0,AboutPage/* useNavigateTo */.j)();
    const aboutPageId = id.replace(/ /g, "-").toLowerCase();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavButton, {
        id: "navigation-go-to-desktop-navigation-" + aboutPageId,
        onClick: ()=>navigateTo(page)
        ,
        children: [
            direction === "left" && /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                direction: "left",
                icon: pro_regular_svg_icons_.faChevronLeft
            }),
            props.page,
            direction === "right" && /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                direction: "right",
                icon: pro_regular_svg_icons_.faChevronRight
            })
        ]
    }));
}
const NavButton = external_styled_components_default()(components_.Button).withConfig({
    componentId: "sc-7bb44427-0"
})`
  padding: 13px 24px;
  font-size: 16px;
  font-weight: unset;
  border: 1px solid #a7a6a4;
  background: rgba(255, 255, 255, 0.4);
  color: ${components_.colours.black};
  text-transform: capitalize;
  font-family: "Gotham SSm A", "Gotham SSm B";
`;
const Icon = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-7bb44427-1"
})`
  ${(props)=>props.direction === "left" && "margin-right: 15px;"
};
  ${(props)=>props.direction === "right" && "margin-left: 15px;"
};
`;
/* harmony default export */ const navigation_NavigationButton = (external_styled_components_default()(NavigationButton).withConfig({
    componentId: "sc-7bb44427-2"
})``);

;// CONCATENATED MODULE: ./components/about/page/navigation/pages.ts
const pages = [
    "our values",
    "Our technology",
    "What makes BJS different",
    "Training academy",
    "Charity and community",
    "our story", 
];
const getSiblings = (current)=>{
    const index = pages.indexOf(current);
    return [
        pages[index - 1],
        pages[index + 1]
    ];
};
/* harmony default export */ const navigation_pages = ((/* unused pure expression or super */ null && (pages)));

;// CONCATENATED MODULE: ./components/about/page/navigation/DesktopNavigation.tsx




function DesktopNavigation(props) {
    const [left, right] = getSiblings(props.page);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        className: props.className,
        children: [
            left && /*#__PURE__*/ jsx_runtime_.jsx(navigation_NavigationButton, {
                direction: "left",
                page: left,
                id: left
            }),
            !left && /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                children: props.page
            }),
            right && /*#__PURE__*/ jsx_runtime_.jsx(navigation_NavigationButton, {
                direction: "right",
                page: right,
                id: right
            }),
            !right && /*#__PURE__*/ jsx_runtime_.jsx("div", {})
        ]
    }));
}
const Title = external_styled_components_default().h1.withConfig({
    componentId: "sc-f98cfa14-0"
})`
  font-family: "Eveleth";
  font-size: 44px;
  white-space: nowrap;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin:0px;
  @media only screen and (min-width: 992px) and (max-width: 1300px) {
    font-size: 22px;
  }
`;
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-f98cfa14-1"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
/* harmony default export */ const navigation_DesktopNavigation = (external_styled_components_default()(DesktopNavigation).withConfig({
    componentId: "sc-f98cfa14-2"
})``);

// EXTERNAL MODULE: ./components/util/useIsTabletOrSmaller.tsx
var useIsTabletOrSmaller = __webpack_require__(3176);
// EXTERNAL MODULE: ./components/util/useIsMobile.tsx
var useIsMobile = __webpack_require__(6658);
;// CONCATENATED MODULE: ./components/about/page/navigation/TabletNavigation.tsx








function TabletNavigation(props) {
    const navigateTo = (0,AboutPage/* useNavigateTo */.j)();
    const isMobile = (0,useIsMobile/* default */.Z)();
    const [left, right] = getSiblings(props.page);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(TabletNavigation_Container, {
        children: [
            !left && /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
            left && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Entry, {
                onClick: ()=>navigateTo(left)
                ,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(TabletNavigation_Icon, {
                        icon: pro_regular_svg_icons_.faChevronLeft
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                        children: isMobile ? "Back" : left
                    })
                ]
            }),
            !right && /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
            right && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RightEntry, {
                onClick: ()=>navigateTo(right)
                ,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                        children: right
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TabletNavigation_Icon, {
                        icon: pro_regular_svg_icons_.faChevronRight
                    })
                ]
            })
        ]
    }));
}
const Text = external_styled_components_default().span.withConfig({
    componentId: "sc-30049b87-0"
})`
  text-transform: capitalize;
`;
const TabletNavigation_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-30049b87-1"
})`
  position: fixed;
  bottom: 0px;
  width: 100%;
  z-index: 500;

  background: #edecea 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 20px #00000029;
  padding: 17px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(0,external_styled_breakpoints_.down)("sm")} {
    padding: 15px 10px;
  }
`;
const Entry = external_styled_components_default().div.withConfig({
    componentId: "sc-30049b87-2"
})`
  display: flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 15px;
  }

  font-size: 16px;
`;
const RightEntry = external_styled_components_default()(Entry).withConfig({
    componentId: "sc-30049b87-3"
})`
  font-weight: bold;
`;
const TabletNavigation_Icon = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-30049b87-4"
})``;
/* harmony default export */ const navigation_TabletNavigation = (TabletNavigation);

;// CONCATENATED MODULE: ./components/about/page/index.tsx







const FirstElement = external_styled_components_default().div.withConfig({
    componentId: "sc-36d86588-0"
})`
  padding: 50px 100px;
  background: transparent linear-gradient(360deg, #F5F0EA 0%, #E2E0DD 100%) 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;

  ${(0,external_styled_breakpoints_.only)("md")} {
    padding: 80px 40px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    padding: 60px 20px;
  }
`;
function Page(props) {
    const isTabletOrSmaller = (0,useIsTabletOrSmaller/* default */.ZP)();
    const navProps = {
        ...props
    };
    delete navProps.className;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(page_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FirstElement, {
                children: [
                    isTabletOrSmaller && /*#__PURE__*/ jsx_runtime_.jsx(page_Title, {
                        children: props.page
                    }),
                    !isTabletOrSmaller && /*#__PURE__*/ jsx_runtime_.jsx(navigation_DesktopNavigation, {
                        ...navProps
                    }),
                    external_react_default().Children.toArray(props.children)[0]
                ]
            }),
            external_react_default().Children.toArray(props.children).slice(1),
            isTabletOrSmaller && /*#__PURE__*/ jsx_runtime_.jsx(navigation_TabletNavigation, {
                ...navProps
            })
        ]
    }));
}
const page_Title = external_styled_components_default().span.withConfig({
    componentId: "sc-36d86588-1"
})`
  text-align: center;
  font-size: 34px;
  font-family: "Eveleth";
`;
const page_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-36d86588-2"
})`
  display: flex;
  flex-direction: column;
  position: relative;

  ${navigation_DesktopNavigation} {
    margin-bottom: 40px;
  }

  ${page_Title} {
    ${(0,external_styled_breakpoints_.only)("md")} {
      margin-bottom: 43px;
    }
    ${(0,external_styled_breakpoints_.down)("sm")} {
      margin-bottom: 30px;
    }
  }
`;

/* harmony default export */ const page = (external_styled_components_default()(Page).withConfig({
    componentId: "sc-36d86588-3"
})``);


/***/ })

};
;