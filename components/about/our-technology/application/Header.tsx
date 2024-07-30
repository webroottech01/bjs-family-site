import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import {up, down} from "styled-breakpoints";
import { useIsDesktop } from "components/util/useIsTabletOrSmaller";

import ApplicationType, { ApplicationTypeName, Text } from "./ApplicationType";
import DoubleArrow from "/components/feedback/what-customers-think/DoubleArrow";

type Props = {
  title: string;
  type: ApplicationTypeName;
} & Styleable;

function Header(props: Props) {
  const isDesktop = useIsDesktop();
  const isTabletOrSmaller = !isDesktop;

  return (
    <Container className={props.className}>
      <TitleSection>
        <Title>{props.title}</Title>
        {isTabletOrSmaller && <Text>{props.type}</Text>}
      </TitleSection>
      {isDesktop && <ApplicationType type={props.type}/>}
      {isTabletOrSmaller && <DoubleArrow/>}
    </Container>
  );
}

const Title = styled.span`
  font-family: "Eveleth";
  font-size: 34px;

  ${down("sm")} {
    font-size: 22px;
  }
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export default styled(Header)``;
