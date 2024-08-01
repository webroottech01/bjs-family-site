"use strict";
(() => {
var exports = {};
exports.id = 6134;
exports.ids = [6134];
exports.modules = {

/***/ 9830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_news),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./subsidiary-config/construct-it-config.ts
var construct_it_config = __webpack_require__(7729);
// EXTERNAL MODULE: ./components/network-statistics/index.tsx + 1 modules
var network_statistics = __webpack_require__(279);
// EXTERNAL MODULE: ./components/subsidiary-showcase/grid/selected-subsidiary-store.ts
var selected_subsidiary_store = __webpack_require__(1338);
// EXTERNAL MODULE: ./components/util/useIsTabletOrSmaller.tsx
var useIsTabletOrSmaller = __webpack_require__(3176);
// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__(6170);
// EXTERNAL MODULE: ./pages/api/store/newsStore.ts
var newsStore = __webpack_require__(918);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/pro-solid-svg-icons"
var pro_solid_svg_icons_ = __webpack_require__(1638);
;// CONCATENATED MODULE: ./components/news/common/ArticleType.tsx







function ArticleType(props) {
    const isTabletOrMobile = (0,useIsTabletOrSmaller/* default */.ZP)();
    const { news  } = props;
    if (news === undefined) {
        return null;
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                icon: news.article_type[0].type === 'video' ? pro_solid_svg_icons_.faVideo : pro_solid_svg_icons_.faNewspaper
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(IconLabel, {
                children: news.article_type[0].type
            })
        ]
    }));
}
const Icon = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-b4b8380d-0"
})`
  height: 16px;
  width: 16px;
  color: white;
`;
const IconLabel = external_styled_components_default().div.withConfig({
    componentId: "sc-b4b8380d-1"
})`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  margin-left: 10px;
  text-transform: capitalize;
`;
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-b4b8380d-2"
})`
  display: flex;
  align-items: center;
  background: #6396e5 0% 0% no-repeat padding-box;
  border-radius: 6px;
  width: 110px;
  height: 46px;
  margin: 40px;
  justify-content: center;
  ${(0,external_styled_breakpoints_.only)('md')} {
    margin: 30px;
  }
  ${(0,external_styled_breakpoints_.down)('sm')} {
    margin: 20px;
  }
`;
/* harmony default export */ const common_ArticleType = (ArticleType);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./components/news/utils/index.ts
var utils = __webpack_require__(9855);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
;// CONCATENATED MODULE: ./components/news/common/ReadArticle.tsx








function ReadArticle(props) {
    const goToArticle = ()=>router_default().push(`/news/${props.news.slug}`)
    ;
    const textMotion = {
        hover: {
            width: "90px"
        }
    };
    const arrowMotion = {
        rest: {
            opacity: 0.5
        },
        hover: {
            opacity: 1
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ReadArticle_Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Timer, {
                onClick: goToArticle,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ReadArticle_Icon, {
                        icon: pro_solid_svg_icons_.faStopwatch
                    }),
                    (0,utils/* timeWatchOrRead */.SY)(props.news.article_type[0])
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ReadButtonWrapper, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ReadButton, {
                        onClick: goToArticle,
                        variants: textMotion,
                        children: "Read Article"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ArrowIconWrapper, {
                        variants: arrowMotion,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Arrow, {
                            icon: pro_solid_svg_icons_.faLongArrowRight
                        })
                    })
                ]
            })
        ]
    }));
}
const ReadButtonWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-cb56ac07-0"
})`
  display: flex;
  align-items: center;
  border-bottom: 3px solid #feba30;
  white-space: nowrap;
`;
const ArrowIconWrapper = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-cb56ac07-1"
})``;
const ReadArticle_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-cb56ac07-2"
})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ReadArticle_Icon = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-cb56ac07-3"
})`
  height: 16px;
  width: 10px;
`;
const Arrow = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-cb56ac07-4"
})`
  height: 16px;
  width: 10px;
  margin-left: 40px;
  color: "#3A3630";
  @media only screen and (max-width: 1300px) and (min-width: 991px) {
    margin-left: 10px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    margin-left: 20px;
  }
`;
const ReadButton = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-cb56ac07-5"
})`
  color: #3a3630;
  line-height: 2.5;
  font-size: 14px;
  font-weight: bold;
  transition: 0.2s all ease-out;
  cursor: pointer;
  @media only screen and (max-width: 1300px) and (min-width: 991px) {
    font-size: 12px;
  }
`;
const Timer = external_styled_components_default().div.withConfig({
    componentId: "sc-cb56ac07-6"
})`
  font-size: 14px;
  letter-spacing: 0px;
  color: #888075;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  @media only screen and (max-width: 1300px) and (min-width: 991px) {
    font-size: 11px;
  }
`;
/* harmony default export */ const common_ReadArticle = (ReadArticle);

