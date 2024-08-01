"use strict";
(() => {
var exports = {};
exports.id = 5306;
exports.ids = [5306];
exports.modules = {

/***/ 395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ news_all),
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
// EXTERNAL MODULE: external "@bjsdistribution/components"
var components_ = __webpack_require__(2699);
// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__(6170);
// EXTERNAL MODULE: ./pages/api/store/newsStore.ts
var newsStore = __webpack_require__(918);
;// CONCATENATED MODULE: ./components/news/all-news/news-header/index.tsx





const FILTER_VALUES = [
    "all",
    "articles",
    "videos"
];
function NewsHeader() {
    const currentFilter = (0,newsStore/* useNewsFilter */.P2)();
    const sortFilter = (0,newsStore/* useNewsSortFilter */.Wk)();
    const setNewsFilter = (0,newsStore/* useSetNewsFilter */.Jb)();
    const setNewsSortFilter = (0,newsStore/* useSetNewsSortFilter */.S8)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ButtonContainer, {
                children: FILTER_VALUES.map((val)=>{
                    return(/*#__PURE__*/ jsx_runtime_.jsx(NewsButton, {
                        text: val,
                        filter: currentFilter,
                        onClick: ()=>setNewsFilter(val)
                        ,
                        children: val
                    }, val));
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Dropdown, {
                value: sortFilter,
                onChange: (event)=>setNewsSortFilter(event.target.value)
                ,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Option, {
                        value: "latest",
                        children: "Latest"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Option, {
                        value: "oldest",
                        children: "Oldest"
                    })
                ]
            })
        ]
    }));
}
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-4a4c1c44-0"
})`
  background: transparent linear-gradient(359deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;
  height: 100px;
  padding: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 85px;
  ${(0,external_styled_breakpoints_.down)("md")} {
    top: 60px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    height: 75px;
    padding: 20px;
    top: 60px;
  }
`;
const NewsButton = external_styled_components_default().a.withConfig({
    componentId: "sc-4a4c1c44-1"
})`
  cursor: pointer;
  font-size: 16px;
  font-family: "Eveleth";
  letter-spacing: 0px;
  color: ${components_.colours.black};
  text-transform: uppercase;

  opacity: ${({ text , filter  })=>text === filter ? 1 : 0.25
};
  ${(0,external_styled_breakpoints_.down)("sm")} {
    font-size: 13px;
  }

  :hover {
    color: ${components_.colours.yellow};
    opacity: 1;
  }
`;
const ButtonContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-4a4c1c44-2"
})`
  display: flex;
  flex-direction: row;
  gap: 40px;
  ${(0,external_styled_breakpoints_.down)("sm")} {
    gap: 20px;
  }
`;
const Dropdown = external_styled_components_default().select.withConfig({
    componentId: "sc-4a4c1c44-3"
})`
  width: 153px;
  height: 56px;
  border: 1px solid #9c9a97;
  border-radius: 6px;
  opacity: 0.4;
  padding: 10px;
  ${(0,external_styled_breakpoints_.down)("sm")} {
    width: auto;
  }
`;
const Option = external_styled_components_default().option.withConfig({
    componentId: "sc-4a4c1c44-4"
})``;
/* harmony default export */ const news_header = (NewsHeader);

// EXTERNAL MODULE: ./components/news/utils/index.ts
var utils = __webpack_require__(9855);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/pro-regular-svg-icons"
var pro_regular_svg_icons_ = __webpack_require__(5403);
// EXTERNAL MODULE: ./components/util/useIsMobile.tsx
var useIsMobile = __webpack_require__(6658);
;// CONCATENATED MODULE: ./components/news/all-news/all-news-pagination/index.tsx







