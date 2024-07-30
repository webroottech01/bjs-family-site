import { atom, useRecoilState } from "recoil";

const submitState = atom<boolean>({
  key: "talk_to_us_submitting",
  default: false,
});

function useSubmitState() {
  return useRecoilState(submitState);
}

export default useSubmitState;
