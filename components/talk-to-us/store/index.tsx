import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  useResetRecoilState,
  SetterOrUpdater,
} from "recoil";

import Subsidiary from "components/subsidiary-showcase/Subsidiary";
import { useResetAgreement } from "../form/section/booking-quote/submission/agree-store";

const isOpenState = atom<boolean>({
  key: "is_open",
  default: false,
});

const selectedSubsidiary = atom<Subsidiary | undefined>({
  key: "talk_to_us_selected_subsidiary",
  default: undefined,
});

function useSelectedSubsidiary() {
  return useRecoilState(selectedSubsidiary);
}

function useSelectedSubsidiaryValue() {
  return useRecoilValue(selectedSubsidiary);
}

function useResetSelectedSubsidiary() {
  return useResetRecoilState(selectedSubsidiary);
}

function useSetSelectedSubsidiary() {
  const resetAgreement = useResetAgreement();

  const internalSet = useSetRecoilState(selectedSubsidiary);
  const select = (newSubsidiary: Subsidiary | undefined) => {
    internalSet(newSubsidiary);
    resetAgreement();
  };

  return select;
}

function useIsOpen() {
  return useRecoilState(isOpenState);
}

function useSetOpen() {
  const setInternal = useSetRecoilState(isOpenState);
  const setSubsidiary = useSetSelectedSubsidiary();

  const setOpen = (value: boolean) => {
    if (!value) {
      setSubsidiary(undefined);
    }
    setInternal(value);
  };

  return setOpen;
}

export {
  useSelectedSubsidiary,
  useSetSelectedSubsidiary,
  useSelectedSubsidiaryValue,
  useResetSelectedSubsidiary,
};
export { useSetOpen };
export default useIsOpen;
