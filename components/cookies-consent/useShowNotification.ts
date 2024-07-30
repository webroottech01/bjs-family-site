import { useIsOpen } from "./more-info/store";
import {atom, useRecoilState, useSetRecoilState} from "recoil";
import { useEffect, useState, useMemo } from "react";

const readValueAtom = atom<null | boolean>({key: "cookies_read_value", default: null});

function useShowNotification(): boolean {
  const isOpen = useIsOpen();
  const [readValue, setReadValue] = useRecoilState(readValueAtom);
  const [hasRead, setHasRead] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem("answered_cookies");
    if (value !== null) {
      const parsed = value === "true" ? true : false;
      setReadValue(parsed);
    }
    setHasRead(true);
  }, []);

  const shouldShow = useMemo(() => {
    if (isOpen) { //Do not show whilst its open
      return false;
    }
    if (!hasRead) {
      return false; //Do not show whilst reading
    }
    if (readValue !== null) {
      return false;
    }
    return true;
  }, [readValue, hasRead, isOpen]);

  return shouldShow;
}

export function useGivenConsent() {
    const setGiven = useSetRecoilState(readValueAtom);
    const give = () => {
        localStorage.setItem("answered_cookies", "true");
        setGiven(true);
    }
    return give;
}

export default useShowNotification;
