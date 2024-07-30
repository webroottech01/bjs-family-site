import { atom, useRecoilState, useRecoilValue } from "recoil";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useSetTokenState } from "components/careers/listing/form/response/token-store";

const agreedState = atom<boolean>({
  key: "job_agreed_to_policy",
  default: false,
});

const workInUKState = atom<boolean>({
  key: "job_agreed_to_work_in_uk",
  default: false,
});

function useAgreedState(): [boolean, (newValue: boolean) => void] {
  const [agreed, setAgreed] = useRecoilState(agreedState);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const setToken = useSetTokenState();
  const setAgreedWrapper = async (newValue: boolean) => {
    if (!executeRecaptcha) {
      console.log(`Recaptcha not ready`);
      return;
    }

    const token = await executeRecaptcha("action");
    if (!token) {
      console.log("No token");
      return;
    }
    setToken(token);
    setAgreed(newValue);
  };

  return [agreed, setAgreedWrapper];
}

function useIsAgreedState(): [boolean, (newValue: boolean) => void] {
  const [agreed, setAgreed] = useRecoilState(workInUKState);
  const setAgreedWrapper = async (newValue: boolean) => {
    setAgreed(newValue);
  };

  return [agreed, setAgreedWrapper];
}

function useIsAgreed() {
  return useRecoilValue(agreedState);
}

function useIsAgreedWorkInUK() {
  return useRecoilValue(workInUKState);
}

export { useAgreedState, useIsAgreed, useIsAgreedState, useIsAgreedWorkInUK };
