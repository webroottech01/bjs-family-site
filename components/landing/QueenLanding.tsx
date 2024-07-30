import { colours, Button } from "@bjsdistribution/components";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { only, down } from "styled-breakpoints";
import Image from "next/image";
import MouseScrollIndicator from "./MouseScrollIndicator";
import AnimationButton from "./AnimationButton";

function QueenLandingSplash() {


  return (
    <Container>
      <SplashImage
        src="/images/queenElizabethFeature.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="right"
        priority
        alt="Splash background with crest and flag"

      />
      <Header>
        <BlackTitle>Queen Elizabeth II</BlackTitle>
        <DatesTitle>1926 - 2022</DatesTitle>
      </Header>
      <Body>
        <TextContainer>
            <BodyText>Strength. </BodyText>
            <BodyText>Leadership. </BodyText>
            <BodyTextContainer>
                <BodyTextUnderline>Family.</BodyTextUnderline>
                <UnderlineImage src="/images/familyUnderline.svg"/>
            </BodyTextContainer>
        </TextContainer>
        <TextContainer>
            <LineText>Paying our respects to the longest reigning monarch in British history.</LineText>
        </TextContainer>
      </Body>
      <MouseScrollIndicator />
      <BottomGradient />
    </Container>
  );
}

const ServiceButton = styled(AnimationButton)`
  background: white;
  color: ${colours.black};
`;
const LearnMoreButton = styled(AnimationButton)`
  background-color: transparent;
  color: white;
`;
const BottomGradient = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 440px;
  //mix-blend-mode: screen;
  background-image: linear-gradient(rgba(23, 28, 30, 0), rgba(23, 28, 30, 1));
`;
const SplashImage = styled(Image)`
  border: 1px solid red;
`;

const UnderlineImage = styled.img`
    height: 6.5px;
    width: 100%
    max-width: 156px;
    position: relative;
`;

const LandingButton = styled(Button)`
  padding: 17px 34px;
  background: white;
  color: ${colours.black};

  ${down("sm")} {
    padding: 20px 100px;
    border-radius: 66px;
  }

  ${down("xs")} {
    padding: 20px 60px;
  }
`;

const TransparentButton = styled(LandingButton)`
  background: transparent;
  border: thin solid white;
  color: white;

  :hover {
    background: white;
    color: ${colours.yellow};
    border: 1px solid red;
  }
`;

const ContainerStyling = css`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

const Text = styled(motion.div)`
  font-size: 18px;
  text-align: left;
  color: white;

  ${down("md")} {
    text-align: left; 
    }

    ${down("sm")} {
    text-align: center; 
    }

    ${down("xs")} {
    text-align: center; 
    }
`;

const TextContainer = styled(motion.div)`
  margin-left: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${down("md")} {
    margin-left: 75px;
    flex-wrap: wrap;
  }

  ${down("sm")} {
    margin-left:0px;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  ${down("xs")} {
    marigin-left: 0px;
    flex-wrap: wrap;
    justify-content:center;
  }
`;

const LineText = styled(Text)`
    max-width: 90ch;
    padding-left: 10px;

    font: normal normal normal 44px/32px Gotham Book;

    text-shadow: 0px 3px 6px #0000001a;
    @media only screen and (max-width: 1300px) {
    }
    font-size: 20px;

    ${down("md")} {
    font-size: 16px;
    }

    ${down("sm")} {
    font-size: 16px;
    }

    ${down("xs")} {
    font-size: 16px;
    }
`;

const BodyText = styled(Text)`
  max-width: 90ch;
  padding-right: 10px;

  font: normal normal normal 44px/32px Gotham Book;

  text-shadow: 0px 3px 6px #0000001a;
  @media only screen and (max-width: 1300px) {
  }
  font-size: 45px;

  ${down("md")} {
    font-size: 40px;
  }

  ${down("sm")} {
    font-size: 30px;
  }

  ${down("xs")} {
    font-size: 30px;
    padding-top: 5px;
  }
`;

