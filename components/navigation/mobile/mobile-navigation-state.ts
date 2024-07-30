import { atom, useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";

const openedState = atom<boolean>({
  key: "mobile_navigation_open",
  default: false,
});

function useIsOpen() {
  return useRecoilValue(openedState);
}

function useIsOpenState() {
  return useRecoilState(openedState);
}

function useSetOpen() {
  return useSetRecoilState(openedState);
}

function useToggle() {
  const setOpen = useSetOpen();
  const toggle = () => setOpen(old => !old);
  return toggle;
}

export { useIsOpenState, useToggle, useSetOpen };
export default useIsOpen;