function NewsPagination(props) {
    const { content  } = props;
    const setPageIndex = (0,newsStore/* useSetNewsPageIndex */.Vy)();
    const currentPageIndex = (0,newsStore/* useNewsPageIndex */.oQ)();
    const isMobileOnly = (0,useIsMobile/* default */.Z)();
    if (content.totalPages === 1) {
        return null;
    }
    console.log(content);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(all_news_pagination_Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LeftButton, {
                disabled: content.prePage === null,
                onClick: ()=>{
                    setPageIndex(currentPageIndex - 1);
                },
                id: "all-news-pagination-go-to-news-prev",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                        icon: pro_regular_svg_icons_.faAngleLeft
                    }),
                    !isMobileOnly && 'Prev'
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RightButton, {
                disabled: content.nextPage === null,
                onClick: ()=>{
                    setPageIndex(currentPageIndex + 1);
                },
                id: "all-news-pagination-go-to-news-next",
                children: [
                    !isMobileOnly && 'Next',
                    /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                        icon: pro_regular_svg_icons_.faAngleRight
                    })
                ]
            })
        ]
    }));
}
const all_news_pagination_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-c684dae1-0"
})`
  background: rgba(58, 54, 48, 0.05) 0% 0% no-repeat padding-box;
  height: 160px;
  padding: 40px 41px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${(0,external_styled_breakpoints_.down)("md")} {
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    height: 75px;
    padding: 20px;
    background: #EDECEA 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 10px #0000001A;
    position: fixed;
    height: 116px;
    left: 0px;
    bottom : 0px;
    right: 0px;
  }
`;
const Icon = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-c684dae1-1"
})`
  height: 16px;
  width: 6px;
  font-size: 16px !important;
`;
const LeftButton = external_styled_components_default().button.withConfig({
    componentId: "sc-c684dae1-2"
})`
  background: rgba(255, 255, 255, 0.4) 0% 0% no-repeat padding-box;
  border: 1px solid rgba(58, 54, 48, 0.4);
  height: 44px;
  border-radius: 22px;
  padding: 0px 25px;
  gap: 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  ${(0,external_styled_breakpoints_.down)("sm")} {
    width: 44px;
    border-radius: 22px;
    padding: unset;
    text-align: center;
    justify-content: center;
  }
  :hover{
    background: rgba(255, 255, 255, 1) 0% 0% no-repeat padding-box;
  }
`;
const RightButton = external_styled_components_default()(LeftButton).withConfig({
    componentId: "sc-c684dae1-3"
})``;
/* harmony default export */ const all_news_pagination = (NewsPagination);

// EXTERNAL MODULE: external "@fortawesome/pro-solid-svg-icons"
var pro_solid_svg_icons_ = __webpack_require__(1638);
// EXTERNAL MODULE: ./components/util/useIsTabletOrSmaller.tsx
var useIsTabletOrSmaller = __webpack_require__(3176);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
;// CONCATENATED MODULE: ./components/news/all-news/news-item/index.tsx










