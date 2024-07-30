import { format } from "date-fns";
import Slide from "/components/util/MotionSlider/Slide";
import {
  IArticleType,
  IInMedia,
  INewsItem,
  INextPreArticle,
} from "/pages/api/handler/Types";
export const getNewsFromId = (id: any, newsList: any) => {
  let news = newsList.find((x: { id: any }) => x.id == id);
  return news;
};

export const dateFormat = (date: string) => {
  return format(new Date(date), "MM/dd/yy");
};

export const filterNewsByType = (
  type: string,
  news: Array<INewsItem>,
  sortFilter: string
) => {
  let filteredNews: Array<INewsItem> = [];
  let newsArr: Array<INewsItem> = [...news];
  newsArr = newsArr.sort(function (a, b) {
    return Date.parse(b.date) - Date.parse(a.date);
  });
  if (sortFilter === "oldest") {
    newsArr = newsArr.reverse();
  }
  switch (type) {
    case "videos":
      filteredNews = newsArr.filter(
        (_news) => _news.article_type[0].type.toLowerCase() === "video"
      );
      break;
    case "articles":
      filteredNews = newsArr.filter(
        (_news) => _news.article_type[0].type.toLowerCase() === "article"
      );
      break;
    default:
      filteredNews = newsArr;
      break;
  }
  return filteredNews;
};
export const paginator = (
  items: Array<INewsItem>,
  currentPage: number,
  itemPerPage: number
) => {
  let page = currentPage || 1,
    per_page = itemPerPage || 10,
    offset = (page - 1) * per_page,
    paginatedItems = items.slice(offset).slice(0, itemPerPage),
    total_pages = Math.ceil(items.length / per_page);

  const result = {
    page: page,
    perPageItems: per_page,
    prePage: page - 1 ? page - 1 : null,
    nextPage: total_pages > page ? page + 1 : null,
    total: items.length,
    totalPages: total_pages,
    data: paginatedItems,
  };
  return result;
};
export const preNextSlugIndex = (
  slugs: Array<string>,
  currentSlug: string
): INextPreArticle => {
  const matchCurrentSlug = (slug: string) => slug === currentSlug;
  const currentSlugIndex: number = slugs.findIndex(matchCurrentSlug);
  return {
    preSlugIndex: currentSlugIndex > 0 ? currentSlugIndex - 1 : null,
    nextSlugIndex:
      currentSlugIndex < slugs.length - 1 ? currentSlugIndex + 1 : null,
  };
};

export const typeWatchOrRead = (type: string) => {
  let result = "watch";
  if (type === "Article") {
    result = "read";
  }
  return result;
};

export const timeWatchOrRead = (articleType: IArticleType) => {
  let result = "";
  if (articleType?.type === "video") {
    result = `${articleType.view_time} min watch`;
  } else {
    result = `${articleType?.read_time} min read`;
  }
  return result;
};
