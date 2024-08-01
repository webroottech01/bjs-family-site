"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 4170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ allSubsidiaries)
/* harmony export */ });
const allSubsidiaries = [
    "home delivery",
    "extra",
    "haulage",
    "constructit"
];



/***/ }),

/***/ 2328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
// EXTERNAL MODULE: external "@bjsdistribution/components"
var components_ = __webpack_require__(2699);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__(6170);
// EXTERNAL MODULE: ./components/services/useServicesState.tsx
var useServicesState = __webpack_require__(3044);
// EXTERNAL MODULE: ./components/about/page/AboutPage.ts
var AboutPage = __webpack_require__(9900);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
;// CONCATENATED MODULE: ./components/landing/MouseScrollIndicator.tsx




const Lottie = (0,dynamic["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9094, 23))
, {
    loadableGenerated: {
        modules: [
            "..\\components\\landing\\MouseScrollIndicator.tsx -> " + "react-lottie-player"
        ]
    }
});
function MouseScrollIndicator({ className  }) {
    const { 0: animationData , 1: setAnimationData  } = (0,external_react_.useState)();
    const fetchAndSet = async ()=>{
        const result = await fetch("https://assets5.lottiefiles.com/private_files/lf30_PaH1bn.json");
        const json = await result.json();
        setAnimationData(json);
    };
    (0,external_react_.useEffect)(()=>{
        fetchAndSet();
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx(Lottie, {
        loop: true,
        className: className,
        animationData: animationData,
        play: true,
        style: {
            height: "54px",
            width: "54px"
        }
    }));
}
/* harmony default export */ const landing_MouseScrollIndicator = (external_styled_components_default()(MouseScrollIndicator).withConfig({
    componentId: "sc-f74c6e87-0"
})``);

;// CONCATENATED MODULE: ./components/landing/AnimationButton.tsx





function AnimationButton(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(AnimationButtonInternal, {
        whileHover: {
            color: components_.colours.black,
            backgroundColor: components_.colours.yellow,
            borderColor: components_.colours.yellow
        },
        ...props
    }));
}
const AnimationButtonInternal = external_styled_components_default()(external_framer_motion_.motion.button).withConfig({
    componentId: "sc-bf86bf6a-0"
})`
  border: 2px solid #ffffff;
  border-radius: 666px;
  cursor: pointer;
  font-family: "Eveleth";
  font-size: 18px;

  ${(0,external_styled_breakpoints_.up)("md")} {
    min-width: 240px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    min-width: 300px;
  }
  min-height: 66px;
`;
/* harmony default export */ const landing_AnimationButton = (external_styled_components_default()(AnimationButton).withConfig({
    componentId: "sc-bf86bf6a-1"
})``);

;// CONCATENATED MODULE: ./components/landing/LandingSplash.tsx










function LandingSplash() {
    const navigateToService = (0,useServicesState/* useNavigateTo */.jU)();
    const navigateToAbout = (0,AboutPage/* useNavigateTo */.j)();
    const navigateToOurValue = ()=>navigateToAbout("our values")
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SplashImage, {
                src: "/images/splash-background.jpg",
                layout: "fill",
                objectFit: "cover",
                objectPosition: "right",
                priority: true,
                alt: "Splash background with hands"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Header, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(YellowTitle, {
                        children: "Your delivery"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(BlackTitle, {
                        children: "Safe in our hands-BJS"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Body, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(BodyText, {
                        children: "We are a family run business with years of experience in the retail, transport and IT industries. We’ve combined our skills to create a new kind of delivery business – meeting the high standards required by customers like you."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Buttons, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(LearnMoreButton, {
                                onClick: navigateToOurValue,
                                id: "landing-go-to-learn-more",
                                children: "Learn more"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ServiceButton, {
                                onClick: ()=>navigateToService("home delivery")
                                ,
                                id: "landing-go-to-our-services",
                                children: "Our services"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(landing_MouseScrollIndicator, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(BottomGradient, {})
        ]
    }));
}
const ServiceButton = external_styled_components_default()(landing_AnimationButton).withConfig({
    componentId: "sc-752e7768-0"
})`
  background: white;
  color: ${components_.colours.black};
`;
const LearnMoreButton = external_styled_components_default()(landing_AnimationButton).withConfig({
    componentId: "sc-752e7768-1"
})`
  background-color: transparent;
  color: white;
`;
const BottomGradient = external_styled_components_default().div.withConfig({
    componentId: "sc-752e7768-2"
})`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 440px;
  //mix-blend-mode: screen;
  background-image: linear-gradient(rgba(23, 28, 30, 0), rgba(23, 28, 30, 1));
`;
const SplashImage = external_styled_components_default()(next_image["default"]).withConfig({
    componentId: "sc-752e7768-3"
})`
  border: 1px solid red;
`;
const Buttons = external_styled_components_default().div.withConfig({
    componentId: "sc-752e7768-4"
})`
  display: flex;
  > :not(:last-child) {
    margin-right: 20px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    flex-direction: column;
    > :not(:last-child) {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
`;
const LandingButton = external_styled_components_default()(components_.Button).withConfig({
    componentId: "sc-752e7768-5"
})`
  padding: 17px 34px;
  background: white;
  color: ${components_.colours.black};

  ${(0,external_styled_breakpoints_.down)("sm")} {
    padding: 20px 100px;
    border-radius: 66px;
  }

  ${(0,external_styled_breakpoints_.down)("xs")} {
    padding: 20px 60px;
  }
`;
const TransparentButton = external_styled_components_default()(LandingButton).withConfig({
    componentId: "sc-752e7768-6"
})`
  background: transparent;
  border: thin solid white;
  color: white;

  :hover {
    background: white;
    color: ${components_.colours.yellow};
    border: 1px solid red;
  }
`;
const ContainerStyling = external_styled_components_.css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Text = external_styled_components_default()(external_framer_motion_.motion.span).withConfig({
    componentId: "sc-752e7768-7"
})`
  font-size: 18px;
  text-align: center;
  color: white;
`;
const BodyText = external_styled_components_default()(Text).withConfig({
    componentId: "sc-752e7768-8"
})`
  max-width: 90ch;

  text-shadow: 0px 3px 6px #0000001a;
  @media only screen and (max-width: 1300px) {
    margin: 0px 10vw;
  }
  font-size: 20px;

  ${(0,external_styled_breakpoints_.down)("md")} {
    font-size: 16px;

    margin: 0px 120px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    margin: 0px 40px;
  }

  ${(0,external_styled_breakpoints_.down)("xs")} {
    margin: 0px 5px;
  }
`;
const ResponsiveTitleStyling = external_styled_components_.css`
  ${(0,external_styled_breakpoints_.down)("md")} {
    font-size: 30px;
  }

  ${(0,external_styled_breakpoints_.down)("xs")} {
    font-size: 26px;
  }
`;
const Title = external_styled_components_default()(Text).withConfig({
    componentId: "sc-752e7768-9"
})`
  font-size: 60px;
  font-family: "Eveleth";
  text-transform: uppercase;

  ${(0,external_styled_breakpoints_.down)("sm")} {
    margin-bottom: 30px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;
const YellowTitle = external_styled_components_default()(Title).withConfig({
    componentId: "sc-752e7768-10"
})`
  font-size: 72px;
  ${ResponsiveTitleStyling};
  background: transparent linear-gradient(95deg, #fdbb30 0%, #ff9a9a 100%) 0% 0%
    no-repeat padding-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const BlackTitle = external_styled_components_default()(Title).withConfig({
    componentId: "sc-752e7768-11"
})`
  font-size: 74px;
  ${ResponsiveTitleStyling};
  @media only screen and (max-width: 370px) {
    font-size: 30px;
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    font-size: 44px;
  }

  ${(0,external_styled_breakpoints_.down)("xs")} {
    font-size: 40px;
  }

  text-shadow: 0px 3px 6px #00000029;
  color: white;
`;
const Body = external_styled_components_default().div.withConfig({
    componentId: "sc-752e7768-12"
})`
  ${ContainerStyling};

  > :not(:last-child) {
    margin-bottom: 64px;

    ${(0,external_styled_breakpoints_.down)("sm")} {
      margin-bottom: 57px;
    }
  }
`;
const Header = external_styled_components_default().h1.withConfig({
    componentId: "sc-752e7768-13"
})`
  ${ContainerStyling};
  margin-top:0px;
`;
const BackgroundStyling = external_styled_components_.css`
  background-image: url("/images/splash-background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 1;
  content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  ${(0,external_styled_breakpoints_.down)("sm")} {
    //background-size: 300%;
  }
  ${(0,external_styled_breakpoints_.down)("md")} {
    background-position: center;
  }
`;
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-752e7768-14"
})`
  ${ContainerStyling};
  position: relative;

  ${Header}, ${Body} {
    z-index: 5;
  }
  min-height: 88vh;

  @media only screen and (max-width: 375px) { //Screen is so small that we need a large viewport
    min-height: 95vh;
  }

  > :not(:last-child) {
    margin-bottom: 30px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    > :not(:last-child) {
      margin-bottom: 0px;
    }
    /*
    padding-top: 88px;
    padding-bottom: 154px;*/
  }

  ${components_.Button.PlainButton} {
    font-family: "Eveleth";
    font-size: 18px;
    border: thin solid white;
    max-width: 240px;
  }

  ${(0,external_styled_breakpoints_.only)("md")} {
   // min-height: 920px;
  }

  ${landing_MouseScrollIndicator} {
    position: absolute;
    bottom: 60px;
  }
`;
/* harmony default export */ const landing_LandingSplash = (LandingSplash);

;// CONCATENATED MODULE: ./components/landing/QueenLanding.tsx








function QueenLandingSplash() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(QueenLanding_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(QueenLanding_SplashImage, {
                src: "/images/queenElizabethFeature.jpg",
                layout: "fill",
                objectFit: "cover",
                objectPosition: "right",
                priority: true,
                alt: "Splash background with crest and flag"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(QueenLanding_Header, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(QueenLanding_BlackTitle, {
                        children: "Queen Elizabeth II"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DatesTitle, {
                        children: "1926 - 2022"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(QueenLanding_Body, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TextContainer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(QueenLanding_BodyText, {
                                children: "Strength. "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(QueenLanding_BodyText, {
                                children: "Leadership. "
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BodyTextContainer, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(BodyTextUnderline, {
                                        children: "Family."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(UnderlineImage, {
                                        src: "/images/familyUnderline.svg"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TextContainer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(LineText, {
                            children: "Paying our respects to the longest reigning monarch in British history."
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(landing_MouseScrollIndicator, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(QueenLanding_BottomGradient, {})
        ]
    }));
}
const QueenLanding_ServiceButton = external_styled_components_default()(landing_AnimationButton).withConfig({
    componentId: "sc-54f06350-0"
})`
  background: white;
  color: ${components_.colours.black};
`;
const QueenLanding_LearnMoreButton = external_styled_components_default()(landing_AnimationButton).withConfig({
    componentId: "sc-54f06350-1"
})`
  background-color: transparent;
  color: white;
`;
const QueenLanding_BottomGradient = external_styled_components_default().div.withConfig({
    componentId: "sc-54f06350-2"
})`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 440px;
  //mix-blend-mode: screen;
  background-image: linear-gradient(rgba(23, 28, 30, 0), rgba(23, 28, 30, 1));
`;
const QueenLanding_SplashImage = external_styled_components_default()(next_image["default"]).withConfig({
    componentId: "sc-54f06350-3"
})`
  border: 1px solid red;
`;
const UnderlineImage = external_styled_components_default().img.withConfig({
    componentId: "sc-54f06350-4"
})`
    height: 6.5px;
    width: 100%
    max-width: 156px;
    position: relative;
`;
const QueenLanding_LandingButton = external_styled_components_default()(components_.Button).withConfig({
    componentId: "sc-54f06350-5"
})`
  padding: 17px 34px;
  background: white;
  color: ${components_.colours.black};

  ${(0,external_styled_breakpoints_.down)("sm")} {
    padding: 20px 100px;
    border-radius: 66px;
  }

  ${(0,external_styled_breakpoints_.down)("xs")} {
    padding: 20px 60px;
  }
`;
const QueenLanding_TransparentButton = external_styled_components_default()(QueenLanding_LandingButton).withConfig({
    componentId: "sc-54f06350-6"
})`
  background: transparent;
  border: thin solid white;
  color: white;

  :hover {
    background: white;
    color: ${components_.colours.yellow};
    border: 1px solid red;
  }
`;
const QueenLanding_ContainerStyling = external_styled_components_.css`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;
const QueenLanding_Text = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-54f06350-7"
})`
  font-size: 18px;
  text-align: left;
  color: white;

  ${(0,external_styled_breakpoints_.down)("md")} {
    text-align: left; 
    }

    ${(0,external_styled_breakpoints_.down)("sm")} {
    text-align: center; 
    }

    ${(0,external_styled_breakpoints_.down)("xs")} {
    text-align: center; 
    }
`;
const TextContainer = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-54f06350-8"
})`
  margin-left: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${(0,external_styled_breakpoints_.down)("md")} {
    margin-left: 75px;
    flex-wrap: wrap;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    margin-left:0px;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  ${(0,external_styled_breakpoints_.down)("xs")} {
    marigin-left: 0px;
    flex-wrap: wrap;
    justify-content:center;
  }
`;
const LineText = external_styled_components_default()(QueenLanding_Text).withConfig({
    componentId: "sc-54f06350-9"
})`
    max-width: 90ch;
    padding-left: 10px;

    font: normal normal normal 44px/32px Gotham Book;

    text-shadow: 0px 3px 6px #0000001a;
    @media only screen and (max-width: 1300px) {
    }
    font-size: 20px;

    ${(0,external_styled_breakpoints_.down)("md")} {
    font-size: 16px;
    }

    ${(0,external_styled_breakpoints_.down)("sm")} {
    font-size: 16px;
    }

    ${(0,external_styled_breakpoints_.down)("xs")} {
    font-size: 16px;
    }
`;
const QueenLanding_BodyText = external_styled_components_default()(QueenLanding_Text).withConfig({
    componentId: "sc-54f06350-10"
})`
  max-width: 90ch;
  padding-right: 10px;

  font: normal normal normal 44px/32px Gotham Book;

  text-shadow: 0px 3px 6px #0000001a;
  @media only screen and (max-width: 1300px) {
  }
  font-size: 45px;

  ${(0,external_styled_breakpoints_.down)("md")} {
    font-size: 40px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    font-size: 30px;
  }

  ${(0,external_styled_breakpoints_.down)("xs")} {
    font-size: 30px;
    padding-top: 5px;
  }
`;
const BodyTextUnderline = external_styled_components_default()(QueenLanding_Text).withConfig({
    componentId: "sc-54f06350-11"
})`
  max-width: 90ch;
  padding-bottom: 8px;
  padding-top: 0px;

  font: normal normal 900 44px/32px Gotham;

  text-shadow: 0px 3px 6px #0000001a;
  @media only screen and (max-width: 1300px) {
  }
  font-size: 45px;

  ${(0,external_styled_breakpoints_.down)("md")} {
    font-size: 40px;
    padding-top: 5px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    font-size: 30px;
    padding-top: 5px;
  }

  ${(0,external_styled_breakpoints_.down)("xs")} {
    font-size: 30px;
    padding-top: 5px;
  }
`;
const BodyTextContainer = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-54f06350-12"
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: auto;

  ${(0,external_styled_breakpoints_.down)("sm")} {
    width: 100%;
  }

  ${(0,external_styled_breakpoints_.down)("xs")} {
    width: 100%;
  }
`;
const QueenLanding_ResponsiveTitleStyling = external_styled_components_.css`
  ${(0,external_styled_breakpoints_.down)("md")} {
    font-size: 30px;
  }

  ${(0,external_styled_breakpoints_.down)("xs")} {
    font-size: 26px;
  }
`;
const QueenLanding_Title = external_styled_components_default()(QueenLanding_Text).withConfig({
    componentId: "sc-54f06350-13"
})`
  font-size: 60px;
  font-family: "Eveleth";
  text-transform: uppercase;

  ${(0,external_styled_breakpoints_.down)("sm")} {
  }
`;
const DateTitle = external_styled_components_default()(QueenLanding_Text).withConfig({
    componentId: "sc-54f06350-14"
})`
    font: normal normal 100 80px/32px Gotham;
    font-size: 60px;
    text-transform: uppercase;

    ${(0,external_styled_breakpoints_.down)("sm")} {
    }
`;
const QueenLanding_YellowTitle = external_styled_components_default()(QueenLanding_Title).withConfig({
    componentId: "sc-54f06350-15"
})`
  font-size: 72px;
  ${QueenLanding_ResponsiveTitleStyling};
  background: transparent linear-gradient(95deg, #fdbb30 0%, #ff9a9a 100%) 0% 0%
    no-repeat padding-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const QueenLanding_BlackTitle = external_styled_components_default()(QueenLanding_Title).withConfig({
    componentId: "sc-54f06350-16"
})`
  font-size: 70px;
  ${QueenLanding_ResponsiveTitleStyling};
  margin-bottom: 25px;
  margin-left: 100px;
  @media only screen and (max-width: 370px) {
    font-size: 30px;
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    font-size: 44px;
    margin-left: 75px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    font-size: 44px;
    margin-left: 0px;
  }

  ${(0,external_styled_breakpoints_.down)("xs")} {
    font-size: 40px;
    margin-left: 0px;
  }

  text-shadow: 0px 3px 6px #00000029;
  color: white;
`;
const DatesTitle = external_styled_components_default()(DateTitle).withConfig({
    componentId: "sc-54f06350-17"
})`
  font-size: 80px;
  ${QueenLanding_ResponsiveTitleStyling};
  margin-left: 100px;


  ${(0,external_styled_breakpoints_.down)("md")} {
    font-size: 44px;
    margin-left: 75px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    font-size: 35px;
    margin-left: 0px;
  }

  ${(0,external_styled_breakpoints_.down)("xs")} {
    font-size: 35px;
    margin-left: 0px;
  }

  text-shadow: 0px 3px 6px #00000029;
  color: white;
`;
const QueenLanding_Body = external_styled_components_default().div.withConfig({
    componentId: "sc-54f06350-18"
})`
  ${QueenLanding_ContainerStyling};

  > :not(:last-child) {
    margin-bottom: 64px;

    ${(0,external_styled_breakpoints_.down)("sm")} {
    }
  }
`;
const QueenLanding_Header = external_styled_components_default().div.withConfig({
    componentId: "sc-54f06350-19"
})`
  ${QueenLanding_ContainerStyling};
  padding-bottom: 100px;
`;
const QueenLanding_BackgroundStyling = external_styled_components_.css`
  background-image: url("/images/splash-background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 1;
  content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  ${(0,external_styled_breakpoints_.down)("sm")} {
    //background-size: 300%;
  }
  ${(0,external_styled_breakpoints_.down)("md")} {
    background-position: center;
  }
`;
const QueenLanding_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-54f06350-20"
})`
  ${QueenLanding_ContainerStyling};
  position: relative;

  ${QueenLanding_Header}, ${QueenLanding_Body} {
    z-index: 5;
  }
  min-height: 88vh;

  @media only screen and (max-width: 375px) { //Screen is so small that we need a large viewport
    min-height: 95vh;
  }

  > :not(:last-child) {
    margin-bottom: 30px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    > :not(:last-child) {
      margin-bottom: 0px;
    }
    /*
    padding-top: 88px;
    padding-bottom: 154px;*/
  }

  ${components_.Button.PlainButton} {
    font-family: "Eveleth";
    font-size: 18px;
    border: thin solid white;
    max-width: 240px;
  }

  ${(0,external_styled_breakpoints_.only)("md")} {
   // min-height: 920px;
  }

  ${landing_MouseScrollIndicator} {
    position: absolute;
    bottom: 60px;
  }
`;
/* harmony default export */ const QueenLanding = (QueenLandingSplash);

// EXTERNAL MODULE: ./components/landing/belief-in-a-divine-flow/Text.tsx
var belief_in_a_divine_flow_Text = __webpack_require__(1788);
;// CONCATENATED MODULE: ./components/landing/belief-in-a-divine-flow/quote/QuoteExplanation.tsx



function QuoteExplanation(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(belief_in_a_divine_flow_Text/* default */.Z, {
        className: props.className,
        children: "Harinder, BJS Managing Director, explains that he believes in a divine flow and his team;"
    }));
}
/* harmony default export */ const quote_QuoteExplanation = (external_styled_components_default()(QuoteExplanation).withConfig({
    componentId: "sc-ed8fa09f-0"
})``);

// EXTERNAL MODULE: ./components/util/useIsTabletOrSmaller.tsx
var useIsTabletOrSmaller = __webpack_require__(3176);
// EXTERNAL MODULE: ./components/landing/belief-in-a-divine-flow/quote/Person.tsx
var Person = __webpack_require__(2506);
// EXTERNAL MODULE: ./components/services/case-study/blueprint/LargeQuote.tsx
var LargeQuote = __webpack_require__(6801);
// EXTERNAL MODULE: ./components/landing/belief-in-a-divine-flow/quote/egg.ts
var egg = __webpack_require__(4628);
// EXTERNAL MODULE: ./components/landing/belief-in-a-divine-flow/quote/decode.ts
var decode = __webpack_require__(1029);
;// CONCATENATED MODULE: ./components/landing/belief-in-a-divine-flow/quote/HarinderQuote.tsx






const realQuote = "Who we are as people, our values and emotional needs, shouldn’t be ignored within the world of work. There is no division in our hearts before you start work and after you sit at your desk or the cab of a truck. By respecting my team and treating them with compassion and kindness they are better able to continue that conduct to the benefit of everyone they encounter, including our customers. It is what has set us apart as a business.";
const quotes = [
    "U291bmRzIGxpa2UgY29kZSBpc3N1ZSBidWQ=",
    "VGhvc2Ugd2VyZSBzaWxseSBtaXN0YWtlcyBvdGhlciB0aGFuIGdvb2Qgd29yayBidWQ=",
    "SSB0aGluayB5b3UgbmVlZCB0byBiZSBtb3JlIGZvY3VzZWQgaW4gdGVybXMgb2Ygd2hhdCB5b3UgYXJlIGRvaW5nLCBsb29rcyBsaWtlIHlvdSBtaXNzZWQgbG90cyB0aGluZ3MgdGhhdCB3ZW50IHlvdSBpbiBwcm9ibGVtLiBUaG9zZSB3ZXJlIHNpbGx5IG1pc3Rha2VzIG90aGVyIHRoYW4gZ29vZCB3b3JrIGJ1ZA==",
    "TmFoaCB5b3Ugc3RpbGwgZG9uJ3QgdW5kZXJzdGFuZCB0aGUgaXNzdWUuIEluIGVuZ2luZWVyaW5nIGlmIHlvdSBkb24ndCB1bmRlcnN0YW5kIHRoZSBpc3N1ZSB0aGVuIHdvdWxkbid0IGJlIGFibGUgdG8gc29sdmUgaXQgaW4gbXkgb3Bpbmlvbg==",
    "QnVkIGhvdyBjYW4geW91IGNsYWltIHRoaXM=",
    "VVBEQVRFIGBvcmRlcmAgU0VUXHJcbmBnc2l0X3JvdXRlX2lkYCA9IE5VTExcclxuV0hFUkUgYGdzaXRfcm91dGVfaWRgID0gJzIxNDc0ODM2NDcnIEFORCAoKGBpZGAgPSAnMjM3MzIyOCcpIE9SIChgaWRgID0gJzIzNzY4MzAnKSBPUiAoYGlkYCA9ICcyMzgwNzEzJykgT1IgKGBpZGAgPSAnMjM4MTgwNycpIE9SIChgaWRgID0gJzIzOTAxMzcnKSBPUiAoYGlkYCA9ICcyMzkwNjk5JykgT1IgKGBpZGAgPSAnMjM5MjEwOScpIE9SIChgaWRgID0gJzIzOTIyODInKSBPUiAoYGlkYCA9ICcyMzkyNzU0JykgT1IgKGBpZGAgPSAnMjM5NDQzNycpIE9SIChgaWRgID0gJzIzOTQ0NTQnKSBPUiAoYGlkYCA9ICcyMzk0NDU1JykgT1IgKGBpZGAgPSAnMjM5NDYwOCcpIE9SIChgaWRgID0gJzIzOTQ2MDknKSBPUiAoYGlkYCA9ICcyMzk0NjExJykgT1IgKGBpZGAgPSAnMjM5NDYxNCcpIE9SIChgaWRgID0gJzIzOTQ4OTAnKSBPUiAoYGlkYCA9ICcyMzk0OTc2JykgT1IgKGBpZGAgPSAnMjM5NDk5NScpIE9SIChgaWRgID0gJzIzOTUwMTYnKSBPUiAoYGlkYCA9ICcyMzk1MTMyJykgT1IgKGBpZGAgPSAnMjM5NTEzNScpIE9SIChgaWRgID0gJzIzOTUyNzknKSBPUiAoYGlkYCA9ICcyMzk2NjkxJykgT1IgKGBpZGAgPSAnMjM5Njc3MycpIE9SIChgaWRgID0gJzIzOTc3MDYnKSBPUiAoYGlkYCA9ICcyMzk4Mzc1JykgT1IgKGBpZGAgPSAnMjM5ODgzMycpKTs=",
    "TW9yYWwgb2YgdGhlIHN0b3J5IGlzIGlmIHlvdSBkb24ndCBmb2xsb3cgdGhlIGNvcnJlY3QgcGF0aCB0aGVuIG5vdCBnb2luZyB0byBzb2x2ZSB0aGUgcHJvYmxlbS4gc28gYXNrIG1vcmUgcXVlc3Rpb25zIGFuZCBlbnN1cmUgdGhhdCB5b3UgYXJlIG9uIHJpZ2h0IHRyYWNrIHRvIHNvbHZlIHRoZSBwcm9ibGVtLiB0aGFua3M=",
    "aXQncyBiZWVuIDIgd2Vla3MsIHRoaXMgaXMgYmxvY2tlZCBhbmQgaSBqdXN0IGxvb2tlZCBhdCBpc3N1ZSwgZm91bmQgdGhhdCBEb2NrZXIgZW50cnlwb2ludCBpcyB3cm9uZywgaSB0aGluayB5b3UgZG9uJ3Qga25vdyB3aGF0IG5lZWQgdG8gZG8gdG8gYmUgaG9uZXN0",
    "bGV0cyBjb25uZWN0", 
];
function HarinderQuote(props) {
    const { 0: index1 , 1: setIndex  } = (0,external_react_.useState)(-1);
    const isEgg = (0,egg/* useIsEnabled */.bd)();
    const computeFromRandom = ()=>{
        const index = Math.floor(Math.random() * quotes.length);
        return index;
    };
    const begin = ()=>{
        setInterval(()=>{
            setIndex(computeFromRandom());
        }, 8000);
    };
    const quote = (0,external_react_.useMemo)(()=>{
        if (index1 === -1 && isEgg) {
            setIndex(computeFromRandom());
            begin();
        }
        if (isEgg && index1 !== -1) {
            return (0,decode/* default */.Z)(quotes[index1]);
        }
        return realQuote;
    }, [
        isEgg,
        index1
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(HarinderQuote_Container, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(LargeQuote/* default */.ZP, {
            className: props.className,
            text: quote,
            children: props.children
        })
    }));
}
const HarinderQuote_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-f52efb74-0"
})`
  ${LargeQuote/* Text */.xv} {
    font-size: 14px;
  }
`;
/* harmony default export */ const quote_HarinderQuote = (external_styled_components_default()(HarinderQuote).withConfig({
    componentId: "sc-f52efb74-1"
})``);

;// CONCATENATED MODULE: ./components/landing/belief-in-a-divine-flow/quote/tablet/index.tsx






function TabletBody(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(tablet_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(tablet_Header, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(quote_QuoteExplanation, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Person/* default */.Z, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(quote_HarinderQuote, {})
        ]
    }));
}
const tablet_Header = external_styled_components_default().div.withConfig({
    componentId: "sc-23864812-0"
})`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
const tablet_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-23864812-1"
})`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${quote_HarinderQuote} {
    position: relative;
    top: -50px;
    font-size: inherit;
    ${LargeQuote/* QuoteMark */.UD} {
      ::before {
        top: -70px;
      }
    }
  }
`;
/* harmony default export */ const tablet = (external_styled_components_default()(TabletBody).withConfig({
    componentId: "sc-23864812-2"
})``);

;// CONCATENATED MODULE: ./components/landing/belief-in-a-divine-flow/quote/useSequence.ts

function useSequence(target, onTrigger) {
    const pointer = (0,external_react_.useRef)(0);
    const increment = ()=>{
        const old = pointer.current;
        const newPointer = old + 1;
        if (newPointer === target.length) {
            onTrigger();
            pointer.current = -1;
            return;
        }
        pointer.current = newPointer;
    };
    const reset = ()=>{
        pointer.current = 0;
    };
    (0,external_react_.useEffect)(()=>{
        document.body.addEventListener("keydown", handleEvent);
        return ()=>document.body.removeEventListener("keydown", handleEvent)
        ;
    }, []);
    const handleEvent = (e)=>{
        // e.preventDefault();
        if (e.repeat) {
            return;
        }
        if (pointer.current === -1) {
            return; //Already complete
        }
        const key = e.key;
        const wantedKey = target[pointer.current];
        if (wantedKey === key) {
            increment();
        } else {
            reset();
        }
    };
    return pointer;
}
/* harmony default export */ const quote_useSequence = (useSequence);

;// CONCATENATED MODULE: ./components/landing/belief-in-a-divine-flow/quote/index.tsx












function QuoteContainer(props) {
    const isTablet = (0,useIsTabletOrSmaller/* useIsOnlyTablet */.Ef)();
    const setCompleted = (0,egg/* useSetEnabled */.g0)();
    const keyPointer = quote_useSequence((0,decode/* default */.Z)("YW5pc2gxMjM="), ()=>{
        setCompleted(true);
    });
    if (isTablet) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(tablet, {
            className: props.className
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(quote_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(quote_QuoteExplanation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(quote_Body, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(quote_HarinderQuote, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Person/* default */.Z, {})
                })
            })
        ]
    }));
}
const quote_Body = external_styled_components_default().div.withConfig({
    componentId: "sc-a4f33e20-0"
})`
  display: flex;
  justify-content: space-between;
  width: 100%;

  gap: 40px;
  position: relative;

  @media only screen and (max-width: 1350px) and (min-width: 993px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 1400px) {
    ${LargeQuote/* default */.ZP} {
      ${LargeQuote/* Text */.xv} {
        max-width: 81ch;
      }
    }
  }

  ${LargeQuote/* default */.ZP} {
    font-size: 16px;
    font-style: italic;

    ${(0,external_styled_breakpoints_.down)("xs")} {
      font-size: 14px;
    }
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    ${LargeQuote/* Content */.VY} {
      flex-direction: column;
    }
    ${LargeQuote/* Text */.xv} {
      font-size: 16px;
      margin-bottom: 40px;
    }
  }
`;
const quote_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-a4f33e20-1"
})`
  display: flex;
  flex-direction: column;

  ${quote_Body} {
    margin-top: 40px;
    margin-bottom: 40px;

    ${(0,external_styled_breakpoints_.down)("xs")} {
      margin-top: 17px;
      margin-bottom: 36px;
    }
  }
`;
/* harmony default export */ const quote = (external_styled_components_default()(QuoteContainer).withConfig({
    componentId: "sc-a4f33e20-2"
})``);

// EXTERNAL MODULE: ./components/util/useWindowDimensions.ts
var useWindowDimensions = __webpack_require__(6066);
;// CONCATENATED MODULE: ./components/landing/belief-in-a-divine-flow/index.tsx










const imageUrl = "/images/landing/man-holding-tv.png";
function BeliefInADivineFlow() {
    const navigateTo = (0,AboutPage/* useNavigateTo */.j)();
    const { width  } = (0,useWindowDimensions/* default */.Z)();
    const isTabletOrSmaller = width <= 824; //824 or smaller...
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(belief_in_a_divine_flow_Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(belief_in_a_divine_flow_Body, {
                children: [
                    isTabletOrSmaller && /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: imageUrl,
                        layout: "responsive",
                        height: 70,
                        width: "100%"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(belief_in_a_divine_flow_Title, {
                        children: "Belief in a divine flow and the team"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(History, {
                        children: "From the very inception of BJS, spiritual guidance was sought from Baba Jaswant Singh Ji – whom the company is named after. Before his death in 2020, Baba Jaswant Singh Ji was based in Punjab and had a trust that ran projects for the welfare of humanity; providing health care facilities, higher medical education and to show ‘the path of spiritual righteousness’, to ‘foster human values and welfare with esteemed devotion indeed’."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(quote, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_.Button, {
                        id: "belief-in-a-devine-flow-go-to-our-story",
                        onClick: ()=>navigateTo("our story")
                        ,
                        children: "Our story"
                    })
                ]
            }),
            !isTabletOrSmaller && /*#__PURE__*/ jsx_runtime_.jsx(ImageContainer, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: imageUrl,
                    layout: "fill"
                })
            })
        ]
    }));
}
const ImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-b623897-0"
})`
  position: relative;
  height: 550px;
  width: 740px;
  @media only screen and (max-width: 1575px) {
    height: 350px;
  }

  @media only screen and (max-width: 1480px) {
    /* width: 505px;
    height: 360px;
    //position: absolute;
    right: 60px;*/
  }

  @media only screen and (max-width: 1380px) {
    position: absolute;
    right: 60px;
    width: 440px;
    height: 300px;
  }

  @media only screen and (max-width: 1130px) {
    width: 370px;
    height: 270px;
  }

  @media only screen and (max-width: 990px) {
    width: 360px;
    height: 250px;
    top: 70px;
  }

  @media only screen and (max-width: 920px) {
    width: 320px;
    height: 225px;
    top: 75px;
  }

  @media only screen and (max-width: 885px) {
    width: 280px;
    height: 190px;
  }
`;
const belief_in_a_divine_flow_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-b623897-1"
})`
  padding: 100px;
  background: white;
  display: flex;
  justify-content: space-between;

  > :not(:last-child) {
    margin-right: 60px;
  }

  position: relative;

  @media only screen and (max-width: 1600px) {
    padding: 60px 50px;
  }

  @media only screen and (max-width: 1400px) {
    padding: 60px;
  }
  @media only screen and (max-width: 1300px) {
    padding: 60px 30px;
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    > :not(:last-child) {
      margin-right: 0px; //Reset
    }
    flex-direction: column;
    padding: 40px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    padding: 60px 20px;
  }
`;
const belief_in_a_divine_flow_Title = external_styled_components_default().h2.withConfig({
    componentId: "sc-b623897-2"
})`
  font-family: "Eveleth";
  text-transform: uppercase;
  font-size: 32px;

  @media only screen and (max-width: 1490px) {
    font-size: 26px;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  @media only screen and (max-width: 1400px) {
    font-size: 30px;
    margin-top: 0px;
    max-width: 560px;
  }

  @media only screen and (min-width: 775px) and (max-width: 990px) {
    max-width: 50%;
  }
  ${(0,external_styled_breakpoints_.only)("md")} {
    font-size: 26px;
    max-width: initial;
    margin-top: 37px;
    max-width: unset;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    font-size: 20px;
  }
`;
const History = external_styled_components_default()(belief_in_a_divine_flow_Text/* default */.Z).withConfig({
    componentId: "sc-b623897-3"
})``;
const belief_in_a_divine_flow_Body = external_styled_components_default().div.withConfig({
    componentId: "sc-b623897-4"
})`
  display: flex;
  flex-direction: column;

  ${(0,external_styled_breakpoints_.up)("lg")} {
    width: 60%;
  }

  @media only screen and (max-width: 1490px) {
    width: 100%;
  }

  @media only screen and (max-width: 1400px) {
    width: auto;
    ${History}, ${quote_QuoteExplanation} {
      font-size: 14px;
      max-width: 100ch;
    }
  }

  ${History}, ${quote_QuoteExplanation} {
    @media only screen and (max-width: 1280px) {
      max-width: 80ch;
    }
    @media only screen and (max-width: 1085px) {
      max-width: 65ch;
    }

    @media only screen and (max-width: 830px) {
      max-width: 50ch;
    }

  }

  ${History} {
    @media only screen and (max-width: 824px) {
      max-width: 100%;
    }
  }

  ${belief_in_a_divine_flow_Title} {
    margin-bottom: 40px;
  }

  ${History} {
    margin-bottom: 10px;
  }

  ${components_.Button.PlainButton} {
    font-family: "Eveleth";
    width: fit-content;
    padding: 17px 40px;
    max-height: 56px;
    :hover {
      color: ${components_.colours.black} !important;
    }
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    width: 100%;
    ${belief_in_a_divine_flow_Title} {
      margin-top: 32px;
      margin-bottom: 38px;
    }
  }

  ${(0,external_styled_breakpoints_.only)("sm")} {
    ${quote} {
    }
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    ${belief_in_a_divine_flow_Title} {
      margin-top: 40px;
      margin-bottom: 25px;
    }

    ${components_.Button.PlainButton} {
      width: 100%;
    }
  }

  ${(0,external_styled_breakpoints_.down)("xs")} {
    ${belief_in_a_divine_flow_Title} {
      margin-top: 30px;
      margin-bottom: 20px;
    }
  }
`;
/* harmony default export */ const belief_in_a_divine_flow = (BeliefInADivineFlow);

// EXTERNAL MODULE: ./components/landing/above-and-beyond/index.tsx + 1 modules
var above_and_beyond = __webpack_require__(1760);
// EXTERNAL MODULE: ./components/network-statistics/index.tsx + 1 modules
var network_statistics = __webpack_require__(279);
// EXTERNAL MODULE: ./components/subsidiary-showcase/grid/SubsidiaryContext.tsx
var SubsidiaryContext = __webpack_require__(239);
// EXTERNAL MODULE: ./components/feedback/index.tsx + 7 modules
var feedback = __webpack_require__(2617);
// EXTERNAL MODULE: ./components/our-partners/index.tsx + 4 modules
var our_partners = __webpack_require__(3159);
// EXTERNAL MODULE: ./components/subsidiary-showcase/SubsidiaryBar.tsx + 4 modules
var SubsidiaryBar = __webpack_require__(9829);
;// CONCATENATED MODULE: ./components/subsidiary-showcase/detailed-info/blueprint/points/mobile/header/Entry.tsx



const Entry_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-70482516-0"
})`
  display: flex;
  flex-direction: column;
  
  > :not(:last-child) {
    margin-bottom: 10px;
  }

  ${(props)=>!props.selected && "opacity: 0.35"
};
`;
const Entry_Title = external_styled_components_default().span.withConfig({
    componentId: "sc-70482516-1"
})`
  font-family: "Eveleth";
  color: inherit;
  text-align: right;
  white-space: nowrap;
  ${(0,external_styled_breakpoints_.down)("sm")} {
    font-size: 13px;
  }
`;
const Highlight = external_styled_components_default().div.withConfig({
    componentId: "sc-70482516-2"
})`
  height: 3px;
  color: inherit;
  width: 100%;
  background: black;
  border-radius: 66px;
  content: "";
`;
function Entry(props) {
    const getTitle = ()=>{
        const propTitle = props.title;
        if (propTitle.toLowerCase() === "we offer flexibility") {
            return "we're flexible";
        }
        return propTitle;
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Entry_Container, {
        className: props.className,
        selected: props.selected,
        onClick: props.onClick,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Entry_Title, {
                children: getTitle()
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Highlight, {})
        ]
    }));
}

/* harmony default export */ const header_Entry = (external_styled_components_default()(Entry).withConfig({
    componentId: "sc-70482516-3"
})``);

;// CONCATENATED MODULE: ./components/subsidiary-showcase/detailed-info/blueprint/points/mobile/header/index.tsx



function header_Header(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(header_Container, {
        className: props.className,
        children: props.entries.map((entry, index)=>{
            return(/*#__PURE__*/ jsx_runtime_.jsx(header_Entry, {
                title: entry.title,
                selected: props.selectedIndex === index,
                onClick: ()=>props.onClickIndex(index)
            }));
        })
    }));
}
const header_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-d8bb2744-0"
})`
  display: flex;

  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  ${header_Entry}:last-child {
    //flex: 1;
  }
`;
/* harmony default export */ const header = (external_styled_components_default()(header_Header).withConfig({
    componentId: "sc-d8bb2744-1"
})``);

// EXTERNAL MODULE: ./components/subsidiary-showcase/detailed-info/blueprint/points/List.ts
var List = __webpack_require__(4043);
;// CONCATENATED MODULE: ./components/subsidiary-showcase/detailed-info/blueprint/points/mobile/index.tsx






function MobilePoints(props) {
    const { 0: chosenIndex , 1: setChosenIndex  } = (0,external_react_.useState)(0);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(mobile_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header, {
                entries: props.entries,
                selectedIndex: chosenIndex,
                onClickIndex: setChosenIndex
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(List/* default */.Z, {
                children: props.entries[chosenIndex].points.map((point)=>{
                    return(/*#__PURE__*/ jsx_runtime_.jsx(List/* ListItem */.H, {
                        children: point
                    }, point));
                })
            })
        ]
    }));
}
const mobile_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-58ef70a1-0"
})`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-right: -20px; //Allows the right side to span across viewport

  ${header} {
    margin-bottom: 30px;
  }

  ${List/* default */.Z} {
    ${(0,external_styled_breakpoints_.only)("md")} {
      > :not(:last-child) {
        margin-bottom: 15px;
      }
    }

    ${(0,external_styled_breakpoints_.down)("sm")} {
      > :not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }
`;
/* harmony default export */ const mobile = (MobilePoints);

