"use strict";
exports.id = 1727;
exports.ids = [1727];
exports.modules = {

/***/ 1727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ our_story_TimelineSection)
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
;// CONCATENATED MODULE: ./components/about/timeline/entry/Connector.tsx




function Connector(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Line, {
                ...props
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Dot, {})
        ]
    }));
}
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-903e0031-0"
})`
  // position: absolute;
  z-index: 2;

  height: 100%;
  right: -24px;
  display: flex;
  ${(0,external_styled_breakpoints_.up)("lg")} {
    right: -37px;
  }
  ${(props)=>props.direction === "right" && RightPositionStyling
};
  align-items: center;

  ${(0,external_styled_breakpoints_.down)("md")} {
 //   left: 55%;
    right: -7px;
  }
  @media only screen and (max-width: 1300px) {
    right: -7px;
  }
`;
const RightPositionStyling = external_styled_components_.css`
  flex-direction: row-reverse;
  right: auto;
  left: -17px;
  ${(0,external_styled_breakpoints_.up)("lg")} {
    left: -31px;
    right: unset;
  }
`;
const Line = external_styled_components_default().div.withConfig({
    componentId: "sc-903e0031-1"
})`
  background: transparent linear-gradient(${(props)=>getDirection(props)
}, #3a3630 0%, #e4e2de00 100%) 0%
    0% no-repeat padding-box;
  width: 200px;
  height: 6px;
  content: "";
  @media only screen and (max-width: 1775px) and (min-width: 1400px) {
    width: 100px;
  }
  @media only screen and (max-width: 1400px) and (min-width: 1300px) {
    width: 75px;
  }
  ${(0,external_styled_breakpoints_.down)('sm')} {
    width: 100px;
  }
`;
const getDirection = (input)=>{
    const value = input.direction === "left" ? 270 : 90;
    return `${value}deg`;
};
const Dot = external_styled_components_default().div.withConfig({
    componentId: "sc-903e0031-2"
})`
  box-sizing: content-box;
  height: 8px;
  width: 8px;
  background: ${components_.colours.yellow};
  border: 6px solid ${components_.colours.black};
  border-radius: 50%;
`;
/* harmony default export */ const entry_Connector = (Connector);

;// CONCATENATED MODULE: ./components/about/timeline/entry/Partnership.tsx



function Partnership(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Partnership_Container, {
        className: props.className,
        children: "Partnership"
    }));
}
const Partnership_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-21fc33d7-0"
})`
  display: flex;
  padding: 7px 10px;
  font-family: "Eveleth";
  font-size: 10px;
  background: ${components_.colours.yellow};
  border-radius: 6px;
  align-items: center;

`;
/* harmony default export */ const entry_Partnership = (external_styled_components_default()(Partnership).withConfig({
    componentId: "sc-21fc33d7-1"
})``);

// EXTERNAL MODULE: ./components/util/useIsTabletOrSmaller.tsx
var useIsTabletOrSmaller = __webpack_require__(3176);
// EXTERNAL MODULE: ./components/util/useWindowDimensions.ts
var useWindowDimensions = __webpack_require__(6066);
// EXTERNAL MODULE: ./components/util/getClientLogo.ts
var getClientLogo = __webpack_require__(2349);
;// CONCATENATED MODULE: ./components/about/timeline/entry/ClientLogos.tsx



function Logos(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(ClientLogos_Container, {
        className: props.className,
        children: props.clients.map((client)=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: (0,getClientLogo/* default */.ZP)(client)
            }, client)
        )
    }));
}
const ClientLogos_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-c4a37018-0"
})`
  display: flex;
  flex-direction: column;
`;
/* harmony default export */ const ClientLogos = (external_styled_components_default()(Logos).withConfig({
    componentId: "sc-c4a37018-1"
})``);

;// CONCATENATED MODULE: ./components/about/timeline/entry/SupportingMedia.tsx


const borderRadius = "12px";
const SupportingMedia = external_styled_components_default().div.withConfig({
    componentId: "sc-fe261167-0"
})`
  display: flex;
  background: white;
  min-height: 250px;
  min-width: unset;
  width: 30%;
  border-radius: ${borderRadius};
  height: fit-content;
  margin: 20px 0px;

  ${(0,external_styled_breakpoints_.down)("md")} {
    min-height: 180px;
    max-width: 250px;
    min-width: 250px;
  }
  @media only screen and (max-width: 1300px) {
    min-height: 180px;
    max-width: 250px;
    min-width: 250px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    min-width: unset;
    max-width: unset;
    width: 90%;
    height: auto;
  }
  img {
    width: 100%;
    padding: 20px;
  }
`;

/* harmony default export */ const entry_SupportingMedia = (SupportingMedia);

;// CONCATENATED MODULE: ./components/about/timeline/entry/index.tsx







