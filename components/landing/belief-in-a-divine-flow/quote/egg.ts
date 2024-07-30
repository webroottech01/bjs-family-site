import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
const enabledState = atom<boolean>({ key: "enabled", default: false });

function useEnabled() {
  return useRecoilState(enabledState);
}

function useIsEnabled() {
  return useRecoilValue(enabledState);
}

function useSetEnabled() {
  return useSetRecoilState(enabledState);
}

export { useEnabled, useIsEnabled, useSetEnabled };