;// CONCATENATED MODULE: ./components/subsidiary-showcase/detailed-info/blueprint/points/desktop/index.tsx



function DesktopPointComponent(props) {
    const entries = props.entries;
    if (entries.length === 0) {
        return null;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(desktop_Container, {
        className: props.className,
        children: entries.map((point1, index)=>{
            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(MiniContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(desktop_Title, {
                        children: point1.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(List/* default */.Z, {
                        children: point1.points.map((point)=>{
                            return(/*#__PURE__*/ jsx_runtime_.jsx(List/* ListItem */.H, {
                                children: point
                            }, point));
                        })
                    })
                ]
            }, index));
        })
    }));
}
const desktop_Title = external_styled_components_default().span.withConfig({
    componentId: "sc-b18757f6-0"
})`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
`;
const desktop_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-b18757f6-1"
})`
  display: flex;

  > :not(:last-child) {
    margin-right: 40px;
  }
  color: inherit;
`;
const MiniContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-b18757f6-2"
})`
  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 27px;
  }

  ${List/* default */.Z} {
    > :not(:last-child) {
      margin-bottom: 15px;
    }

    ${List/* ListItem */.H} {
      ::before {
        margin-right: 18px;
      }
    }
  }
`;
/* harmony default export */ const desktop = (external_styled_components_default()(DesktopPointComponent).withConfig({
    componentId: "sc-b18757f6-3"
})``);