function TimelineEntry(props) {
    const isTabletOrSmaller = (0,useIsTabletOrSmaller/* default */.ZP)();
    const { width  } = (0,useWindowDimensions/* default */.Z)();
    let direction = props.right ? "right" : "left";
    if (isTabletOrSmaller || width <= 1300) {
        direction = "left";
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(entry_Container, {
        className: props.className,
        direction: direction,
        children: [
            !!props.image && props.image,
            !props.image && /*#__PURE__*/ jsx_runtime_.jsx(FakeImage, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Column, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(YearContainer, {
                        children: [
                            props.partnership && direction === "left" && /*#__PURE__*/ jsx_runtime_.jsx(entry_Partnership, {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Year, {
                                direction: direction,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(YearTitle, {
                                        children: props.year
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(entry_Connector, {
                                        direction: direction
                                    })
                                ]
                            }),
                            props.partnership && direction === "right" && /*#__PURE__*/ jsx_runtime_.jsx(entry_Partnership, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Content, {
                        children: props.children
                    })
                ]
            })
        ]
    }));
}
const Column = external_styled_components_default().div.withConfig({
    componentId: "sc-bc479f22-0"
})`
  display: flex;
  flex-direction: column;
  gap: 40px;
  // max-width: 370px;
  flex: 1;
  font-size: 16px;

  ${(0,external_styled_breakpoints_.down)("md")} {
    max-width: 100%;
    width: unset;
  }
  @media only screen and (max-width: 1300px) {
    max-width: 100%;
    width: unset;
  }
`;
const Content = external_styled_components_default().div.withConfig({
    componentId: "sc-bc479f22-1"
})`
  ${(0,external_styled_breakpoints_.down)("md")} {
    margin-right: 20px;
  }
`;
const FakeImage = external_styled_components_default().div.withConfig({
    componentId: "sc-bc479f22-2"
})`
  height: 250px;
  width: 350px;
  border: 1px solid black;
`;
const entry_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-bc479f22-3"
})`
  display: flex;
  gap: 3%;
  position: relative;
  ${(props)=>props.direction === "right" && "left: 0%;flex-direction: row-reverse;text-align: right;"
};

  ${(0,external_styled_breakpoints_.down)("sm")} {
    flex-direction: column;
  }
  ${Column} {
    ${(props)=>props.direction === "right" && "margin-right: 6px;"
};
  }
  ${Content} {
    ${(props)=>props.direction === "right" ? "padding-left: 30px;" : "padding-right: 30px;"
};
  }
`;
const YearContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-bc479f22-4"
})`
  display: flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 11px;
  }
`;
const Year = external_styled_components_default().div.withConfig({
    componentId: "sc-bc479f22-5"
})`
  font-size: 36px;
  font-family: "Eveleth";
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  ${(props)=>props.direction === "right" && "flex-direction: row-reverse;"
};

  /* ${(0,external_styled_breakpoints_.only)("md")} {
    padding-top: 30px;
  }*/
`;
const YearTitle = external_styled_components_default().div.withConfig({
    componentId: "sc-bc479f22-6"
})`
  font-size: 36px;
  font-family: "Eveleth";
`;


/* harmony default export */ const entry = (external_styled_components_default()(TimelineEntry).withConfig({
    componentId: "sc-bc479f22-7"
})``);

;// CONCATENATED MODULE: ./components/about/timeline/path.ts
const path = `/images/about/our-story/timeline`;
/* harmony default export */ const timeline_path = (path);

;// CONCATENATED MODULE: ./components/about/timeline/impl/cots-wold/media/Header.tsx




const Header_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-d1daf8f2-0"
})`
  background: url(${timeline_path}/happy-guy.jpg) no-repeat;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  //padding-bottom: 30px;
  min-height: 250px;
  background-position: center;
  border-top-left-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};
`;
const Grey = external_styled_components_default().span.withConfig({
    componentId: "sc-d1daf8f2-1"
})`
  font-family: Eveleth;
  font-size: 25px;
  color: #695f50;
`;
const White = external_styled_components_default().span.withConfig({
    componentId: "sc-d1daf8f2-2"
})`
  font-family: "Eveleth";
  font-size: 40px;
  color: white;
  position: relative;
  top: -15px;
`;
function Header() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Header_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Grey, {
                children: "Choice of day"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(White, {
                children: "Delivery"
            })
        ]
    }));
}
/* harmony default export */ const media_Header = (external_styled_components_default()(Header).withConfig({
    componentId: "sc-d1daf8f2-3"
})``);

;// CONCATENATED MODULE: ./components/about/timeline/impl/cots-wold/media/Footer.tsx