;// CONCATENATED MODULE: ./components/news/common/TimerElement.tsx




function TimerElement(props) {
    const { news  } = props;
    if (news === undefined) {
        return null;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(TimerElement_Container, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PostedTime, {
            children: [
                "Posted: ",
                (0,utils/* dateFormat */.vc)(news.date),
                " "
            ]
        })
    }));
}
const TimerElement_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-dca230d6-0"
})`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TimerElement_Icon = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-dca230d6-1"
})`
  height: 16px;
  width: 10px;
  margin-left: 40px;
`;
const PostedTime = external_styled_components_default().div.withConfig({
    componentId: "sc-dca230d6-2"
})`
  letter-spacing: 0px;
  color: rgba(58, 54, 48, 0.5);
  font-weight: normal;
  font-size: 14px;
`;
const TimerElement_Timer = external_styled_components_default().div.withConfig({
    componentId: "sc-dca230d6-3"
})`
  font-size: 14px;
  letter-spacing: 0px;
  color: #888075;
  display: flex;
  align-items: center;
  gap: 8px;
`;
/* harmony default export */ const common_TimerElement = (TimerElement);

;// CONCATENATED MODULE: ./components/news/news-contents/FeaturedNews.tsx











function FeaturedNews() {
    var ref;
    const isMobileOrTablet = (0,useIsTabletOrSmaller/* default */.ZP)();
    const newsList = (0,newsStore/* useNewsContent */.Ng)();
    if (newsList === null) {
        return null;
    }
    const featuredNewsContent = newsList[0];
    const navigateTo = ()=>router_default().push(`/news/${featuredNewsContent.slug}`)
    ;
    const imageMotion = {
        hover: {
            scale: 1.05
        }
    };
    const postDateMotion = {
        hover: {
            opacity: 0.5
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(FeaturedNews_Container, {
        onClick: navigateTo,
        layout: true,
        initial: "rest",
        whileHover: "hover",
        animate: "rest",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(FeatureCard, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(FeatureCardImage, {
                    src: ((ref = featuredNewsContent.header_image) === null || ref === void 0 ? void 0 : ref.url) || "",
                    variants: imageMotion
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ArticleTypeWrapper, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(common_ArticleType, {
                    news: featuredNewsContent
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FeatureContent, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                                children: featuredNewsContent.title
                            }),
                            !isMobileOrTablet && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PostedDate, {
                                variants: postDateMotion,
                                children: [
                                    "Posted: ",
                                    (0,utils/* dateFormat */.vc)(featuredNewsContent.created_at)
                                ]
                            })
                        ]
                    }),
                    isMobileOrTablet && /*#__PURE__*/ jsx_runtime_.jsx(common_TimerElement, {
                        news: featuredNewsContent
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NewsDetails, {
                        children: featuredNewsContent.excerpt
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(common_ReadArticle, {
                        news: featuredNewsContent
                    })
                ]
            })
        ]
    }));
}
const FeatureCardImage = external_styled_components_default()(external_framer_motion_.motion.img).withConfig({
    componentId: "sc-804ce37f-0"
})`
  transition: .5s all ease-in-out;
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: relative;
`;
const ArticleTypeWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-804ce37f-1"
})`
  position: absolute;
  top: 210px;
  ${(0,external_styled_breakpoints_.up)("md")} { top: 445px }
  ${(0,external_styled_breakpoints_.up)("xl")} { top: 475px }
`;
const FeaturedNews_Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-804ce37f-2"
})`
  display: flex;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px #0000000d;
  flex: 1;
  flex-direction: column;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  ${(0,external_styled_breakpoints_.only)("md")} {
    border-radius: 0px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    border-radius: 0px;
  }
