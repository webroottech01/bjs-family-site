
import styled from "styled-components";
import {down} from "styled-breakpoints";

import DoubleArrow, {Props as DoubleArrowProps} from "components/feedback/what-customers-think/DoubleArrow";
import { WithChildren, Styleable } from "@bjsdistribution/components";

type Props = {
  title?: string;
} & WithChildren &
  Styleable & DoubleArrowProps;

function Page(props: Props) {
  const title = props.title ?? "Case study";
  /* 
        <DoubleArrow onClickLeft={props.onClickLeft} onClickRight={props.onClickRight} />*/
  return (
    <Container className={props.className}>
      <Header>
        <Title>{title}</Title>
      </Header>
      {props.children}
    </Container>
  );
}

const Title = styled.h3`
  font-family: "Eveleth";
  color: #14191e;
  font-size: 36px;

  ${down("md")} {
    font-size: 30px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${DoubleArrow} {
    color: #9a9793;
    font-size: 60px !important;
  }
`;
const Container = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;

  ${Header} {
    margin-bottom: 80px;
  }


  @media only screen and (max-width: 1600px) {
    padding: 70px 60px;

    ${Header} {
      margin-bottom: 60px;
    }
  }


  ${down("md")} {
    padding: 60px 40px;

    ${Header} {
      margin-bottom: 50px;
    }
  }


  ${down("sm")} {
    padding: 65px 20px;
  }
`;

export default styled(Page)``;