function Footer(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Footer_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: `${timeline_path}/next-day.svg`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: (0,getClientLogo/* default */.ZP)("cotswold")
            })
        ]
    }));
}
const Footer_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-ec7270c9-0"
})`
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: 1450px) {
    flex-direction: row;
  }
  flex-direction: column;
  padding: 22px 25px;

  border-bottom-left-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};

  ${(0,external_styled_breakpoints_.down)("md")} {
    align-items: center;
    width: 60%;
    flex-direction: row;
  }
  img {
    @media only screen and (min-width: 1450px) {
      width: 50%;
    }
    padding: 0px !important;
    object-fit: scale-down;
  }
`;
/* harmony default export */ const media_Footer = (external_styled_components_default()(Footer).withConfig({
    componentId: "sc-ec7270c9-1"
})``);

;// CONCATENATED MODULE: ./components/about/timeline/impl/cots-wold/media/index.tsx





const MediaContainer = external_styled_components_default()(entry_SupportingMedia).withConfig({
    componentId: "sc-c4c4a2e-0"
})`
  flex-direction: column;
  @media only screen and (min-width: 1450px) {
    min-width: 350px !important;
  }
`;
function Media() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(MediaContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(media_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(media_Footer, {})
        ]
    }));
}
/* harmony default export */ const media = (Media);

;// CONCATENATED MODULE: ./components/about/timeline/impl/cots-wold/index.tsx




function CotsWoldCompany(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(entry, {
        year: 2012,
        partnership: true,
        className: props.className,
        image: /*#__PURE__*/ jsx_runtime_.jsx(media, {}),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "We began delivering for the ",
                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: "The Cotswold Company"
                    }),
                    ", with whom we continue to work closely."
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "We were one of the first to introduce 'next day' and 'choice of delivery day' for our customers; a breakthrough in the two-man delivery market."
            })
        ]
    }));
}
/* harmony default export */ const cots_wold = (external_styled_components_default()(CotsWoldCompany).withConfig({
    componentId: "sc-6f554e30-0"
})``);

;// CONCATENATED MODULE: ./components/about/timeline/impl/julian-bowen/media/Header.tsx




const Image = external_styled_components_default().img.withConfig({
    componentId: "sc-c3c91862-0"
})`
 // background: url(${timeline_path}/walking.jpg) no-repeat;
//  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border-top-left-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};
  padding: 0px !important;
`;
function Header_Header() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Image, {
        src: `${timeline_path}/walking.jpg`
    }));
}
/* harmony default export */ const julian_bowen_media_Header = (external_styled_components_default()(Header_Header).withConfig({
    componentId: "sc-c3c91862-1"
})``);

;// CONCATENATED MODULE: ./components/about/timeline/impl/julian-bowen/media/index.tsx




function media_Media() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(media_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(julian_bowen_media_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(ClientLogos, {
                clients: [
                    "julian bowen",
                    "oliver bonas",
                    "nectar sleep"
                ]
            })
        ]
    }));
}
const media_Container = external_styled_components_default()(entry_SupportingMedia).withConfig({
    componentId: "sc-c8e6fda2-0"
})`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1450px) {
    min-width: 350px !important;
  }

  ${ClientLogos} {
    gap: 30px;
    padding: 40px 45px;
    @media only screen and (min-width: 1450px) {
      padding: 20px 0px;
    }
    align-items: center;

    img {
      padding: 0px !important;
      object-fit: scale-down;
      :nth-child(1) {
        // padding: 0px !important;
        width: 160px;
      }
      :nth-child(2) {
        //Make oliver bonas logo smaller
        width: 115px;
        @media only screen and (min-width: 1450px) {
          width: 135px;
        }
      }
      :nth-child(3) {
        //Same with nectar logo
        width: 160px;
        @media only screen and (min-width: 1450px) {
          width: 190px;
        }
      }
    }
  }
`;
/* harmony default export */ const julian_bowen_media = (media_Media);

;// CONCATENATED MODULE: ./components/about/timeline/impl/julian-bowen/index.tsx




function JulianBowen(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(entry, {
        className: props.className,
        year: 2019,
        image: /*#__PURE__*/ jsx_runtime_.jsx(julian_bowen_media, {}),
        right: true,
        partnership: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "We begin working with ",
                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: "Julian Bowen"
                    }),
                    ", a well known and established family furniture wholesaler who work with large high street retailers such as Next and DFS."
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "A strong brand in retail since it was founded in 1993, BJS won a tender to support ",
                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: "Oliver Bonas"
                    }),
                    " in their home deliveries."
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "We moved to ease customer integrations and get new customers up-and-running quickly by providing a suite of 'public' APIs."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "We developed our own vehicle route-planning and optimisation system in-house and from the ground-up - going live in Q1 2019."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "The USA 'mattress in a box' company, ",
                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: "Nectar Sleep"
                    }),
                    " - come on-board."
                ]
            })
        ]
    }));
}
/* harmony default export */ const julian_bowen = (external_styled_components_default()(JulianBowen).withConfig({
    componentId: "sc-45c2a3d8-0"
})``);

;// CONCATENATED MODULE: ./components/about/timeline/impl/made-company/media/Header.tsx