const BodyTextUnderline = styled(Text)`
  max-width: 90ch;
  padding-bottom: 8px;
  padding-top: 0px;

  font: normal normal 900 44px/32px Gotham;

  text-shadow: 0px 3px 6px #0000001a;
  @media only screen and (max-width: 1300px) {
  }
  font-size: 45px;

  ${down("md")} {
    font-size: 40px;
    padding-top: 5px;
  }

  ${down("sm")} {
    font-size: 30px;
    padding-top: 5px;
  }

  ${down("xs")} {
    font-size: 30px;
    padding-top: 5px;
  }
`;

const BodyTextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: auto;

  ${down("sm")} {
    width: 100%;
  }

  ${down("xs")} {
    width: 100%;
  }
`;

const ResponsiveTitleStyling = css`
  ${down("md")} {
    font-size: 30px;
  }

  ${down("xs")} {
    font-size: 26px;
  }
`;

const Title = styled(Text)`
  font-size: 60px;
  font-family: "Eveleth";
  text-transform: uppercase;

  ${down("sm")} {
  }
`;

const DateTitle = styled(Text)`
    font: normal normal 100 80px/32px Gotham;
    font-size: 60px;
    text-transform: uppercase;

    ${down("sm")} {
    }
`;

const YellowTitle = styled(Title)`
  font-size: 72px;
  ${ResponsiveTitleStyling};
  background: transparent linear-gradient(95deg, #fdbb30 0%, #ff9a9a 100%) 0% 0%
    no-repeat padding-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BlackTitle = styled(Title)`
  font-size: 70px;
  ${ResponsiveTitleStyling};
  margin-bottom: 25px;
  margin-left: 100px;
  @media only screen and (max-width: 370px) {
    font-size: 30px;
  }

  ${down("md")} {
    font-size: 44px;
    margin-left: 75px;
  }

  ${down("sm")} {
    font-size: 44px;
    margin-left: 0px;
  }

  ${down("xs")} {
    font-size: 40px;
    margin-left: 0px;
  }

  text-shadow: 0px 3px 6px #00000029;
  color: white;
`;

const DatesTitle = styled(DateTitle)`
  font-size: 80px;
  ${ResponsiveTitleStyling};
  margin-left: 100px;


  ${down("md")} {
    font-size: 44px;
    margin-left: 75px;
  }

  ${down("sm")} {
    font-size: 35px;
    margin-left: 0px;
  }

  ${down("xs")} {
    font-size: 35px;
    margin-left: 0px;
  }

  text-shadow: 0px 3px 6px #00000029;
  color: white;
`;

const Body = styled.div`
  ${ContainerStyling};

  > :not(:last-child) {
    margin-bottom: 64px;

    ${down("sm")} {
    }
  }
`;

const Header = styled.div`
  ${ContainerStyling};
  padding-bottom: 100px;
`;

const BackgroundStyling = css`
  background-image: url("/images/splash-background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 1;
  content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  ${down("sm")} {
    //background-size: 300%;
  }
  ${down("md")} {
    background-position: center;
  }
`;

const Container = styled.div`
  ${ContainerStyling};
  position: relative;

  ${Header}, ${Body} {
    z-index: 5;
  }
  min-height: 88vh;

  @media only screen and (max-width: 375px) { //Screen is so small that we need a large viewport
    min-height: 95vh;
  }

  > :not(:last-child) {
    margin-bottom: 30px;
  }
  ${down("sm")} {
    > :not(:last-child) {
      margin-bottom: 0px;
    }
    /*
    padding-top: 88px;
    padding-bottom: 154px;*/
  }

  ${Button.PlainButton} {
    font-family: "Eveleth";
    font-size: 18px;
    border: thin solid white;
    max-width: 240px;
  }

  ${only("md")} {
   // min-height: 920px;
  }

  ${MouseScrollIndicator} {
    position: absolute;
    bottom: 60px;
  }
`;

export default QueenLandingSplash;
