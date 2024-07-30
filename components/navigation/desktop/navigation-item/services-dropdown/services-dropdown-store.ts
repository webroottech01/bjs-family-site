import Subsidiary from "components/subsidiary-showcase/Subsidiary";
import { atom, useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";

const currentHoveredState = atom<Subsidiary>({
  key: "services_dropdown_hovered",
  default: "home delivery",
});

function useCurrentHovered() {
  return useRecoilValue(currentHoveredState);
}

function useSetCurrentHovered() {
  return useSetRecoilState(currentHoveredState);
}

function useHoveredState() {
  return useRecoilState(currentHoveredState);
}

export {useSetCurrentHovered, useHoveredState };
export default useCurrentHovered