const media_Header_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-36a09fef-0"
})`
  background: url(${timeline_path}/warehouse.jpg) no-repeat;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 20px;
  justify-content: flex-end;
  min-height: 250px;
  background-position: center;
  border-top-left-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};
`;
const Header_Number = external_styled_components_default().span.withConfig({
    componentId: "sc-36a09fef-1"
})`
  font-family: "Eveleth";
  font-size: 60px;
  color: ${components_.colours.yellow};
  line-height: 0.5em;
`;
const TextContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-36a09fef-2"
})`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const TopText = external_styled_components_default().div.withConfig({
    componentId: "sc-36a09fef-3"
})`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
const Right = external_styled_components_default().div.withConfig({
    componentId: "sc-36a09fef-4"
})`
  display: flex;
  flex-direction: column;
  font-family: "Eveleth";
  height: 100%;
  gap: 2px;
  justify-content: space-between;
  align-items: center;
  text-align: left;
`;
const Header_White = external_styled_components_default().span.withConfig({
    componentId: "sc-36a09fef-5"
})`
  font-family: "Eveleth";
  color: white;
  width: 100%;
  font-size: 18px;
`;
const Percentage = external_styled_components_default().span.withConfig({
    componentId: "sc-36a09fef-6"
})`
  font-family: "Eveleth";
  color: ${components_.colours.yellow};
  font-size: 30px;
  line-height: 0.5em;
`;
const Arrow = external_styled_components_default().img.withConfig({
    componentId: "sc-36a09fef-7"
})`
  
`;
function media_Header_Header() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(media_Header_Container, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TextContainer, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TopText, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Header_Number, {
                            children: "700"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Right, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Percentage, {
                                    children: "%"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Arrow, {
                                    src: `${timeline_path}/arrow.svg`
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Header_White, {
                    children: "Sq ft increase"
                })
            ]
        })
    }));
}
/* harmony default export */ const made_company_media_Header = (external_styled_components_default()(media_Header_Header).withConfig({
    componentId: "sc-36a09fef-8"
})``);

;// CONCATENATED MODULE: ./components/about/timeline/impl/made-company/media/Footer.tsx






function Footer_Footer(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(media_Footer_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(System, {
                src: `${timeline_path}/IT-system.svg`,
                height: 100
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_Logos, {})
        ]
    }));
}
function Footer_Logos() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(LogosContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: (0,getClientLogo/* default */.ZP)("MADE")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: (0,getClientLogo/* default */.ZP)("one call furniture")
            })
        ]
    }));
}
const System = external_styled_components_default().img.withConfig({
    componentId: "sc-b70b0e51-0"
})`
  width: 60% !important;
  padding: 0px !important;
  margin-right: auto;
  ${(0,external_styled_breakpoints_.down)("lg")} {
    width: 50% !important;
  }
`;
const media_Footer_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-b70b0e51-1"
})`
  display: flex;
  justify-content: space-between;
  padding: 22px 20px;
  flex-direction: column;
  

  border-bottom-left-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};

  @media only screen and (min-width: 1300px) {
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  ${(0,external_styled_breakpoints_.down)("lg")} {
    gap: 10px;
    align-items: center;
    flex-direction: row;
  }
`;
const LogosContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-b70b0e51-2"
})`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  gap: 20px;
  img {
    padding: 0px !important;
  }
`;
/* harmony default export */ const made_company_media_Footer = (external_styled_components_default()(Footer_Footer).withConfig({
    componentId: "sc-b70b0e51-3"
})``);

;// CONCATENATED MODULE: ./components/about/timeline/impl/made-company/media/index.tsx





const media_MediaContainer = external_styled_components_default()(entry_SupportingMedia).withConfig({
    componentId: "sc-c4c4a2e-0"
})`
  flex-direction: column;
  @media only screen and (min-width: 1450px) {
    min-width: 350px !important;
  }
`;
function made_company_media_Media() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(media_MediaContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(made_company_media_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(made_company_media_Footer, {})
        ]
    }));
}
/* harmony default export */ const made_company_media = (made_company_media_Media);

;// CONCATENATED MODULE: ./components/about/timeline/impl/made-company/index.tsx




function MadeCompany(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(entry, {
        className: props.className,
        year: 2013,
        partnership: true,
        right: true,
        image: /*#__PURE__*/ jsx_runtime_.jsx(made_company_media, {}),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "We began working with ",
                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: "MADE.COM"
                    }),
                    " and ",
                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: "One Call"
                    }),
                    " to support their success in the UK furniture market."
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "We moved from our 18,000 sq.ft. facility into a 125,000 sq.ft. facility to meet the demands of our business growth."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Never standing still, and to meet the ever-growing demands of our customers and end-users, we upgraded our IT system again."
            })
        ]
    }));
}
/* harmony default export */ const made_company = (external_styled_components_default()(MadeCompany).withConfig({
    componentId: "sc-98d38162-0"
})``);

;// CONCATENATED MODULE: ./components/about/timeline/impl/Wayfair.tsx






