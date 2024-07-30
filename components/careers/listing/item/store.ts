import { atom, useRecoilState, useSetRecoilState } from "recoil";

const scrollToAtom = atom<string | undefined>({
  key: "scroll_to_listing",
  default: undefined,
});

function useSetScrollTo() {
  return useSetRecoilState(scrollToAtom);
}

function useScrollTo() {
  return useRecoilState(scrollToAtom);
}

export { useSetScrollTo };
export default useScrollTo;