;// CONCATENATED MODULE: ./components/subsidiary-showcase/detailed-info/blueprint/points/index.tsx





function Points(props) {
    const isMobile = (0,useIsTabletOrSmaller/* default */.ZP)();
    if (isMobile) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(mobile, {
            ...props
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(desktop, {
        ...props
    }));
}
/* harmony default export */ const points = (external_styled_components_default()(Points).withConfig({
    componentId: "sc-94a7a5c9-0"
})``);

// EXTERNAL MODULE: ./subsidiary-config/index.tsx
var subsidiary_config = __webpack_require__(1683);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./components/subsidiary-showcase/Subsidiary.ts
var Subsidiary = __webpack_require__(4170);
;// CONCATENATED MODULE: ./components/subsidiary-showcase/slider/useMove.ts


const getNext = (input, direction)=>{
    const index = Subsidiary/* allSubsidiaries.indexOf */.Y.indexOf(input);
    let newIndex = 0;
    if (direction === "right") {
        newIndex = index + 1;
        if (newIndex === 4) {
            newIndex = 0;
        }
    } else if (direction === "left") {
        newIndex = index - 1;
        if (newIndex < 0) {
            newIndex = Subsidiary/* allSubsidiaries.length */.Y.length - 1;
        }
    }
    return Subsidiary/* allSubsidiaries */.Y[newIndex];
};
function useMove() {
    const [subsidiary, setSubsidiary] = (0,SubsidiaryContext/* default */.ZP)();
    const move = (direction, elapsedControls)=>{
        elapsedControls.start("animate");
        setSubsidiary((old)=>{
            const newSubsidiary = getNext(old, direction);
            console.debug(`Moving to ${newSubsidiary}`);
            console.debug(elapsedControls);
            return newSubsidiary;
        });
    };
    return move;
}
/* harmony default export */ const slider_useMove = (useMove);

;// CONCATENATED MODULE: ./components/subsidiary-showcase/slider/Timer.tsx






const timerDuration = 25;
const variants = {
    initial: {
        width: "0%"
    },
    animate: {
        width: "100%",
        transition: {
            duration: timerDuration
        }
    }
};
const elapsedControlsState = (0,external_recoil_.atom)({
    key: "subsidiary_showcase_animation_controls",
    default: undefined
});
function useTimerAnimation() {
    return (0,external_recoil_.useRecoilValue)(elapsedControlsState);
}
function Timer({ className  }) {
    const move = slider_useMove();
    const elapsedControls = (0,external_framer_motion_.useAnimation)();
    const [_, setElapsedControls] = (0,external_recoil_.useRecoilState)(elapsedControlsState);
    (0,external_react_.useEffect)(()=>{
        const performAnimation = async ()=>{
            if (!elapsedControls) {
                return;
            }
            await elapsedControls.start("animate");
            await move("right", elapsedControls);
        };
        performAnimation();
    }, []);
    (0,external_react_.useEffect)(()=>{
        setElapsedControls(elapsedControls);
    }, [
        elapsedControls
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Root, {
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Bar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Elapsed, {
                animate: elapsedControls,
                variants: variants
            })
        ]
    }));
}
const Root = external_styled_components_default().div.withConfig({
    componentId: "sc-d19ee7c3-0"
})`
  position: relative;
  flex: 1;
  min-height: 10px;
  margin-right: 40px;
`;
const Elapsed = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-d19ee7c3-1"
})`
  position: absolute;
  left: 0;

  background: #3a3630 0% 0% no-repeat padding-box;
  border-radius: 66px;
  opacity: 0.1;
  height: 10px;
`;
const Bar = external_styled_components_default().div.withConfig({
    componentId: "sc-d19ee7c3-2"
})`
  position: absolute;
  left: 0;

  background: transparent
    radial-gradient(closest-side at 50% 50%, #ffffff00 0%, #3a3630 100%) 0% 0%
    no-repeat padding-box;
  opacity: 0.1;
  width: 100%;
  height: 10px;
  border-radius: 66px;
`;
/* harmony default export */ const slider_Timer = (external_styled_components_default()(Timer).withConfig({
    componentId: "sc-d19ee7c3-3"
})``);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/pro-regular-svg-icons"
var pro_regular_svg_icons_ = __webpack_require__(5403);
;// CONCATENATED MODULE: ./components/subsidiary-showcase/slider/Slider.tsx









