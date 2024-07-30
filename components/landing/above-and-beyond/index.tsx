import { useMemo } from "react";
import styled from "styled-components";
import { colours } from "@bjsdistribution/components";
import { up, down, only } from "styled-breakpoints";

import Image from "next/image";
import WordLadderWithLink from "components/word-ladder/WordLadderWithLink";
import {
  Container as WordLadderContainer,
  Root as WordLadderRoot,
} from "components/word-ladder";
import { useNavigateTo } from "components/about/page/AboutPage";

import useBreakpoints from "components/util/useBreakpoints";

import useWindowDimensions from "components/util/useWindowDimensions";

function AboveAndBeyond() {
  const breakpoint = useBreakpoints();
  const { width } = useWindowDimensions();
  const navigateTo = useNavigateTo();

  const goToWhatMakesUsDifferent = () => {
    navigateTo("What makes BJS different");
  };

  const columns = useMemo(() => {
    if (breakpoint === "sm") {
      return 28;
    }
    return 43;
  }, [breakpoint]);

  const repeat = useMemo(() => {
    if (width >= 2000) {
      return 6;
    }
    return 3;
  }, [width]);

  return (
    <Root
      columns={columns}
      repeat={repeat}
      title="What makes BJS different"
      description="We provide the very best customer service at every stage of the delivery
      process, putting customers at the heart of everything we do – so that
      your products, reputation, customers and peace of mind really are safe
      in our hands."
      type="odd per"
      onClick={goToWhatMakesUsDifferent}
      compact={width <= 1200}
      id="above-and-beyond-go-to-learn-more"
    >
      <OptimisedHandyMen />
      <Text>Above & Beyond</Text>
    </Root>
  );
}

function OptimisedHandyMen() {
  return (
    <HandyMenContainer>
      <HandyMenMiniContainer>
        <Image lazyBoundary={"330px"} src="/images/landing/handy-men.png" layout="fill" alt="2 BJS Home Delivery handymen equipped with drills" />
      </HandyMenMiniContainer>
    </HandyMenContainer>
  );
}

const Root = styled(WordLadderWithLink)`
  ${WordLadderContainer} {
    ${up("lg")} {
      top: -100px;
      left: -50px;
    }
  }

  ${WordLadderRoot} {
    ${up("lg")} {
      max-height: 768px !important;
    }

    @media only screen and (max-width: 1200px) {
      max-height: 700px !important;
    }

    ${down("md")} {
      max-height: 610px !important;
    }

    ${down("xs")} {
      max-height: 440px !important;
    }
  }
`;

const Text = styled.span`
  position: absolute;
  top: 20%;
  transform: rotate(-6deg);
  text-transform: uppercase;
  color: ${colours.black};
  font-family: "Eveleth";
  z-index: 3;

  ${up("lg")} {
    font-size: 180px;
    white-space: nowrap;
  }

  @media only screen and (max-width: 1800px) {
    font-size: 150px;
  }

  @media only screen and (max-width: 1550px) {
    font-size: 130px;
  }

  @media only screen and (max-width: 1305px) {
    font-size: 105px;
  }

  @media only screen and (max-width: 995px) {
    font-size: 100px;
    text-align: center;
    top: 1%;
  }

  ${down("sm")} {
    top: 2%;
    left: unset;
    right: auto;
    text-align: center;
    font-size: 75px;
  }

  ${down("xs")} {
    font-size: 60px;
  }

  @media only screen and (max-width: 490px) {
    font-size: 60px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 40px;
  }
`;

const HandyMenContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: 4;
  height: 1300px;
  width: 1070px;
  left: 75px;

  @media only screen and (max-width: 1200px) {
    left: -65px;
  }

  @media only screen and (max-width: 995px) {
    width: 100%;
  }

  ${down("md")} {
    left: auto;
    height: 1000px;
    top: 55px;
  }

  @media only screen and (max-width: 745px) {
    height: 800px;
  }

  @media only screen and (max-width: 650px) {
    height: 700px;
    top: 140px;
  }

  @media only screen and (max-width: 550px) {
    height: 615px;
  }

  @media only screen and (max-width: 870px) {
    width: 100%;
  }

  ${down("xs")} {
    // top: 60px;
    height: 500px;
  }

  @media only screen and (max-width: 416px) {
    // height: 450px; //400px
    width: 100%;
  }
`;

const HandyMenMiniContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default AboveAndBeyond;
