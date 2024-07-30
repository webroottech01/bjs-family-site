//import Subsidiary from "@/components/subsidiary-showcase/Subsidiary";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import Subsidiary from "../Subsidiary";

const selected = atom<Subsidiary>({
  key: "selected_subsidiary",
  default: "home delivery",
});

function useSelected(): Subsidiary {
  return useRecoilValue(selected);
}

function useSelectedState() {
  return useRecoilState(selected);
}

function useSetSelected() {
  return useSetRecoilState(selected);
}

export { useSelected, useSetSelected };
export default useSelectedState;
