"use strict";
(() => {
var exports = {};
exports.id = 506;
exports.ids = [506];
exports.modules = {

/***/ 2263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _subsidiary_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__(6170);
// EXTERNAL MODULE: ./subsidiary-config/index.tsx
var subsidiary_config = __webpack_require__(1683);
;// CONCATENATED MODULE: ./components/services/detailed-info/blueprint/DetailedHeader.tsx



function DetailedHeader(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                src: props.logo
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Info, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                        children: props.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Year, {
                        children: [
                            "Est. ",
                            props.year
                        ]
                    })
                ]
            })
        ]
    }));
}
const Logo = external_styled_components_default().img.withConfig({
    componentId: "sc-d8fb0bfd-0"
})``;
const Title = external_styled_components_default().h1.withConfig({
    componentId: "sc-d8fb0bfd-1"
})`
  font-family: "Eveleth";
  font-size: 36px;
  margin:0px;
  /* white-space: nowrap; */

  ${(0,external_styled_breakpoints_.down)("md")} {
    font-size: 26px;
    white-space: initial;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    font-size: 20px;
  }
`;
const Year = external_styled_components_default().span.withConfig({
    componentId: "sc-d8fb0bfd-2"
})`
  font-size: 18px;
  text-transform: uppercase;
`;
const Info = external_styled_components_default().div.withConfig({
    componentId: "sc-d8fb0bfd-3"
})`
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    margin-bottom: 25px;
  }
`;
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-d8fb0bfd-4"
})`
  display: flex;
  align-items: center !important;
  @media only screen and (max-width: 305px) {
    flex-wrap: wrap;
  }

  > :not(:last-child) {
    margin-right: 50px;
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    > :not(:last-child) {
      margin-right: 30px;
    }
  }

  img {
    object-fit: cover;
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;
  }
`;

/* harmony default export */ const blueprint_DetailedHeader = (external_styled_components_default()(DetailedHeader).withConfig({
    componentId: "sc-d8fb0bfd-5"
})``);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/services/detailed-info/blueprint/Box.tsx



function Box(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box_Container, {
        className: props.className,
        children: [
            props.image && /*#__PURE__*/ jsx_runtime_.jsx(ImageContainer, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: props.image,
                    layout: "fill"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Box_Title, {
                children: props.text
            })
        ]
    }));
}
const ImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-e450089b-0"
})`
  width: 230px;
  height: 80px;
  position: relative;
`;
const Box_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-e450089b-1"
})`
  padding: 12px 25px;
  box-shadow: 0px 3px 10px #0000000d;
  border: 2px solid #333333;
  background: #0d0d0d;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 3px;

  align-items: center;
  justify-content: center;
  min-height: 150px;
  max-height: 150px;
`;
const Box_Title = external_styled_components_default().h2.withConfig({
    componentId: "sc-e450089b-2"
})`
  font-size: 16px;
  font-family: "Eveleth";
  color: white;
`;

/* harmony default export */ const blueprint_Box = (external_styled_components_default()(Box).withConfig({
    componentId: "sc-e450089b-3"
})``);

;// CONCATENATED MODULE: ./components/services/detailed-info/blueprint/index.tsx





const Text = external_styled_components_default().span.withConfig({
    componentId: "sc-a10fe923-0"
})`
  white-space: pre-line;
  font-size: 16px;

  a{
    color:#fff;
  }
`;
const Boxes = external_styled_components_default().div.withConfig({
    componentId: "sc-a10fe923-1"
})`
  display: flex;
  > :not(:last-child) {
    margin-right: 40px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    flex-direction: column;
    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 20px;
    }
  }
`;
const blueprint_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-a10fe923-2"
})`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: visible;
  overflow-x: clip;
  width: 100%;

  padding: 100px;
  background: ${(props)=>(0,subsidiary_config/* default */.Z)(props.subsidiary).primaryColour
};

  @media only screen and (max-width: 1600px) {
    padding: 100px 60px;
  }

  ${blueprint_DetailedHeader} {
    img {
      height: 180px;
    }
    margin-bottom: 60px;

    ${(0,external_styled_breakpoints_.down)("md")} {
      img {
        height: 160px;
      }
      margin-bottom: 30px;
    }

    ${(0,external_styled_breakpoints_.down)("sm")} {
      img {
        height: 117px;
      }
    }
  }

  ${Text} {
    margin-bottom: 60px;
    ${(0,external_styled_breakpoints_.down)("md")} {
      margin-bottom: 40px;
    }
  }

  ${(0,external_styled_breakpoints_.only)("md")} {
    padding: 30px 20px 0px 20px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    padding: 50px 20px 90px 20px;
    background-image: none;
  }
`;


// EXTERNAL MODULE: ./components/util/useIsTabletOrSmaller.tsx
var useIsTabletOrSmaller = __webpack_require__(3176);
// EXTERNAL MODULE: external "@bjsdistribution/components"
var components_ = __webpack_require__(2699);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
;// CONCATENATED MODULE: ./components/services/detailed-info/home-delivery/box/Shared.styled.tsx




const Icon = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-a98ac98b-0"
})`
  font-size: 36px !important;
  color: ${components_.colours.yellow};

  ${(0,external_styled_breakpoints_.down)("md")} {
    font-size: 26px !important;
  }
`;


;// CONCATENATED MODULE: ./components/services/detailed-info/home-delivery/box/TabletBox.tsx





function TabletBox(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(TabletBox_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Header, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                        icon: props.icon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TabletBox_Title, {
                        children: props.title
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Description, {
                children: props.description
            })
        ]
    }));
}
const Header = external_styled_components_default().div.withConfig({
    componentId: "sc-3e8152fc-0"
})`
  display: flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 15px;
  }
`;
const TabletBox_Title = external_styled_components_default().span.withConfig({
    componentId: "sc-3e8152fc-1"
})`
  color: #695f50;
  font-size: 16px;
  font-family: "Eveleth";

  ${(0,external_styled_breakpoints_.down)("sm")} {
    color: ${components_.colours.black};
    font-size: 15px;
  }
`;
const Description = external_styled_components_default().span.withConfig({
    componentId: "sc-3e8152fc-2"
})`
  color: #695f50;
  ${(0,external_styled_breakpoints_.down)("sm")} {
    color: ${components_.colours.black};
    font-size: 14px;
  }
`;
const TabletBox_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-3e8152fc-3"
})`
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    margin-bottom: 22px;
  }
  flex: 1;
  padding: 30px;

  box-shadow: 0px 3px 10px #0000000d;
  border-radius: 12px;
  background: white;
`;
/* harmony default export */ const box_TabletBox = (external_styled_components_default()(TabletBox).withConfig({
    componentId: "sc-3e8152fc-4"
})``);

;// CONCATENATED MODULE: ./components/services/detailed-info/home-delivery/box/DesktopBox.tsx



const DesktopBox_Title = external_styled_components_default().h2.withConfig({
    componentId: "sc-f7401c2-0"
})`
  font-size: 16px;
  font-family: "Eveleth";
  text-align: center;
  margin:0px;
`;
const DesktopBox_Description = external_styled_components_default().span.withConfig({
    componentId: "sc-f7401c2-1"
})`
  font-size: 14px;
  text-align: center;

  white-space: pre-line;
`;
const DesktopBox_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-f7401c2-2"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px;
  background: white;
  box-shadow: 0px 3px 10px #0000000d;
  border-radius: 12px;
  z-index: 6;

  ${Icon} {
    margin-bottom: 28px;
  }
  ${DesktopBox_Title} {
    margin-bottom: 20px;
  }

  ${DesktopBox_Description} {
      width: 65ch;
    }

  @media only screen and (max-width: 1600px) {
    padding: 30px 30px 60px 30px;

    ${DesktopBox_Description} {
      width: 60ch;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding-bottom: 40px;
    ${DesktopBox_Description} {
      width: 35ch;
    }
  }

  @media only screen and (max-width: 1200px) {
    z-index: 1;
  }

  
`;
function DesktopBox_Box(props) {
    //  const tabletOrSmaller = useIsTabletOrSmaller();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(DesktopBox_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                icon: props.icon
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(DesktopBox_Title, {
                children: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(DesktopBox_Description, {
                children: props.description
            })
        ]
    }));
}
/* harmony default export */ const DesktopBox = (external_styled_components_default()(DesktopBox_Box).withConfig({
    componentId: "sc-f7401c2-3"
})``);

;// CONCATENATED MODULE: ./components/services/detailed-info/home-delivery/box/index.tsx





function box_Box(props) {
    const isTablet = (0,useIsTabletOrSmaller/* default */.ZP)();
    if (isTablet) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(box_TabletBox, {
            ...props
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(DesktopBox, {
        ...props
    }));
}
/* harmony default export */ const box = (external_styled_components_default()(box_Box).withConfig({
    componentId: "sc-40e2c019-0"
})``);

// EXTERNAL MODULE: external "@fortawesome/pro-solid-svg-icons"
var pro_solid_svg_icons_ = __webpack_require__(1638);
// EXTERNAL MODULE: ./subsidiary-config/haulage-config.ts
var haulage_config = __webpack_require__(685);
// EXTERNAL MODULE: ./subsidiary-config/construct-it-config.ts
var construct_it_config = __webpack_require__(7729);
// EXTERNAL MODULE: ./subsidiary-config/extra-config.ts
var extra_config = __webpack_require__(9437);
;// CONCATENATED MODULE: ./components/services/detailed-info/blueprint/SubsidiaryHeader.tsx







function SubsidiaryHeader(props) {
    const { subsidiary  } = props;
    let { title , established , logoUrl  } = (0,subsidiary_config/* default */.Z)(subsidiary);
    if (subsidiary === "haulage") {
        logoUrl = haulage_config/* logoWhiteUrl */.X;
    } else if (subsidiary === "constructit") {
        logoUrl = construct_it_config/* logoWhiteUrl */.X;
    } else if (subsidiary === "extra") {
        logoUrl = extra_config/* logoWhiteUrl */.X;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(blueprint_DetailedHeader, {
        className: props.className,
        title: title,
        year: established,
        logo: logoUrl
    }));
}

/* harmony default export */ const blueprint_SubsidiaryHeader = (external_styled_components_default()(SubsidiaryHeader).withConfig({
    componentId: "sc-7a6db78a-0"
})``);

;// CONCATENATED MODULE: ./components/services/detailed-info/home-delivery/MenHoldingSofa.tsx




function MenHoldingSofa() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(MenHoldingSofa_ImageContainer, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
            src: "/images/showcase/menholdingsofa.png",
            layout: "fill",
            priority: true
        })
    }));
}
const MenHoldingSofa_ImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-22991ed0-0"
})`
  position: absolute;
  bottom: -50px;
  z-index: 5;
  mix-blend-mode: darken;
  right: -90px;
  width: 700px;

  ${(0,external_styled_breakpoints_.down)("md")} {
    bottom: 0px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    display: none;
  }

  height:730px;
  @media only screen and (max-width: 1865px) {
   // height: 600px;
  }

  @media only screen and (max-width: 1600px) {
    height: 738px;
    width: 738px;
    right: -90px;
  }

  @media only screen and (max-width: 1200px) {
    z-index: 0;
    bottom: 40px;
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    height: 420px;
    width: 479px;
    bottom: 0px;
  }
`;
/* harmony default export */ const home_delivery_MenHoldingSofa = (MenHoldingSofa);

// EXTERNAL MODULE: ./subsidiary-config/home-delivery.ts
var home_delivery = __webpack_require__(9288);
;// CONCATENATED MODULE: ./components/services/detailed-info/home-delivery/index.tsx










function HomeDeliveryDetailedInfo(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(home_delivery_Container, {
        className: props.className,
        subsidiary: "home delivery",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(blueprint_SubsidiaryHeader, {
                subsidiary: "home delivery"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                children: home_delivery/* default.description.0 */.Z.description[0]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Boxes, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(box, {
                        title: "next day delivery",
                        description: `Ensures the same high quality customer service standards, but with a really speedy turn around.`,
                        icon: pro_solid_svg_icons_.faTruck
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(box, {
                        title: "choice-of-day delivery",
                        description: `Allows maximum flexibility for your customers, helping them to manage their busy working lives much more easily.`,
                        icon: pro_solid_svg_icons_.faCalendarDay
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(home_delivery_MenHoldingSofa, {})
        ]
    }));
}
const home_delivery_Container = external_styled_components_default()(blueprint_Container).withConfig({
    componentId: "sc-4369c5cf-0"
})`
  background: transparent linear-gradient(360deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box !important;

  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      overflow: hidden;
    }
  }
  //overflow: hidden;
  //background: unset;
  ${(0,external_styled_breakpoints_.down)("md")} {
    padding: 50px 40px 510px 40px !important;
  }
  ${Logo} {
    width: 151px;
    height: 104px !important;

    @media only screen and (max-width: 375px) {
      height: 55px !important;
      width: 80px;
    }
  }

  ${(0,external_styled_breakpoints_.up)("lg")} {
    height: 706px !important;
    ${Text} {
      max-width: 120ch;
    }
  }

  ${(0,external_styled_breakpoints_.up)("md")} {
    height: 887px;
  }
  @media only screen and (max-width: 1850px) {    
    ${Title} {      
      width: 45ch;
    }
  }
  @media only screen and (max-width: 1750px) {    
    ${Title} {      
      width: 35ch;
    }
  }

  @media only screen and (max-width: 1600px) {
    padding: 100px 60px;

    ${Text} {
      max-width: 88ch;
    }
  }
  @media only screen and (max-width: 1500px) {    
    ${Title} {      
      width: 20ch;
    }
  }

  @media only screen and (max-width: 1200px) {
    ${Title} {
      white-space: initial;
      line-height: 1em;
      width: 15ch;
    }

    ${Text} {
      max-width: 60ch;
    }
  }
  ${(0,external_styled_breakpoints_.only)("md")} {
    padding-bottom: 500px;
    ${Title} {
      // white-space: nowrap;
      width:100%;
    }
    ${Text} {
      font-size: 16px;
      width: 100%;
      max-width: 100%;
    }
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    padding: 50px 20px;
    padding-left: 20px !important;
    padding-right: 20px !important;
    padding-bottom: 50px !important;
    ${Title} {
      width: auto;
    }
  }
`;
/* harmony default export */ const detailed_info_home_delivery = (external_styled_components_default()(HomeDeliveryDetailedInfo).withConfig({
    componentId: "sc-4369c5cf-1"
})``);

;// CONCATENATED MODULE: ./public/images/services/haulage/same-day.png
/* harmony default export */ const same_day = ({"src":"/_next/static/media/same-day.8f0b4670.png","height":160,"width":458,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJ1BMVEUUFBMLCwwSEhJEQToPDxALCw5fXVc+Pj03MykuLSw2MSgjIR4mJyhrs3edAAAACnRSTlNPbiBt8jgUOwSCwjP35AAAAAlwSFlzAAALEwAACxMBAJqcGAAAACNJREFUCJljYGJmZmRkZGBjYODi4mFh4eZk4GBlYGdiZWACAAVKAGtov7hNAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/images/services/haulage/next-day.png
/* harmony default export */ const next_day = ({"src":"/_next/static/media/next-day.2a88c3a6.png","height":162,"width":462,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAALVBMVEUgICEVFhorJx0XEAJFRUU5OjoVFBMAAAABAgRUPAkhFwIKCAVBMhQmHgwPDAdf9Q2IAAAADHRSTlNMGP1vCjtAaIlpZeqqGcgfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVQImWNgY+biZGZnZWHg4OVh4uZjYmBgYWNgZWRgYAQACCMAfw6E0UoAAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./components/talk-to-us/button/TalkToUsIcon.tsx
var TalkToUsIcon = __webpack_require__(3822);
// EXTERNAL MODULE: ./components/talk-to-us/button/index.tsx
var talk_to_us_button = __webpack_require__(3082);
// EXTERNAL MODULE: ./components/talk-to-us/store/index.tsx
var store = __webpack_require__(2831);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/util/useNavigateToQuote.tsx



function useNavigateToQuote() {
    const setSelectedSubsidiary = (0,store/* useSetSelectedSubsidiary */.Ri)();
    const router = (0,router_.useRouter)();
    const [, setOpen] = (0,store/* default */.ZP)();
    const navigateTo = ()=>{
        const path = router.pathname;
        if (path.startsWith("/services")) {
            var ref;
            var ref1;
            //If we're on the services page
            const query = (ref1 = (ref = router.query) === null || ref === void 0 ? void 0 : ref.subsidiary) !== null && ref1 !== void 0 ? ref1 : [];
            if (query.length === 0) {
                return;
            }
            const rawSubsidiary = query[0];
            const subsidiary = (0,talk_to_us_button/* getSubsidiaryForRawQuery */.P)(rawSubsidiary);
            setSelectedSubsidiary(subsidiary);
        }
        setOpen(true);
    };
    return navigateTo;
}
/* harmony default export */ const util_useNavigateToQuote = (useNavigateToQuote);

;// CONCATENATED MODULE: ./components/services/detailed-info/haulage/index.tsx













function Haulage(props) {
    const htmlDesc = haulage_config/* default.description.join */.Z.description.join(" ");
    const htmlText = {
        __html: htmlDesc
    };
    const navigateTo = util_useNavigateToQuote();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(haulage_Container, {
        className: props.className,
        subsidiary: "haulage",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(blueprint_SubsidiaryHeader, {
                subsidiary: "haulage"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                dangerouslySetInnerHTML: htmlText
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CustomBoxes, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(blueprint_Box, {
                        text: "same day delivery",
                        image: same_day
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(blueprint_Box, {
                        text: "next day delivery",
                        image: next_day
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(QuoteButton, {
                onClick: navigateTo,
                className: props.className,
                id: "talk-to-us-go-to-talk-to-us",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(TalkToUsIcon/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(QuoteText, {
                        children: "Get a Quote"
                    })
                ]
            })
        ]
    }));
}
const QuoteText = external_styled_components_default().span.withConfig({
    componentId: "sc-5333e4c8-0"
})``;
const CustomBoxes = external_styled_components_default()(Boxes).withConfig({
    componentId: "sc-5333e4c8-1"
})`
  line-height: 1.4em;
