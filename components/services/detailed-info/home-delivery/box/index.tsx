import styled from "styled-components";
import useIsTabletOrSmaller from "components/util/useIsTabletOrSmaller";

import BoxProps from "./BoxProps";
import TabletBox from "./TabletBox";
import DesktopBox from "./DesktopBox";

function Box(props: BoxProps) {
  const isTablet = useIsTabletOrSmaller();
  if (isTablet) {
    return <TabletBox {...props} />;
  }
  return <DesktopBox {...props} />;
}

export default styled(Box)``;
