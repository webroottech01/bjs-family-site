import React from "react";
import { WithChildren, Styleable } from "@bjsdistribution/components";
import { up, down } from "styled-breakpoints";
import styled from "styled-components";

import { useIsOnlyTablet } from "components/util/useIsTabletOrSmaller";

type Props = WithChildren & Styleable;
function IntroductionPiece(props: Props) {
  const isOnlyTablet = useIsOnlyTablet();
  const children =
    React.Children.map(props.children, (element) => element) ?? [];

  if (isOnlyTablet) {
    return (
      <TabletContainer>
        <TabletHeader>{children.slice(0, 2)}</TabletHeader>
        {children.slice(2, 3)}
      </TabletContainer>
    );
  }
  return <ThreePiece className={props.className}>{props.children}</ThreePiece>;
}

const ThreePiece = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${down("sm")} {
    flex-direction: column;
  }

  ${up("lg")} {
    > :not(:last-child) {
      margin-right: 100px;
    }

    > div:nth-child(2),
    > div:nth-child(3) {
      //Target 2nd and 3rd element
      flex: 1;
    }
  }
`;

const TabletContainer = styled.div`
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    margin-bottom: 60px;
  }
`;

const TabletHeader = styled.div`
  display: flex;
  justify-content: space-between;
  > :not(:last-child) {
    margin-right: 36px;
  }
`;

export default styled(IntroductionPiece)``;
