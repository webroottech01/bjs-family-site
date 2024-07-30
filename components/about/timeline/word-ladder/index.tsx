import styled from "styled-components";
import { colours } from "@bjsdistribution/components";
import { up, down, only } from "styled-breakpoints";
import RepeatedTextSplash, {
  Container as SplashContainer,
} from "components/word-ladder";
import WordLadderWithLink from "components/word-ladder/WordLadderWithLink";

import TextSplash from "./TextSplash";
import ManInRain from "./ManInRain";


import { useNavigateTo } from "components/about/page/AboutPage";

const entries: string[][] = [
  ["Family run", "Flexible"],
  ["Experience", "High Standards"],
  ["Customer Service", "Heart"],
  ["Reputation"],
];

function SmilingWhateverTheWeather() {
  const navigateTo = useNavigateTo();

  const goToOurValues = () => {
    navigateTo("our values");
  };
  return (
    <Container
      title="our values"
      description="Our values are at the heart of what we stand for and are the things we hold most dear, so everything do is driven by progression, integrity, excellence and our people."
      columns={39}
      more="read more"
      onClick={goToOurValues}
      repeat={3}
      entries={entries}
      type={"odd per"}
      id="word-ladder-go-to-our-values-read-more"
    >
      <TextSplash />
      <ManInRain />
    </Container>
  );
}

const Container = styled(WordLadderWithLink)`
  position: relative;
  ${SplashContainer} {
    top: -50px;
    left: -50px;
  }

  ::before {
    position: absolute;
    height: 100%;
    width: 100%;
    content: "";
    z-index: 4;
    background: url("/images/about/man-in-rain.png") no-repeat center;

    @media only screen and (max-width: 1400px) {
      //background: url("/images/about/man-in-rain-mid.png") no-repeat right;
      //background-position: center right;
      background: none;
    }
  }

  ${down("md")} {
    max-height: 1050px;
  }
`;

export default SmilingWhateverTheWeather;
