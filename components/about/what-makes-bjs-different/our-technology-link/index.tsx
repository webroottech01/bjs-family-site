import WordLadderLink from "components/word-ladder/WordLadderLink";
import WordLadderWithLink from "components/word-ladder/WordLadderWithLink";
import { Styleable, colours } from "@bjsdistribution/components";
import styled from "styled-components";
import { down } from "styled-breakpoints";
import {useEffect, useState} from "react";

import ourTechnology from "public/images/about/what-makes-us-different/our-technology.png";
import WordLadder, {
  Container as WordLadderContainer,
} from "components/word-ladder";
import DigitalRoadmapText from "./DigitalRoadmapText";
import { useNavigateTo } from "components/about/page/AboutPage";

const PhoneImage = styled.img`
  position: absolute;
  z-index: 10;
  overflow: visible;
  height: 800px;
  left: 100px;
  top: -20px;

  ${down("md")} {
    left: auto;
    right: 0px;
    height: 600px;
    top: 0px;
  }

  @media only screen and (max-width: 767px) {
    top: 20%;
  }

  @media only screen and (max-width: 375px) {
    top: 40%;
  }

  @media only screen and (min-width: 478px) and (max-width: 768px) {
    top: 30%;
  }

  ${down("sm")} {
    right: 0px;
    height: auto;
    //top: 40%;
    width: 65%;
    left: 17%;
    bottom: 0px;
    overflow: hidden;
    z-index: 1;
  }
`;

const Root = styled.div`
  position: relative;

  ${down("md")} {
    overflow-x: hidden;
    overflow-y: visible;
  }
`;

const Container = styled(WordLadderWithLink)`
  // max-height: 900px;

  ${down("md")} {
  }

  ${WordLadderContainer} {
    max-height: 900px;
    top: -100px;
    left: -50px;

    ${down("md")} {
      max-height: 600px;
    }
  }

  ${down("sm")} {
    ${WordLadderLink} {
      padding: 60px 30px;
      border-top-left-radius: 10px;
    }
  }
`;

const entries = [
  ["Customer service", "Heart"],
  ["Reputation"],
  ["Family run", "Flexible"],
  ["Experience", "High standards"],
];

function OurTechnologyLink(props: Styleable) {
  const navigateTo = useNavigateTo();
  const [repeat, setRepeat] = useState(3);

  useEffect(() => {
    const width = window.innerWidth;
    if (width >= 2025) {
      setRepeat(6);
    }
  }, []);

  const goToTechnology = () => navigateTo("Our technology");

  return (
    <Root>
      <Container
        id="our-technology-link-go-to-read-more"
        className={props.className}
        title="Our technology"
        description="As a fast-growing group of delivery business’ BJS needs a smooth road to run on. Ours is paved with cutting edge technology. By investing in IT we ensure we are driven by excellence from the inside out."
        columns={45}
        repeat={repeat}
        entries={entries}
        type="odd per"
        more="read more"
        onClick={goToTechnology}
      >
        <DigitalRoadmapText />
        <PhoneImage src={ourTechnology.src} />
      </Container>
    </Root>
  );
}

export default styled(OurTechnologyLink)``;
