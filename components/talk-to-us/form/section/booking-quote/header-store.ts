import { atom, useRecoilValue, useSetRecoilState } from "recoil";

const showHeader = atom<boolean>({
  key: "talk_to_us_content_show_header",
  default: true,
});

function useShowHeader() {
  return useRecoilValue(showHeader);
}

function useSetShowHeader() {
  return useSetRecoilState(showHeader);
}

export { useShowHeader, useSetShowHeader };
