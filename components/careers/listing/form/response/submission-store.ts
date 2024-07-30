import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from "recoil";

const submitting = atom<boolean>({
  key: "careers_submitting",
  default: false,
});

function useIsSubmitting() {
  return useRecoilValue(submitting);
}

function useSubmittingState() {
  return useRecoilState(submitting);
}

function useSetSubmittingState() {
    return useSetRecoilState(submitting);
}

export { useIsSubmitting, useSubmittingState, useSetSubmittingState };
