"use strict";
exports.id = 3159;
exports.ids = [3159];
exports.modules = {

/***/ 3159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ our_partners)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
// EXTERNAL MODULE: external "react-multi-carousel"
var external_react_multi_carousel_ = __webpack_require__(5804);
var external_react_multi_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_multi_carousel_);
;// CONCATENATED MODULE: ./components/our-partners/partners.ts
const paths = {
    BedKingdom: "PNG_BedKingdom.png",
    CookersOvens: "PNG_CookersOvens.png",
    CycleUK: "PNG_CycleUK.png",
    SecretLab: "PNG_SecretLab.png",
    TheWorm: "PNG_TheWorm.png",
    Aldi: "SVG_Aldi.svg",
    // AlicesGarden: "SVG_AlicesGarden.svg",
    CotswoldCo: "SVG_CotswoldCo.svg",
    Echelon: "SVG_Echelon.svg",
    JulianBowen: "SVG_JulianBowen.svg",
    NectarSleep: "SVG_NectarSleep.svg",
    OliverBonas: "SVG_OliverBonas.svg",
    RicherSounds: "SVG_RicherSounds.svg",
    Tikamoon: "SVG_Tikamoon.svg",
    XRocker: "SVG_XRocker.svg",
    Wayfair: "SVG_Wayfair.svg",
    CBS: "PNG_CBS.png",
    KTCEdibles: "PNG_KTCEdibles.png",
    OnboardCorrugated: "PNG_OnboardCorrugated.png",
    // TaskConsumerProducts: "PNG_TaskConsumerProducts.png",
    GRSRoadstone: "PNG_GRSRoadstone.png",
    // IbstockBrickWire: "PNG_IbstockBrickWire.png",
    AggregateIndustries: "SVG_AggregateIndustries.svg",
    Forterra: "SVG_Forterra.svg",
    Tarmac: "SVG_Tarmac.svg",
    TaylorMaxwell: "SVG_TaylorMaxwell.svg",
    Wienerberger: "SVG_Wienerberger.svg",
    Sweeek: "SVG_sweeek.svg"
};
const homeDeliveryClients = [
    "Aldi",
    "SecretLab",
    "CotswoldCo",
    // "AlicesGarden",
    "BedKingdom",
    "CookersOvens",
    "CycleUK",
    "Echelon",
    "JulianBowen",
    "NectarSleep",
    "OliverBonas",
    "RicherSounds",
    "Sweeek",
    "TheWorm",
    "Tikamoon",
    "Wayfair",
    "XRocker", 
];
const haulageClients = [
    "CBS",
    "OnboardCorrugated",
    "KTCEdibles", 
];
const constructITClients = [
    "AggregateIndustries",
    "Forterra",
    "GRSRoadstone",
    // "IbstockBrickWire",
    "Tarmac",
    "TaylorMaxwell",
    "Wienerberger", 
];

// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__(6170);
// EXTERNAL MODULE: ./components/util/useIsMobile.tsx
var useIsMobile = __webpack_require__(6658);
// EXTERNAL MODULE: ./components/util/useIsTabletOrSmaller.tsx
var useIsTabletOrSmaller = __webpack_require__(3176);
;// CONCATENATED MODULE: ./components/our-partners/showcase/motionSlider.tsx









