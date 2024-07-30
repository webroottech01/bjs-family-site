import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { down, up } from "styled-breakpoints";
import TalkToUS from "./talkTo-us";
import ShowCase from "./onboard-showcase";
import OnBoardingTabs from "./onboard-tabs";
import { useOnBoardSlideIndex } from "../../store";
import TalkLandscape from "./talk-landscape";
import useWindowDimensions from "/components/util/useWindowDimensions";

function OnBoardingBJS(props: Styleable) {
  const currentSlideIndex = useOnBoardSlideIndex();
  const { width } = useWindowDimensions();
  return (
    <Wrapper>
      <Container index={currentSlideIndex} className={props.className}>
        {currentSlideIndex === 0 && <TalkToUS />}
        {width < 1200 && <OnBoardingTabs />}
        <ShowCase />
      </Container>
      {width > 1200 && <OnBoardingTabs />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;
const Container = styled.div<{ index: number }>`
  display: flex;
  background-color: #ffffff;
  flex-direction: row;
  max-width: 1250px;
  margin-top: 45px;
  margin-left: 90px;
  margin-bottom: 90px;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    margin-left: unset;
    margin-top: ${(props) => (props.index === 0 ? "40px" : "unset")};
  }
  ${up("lg")} {
    max-width: unset;
  }
  ${down("sm")} {
    // padding: 20px;
    margin-top: 0px;
    margin-bottom: 20px;
  }
`;
export default styled(OnBoardingBJS)``;
