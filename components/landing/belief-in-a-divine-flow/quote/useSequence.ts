import { useEffect, useRef } from "react";

function useSequence(target: string, onTrigger: () => void) {
  const pointer = useRef(0);

  const increment = () => {
    const old = pointer.current;
    const newPointer = old + 1;
    if (newPointer === target.length) {
      onTrigger();
      pointer.current = -1;
      return;
    }
    pointer.current = newPointer;
  };

  const reset = () => {
    pointer.current = 0;
  };

  useEffect(() => {
    document.body.addEventListener("keydown", handleEvent);
    return () => document.body.removeEventListener("keydown", handleEvent);
  }, []);

  const handleEvent = (e: KeyboardEvent) => {
   // e.preventDefault();
    if (e.repeat) {
      return;
    }
    if (pointer.current === -1) {
      return; //Already complete
    }
    const key = e.key;
    const wantedKey = target[pointer.current];
    if (wantedKey === key) {
      increment();
    } else {
      reset();
    }
  };

  return pointer;
}

export default useSequence;