function Wayfair(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(entry, {
        className: props.className,
        year: 2016,
        image: /*#__PURE__*/ jsx_runtime_.jsx(Wayfair_Image, {}),
        right: true,
        partnership: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Our fleet of delivery vans increased again to 125."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: "Wayfair"
                    }),
                    " and ",
                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: "Richer Sounds"
                    }),
                    " come on-board."
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "We launched our new warehouse in Scotland, employing local people, to improve our service to customers in The Highlands."
            })
        ]
    }));
}
const Van = external_styled_components_default().img.withConfig({
    componentId: "sc-d26c8989-0"
})``;
const Warehouse = external_styled_components_default().img.withConfig({
    componentId: "sc-d26c8989-1"
})``;
const WayfairLogo = external_styled_components_default().img.withConfig({
    componentId: "sc-d26c8989-2"
})`
  padding: 0px !important;
  width: 80% !important;
  ${(0,external_styled_breakpoints_.down)("md")} {
    width: 60% !important;
    margin-right: auto;
  }
  @media only screen and (min-width: 1450px) {
    width: 60% !important;
    margin-right: auto;
  }
`;
const RicherSoundsLogo = external_styled_components_default().img.withConfig({
    componentId: "sc-d26c8989-3"
})`
  padding: 0px !important;
  width: 80% !important;
  ${(0,external_styled_breakpoints_.down)("md")} {
    width: 60% !important;
    margin-left: auto;
  }
  @media only screen and (min-width: 1450px) {
    width: 60% !important;
    margin-left: auto;
  }
`;
const ImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-d26c8989-4"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ClientLogosContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-d26c8989-5"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
const Wayfair_Container = external_styled_components_default()(entry_SupportingMedia).withConfig({
    componentId: "sc-d26c8989-6"
})`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 25px;
  @media only screen and (min-width: 1450px) {
    min-width: 350px !important;
  }

  ${Van} {
    // align-self: flex-start;
    padding: 0px;
    width: 60% !important;
    ${(0,external_styled_breakpoints_.down)("md")} {
      margin-right: auto;
    }
    @media only screen and (min-width: 1450px) {
      margin-right: auto;
    }
  }
  ${Warehouse} {
    // align-self: flex-end;
    // position: relative;
    top: -20px;
    left: -30px;
    ${(0,external_styled_breakpoints_.down)("sm")} {
      height: 100px;
    }
    padding: 0px;
    width: 60% !important;
    ${(0,external_styled_breakpoints_.down)("md")} {
      margin-left: auto;
    }
    @media only screen and (min-width: 1450px) {
      margin-left: auto;
    }
  }
  ${ClientLogos} {
    align-self: center;
    max-width: 250px;
    // padding: 10px;
    ${(0,external_styled_breakpoints_.down)("sm")} {
      max-width: 120px;
    }
  }
`;
function Wayfair_Image() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wayfair_Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ImageContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Van, {
                        src: `${timeline_path}/125-vans.svg`,
                        height: 80
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Warehouse, {
                        src: `${timeline_path}/warehouse-scotland.svg`,
                        height: 120
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ClientLogosContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(WayfairLogo, {
                        src: (0,getClientLogo/* default */.ZP)("wayfair")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(RicherSoundsLogo, {
                        src: (0,getClientLogo/* default */.ZP)("richerSounds")
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const impl_Wayfair = (external_styled_components_default()(Wayfair).withConfig({
    componentId: "sc-d26c8989-7"
})``);

;// CONCATENATED MODULE: ./components/about/timeline/impl/Beginning.tsx




function Beginning(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(entry, {
        className: props.className,
        year: 2009,
        image: /*#__PURE__*/ jsx_runtime_.jsx(Beginning_Image, {}),
        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "We began with a clear vision — to provide the best two-man delivery service in the UK, based upon our great people skills and reliable service that is second-to-none."
        })
    }));
}
function Beginning_Image() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Beginning_ImageContainer, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(OriginalLogo, {
            src: `${timeline_path}/original-logo.png`
        })
    }));
}
const OriginalLogo = external_styled_components_default().img.withConfig({
    componentId: "sc-57026232-0"
})`
  object-fit: scale-down;
`;
const Beginning_ImageContainer = external_styled_components_default()(entry_SupportingMedia).withConfig({
    componentId: "sc-57026232-1"
})`
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 1450px) {
    min-width: 350px !important;
    height: 250px;
  }
`;
/* harmony default export */ const impl_Beginning = (external_styled_components_default()(Beginning).withConfig({
    componentId: "sc-57026232-2"
})``);

;// CONCATENATED MODULE: ./components/about/timeline/impl/tracking-technology/Image.tsx