`;
const FeatureCard = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-804ce37f-3"
})`
  width: 100%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  height: 600px;
  min-width: 500px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  ${(0,external_styled_breakpoints_.only)("md")} {
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    min-width: unset;
    height: 550px;
  }

  ${(0,external_styled_breakpoints_.down)("sm")} {
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    min-width: unset;
    height: 307px;
  }
`;
const FeatureContent = external_styled_components_default().div.withConfig({
    componentId: "sc-804ce37f-4"
})`
  padding: 40px;
  flex: 1;
  @media only screen and (max-width: 1300px) and (min-width: 991px) {
    padding: 20px;
  }
`;
const Row = external_styled_components_default().div.withConfig({
    componentId: "sc-804ce37f-5"
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;
const Title = external_styled_components_default().div.withConfig({
    componentId: "sc-804ce37f-6"
})`
  text-align: left;
  font-family: "Eveleth";
  letter-spacing: 0px;
  font-weight: 950;
  color: #3a3630;
  text-transform: uppercase;
  font-size: 17px;
  @media only screen and (max-width: 1300px) and (min-width: 991px) {
    font-size: 15px;
  }
  ${(0,external_styled_breakpoints_.down)("md")} {
    font-size: 18px;
    margin-bottom: 40px;
  }
`;
const PostedDate = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-804ce37f-7"
})`
  text-align: right;
  font-size: 16px;
  color: #3a3630;
  opacity: 0.5;
  flex: 1;
  white-space: nowrap;
  @media only screen and (max-width: 1300px) and (min-width: 991px) {
    font-size: 14px;
  }
  // @media only screen and (min-width: 1600px) {
  //   opacity: 0;
  // }
  // @media only screen and (min-width: 1600px) {
  //   opacity: 0.5 !important;
  // }
`;
const NewsDetails = external_styled_components_default().div.withConfig({
    componentId: "sc-804ce37f-8"
})`
  text-align: left;
  font-size: 15px;
  letter-spacing: 0px;
  color: #3a3630;
  margin-top: 22px;
  margin-bottom: 40px;
`;
/* harmony default export */ const news_contents_FeaturedNews = (FeaturedNews);

// EXTERNAL MODULE: external "@bjsdistribution/components"
var components_ = __webpack_require__(2699);
;// CONCATENATED MODULE: ./components/news/common/ArticleListItem.tsx













function ArticleListItem(props) {
    var ref;
    const isTabletOrMobile = (0,useIsTabletOrSmaller/* default */.ZP)();
    const goToArticle = ()=>router_default().push(`/news/${props.news.slug}`)
    ;
    const imageMotion = {
        hover: {
            scale: 1.05
        }
    };
    var ref1;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ArticleListItem_Container, {
        onClick: goToArticle,
        layout: true,
        initial: "rest",
        whileHover: "hover",
        animate: "rest",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ArticleImageContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ArticleImage, {
                        src: (ref1 = (ref = props.news.header_image) === null || ref === void 0 ? void 0 : ref.url) !== null && ref1 !== void 0 ? ref1 : "",
                        variants: imageMotion
                    }),
                    isTabletOrMobile && /*#__PURE__*/ jsx_runtime_.jsx(ArticleListItem_ArticleTypeWrapper, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(common_ArticleType, {
                            news: props.news
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ArticleContent, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ArticleListItem_Title, {
                        href: `/news/${props.news.slug}`,
                        children: props.news.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ArticleListItem_Row, {
                        children: [
                            !isTabletOrMobile && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentType, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ArticleListItem_Icon, {
                                        icon: props.news.article_type[0].type === "article" ? pro_solid_svg_icons_.faNewspaper : pro_solid_svg_icons_.faVideo
                                    }),
                                    props.news.article_type[0].type
                                ]
                            }),
                            isTabletOrMobile ? /*#__PURE__*/ jsx_runtime_.jsx(common_TimerElement, {
                                news: props.news
                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ArticleListItem_PostedTime, {
                                children: [
                                    "Posted: ",
                                    (0,utils/* dateFormat */.vc)(props.news.date),
                                    " "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(common_ReadArticle, {
                        news: props.news
                    })
                ]
            })
        ]
    }));
}
const ArticleListItem_ArticleTypeWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-2302f61-0"
})`
  position: absolute;
