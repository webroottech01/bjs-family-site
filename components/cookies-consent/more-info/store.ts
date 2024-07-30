import { atom, useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";

const isOpenAtom = atom<boolean>({
  key: "cookies_more_info_open",
  default: false,
});

function useOpenState() {
  return useRecoilState(isOpenAtom);
}

export function useClose() {
  const setOpen = useSetRecoilState(isOpenAtom);
  const close = () => setOpen(false);
  return close;
}

export function useOpen() {
  const setOpen = useSetRecoilState(isOpenAtom);
  const open = () => setOpen(true);
  return open;
}

export function useIsOpen() {
  return useRecoilValue(isOpenAtom);
}

export default useOpenState;