function Image_Image() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Image_Container, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Fleet, {
            src: `${timeline_path}/tracking.svg`
        })
    }));
}
const Fleet = external_styled_components_default().img.withConfig({
    componentId: "sc-dc2d9966-0"
})`
  ${(0,external_styled_breakpoints_.down)("md")} {
    width: 250px;
  }
  padding: 0px !important;
`;
const Image_Container = external_styled_components_default()(entry_SupportingMedia).withConfig({
    componentId: "sc-dc2d9966-1"
})`
  @media only screen and (min-width: 1450px) {
    min-width: 350px !important;
  }
`;
/* harmony default export */ const tracking_technology_Image = (Image_Image);

;// CONCATENATED MODULE: ./components/about/timeline/impl/tracking-technology/index.tsx




function tracking_technology_Wayfair(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(entry, {
        className: props.className,
        year: 2017,
        image: /*#__PURE__*/ jsx_runtime_.jsx(tracking_technology_Image, {}),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "We increased our fleet of vans yet again, reflecting increasing demand for home-deliveries."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "We increased our warehouse space to 250,000 sq.ft. to reflect increasing demand for our services."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "We increased our fleet of HGVs to meet increasing demand from our retail clients to collect stock from them."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "We launched our own tracking technology. This makes it easier for customers to anticipate their deliveries and improves our in-full and first-time delivery performance."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "We set-up a BJS office in India to augment our UK operations."
            })
        ]
    }));
}
/* harmony default export */ const tracking_technology = (external_styled_components_default()(tracking_technology_Wayfair).withConfig({
    componentId: "sc-744abcbc-0"
})``);

;// CONCATENATED MODULE: ./components/about/timeline/impl/NewITSystem.tsx





function NewITSystem(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(entry, {
        year: 2010,
        right: true,
        className: props.className,
        image: /*#__PURE__*/ jsx_runtime_.jsx(NewITSystem_Media, {}),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "We grew fast, purchasing a fleet of 10 vans, enabling us to grow our business and win some great new clients."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "To handle the upturn in orders and improve our overall efficiency, we invested in a new IT system."
            })
        ]
    }));
}
const NewITSystem_MediaContainer = external_styled_components_default()(entry_SupportingMedia).withConfig({
    componentId: "sc-6ccc6e6b-0"
})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px 20px;
  justify-content: space-between;
  @media only screen and (min-width: 1450px) {
    min-width: 350px !important;
  }
  ${(0,external_styled_breakpoints_.up)("lg")} {
    max-height: 250px;
    // width: 20%;
  }
`;
const Vans = external_styled_components_default().img.withConfig({
    componentId: "sc-6ccc6e6b-1"
})`
  max-height: 90px;
  margin-right: auto;
  padding: 0px !important;
  width: 60% !important;
`;
const NewITSystem_System = external_styled_components_default().img.withConfig({
    componentId: "sc-6ccc6e6b-2"
})`
  max-height: 100px;
  margin-left: auto;
  padding: 0px !important;
  width: 60% !important;
`;
function NewITSystem_Media() {
    // <img src={`${path}/IT-system.svg`} />
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(NewITSystem_MediaContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Vans, {
                src: `${timeline_path}/10-vans.svg`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NewITSystem_System, {
                src: `${timeline_path}/tracking-technology.svg`
            })
        ]
    }));
}
/* harmony default export */ const impl_NewITSystem = (external_styled_components_default()(NewITSystem).withConfig({
    componentId: "sc-6ccc6e6b-3"
})``);

;// CONCATENATED MODULE: ./components/about/timeline/impl/RecalibratedBusiness.tsx




function RecalibratedBusiness(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(entry, {
        className: props.className,
        year: 2014,
        image: /*#__PURE__*/ jsx_runtime_.jsx(RecalibratedBusiness_Image, {}),
        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "As well as improving processes and systems to increase and improve our services, we recalibrated our business to ensure that our rapid growth would not affect our overall performance."
        })
    }));
}
function RecalibratedBusiness_Image() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(RecalibratedBusiness_ImageContainer, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: `${timeline_path}/warehouse.jpg`
        })
    }));
}
const RecalibratedBusiness_ImageContainer = external_styled_components_default()(entry_SupportingMedia).withConfig({
    componentId: "sc-5d21b5ac-0"
})`
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 1450px) {
    min-width: 350px !important;
  }
  background: url(${timeline_path}/warehouse.jpg) no-repeat;
  img {
    width: 100%;
    border-radius: 12px;
    padding: 0px !important;
  }