`;
const ArticleImage = external_styled_components_default()(external_framer_motion_.motion.img).withConfig({
    componentId: "sc-2302f61-1"
})`
  transition: .5s all ease-in-out;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
const ArticleListItem_Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-2302f61-2"
})`
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  background: #fff;
  cursor: pointer;
  ${(0,external_styled_breakpoints_.down)("md")} {
    flex-direction: column;
    width: 50%;
    border-radius: 0px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    flex-direction: column;
    width: 100%;
    border-radius: 0px;
  }
`;
const ArticleListItem_Icon = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-2302f61-3"
})`
  height: 16px;
  width: 16px;
  margin-right: 10px;
  @media only screen and (max-width: 1300px) and (min-width: 991px) {
    height: 14px;
    width: 14px;
    margin-right: 10px;
  }
`;
const ArticleImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-2302f61-4"
})`
  position: relative;
  overflow: hidden;
  height: 211px;
  max-width: 250px;
  border-radius: 0px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex: 1;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  ${(0,external_styled_breakpoints_.down)("md")} {
    width: auto;
    height: 292px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    flex: unset;
    max-width: unset;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    width: auto;
    height: 326px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    max-width: unset;
  }
`;
const ArticleContent = external_styled_components_default().div.withConfig({
    componentId: "sc-2302f61-5"
})`
  display: flex;
  padding: 30px;
  flex-direction: column;
  flex: 1;
  @media only screen and (max-width: 1300px) and (min-width: 991px) {
    padding: 15px;
    gap: 10px;
  }
  ${(0,external_styled_breakpoints_.down)("md")} {
    gap: 20px;
  }
`;
const ArticleListItem_Title = external_styled_components_default().a.withConfig({
    componentId: "sc-2302f61-6"
})`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0px;
  color: ${components_.colours.black};
  text-decoration: none;
  :hover {
    color: ${components_.colours.yellow};
  }
  @media only screen and (max-width: 1300px) and (min-width: 991px) {
    font-size: 14px;
  }
`;
const ArticleListItem_Row = external_styled_components_default().div.withConfig({
    componentId: "sc-2302f61-7"
})`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  align-items: center;
  gap: 20px;
  @media only screen and (max-width: 1300px) and (min-width: 991px) {
    gap: 10px;
  }
`;
const ContentType = external_styled_components_default().div.withConfig({
    componentId: "sc-2302f61-8"
})`
  color: #8d8b88;
  font-weight: bold;
  align-items: center;
  display: flex;
  text-transform: capitalize;
  @media only screen and (max-width: 1300px) and (min-width: 991px) {
    font-size: 13px;
  }
`;
const ArticleListItem_PostedTime = external_styled_components_default().div.withConfig({
    componentId: "sc-2302f61-9"
})`
  letter-spacing: 0px;
  color: rgba(58, 54, 48, 0.5);
  font-weight: normal;
  font-size: 14px;
  @media only screen and (max-width: 1300px) and (min-width: 991px) {
    font-size: 12px;
  }
  ${(0,external_styled_breakpoints_.down)("md")} {
    font-size: 16px;
  }
`;
/* harmony default export */ const common_ArticleListItem = (ArticleListItem);

;// CONCATENATED MODULE: ./components/news/news-contents/NewsList.tsx





function NewsList() {
    const newsList = (0,newsStore/* useNewsContent */.Ng)();
    if (newsList === null) {
        return null;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(NewsList_Container, {
        children: newsList.map((news, index)=>{
            if (index >= 5 || index === 0) {
                return null;
            }
            return(/*#__PURE__*/ jsx_runtime_.jsx(common_ArticleListItem, {
                news: news
            }, news.id));
        })
    }));
}
const NewsList_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-adafd81-0"
})`
  gap: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  ${(0,external_styled_breakpoints_.down)("md")} {
    gap: 0px;
    flex-direction: row;
    flex-wrap: wrap;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    gap: 0px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
/* harmony default export */ const news_contents_NewsList = (NewsList);

;// CONCATENATED MODULE: ./components/news/news-contents/NewsContent.tsx





function NewsContent() {
    const isTabletOrMobile = (0,useIsTabletOrSmaller/* default */.ZP)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(NewsContent_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(news_contents_FeaturedNews, {}),
            !isTabletOrMobile && /*#__PURE__*/ jsx_runtime_.jsx(news_contents_NewsList, {})
        ]
    }));
}
const NewsContent_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-d1547e5d-0"
})`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;
/* harmony default export */ const news_contents_NewsContent = (NewsContent);

