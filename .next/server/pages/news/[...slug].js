"use strict";
(() => {
var exports = {};
exports.id = 555;
exports.ids = [555];
exports.modules = {

/***/ 2824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/error"
const error_namespaceObject = require("next/error");
var error_default = /*#__PURE__*/__webpack_require__.n(error_namespaceObject);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./subsidiary-config/construct-it-config.ts
var construct_it_config = __webpack_require__(7729);
// EXTERNAL MODULE: ./components/network-statistics/index.tsx + 1 modules
var network_statistics = __webpack_require__(279);
// EXTERNAL MODULE: ./components/subsidiary-showcase/grid/selected-subsidiary-store.ts
var selected_subsidiary_store = __webpack_require__(1338);
// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__(6170);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/pro-regular-svg-icons"
var pro_regular_svg_icons_ = __webpack_require__(5403);
// EXTERNAL MODULE: ./components/news/utils/index.ts
var utils = __webpack_require__(9855);
// EXTERNAL MODULE: external "graphql-request"
var external_graphql_request_ = __webpack_require__(5805);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(549);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
;// CONCATENATED MODULE: ./components/news/full-news/full-news-header/useFetchArticleSlugs.ts


const fetcher = async (query)=>{
    const response = await (0,external_graphql_request_.request)(`${"https://cms.bjshomedelivery.com"}/graphql`, query);
    return response.articles.map((article)=>article["slug"]
    );
};
function useFetchArticleSlugs() {
    const { data , error  } = external_swr_default()(`{
      articles {
          slug
      }
    }`, fetcher);
    return {
        data,
        error
    };
}
/* harmony default export */ const full_news_header_useFetchArticleSlugs = (useFetchArticleSlugs);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./components/util/useIsMobile.tsx
var useIsMobile = __webpack_require__(6658);
// EXTERNAL MODULE: ./components/util/useIsTabletOrSmaller.tsx
var useIsTabletOrSmaller = __webpack_require__(3176);
;// CONCATENATED MODULE: ./components/news/full-news/full-news-header/index.tsx










function FullNewsHeader(props) {
    const { news  } = props;
    const isMobileOnly = (0,useIsMobile/* default */.Z)();
    const { data , error  } = full_news_header_useFetchArticleSlugs();
    if (error || !data) {
        return null;
    }
    const nextPreSlugIndex = (0,utils/* preNextSlugIndex */.ri)(data, news.slug);
    const moveToAllNews = ()=>router_default().push(`/news/all`)
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LeftButton, {
                id: "full-news-go-to-article-list",
                disabled: nextPreSlugIndex.preSlugIndex === null,
                onClick: moveToAllNews,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                        icon: pro_regular_svg_icons_.faAngleLeft
                    }),
                    "Article List"
                ]
            }),
            !(0,useIsTabletOrSmaller/* default */.ZP)() && /*#__PURE__*/ jsx_runtime_.jsx(TitleHeader, {
                children: news.title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RightButton, {
                id: "full-news-go-to-next-article",
                disabled: nextPreSlugIndex.nextSlugIndex === null,
                onClick: ()=>{
                    if (nextPreSlugIndex.nextSlugIndex === null) return;
                    router_default().push(`/news/${data[nextPreSlugIndex.nextSlugIndex]}`);
                },
                children: [
                    "Next Article",
                    /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                        icon: pro_regular_svg_icons_.faAngleRight
                    })
                ]
            })
        ]
    }));
}
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-a344ad4e-0"
})`
  background: transparent linear-gradient(359deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;
  height: 100px;
  padding: 40px 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 85px;
  ${(0,external_styled_breakpoints_.down)("md")} {
    top: unset;
    height: 57px;
    padding: 40px;
    bottom: 0px;
    position: fixed;
    width: 100%;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    height: 57px;
    padding: 20px;
    top: unset;
    padding: unset;
    bottom: 0px;
    position: fixed;
    width: 100%;
  }
`;
const Icon = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-a344ad4e-1"
})`
  height: 16px;
  width: 6px;
  font-size: 16px;
`;
const LeftButton = external_styled_components_default().button.withConfig({
    componentId: "sc-a344ad4e-2"
})`
  background: transparent linear-gradient(359deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid rgba(58, 54, 48, 0.4);
  height: 44px;
  border-radius: 22px;
  padding: 0px 25px;
  gap: 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  ${(0,external_styled_breakpoints_.down)("md")} {
    border: unset;
    background: unset;
    font-size: 16px;
    padding: 0px 20px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    border: unset;
    background: unset;
    font-size: 16px;
    padding: 0px 20px;
  }
  :hover{
    background: #ffffff 0% 0% no-repeat padding-box;
  }
`;
const RightButton = external_styled_components_default()(LeftButton).withConfig({
    componentId: "sc-a344ad4e-3"
})``;
const TitleHeader = external_styled_components_default().h1.withConfig({
    componentId: "sc-a344ad4e-4"
})`
    font-size: 20px;
    color: #3a3630;
    margin:0px;
    font-weight:400;
  `;
