import { atom, useRecoilState } from "recoil";

import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";
import { INewsItem } from "../handler/Types";

const NewsContent = atom<Array<INewsItem> | null>({
  key: "KNewsContent",
  default: null,
});

const NewsFilter = atom<string>({
  key: "KNewsFilter",
  default: "all",
});
const NewsSortFilter = atom<string>({
  key: "KNewsSortFilter",
  default: "latest",
});


const NewsPageIndex = atom<number>({
  key: "KNewsPageIndex",
  default: 1,
});

function useNewsContent() {
  return useRecoilValue(NewsContent);
}
function useNewsContentState() {
  return useRecoilState(NewsContent);
}
function useSetNewsContent() {
  return useSetRecoilState(NewsContent);
}

function useNewsFilter() {
  return useRecoilValue(NewsFilter);
}
function useNewsSortFilter() {
  return useRecoilValue(NewsSortFilter);
}
function useNewsFilterState() {
  return useRecoilState(NewsFilter);
}
function useSetNewsFilter() {
  return useSetRecoilState(NewsFilter);
}

function useNewsPageIndex() {
  return useRecoilValue(NewsPageIndex);
}
function useNewsPageIndexState() {
  return useRecoilState(NewsPageIndex);
}
function useSetNewsPageIndex() {
  return useSetRecoilState(NewsPageIndex);
}
function useSetNewsSortFilter() {
  return useSetRecoilState(NewsSortFilter);
}


export {
  useSetNewsContent,
  useNewsContentState,
  useNewsFilterState,
  useSetNewsFilter,
  useSetNewsPageIndex,
  useSetNewsSortFilter
};
export { useNewsContent, useNewsFilter, useNewsPageIndex, useNewsSortFilter };