function NewsItem(props) {
    var ref, ref1, ref2;
    const imageMotion = {
        hover: {
            scale: 1.05
        }
    };
    const textMotion = {
        hover: {
            width: "135px"
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
    const url = `/news/${props.news.slug}`;
    const navigateTo = ()=>router_default().push(url)
    ;
    var ref3;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(news_item_Container, {
        layout: true,
        onClick: navigateTo,
        initial: "rest",
        whileHover: "hover",
        animate: "rest",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ImageContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ArticleImageContainer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ArticleImage, {
                            src: (ref3 = (ref = props.news.header_image) === null || ref === void 0 ? void 0 : ref.url) !== null && ref3 !== void 0 ? ref3 : "",
                            variants: imageMotion
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ArticleContent, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                                href: url,
                                children: props.news.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentType, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(news_item_Icon, {
                                                icon: ((ref1 = props.news.article_type[0]) === null || ref1 === void 0 ? void 0 : ref1.type) === "article" ? pro_solid_svg_icons_.faNewspaper : pro_solid_svg_icons_.faVideo
                                            }),
                                            (ref2 = props.news.article_type[0]) === null || ref2 === void 0 ? void 0 : ref2.type
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PostedTime, {
                                        children: [
                                            "Posted: ",
                                            (0,utils/* dateFormat */.vc)(props.news.date)
                                        ]
                                    }),
                                    (0,useIsTabletOrSmaller/* default */.ZP)() && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Timer, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(news_item_Icon, {
                                                icon: pro_solid_svg_icons_.faStopwatch
                                            }),
                                            (0,utils/* timeWatchOrRead */.SY)(props.news.article_type[0])
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Excerpt, {
                                children: props.news.excerpt
                            }),
                            (0,useIsTabletOrSmaller/* default */.ZP)() && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ReadButtonTab, {
                                onClick: navigateTo,
                                children: [
                                    "Read Article",
                                    /*#__PURE__*/ jsx_runtime_.jsx(news_item_Icon, {
                                        icon: pro_solid_svg_icons_.faLongArrowRight
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            !(0,useIsTabletOrSmaller/* default */.ZP)() && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ReadMore, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Timer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(news_item_Icon, {
                                icon: pro_solid_svg_icons_.faStopwatch
                            }),
                            (0,utils/* timeWatchOrRead */.SY)(props.news.article_type[0])
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ReadButtonWrapper, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ReadButton, {
                            onClick: navigateTo,
                            variants: textMotion,
                            children: [
                                "Read Article",
                                /*#__PURE__*/ jsx_runtime_.jsx(ArrowIconWrapper, {
                                    variants: arrowMotion,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(news_item_Icon, {
                                        icon: pro_solid_svg_icons_.faLongArrowRight
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
}
const ReadButtonWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-fa528f7f-0"
})`
  display: flex;
  align-items: center;
  border-bottom: 3px solid #feba30;
  white-space: nowrap;
`;
const ArrowIconWrapper = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-fa528f7f-1"
})``;
const news_item_Container = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-fa528f7f-2"
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px;
  cursor: pointer;
  ${(0,external_styled_breakpoints_.down)("md")} {
    padding: 30px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    padding: 0px;
  }
`;
const ReadButton = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
    componentId: "sc-fa528f7f-3"
})`
  color: #3a3630;
  line-height: 2.5;
  font-size: 14px;
  font-weight: bold;
  width: 125px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
const ReadButtonTab = external_styled_components_default()(ReadButton).withConfig({
    componentId: "sc-fa528f7f-4"
})`
  align-self: flex-end;
  margin-top: 10px;
`;
const news_item_Icon = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-fa528f7f-5"
})`
  height: 16px;
  width: 16px;
  margin-right: 10px;
  ${(0,external_styled_breakpoints_.down)("sm")} {
    margin-right: 5px;
  }
`;
const Timer = external_styled_components_default().div.withConfig({
    componentId: "sc-fa528f7f-6"
})`
  font-size: 14px;
  letter-spacing: 0px;
  color: #888075;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  ${(0,external_styled_breakpoints_.down)("sm")} {
    gap: 2px;
  }
`;
const ArticleImage = external_styled_components_default()(external_framer_motion_.motion.img).withConfig({
    componentId: "sc-fa528f7f-7"
})`
  transition: .5s all ease-in-out;
  object-fit: cover;
  width: 100%;
  height: 100%;
  // border-radius: 20px;
`;
const ArticleImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-fa528f7f-8"
})`
  overflow: hidden;
  height: 150px;
  max-width: 211px;
  border-radius: 20px;
  flex: 1;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  ${(0,external_styled_breakpoints_.down)("sm")} {
    height: 326px;
    flex: unset;
    width: 100%;
    max-width: unset;
    border-radius: 0px;
    background-position: center;
  }
`;
const ArticleContent = external_styled_components_default().div.withConfig({
    componentId: "sc-fa528f7f-9"
})`
  display: flex;
  padding: 13px 0px;
  flex-direction: column;
  flex: 1;
  ${(0,external_styled_breakpoints_.down)("md")} {
    padding: 0px 0px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    padding: 20px;
  }
`;
const Title = external_styled_components_default().a.withConfig({
    componentId: "sc-fa528f7f-10"
})`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0px;
  color: ${components_.colours.black};
  cursor: pointer;
  text-decoration: none;
  :hover {
    color: ${components_.colours.yellow};
  }
  ${(0,external_styled_breakpoints_.down)("md")} {
    font-size: 15px;
  }
`;
const Row = external_styled_components_default().div.withConfig({
    componentId: "sc-fa528f7f-11"
})`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: 20px;
  margin-top: 14px;
  ${(0,external_styled_breakpoints_.down)("sm")} {
    gap: 6px;
  }
`;
const ContentType = external_styled_components_default().div.withConfig({
    componentId: "sc-fa528f7f-12"
})`
  color: #8d8b88;
  font-weight: bold;
  align-items: center;
  display: flex;
  text-transform: capitalize;
`;
const PostedTime = external_styled_components_default().div.withConfig({
    componentId: "sc-fa528f7f-13"
})`
  letter-spacing: 0px;
  color: rgba(58, 54, 48, 0.5);
  font-weight: normal;
  font-size: 16px;
  ${(0,external_styled_breakpoints_.down)("md")} {
    font-size: 14px;
  }
`;
const ImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-fa528f7f-14"
})`
  display: flex;
  flex-direction: row;
  gap: 40px;
  flex: 1;
  align-items: center;
  ${(0,external_styled_breakpoints_.down)("md")} {
    gap: 30px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    flex-direction: column;
    gap: unset;
  }
`;
const Excerpt = external_styled_components_default().div.withConfig({
    componentId: "sc-fa528f7f-15"
})`
  font-size: 16px;
  color: ${components_.colours.black};
  padding-top: 20px;
  max-width: 680px;
  @media only screen and (min-width: 1600px) {
    max-width: 1000px !important;
  }
  @media only screen and (min-width: 1400px) {
    max-width: 880px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    max-width: 490px;
  }
  ${(0,external_styled_breakpoints_.down)("md")} {
    font-size: 14px;
  }
`;
const ReadMore = external_styled_components_default().div.withConfig({
    componentId: "sc-fa528f7f-16"
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;
/* harmony default export */ const news_item = (NewsItem);

;// CONCATENATED MODULE: ./components/news/all-news/all-news-list/index.tsx






function AllNewsList() {
    const newsList = (0,newsStore/* useNewsContent */.Ng)();
    const fillterVal = (0,newsStore/* useNewsFilter */.P2)();
    const newsPageIndex = (0,newsStore/* useNewsPageIndex */.oQ)();
    const sortFilter = (0,newsStore/* useNewsSortFilter */.Wk)();
    if (newsList === null) {
        return null;
    }
    const filteredNews = (0,utils/* filterNewsByType */.tR)(fillterVal, newsList, sortFilter);
    const currentPageNews = (0,utils/* paginator */.gq)(filteredNews, newsPageIndex, 6);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(all_news_list_Container, {
        children: [
            currentPageNews.data.map((news, index)=>{
                return(/*#__PURE__*/ jsx_runtime_.jsx(news_item, {
                    news: news
                }, news.id));
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(all_news_pagination, {
                content: currentPageNews
            })
        ]
    }));
}
const all_news_list_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-5142cc14-0"
})`
  gap: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
/* harmony default export */ const all_news_list = (AllNewsList);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/our-partners/index.tsx + 4 modules
var our_partners = __webpack_require__(3159);
;// CONCATENATED MODULE: ./components/news/all-news/index.tsx









const constructITColour = construct_it_config/* default.primaryColour */.Z.primaryColour;
function AllNewsPage() {
    const subsidiary = (0,selected_subsidiary_store/* useSelected */.vt)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(all_news_Container, {
        subsidiary: subsidiary,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "All News"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(news_header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(all_news_list, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(our_partners/* default */.Z, {})
        ]
    }));
}
const all_news_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-a8a89bf1-0"
})`
  display: flex;
  flex-direction: column;

  ${network_statistics/* default */.Z} {
    ${(props)=>props.subsidiary === "constructit" && `background: ${constructITColour}`
}
  }
`;
/* harmony default export */ const all_news = (AllNewsPage);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./pages/api/handler/Api.ts
var Api = __webpack_require__(8503);
;// CONCATENATED MODULE: ./pages/news/all.tsx





const getServerSideProps = async ()=>{
    const data = await (0,Api/* getNews */.dD)();
    return {
        props: {
            data
        }
    };
};
const AllNews = ({ data  })=>{
    const setNews = (0,newsStore/* useSetNewsContent */.d_)();
    (0,external_react_.useEffect)(()=>{
        setNews(data);
    }, [
        data
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(all_news, {}));
};
/* harmony default export */ const news_all = (AllNews);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [324,3159,7729,279,7785,918], () => (__webpack_exec__(395)));
module.exports = __webpack_exports__;

})();