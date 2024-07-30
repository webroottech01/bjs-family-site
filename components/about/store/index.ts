import { atom, useRecoilState } from "recoil";

import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";

const OnBoardSlideIndex = atom<number>({
  key: "KOnBoardSlideIndex",
  default: 0,
});


function useOnBoardSlideIndex() {
  return useRecoilValue(OnBoardSlideIndex);
}
function useOnBoardSlideIndexState() {
  return useRecoilState(OnBoardSlideIndex);
}
function useSetOnBoardSlideIndex() {
  return useSetRecoilState(OnBoardSlideIndex);
}


export {
  useSetOnBoardSlideIndex,
};
export { useOnBoardSlideIndex };
