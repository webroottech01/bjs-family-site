import { colours, Button } from "@bjsdistribution/components";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { only, down } from "styled-breakpoints";
import { useNavigateTo as useNavigateToService } from "components/services/useServicesState";
import { useNavigateTo as useNavigateToAbout } from "components/about/page/AboutPage";
import Image from "next/image";
import MouseScrollIndicator from "./MouseScrollIndicator";
import AnimationButton from "./AnimationButton";

function LandingSplash() {
  const navigateToService = useNavigateToService();
  const navigateToAbout = useNavigateToAbout();

  const navigateToOurValue = () => navigateToAbout("our values");

  return (
    <Container>
      <SplashImage
        src="/images/splash-background.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="right"
        priority
        alt="Splash background with hands"

      />
      <Header>
        <YellowTitle>Your delivery</YellowTitle>
        <BlackTitle>Safe in our hands-BJS</BlackTitle>
      </Header>
      <Body>
        <BodyText>
          We are a family run business with years of experience in the retail,
          transport and IT industries. We’ve combined our skills to create a new
          kind of delivery business – meeting the high standards required by
          customers like you.
        </BodyText>
        <Buttons>
          <LearnMoreButton onClick={navigateToOurValue} id="landing-go-to-learn-more">
            Learn more
          </LearnMoreButton>
          <ServiceButton onClick={() => navigateToService("home delivery")} id="landing-go-to-our-services">
            Our services
          </ServiceButton>
        </Buttons>
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

const Buttons = styled.div`
  display: flex;
  > :not(:last-child) {
    margin-right: 20px;
  }

  ${down("sm")} {
    flex-direction: column;
    > :not(:last-child) {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
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
  align-items: center;
  justify-content: center;
`;

const Text = styled(motion.span)`
  font-size: 18px;
  text-align: center;
  color: white;
`;

const BodyText = styled(Text)`
  max-width: 90ch;

  text-shadow: 0px 3px 6px #0000001a;
  @media only screen and (max-width: 1300px) {
    margin: 0px 10vw;
  }
  font-size: 20px;

  ${down("md")} {
    font-size: 16px;

    margin: 0px 120px;
  }

  ${down("sm")} {
    margin: 0px 40px;
  }

  ${down("xs")} {
    margin: 0px 5px;
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
    margin-bottom: 30px;
    margin-left: 20px;
    margin-right: 20px;
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
  font-size: 74px;
  ${ResponsiveTitleStyling};
  @media only screen and (max-width: 370px) {
    font-size: 30px;
  }

  ${down("md")} {
    font-size: 44px;
  }

  ${down("xs")} {
    font-size: 40px;
  }

  text-shadow: 0px 3px 6px #00000029;
  color: white;
`;

const Body = styled.div`
  ${ContainerStyling};

  > :not(:last-child) {
    margin-bottom: 64px;

    ${down("sm")} {
      margin-bottom: 57px;
    }
  }
`;

const Header = styled.h1`
  ${ContainerStyling};
  margin-top:0px;
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

export default LandingSplash;
