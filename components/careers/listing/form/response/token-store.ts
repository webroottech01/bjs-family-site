import { atom, useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";

const token = atom<string | undefined>({
  key: "careers_captcha_token",
  default: undefined,
});

function useToken() {
  return useRecoilValue(token);
}

function useTokenState() {
  return useRecoilState(token);
}

function useSetTokenState() {
  return useSetRecoilState(token);
}

export { useToken, useTokenState, useSetTokenState };
