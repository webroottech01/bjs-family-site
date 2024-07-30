import styled from "styled-components";
import { Styleable, Button } from "@bjsdistribution/components";
import { up, down } from "styled-breakpoints";

import logo from "/public/images/about/charity-and-community/under-one-sky.jpg";
import logoText from "/public/images/about/charity-and-community/under-one-sky-text.png";
import { faExternalLink } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UnderOneSky(props: Styleable) {
  return (
    <Container className={props.className}>
      <Title>BJS are proud supporting partners of</Title>
      <Logo src={logo.src} />
      <LogoText src={logoText.src} />
      <p>
        This wonderful not-for-profit organisation are committed to ending
        homelessness once and for all.
      </p>
      <p>
        In keeping with the compassionate values that form the foundations of
        the company, BJS seek to demonstrate the viability and necessity of
        employing those who are currently without a home in order to greatly
        reduce homelessness in the UK - and are part of an Under One Sky
        programme that offers employment opportunities and support to get people
        off the streets.
      </p>
      <a href="https://underoneskytogether.com" target="_blank">
        <Button icon={<Icon icon={faExternalLink} />}  id="under-one-sky-go-to-learn-more-about-the-charity">LEARN MORE ABOUT THE CHARITY</Button>
      </a>
    </Container>
  );
}

const LogoContainer = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
`;
const Logo = styled.img`
  width: 100%;
  max-width: 516px;
  ${down("md")} {
    align-self: center;
  }
`;

const LogoText = styled.img`
  height: 80px;
  width: 100%;
  max-width: 516px;
  margin-bottom: 40px;
  ${down("md")} {
    align-self: center;
  }
`;
const LogoTextContainer = styled.div`
  height: 80px;
  width: 100%;
  position: relative;
`;

const Title = styled.span`
  font-size: 26px;
`;

const Icon = styled(FontAwesomeIcon)`
  height: 20px;
  width: 20px !important;
  ${down("sm")} {
    height: 12px;
    width: 12px !important;
  }
`;
const ImageContainer = styled.div`
  height: 360px;
  width: 516px;

  ${down("md")} {
    height: 279px;
    width: 400px;
  }
  ${down("sm")} {
    height: 293px;
    width: 420px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 16px;
  }

  width: 40%;

  ${down("md")} {
    max-width: 100%;
    width: 100%;
    ${Title} {
      text-align: center;
    }
  }

  ${Button.PlainButton} {
    margin-top: 46px;
    width: min-content;
    text-transform: none;
    ${down("sm")} {
      font-size: 14px;
    }
    ${down("md")} {
      margin-bottom: 40px;
    }

    ${down("xs")} {
      font-size: 8px;
    }
  }

  ${Title} {
    margin-bottom: 45px;
    ${down("md")} {
      margin-bottom: 40px;
    }
    ${down("sm")} {
      margin-bottom: 20px;
    }
  }

  ${LogoContainer} {
    margin-bottom: 20px;
    
  }
  ${LogoTextContainer} {
    margin-bottom: 40px;
  }
`;
export default UnderOneSky;