function Slider({ className  }) {
    const move = slider_useMove();
    const subsidiary = (0,SubsidiaryContext/* useSelectedSubsidiary */.Lp)();
    const elapsedControls = useTimerAnimation();
    if (!elapsedControls) {
        return null;
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Slider_Container, {
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Arrow, {
                subsidiary: subsidiary,
                icon: pro_regular_svg_icons_.faChevronLeft,
                onClick: ()=>move("left", elapsedControls)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Arrow, {
                subsidiary: subsidiary,
                icon: pro_regular_svg_icons_.faChevronRight,
                onClick: ()=>move("right", elapsedControls)
            })
        ]
    }));
}
const getColour = (input)=>{
    if (input === "home delivery") {
        return "#706c66";
    }
    return "white";
};
const Arrow = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-290d7b31-0"
})`
  font-size: 60px !important;
  color: ${(props)=>getColour(props.subsidiary)
};
  cursor: pointer;

  :hover {
    color: ${components_.colours.yellow};
  }
  ${(0,external_styled_breakpoints_.down)("md")} {
    font-size: 45px !important;
    margin-bottom: 10px;
  }
`;
const Slider_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-290d7b31-1"
})`
  display: flex;
  align-items: center;

  > :first-child {
    margin-right: 30px;
  }
`;
/* harmony default export */ const slider_Slider = (external_styled_components_default()(Slider).withConfig({
    componentId: "sc-290d7b31-2"
})``);