`;
const haulage_Container = external_styled_components_default()(blueprint_Container).withConfig({
    componentId: "sc-5333e4c8-2"
})`
  background: black url("/images/showcase/haulage.png") no-repeat right center !important;
  background-size: cover;
  color: white;
  padding-bottom: 50px;
  @media only screen and (max-width: 1600px) {
    background-position-x: -120px !important;
  }

  @media only screen and (max-width: 1200px) {
    background-position-x: -300px !important;
  }

  ${(0,external_styled_breakpoints_.up)("lg")} {
    height: 706px !important;
  }

  ${(0,external_styled_breakpoints_.up)("md")} {
    height: 887px;
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    padding: 50px 40px 350px 40px !important;
  }
  ${blueprint_DetailedHeader} {
    ${Logo} {
      width: 152px;
      height: auto;
    }
    ${Year} {
      color: rgba(255, 255, 255, 0.65);
    }
  }

  ${Text} {
    width: 40%;

    ${(0,external_styled_breakpoints_.down)("md")} {
      width: 100%;
    }
    ${(0,external_styled_breakpoints_.down)("lg")} {
      width: 80%;
    }
  }

  ${blueprint_Box} {
    background: #0d0d0d;
    border: none;
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    padding-bottom: 350px !important;
    background: black url("/images/showcase/haulage_tablet.jpg") no-repeat right
      bottom !important;
    background-size: contain;

    ${blueprint_SubsidiaryHeader} {
      margin-bottom: 45px;
    }

    ${blueprint_Box} {
      width: 100%;
    }
  }

  ${(0,external_styled_breakpoints_.only)("md")} {
    padding: 30px 40px 0px 40px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    padding-bottom: 50px !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
    //background: black url("/images/showcase/haulage_tablet.jpg") no-repeat right
    // bottom !important;
    background-image: none !important;
    ${Text} {
      width: 100%;
    }
  }
`;
const QuoteButton = external_styled_components_default()(components_.Button).withConfig({
    componentId: "sc-5333e4c8-3"
})`
  padding: 13px 27px;
  align-items: center;
  background: #FEBA30;
  border: 1px solid #FEBA30;
  span {
    font-family: "Eveleth";
  }
  color: #5f5d5b;
  font-size: 14px;
  transition: color 0.3s;
  align-self: flex-end;
  > :not(:last-child) {
    margin-right: 12px;
  }

  :hover {
    background: black;
    border: 1px solid black;
    svg path {
      :nth-of-type(2) {
        fill: white;
      }
    }
    ${QuoteText} {
      color: #ffffff
    }
  }
  ${(0,external_styled_breakpoints_.down)("md")} {
    align-self: center;
    position: absolute;
    bottom: 50px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    position: relative;
    font-size: 14px;
    padding: 10px 20px;
    height: auto;
    margin-top: 75px;
  }

`;
/* harmony default export */ const haulage = (external_styled_components_default()(Haulage).withConfig({
    componentId: "sc-5333e4c8-4"
})``);

;// CONCATENATED MODULE: ./public/images/services/construct-it/truck.png
/* harmony default export */ const truck = ({"src":"/_next/static/media/truck.7cb8d294.png","height":140,"width":378,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAM1BMVEUlKjM3OygMEhsvLicuMDJDXVuUnF8eHyBMaXEkKCYAABuEhkgxODpfYyodISaIkC9OYS6y7JBzAAAAD3RSTlOV4ij147jjswDcLnW/6tVmpEy/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVQImWPg4OBg4uJmY2VgYGDnYeflF2Bg4GPnZGZh5AQACWQAsGB3uMIAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/services/detailed-info/construct-it/FlexibleEuro6Fleet.tsx




function FlexibleEuro6Fleet() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(FlexibleEuro6Fleet_Box, {
        text: "flexible euro 6 fleet",
        image: truck
    }));
}
const FlexibleEuro6Fleet_Box = external_styled_components_default()(blueprint_Box).withConfig({
    componentId: "sc-84a138d3-0"
})`
    img {
        width: 189px;
        height: 70px;
    }
`;
/* harmony default export */ const construct_it_FlexibleEuro6Fleet = (external_styled_components_default()(FlexibleEuro6Fleet).withConfig({
    componentId: "sc-84a138d3-1"
})``);

;// CONCATENATED MODULE: ./public/images/services/construct-it/live-order-tracking.svg
/* harmony default export */ const live_order_tracking = ({"src":"/_next/static/media/live-order-tracking.0806dc4e.svg","height":58,"width":66});
;// CONCATENATED MODULE: ./components/services/detailed-info/construct-it/LiveOrderTracking.tsx




function LiveOrderTracking() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(LiveOrderTracking_Box, {
        text: "live order tracking",
        image: live_order_tracking
    }));
}
const LiveOrderTracking_Box = external_styled_components_default()(blueprint_Box).withConfig({
    componentId: "sc-4f2f2ae3-0"
})`
  img {
    height: 58px;
    width: 66px;
  }
`;
/* harmony default export */ const construct_it_LiveOrderTracking = (external_styled_components_default()(LiveOrderTracking).withConfig({
    componentId: "sc-4f2f2ae3-1"
})``);

;// CONCATENATED MODULE: ./components/services/detailed-info/construct-it/index.tsx













function ConstructIT(props) {
    const navigateTo = util_useNavigateToQuote();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(construct_it_Container, {
        className: props.className,
        subsidiary: "constructit",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(blueprint_SubsidiaryHeader, {
                subsidiary: "constructit"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TextContainer, {
                children: construct_it_config/* default.description.map */.Z.description.map((text)=>{
                    const htmlText = {
                        __html: text
                    };
                    return(/*#__PURE__*/ jsx_runtime_.jsx(Text, {
                        dangerouslySetInnerHTML: htmlText
                    }, text));
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(construct_it_CustomBoxes, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(construct_it_FlexibleEuro6Fleet, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(construct_it_LiveOrderTracking, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(construct_it_QuoteButton, {
                onClick: navigateTo,
                className: props.className,
                id: "talk-to-us-go-to-talk-to-us",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(TalkToUsIcon/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(construct_it_QuoteText, {
                        children: "Get a Quote"
                    })
                ]
            })
        ]
    }));
}
const construct_it_QuoteText = external_styled_components_default().span.withConfig({
    componentId: "sc-324bd27f-0"
})``;
const construct_it_CustomBoxes = external_styled_components_default()(Boxes).withConfig({
    componentId: "sc-324bd27f-1"
})`
  line-height: 1.4em;
`;
const TextContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-324bd27f-2"
})`
  display: flex;
  flex-direction: column;
  a {
    color: #fff;
  }

  ${Text}:first-child {
    margin-bottom: 10px;
  }
`;
const construct_it_Container = external_styled_components_default()(blueprint_Container).withConfig({
    componentId: "sc-324bd27f-3"
})`
  background: black url("/images/services/construct-it/background.png")
    no-repeat right !important;
  background-size: cover !important;
  color: white;
  background-size: auto 100%;
  
  ${(0,external_styled_breakpoints_.up)("lg")} {
    height: 706px !important;
  }
  
  ${(0,external_styled_breakpoints_.up)("md")} {
    height: 887px;
  }
  
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    padding: 60px !important;
  }
  
  @media only screen and (max-width: 1400px) {
    background-position-x: -250px !important;
  }
  ${blueprint_SubsidiaryHeader} {
    ${(0,external_styled_breakpoints_.down)("md")} {
      align-items: flex-start;
    }

    ${Logo} {
      height: 64px;
      ${(0,external_styled_breakpoints_.down)("sm")} {
        height: 48px;
      }
    }
    ${Year} {
      color: rgba(255, 255, 255, 0.65);
    }
    ${Title} {
      @media only screen and (max-width: 375px) {
        font-size: 10px;
      }
    }
  }

  ${blueprint_Box} {
    background: #20252a;
    border: none;
  }

  ${Text} {
    width: 42%;
    ${(0,external_styled_breakpoints_.down)("md")} {
      width: 100%;
    }
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    background: #14191e url("/images/showcase/constructit_tablet.jpg") no-repeat
      center bottom !important;
    background-size: 100% !important;
    padding: 76px 40px 470px 40px !important;
    // padding: 50px 40px 350px 40px !important;

    ${blueprint_Box} {
      background: #20252a;
      border: 2px solid #20252a;
      border-radius: 12px;
      width: 50%;
    }
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    // background: #14191e url("/images/showcase/constructit_mobile1.jpg") no-repeat
    // center bottom !important;
    background-size: 100% !important;
    background-image: none !important;
    padding: 50px 20px 10px 20px !important;
    width: 100%;
    ${blueprint_Box} {
      width: 100%;
    }
    ${Logo} {
      height: 33px !important;
    }
  }
`;
const construct_it_QuoteButton = external_styled_components_default()(components_.Button).withConfig({
    componentId: "sc-324bd27f-4"
})`
  padding: 13px 27px;
  align-items: center;
  background: #E4E428;
  border: 1px solid #E4E428;
  span {
    font-family: "Eveleth";
  }
  color: #5f5d5b;
  font-size: 14px;
  transition: color 0.3s;
  align-self: flex-end;
  > :not(:last-child) {
    margin-right: 12px;
  }

  :hover {
    background: black;
    border: 1px solid black;
    svg path {
      :nth-of-type(2) {
        fill: white;
      }
    }
    ${construct_it_QuoteText} {
      color: #ffffff
    }
  }
  ${(0,external_styled_breakpoints_.down)("md")} {
    align-self: center;
    position: absolute;
    bottom: 50px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    position: relative;
    font-size: 14px;
    padding: 10px 20px;
    height: auto;
    margin-top: 75px;
  }
`;
/* harmony default export */ const construct_it = (external_styled_components_default()(ConstructIT).withConfig({
    componentId: "sc-324bd27f-5"
})``);

;// CONCATENATED MODULE: ./components/services/detailed-info/extra/ExtraBox.tsx



const ExtraBox = external_styled_components_default()(blueprint_Box).withConfig({
    componentId: "sc-4e2cdcf6-0"
})`
  background: #1394a3;
  border: none;
  min-height: 178px;
  max-width: 280px;
  padding: 24px 42px 30px 42px; 
  text-align: center;

  ${(0,external_styled_breakpoints_.down)("sm")} {
    flex-direction: row;
    padding: 20px;
    min-height: 123px;
    max-height: 123px;
    max-width: 420px;
    text-align: left;
  }
`;
/* harmony default export */ const extra_ExtraBox = (ExtraBox);

;// CONCATENATED MODULE: ./public/images/services/extra/dedicated-account-manager.svg
/* harmony default export */ const dedicated_account_manager = ({"src":"/_next/static/media/dedicated-account-manager.5874f23f.svg","height":63,"width":109});
;// CONCATENATED MODULE: ./components/services/detailed-info/extra/DedicatedAccountManagerBox.tsx





function DedicatedAccountManagerBox() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(DedicatedAccountManagerBox_Box, {
        text: "dedicated account manager",
        image: dedicated_account_manager
    }));
}
const DedicatedAccountManagerBox_Box = external_styled_components_default()(extra_ExtraBox).withConfig({
    componentId: "sc-3d1087f1-0"
})`
  ${ImageContainer} {
    min-height: 62px;
    width: 108px;
  }

`;
/* harmony default export */ const extra_DedicatedAccountManagerBox = (DedicatedAccountManagerBox);

;// CONCATENATED MODULE: ./public/images/services/extra/stacked-boxes.png
/* harmony default export */ const stacked_boxes = ({"src":"/_next/static/media/stacked-boxes.e20db477.png","height":164,"width":218,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAQlBMVEXerHbmsnethFbxuHubdUrPnmirgVK6jV/PnWnVqHdoTTHzun53VzP/yYj/2ZXaqG+2ild3WDeqgFHCk2CWcEmXcUfp9fFYAAAAEnRSTlMB+5qZIztkLvkF+Xz8Qxu5yO/jRmzcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVQImRXGSxYAEQwEwM4QncwPwf2v6qlVAdD0OI7LTM9K3CYE2OYbUX+U0Ucs+eA5k6RvIjkBj16KhoAAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/services/detailed-info/extra/NoMinimumVolumeRequirements.tsx





function NoMinimumVolume() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(NoMinimumVolumeRequirements_Box, {
        text: "no minimum volume requirements",
        image: stacked_boxes
    }));
}
const NoMinimumVolumeRequirements_Box = external_styled_components_default()(extra_ExtraBox).withConfig({
    componentId: "sc-9d259ba2-0"
})`
  ${ImageContainer} {
    min-height: 82px;
    width: 109px;
  }

`;
/* harmony default export */ const NoMinimumVolumeRequirements = (NoMinimumVolume);

;// CONCATENATED MODULE: ./components/services/detailed-info/extra/index.tsx









function Extra(props) {
    const htmlDesc = extra_config/* default.description.join */.Z.description.join(" ");
    const htmlText = {
        __html: htmlDesc
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(extra_Container, {
        className: props.className,
        subsidiary: "extra",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(blueprint_SubsidiaryHeader, {
                subsidiary: "extra"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                dangerouslySetInnerHTML: htmlText
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Boxes, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(extra_DedicatedAccountManagerBox, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(NoMinimumVolumeRequirements, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(VanImage, {
                src: "/images/services/extra/van.png"
            })
        ]
    }));
}
const VanImage = external_styled_components_default().img.withConfig({
    componentId: "sc-d9b33043-0"
})`
  position: absolute;
  height: 580px;
  right: 0px;

  ${(0,external_styled_breakpoints_.down)("md")} {
    bottom: 0px !important;
    height: 350px !important;
    top: auto !important;
    width: auto !important;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, 0);
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    display: none;
  }

  @media only screen and (max-width: 1600px) {
    width: 800px;
    right: -100px;
    z-index: 1;
  }

  @media only screen and (max-width: 1400px) {
    width: 700px;
    top: 100px;
    right: -86px;
    
  }

  @media only screen and (max-width: 1200px) {
    height: 550px;
    width: 800px;
    right: -315px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    right: -180px;
    top: 160px;
  }
`;
const extra_Container = external_styled_components_default()(blueprint_Container).withConfig({
    componentId: "sc-d9b33043-1"
})`
  background: ${extra_config/* default.primaryColour */.Z.primaryColour};
  background-size: cover;
  overflow: hidden !important; //May need to remove this
  color: white;
  
  ${(0,external_styled_breakpoints_.up)("lg")} {
    height: 706px !important;
  }

  ${(0,external_styled_breakpoints_.up)("md")} {
    height: 887px;
  }

  ${blueprint_SubsidiaryHeader} {
    z-index: 5;
    ${Year} {
      color: rgba(255, 255, 255, 0.65);
    }
    ${Logo} {
      width: 151px;
      height: 118px;
    }
  }

  ${Boxes} {
    z-index: 5;
  }
  ${(0,external_styled_breakpoints_.down)("md")} {
    padding: 50px 40px 350px 40px !important;

    ${Boxes} {
      width: 100%;
      gap: 40px;
      ${blueprint_Box} {
        max-width: 50%;
      }
    }
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    padding: 50px 20px !important;
    ${Boxes} {
      width: 100%;
    }
    ${blueprint_Box} {
      max-width: 100% !important;
    }
  }

  ${Text} {
    z-index: 5;
    width: 40%;

    @media only screen and (max-width: 1600px) {
      width: 90ch;
    }

    @media only screen and (max-width: 1400px) {
      width: 80ch;
    }

    @media only screen and (max-width: 1200px) {
      width: 56ch;
    }

    ${(0,external_styled_breakpoints_.down)("md")} {
      width: 100%;
    }
  }

  @media only screen and (max-width: 1000px) {
  }
`;
/* harmony default export */ const extra = (external_styled_components_default()(Extra).withConfig({
    componentId: "sc-d9b33043-2"
})``);

;// CONCATENATED MODULE: ./components/services/detailed-info/index.tsx





function DetailedInfo({ subsidiary , className  }) {
    if (subsidiary === "home delivery") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(detailed_info_home_delivery, {
            className: className
        }));
    } else if (subsidiary === "haulage") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(haulage, {
            className: className
        }));
    } else if (subsidiary === "constructit") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(construct_it, {
            className: className
        }));
    } else if (subsidiary === "extra") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(extra, {
            className: className
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            "cannot find ",
            subsidiary,
            " "
        ]
    }));
}
/* harmony default export */ const detailed_info = (DetailedInfo);

// EXTERNAL MODULE: ./components/services/expectancy/entry/index.tsx
var entry = __webpack_require__(1917);
;// CONCATENATED MODULE: ./components/services/expectancy/subsidiary/home-delivery/BoltOnImage.tsx


/*
const Image = styled.div`
  min-height: 100px;
  min-width: 100px;
  border: 1px solid black;
  border-radius: 50%;
`;*/ const BoltOnImage_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-a26af767-0"
})`
  display: flex;

  align-items: center;
  > :not(:last-child) {
    margin-right: 25px;
  }
  max-width: 100%;
`;
const BoltOnImage_Title = external_styled_components_default().span.withConfig({
    componentId: "sc-a26af767-1"
})`
  font-family: "Eveleth";
  font-size: 15px;
`;
const BoltOnImage_Text = external_styled_components_default().span.withConfig({
    componentId: "sc-a26af767-2"
})`
  font-size: 14px;
`;
const Body = external_styled_components_default().div.withConfig({
    componentId: "sc-a26af767-3"
})`
  display: flex;
  flex-direction: column; > :not(:last-child) {
    margin-bottom: 15px;
  }
