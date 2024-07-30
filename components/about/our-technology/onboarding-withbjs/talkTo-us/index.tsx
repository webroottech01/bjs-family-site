import styled from "styled-components";
import { Styleable, colours, Button } from "@bjsdistribution/components";
import { up, down } from "styled-breakpoints";
import backgroundImg from "public/images/about/our-technology/backgrounds_Onboarding.jpg";
import Bubble from "public/images/about/our-technology/Icons_TalkToUs.svg";
import Image from "next/image";
import TalkToUsButton from "components/talk-to-us/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/pro-solid-svg-icons";
import { useState } from "react";
import { useIsOnlyTablet } from "/components/util/useIsTabletOrSmaller";
import useIsMobile from "/components/util/useIsMobile";

function TalkToUS(props: Styleable) {
  const [showHide, setShowHide] = useState(true);
  const isTablet = useIsOnlyTablet();
  const isMobile = useIsMobile();

  const hideShow = () => {
    return (
      <HideShow
        onClick={() => {
          setShowHide(!showHide);
        }}
      >
        {showHide ? "Hide" : "Show"}
        <Icon showHide={showHide} icon={showHide ? faMinus : faPlus} />
      </HideShow>)
  }

  return (
    <Container className={props.className}>
      <TitleContainer>
        <Line />
        <Title>Onboarding with BJS</Title>
        <Line />
      </TitleContainer>
      <SubHead>couldn't be easier!</SubHead>
      {showHide && (
        <>
          <TextContent>
            BJS recognises the challenges of moving data within a complex supply chain. Integrations can be complex and expensive but we don’t think getting up and running with a delivery partner should be tedious. We provide a number of ready to go integrations with leading WMS, ERP and Order Management Systems.

          </TextContent>
          <TextContent>
            If you love APIs as much as we do, we have a comprehensive suite of order management APIs which can get our partners up and running quickly and efficiently.
          </TextContent>
          <Disclaimer>
            Discuss your requirements in further detail with our team...
          </Disclaimer>
          {!isMobile && <TalkToUsButton desktop />}
        </>
      )}
      {isMobile && (
        <HideShowContainer>
          {hideShow()}
          <TalkToUsButton desktop />
        </HideShowContainer>
      )}
      {isTablet && hideShow()}
    </Container>
  );
}

const HideShowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

const HideShow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  ${up("sm")} {
    position: absolute;
    right: 40px;
    top: 60px;
  }
`;

const Icon = styled(FontAwesomeIcon) <{ showHide: boolean }>`
  color: ${(props) => (props.showHide ? "#888075" : "#FEBA30")};
  font-size: 32px;
`;
const Container = styled.div`
  display: flex;
  padding: 35px 35px;
  flex-direction: column;
  max-width: 400px;
  margin-top: 90px;
  background-size: cover;
  background-position: right;
  border-radius: 20px;
  background-image: url(${backgroundImg.src});
  position: relative;
  @media only screen and (max-width: 1800px) and (min-width: 1400px) {
    margin-top: 0px;
  }
  @media only screen and (max-width: 1200px) {
    max-width: unset;
    width: 100%;
    margin-top: unset;
    width: calc(100% - 80px);
    align-self: center;
    margin-bottom: 40px;
  }
  ${Button.PlainButton} {
    width: 182px;
    font-size: 14px;
    margin-top: 20px;
    background-color: #feba30;
    color: #5f5d5b;
    border: none;
    :hover {
      background-color: #fff;
      color: #5f5d5b !important;
    }
    ${down("sm")} {
      margin-top: 0;
    }
  }
  ${down("md")} {
    padding: 35px;
  }
  ${down("sm")} {
    padding: 20px;
    width: calc(100% - 40px);
    margin-top: 40px;
  }
`;
const BubbleIcon = styled(Image)`
  :hover path {
    fill: red;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  ${down("sm")} {
    gap: 5px;
    align-self: center;
  }
`;
const Title = styled.div`
  font-family: "Eveleth";
  font-size: 20px;
  color: #feba30;
  text-transform: uppercase;
  ${down("sm")} {
    font-size: 18px;
  }
`;
const Line = styled.div`
  width: 17px;
  height: 2px;
  background: #feba30 0% 0% no-repeat padding-box;
  border-radius: 66px;
`;
const SubHead = styled(Title)`
  background: #3a3630 0% 0% no-repeat padding-box;
  border-radius: 6px;
  color: #fff;
  font-size: 25px;
  color: #ffffff;
  margin-top: 8px;
  text-align: center;
  ${down("md")} {
    width: fit-content;
    padding: 10px 20px;
    font-size: 24px;
  }
  ${down("sm")} {
    font-size: 18px;
    line-height: 2;
    width: 90%;
    align-self: center;
    padding: 4px 10px;
  }
`;
const TextContent = styled.div`
  font-size: 16px;
  color: #ffffff;
  margin-top: 20px;
  ${down("sm")} {
    font-size: 15px;
    text-align: center;
  }
`;
const Disclaimer = styled.div`
  color: #C2C2C0;
  margin-top: 100px;
  font-size: 14px;
  ${down("md")} {
    margin-top: 40px;
  }
  ${down("sm")} {
    margin-top: 40px;
    text-align: center;
  }
`;
export default styled(TalkToUS)``;
