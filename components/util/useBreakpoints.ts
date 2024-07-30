import { up, only, down } from "styled-breakpoints";
import { useBreakpoint } from "styled-breakpoints/react-styled";

type Breakpoint = "xs" | "sm" | "md" | "lg";

function useBreakpoints() : Breakpoint {
  const isExtraSmall = useBreakpoint(down("xs"));
  const isSmall = useBreakpoint(only("sm"));
  const isMedium = useBreakpoint(down("md"));
  const isLarge = useBreakpoint(up("lg"));
  if (isExtraSmall) {
      return "xs";
  } else if (isSmall) {
      return "sm";
  } else if (isMedium) {
      return "md";
  } else if (isLarge) {
      return "lg";
  }
  return "lg";
}

export default useBreakpoints