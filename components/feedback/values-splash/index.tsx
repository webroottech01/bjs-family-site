import { Styleable, Button, colours } from "@bjsdistribution/components";
import styled from "styled-components";
import { up, down, only } from "styled-breakpoints";
import { useNavigateTo } from "components/about/page/AboutPage";
import handsTogetherBackground from "public/images/landing/hands-together.jpg";

import Image from "next/image";

function ValuesSplash(props: Styleable) {
  const navigateTo = useNavigateTo();
  

  return (
    <Content className={props.className}>
      <Image src={handsTogetherBackground} layout="fill" quality={100} objectFit="cover" alt="Dark image of hands together, representing unity" />
      <Title>Truthful and...</Title>
      <AuthenticSplash>Authentic</AuthenticSplash>
      <Text>
        BJS is a corporate built on compassionate values; named after Baba
        Jaswant Singh Ji - who remains the spiritual inspiration and guidance
        behind the brand after his death in 2020 – BJS has an authentic desire
        to make a lasting and positive impact on the world.
      </Text>
      <Button
        id="values-splash-go-to-our-values"
        wide
        colors="secondary"
        onClick={() => navigateTo("our values")}
      >
        Our values
      </Button>
    </Content>
  );
}

const Title = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

const AuthenticSplash = styled.span`
  font-size: 116px;
  font-weight: bold;
  transform: matrix(1, -0.09, 0.09, 1, 0, 0);
  font-family: "Eveleth";
  text-align: center;
  overflow: hidden;

  @media only screen and (max-width: 1910px) {
    font-size: 100px;
  }

  @media only screen and (max-width: 1710px) {
    font-size: 78px;
  }
  @media only screen and (max-width: 1575px) {
    font-size: 50px;
  }

  ${only("md")} {
    font-size: 113px;
  }

  ${down("sm")} {
    font-size: 60px; //Might make this 60px, breaks on Galay S5
  }

  ${down("xs")} {
    font-size: 50px;
  }

  @media only screen and (max-width: 340px) {
    font-size: 30px;
  }
`;

const Text = styled.span`
  font-size: 20px;
  text-align: center;
  font-weight: 300;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: white;

  align-items: center;

  ${Button.PlainButton} {
    margin-left: auto;
    margin-right: auto;
  }

  position: relative;

  ${Title}, ${AuthenticSplash}, ${Text}, ${Button.PlainButton} {
    z-index: 5;
  }
  /* background: url("/images/landing/hands-together.png");
  background-size: cover;
  background-repeat: no-repeat;*/

  padding: 100px;


  @media only screen and (max-width: 1600px) {
    padding: 100px 140px;
  }

  @media only screen and (max-width: 1400px) {
    padding: 100px 90px;
  }

  @media only screen and (max-width: 1200px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  ${Title} {
    margin-bottom: 50px;
  }

  ${AuthenticSplash} {
    margin-bottom: 50px;
  }

  ${Text} {
    margin-bottom: 70px;
  }

  ${Button.PlainButton} {
  /*  background: white;
    color: ${colours.black};*/
    width: min-content;
    font-family: "Eveleth";
  }

  ${down("md")} {
    padding: 100px 40px;

    ${Title} {
      margin-bottom: 16px;
    }
    ${AuthenticSplash} {
      margin-bottom: 40px;
    }
  }

  ${down("sm")} {
    padding: 189px 32px 145px 32px;
    align-items: center;

    ${Title} {
      margin-bottom: 40px;
      font-size: 26px;
    }
    ${AuthenticSplash} {
      margin-bottom: 40px;
    }
  }

  ${down("xs")} {
    background-size: auto 100%;
    background-position: center;
    padding: 100px 30px 100px 30px;
  }
`;

const Container = styled.div`
  position: relative;
`;

export default styled(ValuesSplash)``;
