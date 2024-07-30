export interface IArticleType {
  __component: string;
  id: number;
  type: string | "article";
  read_time: number | null;
  view_time: number | null;
  video_link: string;
}
export interface INewsItem {
  content: string;
  created_at: string;
  date: string;
  excerpt: string;
  article_type: Array<IArticleType>;
  header_image: {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    url: string;
  };
  id: number;
  slug: string;
  status: string;
  title: string;
  type: string;
  updated_at: string;
  view_time: number;
  article_video: string;
}
export interface INewsProps {
  news: INewsItem;
}
export interface IImage {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: {
      ext: string;
      url: string;
      width: number;
      height: number;
    };
  };
  url: string;
  provider: string;
  created_at: string;
  updated_at: string;
}
export interface IInMedia {
  id: number;
  excerpt: string;
  link: string;
  created_at: string;
  updated_at: string;
  author: IImage;
  media_logo: IImage;
}
export interface ISliderProps {
  content: Array<IInMedia>;
}
export interface ISlideProps {
  slide: IInMedia;
}
export interface IFullNews {
  id: any;
}
export interface IPaginator {
  content: IPaginatorContent;
}
export interface IPaginatorContent {
  data: Array<INewsItem>;
  nextPage: number | null;
  page: number;
  perPageItems: number;
  prePage: number | null;
  total: number;
  totalPages: number;
}
export interface INextPreArticle {
  preSlugIndex: number | null;
  nextSlugIndex: number | null;
}