/* harmony default export */ const full_news_header = (FullNewsHeader);

// EXTERNAL MODULE: external "@bjsdistribution/components"
var components_ = __webpack_require__(2699);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/news/full-news/full-news-content/index.tsx











function FullNewsContent(props) {
    var ref;
    const isMobileOrTablet = (0,useIsTabletOrSmaller/* default */.ZP)();
    const isMobileOnly = (0,useIsMobile/* default */.Z)();
    const { news  } = props;
    const moveToAllNews = ()=>router_default().push(`/news/all`)
    ;
    var ref1;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(full_news_content_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    property: "og:image:url",
                    content: news.header_image.url
                })
            }),
            isMobileOrTablet && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TabletHeader, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(MobileArrow, {
                        onClick: moveToAllNews,
                        icon: pro_regular_svg_icons_.faAngleLeft
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TabletHeaderTitle, {
                        children: [
                            news.title,
                            isMobileOnly && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DateTime, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PostedDate, {
                                        children: [
                                            "Posted: ",
                                            (0,utils/* dateFormat */.vc)(news.created_at)
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Timer, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(full_news_content_Icon, {
                                                icon: pro_regular_svg_icons_.faStopwatch
                                            }),
                                            (0,utils/* timeWatchOrRead */.SY)(news.article_type[0])
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            !isMobileOnly && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DateTime, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PostedDate, {
                        children: [
                            "Posted: ",
                            (0,utils/* dateFormat */.vc)(news.created_at)
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Timer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(full_news_content_Icon, {
                                icon: pro_regular_svg_icons_.faStopwatch
                            }),
                            (0,utils/* timeWatchOrRead */.SY)(news.article_type[0])
                        ]
                    })
                ]
            }),
            news.article_type[0].type === "article" && /*#__PURE__*/ jsx_runtime_.jsx(ImageContainer, {
                url: (ref1 = (ref = news.header_image) === null || ref === void 0 ? void 0 : ref.url) !== null && ref1 !== void 0 ? ref1 : ""
            }),
            news.article_type[0].type === "video" && /*#__PURE__*/ jsx_runtime_.jsx(VideoPlayer, {
                width: "100%",
                height: "100%",
                src: news.article_type[0].video_link,
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ArticleContainer, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ArticleContent, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Excerpt, {
                            children: news.excerpt
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(MarkdownContent, {
                            dangerouslySetInnerHTML: {
                                __html: news.content
                            }
                        })
                    ]
                })
            })
        ]
    }));
}
const TabletHeader = external_styled_components_default().div.withConfig({
    componentId: "sc-bb91c343-0"
})`
  background: transparent linear-gradient(360deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;
  z-index: 1;
  padding: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 72px;
  left: 0px;
  right: 0px;
  ${(0,external_styled_breakpoints_.down)("sm")} {
    position: sticky;
    padding: 20px;
    top: 70px;
  }
`;
const TabletHeaderTitle = external_styled_components_default().div.withConfig({
    componentId: "sc-bb91c343-1"
})`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  color: #3a3630;
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${(0,external_styled_breakpoints_.down)("sm")} {
    font-size: 13px;
  }
`;
const MobileArrow = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-bb91c343-2"
})`
  height: 26px;
  width: 26px;
  font-size: 26px;
`;
const DateTime = external_styled_components_default().div.withConfig({
    componentId: "sc-bb91c343-3"
})`
  display: flex;
  flex-direction: row;
  gap: 15px;
  ${(0,external_styled_breakpoints_.down)("md")} {
    margin-top: 70px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    margin-top: 12px;
  }
`;
const full_news_content_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-bb91c343-4"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  max-width: 1200px;
  padding: 40px;
  ${(0,external_styled_breakpoints_.down)("md")} {
    padding: 40px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    padding: 0px;
  }
