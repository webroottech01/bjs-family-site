import React from "react";
import styled from "styled-components";
import { WithChildren, Styleable } from "@bjsdistribution/components";
import { down, only } from "styled-breakpoints";

import NavigationProps from "./navigation/Props";
import DesktopNavigation from "./navigation/DesktopNavigation";
import useIsTabletOrSmaller from "components/util/useIsTabletOrSmaller";
import TabletNavigation from "./navigation/TabletNavigation";

type Props = WithChildren & Styleable & NavigationProps;

const FirstElement = styled.div`
  padding: 50px 100px;
  background: transparent linear-gradient(360deg, #F5F0EA 0%, #E2E0DD 100%) 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;

  ${only("md")} {
    padding: 80px 40px;
  }

  ${down("sm")} {
    padding: 60px 20px;
  }
`;


function Page(props: Props) {
  const isTabletOrSmaller = useIsTabletOrSmaller();
  const navProps = { ...props };
  delete navProps.className;

  return (
    <Container className={props.className}>
      <FirstElement>
        {isTabletOrSmaller && <Title>{props.page}</Title>}
        {!isTabletOrSmaller && <DesktopNavigation {...navProps} />}
        {React.Children.toArray(props.children)[0]}
      </FirstElement>
      {React.Children.toArray(props.children).slice(1)}
      {isTabletOrSmaller && <TabletNavigation {...navProps} />}
    </Container>
  );
}

const Title = styled.span`
  text-align: center;
  font-size: 34px;
  font-family: "Eveleth";
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  ${DesktopNavigation} {
    margin-bottom: 40px;
  }

  ${Title} {
    ${only("md")} {
      margin-bottom: 43px;
    }
    ${down("sm")} {
      margin-bottom: 30px;
    }
  }
`;

export { FirstElement, Title };
export default styled(Page)``;