`;
/* harmony default export */ const impl_RecalibratedBusiness = (external_styled_components_default()(RecalibratedBusiness).withConfig({
    componentId: "sc-5d21b5ac-1"
})``);

// EXTERNAL MODULE: ./subsidiary-config/haulage-config.ts
var haulage_config = __webpack_require__(685);
// EXTERNAL MODULE: ./subsidiary-config/extra-config.ts
var extra_config = __webpack_require__(9437);
;// CONCATENATED MODULE: ./components/about/timeline/impl/new-subsidiaries/media/index.tsx







function new_subsidiaries_media_Media() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(new_subsidiaries_media_Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LogoContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                        src: haulage_config/* default.logoUrl */.Z.logoUrl
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                        src: extra_config/* default.logoUrl */.Z.logoUrl
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Wayfinder, {
                src: `${timeline_path}/wayfinder.svg`
            })
        ]
    }));
}
const Logo = external_styled_components_default().img.withConfig({
    componentId: "sc-11f6aff0-0"
})`
  min-height: 100px;
  width: 60% !important;
  padding: 0px !important;
  ${(0,external_styled_breakpoints_.down)("md")} {
    width: 30% !important;
  }
  @media only screen and (min-width: 1450px) {
    width: 30% !important;
  }
`;
const Wayfinder = external_styled_components_default().img.withConfig({
    componentId: "sc-11f6aff0-1"
})`
  height: 120px;
  padding: 0px !important;
`;
const LogoContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-11f6aff0-2"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(0,external_styled_breakpoints_.down)("md")} {
    flex-direction: row;
    justify-content: space-around;
  }
  @media only screen and (min-width: 1450px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
const new_subsidiaries_media_Container = external_styled_components_default()(entry_SupportingMedia).withConfig({
    componentId: "sc-11f6aff0-3"
})`
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px 20px 0px 20px;
  @media only screen and (min-width: 1450px) {
    min-width: 350px !important;
  }

  // border-bottom-left-radius: 0px;
  // border-bottom-right-radius: 0px;
`;
/* harmony default export */ const new_subsidiaries_media = (new_subsidiaries_media_Media);

;// CONCATENATED MODULE: ./components/about/timeline/impl/new-subsidiaries/index.tsx




function NewSubsidiaries(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(entry, {
        year: 2020,
        className: props.className,
        image: /*#__PURE__*/ jsx_runtime_.jsx(new_subsidiaries_media, {}),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "An eventful year for all sorts of reasons, but one of",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: "exciting growth"
                    }),
                    " for BJS as we expanded our capabilities and launched two new service-led brands."
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: "BJS Haulage"
                    }),
                    " offers a broad range of services from tailor-made to economy and everything in-between, so with our family of delivery services — you’ll be safe in our hands."
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: "BJS Extra"
                    }),
                    " delivers an extra helping hand in home delivery for growing businesses – including extra reach, extra care, extra choice... and extra smiles."
                ]
            })
        ]
    }));
}
/* harmony default export */ const new_subsidiaries = (external_styled_components_default()(NewSubsidiaries).withConfig({
    componentId: "sc-17fcef0e-0"
})``);

;// CONCATENATED MODULE: ./components/about/timeline/impl/winner-year/index.tsx





function WinnerYear(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(entry, {
        className: props.className,
        year: 2021,
        image: /*#__PURE__*/ jsx_runtime_.jsx(winner_year_Image, {}),
        right: true,
        partnership: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Adding another string to our logistics bow – we built Construct IT from the ground up to provide a safe pair of hands for industry leading construction material manufacturers."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "A water-shed moment as Wienerberger choose Construct IT as a key delivery partner, based upon our stringent approach to safety and innovative IT sytems."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Construct IT continues to make waves in the construction haulage industry as another world-renowned brand in Tarmac also chooses to partner with us."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Rounding off a challenging but amazing year, both BJS Haulage and Construct IT are finalists in the MTA Livery of the Year Awards – which we’re happy to say was won by Construct IT!"
            })
        ]
    }));
}
const winner_year_Van = external_styled_components_default().img.withConfig({
    componentId: "sc-8a8276d7-0"
})``;
const winner_year_Warehouse = external_styled_components_default().img.withConfig({
    componentId: "sc-8a8276d7-1"
})``;
const TarmacLogo = external_styled_components_default().img.withConfig({
    componentId: "sc-8a8276d7-2"
})`
  ${(0,external_styled_breakpoints_.down)("md")} {
    margin-left: auto;
    width: 60% !important;
  }
  @media only screen and (min-width: 1450px) {
    margin-left: auto;
    width: 60% !important;
  }
`;
const WienerbergerLogo = external_styled_components_default().img.withConfig({
    componentId: "sc-8a8276d7-3"
})`
  ${(0,external_styled_breakpoints_.down)("md")} {
    width: 80% !important;
  }
  @media only screen and (min-width: 1450px) {
    width: 80% !important;
  }
`;
const ConstructITLogo = external_styled_components_default().img.withConfig({
    componentId: "sc-8a8276d7-4"
})`
  ${(0,external_styled_breakpoints_.down)("md")} {
    margin-right: auto;
    width: 60% !important;
  }
  @media only screen and (min-width: 1450px) {
    margin-right: auto;
    width: 60% !important;
  }
`;
const Award = external_styled_components_default().img.withConfig({
    componentId: "sc-8a8276d7-5"
})`
  @media only screen and (min-width: 1450px) {
    width: 80% !important;
  }
