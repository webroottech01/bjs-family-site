import { useEffect, useState } from "react";
import {atom, useSetRecoilState, useRecoilValue} from "recoil";

const widthState = atom<number>({
  key: "subsidiary_showcase_width",
  default: -1,
});

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  const result = {
    width,
    height,
  };
  return result;
}

export function useGlobalWidth() {
  return useRecoilValue(widthState);
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: -1,
    height: 0,
  });
  const setWidth = useSetRecoilState(widthState);

  function handleResize() {
   
    const dimensions = getWindowDimensions();
    setWindowDimensions(dimensions);
    setWidth(dimensions.width);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowDimensions.width === -1) {
      handleResize();
    }
  }, [windowDimensions]);

  return windowDimensions;
}
