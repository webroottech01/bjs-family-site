import { useState, useEffect } from "react";

function useResponsiveWordLadderRepeat(threshold: number, repeatLarger?: number) : number {
  const [repeat, setRepeat] = useState(3);

  useEffect(() => {
    const width = window.innerWidth;
    if (width >= threshold) {
      setRepeat(repeatLarger ?? 6);
    }
  }, []);

  return repeat;
}


export default useResponsiveWordLadderRepeat