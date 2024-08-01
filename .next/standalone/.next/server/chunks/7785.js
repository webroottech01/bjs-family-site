"use strict";
exports.id = 7785;
exports.ids = [7785];
exports.modules = {

/***/ 9855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vc": () => (/* binding */ dateFormat),
/* harmony export */   "tR": () => (/* binding */ filterNewsByType),
/* harmony export */   "gq": () => (/* binding */ paginator),
/* harmony export */   "ri": () => (/* binding */ preNextSlugIndex),
/* harmony export */   "SY": () => (/* binding */ timeWatchOrRead)
/* harmony export */ });
/* unused harmony exports getNewsFromId, typeWatchOrRead */
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);

const getNewsFromId = (id, newsList)=>{
    let news = newsList.find((x)=>x.id == id
    );
    return news;
};
const dateFormat = (date)=>{
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(new Date(date), "MM/dd/yy");
};
const filterNewsByType = (type, news, sortFilter)=>{
    let filteredNews = [];
    let newsArr = [
        ...news
    ];
    newsArr = newsArr.sort(function(a, b) {
        return Date.parse(b.date) - Date.parse(a.date);
    });
    if (sortFilter === "oldest") {
        newsArr = newsArr.reverse();
    }
    switch(type){
        case "videos":
            filteredNews = newsArr.filter((_news)=>_news.article_type[0].type.toLowerCase() === "video"
            );
            break;
        case "articles":
            filteredNews = newsArr.filter((_news)=>_news.article_type[0].type.toLowerCase() === "article"
            );
            break;
        default:
            filteredNews = newsArr;
            break;
    }
    return filteredNews;
};
const paginator = (items, currentPage, itemPerPage)=>{
    let page = currentPage || 1, per_page = itemPerPage || 10, offset = (page - 1) * per_page, paginatedItems = items.slice(offset).slice(0, itemPerPage), total_pages = Math.ceil(items.length / per_page);
    const result = {
        page: page,
        perPageItems: per_page,
        prePage: page - 1 ? page - 1 : null,
        nextPage: total_pages > page ? page + 1 : null,
        total: items.length,
        totalPages: total_pages,
        data: paginatedItems
    };
    return result;
};
const preNextSlugIndex = (slugs, currentSlug)=>{
    const matchCurrentSlug = (slug)=>slug === currentSlug
    ;
    const currentSlugIndex = slugs.findIndex(matchCurrentSlug);
    return {
        preSlugIndex: currentSlugIndex > 0 ? currentSlugIndex - 1 : null,
        nextSlugIndex: currentSlugIndex < slugs.length - 1 ? currentSlugIndex + 1 : null
    };
};
const typeWatchOrRead = (type)=>{
    let result = "watch";
    if (type === "Article") {
        result = "read";
    }
    return result;
};
const timeWatchOrRead = (articleType)=>{
    let result = "";
    if ((articleType === null || articleType === void 0 ? void 0 : articleType.type) === "video") {
        result = `${articleType.view_time} min watch`;
    } else {
        result = `${articleType === null || articleType === void 0 ? void 0 : articleType.read_time} min read`;
    }
    return result;
};


/***/ }),

/***/ 1338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vt": () => (/* binding */ useSelected)
/* harmony export */ });
/* unused harmony export useSetSelected */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
//import Subsidiary from "@/components/subsidiary-showcase/Subsidiary";

const selected = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "selected_subsidiary",
    default: "home delivery"
});
function useSelected() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(selected);
}
function useSelectedState() {
    return useRecoilState(selected);
}
function useSetSelected() {
    return useSetRecoilState(selected);
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (useSelectedState)));


/***/ }),

/***/ 8503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dD": () => (/* binding */ getNews),
/* harmony export */   "ZJ": () => (/* binding */ getNewsBySlug),
/* harmony export */   "om": () => (/* binding */ getMedia)
/* harmony export */ });
const endpoint = "https://cms.bjshomedelivery.com";
const getNews = async ()=>{
    const res = await fetch(`${endpoint}/articles/?status=Published&_sort=date:asc`);
    const data = await res.json();
    let newsArr = [
        ...data
    ];
    newsArr = newsArr.sort(function(a, b) {
        return Date.parse(b.date) - Date.parse(a.date);
    });
    return newsArr;
};
const getNewsBySlug = async (slug)=>{
    const res = await fetch(`${endpoint}/articles?slug=${slug}`);
    return res;
};
const getMedia = async ()=>{
    const res = await fetch(`${endpoint}/mentioned-in-the-medias/`);
    const data = await res.json();
    return data;
};


/***/ })

};
;