;// CONCATENATED MODULE: ./components/news/news-contents/ViewAllNewsButton.tsx




function ViewAllNewsButton(props) {
    const moveToAllNews = ()=>router_default().push(`/news/all`)
    ;
    return(/*#__PURE__*/ jsx_runtime_.jsx(ViewButton, {
        className: props.className,
        colors: "primary",
        shape: "rounded",
        onClick: moveToAllNews,
        id: "news-contents-go-to-view-all-news-stories",
        wide: true,
        children: "View all news stories"
    }));
}
const ViewButton = external_styled_components_default()(components_.Button.PlainButton).withConfig({
    componentId: "sc-e797b33e-0"
})`
  font-family: "Eveleth";
  font-size: 16px;
  background: transparent;
  color: ${components_.colours.black};
  border: 1px solid ${components_.colours.black};
  font-weight: 900;
`;
/* harmony default export */ const news_contents_ViewAllNewsButton = (external_styled_components_default()(ViewAllNewsButton).withConfig({
    componentId: "sc-e797b33e-1"
})``);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/news/news-contents/ViewAllNewsIndicator.tsx





const TOTAL_WIDTH = 258;
const Indicator = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-6254565f-0"
})`
  height: 100%;
  background: #5181CC;
  border-radius: 66px;
`;
const ViewAllNewsIndicator_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-6254565f-1"
})`
  border-radius: 66px;
  width: ${TOTAL_WIDTH}px;
  height: 16px;
  background: rgba(48, 144, 254, 0.1);
  display: flex;
`;
function ViewAllNewsIndicator({ className  }) {
    const newsList = (0,newsStore/* useNewsContent */.Ng)();
    const percentage = (0,external_react_.useMemo)(()=>{
        if (!newsList) {
            return 0;
        }
        const length = newsList.length;
        return 5 / length * 100;
    }, [
        newsList
    ]);
    if (!newsList) {
        return null;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(ViewAllNewsIndicator_Container, {
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Indicator, {
            animate: {
                width: `${percentage}%`
            },
            transition: {
                duration: 0.8
            }
        })
    }));
}
/* harmony default export */ const news_contents_ViewAllNewsIndicator = (external_styled_components_default()(ViewAllNewsIndicator).withConfig({
    componentId: "sc-6254565f-2"
})``);

;// CONCATENATED MODULE: ./components/news/news-contents/ViewAllNews.tsx






function ViewAllNews() {
    const newsList = (0,newsStore/* useNewsContent */.Ng)();
    if (!newsList) {
        return null;
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ViewAllNews_Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Label, {
                children: [
                    "You have viewed 5 out of ",
                    newsList.length,
                    " news stories"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(news_contents_ViewAllNewsIndicator, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(news_contents_ViewAllNewsButton, {})
        ]
    }));
}
const Label = external_styled_components_default().div.withConfig({
    componentId: "sc-d5af241d-0"
})`
  font-size: 16px;
  color: ${components_.colours.black};
`;
const ViewAllNews_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-d5af241d-1"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0px;

  ${Label} {
    margin-bottom: 30px;
  }

  ${news_contents_ViewAllNewsIndicator} {
    margin-bottom: 50px;
  }