const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 5,
        slidesToSlide: 5
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 3,
        slidesToSlide: 3
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 2,
        slidesToSlide: 2
    }
};
const basePath = "https://bjs-static.s3.eu-west-2.amazonaws.com";
function MotionSlider(props) {
    const { clients , services  } = props;
    const maxWidth = Math.max.apply(Math, clients.map(getDimensions).map((dimensions)=>dimensions[0]
    ));
    const getSubpath = (input)=>{
        const result = paths[input];
        return result;
    };
    const getSubsidiary = (input)=>{
        if (constructITClients.includes(input)) return "construct_it";
        else if (haulageClients.includes(input)) return "haulage";
        else return "home_delivery";
    };
    const getLogo = (client)=>{
        const subsidiary = getSubsidiary(client);
        const subPath = getSubpath(client);
        return `${basePath}/bjs-family/partner_logos/${subsidiary}/partnerLogos_${subPath}`;
    };
    const isMobile = (0,useIsMobile/* default */.Z)();
    const isTabletOrSmaller = (0,useIsTabletOrSmaller/* default */.ZP)();
    const isDesktop = (0,useIsTabletOrSmaller/* useIsDesktop */.Ce)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyle, {
                subsidiary: services
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_multi_carousel_default()), {
                draggable: false,
                showDots: true,
                responsive: responsive,
                ssr: false,
                infinite: true,
                shouldResetAutoplay: false,
                transitionDuration: 500,
                // additionalTransfrom={-20 * 1} //add padding right and left 20px
                removeArrowOnDeviceType: [
                    "tablet",
                    "mobile"
                ],
                autoPlay: isDesktop ? false : true,
                partialVisible: false,
                containerClass: "carousel-container",
                itemClass: "carousel-item",
                sliderClass: "sliderClass",
                children: clients.map((client)=>{
                    const src = getLogo(client);
                    const [width, height] = isMobile ? getMobileDimensions(client) : isTabletOrSmaller ? getTabletDimensions(client) : getDimensions(client);
                    return(/*#__PURE__*/ jsx_runtime_.jsx(LogoContainer, {
                        width: maxWidth,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                            src: src,
                            width: width,
                            height: height
                        })
                    }, client));
                })
            })
        ]
    }));
}
const getMobileDimensions = (input)=>{
    switch(input){
        case "Aldi":
        case "GRSRoadstone":
            return [
                90,
                60
            ];
        case "KTCEdibles":
            return [
                100,
                100
            ];
        case "NectarSleep":
        // case "TaskConsumerProducts":
        //   return [120, 100];
        case "CookersOvens":
            return [
                160,
                100
            ];
        case "CBS":
        case "TaylorMaxwell":
        case "JulianBowen":
        case "RicherSounds":
        case "OliverBonas":
            return [
                150,
                100
            ];
        default:
            return [
                130,
                100
            ];
    }
};
const getTabletDimensions = (input)=>{
    switch(input){
        case "AggregateIndustries":
            return [
                150,
                100
            ];
        // case "TaskConsumerProducts":
        //   return [130, 100];
        case "GRSRoadstone":
        case "KTCEdibles":
            return [
                100,
                100
            ];
        // case "IbstockBrickWire":
        //   return [160, 100];
        default:
            return [
                180,
                100
            ];
    }
};
const getDimensions = (input)=>{
    switch(input){
        case "SecretLab":
        // case "TaskConsumerProducts":
        //   return [130, 45];
        case "NectarSleep":
            return [
                130,
                25
            ];
        case "BedKingdom":
        case "AggregateIndustries":
            return [
                190,
                65
            ];
        case "Aldi":
            return [
                190,
                80
            ];
        case "RicherSounds":
            return [
                190,
                30
            ];
        case "CotswoldCo":
            return [
                170,
                65
            ];
        case "Forterra":
        case "Tarmac":
            return [
                150,
                45
            ];
        case "GRSRoadstone":
        // case "IbstockBrickWire":
        //   return [120, 45];
        case "KTCEdibles":
            return [
                120,
                70
            ];
        case "CookersOvens":
        case "CycleUK":
        default:
            return [
                190,
                45
            ];
    }
};
const LogoContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-8dadfd8e-0"
})`
  ${(0,external_styled_breakpoints_.up)("lg")} {
    width: ${(props)=>props.width
}px;
  }
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = external_styled_components_default().img.withConfig({
    componentId: "sc-8dadfd8e-1"
})`
  margin: 0 auto;
  max-width: 100% !important;
  @media only screen and (max-width: 1500px) and (min-width: 992px) {
    padding: 0px 10px;
  }
  object-fit: scale-down;
  ${(0,external_styled_breakpoints_.down)("sm")} {
    padding: 0px 5px;
  }
