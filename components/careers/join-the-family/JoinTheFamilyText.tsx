import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { up, down } from "styled-breakpoints";

function JoinTheFamilyText(props: Styleable) {
  return <Text className={props.className}>Join the family</Text>;
}

const Text = styled.span`
  position: absolute;
  transform: rotate(-6deg);
  z-index: 1;
  color: ${colours.black};
  font-family: "Eveleth";

  ${up("lg")} {
    top: 20%;
    font-size: 180px;
  }

  @media only screen and (max-width: 1700px) {
    right: -50px;
  }

  @media only screen and (max-width: 1645px) {
    right: -95px;
    top: 80px;
  }

  @media only screen and (max-width: 1600px) {
    top: -57px;
  }

  @media only screen and (max-width: 1250px) {
    left: 0;
    font-size: 120px;
    top: 25px;
  }


  ${down("md")} {
    font-size: 100px;
    left: 50px;
    line-height: 1.1;
  }

  ${down("sm")} {
    font-size: 50px;
    left: 20%;
    top: 10%;
  }
`;

export default JoinTheFamilyText;
