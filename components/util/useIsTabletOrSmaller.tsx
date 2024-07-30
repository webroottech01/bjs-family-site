import { useBreakpoint } from "styled-breakpoints/react-styled";
import { up, down, only } from "styled-breakpoints";

function useIsTabletOrSmaller() {
  const isTabletOrSmaller = useBreakpoint(down("md"));
  return isTabletOrSmaller;
}

function useIsOnlyTablet() {
  const isTabletOrSmaller = useBreakpoint(only("md"));
  return isTabletOrSmaller;
}

function useIsDesktop() {
  const isDesktopOrLarger = useBreakpoint(up("lg"));
  return isDesktopOrLarger;
}

export { useIsOnlyTablet, useIsDesktop };
export default useIsTabletOrSmaller;