`;
/* harmony default export */ const news_contents_ViewAllNews = (ViewAllNews);

;// CONCATENATED MODULE: ./components/news/news-contents/index.tsx







function NewsContents() {
    const isTabletOrMobile = (0,useIsTabletOrSmaller/* default */.ZP)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(news_contents_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(news_contents_NewsContent, {}),
            isTabletOrMobile && /*#__PURE__*/ jsx_runtime_.jsx(news_contents_NewsList, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(news_contents_ViewAllNews, {})
        ]
    }));
}
const news_contents_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-94232a21-0"
})`
    background: transparent linear-gradient(360deg, #F5F0EA 0%, #E2E0DD 100%) 0% 0% no-repeat padding-box;
    padding: 40px;
    ${(0,external_styled_breakpoints_.down)("md")} {
      padding: 0px;
    }
  
    ${(0,external_styled_breakpoints_.down)("sm")} {
      padding: 0px;
    }
`;
/* harmony default export */ const news_contents = (NewsContents);

// EXTERNAL MODULE: ./pages/api/handler/Api.ts
var Api = __webpack_require__(8503);
;// CONCATENATED MODULE: ./components/util/MotionSlider/Slide.tsx




function Slide(props) {
    const { slide  } = props;
    if (!slide) {
        return null;
    }
    console.log(slide);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Slide_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Brand, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Avatar, {
                    height: 97,
                    width: 97,
                    src: slide.author.url
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SlideContent, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Slide_Title, {
                        children: slide.excerpt
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_.Button, {
                        id: "util-go-to-full-story",
                        wide: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: slide.link,
                            target: "_blank",
                            referrerPolicy: "no-referrer",
                            children: "Full story"
                        })
                    })
                ]
            })
        ]
    }));
}
const Slide_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-4f58ba81-0"
})`
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  background: #fff;
  max-width: 480px;
  min-width: 480px;
  @media only screen and (min-width: 1500px) and (max-width: 1700px) {
    max-width: 400px;
    min-width: unset;
  }
  @media only screen and (min-width: 1300px) and (max-width: 1500px) {
    max-width: 350px;
    min-width: unset;
  }
  @media only screen and (max-width: 1300px) {
    flex: 1;
    max-width: 580px;
    min-width: unset;
  }
  ${(0,external_styled_breakpoints_.down)("md")} {
    margin-right: 0px;
    max-width: 480px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    flex-direction: column;
  }
  ${components_.Button.PlainButton} {
    max-width: 190px;
    min-width: 190px;
    z-index: 999;
    @media only screen and (min-width: 1300px) and (max-width: 1500px) {
      max-width: 190px;
      min-width: 190px;
      font-size: 14px;
    }
    ${(0,external_styled_breakpoints_.down)("sm")} {
      margin-bottom: 
      40px;
    }
  }
  animation-duration: 0.5s;
  animation-name: animate-fade;
  animation-delay: 0.2s;
  animation-fill-mode: backwards;
  @keyframes animate-fade {
    0% { opacity: 0.7; }
    100% { opacity: 1; }
  }
`;
const Brand = external_styled_components_default().div.withConfig({
    componentId: "sc-4f58ba81-1"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-right: 1px solid rgba(58, 54, 48, 0.2);
  margin: 30px 0px;
  gap: 24px;
  ${(0,external_styled_breakpoints_.down)("sm")} {
    margin: 36px 20%;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(58, 54, 48, 0.2);
    border-right: none;
  }
  // @media only screen and (min-width: 1024px) and (max-width: 1350px) {
  //   margin: 15px 0px;
  // }
`;
const SlideContent = external_styled_components_default().div.withConfig({
    componentId: "sc-4f58ba81-2"
})`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0px 40px;
  @media only screen and (min-width: 1300px) and (max-width: 1500px) {
    padding: 0px 20px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    justify-content: center;
    padding: 0px 40px;
    align-items: center;
    gap: 30px;
    text-align: center;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;
const Slide_Title = external_styled_components_default().div.withConfig({
    componentId: "sc-4f58ba81-3"
})`
  font-size: 15px;
  max-width: 170px;
  min-height: 45px;
  color: ${components_.colours.black};
  ${(0,external_styled_breakpoints_.down)("md")} {
    max-width: unset;
  }
`;
const FullStory = external_styled_components_default().button.withConfig({
    componentId: "sc-4f58ba81-4"
})`
  background: ${components_.colours.black};
  font-size: 16px;
  font-family: "Eveleth";
  font-weight: 950;
  color: white;
  text-transform: uppercase;
  height: 56px;
  border-radius: 30px;
  @media only screen and (min-width: 1024px) and (max-width: 1350px) {
    font-size: 13px;
    font-weight: 600;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    margin-bottom: 20px;
    width: 100%;
  }
`;
const Avatar = external_styled_components_default().img.withConfig({
    componentId: "sc-4f58ba81-5"
})`
  margin: 8px 40px;
  border-radius: 50%;
  object-fit: cover;
  @media only screen and (min-width: 1500px) and (max-width: 1700px) {
    margin: 8px 20px;
  }
  @media only screen and (min-width: 1300px) and (max-width: 1500px) {
    width: 70px;
    height: 70px;
    margin: 8px 20px;
  }
`;
const BrandImg = external_styled_components_default().img.withConfig({
    componentId: "sc-4f58ba81-6"
})`
  width: auto;
  object-fit: contain;
`;
/* harmony default export */ const MotionSlider_Slide = (Slide);

// EXTERNAL MODULE: ./components/util/useIsMobile.tsx
var useIsMobile = __webpack_require__(6658);
// EXTERNAL MODULE: ./components/util/useWindowDimensions.ts
var useWindowDimensions = __webpack_require__(6066);
;// CONCATENATED MODULE: ./components/news/news-media/index.tsx











function NewsMedia() {
    const { 0: media1 , 1: setMedia  } = (0,external_react_.useState)([]);
    const { 0: slideIndex , 1: setSlideIndex  } = (0,external_react_.useState)(0);
    const { width: width1  } = (0,useWindowDimensions/* default */.Z)();
    const isTabOnly = (0,useIsTabletOrSmaller/* useIsOnlyTablet */.Ef)();
    const isMobOnly = (0,useIsMobile/* default */.Z)();
    (0,external_react_.useEffect)(()=>{
        const getMediaContent = async ()=>{
            const mediaContent = await (0,Api/* getMedia */.om)();
            setMedia(mediaContent);
        };
        getMediaContent();
    }, []);
    const onLeftClick = ()=>{
        if (slideIndex > 0) {
            setSlideIndex(slideIndex - 1);
        } else {
            setSlideIndex(media1.length - 3);
        }
    };
    const onRightClick = ()=>{
        if (width1 > 1300) {
            if (slideIndex < media1.length - 3) {
                setSlideIndex(slideIndex + 1);
            } else {
                setSlideIndex(0);
            }
        } else {
            if (slideIndex < media1.length - 1) {
                setSlideIndex(slideIndex + 1);
            } else {
                setSlideIndex(0);
            }
        }
    };
    const MentionInMediaNav = (width, media)=>{
        if (width > 1300 && !isMobOnly) {
            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(MotionSlider_Slide, {
                        slide: media[slideIndex]
                    }, media[slideIndex].id),
                    /*#__PURE__*/ jsx_runtime_.jsx(MotionSlider_Slide, {
                        slide: media[slideIndex + 1]
                    }, media[slideIndex + 1].id),
                    /*#__PURE__*/ jsx_runtime_.jsx(MotionSlider_Slide, {
                        slide: media[slideIndex + 2]
                    }, media[slideIndex + 2].id)
                ]
            }));
        } else if (width < 1300 && !isMobOnly && !isTabOnly) {
            return(/*#__PURE__*/ jsx_runtime_.jsx(MotionSlider_Slide, {
                slide: media[slideIndex]
            }, media[slideIndex].id));
        } else if (isTabOnly && !isMobOnly) {
            return(/*#__PURE__*/ jsx_runtime_.jsx(MotionSlider_Slide, {
                slide: media[slideIndex]
            }, media[slideIndex].id));
        } else if (isMobOnly && !isTabOnly) {
            return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: media.map((slide, index)=>{
                    return(/*#__PURE__*/ jsx_runtime_.jsx(MotionSlider_Slide, {
                        slide: slide
                    }, slide.id));
                })
            }));
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(news_media_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Headline, {
                children: "mentioned in the media"
            }),
            media1.length && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MediaContainer, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ArrowContainer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ArrowButton, {
                                onClick: onLeftClick,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(news_media_Icon, {
                                    icon: pro_solid_svg_icons_.faAngleLeft
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ArrowButton, {
                                onClick: onRightClick,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(news_media_Icon, {
                                    icon: pro_solid_svg_icons_.faAngleRight
                                })
                            })
                        ]
                    }),
                    MentionInMediaNav(width1, media1)
                ]
            })
        ]
    }));
}
const news_media_Icon = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-b223ac68-0"
})`
  height: 35px;
  width: 35px !important;
  ${(0,external_styled_breakpoints_.down)("md")} {
    font-size: 35px !important; 
  }
`;
const MediaContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-b223ac68-1"
})`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  margin: 0px auto;
  align-items: center;
  justify-content: center;
  gap: 40px;
  ${(0,external_styled_breakpoints_.down)("sm")} {
    overflow-x: scroll;
    justify-content: unset;
    align-items: unset;
  }
`;
const news_media_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-b223ac68-2"
})`
  background: transparent url("/images/news/mentionedinmedia.png") 0% 0%
    no-repeat padding-box;
  padding: 40px;
  background-repeat: repeat;
  ${(0,external_styled_breakpoints_.down)("sm")} {
    background-size: cover;
  }
`;
const Headline = external_styled_components_default().div.withConfig({
    componentId: "sc-b223ac68-3"
})`
  font-weight: 950;
  font-family: "Eveleth";
  font-size: 40px;
  color: white;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 60px;
  ${(0,external_styled_breakpoints_.down)("sm")} {
    font-size: 20px;
    margin-bottom: 40px;
  }
`;
const ArrowButton = external_styled_components_default().div.withConfig({
    componentId: "sc-b223ac68-4"
})`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  background: #1b2024;
  box-shadow: 0px 3px 20px #00000059;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 1300px) and (max-width: 1500px) {
    height: 60px;
    width: 60px;
    border-radius: 30px;
  }
  z-index: 10;
  cursor: pointer;
