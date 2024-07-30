import { Styleable, WithChildren, colours } from "@bjsdistribution/components";
import styled from "styled-components";
import {down} from "styled-breakpoints";
import { ResetListStyling } from "./BulletpointEntry";

interface Props extends Styleable, WithChildren {
  title: string;
}

const Title = styled.h3`
  font-family: "Eveleth";
  font-size: 16px;
  color: #615e59;
  margin-top:0px;
`;

const Seperator = styled.div`
  border-radius: 66px;
  background: ${colours.yellow};
  min-height: 4px;
  content: "";
  width: 60px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${Title} {
    margin-bottom: 18px;
  }
  ${Seperator} {
    margin-bottom: 40px !important;

    ${down("sm")} {
      margin-bottom: 30px;
    }
  }
  ${ResetListStyling};
`;

function AbstractEntry(props: Props) {
  return (
    <Container className={props.className}>
      <Title>{props.title}</Title>
      <Seperator />
      {props.children}
    </Container>
  );
}

export { Title, Seperator };
export default styled(AbstractEntry)``;
