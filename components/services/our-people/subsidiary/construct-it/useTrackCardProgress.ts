import { useEffect } from "react";

function useTrackCardProgress(cards: any[], containerRef: any, refs: any) {
  const callback = (entries: any, observer: any) => {
    for (const entry of entries) {
      const isVisible = entry.intersectionRatio === 1;
      const innerText = entry.target.innerText.split("\n")[0];
      const foundIndex = cards.findIndex((card) => card.title === innerText);
      if (isVisible) {
        if (foundIndex != 0) {
          //Progress
        }
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      threshold: 1.0,
      root: containerRef.current,
    });
    for (const ref of refs.current) {
      observer.observe(ref);
    }
  }, [refs]);
  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        containerRef.current!.scrollWidth -
        document.documentElement.clientWidth;
      const scroll = `${totalScroll / windowHeight}`;

      //setScroll(scroll);
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });
  return -1;
}

export default useTrackCardProgress;
