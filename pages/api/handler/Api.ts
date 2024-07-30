import { INewsItem } from "./Types";

const endpoint = process.env.NEXT_PUBLIC_CMS_ENDPOINT;


export const getNews = async () => {
    const res = await fetch(`${endpoint}/articles/?status=Published&_sort=date:asc`);
    const data: any = await res.json()
    let newsArr:Array<INewsItem> = [...data];
    newsArr = newsArr.sort(function(a,b){
        return Date.parse(b.date) - Date.parse(a.date);
    });
    return newsArr;
}
export const getNewsBySlug = async (slug:string) => {
    const res = await fetch(`${endpoint}/articles?slug=${slug}`)
    return res;
}
export const getMedia = async () => {
    const res = await fetch(`${endpoint}/mentioned-in-the-medias/`);
    const data: any = await res.json()
    return data;
}
