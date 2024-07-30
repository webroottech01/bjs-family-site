import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

import NhsLogo from "components/about/charity-and-community/nhs-key-workers/NhsLogo";
import { down } from "styled-breakpoints";

export interface Props {
  title: string;
  service: string;
}

function JobInformation(props: Props & Styleable) {
  return (
    <Container className={props.className}>
      <Header>
        <NhsLogo />
        <Title>{props.title}</Title>
      </Header>
      <Service>{props.service}</Service>
    </Container>
  );
}

const Title = styled.span`
  font-size: 15px;
`;

const Service = styled.span`
  font-size: 13px;
  // white-space: nowrap;
  opacity: 0.7;
`;

const Header = styled.div`
  display: flex;
  gap: 15px;

  ${NhsLogo} {
    height: 24px;
  }
`;

const Container = styled.div`
  background: #005eb8;
  color: white;
  display: flex;
  flex-direction: column;
    > :not(:last-child) {
      margin-bottom: 17px;
    }
  padding: 30px 30px;
  height: 150px;
  ${down("sm")} {
    padding: 20px 20px;
  }
`;

export default styled(JobInformation)``;