// EXTERNAL MODULE: ./components/util/useIsMobile.tsx
var useIsMobile = __webpack_require__(6658);
;// CONCATENATED MODULE: ./components/subsidiary-showcase/slider/index.tsx







function TimerSlider(props) {
    const isMobile = (0,useIsMobile/* default */.Z)();
    const [subsidiary] = (0,SubsidiaryContext/* default */.ZP)();
    if (isMobile) {
        return null;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(slider_Root, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(slider_Container, {
            className: props.className,
            subsidiary: subsidiary,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(slider_Timer, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(slider_Slider, {})
            ]
        })
    }));
}
const slider_Root = external_styled_components_default().div.withConfig({
    componentId: "sc-e374ea3c-0"
})`
  position: absolute;

  width: 100%;
  bottom: 65px;
  z-index: 100;
  ${(0,external_styled_breakpoints_.down)("md")} {
    bottom: 10px;
  }
`;
const slider_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-e374ea3c-1"
})`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0px 40px;

  ${(0,external_styled_breakpoints_.only)("md")} {
    ${(props)=>props.subsidiary === "home delivery" && "padding-right: 60px;"
}; 
    //Men holding sofa blocks the arrow
  }
`;
/* harmony default export */ const slider = (external_styled_components_default()(TimerSlider).withConfig({
    componentId: "sc-e374ea3c-2"
})``);