`;
function BoltOnImage(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoltOnImage_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: props.image.src,
                height: 100,
                width: 100
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Body, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(BoltOnImage_Title, {
                        children: props.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(BoltOnImage_Text, {
                        children: props.description
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const home_delivery_BoltOnImage = (external_styled_components_default()(BoltOnImage).withConfig({
    componentId: "sc-a26af767-4"
})``);

;// CONCATENATED MODULE: ./public/images/services/homedelivery/bolt-on-options/room-of-choice.png
/* harmony default export */ const room_of_choice = ({"src":"/_next/static/media/room-of-choice.f6a03756.png","height":200,"width":200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAgVBMVEXp6uvkh2f09PYnMjm0rq81IRx7d3BMaXHo6Oni4uPZzc29vsKqnJiFhodgT019dH8WFRgHDA3///XBt7Y4OT7y8vUNH0VqdYHu7e7dxZPHyMDV0cq8r6sqLVzf3Nuvi4vbx6vTwLTw8vXU09ailpKBbmtuWlIuRotST2mRjo7a3uJqhuOxAAAAInRSTlP8KioV/PvdAMRE+f7+/f7+kv4V/v3x9+mi95Lh9qLp8f65hxTijwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEhJREFUCJkFwQUCgCAQBMAVgQO7Ownr/w90BqQVoBhBAzCmZVCWm2M0A6Iks7X/Niy+dHHDZ5xvl6fCTQj2+7mErEDB2ssipB+Y4QSaA7XQqgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/images/services/homedelivery/bolt-on-options/well-built.png
/* harmony default export */ const well_built = ({"src":"/_next/static/media/well-built.7e0edfaf.png","height":200,"width":200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAe1BMVEVMaXHFycR1fIGhoqGDfnN2bF7KysVnZF5ITVDSz8iGcF+iqbCamI40NDBEQz2jn5WloZVXXWUqLzVianKwraXIwbmFfHC2urdxeH5aWFHd3NDKtpW9wbS9k1jayazl4NuLi4ypqaMsMTO9tqmrpJQbHR6iqKeWi3M8QkfGVnguAAAAIXRSTlMA+Piikvv+/fn+/ioV2RXh/vYtuen+4UTJ+UT+ybn2J+lxwRt4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAR0lEQVQImQXBhQGAMBAEsKt+BXeHFt1/QhJgWti2eqB/3tkS3zHE8bT0CRhSQbt4oORFaF3sUBumrbolKhPOi9IM8KLJZYIfpdAEPyBSl1oAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/services/homedelivery/bolt-on-options/packaging-removal.png
/* harmony default export */ const packaging_removal = ({"src":"/_next/static/media/packaging-removal.4a2ea98f.png","height":200,"width":200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAeFBMVEXBuKnGvLC9wszd4ONYSjvBx84zKSdMaXHi5OhZXWHNw7bPzMxGR0h8a2C5poy/vbunoZLt8PD0+vzb1M9ybGi6s6WdiXwkKi1qZ2S6v8WJkpkZHyZKU1lVWl7p6+/o5+SNem1IRka6uLpobG98cWhhVEzPzc85OzyvJUGYAAAAHnRSTlP9/OX3K/4VAP78wfjpkv7+/slERNn+97nxoieSoulO7Z+mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAASElEQVQImRXGVxZAMBQFwCvtpRG9i87+d+iYrwFVFtwKQrkmiI8XKP64d4bL0ERtFpgdudbGo7vbIPk5QfTXIbdagcaBsVTRB4UJA9k/LcyDAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/images/services/homedelivery/bolt-on-options/old-furniture.png
/* harmony default export */ const old_furniture = ({"src":"/_next/static/media/old-furniture.c1feede1.png","height":200,"width":200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAeFBMVEXg29odIi83NyM6Q022sax7dG+vrapMaXHi398ZKxs1RDLc19Td2NbW0Mzd2NTf2tj///9obWumo5y+ubMzXjeqn3NBTD7Gwr4/d0J6g419g5xKYFxGXkMXOhwaTiRudWk1YzLr5uTc1dIbMxxBVD9UXmS2tbBLVVMHFJlbAAAAIXRSTlP9Kvv4Ff7wAP76/JLh2aLpJ/GS4bn+/v72oi25yclERPlLZFyNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAASElEQVQImQXBBQKAIBAEwEXiAAO7i1D//0NnQOdxzz0jXMnGaJoae7KjVKGCyQbtPRzMI4MGCmzcThrIsfLv9aEUILaorhX0A6WcBDivUim8AAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./components/services/expectancy/subsidiary/home-delivery/BoltOnOptions.tsx








function BoltOnOptions() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(entry/* Abstract */.$, {
        title: "bolt-on options",
        children: [
            "Above and beyond our standard 'delivery to the door' service at a convenient time, we offer several 'bolt-on' options to provide additional help for your customers - all to ensure their delivery experience matches your own high standards, again and again.",
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BoltOnOptions_ImageContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(home_delivery_BoltOnImage, {
                        title: "room of choice",
                        description: "Delivering to a room of choice, carefully, safely and without damage or fuss.",
                        image: room_of_choice
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(home_delivery_BoltOnImage, {
                        title: "well built & installed",
                        description: "Our trained delivery team can correctly build and install furniture and electrical items.",
                        image: well_built
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(home_delivery_BoltOnImage, {
                        title: "packaging removal",
                        description: "Our teams can also dispose of all product packaging with our own recycling facility.",
                        image: packaging_removal
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(home_delivery_BoltOnImage, {
                        title: "old furniture removal",
                        image: old_furniture,
                        description: "Finally, we not only deliver hard-to-handle items but can take them away too."
                    })
                ]
            })
        ]
    }));
}
const BoltOnOptions_ImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-bae85c5c-0"
})`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 1200px) {
    margin-top: 40px;
  }
`;
/* harmony default export */ const home_delivery_BoltOnOptions = (BoltOnOptions);

// EXTERNAL MODULE: ./components/services/expectancy/entry/BulletpointEntry.tsx
var BulletpointEntry = __webpack_require__(9678);
;// CONCATENATED MODULE: ./components/services/expectancy/subsidiary/home-delivery/Warehousing.tsx





const Warehousing_Container = external_styled_components_default()(entry/* Abstract */.$).withConfig({
    componentId: "sc-f6bc63d1-0"
})`
  ul {
    margin-top: 60px;

    @media only screen and (max-width: 1200px) {
      margin-top: 40px;
    }

    ${(0,external_styled_breakpoints_.down)("sm")} {
      margin-top: 36px;
    }
  }
`;
const list = [
    "Two man handling",
    "The highest Health & Safety standards",
    "Use of mechanical equipment to move products",
    "Unloading of containers",
    "Secure storage of goods",
    "Pick and pack service",
    "Computer controlled inventory",
    "Comprehensively trained and experienced warehouse team", 
];
function Warehousing() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Warehousing_Container, {
        title: "warehousing",
        children: [
            "We are located centrally in the UK, just minutes away from the M6 motorway. Operating from our single hub reduces the risk of loss or damage to your furniture, and our warehouses are managed with the latest technology in inventory control.",
            /*#__PURE__*/ jsx_runtime_.jsx(BulletpointEntry/* BulletpointContainer */.l2, {
                children: list.map((entry, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: entry
                    }, index)
                )
            })
        ]
    }));
}
/* harmony default export */ const home_delivery_Warehousing = (Warehousing);

;// CONCATENATED MODULE: ./components/services/expectancy/subsidiary/Container.tsx


const Container_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-85ce82ae-0"
})`
  display: flex;
  padding: 100px;
  font-size: 16px;

  white-space: pre-line;
  justify-content: space-between;

  > :not(:last-child) {
    margin-right: 100px;
  }

  @media only screen and (max-width: 1600px) {
    padding: 100px 60px;
    font-size: 14px;
  }

  @media only screen and (max-width: 1200px) {
    padding: 60px;
    > :not(:last-child) {
      margin-right: 48px;
    }
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    flex-direction: column;
    padding: 40px;
    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 60px;
    }
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    padding: 20px;
    > :not(:last-child) {
      margin-bottom: 40px;
    }
  }
`;
/* harmony default export */ const subsidiary_Container = (Container_Container);

;// CONCATENATED MODULE: ./components/services/expectancy/subsidiary/home-delivery/index.tsx







const Row = external_styled_components_default().div.withConfig({
    componentId: "sc-3860b05e-0"
})`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  > :not(:last-child) {
    margin-bottom: 60px;
  }
  flex-basis: 33%;

  ${(0,external_styled_breakpoints_.down)("sm")} {
    > :not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;
function HomeDeliveryExpectancy(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(subsidiary_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(entry/* Bulletpoint */.L, {
                        title: "your customers can expect",
                        entries: [
                            "Call to arrange a suitable delivery time",
                            "Three hour delivery window",
                            "Pre-delivery courtesy call prior to arrival",
                            "Place furniture in a room of their choice",
                            "Build and install furniture",
                            "Remove and dispose of packaging",
                            "Recycle or dispose of old furniture",
                            "Smiles on their doorstep, whatever the weather", 
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(entry/* Bulletpoint */.L, {
                        title: "we can offer you",
                        entries: [
                            "Products collected from your warehouse or supplier",
                            "Store & manage your stock in our own warehouse",
                            "Full delivery management system",
                            "Ensure that we deliver your items without damage", 
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Row, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(home_delivery_BoltOnOptions, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Row, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(home_delivery_Warehousing, {})
            })
        ]
    }));
}
/* harmony default export */ const subsidiary_home_delivery = (external_styled_components_default()(HomeDeliveryExpectancy).withConfig({
    componentId: "sc-3860b05e-1"
})``);

;// CONCATENATED MODULE: ./components/services/expectancy/subsidiary/haulage/SmootherHaulage.tsx



function SmootherHaulage(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(entry/* Abstract */.$, {
        title: "Your route to smoother nationwide haulage",
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "BJS Haulage are growing fast, have the backing and experience of a major UK home delivery business and have the capacity and hunger to make a big difference."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "From our West Midlands HQ and supported by our hubs in Scotland, West Yorkshire and London - we provide service-led general haulage to the whole of the UK."
            })
        ]
    }));
}
/* harmony default export */ const haulage_SmootherHaulage = (external_styled_components_default()(SmootherHaulage).withConfig({
    componentId: "sc-1f171937-0"
})``);

;// CONCATENATED MODULE: ./components/services/expectancy/entry/ImageTitleDescription.tsx



function Entry(props) {
    const elements = getDescriptionAsArray(props.description);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ImageTitleDescription_Container, {
        className: props.className,
        children: [
            props.image && /*#__PURE__*/ jsx_runtime_.jsx(ImageTitleDescription_ImageContainer, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: props.image,
                    layout: "fill",
                    draggable: false
                })
            }),
            props.children,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ImageTitleDescription_Body, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageTitleDescription_Title, {
                        children: props.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DescriptionContainer, {
                        children: elements.map((entry)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: entry
                            }, entry)
                        )
                    })
                ]
            })
        ]
    }));
}
function getDescriptionAsArray(input) {
    if (Array.isArray(input)) {
        return input;
    }
    return [
        input
    ];
}
const ImageTitleDescription_ImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-dbb0e991-0"
})`
  min-height: 75px;
  max-height: 75px;
  min-width: 75px;
  max-width: 75px;
  position: relative;
`;
const Circle = external_styled_components_default().div.withConfig({
    componentId: "sc-dbb0e991-1"
})`
  height: 75px;
  min-width: 75px;
  background: black;
  border-radius: 50%;
`;
const ImageTitleDescription_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-dbb0e991-2"
})`
  display: flex;
  > :not(:last-child) {
    margin-right: 25px;
  }
`;
const ImageTitleDescription_Title = external_styled_components_default().span.withConfig({
    componentId: "sc-dbb0e991-3"
})`
  font-family: "Eveleth";
  font-size: 15px;
`;
const DescriptionContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-dbb0e991-4"
})`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;
const ImageTitleDescription_Body = external_styled_components_default().div.withConfig({
    componentId: "sc-dbb0e991-5"
})`
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    margin-bottom: 15px;
  }
`;


/* harmony default export */ const ImageTitleDescription = (external_styled_components_default()(Entry).withConfig({
    componentId: "sc-dbb0e991-6"
})``);

;// CONCATENATED MODULE: ./public/images/services/haulage/range-of-services/tailor-made.svg
/* harmony default export */ const tailor_made = ({"src":"/_next/static/media/tailor-made.3cf25536.svg","height":75,"width":75});
;// CONCATENATED MODULE: ./public/images/services/haulage/range-of-services/end-to-end.svg
/* harmony default export */ const end_to_end = ({"src":"/_next/static/media/end-to-end.1e3415d1.svg","height":75,"width":75});
;// CONCATENATED MODULE: ./public/images/services/haulage/range-of-services/same-day.svg
/* harmony default export */ const range_of_services_same_day = ({"src":"/_next/static/media/same-day.86be1a04.svg","height":75,"width":75});
;// CONCATENATED MODULE: ./public/images/services/haulage/range-of-services/economy.svg
/* harmony default export */ const economy = ({"src":"/_next/static/media/economy.611dbdc6.svg","height":75,"width":75});
;// CONCATENATED MODULE: ./public/images/services/haulage/range-of-services/time-critical.svg
/* harmony default export */ const time_critical = ({"src":"/_next/static/media/time-critical.50748d15.svg","height":75,"width":75});
;// CONCATENATED MODULE: ./public/images/services/haulage/range-of-services/backloads.svg
/* harmony default export */ const backloads = ({"src":"/_next/static/media/backloads.6625a7a4.svg","height":75,"width":75});
;// CONCATENATED MODULE: ./public/images/services/haulage/range-of-services/groupage.svg
/* harmony default export */ const groupage = ({"src":"/_next/static/media/groupage.fa512b37.svg","height":75,"width":75});
;// CONCATENATED MODULE: ./public/images/services/haulage/range-of-services/collections.svg
/* harmony default export */ const collections = ({"src":"/_next/static/media/collections.a1e0a757.svg","height":75,"width":75});
;// CONCATENATED MODULE: ./public/images/services/haulage/range-of-services/pallets.svg
/* harmony default export */ const pallets = ({"src":"/_next/static/media/pallets.4a27b045.svg","height":75,"width":75});
;// CONCATENATED MODULE: ./public/images/services/haulage/range-of-services/standingTrailers.png
/* harmony default export */ const standingTrailers = ({"src":"/_next/static/media/standingTrailers.7a6c9554.png","height":150,"width":150,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEUhISExMTEsLC0wMDBMaXEPDw9DQ0QFBQUzMzMcHBskJCU+Pj4aGhovLy+LekxMPhgwMDBlZGBSUlFsbG0AAABGRkYfHx8aGhoaGhkyMjItLS2RkZJO7M6NAAAAGnRSTlP9vduYAPz9/ff+FCwlQ/7+5v6S/snrovDi06r5reIAAAAJcEhZcwAACxMAAAsTAQCanBgAAABASURBVAiZBcGFEcAwDACxD9qhMp2z/56ViMOpuhYZFODtXJbXovlBdC77OW+SiCRJHw5KIR80NTPzldjD5kONP1msApNjFreqAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./components/services/expectancy/subsidiary/haulage/RangeOfServices.tsx














function RangeOfServices(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(RangeOfServices_Container, {
        title: "broad range of services",
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Intro, {
                children: "We offer a broad range of services from tailor-made to economy and everything in between."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageTitleDescription, {
                        image: tailor_made,
                        title: "tailor-made",
                        description: "First and foremost, we're a service-led business - so if your requirements don't quite fit the norm, we're happy to fit around you... Just ask!"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageTitleDescription, {
                        image: end_to_end,
                        title: "end-to-end",
                        description: "You can be confident we’ll deliver an end-to-end service which is driven by the highest customer service levels."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageTitleDescription, {
                        image: range_of_services_same_day,
                        title: "same-day",
                        description: "Our drivers are a well-trained and determined bunch, so when they say they’ll get it there – they’ll move heaven and earth to make it happen."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageTitleDescription, {
                        image: economy,
                        title: "economy",
                        description: "We’re good value, and to be straight – it’s a competitive market and we can’t afford to be anything else."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageTitleDescription, {
                        image: time_critical,
                        title: "time critical",
                        description: "Even if time is not on your side, rest easy in the knowledge that our team are ready and willing to help in any way we can."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageTitleDescription, {
                        image: backloads,
                        title: "backloads",
                        description: "Our constant drive towards increasing efficiency, reducing costs means we provide backloads and return loads wherever possible."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageTitleDescription, {
                        image: groupage,
                        title: "groupage",
                        description: "We’re happy to offer groupage deliveries as a cost-efficient way of transporting smaller consignments with the minimum fuss."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageTitleDescription, {
                        image: collections,
                        title: "collections",
                        description: "No frills and no fuss – we can collect your consignments from anywhere in the UK to ensure a convenient and hassle-free process."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageTitleDescription, {
                        image: pallets,
                        title: "pallets",
                        description: "Pallet availability can quickly cause delays in your supply chain, so we’ll happily collect and deliver full or partial pallet loads."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageTitleDescription, {
                        image: standingTrailers,
                        title: "standing trailers",
                        description: "For further convenience we are able to provide customers with a standing trailer service at their own premises which we can collect when ready."
                    })
                ]
            })
        ]
    }));
}
const Intro = external_styled_components_default().p.withConfig({
    componentId: "sc-9e449c3c-0"
})``;
const RangeOfServices_Container = external_styled_components_default()(entry/* Abstract */.$).withConfig({
    componentId: "sc-9e449c3c-1"
})`

  ${Intro} {
    padding-bottom: 20px;
  }
`;
const Grid = external_styled_components_default().div.withConfig({
    componentId: "sc-9e449c3c-2"
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 60px;

  @media only screen and (max-width: 1465px) {
    grid-template-columns: 1fr;
    gap: 23px;
  }
`;
/* harmony default export */ const haulage_RangeOfServices = (external_styled_components_default()(RangeOfServices).withConfig({
    componentId: "sc-9e449c3c-3"
})``);

;// CONCATENATED MODULE: ./components/services/expectancy/subsidiary/haulage/SectorsCovered.tsx




function SectorsCovered() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(SectorsCovered_Container, {
        title: "sectors covered",
        entries: [
            "Manufacturing",
            "Industrial",
            "Construction",
            "Wholesale & retail",
            "E-commerce",
            "Consumer goods",
            "Furniture",
            "Food & beverage", 
        ]
    }));
}
const SectorsCovered_Container = external_styled_components_default()(entry/* Bulletpoint */.L).withConfig({
    componentId: "sc-2285d5ba-0"
})`
  ${(0,external_styled_breakpoints_.down)("md")} {
    width: fit-content;
    li:not(:last-child) {
      margin-bottom: 4px !important;
    }
  }
`;
/* harmony default export */ const haulage_SectorsCovered = (SectorsCovered);

;// CONCATENATED MODULE: ./components/services/expectancy/subsidiary/haulage/index.tsx






function HaulageExpectancy(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(subsidiary_haulage_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(haulage_Row, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(haulage_SectorsCovered, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(haulage_SmootherHaulage, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(haulage_Row, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(haulage_RangeOfServices, {})
            })
        ]
    }));
}
const subsidiary_haulage_Container = external_styled_components_default()(subsidiary_Container).withConfig({
    componentId: "sc-49c73a13-0"
})``;
const haulage_Row = external_styled_components_default().div.withConfig({
    componentId: "sc-49c73a13-1"
})`
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    margin-bottom: 60px;
  }
`;
/* harmony default export */ const subsidiary_haulage = (external_styled_components_default()(HaulageExpectancy).withConfig({
    componentId: "sc-49c73a13-2"
})``);

;// CONCATENATED MODULE: ./components/services/expectancy/subsidiary/construct-it/BuildItShiftIt.tsx



const constructITColour = construct_it_config/* default.primaryColour */.Z.primaryColour;
function BuiltItShiftIt(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(BuildItShiftIt_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Left, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Build, {
                        children: "If you can build with"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Shift, {
                        children: "We can shift"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(It, {
                children: "It"
            })
        ]
    }));
}
const It = external_styled_components_default().span.withConfig({
    componentId: "sc-929a9208-0"
})`
  color: ${constructITColour};
  content: "it";

  font-family: "Eveleth";
  font-size: 70px;
  position: relative;
  top: -20px;

  @media only screen and (max-width: 375px) {
    font-size: 50px;
  }
`;
const Build = external_styled_components_default().span.withConfig({
    componentId: "sc-929a9208-1"
})`
  font-size: 27px;
  font-weight: medium;
  color: rgba(20, 25, 30, 0.5);

  @media only screen and (max-width: 375px) {
    font-size: 18px;
  }
`;
const Shift = external_styled_components_default().span.withConfig({
    componentId: "sc-929a9208-2"
})`
  font-size: 34px;
  color: #14191e;
  font-family: "Eveleth";

  @media only screen and (max-width: 375px) {
    font-size: 20px;
  }
`;
const Left = external_styled_components_default().div.withConfig({
    componentId: "sc-929a9208-3"
})`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
`;
const BuildItShiftIt_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-929a9208-4"
})`
  display: flex;
  > :not(:last-child) {
    margin-right: 22px;
  }
`;
/* harmony default export */ const BuildItShiftIt = (external_styled_components_default()(BuiltItShiftIt).withConfig({
    componentId: "sc-929a9208-5"
})``);

;// CONCATENATED MODULE: ./components/services/expectancy/subsidiary/construct-it/SectorsCovered.tsx