`;
const winner_year_LogosContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-8a8276d7-6"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const WienerbergerContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-8a8276d7-7"
})`
  display: flex;
`;
const AwardContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-8a8276d7-8"
})`
  display: flex;
  justify-content: center;
`;
const winner_year_Container = external_styled_components_default()(entry_SupportingMedia).withConfig({
    componentId: "sc-8a8276d7-9"
})`
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  @media only screen and (min-width: 1450px) {
    min-width: 350px !important;
  }

  img {
    padding: 0px !important;
    object-fit: scale-down;
  }

  ${winner_year_Van} {
    align-self: flex-start;
  }
  ${winner_year_Warehouse} {
    align-self: flex-end;
    position: relative;
    top: -20px;
    left: -30px;
  }
  ${ClientLogos} {
    align-self: center;
    max-width: 250px;
  }
`;
function winner_year_Image() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(winner_year_Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(winner_year_LogosContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ConstructITLogo, {
                        src: `${timeline_path}/ConstructIT_Logo.svg`,
                        height: 80
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TarmacLogo, {
                        src: `${timeline_path}/Logos_Tarmac.png`
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(WienerbergerContainer, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(WienerbergerLogo, {
                    src: `${timeline_path}/Logos_Wienerberger.png`,
                    height: 120
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(AwardContainer, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Award, {
                    src: `${timeline_path}/LiveryOfTheYearAward.png`
                })
            })
        ]
    }));
}
/* harmony default export */ const winner_year = (external_styled_components_default()(WinnerYear).withConfig({
    componentId: "sc-8a8276d7-10"
})``);

;// CONCATENATED MODULE: ./components/about/timeline/impl/index.tsx











;// CONCATENATED MODULE: ./components/about/timeline/index.tsx





function Timeline() {
    const { width  } = (0,useWindowDimensions/* default */.Z)();
    if (width >= 1300) {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(timeline_Container, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Left, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(impl_Beginning, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(cots_wold, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(impl_RecalibratedBusiness, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(tracking_technology, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(new_subsidiaries, {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Bar, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(timeline_Right, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(impl_NewITSystem, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(made_company, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(impl_Wayfair, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(julian_bowen, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(winner_year, {})
                    ]
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(timeline_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(impl_Beginning, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(impl_NewITSystem, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(cots_wold, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(made_company, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(impl_RecalibratedBusiness, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(impl_Wayfair, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(tracking_technology, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(julian_bowen, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(new_subsidiaries, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(winner_year, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Bar, {})
        ]
    }));
}
const timeline_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-d0ae1f33-0"
})`
  display: flex;
  flex-direction: row;
  position: relative;
  ${(0,external_styled_breakpoints_.down)("md")} {
    flex-direction: column;
  }
  @media only screen and (max-width: 1300px) {
    flex-direction: column;
  }
`;
const Left = external_styled_components_default().div.withConfig({
    componentId: "sc-d0ae1f33-1"
})`
  flex: 1;
  flex-direction: column;
  gap: 60px;
  display: flex;
  margin-right: -13px;
`;
const timeline_Right = external_styled_components_default().div.withConfig({
    componentId: "sc-d0ae1f33-2"
})`
  flex: 1;
  flex-direction: column;
  gap: 60px;
  display: flex;
  margin-top: 200px;
  margin-left: -13px;
`;
const Bar = external_styled_components_default().div.withConfig({
    componentId: "sc-d0ae1f33-3"
})`
  content: "";
  width: 6px;
  background-color: #c7c4c0;
  ${(0,external_styled_breakpoints_.down)("md")} {
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 7px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 7px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1300px) {
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 7px;
  }
`;
/* harmony default export */ const timeline = (Timeline);

;// CONCATENATED MODULE: ./components/about/timeline/Introduction.tsx



function Introduction() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Introduction_Container, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Intro, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "BJS is a family run distribution and logistics business based in the Midlands. We provide the very best customer service at every stage so that your products, reputation, clients and peace of mind really are safe in our hands."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "Whether we are loading orders onto vans to deliver to homes, routing trucks to distribution centres or moving bricks to building sites - we pay attention to the small details however large the load."
                })
            ]
        })
    }));
}
const Intro = external_styled_components_default().span.withConfig({
    componentId: "sc-78473083-0"
})`
  text-align: center;

  ${(0,external_styled_breakpoints_.up)("lg")} {
    width: 50%;
  }
`;
const Introduction_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-78473083-1"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
`;
/* harmony default export */ const timeline_Introduction = (Introduction);

;// CONCATENATED MODULE: ./pages/about/our-story/TimelineSection.tsx




function TimelineSection() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(TimelineSection_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(timeline_Introduction, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(timeline, {})
        ]
    }));
}
const TimelineSection_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-239eb69b-0"
})`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
/* harmony default export */ const our_story_TimelineSection = (TimelineSection);


/***/ })

};
;