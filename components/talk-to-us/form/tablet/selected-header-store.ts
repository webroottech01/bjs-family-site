import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

type HeaderName = "talk to us" | "request quote";

const selectedState = atom<HeaderName>({
  key: "selected_header",
  default: "talk to us",
});

function useSelected() {
  return useRecoilState(selectedState);
}

function useGetSelected() {
  return useRecoilValue(selectedState);
}

function useSetSelected() {
  return useSetRecoilState(selectedState);
}

export { useGetSelected, useSetSelected };
export default useSelected;