`;
const GlobalStyle = external_styled_components_.createGlobalStyle`
  .carousel-container {
    @media only screen and (max-width: 1500px) and (min-width: 992px) {
      width: 880px;
  }
    width: 1188px;
    height: 186px;
    position: initial;
    ${(0,external_styled_breakpoints_.up)("lg")} {
      ${(props)=>props.subsidiary === "haulage" && "justify-content: center"
};
    }
  }
  .carousel-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-multi-carousel-dot--active button {
    background: #7B7E80 !important;
    border-color: #7B7E80 !important;
    width: 14px !important;
    height: 14px !important;
  }
  .react-multi-carousel-dot button{
    background: #BDBEBF;
    border-color: #BDBEBF;
    width: 10px;
    height: 10px;
  } 
  .react-multiple-carousel__arrow::before {
    color: #d2d3d4;
    font-size: 40px;
    :hover{
        color: #65686A;
    }
  }

  .react-multiple-carousel__arrow {
    background: #fff;
    border: 2px solid #d2d3d4;
    border-radius: 48px;
    width: 65px;
    height: 65px;
    transition: none;
    z-index: 1;
    :hover{
        border: 2px solid #65686A;
        background: #fff;
        transition: none;
    }
    :hover::before{
        color: #65686A;
    }
  }

 .react-multiple-carousel__arrow--right {
  right: calc(1% + 1px);
 }
 .react-multiple-carousel__arrow--left {
  left: calc(1% + 1px);
 }
`;
const Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-8dadfd8e-2"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
/* harmony default export */ const motionSlider = (MotionSlider);

;// CONCATENATED MODULE: ./components/our-partners/Title.tsx


function Title(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Title_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Seperator, {
                position: "left"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                children: "Our partners"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Seperator, {
                position: "right"
            })
        ]
    }));
}
const Title_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-81d8813b-0"
})`
  display: flex;
  align-items: center;
  justify-content: center;

  > :not(:last-child) {
    margin-right: 33px;
  }
`;
const Seperator = external_styled_components_default().div.withConfig({
    componentId: "sc-81d8813b-1"
})`
  background: transparent linear-gradient(90deg, #ffffff 0%, #000000 100%) 0% 0%
    no-repeat padding-box;

  ${(props)=>props.position === "right" && "background: transparent linear-gradient(270deg, #FFFFFF 0%, #000000 100%) 0% 0% no-repeat padding-box;"
}

  opacity: 0.2;

  height: 1px;
  content: "";


  //This will depend on viewport! Need to make this responsive
  // min-width: 680px;
  // max-width: 680px;
  flex: 1;
`;
const Text = external_styled_components_default().h3.withConfig({
    componentId: "sc-81d8813b-2"
})`
  font-family: "Eveleth";
  font-size: 20px;
  color: #615e59;
  position: relative;
  white-space: nowrap;
  margin:0px;
`;
/* harmony default export */ const our_partners_Title = (Title);

;// CONCATENATED MODULE: ./components/util/getRandomItems.tsx
const getRandomItems = (arr, num = 15)=>{
    const randomArr = [];
    for(let i = 0; i < num;){
        const random = Math.floor(Math.random() * arr.length);
        if (randomArr.indexOf(arr[random]) !== -1) {
            continue;
        }
        randomArr.push(arr[random]);
        i++;
    }
    return randomArr;
};

;// CONCATENATED MODULE: ./components/our-partners/index.tsx







function OurPartners(props) {
    const { className , services ="allClients"  } = props;
    const allClients = [
        ...homeDeliveryClients,
        ...haulageClients,
        ...constructITClients
    ];
    const randomClients = getRandomItems(allClients, 20);
    const getClients = ()=>{
        if (services === "haulage") {
            return haulageClients;
        } else if (services === "constructit") {
            return constructITClients;
        } else if (services === "home delivery" || services === "extra") {
            return homeDeliveryClients;
        } else {
            return randomClients;
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(our_partners_Container, {
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(our_partners_Title, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(motionSlider, {
                clients: getClients(),
                services: services
            })
        ]
    }));
}
const our_partners_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-9ee57ddf-0"
})`
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    /* ${(0,external_styled_breakpoints_.up)("sm")}{
      margin-bottom: 30px;
    } */
  }
  @media only screen and (max-width: 1500px) and (min-width: 992px) {
    padding: 70px 0px;  
  }
  padding: 70px;
  ${(0,external_styled_breakpoints_.down)("md")} {
    padding: 40px 20px;
  }
`;
/* harmony default export */ const our_partners = (OurPartners);


/***/ })

};
;