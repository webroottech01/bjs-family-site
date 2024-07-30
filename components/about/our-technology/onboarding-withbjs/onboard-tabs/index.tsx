import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { down } from "styled-breakpoints";
import { OnBoardingOptions } from "../data";
import {
  useOnBoardSlideIndex,
  useSetOnBoardSlideIndex,
} from "/components/about/store";
import { tabOpacity } from "../utils";

function OnBoardingTabs(props: Styleable) {
  const currentSlideIndex = useOnBoardSlideIndex();
  const setSlide = useSetOnBoardSlideIndex();
  const setSlideIndex = (index: number) => {
    if (index === 0) {
      setSlide(0);
    } else if (index === 1) {
      setSlide(5);
    } else {
      setSlide(7);
    }
  };
  return (
    <Container className={props.className}>
      {OnBoardingOptions.map((options, index) => {
        return (
          <TabContainer
            onClick={() => setSlideIndex(index)}
            index={index}
            slideIndex={currentSlideIndex}
          >
            <TabTitle>{options.name}</TabTitle>
            {options.id !== 3 && (
              <GreyLine index={index} slideIndex={currentSlideIndex} />
            )}
          </TabContainer>
        );
      })}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  background: #f8f8f8;
  flex-direction: row;
  max-width: 185px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  position: absolute;
  right: 0px;
  top: 0px;
  bottom: 0px;
  @media only screen and (min-width: 1920px) {
    background: #f8f8f8;
    width: 256px;
    max-width: unset;
  }
  @media only screen and (max-width: 1200px) {
    flex-direction: row;
    justify-content: center;
    background: #f8f8f8;
    max-width: unset;
    position: relative;
  }
  ${down("md")} {
    flex-direction: row;
    justify-content: center;
    background: #f8f8f8;
    max-width: unset;
    position: relative;
  }
  ${down("sm")} {
    justify-content: center;
    gap: 5px;
  }
`;
const TabContainer = styled.div<{ index: number; slideIndex: number }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  opacity: ${(props) => tabOpacity(props.index, props.slideIndex)};
  font-weight: ${(props) =>
    tabOpacity(props.index, props.slideIndex) === 1 ? "bold" : "normal"};
  :hover {
    opacity: 1;
  }
  @media only screen and (max-width: 1200px) {
    flex-direction: row;
    gap: 50px;
  }
  ${down("md")} {
    flex-direction: row;
    gap: 50px;
  }
  ${down("sm")} {
    gap: 5px;
  }
`;
const TabTitle = styled.div`
  font-size: 18px;
  color: #3a3630;
  padding: 20px;
  white-space: nowrap;
  @media only screen and (max-width: 1200px) {
    font-size: 16px;
    font-weight: bold;
    padding: 24px 0px;
  }
  ${down("md")} {
    font-size: 16px;
    font-weight: bold;
    padding: 24px 0px;
  }
  ${down("sm")} {
    font-size: 12px;
    font-weight: bold;
    padding: 24px 0px;
  }
`;
const GreyLine = styled.div<{ index: number; slideIndex: number }>`
  background: ${(props) =>
    tabOpacity(props.index, props.slideIndex) === 1
      ? "transparent linear-gradient(180deg, #999794 0%, #DFDEDC 100%) 0% 0% no-repeat padding-box;"
      : "#B0AFAC"};
  border-radius: 66px;
  height: 100px;
  width: 3px;
  @media only screen and (max-width: 1200px) {
    height: 2px;
    width: 100px;
  }
  ${down("md")} {
    height: 2px;
    width: 50px;
  }
  ${down("sm")} {
    height: 2px;
    width: 10px;
  }
`;
export default styled(OnBoardingTabs)``;