;// CONCATENATED MODULE: ./components/subsidiary-showcase/detailed-info/blueprint/DetailedInfo.tsx











const DetailedInfo_variants = {
    initial: {
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 3
        }
    },
    exit: {
        opacity: 0.3,
        transition: {
            duration: 4
        }
    }
};
function DetailedInfo({ className , children , footerText , hidePoints , description , subsidiary , backgroundColour  }) {
    const goToService = (0,useServicesState/* useNavigateTo */.jU)();
    const shouldHidePoints = hidePoints !== null && hidePoints !== void 0 ? hidePoints : false;
    const config = (0,subsidiary_config/* default */.Z)(subsidiary);
    const colour = subsidiary === "haulage" || subsidiary === "constructit" ? "secondary" : "dark";
    const htmlDesc = description !== null && description !== void 0 ? description : config.description.join(" ");
    const htmlText = {
        __html: htmlDesc
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(DetailedInfo_Container, {
        className: className,
        animate: {
            backgroundColor: backgroundColour
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DetailedInfo_TextContainer, {
                variants: DetailedInfo_variants,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(DetailedInfo_Title, {
                        children: config.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Description, {
                        dangerouslySetInnerHTML: htmlText
                    }),
                    children,
                    !shouldHidePoints && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PointContainer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(points, {
                                entries: config.information
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PhraseContainer, {
                                children: [
                                    typeof footerText === "string" && /*#__PURE__*/ jsx_runtime_.jsx(Phrase, {
                                        children: footerText
                                    }),
                                    /*#__PURE__*/ (0,external_react_.isValidElement)(footerText) && footerText
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Button, {
                                id: "subsidiary-showcase-go-to-more-info",
                                colors: colour,
                                onClick: ()=>goToService(subsidiary)
                                ,
                                children: "More info"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(slider, {})
        ]
    }, config.title));
}
const DetailedInfo_Text = external_styled_components_default().span.withConfig({
    componentId: "sc-43ac0021-0"
})`
  color: inherit;
  z-index: inherit;
  font-size: inherit;
`;
const PhraseContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-43ac0021-1"
})``;
const Phrase = external_styled_components_default()(DetailedInfo_Text).withConfig({
    componentId: "sc-43ac0021-2"
})`
  font-size: 14px;
`;
const PointContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-43ac0021-3"
})`
  display: flex;
  flex-direction: column;
  z-index: 5;

  ${points} {
    margin-bottom: 35px;
  }

  ${PhraseContainer} {
    margin-top: 35px;
    margin-bottom: 50px;

    ${(0,external_styled_breakpoints_.down)("sm")} {
      margin-top: 30px;
      margin-bottom: 25px;
      margin-right: -30px;
    }
  }

  ${components_.Button.PlainButton} {
    padding: 17px 40px;
    width: min-content;
    font-family: "Eveleth";
    flex: 0;
    z-index: 11;
    position: relative;
    min-height: 56px;
    max-height: 56px;

    ${(0,external_styled_breakpoints_.down)("sm")} {
      font-size: 10px;
      position: relative;
      left: -7px; //Give the impression of alignment
    }
  }

  ${(0,external_styled_breakpoints_.only)("md")} {
    width: fit-content;
  }
`;
const DetailedInfo_Title = external_styled_components_default()(DetailedInfo_Text).withConfig({
    componentId: "sc-43ac0021-4"
})`
  text-transform: uppercase;
  font-family: "Eveleth";
  font-size: 36px;

  ${(0,external_styled_breakpoints_.down)("md")} {
    font-size: 30px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    font-size: 24px;
  }

  ${(0,external_styled_breakpoints_.down)("xs")} {
    font-size: 22px;
  }
`;
const Description = external_styled_components_default()(DetailedInfo_Text).withConfig({
    componentId: "sc-43ac0021-5"
})`
  font-size: 16px;
  a{
    color:#fff;
  }
  ${(0,external_styled_breakpoints_.only)("md")} {
    font-size: 14px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    //margin: 0px -10px;
  }
`;
const DetailedInfo_TextContainer = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-43ac0021-6"
})`
  display: flex;
  flex-direction: column;
  z-index: 5;

  ${(0,external_styled_breakpoints_.up)("lg")} {
    padding: 100px;
    padding-bottom: 140px;
    ${DetailedInfo_Text} {
      max-width: 660px;
    }
  }

  ${DetailedInfo_Title} {
    margin-bottom: 40px;
  }

  ${Description} {
    margin-bottom: 50px;
    ${(0,external_styled_breakpoints_.down)("sm")} {
      margin-bottom: 40px;
    }
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    padding: 20px;
    width: 100%;

    ${DetailedInfo_Title} {
      margin-bottom: 20px;
    }
  }

  ${(0,external_styled_breakpoints_.only)("md")} {
    padding: 0px 40px;

    ${DetailedInfo_Title} {
      margin-bottom: 30px;
    }
  }


  ${(0,external_styled_breakpoints_.down)("sm")} {
    padding-top: 45px;
  }
`;
const DetailedInfo_Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-43ac0021-7"
})`
  background-size: contain;
  position: relative;
  overflow: hidden;

  ${(0,external_styled_breakpoints_.down)("md")} {
    background-image: none;
    min-height: 694px;
    max-height: 694px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    min-height: 670px;
    max-height: 670px;
  }


  @media only screen and (max-width: 460px) {
    min-height: unset;
    max-height: unset;
  }

  ${(0,external_styled_breakpoints_.only)("md")} {
    padding: 50px 0px;
  }
  ${(0,external_styled_breakpoints_.down)("md")} {
    ${header_Entry}:last-child {
      ${Entry_Title} {
        padding-left: 40px;
        ${(0,external_styled_breakpoints_.down)("sm")} {
          padding-left: 10px;
        }
      }
    }
  }
`;