const construct_it_SectorsCovered_Container = external_styled_components_default()(entry/* Abstract */.$).withConfig({
    componentId: "sc-9078e91f-0"
})`

  position: relative;

  ${BuildItShiftIt} {
    margin-top: 40px;

    ${(0,external_styled_breakpoints_.only)("md")} {
      position: absolute;
      top: 40%;
      right: 50px;
    }
  }

  li:not(:last-child) {
    margin-bottom: 4px;

    ${(0,external_styled_breakpoints_.down)("md")} {
        margin-bottom: 13px !important;
      }
  }

  p {
    margin: 0;
    ${(0,external_styled_breakpoints_.up)("lg")} {
      padding: 30px 0px;
    }
  }
`;
const covering = [
    "Bricks",
    "Blocks",
    "Insulation",
    "Metal",
    "and more..."
];
function SectorsCovered_SectorsCovered(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(construct_it_SectorsCovered_Container, {
        className: props.className,
        title: "sectors covered",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "We are proud to work some of the biggest construction material manufacturers in the UK delivering:"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: covering.map((entry)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: entry
                    }, entry)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BuildItShiftIt, {})
        ]
    }));
}
/* harmony default export */ const construct_it_SectorsCovered = (external_styled_components_default()(SectorsCovered_SectorsCovered).withConfig({
    componentId: "sc-9078e91f-1"
})``);