`;
const TitleContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-bb91c343-5"
})`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
const TimerContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-bb91c343-6"
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 18px;
`;
const MobileTitleContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-bb91c343-7"
})`
  background: transparent linear-gradient(360deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;
const Title = external_styled_components_default().div.withConfig({
    componentId: "sc-bb91c343-8"
})`
  text-align: left;
  font-family: "Eveleth";
  letter-spacing: 0px;
  font-weight: 950;
  color: #3a3630;
  text-transform: uppercase;
  font-size: 34px;
  padding-top: 55px;
  text-align: center;
  ${(0,external_styled_breakpoints_.down)("md")} {
    font-size: 26px;
    margin-bottom: 40px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    font-size: 26px;
    margin-bottom: unset;
    padding-top: unset;
    margin: 14px 0px;
  }
`;
const full_news_content_Icon = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-bb91c343-9"
})`
  height: 16px;
  width: 10px;
`;
const BackIcon = external_styled_components_default()(react_fontawesome_.FontAwesomeIcon).withConfig({
    componentId: "sc-bb91c343-10"
})`
  font-size: 26px !important;
`;
const Timer = external_styled_components_default().div.withConfig({
    componentId: "sc-bb91c343-11"
})`
  font-size: 14px;
  letter-spacing: 0px;
  color: #888075;
  display: flex;
  align-items: center;
  gap: 8px;
`;
const PostedDate = external_styled_components_default().div.withConfig({
    componentId: "sc-bb91c343-12"
})`
  font-size: 14px;
  color: rgba(58, 54, 48, 0.5);
`;
const VideoPlayer = external_styled_components_default().iframe.withConfig({
    componentId: "sc-bb91c343-13"
})`
  width: 100%;
  max-width: 1200px;
  height: 600px;
  background-size: cover;
  background-position: top center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: 35px;
  border: unset;
  ${(0,external_styled_breakpoints_.down)("md")} {
    width: 100%;
    height: 472px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    height: 282px;
    width: 100%;
    margin-top: unset;
    border-top-left-radius: unset;
    border-top-right-radius: unset;
    background-position: center center;
  }
`;
const ImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-bb91c343-14"
})`
  width: 100%;
  max-width: 1200px;
  height: 600px;
  background: transparent url("${({ url  })=>url
}") 0% 0% no-repeat padding-box;
  background-size: cover;
  background-position: top center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-position: center;
  margin-top: 35px;
  ${(0,external_styled_breakpoints_.down)("md")} {
    width: 100%;
    height: 472px;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    height: 230px;
    width: 100%;
    margin-top: unset;
    border-top-left-radius: unset;
    border-top-right-radius: unset;
    background-position: center center;
  }
`;
const ArticleContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-bb91c343-15"
})`
  display: flex;
  flex-direction: row;
  margin-top: 55px;
  margin-bottom: 55px;
  ${(0,external_styled_breakpoints_.down)("sm")} {
    margin-top: unset;
  }
`;
const ArticleContent = external_styled_components_default().div.withConfig({
    componentId: "sc-bb91c343-16"
})`
  display: flex;
  flex-direction: column;
  /* max-width: 80%; */
  ${(0,external_styled_breakpoints_.down)("md")} {
    max-width: unset;
  }
  ${(0,external_styled_breakpoints_.down)("sm")} {
    padding: 20px;
    max-width: 100%;

    a {
      max-width: 100%;
    }
  }
`;
const Excerpt = external_styled_components_default().div.withConfig({
    componentId: "sc-bb91c343-17"
})`
  font-size: 20px;
  color: ${components_.colours.black};
  ${(0,external_styled_breakpoints_.down)("sm")} {
    font-size: 16px;
  }
`;
const MarkdownContent = external_styled_components_default().div.withConfig({
    componentId: "sc-bb91c343-18"
})`
  font-size: 16px;
  color: ${components_.colours.black};
  margin-top: 37px;
`;
/* harmony default export */ const full_news_content = (FullNewsContent);

;// CONCATENATED MODULE: ./components/news/full-news/index.tsx







const constructITColour = construct_it_config/* default.primaryColour */.Z.primaryColour;
function FullNews(props) {
    const { news  } = props;
    const subsidiary = (0,selected_subsidiary_store/* useSelected */.vt)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(full_news_Container, {
        subsidiary: subsidiary,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(full_news_header, {
                news: news
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(full_news_content, {
                news: news
            })
        ]
    }));
}
const full_news_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-7eb13881-0"
})`
  display: flex;
  flex-direction: column;

  ${network_statistics/* default */.Z} {
    ${(props)=>props.subsidiary === "constructit" && `background: ${constructITColour}`
}
  }

  a {
    display: inline-flex;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
/* harmony default export */ const full_news = (FullNews);

// EXTERNAL MODULE: ./pages/api/handler/Api.ts
var Api = __webpack_require__(8503);
// EXTERNAL MODULE: ./components/our-partners/index.tsx + 4 modules
var our_partners = __webpack_require__(3159);
;// CONCATENATED MODULE: ./pages/news/[...slug].tsx






const getServerSideProps = async (context)=>{
    const res = await (0,Api/* getNewsBySlug */.ZJ)(context.params.slug);
    const data = await res.json();
    return {
        props: {
            news: data
        }
    };
};
const FullNewsPage = (props)=>{
    const { news  } = props;
    const newsArray = news;
    if (newsArray.length === 0) {
        return(/*#__PURE__*/ jsx_runtime_.jsx((error_default()), {
            statusCode: 400
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: newsArray[0].title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(full_news, {
                news: newsArray[0]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(our_partners/* default */.Z, {})
        ]
    }));
};
/* harmony default export */ const _slug_ = (FullNewsPage);


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

/***/ 5805:
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ }),

/***/ 549:
/***/ ((module) => {

module.exports = require("swr");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [324,3159,7729,279,7785], () => (__webpack_exec__(2824)));
module.exports = __webpack_exports__;

})();