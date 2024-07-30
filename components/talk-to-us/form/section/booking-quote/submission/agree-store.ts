import { atom, useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useSetTokenState } from "components/careers/listing/form/response/token-store";


const agreeState = atom<boolean>({
  key: "talk_to_us_agree_to_policy",
  default: false,
});

function useAgreeState(): [boolean, (newValue: boolean) => void] {
  const [agreed, setAgreed] = useRecoilState(agreeState);
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

function useAgreedValue() {
  return useRecoilValue(agreeState);
}

function useResetAgreement() {
  return useResetRecoilState(agreeState);
}

export { useAgreeState, useAgreedValue, useResetAgreement };