/* harmony default export */ const blueprint_DetailedInfo = (DetailedInfo);

;// CONCATENATED MODULE: ./components/subsidiary-showcase/detailed-info/subsidiary/HomeDeliveryDetailedInfo.tsx






const SofaContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-313c4a36-0"
})`
  position: absolute;
  overflow: hidden;
  z-index: 50;
  bottom: -20px;

  height: 900px;
  width: 900px;
  right: 200px;

  @media only screen and (min-width: 1920px) {
    height: 1015px;
    width: 1015px;
    right: 240px;
  }

  @media only screen and (max-width: 1650px) {
    right: 5%;
  }

  @media only screen and (max-width: 1500px) {
    right: -120px;
  }

  @media only screen and (max-width: 1355px) {
    right: -250px;
  }

  @media only screen and (max-width: 1200px) {
    right: -100px;
    height: 700px;
    width: 760px;
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    height: 504px;
    width: 527px;

    right: 0px;
    bottom: 0px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    z-index: 3;
    height: 326px;
    width: 342px;
    right: -48px;
    bottom: 15px;
  }

  /*@media only screen and (max-width: 1130px) {
    height: 600px;
  }*/

  @media only screen and (max-width: 415px) {
    height: 315px;
    width: 335px;
    right: -89px;
  }
  @media only screen and (max-width: 385px) {
    height: 240px;
    width: 255px;
    right: -47px;
  }
  @media only screen and (max-width: 370px) {
    right: -75px;
  }

  @media only screen and (max-width: 345px) {
    display: none;
  }

  /*
  ${(0,external_styled_breakpoints_.down)("xs")} {
    height: 255px;
    right: -65px;
  }*/
`;
const SofaMiniContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-313c4a36-1"
})`
  position: relative;
  height: 100%;
  width: 100%;
  ${(0,external_styled_breakpoints_.down)("md")} {
    height: 90%;
    width: 90%;
  }
`;
const Screen = external_styled_components_default()(blueprint_DetailedInfo).withConfig({
    componentId: "sc-313c4a36-2"
})`
  overflow: hidden;

  ${(0,external_styled_breakpoints_.only)("md")} {
    padding-bottom: 140px;
  }

  color: ${components_.colours.black};

  ${(0,external_styled_breakpoints_.up)("lg")} {
    ${DetailedInfo_Text} {
      max-width: 72ch;
    }
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    ${components_.Button.PlainButton} {
      z-index: 5;
    }
  }
`;
function HomeDeliveryDetailedInfo() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Screen, {
        subsidiary: "home delivery",
        footerText: "and much more..",
        backgroundColour: "#e3e0de",
        description: "Award winning <a href='/services/home-delivery' style='color:#3A3630'>two-man home delivery</a> teams, trained in excellence and trusted by leading brands. With an enviable track record of more than a decade the BJS family offer a range of flexible services to keep you and your customers happy.",
        children: /*#__PURE__*/ jsx_runtime_.jsx(OptimisedSofaImage, {})
    }));
}
function OptimisedSofaImage() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(SofaContainer, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(SofaMiniContainer, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: "/images/showcase/menholdingsofa.png",
                layout: "fill",
                priority: true,
                alt: "2 men carrying a sofa"
            })
        })
    }));
}
/* harmony default export */ const subsidiary_HomeDeliveryDetailedInfo = (HomeDeliveryDetailedInfo);

;// CONCATENATED MODULE: ./components/subsidiary-showcase/detailed-info/subsidiary/haulage/HaulageVanImage.tsx






const Image = external_styled_components_default().img.withConfig({
    componentId: "sc-a20545ab-0"
})`
  position: absolute;
  right: 0px;
  bottom: 0px;

  ${(0,external_styled_breakpoints_.down)("md")} {
    bottom: -30px;
    left: 110px;
    height: 784px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    left: -198px;
    height: 285px;
    bottom: 0px;
  }

  @media only screen and (max-width: 75px) and (min-width: 600px) {
    right: 0;
    left: auto;
  }
`;
function HaulageVanImage() {
    const url = useImageUrl();
    return(/*#__PURE__*/ jsx_runtime_.jsx(Image, {
        src: url,
        alt: "Featured BJS Haulage vans"
    }));
}
function useImageUrl() {
    const tablet = (0,useIsTabletOrSmaller/* useIsOnlyTablet */.Ef)();
    const isMobile = (0,useIsMobile/* default */.Z)();
    const uri = (0,external_react_.useMemo)(()=>{
        if (tablet) {
            return `haulage_tablet.jpg`;
        } else if (isMobile) {
            return `haulage.png`;
        }
        return `DesktopBackgrounds_Haulage.jpg`;
    }, [
        tablet
    ]);
    return `/images/showcase/${uri}`;
}
/* harmony default export */ const haulage_HaulageVanImage = (HaulageVanImage);

;// CONCATENATED MODULE: ./components/subsidiary-showcase/detailed-info/subsidiary/haulage/index.tsx






const haulage_Screen = external_styled_components_default()(blueprint_DetailedInfo).withConfig({
    componentId: "sc-a124a771-0"
})`
  color: white;

  ${Highlight} {
    background: white;
  }

  ${components_.Button.PlainButton} {
    color: black;
  }
`;
function HaulageDetailedInfo() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(haulage_Screen, {
        subsidiary: "haulage",
        backgroundColour: "black",
        footerText: "and much more..",
        children: /*#__PURE__*/ jsx_runtime_.jsx(haulage_HaulageVanImage, {})
    }));
}
/* harmony default export */ const haulage = (HaulageDetailedInfo);

// EXTERNAL MODULE: ./subsidiary-config/extra-config.ts
var extra_config = __webpack_require__(9437);
;// CONCATENATED MODULE: ./components/subsidiary-showcase/detailed-info/subsidiary/ExtraDetailedInfo.tsx








const ExtraDetailedInfo_Screen = external_styled_components_default()(blueprint_DetailedInfo).withConfig({
    componentId: "sc-6e44453f-0"
})`
  color: white;

  ${components_.Button.PlainButton} {
    color: ${extra_config/* default.primaryColour */.Z.primaryColour};
    background: white;
    border: 1px solid white;

    :hover {
      color: white;
      background: ${components_.colours.yellow};
      border: 1px solid ${extra_config/* default.primaryColour */.Z.primaryColour};
    }
  }

  @media screen and (max-width: 1600px) {
    ${PhraseContainer} {
      width: 70%;
    }
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    ${PhraseContainer} {
      width: 50%;
    }
  }

  ${Highlight} {
    background: white;
  }
`;
const ExtraVan = external_styled_components_default()(external_framer_motion_.motion.img).withConfig({
    componentId: "sc-6e44453f-1"
})`
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 1;
  height: 98%;

  @media screen and (max-width: 1855px) {
    height: 80%;
    bottom: 0px;
    top: auto;
  }

  @media screen and (max-width: 1600px) {
    height: 70%;
    right: -100px;
  }

  @media only screen and (max-width: 1220px) and (min-width: 980px) {
    height: 50%;
    right: 30px;
    bottom: 50px;
  }
  ${(0,external_styled_breakpoints_.down)("md")} {
    height: 55%;
    right: -60px;
    bottom: 30px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    right: -230px;
    height: 280px;
    bottom: 10px;
  }

  @media only screen and (min-width: 590px) and (max-width: 767px) {
    height: 60%;
    right: -280px;
  }

  @media only screen and (max-width: 300px) {
    display: none;
  }
`;
function ExtraDetailedInfo() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(ExtraDetailedInfo_Screen, {
        subsidiary: "extra",
        backgroundColour: extra_config/* default.primaryColour */.Z.primaryColour,
        footerText: "so you can get from A to where you need to be...",
        children: /*#__PURE__*/ jsx_runtime_.jsx(ExtraVan, {
            src: "/images/services/extra/van.png",
            alt: "BJS Extra branded van",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                duration: 1
            }
        })
    }));
}
/* harmony default export */ const subsidiary_ExtraDetailedInfo = (ExtraDetailedInfo);

