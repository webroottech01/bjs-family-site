import styled, { css } from "styled-components";
import { up, down } from "styled-breakpoints";
import useIsTabletOrSmaller, {
  useIsOnlyTablet,
} from "components/util/useIsTabletOrSmaller";
import { Styleable, colours } from "@bjsdistribution/components";
import useIsMobile from "/components/util/useIsMobile";

function DigitalRoadmap(props: Styleable) {
  const isTablet = useIsOnlyTablet();
  const isMobile = useIsMobile();
  if (isTablet) {
    return (
      <TabletContainer className={props.className}>
        {"The digital road map".split(" ").map((text) => (
          <TabletText>{text}</TabletText>
        ))}
      </TabletContainer>
    );
  }
  if (isMobile) {
    return (
      <TabletContainer className={props.className}>
        <TabletText>The digital</TabletText>
        <TabletText>roadmap</TabletText>
      </TabletContainer>
    );
  }
  return <Text>The digital roadmap</Text>;
}

const ContainerStyling = styled.div`
  position: absolute;
  transform: rotate(-6deg);
  z-index: 10;
`;

const Text = styled.span`
  opacity: 1;
  color: ${colours.black};
  font-size: 150px;
  font-family: "Eveleth";


  ${up("lg")} {
    position: absolute;
    transform: rotate(-6deg);
    z-index: 10;
    text-align: right;
    right: 10%;
    top: 60px;
    left: auto;
  }


  @media only screen and (max-width: 1720px) {
    right: 50px;
  }

  @media only screen and (max-width: 1720px) {
    font-size: 140px;
  }

  @media only screen and (max-width: 1560px) {
    font-size: 120px;
  }

  @media only screen and (max-width: 1380px) {
    font-size: 100px;
    width: 840px;
  }

  @media only screen and (max-width: 1190px) {
    width: 680px;
  }

  @media only screen and (max-width: 1135px) {
    font-size: 90px;
    width: 580px;
  }

  @media only screen and (max-width: 1075px) {
    font-size: 80px;
    width: 530px;
  }

  @media only screen and (min-width: 2150px) {
    left: 500px;
    font-size: 120px;
    white-space: nowrap;
    top: 140px;
  }






  ${down("md")} {
    left: 0;
    right: 0;
    width: auto;
    text-align: center;
    font-size: 80px;
  }

  ${down("sm")} {
    font-size: 50px;
  }
`;

const TabletContainer = styled(ContainerStyling)`
  display: flex;
  flex-direction: column;
  font-size: 70px;
  left: 30px;
  text-align: left;


`;

const TabletText = styled(Text)``;

const TextContainer = styled.div`
  display: flex;

  position: absolute;
  text-align: center;

  ${up("lg")} {
    left: 20%;
    top: 5%;
    gap: 30px;
  }
`;

export default styled(DigitalRoadmap)``;