;// CONCATENATED MODULE: ./public/images/services/construct-it/the-fleet/artic-curtain.png
/* harmony default export */ const artic_curtain = ({"src":"/_next/static/media/artic-curtain.4ffcbd0d.png","height":200,"width":200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAe1BMVEWGjkRPXWOXpbAnM0lveEKYnaKrrq9MaXE1OjtKVD4mLTQjJyxSVTNgak5JUoJLU15/iHiTmmKdpG0TGRCAinp3gmagpK2Ij5lhb3y6vMs/STspKymmqkKdpkiQmlEkJy5LVVpFTlmkqYWWnmJ8h1hWYVF4gJKvsbl4gUoUubqxAAAAIXRSTlP+/Cc4/vvtAOn6wfz7khXZ/uH+Ff75Lbn2ov6S/kTJ9qJpqa2wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVQImQXBBQKAIAAEsKPT7haw/v9CN6htJ+PQK7ArtY+QFPbryijeCY7zK9VR4vArAFSwzs/G3BmYDiSEIoeip9ZLo36idgRE5jOK3QAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/images/services/construct-it/the-fleet/artic-cranes.png
/* harmony default export */ const artic_cranes = ({"src":"/_next/static/media/artic-cranes.d81dfe69.png","height":200,"width":200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAe1BMVEVhcYFBTVdESj9qfpV1hZqJdEhwa0NMaXEwNDSWoLR6jqd1lLODhUtsXltRU0GTR0NiazqEVUx5g4lSUlVsXmV2V0Vrc4OEla04NjR6VUs4O0MOIyupcnVNPjqVqMKBkaloT0lLV2OJhpKPdE6HZ3B+XGKDlK11h56FdXm3odDvAAAAIHRSTlP9/vQq8BX7APr9wUTZ/f6S/ZL+/uHh/qInuaIt9vnJ+S2VPOQAAAAJcEhZcwAACxMAAAsTAQCanBgAAABISURBVAiZBcEFAoAgEATAReIIu1vA/P8LnQE5ewjLCS7GEF7BsX9bDzwDDJipYQTWu2F5drWYvNalOissWufKpxI0zklXSPoBl6YEEfTmqH4AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/services/construct-it/the-fleet/drawbar-cranes.png
/* harmony default export */ const drawbar_cranes = ({"src":"/_next/static/media/drawbar-cranes.db5958c7.png","height":200,"width":200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAflBMVEVMaXHd3umvsn1xe2w/Qzl6hJdmcFDOz+GtscdBRjrMzN7AwtS7vdEsLzIpLTQpLDAvMTNKVS4jJyNSX1GWnKm6wHklPFNMQUPOz+HJyt60uc21us1RY1vbkpausqa8rbuiq1vU1efTy9m2us9eXWljcUEvNDVFTEaKlJ2LiIvuJzA/AAAAJHRSTlMA/P77Kv77/vz49PUq4aLpkrkV/fb+99nJRETJ/RX+kv6i4bkeEdwgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAR0lEQVQImQXBBQKAIAAEsKMk7e4C1P9/0A2YZqtuB4xGKq+swyDlljB5gpCW0uMzaF4mxOIvlCEJded3cP3oGPsV4FmeFhV+kzYEVRLZzkoAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/services/construct-it/the-fleet/rest.png
/* harmony default export */ const rest = ({"src":"/_next/static/media/rest.ed4b5c49.png","height":200,"width":200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAflBMVEVMaXGjqz1leWBeblZPS0JHQzpLTFB3eoPLztktNUB2f5HAxNnGyudyZ19pZGOTi41ZXV+Qlj1KTj9GSk+wuEBrc31AV1wzODw0TVGnrL+IjE85PkZJXGKQmV2Ql6wvMjQ/PzxSVlfByI9xd1FfaGBnc3+nr5xYXkWHj4DY3YmRp38ZAAAAH3RSTlMA/v7+muXpKfr69cFEFdkVkv736f6i97n+Lf72/vnJo4FDOgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEhJREFUCJkFwQUCgCAABLCjJE3sQrH//0E3wFml7AA49cV4G4n1Xea+vRoYNlJGT4/pIXVJDo8uVLvWewGZbCFsWQ5ILgRP8QOm4ARph3g1ggAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/services/expectancy/subsidiary/construct-it/the-fleet/index.tsx








const the_fleet_Intro = external_styled_components_default().p.withConfig({
    componentId: "sc-aeed17b6-0"
})``;
const the_fleet_Container = external_styled_components_default()(entry/* Abstract */.$).withConfig({
    componentId: "sc-aeed17b6-1"
})`
  ${the_fleet_Intro} {
    padding-bottom: 30px;
  }
`;
const CentralEntry = external_styled_components_default()(ImageTitleDescription).withConfig({
    componentId: "sc-aeed17b6-2"
})`
  align-items: center;
`;
const Entries = external_styled_components_default().div.withConfig({
    componentId: "sc-aeed17b6-3"
})`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${ImageTitleDescription_ImageContainer} {
    min-height: 100px;
    min-width: 100px;
    max-height: 100px;
    max-width: 100px;
  }

  ${Circle} {
    height: 100px;
    min-width: 100px;
  }

  ${ImageTitleDescription}:not(${CentralEntry}) {
    ${ImageTitleDescription_Body} {
      padding-top: 18px;
    }
  }
`;
function TheFleet(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(the_fleet_Container, {
        className: props.className,
        title: "the fleet",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(the_fleet_Intro, {
                children: "To do our jobs safely whilst providing great service for you and good working conditions for our team - we've invested heavily in a head-turning fleet of trucks."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Entries, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageTitleDescription, {
                        title: "artic curtainsiders",
                        description: [
                            "We currently operate 60 artic curtainsider vehicles between BJS Haulage & Construct IT, offering nationwide deliveries to builders merchants and sites, where the customer is able to forklift unload.",
                            "This is the most cost-effective solution, for delivery of building materials.", 
                        ],
                        image: artic_curtain
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(CentralEntry, {
                        title: "artic brick cranes",
                        description: "We operate a mixture of centre mount & roll along artic cranes, to ensure safe offload of your products, on building sites where restricted access isn’t a problem.",
                        image: artic_cranes
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageTitleDescription, {
                        title: "drawbar brick cranes",
                        description: "For sites where access may be restricted, we can offer drawbar cranes. If required, our drivers can drop the trailer in a safe location and deliver into site with a 6 wheel rigid crane, before returning to tran-ship the balance of the product.",
                        image: drawbar_cranes
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageTitleDescription, {
                        title: "urban brick cranes",
                        description: "Our urban cranes trailers can operate similar to artic cranes, but have the flexibility to shorten in length and access restricted sites, where an 8 wheel rigid would normally be required. We’ve designed our trailers in conjunction with Atlas Cranes & Dennison Trailers, to offer increased stability and payload.",
                        image: rest
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ImageTitleDescription, {
                        title: "artic moffett",
                        description: "In addition to the crane offload method, we can also provide vehicles with a demountable moffett (forklift truck), to collect and/or deliver your goods.",
                        image: rest
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const the_fleet = (external_styled_components_default()(TheFleet).withConfig({
    componentId: "sc-aeed17b6-4"
})``);

;// CONCATENATED MODULE: ./components/services/expectancy/subsidiary/construct-it/NationwideCoverage.tsx



const NationwideCoverage_Container = external_styled_components_default()(entry/* Abstract */.$).withConfig({
    componentId: "sc-a31a9b45-0"
})`

  ul {
    color: #3A3630;

 list-style-position: outside;
//text-indent: -1.5em;
  }
`;
function NationwideCoverage(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(NationwideCoverage_Container, {
        className: props.className,
        title: "nationwide coverage",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Whether it's around the country or around the corner, we'll deliver your consignment with the additional peace of mind"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Volumes covered with our own fleet 95% + of all deliveries, covered on our own fleet, allowing greater control and improved service"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Multiple strategically placed hubs in West Midlands (HQ), Essex, Yorkshire, Lanarkshire, and Nottinghamshire"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Centrally manned operational control tower with group support comprising of an experienced team within the construction transport sector"
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const construct_it_NationwideCoverage = (external_styled_components_default()(NationwideCoverage).withConfig({
    componentId: "sc-a31a9b45-1"
})``);

// EXTERNAL MODULE: ./components/services/expectancy/entry/AbstractEntry.tsx
var AbstractEntry = __webpack_require__(5938);
;// CONCATENATED MODULE: ./components/services/expectancy/subsidiary/construct-it/index.tsx








const construct_it_constructITColour = construct_it_config/* default.primaryColour */.Z.primaryColour;
function ConstructITExpectancy(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(subsidiary_construct_it_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(construct_it_SectorsCovered, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(the_fleet, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(construct_it_NationwideCoverage, {})
        ]
    }));
}
const subsidiary_construct_it_Container = external_styled_components_default()(subsidiary_Container).withConfig({
    componentId: "sc-d2c5c150-0"
})`
  ${AbstractEntry/* Seperator */.ty} {
    background: ${construct_it_constructITColour};
  }

  ${construct_it_SectorsCovered}, ${construct_it_NationwideCoverage}, ${the_fleet} {
    ${AbstractEntry/* Title */.Dx} {
      color: #14191E;
    }
  }
`;
/* harmony default export */ const subsidiary_construct_it = (external_styled_components_default()(ConstructITExpectancy).withConfig({
    componentId: "sc-d2c5c150-1"
})``);

;// CONCATENATED MODULE: ./components/services/expectancy/subsidiary/extra/OurPeople.tsx



function OurPeople(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(entry/* Abstract */.$, {
        title: "Our people",
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Your account manager will be your single point of contact for consistency, reassurance, and efficiency."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Our focus is ensuring we understand the areas we can work to support you - and we really enjoy getting to know you better as we work to build your business."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "It might seem old fashioned, but we like people as much as we like processes."
            })
        ]
    }));
}
/* harmony default export */ const extra_OurPeople = (external_styled_components_default()(OurPeople).withConfig({
    componentId: "sc-e5af080c-0"
})``);

;// CONCATENATED MODULE: ./components/services/expectancy/subsidiary/extra/Entry.tsx



function Entry_Entry(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Entry_Container, {
        className: props.className,
        children: [
            props.image && /*#__PURE__*/ jsx_runtime_.jsx(Entry_ImageContainer, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: props.image,
                    layout: "fixed",
                    width: 100,
                    height: 100
                })
            }),
            !props.image && /*#__PURE__*/ jsx_runtime_.jsx(Entry_Circle, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Entry_Title, {
                children: props.title
            })
        ]
    }));
}
const Entry_ImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-ab567e57-0"
})`
  min-height: 100px;
  min-width: 100px;
  max-height: 100px;
  max-width: 100px;
  position: relative;
`;
const Entry_Circle = external_styled_components_default().div.withConfig({
    componentId: "sc-ab567e57-1"
})`
  height: 100px;
  min-width: 100px;
  border-radius: 50%;
  border: 1px solid black;
`;
const Entry_Title = external_styled_components_default().span.withConfig({
    componentId: "sc-ab567e57-2"
})`
  font-size: 15px;
  font-family: "Eveleth";
`;
const Entry_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-ab567e57-3"
})`
  display: flex;
  align-items: center; > :not(:last-child) {
    margin-right: 25px;
  }
`;
/* harmony default export */ const extra_Entry = (external_styled_components_default()(Entry_Entry).withConfig({
    componentId: "sc-ab567e57-4"
})``);

;// CONCATENATED MODULE: ./public/images/services/extra/customers-expect/client.png
/* harmony default export */ const client = ({"src":"/_next/static/media/client.372339d2.png","height":200,"width":200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEX08+/v7uvw7eX39/bx7+nv7u3w7ufp6OTw7+5MaXHs6ubt6+fy8vD39Or6+vb////Y08ny8Ozx7+vu7uzw7eTi4NnDwb56wEbwAAAAE3RSTlP+kvpEKue//fYA1fSiFdkV/q45qu0LGgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD9JREFUCJkFwYkRwCAIBMATQUDNM3OY/kvNLrIPX0MT/SNLQjGPF4IbgOC8MAhJl5oYDDKqQRfd636Qus3alT9ZigKHlC291gAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/images/services/extra/customers-expect/room-of-choice.png
/* harmony default export */ const customers_expect_room_of_choice = ({"src":"/_next/static/media/room-of-choice.f4f61099.png","height":200,"width":200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAclBMVEUdHSI4PEWuqaRfYmbEwLbo5+RNQT0SExlMaXElJy2CdGDw8vW3rqb07+qKj47j2ctJNS5MSEKwtbm/vLipqKbe1sIdGRUcHyPGu7Dg4NyseHTq7efFqIuwrK/Uvq57eHhRUFA/OTeXl5WwqZ+BYVp8gX21SqQxAAAAIHRSTlP++5r7/BX+/QD++yrt2f6S4cn5yflERPfh8emiuSctufe2mAwAAAAJcEhZcwAACxMAAAsTAQCanBgAAABHSURBVAiZFcZHEoAgEATAIS+COecV9f9ftOxTg4a601sg9OxwZXNA+/7RK5oC8PwsUMnDW1vhTKNz4pY4IgulcwPaZZxKQx+NpQO8xJSvUQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/images/services/extra/customers-expect/furniture.png
/* harmony default export */ const furniture = ({"src":"/_next/static/media/furniture.23fdee7c.png","height":200,"width":200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEXNzMvOzs3d2NK/vr3Ktp5MaXHExMTj3tfZ0sjV1dPAv72bfWfX0MfLy8vQzMfq6OXFrpLOvayUfWmFWjvHxsWYbUqjmI2ad1qlflqkelWZhXHPv6mSeGHQxbib6MqEAAAAGnRSTlP+K/5E/QD9/f79yRXl9Ln795LZkqLh8Sei6QD21UEAAAAJcEhZcwAACxMAAAsTAQCanBgAAABDSURBVAiZBcEHAoAgDASwA1raMt0D9f/fNAGHFGtzjBAjgOqQADOzDSKq3mtB7yKiT0H7iGiiGe4YY7xLBp/Xva+Zf0nSArCBPYgkAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/images/services/extra/customers-expect/assembly.png
/* harmony default export */ const assembly = ({"src":"/_next/static/media/assembly.ae6ef00c.png","height":200,"width":200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAe1BMVEVMaXFiYmg4RVq+ydMjOkslNkNcRzBBPkaou8soIB1fZ3rHztOsop3UzsGAc3iElatlW1VWZ32ziEEoOERHaH2UnqceKzmDbF8DAAAuOkxWX2uTcWNISl96doHBvbiyvceBj59ranBOZHNgVTzHu7kJERomQVRQQUyDgoWWZP0mAAAAH3RSTlMA/vvBKvj+/ET74fj4KvvJ/vn+kqLpufkV2RX9kumicHXWGQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEdJREFUCJkFwQUCgCAQBMBFQNruOmz//0JnAM2d4wHQdBF9PiDfe6Is21AWKYv+XZGcVapmZdHdxjCVLBDyOaIcJ0A0ra0H/JpjBEEtseVTAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/images/services/extra/customers-expect/dedicated.png
/* harmony default export */ const dedicated = ({"src":"/_next/static/media/dedicated.0b9850e1.png","height":200,"width":200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAjVBMVEVMaXHW2+AmMTwMFhulrLPCx9MqLzTEp6PK0NRiR1SQb265qKldYmUdKDCclpsAAACVf398aGhALTqZpbJPP0eTnJ/U2N+KkpetkIC7m4QQDxktMDtVRlXZ3+PhzaegrLa5wsg6SFTHuqFfYmQZJC9cYGadpKzFqnuQm6O4usZ6coB6eYLW3OFmcXyytLdIqDjvAAAAJXRSTlMARPQqmiqa/vv7/v0V2fcV/v7+9v7pueH+/vn+/sn3+cn54em57rSopAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEpJREFUCJkFwQUCgCAABLBTQMDubgXs/z/PDbCGKSsZYD13f52CYdZtKqWmWLo8cWNRwFY1556osL9jw8ODgtifMSrwAeJsqxPhB7RXBOjQriLEAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/images/services/extra/customers-expect/collections.png
/* harmony default export */ const customers_expect_collections = ({"src":"/_next/static/media/collections.67a23adc.png","height":200,"width":200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAh1BMVEVMaXHHxbRveoC0ubp6fG5mUTzj5eSplFVLQTminYUmLjg4KRZ4bFxbWEdfWyyNjn27sZakq6VVPih8bkY8KBN4ho9aUkSm0//e2slxiaAjLDXT0cdgWE2flYwiIiQgJCswTmSan5utqZlHWWxWWVcRExeUjYK0uKR7kKOShm2qopiltL+hqKFRpGoEAAAAIXRSTlMA/vv79OX3/hUq+ZLZ4ZKi/fGi/ifx/i25ufb+yflEyUTOPcRBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAASElEQVQImQXBBQKAIAAEsKOxu1vA/v/73IB1nGTrAbOzA3szD4vzaU2vBL6xvFCGo9+I2tMtQvcxReQRoKn25z5DDZS5ELHGD7VPBMzsDroOAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./components/services/expectancy/subsidiary/extra/YourCustomersCanExpect.tsx










function YourCustomersCanExpect(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(entry/* Abstract */.$, {
        title: "Your customers can expect",
        className: props.className,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(YourCustomersCanExpect_Entries, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(extra_Entry, {
                    title: "client portal with tracking functionality",
                    image: client
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(extra_Entry, {
                    title: "room of choice delivery",
                    image: customers_expect_room_of_choice
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(extra_Entry, {
                    title: "furniture disposal",
                    image: furniture
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(extra_Entry, {
                    title: "assembly",
                    image: assembly
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(extra_Entry, {
                    title: "dedicated customer service and customer care departments",
                    image: dedicated
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(extra_Entry, {
                    title: "collections and exchanges",
                    image: customers_expect_collections
                })
            ]
        })
    }));
}
const YourCustomersCanExpect_Entries = external_styled_components_default().div.withConfig({
    componentId: "sc-a4b6621c-0"
})`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  justify-content: space-between;


  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
/* harmony default export */ const extra_YourCustomersCanExpect = (external_styled_components_default()(YourCustomersCanExpect).withConfig({
    componentId: "sc-a4b6621c-1"
})``);

;// CONCATENATED MODULE: ./components/services/expectancy/subsidiary/extra/index.tsx











const offers = [
    "A single point of contact",
    "Consistency of service with inconsistent volumes",
    "A dedicated warehouse for EXTRA clients",
    "IT infrastructure and support",
    "Fuss-free on-boarding process",
    "3-5 day lead time", 
];
function ExtraExpectancy(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(subsidiary_extra_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(extra_Row, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Offers, {
                        title: "we can offer you",
                        entries: offers
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(extra_OurPeople, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(extra_YourCustomersCanExpect, {})
        ]
    }));
}
const Offers = external_styled_components_default()(entry/* Bulletpoint */.L).withConfig({
    componentId: "sc-cfc3f539-0"
})`
  ${BulletpointEntry/* BulletpointContainer */.l2} {
    grid-template-columns: 1fr;

    grid-gap: 0px;
  }

  li:not(:last-child) {
    margin-bottom: 4px !important;
  }
`;
const subsidiary_extra_Container = external_styled_components_default()(subsidiary_Container).withConfig({
    componentId: "sc-cfc3f539-1"
})`
  ${AbstractEntry/* Title */.Dx} {
    color: ${components_.colours.black};
  }
  ${AbstractEntry/* Seperator */.ty} {
    background: ${extra_config/* default.primaryColour */.Z.primaryColour};
  }
`;
const extra_Row = external_styled_components_default().div.withConfig({
    componentId: "sc-cfc3f539-2"
})`
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    margin-bottom: 60px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    > :not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
/* harmony default export */ const subsidiary_extra = (external_styled_components_default()(ExtraExpectancy).withConfig({
    componentId: "sc-cfc3f539-3"
})``);

;// CONCATENATED MODULE: ./components/services/expectancy/subsidiary/index.tsx






function SubsidiaryExpectancy({ className , subsidiary  }) {
    if (subsidiary === "home delivery") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(subsidiary_home_delivery, {
            className: className
        }));
    } else if (subsidiary === "haulage") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(subsidiary_haulage, {
            className: className
        }));
    } else if (subsidiary === "constructit") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(subsidiary_construct_it, {
            className: className
        }));
    } else if (subsidiary === "extra") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(subsidiary_extra, {
            className: className
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            "Cannot find expectancy ",
            subsidiary
        ]
    }));
}
/* harmony default export */ const expectancy_subsidiary = (external_styled_components_default()(SubsidiaryExpectancy).withConfig({
    componentId: "sc-38ebdb2c-0"
})``);

// EXTERNAL MODULE: ./components/network-statistics/index.tsx + 1 modules
var network_statistics = __webpack_require__(279);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/services/our-people/blueprint/Card.tsx



const Card = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card_Container, {
        className: props.className,
        ref: ref,
        children: [
            !props.image && /*#__PURE__*/ jsx_runtime_.jsx(FakeImage, {}),
            props.image && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: props.image.src,
                height: 200
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Card_Title, {
                children: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Card_Description, {
                children: props.description
            })
        ]
    }));
});
const Card_Title = external_styled_components_default().span.withConfig({
    componentId: "sc-234635c8-0"
})`
  font-family: "Eveleth";
  white-space: nowrap;
`;
const Card_Description = external_styled_components_default().span.withConfig({
    componentId: "sc-234635c8-1"
})``;
const FakeImage = external_styled_components_default().div.withConfig({
    componentId: "sc-234635c8-2"
})`
  min-height: 200px;
  min-width: 282px;
  width: 100%;
  border: 1px solid black;
  opacity: 0.8;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;
const Card_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-234635c8-3"
})`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  flex-direction: column;
  padding: 25px 25px 40px 25px;
  border-radius: 12px;
  background: white;;
  box-shadow: 0px 3px 20px 0px #00000014;
  font-size: 14px;
  text-align: center;
  > :not(:last-child) {
    margin-bottom: 15px;
  }
  max-width: fit-content;
  max-height: 390px;
`;
/* harmony default export */ const blueprint_Card = (external_styled_components_default()(Card).withConfig({
    componentId: "sc-234635c8-4"
})``);

;// CONCATENATED MODULE: ./components/services/our-people/blueprint/ScrollableCards.tsx





const ScrollableCards = /*#__PURE__*/ (/* unused pure expression or super */ null && (forwardRef((props, ref)=>{
    return(/*#__PURE__*/ _jsx(ScrollableCards_Container, {
        ref: ref,
        className: props.className,
        children: props.children
    }));
})));
const ScrollableCards_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-ef18fe-0"
})`
  display: flex;

  @media only screen and (max-width: 1920px) {
    width: 100%;
  }

  ${blueprint_Card} {
    margin-right: 30px;
  }

  scroll-padding: 30px;
  z-index: 5;
  overflow: auto;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  ::-webkit-scrollbar:horizontal {
    padding-top: 50px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    // border: 2px solid white; /* should match background, can't be transparent */
    background-color: rgba(58, 54, 48, 0.15);
    border-radius: 66px;
  }

  ::-webkit-scrollbar-track-piece {
    margin: 0px 20px;
    // border-top-left-radius: 66px;

    height: 30px;
    background: transparent
      radial-gradient(
        closest-side at 50% 50%,
        rgba(242, 238, 232, 0.1) 0%,
        rgba(58, 54, 48, 0.1) 100%
      )
      0% 0% no-repeat padding-box;
    //  border-radius: 66px;
  }

  ${(0,external_styled_breakpoints_.down)("xs")} {
    //display: none; //Do not show this on such small screens
  }
`;
/* harmony default export */ const blueprint_ScrollableCards = (ScrollableCards_Container);

;// CONCATENATED MODULE: ./components/services/our-people/blueprint/index.tsx




const blueprint_Title = external_styled_components_default().h4.withConfig({
    componentId: "sc-7faa9cc6-0"
})`
  font-family: "Eveleth";
  font-size: 60px;
  margin:0px;

  @media only screen and (max-width: 1600px) {
    font-size: 46px;
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    font-size: 40px;
  }


  ${(0,external_styled_breakpoints_.down)("xs")} {
    white-space: nowrap;
  }
`;
const our_people_blueprint_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-7faa9cc6-1"
})`
  display: flex;
  flex-direction: column;

  ${blueprint_ScrollableCards} {
    bottom: -31%;
    padding-left: 20px;
    padding-bottom: 50px;
    left: 0px;
    position: absolute;

    ${(0,external_styled_breakpoints_.down)("sm")} {
      bottom: -235px;
    }
  }

  p {
    margin: 0;
  }
`;
const TopContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-7faa9cc6-2"
})`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: relative;
  padding: 100px;
  padding-bottom: 300px;


  ${blueprint_Title} {
    margin-bottom: 70px;
  }


  @media only screen and (max-width: 1600px) {
    padding: 80px 60px 300px 60px;
    ${blueprint_Title} {
      margin-bottom: 30px;
    }
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    padding: 60px 40px; 
    padding-bottom: 285px;
    ${blueprint_Title} {
      margin-bottom: 40px;
    }
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    padding: 65px 20px;
    padding-bottom: 240px; //240px
  }

`;
const ProgressionContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-7faa9cc6-3"
})`
  background: white;
  display: flex;
  min-height: 300px;
  min-width: 100%;

  ${(0,external_styled_breakpoints_.down)("xs")} {
    min-height: 250px;
  }
`;
function blueprint_OurPeople(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(our_people_blueprint_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TopContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(blueprint_Title, {
                        children: "Our people"
                    }),
                    props.children
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ProgressionContainer, {})
        ]
    }));
}

/* harmony default export */ const blueprint = (external_styled_components_default()(blueprint_OurPeople).withConfig({
    componentId: "sc-7faa9cc6-4"
})``);

;// CONCATENATED MODULE: ./public/images/services/homedelivery/our-people/head-of-the-class.png
/* harmony default export */ const head_of_the_class = ({"src":"/_next/static/media/head-of-the-class.2345ee75.png","height":400,"width":564,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAASFBMVEUOHBI+RkNRVF1yfHgvLiskLCYoMzVSSkW6rKcSEhOQjYU4OjdpZ1nEubR7f3ZfV0xPYm5eb3yroJQYGhlhaWo4Sz2rl4yQgXcPAia4AAAACXRSTlP+/////////v4HKoILAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVQImQXBBwIAEAwEsEON1qjt/z+VwElezMw4bUomT0BJtUQPmFudWhOgr20bRv8icAGQ3GYtBAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/images/services/homedelivery/our-people/a-to-b.png
/* harmony default export */ const a_to_b = ({"src":"/_next/static/media/a-to-b.383d677f.png","height":400,"width":564,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAUVBMVEVzfYGQj45acIRHQT2cr78CCQ2Df3c1T0tIUFNFXlA0P0JMXGYiMDmwwdp+j6N1dmoQKTBVWVs+UV51fWh1YVofHBvLvr2cr8dSaHa5yeHEuLVisH5PAAAACnRSTlP+/////v///v7+1I4QOQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADFJREFUCJkFwYUBACAMA7Aiw93h/0NJoLNSDM6i4C3WRAfn8lDwBulGT25UUIo70BQfI1YBt9QdI3wAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/services/homedelivery/our-people/brains.png
/* harmony default export */ const brains = ({"src":"/_next/static/media/brains.65aaab90.png","height":400,"width":564,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAARVBMVEU5LzMjKi5Za3xKc6lZWVxoiLGmsr0kIR0xPDkXHSCCptE4TUh7Zmw7QD50jql3f4gFCQ1KVGBOPTiCq+BunNOObnI2RD/JQ5/4AAAACHRSTlP+/////////kgsYtwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAwSURBVAiZBcGHAQAgCAOwqqDFPf9/1QQ0s2kEmJyTUjYosnL2FRxRw9GK5mMPV98HHTwBYiQKjB4AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/services/homedelivery/our-people/prepared.png
/* harmony default export */ const prepared = ({"src":"/_next/static/media/prepared.9b0bb254.png","height":400,"width":564,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAASFBMVEVuamSUrb5QOyszIBJueGU5KyAeJykMDAmKoaxoVlqCaGIvLShgRjGRj5F3ZGOSn6xyfH9iXktGQk02PkdYeJ2ScWuJeXJneJbYK4jQAAAACnRSTlP+/////v7//v7+6e45iQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADFJREFUCJkFwQcCwCAIBLADLCru/f+fNkHOzPKJoCAlPhgI3avF7UBN1earIFp6a7EfHQMBeVO8EQ8AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/services/homedelivery/our-people/qualified.png
/* harmony default export */ const qualified = ({"src":"/_next/static/media/qualified.cc90389d.png","height":400,"width":564,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAUVBMVEW4v7+mq6nMxbLc4NuCgmWCdzrGxal/f3C3roennYvKzbvi1qeus6xcXU8/RDdVXl1KZH9ncW24so3K1tjBuZt7dkCopnaNi1CrhkN5XBdmg5/j6A/DAAAACnRSTlP+/////v7//v7+6e45iQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADRJREFUCJkFwQcCgCAMBLArlcqmosj4/0NJACPSnFx47s8E8h2UOP5aLd7Acew8UXKiqmUdIj4BzpMbDRUAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/services/homedelivery/our-people/putting-together.png
/* harmony default export */ const putting_together = ({"src":"/_next/static/media/putting-together.f1c10bc1.png","height":400,"width":564,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAATlBMVEWyrZXT0c+XlZG1urnOxa7IyMXt6+kpKBuniW3NzcK8sJ2yo4vZ0cCgnJGMh3CUlImQkF3p5d3Hs47j0bSjn4rm5N/FtqdoVytVTzG8sWr9KKIoAAAACnRSTlP+/////////v7+H9LDnAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADRJREFUCJkFwQcCgCAMBLCDDrVlCMrw/x81wbHOXGIU7KJjGgVcn6qBAoS5+VsFd+pPYs8/JKwBprbOfMkAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/services/our-people/subsidiary/home-delivery/HomeDeliveryTextPiece.tsx



function HomeDeliveryTextPiece(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(HomeDeliveryTextPiece_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(FirstPiece, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(SecondPiece, {})
        ]
    }));
}
function FirstPiece() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(First, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "We value the ",
                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: "whole customer experience"
                    }),
                    ", and we aim to meet the highest standards across a wide variety of tasks. That’s why we’ve created our own dedicated training academy – ensuring that our delivery teams have all the skills required to provide the very best service experience for your customers."
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Our people are our product, so the whole team undertake a tailored training programme to provide the very best delivery service standards."
            })
        ]
    }));
}
function SecondPiece() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Second, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Our training includes furniture handling, furniture building, exacting Health & Safety standards as well as all the little things that make a big difference for your customers."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "All in all, we're constantly looking for staff who are genuinely people-centric, or in other words... really, really nice."
            })
        ]
    }));
}
const HomeDeliveryTextPiece_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-8e8743e0-0"
})`
  display: flex;
  gap: 100px;

  @media only screen and (max-width: 1895px) {
    gap: 40px;
  }

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    gap: 0px;
  }
`;
const Piece = external_styled_components_default().div.withConfig({
    componentId: "sc-8e8743e0-1"
})`
  display: flex;
  flex-direction: column;

  max-width: 500px;

  @media only screen and (max-width: 1850px) {
    max-width: 30%;
  }

  @media only screen and (max-width: 1720px) {
    max-width: 28%;
  }

  @media only screen and (max-width: 1450px) {
    max-width: 25%;
  }

  @media only screen and (max-width: 1315px) {
    max-width: 20%;
  }

  @media only screen and (max-width: 1200px) {
    max-width: 47%;
  }

  @media only screen and (max-width: 1090px) {
    max-width: 40%;
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
      max-width: 100%;
  }

  p {
    margin-bottom: 20px;
  }


`;
const First = external_styled_components_default()(Piece).withConfig({
    componentId: "sc-8e8743e0-2"
})``;
const Second = external_styled_components_default()(Piece).withConfig({
    componentId: "sc-8e8743e0-3"
})``;
/* harmony default export */ const home_delivery_HomeDeliveryTextPiece = (HomeDeliveryTextPiece);

;// CONCATENATED MODULE: ./components/services/our-people/subsidiary/home-delivery/index.tsx













const TRANSFORM_TO_COLUMN_BREAKPOINT = 1560;
const TRANSFORM_TO_FULL_WIDTH = 1200;
function HomeDelivery() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(subsidiary_home_delivery_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(home_delivery_HomeDeliveryTextPiece, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(blueprint_ScrollableCards, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(blueprint_Card, {
                        title: "head of the class",
                        description: "Once we've found people with the right attitude - we invest time and energy into helping them 'learn the ropes' well.",
                        image: head_of_the_class
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(blueprint_Card, {
                        title: "getting from a to b",
                        description: "In order to get to a customer on-time, we help our teams improve their navigation and driving skills.",
                        image: a_to_b
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(blueprint_Card, {
                        title: "brains as well as brawn",
                        description: "All our teams are thoroughly trained in how to move large and awkward items safely and without damage.",
                        image: brains
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(blueprint_Card, {
                        title: "be prepared",
                        description: "We check a home before moving items inside, measuring doors and tight-spaces to ensure the minimum of fuss.",
                        image: prepared
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(blueprint_Card, {
                        title: "putting it all together",
                        description: "Each team is thoroughly trained in how to assemble and install every item of furniture and equipment we deliver.",
                        image: putting_together
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(blueprint_Card, {
                        title: "qualified and ready",
                        description: "After three weeks of training, our teams are ready to provide a great two-man delivery service to your customers.",
                        image: qualified
                    })
                ]
            })
        ]
    }));
}
const subsidiary_home_delivery_Container = external_styled_components_default()(blueprint).withConfig({
    componentId: "sc-f9d86396-0"
})`
  ${(0,external_styled_breakpoints_.up)("lg")} {
    background: url("/images/services/homedelivery/our-people/two-men.png")
      no-repeat bottom 300px right 90px;
    background-color: #e2e0de;

    @media only screen and (max-width: 1800px) {
      background-position: bottom 300px right 50px;
    }

    @media only screen and (max-width: 1600px) {
      background-position: bottom 300px right 0px;
    }

    @media only screen and (max-width: 1200px) {
      background-position: bottom 370px right -60px;
    }
  }

  background-color: #e2e0de;
  ${TopContainer} {
  }
`;
const home_delivery_Grid = external_styled_components_default().div.withConfig({
    componentId: "sc-f9d86396-1"
})`
  display: grid;
  grid-template-columns: repeat(2, 500px);
  grid-gap: 0px 60px;
  grid-template-rows: repeat(2, min-content);
  grid-auto-flow: column;
`;
const home_delivery_Body = external_styled_components_default().div.withConfig({
    componentId: "sc-f9d86396-2"
})`
  display: flex;
  gap: 60px;
  width: 65%;
  position: relative;

  @media only screen and (max-width: 1600px) {
    width: 100%;
    gap: 40px;
  }

  @media only screen and (max-width: ${TRANSFORM_TO_COLUMN_BREAKPOINT}px) {
    flex-direction: column;
    gap: 0px;
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    width: 100%;
  }
`;
const Column = external_styled_components_default().div.withConfig({
    componentId: "sc-f9d86396-3"
})`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex-basis: 50%;

  @media only screen and (max-width: ${TRANSFORM_TO_COLUMN_BREAKPOINT}px) {
    gap: 0px;
  }

  @media only screen and (max-width: 1600px) {
    font-size: 14px;
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    gap: 0px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    p {
      margin-bottom: 1.5em;
    }
  }
`;
const FirstColumn = external_styled_components_default()(Column).withConfig({
    componentId: "sc-f9d86396-4"
})`
  // flex-basis: 40%;
  @media only screen and (max-width: 1600px) {
    max-width: 80ch;
  }
  @media only screen and (max-width: ${TRANSFORM_TO_COLUMN_BREAKPOINT}px) {
    max-width: 107ch;
  }

  @media only screen and (max-width: 1300px) {
    max-width: 70ch;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    max-width: 100%;
  }
`;
const SecondColumn = external_styled_components_default()(Column).withConfig({
    componentId: "sc-f9d86396-5"
})`
  @media only screen and (max-width: 1600px) {
    max-width: 45ch;
  }

  @media only screen and (max-width: ${TRANSFORM_TO_COLUMN_BREAKPOINT}px) {
    max-width: 100ch;
  }

  @media only screen and (max-width: 1300px) {
    max-width: 75ch;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    max-width: 100%;
  }
`;
/* harmony default export */ const our_people_subsidiary_home_delivery = (HomeDelivery);

;// CONCATENATED MODULE: ./public/images/services/haulage/our-people/supply-chain.jpg
/* harmony default export */ const supply_chain = ({"src":"/_next/static/media/supply-chain.114c4625.jpg","height":200,"width":282,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAdEAAABgMBAAAAAAAAAAAAAAAAAQIDBBEFEjEh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEQMRAD8An+QyseRg0wWCfKj2Ub2qrPy6rnAABQjf/9k="});
;// CONCATENATED MODULE: ./public/images/services/haulage/our-people/solutions-oriented.jpg
/* harmony default export */ const solutions_oriented = ({"src":"/_next/static/media/solutions-oriented.1ffcbe3b.jpg","height":200,"width":282,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAfEAABBAAHAAAAAAAAAAAAAAABAAIDBAUGEyExUeH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAGxEAAgIDAQAAAAAAAAAAAAAAAQIAAxESITH/2gAMAwEAAhEDEQA/AI1nP0t2hiMlmhEBI4GHT2LARx72iIhWioEnUdjM7eZn/9k="});
;// CONCATENATED MODULE: ./public/images/services/haulage/our-people/big-on-trucks.jpg
/* harmony default export */ const big_on_trucks = ({"src":"/_next/static/media/big-on-trucks.8ffb5943.jpg","height":200,"width":282,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAACAgIDAQAAAAAAAAAAAAABAgAEAxEGEiFC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAMAwEAAhEDEQA/AJOlym5ma7YdMY7uMDFVCkhidDz5GoiIYVi3/9k="});
;// CONCATENATED MODULE: ./public/images/services/haulage/our-people/efficiency-drivers.jpg
/* harmony default export */ const efficiency_drivers = ({"src":"/_next/static/media/efficiency-drivers.9e95b87e.jpg","height":200,"width":282,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAACAgIDAAAAAAAAAAAAAAAAAgEDBCEFEzH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oADAMBAAIRAxEAPwCuyePrsfqXTNG5nwADAhrf/9k="});
;// CONCATENATED MODULE: ./public/images/services/haulage/our-people/equipped-for-any-challenge.jpg
/* harmony default export */ const equipped_for_any_challenge = ({"src":"/_next/static/media/equipped-for-any-challenge.226eb0ef.jpg","height":200,"width":282,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAeEAABBAEFAAAAAAAAAAAAAAABAAIDBBEFBiExQf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAGREAAgMBAAAAAAAAAAAAAAAAAAECE9ER/9oADAMBAAIRAxEAPwCTe3hSpQyV3aNEZM4ZggtDfTyO0RFKopvWLJcWI//Z"});
;// CONCATENATED MODULE: ./public/images/services/haulage/our-people/tech-team.jpg
/* harmony default export */ const tech_team = ({"src":"/_next/static/media/tech-team.ac795c70.jpg","height":200,"width":282,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAbEAACAgMBAAAAAAAAAAAAAAAAAwECBBIxEf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8At8rJax2utIXFI530AEDf/9k="});
;// CONCATENATED MODULE: ./public/images/services/haulage/our-people/man-holding-fastener.png
/* harmony default export */ const man_holding_fastener = ({"src":"/_next/static/media/man-holding-fastener.369f1a93.png","height":1315,"width":814,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAM1BMVEVgLE1eRCmqMAVQKTFfOCyicBA2KS6+iQ95aE6HNQg0Gh7raBh6NCXWTge1ThiaKQGgPAuylFWDAAAADnRSTlMBfGRfkTsnIBNx5WGtcbxX8ZkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAsSURBVAiZJcVREoAQFADArdRDwv1Pa0z7s25bxF+WeY50IfWGt1d8s6CMcwENYAC606GVbwAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/services/our-people/subsidiary/haulage/SupportingIllustration.tsx




function SupportingIllustration(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(SupportingIllustration_Container, {
        className: props.className,
        children: /*#__PURE__*/ jsx_runtime_.jsx(MiniContainer, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: man_holding_fastener,
                layout: "fill"
            })
        })
    }));
}
const SupportingIllustration_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-74da67d0-0"
})`
  position: absolute;
  height: 100%;
  right: 150px;
  top: 0px;
  overflow: hidden;

  @media only screen and (max-width: 1550px) {
    right: 0px;
  }

  @media only screen and (max-width: 994px) {
    display: none;
  }

`;
const MiniContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-74da67d0-1"
})`
  height: 1330px;
  width: 850px;
  top: -400px;
  position: relative;
`;
/* harmony default export */ const haulage_SupportingIllustration = (SupportingIllustration);

;// CONCATENATED MODULE: ./components/services/our-people/subsidiary/haulage/index.tsx













const cards = [
    {
        title: "Supply chain superstars",
        description: "We understand the big picture and ensure we seamlessly fulfil our link in your chain. We deliver peace of mind with every load.",
        image: supply_chain
    },
    {
        title: "Solutions oriented, service-led",
        description: "We might be all about big trucks but we are agile thinkers keen to fit around you; so if you’re requirements are a little out of the ordinary then let us prove to you that we are too!",
        image: solutions_oriented
    },
    {
        title: "Big on trucks, big on detail",
        description: "You can be confident that BJS Haulage will deliver an end-to-end service driven by the highest customer service levels.",
        image: big_on_trucks
    },
    {
        title: "Efficiency drivers",
        description: "Our teams are constantly looking at ways to increase efficiency; reducing costs means we can provide backloads and return loads wherever possible.",
        image: efficiency_drivers
    },
    {
        title: "Equipped for any challenge",
        description: "Our class-leading expertise is born from our internal training managers – ensuring our teams have the knowledge right from the start.",
        image: equipped_for_any_challenge
    },
    {
        title: "Tech team on hand",
        description: "Our dedicated internal tech team means across all our hardware and software, it’s all systems go, all the time.",
        image: tech_team
    }, 
];
function haulage_Haulage(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(our_people_subsidiary_haulage_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(haulage_Body, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(haulage_FirstColumn, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "We value the ",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "whole customer experience"
                                }),
                                ", and we aim to meet the highest standards across a wide variety of tasks. That’s why we’ve created our own dedicated training academy – ensuring that our delivery teams have all the skills required to provide the very best service experience for your customers."
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Our people are our product, so the whole team undertake a tailored training programme to provide the very best delivery service standards."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(blueprint_ScrollableCards, {
                children: cards.map((card, index)=>/*#__PURE__*/ jsx_runtime_.jsx(blueprint_Card, {
                        ...card
                    }, index)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(haulage_SupportingIllustration, {})
        ]
    }));
}
const our_people_subsidiary_haulage_Container = external_styled_components_default()(blueprint).withConfig({
    componentId: "sc-340cf7d8-0"
})`
  background: linear-gradient(#e2e0dd, #f5f0ea);
  position: relative;

  ${blueprint_Card} {
    max-width: 332px;
    max-height: 437px;
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    ${blueprint_ScrollableCards} {
      bottom: -29%;
    }
  }

  ${blueprint_Title} {
    margin-bottom: 40px;
  }
`;
const haulage_Body = external_styled_components_default().div.withConfig({
    componentId: "sc-340cf7d8-1"
})`
  display: flex;

  > :not(:last-child) {
    margin-right: 60px;
  }
  position: relative;

  ${(0,external_styled_breakpoints_.down)("md")} {
    width: 100%;
    flex-direction: column;

    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 60px;
    }
  }
`;
const haulage_Column = external_styled_components_default().div.withConfig({
    componentId: "sc-340cf7d8-2"
})`
  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 30px;
  }
`;
const haulage_FirstColumn = external_styled_components_default()(haulage_Column).withConfig({
    componentId: "sc-340cf7d8-3"
})`
  // flex-basis: 40%;
  margin-bottom: 60px;

  max-width: 885px;

  @media only screen and (max-width: 1660px) {
    max-width: 760px;
  }

  @media only screen and (max-width: 1350px) {
    max-width: 690px;
  }

  @media only screen and (max-width: 1300px) {
    max-width: 600px;
  }

  @media only screen and (max-width: 1200px) {
    max-width: 560px;
  }

  @media only screen and (max-width: 1170px) {
    max-width: 500px;
  }

  @media only screen and (max-width: 1090px) {
    max-width: 400px;
  }

  @media only screen and (max-width: 994px) {
    max-width: 100%;
  }

  p {
    //  margin: 0;
  }
`;
/* harmony default export */ const our_people_subsidiary_haulage = (external_styled_components_default()(haulage_Haulage).withConfig({
    componentId: "sc-340cf7d8-4"
})``);

;// CONCATENATED MODULE: ./public/images/services/construct-it/our-people/industry-leading.png
/* harmony default export */ const industry_leading = ({"src":"/_next/static/media/industry-leading.7b7f8b09.png","height":400,"width":564,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAUVBMVEWap7MqN0G0ZU+QmU/i5+2ovcuvXE86T1qPjXFjfZx3lHVcS09JXGjd37qoq5+GUEeYjI6+y9Dsfl7AgHB/iZydSDG7ZUN+amOTbmDUgVtYWmt4dslXAAAACnRSTlP+/////////v7+H9LDnAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADFJREFUCJkFwYUBACAMA7ACw93l/0NJICvFSARIDOeSDdCeC2EeA8uNh7M8ilI93bk/IAoBtY1MyfcAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/services/construct-it/our-people/heart.jpg
/* harmony default export */ const heart = ({"src":"/_next/static/media/heart.79a04378.jpg","height":200,"width":282,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAaEAACAwEBAAAAAAAAAAAAAAAAAQIDBCEU/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAP/xAAYEQEBAAMAAAAAAAAAAAAAAAABAAIRIf/aAAwDAQACEQMRAD8AsMu+PsnU6+qpdQAJ4gHIu7//2Q=="});
;// CONCATENATED MODULE: ./public/images/services/construct-it/our-people/service-led.png
/* harmony default export */ const service_led = ({"src":"/_next/static/media/service-led.af097628.png","height":400,"width":564,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAV1BMVEW0bVFvYW3GkYc/RU6usLqnYUYSJzfS1taRjY60kYwfNkKGc3ZTRDkiKjW6vcHmhV78gkuab2W5jYWUZFmMST6ykJ3Tp5loZXHegFxvWln9bjLLblHbmobyfolKAAAACnRSTlP+/////v///v7+1I4QOQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADRJREFUCJkFwQcCgDAIBLADhG47tO7/v9MENGNJy+pAQfQ6fEbe8Cm6oNwPD04Rdu5vbWo/JtwB236eFW4AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/services/construct-it/our-people/harry.png
/* harmony default export */ const harry = ({"src":"/_next/static/media/harry.d6b25502.png","height":400,"width":564,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAASFBMVEX///++vrvv9PhxV1ra2tvm5uS6197W7PCt2uHKysh8d4qIws5XXG6h1N9oZWzP5ejQyNaXkJpvdYh9cIWDZmXGv7w+RFHJ2Nz4ZVWqAAAACHRSTlP+/////////kgsYtwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAySURBVAiZY2BkYWDj5uBgY+BkZeIR4uXgBzGYRbh52Rk4WQSEmUX5xRkYBbm4+Ph4xAAd4gGXtyvoKgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/images/services/construct-it/our-people/close-knit.png
/* harmony default export */ const close_knit = ({"src":"/_next/static/media/close-knit.9c314b08.png","height":400,"width":564,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAVFBMVEXm3d7Sw7LMyLsqIx6/t6KYnJ3Uwqq7pYulmXL0yEnjxoTd0MMNEA4xNjk7RU1/fH6HmKOonotwamRHNCahtMRMRj7Gs6Hu2KXyy2WcsbhwbW3f3MQL+qnlAAAACnRSTlP+/////v7//v7+6e45iQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADRJREFUCJkFwQkCwBAQBLBZdNVN3fr/f0qgBxMRMyzsdM4svE2U9PwKsn9x5xxRpQ/pBH8BJScB51CpvfMAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/services/our-people/subsidiary/construct-it/index.tsx













const construct_it_cards = [
    {
        title: "Industry leading training",
        description: "Class-leading expertise from our internal training managers – alongside ALLMI and FORS recognised partners.",
        image: industry_leading
    },
    {
        title: "H&S at the heart of it",
        description: "We ensure safe working practices at all times for staff, customers, contractors, and the wider public.",
        image: heart
    },
    {
        title: "Service-led",
        description: "Our team are reliable, responsive, adaptable, and built on service-first foundations.",
        image: service_led
    },
    {
        title: "Quick thinkers",
        description: "We have our very own dedicated in-house tech team so we can keep our wheels rolling in the right direction.",
        image: harry
    },
    {
        title: "Close knit",
        description: "Our single central hub comprises of an experienced team of construction transport sector professionals.",
        image: close_knit
    }, 
];
function construct_it_ConstructIT(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(our_people_subsidiary_construct_it_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Subtitle, {
                children: "Health & Safety is at the heart of everything we do."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(construct_it_Description, {
                children: "The health and well-being of our team, our customers and the general public is something that should go without saying, but not every operator feels the same way. So let us assure you that we are determined to provide a safe working environment for everyone involved."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(blueprint_ScrollableCards, {
                children: construct_it_cards.map((card, index)=>/*#__PURE__*/ (0,external_react_.createElement)(blueprint_Card, {
                        ...card,
                        key: index
                    })
                )
            })
        ]
    }));
}
const Subtitle = external_styled_components_default().span.withConfig({
    componentId: "sc-1670badc-0"
})`
  font-size: 22px;
  font-weight: bold;
  color: #615e59;

  ${(0,external_styled_breakpoints_.down)("sm")} {
    color: ${components_.colours.black};
  }
`;
const construct_it_Description = external_styled_components_default().span.withConfig({
    componentId: "sc-1670badc-1"
})``;
const our_people_subsidiary_construct_it_Container = external_styled_components_default()(blueprint).withConfig({
    componentId: "sc-1670badc-2"
})`
  ${(0,external_styled_breakpoints_.up)("lg")} {
    background: url("/images/services/construct-it/our-people/background-guy.png")
        no-repeat,
      linear-gradient(360deg, #f5f0ea 0%, #e2e0dd 100%);
    background-position: top right 300px;
    position: relative;
    ${Subtitle} {
      margin-bottom: 40px;
    }
    ${construct_it_Description} {
      width: 40%;
    }
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    ${Subtitle} {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
`;
/* harmony default export */ const our_people_subsidiary_construct_it = (construct_it_ConstructIT);

;// CONCATENATED MODULE: ./components/services/our-people/subsidiary/index.tsx




function OurPeopleSubsidiary({ subsidiary , className  }) {
    if (subsidiary === "haulage") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(our_people_subsidiary_haulage, {
            className: className
        }));
    } else if (subsidiary === "constructit") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(our_people_subsidiary_construct_it, {
            className: className
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(our_people_subsidiary_home_delivery, {}));
}
/* harmony default export */ const our_people_subsidiary = (OurPeopleSubsidiary);

// EXTERNAL MODULE: ./components/feedback/index.tsx + 7 modules
var feedback = __webpack_require__(2617);
// EXTERNAL MODULE: ./components/subsidiary-showcase/grid/SubsidiaryElement.tsx
var SubsidiaryElement = __webpack_require__(9458);
// EXTERNAL MODULE: ./components/subsidiary-showcase/SubsidiaryBar.tsx + 4 modules
var SubsidiaryBar = __webpack_require__(9829);
// EXTERNAL MODULE: ./components/subsidiary-showcase/grid/SubsidiaryGrid.tsx + 1 modules
var SubsidiaryGrid = __webpack_require__(9836);
;// CONCATENATED MODULE: ./components/services/ServicesSubsidiaryBar.tsx






function ServicesSubsidiaryBar(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Bar, {
        right: "talk to us",
        className: props.className
    }));
}
const Bar = external_styled_components_default()(SubsidiaryBar/* default */.Z).withConfig({
    componentId: "sc-4568244a-0"
})`
  width: 100%;
  z-index: 50;
  top: auto;
  position: fixed;
  bottom: 0px;

  background: transparent linear-gradient(90deg, #ffffff 0%, #ffffff 100%) 0% 0%
    no-repeat padding-box;

  box-shadow: 0px 0px 10px #00000014;

  background: white;
  border: 2px solid #cccccc;
  
  height: 98px;

  ${(0,external_styled_breakpoints_.up)("lg")} {
    height: 100px;
  }

  ${SubsidiaryGrid/* default */.Z} {
    ${SubsidiaryElement/* SelectedIndicator */.HQ} {
      top: -3px;
      z-index: 5;
     
    }
  }
`;
/* harmony default export */ const services_ServicesSubsidiaryBar = (external_styled_components_default()(ServicesSubsidiaryBar).withConfig({
    componentId: "sc-4568244a-1"
})``);

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
// EXTERNAL MODULE: ./components/feedback/what-customers-think/DoubleArrow.tsx
var DoubleArrow = __webpack_require__(8031);
;// CONCATENATED MODULE: ./components/services/case-study/blueprint/Page.tsx




function Page(props) {
    var _title;
    const title = (_title = props.title) !== null && _title !== void 0 ? _title : "Case study";
    /* 
        <DoubleArrow onClickLeft={props.onClickLeft} onClickRight={props.onClickRight} />*/ return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Page_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Page_Header, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Page_Title, {
                    children: title
                })
            }),
            props.children
        ]
    }));
}
const Page_Title = external_styled_components_default().h3.withConfig({
    componentId: "sc-d4a22139-0"
})`
  font-family: "Eveleth";
  color: #14191e;
  font-size: 36px;

  ${(0,external_styled_breakpoints_.down)("md")} {
    font-size: 30px;
  }
`;
const Page_Header = external_styled_components_default().div.withConfig({
    componentId: "sc-d4a22139-1"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${DoubleArrow/* default */.Z} {
    color: #9a9793;
    font-size: 60px !important;
  }
`;
const Page_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-d4a22139-2"
})`
  padding: 100px;
  display: flex;
  flex-direction: column;

  ${Page_Header} {
    margin-bottom: 80px;
  }


  @media only screen and (max-width: 1600px) {
    padding: 70px 60px;

    ${Page_Header} {
      margin-bottom: 60px;
    }
  }


  ${(0,external_styled_breakpoints_.down)("md")} {
    padding: 60px 40px;

    ${Page_Header} {
      margin-bottom: 50px;
    }
  }


  ${(0,external_styled_breakpoints_.down)("sm")} {
    padding: 65px 20px;
  }
`;
/* harmony default export */ const blueprint_Page = (external_styled_components_default()(Page).withConfig({
    componentId: "sc-d4a22139-3"
})``);

;// CONCATENATED MODULE: ./components/services/case-study/blueprint/ContentPiece.ts


const ContentPiece = external_styled_components_default().div.withConfig({
    componentId: "sc-16beb85b-0"
})`
  display: flex;

  ${(0,external_styled_breakpoints_.down)("sm")} {
    flex-direction: column;
    padding-right: 40px;
  }
`;
/* harmony default export */ const blueprint_ContentPiece = (ContentPiece);

;// CONCATENATED MODULE: ./components/services/case-study/blueprint/ReadMore.tsx







function ReadMore(props) {
    const onTabletOrSmaller = (0,useIsTabletOrSmaller/* default */.ZP)();
    const { 0: opened , 1: setOpened  } = (0,external_react_.useState)(false);
    const shouldBeOpen = (0,external_react_.useMemo)(()=>{
        var ref;
        const onDesktop = (ref = !onTabletOrSmaller) !== null && ref !== void 0 ? ref : false;
        if (onDesktop) {
            return true;
        }
        return opened;
    }, [
        onTabletOrSmaller,
        opened
    ]);
    let children;
    if (shouldBeOpen) {
        children = props.children;
    } else {
        children = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ReadMoreButton, {
            onClick: ()=>setOpened(true)
            ,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: "Read more"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                    icon: pro_solid_svg_icons_.faChevronDown
                })
            ]
        });
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(ReadMore_Container, {
        className: props.className,
        children: children
    }));
}
const ReadMore_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-b1d1ac4e-0"
})``;
const ReadMoreButton = external_styled_components_default()(components_.Button).withConfig({
    componentId: "sc-b1d1ac4e-1"
})`
  border: 1px solid #707070;
  background: transparent;
  color: #747474;
  opacity: 0.65;
  width: min-content;
  padding: 14px 20px;
  font-style: italic;
  text-transform: none;
  font-size: 14px;

  > :not(:last-child) {
    margin-right: 30px;
  }
`;
/* harmony default export */ const blueprint_ReadMore = (external_styled_components_default()(ReadMore).withConfig({
    componentId: "sc-b1d1ac4e-2"
})``);

;// CONCATENATED MODULE: ./components/services/case-study/blueprint/ExplanativeQuote.tsx




function ExplanativeQuote(props) {
    const description = `"${props.description}"`;
    var _italic;
    const italic = (_italic = props.italic) !== null && _italic !== void 0 ? _italic : true;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ExplanativeQuote_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Italic, {
                italic: italic,
                children: description
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Explanation, {
                children: [
                    "explains ",
                    props.author
                ]
            })
        ]
    }));
}
const Italic = external_styled_components_default().span.withConfig({
    componentId: "sc-8e7d1830-0"
})`
  ${(props)=>props.italic && "font-style: italic;"
};
`;
const Explanation = external_styled_components_default().span.withConfig({
    componentId: "sc-8e7d1830-1"
})`
  color: rgba(58, 54, 48, 0.65);
`;
const ExplanativeQuote_Container = external_styled_components_default()(blueprint_ContentPiece).withConfig({
    componentId: "sc-8e7d1830-2"
})`
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 40px;
  }

  ${(0,external_styled_breakpoints_.up)("lg")} {
    flex-basis: 33%;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    > :not(:last-child) {
      margin-bottom: 28px;
    }
  }
`;
/* harmony default export */ const blueprint_ExplanativeQuote = (external_styled_components_default()(ExplanativeQuote).withConfig({
    componentId: "sc-8e7d1830-3"
})``);

;// CONCATENATED MODULE: ./components/services/case-study/blueprint/index.tsx







const blueprint_Header = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-6f2c33f4-0"
})`
  display: flex;
  width: 100%;
  position: relative;
  font-size: 16px;

  ${(0,external_styled_breakpoints_.only)("md")} {
    > :not(:last-child) {
      margin-bottom: 40px;
    }
  }

  ${(0,external_styled_breakpoints_.up)("lg")} {
    justify-content: space-between;
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    flex-direction: column;
  }

  margin-bottom: 60px;
`;

/* harmony default export */ const case_study_blueprint = (blueprint_Page);

;// CONCATENATED MODULE: ./components/services/case-study/Slideshow.tsx




function Slideshow(props) {
    const { 0: index , 1: setIndex  } = (0,external_react_.useState)(0);
    const total = (0,external_react_.useMemo)(()=>props.pages.length
    , [
        props.pages
    ]);
    const onClickLeft = ()=>{
        setIndex((old)=>{
            if (old === 0) {
                return total - 1;
            }
            return old - 1;
        });
    };
    const onClickRight = ()=>{
        setIndex((old)=>{
            if (old === total - 1) {
                return 0;
            }
            return old + 1;
        });
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(Slideshow_Container, {
        title: props.title,
        onClickLeft: onClickLeft,
        onClickRight: onClickRight,
        children: props.pages[index]
    }));
}
const Slideshow_Container = external_styled_components_default()(case_study_blueprint).withConfig({
    componentId: "sc-6a832ec-0"
})`
  ${blueprint_ExplanativeQuote} {
  }

  @media only screen and (min-width: 1601px) {
    padding-bottom: 130px;
  }
`;
/* harmony default export */ const case_study_Slideshow = (external_styled_components_default()(Slideshow).withConfig({
    componentId: "sc-6a832ec-1"
})``);

;// CONCATENATED MODULE: ./components/services/case-study/blueprint/IntroductionPiece.tsx





function IntroductionPiece(props) {
    const isOnlyTablet = (0,useIsTabletOrSmaller/* useIsOnlyTablet */.Ef)();
    var ref;
    const children = (ref = external_react_default().Children.map(props.children, (element)=>element
    )) !== null && ref !== void 0 ? ref : [];
    if (isOnlyTablet) {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(TabletContainer, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(TabletHeader, {
                    children: children.slice(0, 2)
                }),
                children.slice(2, 3)
            ]
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(ThreePiece, {
        className: props.className,
        children: props.children
    }));
}
const ThreePiece = external_styled_components_default().div.withConfig({
    componentId: "sc-11007f2-0"
})`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${(0,external_styled_breakpoints_.down)("sm")} {
    flex-direction: column;
  }

  ${(0,external_styled_breakpoints_.up)("lg")} {
    > :not(:last-child) {
      margin-right: 100px;
    }

    > div:nth-child(2),
    > div:nth-child(3) {
      //Target 2nd and 3rd element
      flex: 1;
    }
  }
`;
const TabletContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-11007f2-1"
})`
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    margin-bottom: 60px;
  }
`;
const TabletHeader = external_styled_components_default().div.withConfig({
    componentId: "sc-11007f2-2"
})`
  display: flex;
  justify-content: space-between;
  > :not(:last-child) {
    margin-right: 36px;
  }
`;
/* harmony default export */ const blueprint_IntroductionPiece = (external_styled_components_default()(IntroductionPiece).withConfig({
    componentId: "sc-11007f2-3"
})``);

// EXTERNAL MODULE: ./components/services/case-study/blueprint/LargeQuote.tsx
var LargeQuote = __webpack_require__(6801);
;// CONCATENATED MODULE: ./components/services/case-study/subsidiary/construct-it/man-data/index.tsx









function ManDataCaseStudy() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(man_data_Container, {
        initial: {
            x: -500
        },
        animate: {
            x: 0
        },
        transition: {
            duration: 1
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CaseStudyHeader, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(blueprint_IntroductionPiece, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(LogoContainer, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: "/images/services/case-study/mandata/logo.png",
                                layout: "fill"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(blueprint_ExplanativeQuote, {
                            description: "We have many years’ experience delivering furniture to homes and offices throughout the UK. However, our expansion into the food, retail, construction and manufacturing haulage sectors requires its own dedicated fleet and transport management control system and that’s where Mandata comes in.",
                            author: "Operations Director, Amarat Gill"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Explanatory, {
                            children: "With over 50 relatively new artics already on the road, BJS expects to more than double its fleet size in the coming months and as a result, says Operations Director Amarat Gill, the business needed a comprehensive transport management system to keep pace with their ambitious growth plans."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BottomRow, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(man_data_ImageContainer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: "/images/services/case-study/mandata/inside.jpg",
                            layout: "fill"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BottomBody, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(LargeQuote/* default */.ZP, {
                                text: " Real-time data feeds such as live drivers' hours, vehicle location and load progress with live ETAs on an arrivals board, will enable us to find and resolve problems early"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ContinuedQuote, {
                                children: "Our goal is to further connect the traffic office with customers and realising BJS Haulage’s objective to maintain complete transparency throughout the delivery process, text and email notifications will keep customers informed in real-time regarding each delivery."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.mandata.co.uk/customerstories/home-delivery-specialist-grows-haulage-operation-with-mandata-tms",
                                target: "_blank",
                                style: {
                                    textDecoration: "none"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_.Button, {
                                    colors: "dark",
                                    id: "construct-it-go-to-mandata-full-story",
                                    children: "Full story"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}
const man_data_Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-c5aaa681-0"
})`
  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 80px;

    ${(0,external_styled_breakpoints_.only)("md")} {
      margin-bottom: 60px;
    }

    ${(0,external_styled_breakpoints_.down)("sm")} {
      margin-bottom: 40px;
    }
  }
`;
const ContinuedQuote = external_styled_components_default().div.withConfig({
    componentId: "sc-c5aaa681-1"
})`
  font-size: 16px;
  position: relative;
`;
const BottomRow = external_styled_components_default().div.withConfig({
    componentId: "sc-c5aaa681-2"
})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  > :not(:last-child) {
    margin-right: 100px;
  }

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 30px;
    }
  }
`;
const BottomBody = external_styled_components_default().div.withConfig({
    componentId: "sc-c5aaa681-3"
})`
  display: flex;
  flex-direction: column;

  ${LargeQuote/* default */.ZP} {
    margin-bottom: 60px;
  }

  ${ContinuedQuote} {
    margin-bottom: 50px;
  }

  ${components_.Button.PlainButton} {
    width: min-content;
    max-height: 56px;
  }
`;
const man_data_ImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-c5aaa681-4"
})`
  min-height: 400px;
  min-width: 700px;
  position: relative;

  ${(0,external_styled_breakpoints_.down)("md")} {
    max-width: 100%;
    min-width: 100%;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    min-height: 250px;
  }
`;
const LogoContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-c5aaa681-5"
})`
  min-width: 255px;
  min-height: 91px;
  max-width: 255px;
  max-height: 91px;

  position: relative;

  ${(0,external_styled_breakpoints_.down)("sm")} {
    margin-left: auto;
    margin-right: auto;
  }
`;
const CaseStudyHeader = external_styled_components_default()(blueprint_Header).withConfig({
    componentId: "sc-c5aaa681-6"
})`
  ${(0,external_styled_breakpoints_.down)("sm")} {
    ${LogoContainer} {
      margin-bottom: 50px;
    }

    ${blueprint_ExplanativeQuote} {
      margin-bottom: 40px;
    }
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    flex-direction: column;
  }
`;
const Explanatory = external_styled_components_default().div.withConfig({
    componentId: "sc-c5aaa681-7"
})`
  flex-basis: 33%;
`;
/* harmony default export */ const man_data = (ManDataCaseStudy);

;// CONCATENATED MODULE: ./components/services/case-study/subsidiary/construct-it/index.tsx





function Another() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "hi"
    }));
}
function ConstructITCaseStudy() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(case_study_Slideshow, {
        title: "partnerships",
        pages: [
            /*#__PURE__*/ jsx_runtime_.jsx(man_data, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Another, {})
        ]
    }));
}
const case_study_subsidiary_construct_it_Container = external_styled_components_default()(case_study_blueprint).withConfig({
    componentId: "sc-461b0eb0-0"
})`
  ${blueprint_ExplanativeQuote} {
  }
`;
/* harmony default export */ const case_study_subsidiary_construct_it = (ConstructITCaseStudy);

// EXTERNAL MODULE: ./components/util/getClientLogo.ts
var getClientLogo = __webpack_require__(2349);
;// CONCATENATED MODULE: ./components/services/case-study/subsidiary/home-delivery/julian-bowen/Shared.styles.tsx








const Shared_styles_ContinuedQuote = external_styled_components_default().div.withConfig({
    componentId: "sc-5153b7fe-0"
})`
  font-size: 16px;
  position: relative;

  @media only screen and (max-width: 1600px) {
    font-size: 14px;
  }
`;
const Site = external_styled_components_default().a.withConfig({
    componentId: "sc-5153b7fe-1"
})`
  position: relative;
  bottom: -50px;
  text-decoration: underline;

  @media only screen and (max-width: 1600px) {
    bottom: -20px;
  }
`;
const QuoteContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-5153b7fe-2"
})`
  display: flex;
  flex-direction: column;

  ${(0,external_styled_breakpoints_.up)("lg")} {
    width: 80%;
  }
`;
const QuoteMark = external_styled_components_default().span.withConfig({
    componentId: "sc-5153b7fe-3"
})`
  font-size: 100px;
  font-weight: bold;
  font-style: italic;
  color: ${components_.colours.yellow};
  content: open-quote;
  line-height: 0.8;
`;
const Quote = external_styled_components_default().span.withConfig({
    componentId: "sc-5153b7fe-4"
})`
  font-weight: medium;
  font-size: 22px;
`;
const Shared_styles_BottomRow = external_styled_components_default().div.withConfig({
    componentId: "sc-5153b7fe-5"
})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  > :not(:last-child) {
    margin-right: 100px;
  }
  @media only screen and (max-width: 1600px) {
    > :not(:last-child) {
      margin-right: 40px;
    }
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    flex-direction: column;
    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 40px;
    }
  }
`;
const Shared_styles_BottomBody = external_styled_components_default().div.withConfig({
    componentId: "sc-5153b7fe-6"
})`
  display: flex;
  flex-direction: column;

  ${LargeQuote/* default */.ZP} {
    ${(0,external_styled_breakpoints_.up)("lg")} {
      margin-bottom: 60px;
    }
    @media only screen and (max-width: 1600px) {
      margin-bottom: 40px;
    }
  }
`;
const ManHoldingSofaImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-5153b7fe-7"
})`
  position: relative;
  height: 400px;
  width: 700px;

  ${(0,external_styled_breakpoints_.only)("md")} {
    height: 425px;
    width: 100%;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    height: 200px;
    width: auto;
  }
`;
const Shared_styles_FakeImage = external_styled_components_default().div.withConfig({
    componentId: "sc-5153b7fe-8"
})`
  min-height: 400px;
  min-width: 700px;
  border: 1px solid black;

  ${(0,external_styled_breakpoints_.down)("md")} {
    min-width: 100%;
  }
`;
const HighlightQuote = external_styled_components_default().div.withConfig({
    componentId: "sc-5153b7fe-9"
})`
  flex-basis: 33%;
  font-size: 38px;
  font-style: italic;
  color: #9c9a97;
  text-align: right;
  white-space: pre-line;

  ${(0,external_styled_breakpoints_.down)("md")} {
    font-size: 28px;
    text-align: left;
    position: absolute;
    width: 40%;
    bottom: -20px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    position: relative;
    font-size: 28px;
    width: 100%;
  }
`;
const LogoText = external_styled_components_default().span.withConfig({
    componentId: "sc-5153b7fe-10"
})`
  font-size: 40px;
  font-family: "Arial";
  white-space: nowrap;

  ${(0,external_styled_breakpoints_.down)("md")} {
    margin-left: auto;
    margin-right: auto;
  }
`;
const JulianBowenLogo = external_styled_components_default()(JulianBowenLogoInternal).withConfig({
    componentId: "sc-5153b7fe-11"
})``;
function JulianBowenLogoInternal({ className  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("img", {
        className: className,
        src: (0,getClientLogo/* default */.ZP)("julian bowen"),
        height: 46,
        width: 304
    }));
}
const Shared_styles_Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-5153b7fe-12"
})`
  display: flex;
  flex-direction: column;

  ${(0,external_styled_breakpoints_.down)("md")} {
    ${blueprint_Header} {
      margin-bottom: 40px;
    }
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
      ${JulianBowenLogo} {
        margin: 10px auto 60px auto;
      
    }
  }
`;


;// CONCATENATED MODULE: ./public/images/services/case-study/julian-bowen/holding-sofa.png
/* harmony default export */ const holding_sofa = ({"src":"/_next/static/media/holding-sofa.f487b0b5.png","height":800,"width":1400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAM1BMVEWUmppXWlh3ZVhLTEdMWFLs7u2KeGlxens8QD20rqaBiY18hYmDioqqrKphYVY5My1+gX5mGZcJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKElEQVQImQXBiQEAMAQAsVMU/feftgm3l/tmor29goG2lIoV5LFA0j4PgwDOUoHlAwAAAABJRU5ErkJggg=="});
// EXTERNAL MODULE: ./components/util/useWindowDimensions.ts
var useWindowDimensions = __webpack_require__(6066);
;// CONCATENATED MODULE: ./components/services/case-study/subsidiary/home-delivery/julian-bowen/index.tsx









const CHANGE_QUOTE_BREAKPOINT = 1300;
function JulianBowenDesktop() {
    const highlightQuote = /*#__PURE__*/ jsx_runtime_.jsx(HighlightQuote, {
        children: `"We’ve partnered with BJS for over two years now"`
    });
    const { width  } = (0,useWindowDimensions/* default */.Z)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Blueprint, {
        initial: {
            x: -500
        },
        animate: {
            x: 0
        },
        transition: {
            duration: 1
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(blueprint_Header, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(blueprint_IntroductionPiece, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(JulianBowenLogo, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(blueprint_ExplanativeQuote, {
                            description: "We used to have our own delivery fleet service and drivers, but the service BJS offered was a perfect fit for us in terms of coverage and automation. Outsourcing delivery to a specialist company was a logical decision and the best thing we’ve ever done.",
                            author: "Emmett Lenaghan, Managing Director at Julian Bowen",
                            italic: false
                        }),
                        width > CHANGE_QUOTE_BREAKPOINT && highlightQuote
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(blueprint_ReadMore, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Shared_styles_BottomRow, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BottomContent, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ManHoldingSofaImageContainer, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        src: holding_sofa,
                                        layout: "fill"
                                    })
                                }),
                                width <= CHANGE_QUOTE_BREAKPOINT && highlightQuote
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Shared_styles_BottomBody, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(LargeQuote/* default */.ZP, {
                                    text: "I first saw one of the BJS vans when they made a delivery to our office and the smart, professional, uniformed team were dressed to impress - and they certainly impressed me!"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Shared_styles_ContinuedQuote, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "It’s not just that BJS Home Delivery look fantastic, their coverage is great too and the automation side of things – with choice for the our customers and tracking portals – has really helped our business to grow."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "We have daily collections from our warehouse and with great Google reviews from our happy customers we know we are getting quality and quantity in our deliveries."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Site, {
                                            href: "https://www.julian-bowen.co.uk",
                                            target: "_blank",
                                            children: "www.julian-bowen.co.uk"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
}
const BottomContent = external_styled_components_default().div.withConfig({
    componentId: "sc-6a681d9a-0"
})`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1165px) {
    flex-direction: column-reverse;

    > :not(:last-child) {
      margin-bottom: 20px;
    }

    ${ManHoldingSofaImageContainer} {
      width: 100%;
      height: auto;
    }

    ${HighlightQuote} {
      position: static;
      bottom: auto;
      text-align: center;
      margin-left: 0px !important;
      width: 100%;
      // text-align: center;
    }
  }
`;
const Blueprint = external_styled_components_default()(Shared_styles_Container).withConfig({
    componentId: "sc-6a681d9a-1"
})`


  
  @media only screen and (min-width: 1920px) {
    margin: 0 auto;
    width: 100%;
    max-width: 1920px;
  }

  @media only screen and (max-width: 1165px) {
    ${blueprint_Header} {
      margin-bottom: 0px;
    }
  }

  ${blueprint_ExplanativeQuote} {
    @media only screen and (max-width: 1600px) {
      flex: initial !important;
      max-width: 640px;

      > :not(:last-child) {
        margin-bottom: 30px;
      }
    }

    @media only screen and (max-width: ${CHANGE_QUOTE_BREAKPOINT}px) {
      max-width: 100ch !important;
      padding-right: 0px;
    }
  }

  @media only screen and (max-width: 1600px) {
    ${HighlightQuote} {
      margin-left: -100px; //Removes the 100px gap (easier to set negative here rather than adjust the others)
    }
    ${blueprint_ExplanativeQuote} {
      max-width: 540px;
    }
  }

  @media only screen and (max-width: ${CHANGE_QUOTE_BREAKPOINT}px) {
    > :not(:last-child) {
      margin-bottom: 34px;
    }
    ${Shared_styles_BottomRow} {
      flex-direction: column;
    }

    ${Shared_styles_BottomBody} {
      padding-bottom: 80px;
    }
  }
`;
/* harmony default export */ const julian_bowen = (JulianBowenDesktop);

;// CONCATENATED MODULE: ./components/services/case-study/subsidiary/home-delivery/index.tsx





function home_delivery_Another() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "hi"
    }));
}
function HomeDeliveryCaseStudy() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(case_study_Slideshow, {
        pages: [
            /*#__PURE__*/ jsx_runtime_.jsx(julian_bowen, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(home_delivery_Another, {})
        ]
    }));
}
const case_study_subsidiary_home_delivery_Container = external_styled_components_default()(case_study_blueprint).withConfig({
    componentId: "sc-22f6f618-0"
})`
  ${blueprint_ExplanativeQuote} {
  }
`;
/* harmony default export */ const case_study_subsidiary_home_delivery = (HomeDeliveryCaseStudy);

;// CONCATENATED MODULE: ./public/images/services/case-study/big-furniture-warehouse/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.32fdc776.png","height":276,"width":494,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAS1BMVEVtd4K1wZXEyMm/xbnv8PTp79O71EGgqKb///+Yp3d3gYjb3t97gprX54uAjIT9/+1+inrj67/H4FWYq1ezwoHT3a63zGKIj56PnIH7gleZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALElEQVQImWNgEZcQZeXn4GAQERbj5BNgZ2ZgYxPi5GFg4GJgFeRlZGfiZgEAHCYBVKjSjaYAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/services/case-study/big-furniture-warehouse/man-sweating.png
/* harmony default export */ const man_sweating = ({"src":"/_next/static/media/man-sweating.e08749ec.png","height":800,"width":1400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAOVBMVEWjoZu/vLNjbnjL09pjZmiRlpugmJBhaHKcj4NxeYSDgHu8tqShpqypo5CampTPyr44PD5FRzqRiHgkvIjMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKklEQVQImQXBhwEAIAgDsIJMF+r/x5qgx2wbSCyqYWEOAanGS4h78j38ARCEAO7O//7rAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./components/services/case-study/subsidiary/extra/index.tsx











function ExtraCaseStudy() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(case_study_subsidiary_extra_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(BigFurnitureHeader, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(blueprint_IntroductionPiece, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(extra_LogoContainer, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: logo,
                                layout: "fixed",
                                width: 247,
                                height: 138
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(blueprint_ExplanativeQuote, {
                            description: "Our previous delivery partner stopped trading during the first lock down, we had been using them for about 12 months but due to COVID they ceased their home delivery service. We had been looking for a new partner for a few months when a supplier recommended BJS Extra",
                            author: "Will Norcross, Marketing Executive at Big Furniture Warehouse"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Right, {
                            children: "We got in touch with BJS Extra and were delighted to hear that they could offer us exactly the two-man service we wanted for our premium products. They understood our service aspirations and we have now been working with them since December 2020."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(blueprint_ReadMore, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(extra_BottomRow, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(extra_ImageContainer, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: man_sweating,
                                layout: "fill"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(extra_BottomBody, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(LargeQuote/* default */.ZP, {
                                    text: "We have been really impressed with the big-company service BJS Extra has delivered for us and our 10-15 deliveries a week."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Benefit, {
                                    children: "A real benefit to our business has been the way the BJS Customer Care team book the deliveries directly with our customers, it adds convenience and saves time for all parties and is an efficient joined up service."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Link, {
                                    href: "https://www.bigfurniturewarehouse.com",
                                    target: "_blank",
                                    children: "www.bigfurniturewarehouse.com"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
}
const Link = external_styled_components_default().a.withConfig({
    componentId: "sc-6d865a38-0"
})``;
const Benefit = external_styled_components_default().span.withConfig({
    componentId: "sc-6d865a38-1"
})``;
const extra_BottomRow = external_styled_components_default().div.withConfig({
    componentId: "sc-6d865a38-2"
})`
  display: flex;
  justify-content: space-between;
  > :not(:last-child) {
    margin-right: 100px;
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    flex-direction: column;
    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 40px;
    }
  }
`;
const extra_BottomBody = external_styled_components_default().div.withConfig({
    componentId: "sc-6d865a38-3"
})`
  display: flex;
  flex-direction: column;

  ${LargeQuote/* default */.ZP} {
    margin-bottom: 35px;
  }
  ${Benefit} {
    margin-bottom: 75px;
  }
`;
const extra_ImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-6d865a38-4"
})`
  min-height: 400px;
  min-width: 700px;
  position: relative;

  @media only screen and (max-width: 1125px) {
    min-width: 530px;
    height: 400px;
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    min-width: 100%;
    max-width: 100%;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    min-height: 210px;
    height: 210px;
  }
`;
const extra_LogoContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-6d865a38-5"
})`
  min-width: 247px;
  min-height: 138px;
  position: relative;
  ${(0,external_styled_breakpoints_.down)("sm")} {
    margin-left: auto;
    margin-right: auto;
  }
`;
const Right = external_styled_components_default().div.withConfig({
    componentId: "sc-6d865a38-6"
})``;
const BigFurnitureHeader = external_styled_components_default()(blueprint_Header).withConfig({
    componentId: "sc-6d865a38-7"
})`
  ${(0,external_styled_breakpoints_.down)("md")} {
    ${extra_LogoContainer} {
      margin-bottom: 30px;
    }

    flex-direction: column;
  }
  > :not(:last-child) {
    margin-right: 100px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 0px;
    }

    ${blueprint_ExplanativeQuote} {
      padding-right: 32px;
      margin-bottom: 40px;
    }
    ${Right} {
      padding-right: 32px;
      margin-bottom: 35px;
    }

    ${blueprint_ReadMore} {
      margin-top: 40px;
    }
  }
`;
const case_study_subsidiary_extra_Container = external_styled_components_default()(case_study_blueprint).withConfig({
    componentId: "sc-6d865a38-8"
})`
  ${(0,external_styled_breakpoints_.only)("md")} {
    > :not(:last-child) {
      margin-bottom: 60px;
    }
  }

  ${BigFurnitureHeader} {
    margin-bottom: 80px;

    ${(0,external_styled_breakpoints_.down)("sm")} {
      margin-bottom: 20px;
    }
  }
`;
/* harmony default export */ const case_study_subsidiary_extra = (ExtraCaseStudy);

;// CONCATENATED MODULE: ./components/services/case-study/subsidiary/haulage/index.tsx





function haulage_Another() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "hi"
    }));
}
function HaulageCaseStudy() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(case_study_Slideshow, {
        title: "partnerships",
        pages: [
            /*#__PURE__*/ jsx_runtime_.jsx(man_data, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(haulage_Another, {})
        ]
    }));
}
const case_study_subsidiary_haulage_Container = external_styled_components_default()(case_study_blueprint).withConfig({
    componentId: "sc-eca42153-0"
})`
  ${blueprint_ExplanativeQuote} {
  }
`;
/* harmony default export */ const case_study_subsidiary_haulage = (HaulageCaseStudy);

// EXTERNAL MODULE: ./components/services/useServicesState.tsx
var useServicesState = __webpack_require__(3044);
;// CONCATENATED MODULE: ./components/services/case-study/subsidiary/index.tsx






function SubsidiaryCaseStudy() {
    const subsidiary = (0,useServicesState/* useSelected */.vt)();
    if (subsidiary === "home delivery") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(case_study_subsidiary_home_delivery, {}));
    } else if (subsidiary === "constructit") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(case_study_subsidiary_construct_it, {}));
    } else if (subsidiary === "extra") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(case_study_subsidiary_extra, {}));
    } else if (subsidiary == "haulage") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(case_study_subsidiary_haulage, {}));
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            "Cannot find subsidiary case study for ",
            subsidiary
        ]
    }));
}
/* harmony default export */ const case_study_subsidiary = (SubsidiaryCaseStudy);

// EXTERNAL MODULE: ./components/services/image-showcase/blueprint/Container.tsx
var image_showcase_blueprint_Container = __webpack_require__(2763);
;// CONCATENATED MODULE: ./components/services/image-showcase/getPath.ts
const getPath = (input)=>{
    return `/images/services/${getEntry(input)}/image-showcase`;
};
const getEntry = (input)=>{
    if (input === "constructit") {
        return "construct-it";
    } else if (input === "home delivery") {
        return "homedelivery";
    }
    return input;
};
/* harmony default export */ const image_showcase_getPath = (getPath);

;// CONCATENATED MODULE: ./components/services/image-showcase/ConstructITImageShowcase.tsx




const basePath = image_showcase_getPath("constructit");
function ConstructITImageShowcase(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(image_showcase_blueprint_Container/* default */.ZP, {
        className: props.className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(image_showcase_blueprint_Container/* Double */.bh, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(image_showcase_blueprint_Container/* Entry */.kS, {
                        src: `${basePath}/logo-walking.jpg`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(image_showcase_blueprint_Container/* Entry */.kS, {
                        src: `${basePath}/working-van.jpg`
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(image_showcase_blueprint_Container/* Large */.ig, {
                src: `${basePath}/van.jpg`
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(image_showcase_blueprint_Container/* Double */.bh, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(image_showcase_blueprint_Container/* Entry */.kS, {
                        src: `${basePath}/loading-van.jpg`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(image_showcase_blueprint_Container/* Entry */.kS, {
                        src: `${basePath}/side-view.jpg`
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(image_showcase_blueprint_Container/* Large */.ig, {
                src: `${basePath}/looking-at-van.jpg`
            })
        ]
    }));
}
/* harmony default export */ const image_showcase_ConstructITImageShowcase = (external_styled_components_default()(ConstructITImageShowcase).withConfig({
    componentId: "sc-860eeaf7-0"
})``);

;// CONCATENATED MODULE: ./components/services/image-showcase/HaulageImageShowcase.tsx




const HaulageImageShowcase_basePath = image_showcase_getPath("haulage");
function HaulageImageShowcase(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(image_showcase_blueprint_Container/* default */.ZP, {
        className: props.className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(image_showcase_blueprint_Container/* Double */.bh, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(image_showcase_blueprint_Container/* Entry */.kS, {
                        src: `${HaulageImageShowcase_basePath}/haulage-services.jpg`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(image_showcase_blueprint_Container/* Entry */.kS, {
                        src: `${HaulageImageShowcase_basePath}/newspaper.jpg`
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(image_showcase_blueprint_Container/* Large */.ig, {
                src: `${HaulageImageShowcase_basePath}/truck-rear-quarter.jpg`
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(image_showcase_blueprint_Container/* Double */.bh, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(image_showcase_blueprint_Container/* Entry */.kS, {
                        src: `${HaulageImageShowcase_basePath}/truck-models.jpg`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(image_showcase_blueprint_Container/* Entry */.kS, {
                        src: `${HaulageImageShowcase_basePath}/hgv-van.jpg`
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(image_showcase_blueprint_Container/* Large */.ig, {
                src: `${HaulageImageShowcase_basePath}/extra-smile.jpg`
            })
        ]
    }));
}
/* harmony default export */ const image_showcase_HaulageImageShowcase = (external_styled_components_default()(HaulageImageShowcase).withConfig({
    componentId: "sc-47c78780-0"
})``);

;// CONCATENATED MODULE: ./components/services/image-showcase/HomeDeliveryImageShowcase.tsx




const HomeDeliveryImageShowcase_basePath = image_showcase_getPath("home delivery");
function HomeDeliveryImageShowcase(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(image_showcase_blueprint_Container/* default */.ZP, {
        className: props.className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(image_showcase_blueprint_Container/* Double */.bh, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(image_showcase_blueprint_Container/* Entry */.kS, {
                        src: `${HomeDeliveryImageShowcase_basePath}/holding-box-looking-at-van.jpg`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(image_showcase_blueprint_Container/* Entry */.kS, {
                        src: `${HomeDeliveryImageShowcase_basePath}/measuring-box.jpg`
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(image_showcase_blueprint_Container/* Large */.ig, {
                src: `${HomeDeliveryImageShowcase_basePath}/old-man.jpg`
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(image_showcase_blueprint_Container/* Double */.bh, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(image_showcase_blueprint_Container/* Entry */.kS, {
                        src: `${HomeDeliveryImageShowcase_basePath}/holding-sofa.jpg`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(image_showcase_blueprint_Container/* Entry */.kS, {
                        src: `${HomeDeliveryImageShowcase_basePath}/two-box.jpg`
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(image_showcase_blueprint_Container/* Large */.ig, {
                src: `${HomeDeliveryImageShowcase_basePath}/man-woman.jpg`
            })
        ]
    }));
}
const GridContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-9d9b6090-0"
})`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "a c d f"
    "b c e f";
`;
/* harmony default export */ const image_showcase_HomeDeliveryImageShowcase = (external_styled_components_default()(HomeDeliveryImageShowcase).withConfig({
    componentId: "sc-9d9b6090-1"
})``);

;// CONCATENATED MODULE: ./components/services/image-showcase/index.tsx





function ImageShowcase({ subsidiary , className  }) {
    if (subsidiary === "haulage") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(image_showcase_HaulageImageShowcase, {
            className: className
        }));
    } else if (subsidiary === "constructit") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(image_showcase_ConstructITImageShowcase, {
            className: className
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(image_showcase_HomeDeliveryImageShowcase, {
        className: className
    }));
}
/* harmony default export */ const image_showcase = (external_styled_components_default()(ImageShowcase).withConfig({
    componentId: "sc-8881ae01-0"
})``);

// EXTERNAL MODULE: ./components/subsidiary-showcase/grid/SubsidiaryContext.tsx
var SubsidiaryContext = __webpack_require__(239);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/our-partners/index.tsx + 4 modules
var our_partners = __webpack_require__(3159);
;// CONCATENATED MODULE: ./components/services/index.tsx
















const services_constructITColour = construct_it_config/* default.primaryColour */.Z.primaryColour;
function ServicePage({ trustpilot  }) {
    const [subsidiary, setSubsidiary] = (0,useServicesState/* default */.ZP)();
    const config1 = (0,subsidiary_config/* default */.Z)(subsidiary);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(SubsidiaryContext/* SubsidiaryProvider */.Kk, {
        selected: subsidiary,
        setSelected: setSubsidiary,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: subsidiaryTitle(subsidiary)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: config1.metaDescription
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: config1.metaTags.join(",")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "index, follow"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image:url",
                        content: `${"https://bjs-static.s3.eu-west-2.amazonaws.com"}/bjs-family/bjsMetaOptimised_Services_${subsidiaryImageName(subsidiary)}.jpg`
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(services_Container, {
                subsidiary: subsidiary,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(detailed_info, {
                        subsidiary: subsidiary
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(expectancy_subsidiary, {
                        subsidiary: subsidiary
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(network_statistics/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(image_showcase, {
                        subsidiary: subsidiary
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(our_partners/* default */.Z, {
                        services: subsidiary
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(case_study_subsidiary, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(our_people_subsidiary, {
                        subsidiary: subsidiary
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(feedback/* default */.Z, {
                        trustpilot: trustpilot
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(services_ServicesSubsidiaryBar, {})
                ]
            })
        ]
    }));
}
const subsidiaryImageName = (input)=>{
    switch(input){
        case "home delivery":
            return "TwoMan";
        case "constructit":
            return "ConstructIT";
        case "extra":
            return "Extra";
        case "haulage":
            return "Haulage";
    }
};
const subsidiaryTitle = (input)=>{
    switch(input){
        case "home delivery":
            return "BJS Two Man Home Delivery Service UK";
        case "extra":
            return "Large And Bulky Goods Delivery | Two-person Logistics for SME";
        case "haulage":
            return "Road Haulage Services Across UK | West Midlands Road Haulier";
        case "constructit":
            return "Brick And Block Haulage For Construction | Brick Crane";
    }
};
const services_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-688e61a1-0"
})`
  display: flex;
  flex-direction: column;

  ${image_showcase} {
    margin-top: 10px;
  }

  ${network_statistics/* default */.Z} {
    ${(props)=>props.subsidiary === "constructit" && `background: ${services_constructITColour}`
}
  }
`;
/* harmony default export */ const services = (ServicePage);

// EXTERNAL MODULE: ./components/util/getTrustpilotProps.ts + 1 modules
var getTrustpilotProps = __webpack_require__(7670);
;// CONCATENATED MODULE: ./pages/services/[[...subsidiary]].tsx



function Services({ trustpilot  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(services, {
        trustpilot: trustpilot
    }));
}
async function getStaticProps() {
    return await (0,getTrustpilotProps/* default */.Z)();
}
async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    subsidiary: [
                        "home-delivery"
                    ]
                }
            },
            {
                params: {
                    subsidiary: [
                        "haulage"
                    ]
                }
            },
            {
                params: {
                    subsidiary: [
                        "extra"
                    ]
                }
            },
            {
                params: {
                    subsidiary: [
                        "construct-it"
                    ]
                }
            }, 
        ],
        fallback: "blocking"
    };
}
/* harmony default export */ const _subsidiary_ = (Services);


/***/ }),

/***/ 2699:
/***/ ((module) => {

module.exports = require("@bjsdistribution/components");

/***/ }),

/***/ 5403:
/***/ ((module) => {

module.exports = require("@fortawesome/pro-regular-svg-icons");

/***/ }),

/***/ 1638:
/***/ ((module) => {

module.exports = require("@fortawesome/pro-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 9034:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1704:
/***/ ((module) => {

module.exports = require("react-google-recaptcha-v3");

/***/ }),

/***/ 5804:
/***/ ((module) => {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ 6170:
/***/ ((module) => {

module.exports = require("styled-breakpoints");

/***/ }),

/***/ 4097:
/***/ ((module) => {

module.exports = require("styled-breakpoints/react-styled");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5675,324,3159,7729,7982,6066,279,9178,2349,1683,3082,6801,1473,2797,1917,2763], () => (__webpack_exec__(2263)));
module.exports = __webpack_exports__;

})();