;// CONCATENATED MODULE: ./public/images/showcase/constructit.png
/* harmony default export */ const constructit = ({"src":"/_next/static/media/constructit.9e8a4fd7.png","height":776,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEUYHiQVGh8jJyY3OyNedIJMV09KW0InMjxETSRFRVKBq8EZthB9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVQImQXBgQEAIAjDsG4DQf8/2ARguusBOHsKCTm+HwPgAEp+K18NAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/images/showcase/constructit_tablet.jpg
/* harmony default export */ const constructit_tablet = ({"src":"/_next/static/media/constructit_tablet.bec3dcdc.jpg","height":617,"width":824,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAABBAMBAAAAAAAAAAAAAAABAAIDMQQRIgX/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQACETH/2gAMAwEAAhEDEQA/AJ75bsPps+KJ5COA46aDuybpERBZFyBUez//2Q=="});
;// CONCATENATED MODULE: ./public/images/showcase/constructit_mobile.jpg
/* harmony default export */ const constructit_mobile = ({"src":"/_next/static/media/constructit_mobile.dbf3ea4b.jpg","height":730,"width":776,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAHAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAABBQADAAAAAAAAAAAAAAABAAIDBBIFESH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAQEBAQAAAAAAAAAAAAAAAAEAERL/2gAMAwEAAhEDEQA/AILhLFevLqWCSY5cA0FuCSPOwQiIjnFaMG//2Q=="});
;// CONCATENATED MODULE: ./components/subsidiary-showcase/detailed-info/subsidiary/construct-it/Background.tsx





//import desktopBackground from "public/images/showcase/DesktopBackgrounds_ConstructIT.jpg";





function Background({ className  }) {
    const isDesktop = (0,useIsTabletOrSmaller/* useIsDesktop */.Ce)();
    const isMobile = (0,useIsMobile/* default */.Z)();
    const src = (0,external_react_.useMemo)(()=>{
        if (isDesktop) {
            return constructit;
        } else if (isMobile) {
            return constructit_mobile;
        }
        return constructit_tablet;
    }, [
        isDesktop
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(Background_Container, {
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx(RelativeContainer, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: src,
                layout: "fill",
                objectFit: "cover",
                quality: 100
            })
        })
    }));
}
const Background_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-9809ee07-0"
})`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  ${(0,external_styled_breakpoints_.up)("lg")} {
    margin: -100px;
  }
  ${(0,external_styled_breakpoints_.down)("md")} {
    margin: -50px -40px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    margin: -20px;
    margin-top: -45px;
  }

  background: #15191c;
`;
const RelativeContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-9809ee07-1"
})`
  position: relative;
  height: 100%;
  width: 100%;
  ${(0,external_styled_breakpoints_.down)("md")} {
    width: 70%;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    width: 59%;
    height: 300px;
  }
`;
/* harmony default export */ const construct_it_Background = (external_styled_components_default()(Background).withConfig({
    componentId: "sc-9809ee07-2"
})``);

// EXTERNAL MODULE: ./subsidiary-config/construct-it-config.ts
var construct_it_config = __webpack_require__(7729);
;// CONCATENATED MODULE: ./components/subsidiary-showcase/detailed-info/subsidiary/construct-it/index.tsx









const constructITColour = construct_it_config/* default.primaryColour */.Z.primaryColour;
const construct_it_Screen = external_styled_components_default()(blueprint_DetailedInfo).withConfig({
    componentId: "sc-b006eeb1-0"
})`
  /*background: black url("/images/services/construct-it/background.png")
    no-repeat right bottom !important;
  background-size: cover !important;*/
  background: black;
  
  color: white;

  ${DetailedInfo_Title} {
    ${(0,external_styled_breakpoints_.up)("lg")} {
      white-space: nowrap;
    }
  }
  ${Highlight} {
    background: white;
  }

  ${List/* ListItem */.H} {
    ::after {
      background: ${constructITColour};
    }
  }

  ${components_.Button.PlainButton} {
    color: black;
  }

/*
  ${(0,external_styled_breakpoints_.down)("md")} {
    background: #14191E url("/images/showcase/constructit_tablet.jpg") no-repeat center bottom !important;
    background-size: 100% !important;
    background-repeat: no-repeat !important;
    color: white;
  }*/


  @media only screen and (max-width: 300px) {
    background: black !important;
  }
`;
const PhraseText = ()=>{
    const it = /*#__PURE__*/ jsx_runtime_.jsx("span", {
        style: {
            color: constructITColour
        },
        children: "IT"
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
        children: [
            "If you can build with ",
            it,
            ", we can shift ",
            it,
            "."
        ]
    }));
};
function ConstructITInfo() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(construct_it_Screen, {
        subsidiary: "constructit",
        footerText: /*#__PURE__*/ jsx_runtime_.jsx(PhraseText, {}),
        backgroundColour: "inherit",
        description: "<a href='/services/construct-it'>Construct IT</a> provides a safe and reliable service for market-leading construction product manufacturers. An impressive modern fleet delivers outstanding service and specialist haulage for the construction industry, backed by a first-class IT system and DVS compliance as standard.",
        children: /*#__PURE__*/ jsx_runtime_.jsx(construct_it_Background, {})
    }));
}
/* harmony default export */ const construct_it = (ConstructITInfo);

;// CONCATENATED MODULE: ./components/subsidiary-showcase/detailed-info/subsidiary/index.tsx





function SubsidiaryDetailedInfo({ subsidiary  }) {
    if (subsidiary === "haulage") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(haulage, {}));
    } else if (subsidiary === "home delivery") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(subsidiary_HomeDeliveryDetailedInfo, {}));
    } else if (subsidiary === "extra") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(subsidiary_ExtraDetailedInfo, {}));
    } else if (subsidiary === "constructit") {
        return(/*#__PURE__*/ jsx_runtime_.jsx(construct_it, {}));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(subsidiary_HomeDeliveryDetailedInfo, {}));
}
/* harmony default export */ const subsidiary = (SubsidiaryDetailedInfo);

;// CONCATENATED MODULE: ./components/subsidiary-showcase/index.tsx






function SubsidiaryShowcase() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(subsidiary_showcase_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.AnimateSharedLayout, {
                type: "crossfade",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SelectedDetailedInfo, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SubsidiaryBar/* default */.Z, {
                right: "track order"
            })
        ]
    }));
}
function SelectedDetailedInfo() {
    const selected = (0,SubsidiaryContext/* useSelectedSubsidiary */.Lp)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(subsidiary, {
        subsidiary: selected
    }));
}
const subsidiary_showcase_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-d806f529-0"
})`
  display: flex;
  flex-direction: column;

 // box-shadow: -10px 20px 20px #00000059;
`;
/* harmony default export */ const subsidiary_showcase = (SubsidiaryShowcase);

// EXTERNAL MODULE: ./components/util/getTrustpilotProps.ts + 1 modules
var getTrustpilotProps = __webpack_require__(7670);
;// CONCATENATED MODULE: ./pages/index.tsx














//export const config = { amp: true } 
/*const SubsidiaryShowcase = dynamic(
  () => import("components/subsidiary-showcase")
);*/ const selectSplash = ()=>{
    let date = (0,external_date_fns_.format)(new Date(), "yyyy-MM-dd");
    if (date < "2022-09-30") {
        return true;
    }
    return false;
};
const Home = ({ trustpilot  })=>{
    const { 0: subsidiary , 1: setSubsidiary  } = (0,external_react_.useState)("home delivery");
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "BJS Family - Your logistics, safe in our hands"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "BJS Home Delivery provides the very best home delivery in the UK, offering retailers a wide range of flexible services carried out by expertly-trained teams."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image:url",
                        content: `${"https://bjs-static.s3.eu-west-2.amazonaws.com"}/bjs-family/bjsMetaOptimised_Homepage.jpg`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: "BJS Home Delivery | Your Products, Safe In Our Hands"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            !selectSplash() && /*#__PURE__*/ jsx_runtime_.jsx(landing_LandingSplash, {}),
            selectSplash() && /*#__PURE__*/ jsx_runtime_.jsx(QueenLanding, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(SubsidiaryContext/* SubsidiaryProvider */.Kk, {
                selected: subsidiary,
                setSelected: setSubsidiary,
                children: /*#__PURE__*/ jsx_runtime_.jsx(subsidiary_showcase, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(belief_in_a_divine_flow, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(above_and_beyond/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(network_statistics/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(our_partners/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(feedback/* default */.Z, {
                trustpilot: trustpilot
            })
        ]
    }));
};
async function getStaticProps() {
    return await (0,getTrustpilotProps/* default */.Z)();
}
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 2699:
/***/ ((module) => {

module.exports = require("@bjsdistribution/components");

/***/ }),

/***/ 5403:
/***/ ((module) => {

module.exports = require("@fortawesome/pro-regular-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

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

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 9094:
/***/ ((module) => {

module.exports = require("react-lottie-player");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5675,5152,324,3159,7729,5141,7982,6066,8777,279,9178,2349,1683,3082,6801,1473,2797,2242,2506], () => (__webpack_exec__(2328)));
module.exports = __webpack_exports__;

})();