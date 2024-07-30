import { useBreakpoint } from "styled-breakpoints/react-styled";
import { down } from "styled-breakpoints";

function useIsMobile() {
  const isSmall = useBreakpoint(down("sm"));
  return isSmall;
}

export default useIsMobile;