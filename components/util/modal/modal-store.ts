import {
  atom,
  useRecoilState,
  useSetRecoilState,
  useRecoilValue,
} from "recoil";

const showingBackgroundState = atom<boolean>({
  key: "showing_background",
  default: true,
});

function useShowingBackground() {
  return useRecoilState(showingBackgroundState);
}

function useSetShowingBackground() {
  return useSetRecoilState(showingBackgroundState);
}

function useIsHidingBackground() {
  const isShowing = useRecoilValue(showingBackgroundState);
  return !isShowing;
}

export { useShowingBackground, useSetShowingBackground, useIsHidingBackground };