`;
const ArrowContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-b223ac68-5"
})`
  display: flex;
  flex-direction: row;
  position: absolute;
  justify-content: space-between;
  width: 100%;
  width: 1630px;

  @media only screen and (min-width: 1500px) and (max-width: 1700px) {
    width: 1410px;
  }
  @media only screen and (min-width: 1300px) and (max-width: 1500px) {
    width: 1220px;
  }
  @media only screen and (max-width: 1300px) {
    width: 800px;
  }
  ${(0,external_styled_breakpoints_.down)("md")} {
    width: calc(100% - 80px);
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    display: none;
  }
`;
/* harmony default export */ const news_media = (NewsMedia);

// EXTERNAL MODULE: ./components/our-partners/index.tsx + 4 modules
var our_partners = __webpack_require__(3159);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/news/index.tsx









const constructITColour = construct_it_config/* default.primaryColour */.Z.primaryColour;
function NewsPage() {
    const subsidiary = (0,selected_subsidiary_store/* useSelected */.vt)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(news_Container, {
        subsidiary: subsidiary,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Latest news and updates"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Find out what's happening across the BJS Family of companies."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(news_contents, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(news_media, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(our_partners/* default */.Z, {})
        ]
    }));
}
const news_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-8a52ce4d-0"
})`
  display: flex;
  flex-direction: column;
  ${network_statistics/* default */.Z} {
    ${(props)=>props.subsidiary === "constructit" && `background: ${constructITColour}`
}
  }
`;
/* harmony default export */ const news = (NewsPage);

;// CONCATENATED MODULE: ./pages/news.tsx





const getServerSideProps = async ()=>{
    const data = await (0,Api/* getNews */.dD)();
    return {
        props: {
            data
        }
    };
};
const News = ({ data  })=>{
    const setNews = (0,newsStore/* useSetNewsContent */.d_)();
    (0,external_react_.useEffect)(()=>{
        setNews(data);
    }, [
        data
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(news, {}));
};
/* harmony default export */ const pages_news = (News);


/***/ }),

/***/ 2699:
/***/ ((module) => {

module.exports = require("@bjsdistribution/components");

/***/ }),

/***/ 1638:
/***/ ((module) => {

module.exports = require("@fortawesome/pro-solid-svg-icons");

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
var __webpack_exports__ = __webpack_require__.X(0, [324,3159,7729,6066,279,7785,918], () => (__webpack_exec__(9830)));
module.exports = __webpack_exports__;

})();