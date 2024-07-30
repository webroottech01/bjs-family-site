import styled from "styled-components";
import { Styleable, colours, Button } from "@bjsdistribution/components";
import { useSwipeable } from "react-swipeable";
import { OnBoardingKeys, PartnersKeys } from "../data";
import {
  useOnBoardSlideIndex,
  useSetOnBoardSlideIndex,
} from "/components/about/store";
import Image from "next/image";
import WeReceive from "./Anim/WeReceive";
import WeBook from "./Anim/WeBook";
import WeRoute from "./Anim/WeRoute";
import WeDeliver from "./Anim/WeDeliver";
import WeStore from "./Anim/WeStore";
import Retail from "./Anim/Retail";
import Customer from "./Anim/Customer";
import Integrations from "./Anim/Integrations";
import { down, up } from "styled-breakpoints";
import TalkLandscape from "../talk-landscape";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/pro-regular-svg-icons";
import useIsMobile from "/components/util/useIsMobile";
import Lottie from "react-lottie-player";
import { useEffect, useState, useRef } from "react";
import Amazon from "/public/images/about/our-technology/partnerLogos_SVG_Amazon.svg";
import Wayfier from "/public/images/about/our-technology/partnerLogos_SVG_Wayfair.svg";
import Shopify from "/public/images/about/our-technology/partnerLogos_SVG_Shopify.svg";
import useIsTabletOrSmaller from "/components/util/useIsTabletOrSmaller";
import useWindowDimensions from "/components/util/useWindowDimensions";

function ShowCase(props: Styleable) {
  const setSlideIndex = useSetOnBoardSlideIndex();
  const currentSlideIndex = useOnBoardSlideIndex();
  const initialRender = useRef<boolean>(true);
  const titleContainerRef = useRef<any>();
  const { width } = useWindowDimensions();
  const isMobile = useIsMobile();
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      NextHandler();
    },
    onSwipedRight: () => {
      PrevHandler();
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  const NextHandler = () => {
    if (currentSlideIndex === OnBoardingKeys.length - 1) {
      setSlideIndex(0);
      return;
    }
    setSlideIndex(currentSlideIndex + 1);
  };
  const PrevHandler = () => {
    if (currentSlideIndex === 0) {
      setSlideIndex(OnBoardingKeys.length - 1);
      return;
    }
    setSlideIndex(currentSlideIndex - 1);
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      const yOffset = -100;
      const element = titleContainerRef.current;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      if (currentSlideIndex >= 0) {
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  }, [currentSlideIndex]);

  const [animationData, setAnimationData] = useState();

  const fetchAndSet = async () => {
    const result = await fetch(
      "https://assets6.lottiefiles.com/private_files/lf30_rj9vlioa.json"
    );
    const json = await result.json();
    setAnimationData(json);
  };

  useEffect(() => {
    fetchAndSet();
  }, []);
  return (
    <Container
      index={currentSlideIndex}
      className={props.className}
      ref={titleContainerRef}
    >
      <TitleContainer>
        <TitleWrapper>
          <Title>{OnBoardingKeys[currentSlideIndex].name}</Title>
          <YellowLine />
        </TitleWrapper>
        <GreyArrowLine>
          <GreyLine />
          <GreyArrow />
        </GreyArrowLine>
        {currentSlideIndex < OnBoardingKeys.length - 1 && (
          <TitleWrapperRight
            onClick={() => {
              setSlideIndex(currentSlideIndex + 1);
            }}
          >
            <Title>{OnBoardingKeys[currentSlideIndex + 1].name}</Title>
            <YellowLine />
          </TitleWrapperRight>
        )}
        {!isMobile && (
          <ArrowContainer>
            <Arrow
              icon={faChevronLeft}
              onClick={() => {
                PrevHandler();
              }}
            />
            <Arrow
              icon={faChevronRight}
              onClick={() => {
                NextHandler();
              }}
            />
          </ArrowContainer>
        )}
      </TitleContainer>
      <AnimContainer {...handlers} index={currentSlideIndex}>
        <Desc index={currentSlideIndex}>
          {OnBoardingKeys[currentSlideIndex].desc.map((value) => {
            return (
              <div>
                <div>{value}</div>
                <br />
              </div>
            );
          })}
          {currentSlideIndex === 7 && !useIsTabletOrSmaller() && width > 1200 && (
            <PartnerContainer>
              <PartnerImages>
                <LogoImg src={Amazon.src} />
                <LogoImg src={Wayfier.src} />
                <LogoImg src={Shopify.src} />
              </PartnerImages>
              <PartnerKeysContainer>
                {PartnersKeys.map((key) => {
                  return (
                    <PartnerKey>
                      <SmallDot></SmallDot>
                      {key}
                    </PartnerKey>
                  );
                })}
              </PartnerKeysContainer>
            </PartnerContainer>
          )}
        </Desc>
        {getAnimations(currentSlideIndex)}
      </AnimContainer>
      <DonContainer>
        {OnBoardingKeys.map((key, index) => {
          return (
            <Dot
              key={key.id}
              selected={index === currentSlideIndex}
              onClick={() => {
                setSlideIndex(index);
              }}
            />
          );
        })}
        {useIsTabletOrSmaller() && (
          <SwipeGasture loop animationData={animationData} play />
        )}
      </DonContainer>
      {currentSlideIndex > 0 && !isMobile && <TalkLandscape />}
    </Container>
  );
}
const Container = styled.div<{ index: number }>`
  display: flex;
  background-color: #fff;
  margin-top: 90px;
  margin-left: ${(props) => (props.index === 0 ? "60px" : "unset")};
  min-width: 500px;
  min-height: ${(props) => (props.index === 0 ? "600px" : "unset")};
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 300px;
  @media only screen and (max-width: 1200px) {
    margin-left: unset;
    overflow: hidden;
    min-width: unset;
    margin-right: unset;
    padding: 0px 40px;
    margin-top: 40px;
  }
  ${down("sm")} {
    min-height: unset;
    padding: 0px 20px;
  }
  @media only screen and (max-width: 1800px) and (min-width: 1400px) {
    margin-top: 0px;
  }
`;
const ArrowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
const Arrow = styled(FontAwesomeIcon)`
  font-size: 50px !important;
  width: 22px !important;
  height: 61px;
  cursor: pointer;
  color: #706c66;
  margin-bottom: 10px;
  :hover {
    color: ${colours.yellow};
  }
  ${down("sm")} {
    font-size: 40px;
  }
`;
const AnimContainer = styled.div<{ index: number }>`
  display: flex;
  flex-direction: ${(props) => (props.index === 0 ? "column" : "row")};
  gap: ${(props) => (props.index === 0 ? "10px" : "60px")};
  width: ${(props) => (props.index === 0 ? "100%" : "100%")};
  min-height: ${(props) => (props.index === 0 ? "unset" : "400px")};
  margin-top: 30px;
  align-items: flex-start;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    min-height: unset;
    margin-bottom: 40px;
  }
  ${down("sm")} {
    gap: 10px;
  }
`;
const DonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 22px;
  justify-content: center;
  width: 100%;
  align-items: center;
  z-index: 10;
  flex: 1;
  ${down("sm")} {
    flex: unset;
    gap: 10px;
  }
`;
const SwipeGasture = styled(Lottie)`
  width: 97px;
  height: 97px;
  right: 0px;
  position: absolute;
`;
const Dot = styled.div<{ selected: boolean }>`
  background: ${(props) => (props.selected ? "#615E59" : "#3a3630")};
  width: ${(props) => (props.selected ? "14px" : "10px")};
  height: ${(props) => (props.selected ? "14px" : "10px")};
  opacity: ${(props) => (props.selected ? "0.6" : "0.3")};
  border-radius: ${(props) => (props.selected ? "10px" : "5px")};
  cursor: pointer;
  transition: 0.3s;
  :hover {
    height: 14px;
    width: 14px;
    border-radius: 10px;
    opacity: 0.6;
    ${down("sm")} {
      height: 14px;
      width: 14px;
      border-radius: 7px;
    }
  }
  ${down("sm")} {
    width: ${(props) => (props.selected ? "14px" : "10px")};
    height: ${(props) => (props.selected ? "14px" : "10px")};
  }
`;
const SmallDot = styled.div`
  width: 6px;
  height: 6px;
  background: #000000 0% 0% no-repeat padding-box;
  opacity: 0.4;
  border-radius: 3px;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  width: 100%;
  ${down("sm")} {
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const TitleWrapperRight = styled(TitleWrapper)`
  opacity: 0.25;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;
const Title = styled.div`
  color: #888075;
  font-size: 26px;
  font-family: "Eveleth";
  white-space: nowrap;
  ${down("sm")} {
    font-size: 16px;
  }
`;
const GreyArrowLine = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
`;
const GreyArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid #e1dfdc;
`;
const GreyLine = styled.div`
  background: #888075 0% 0% no-repeat padding-box;
  border-radius: 66px;
  opacity: 0.15;
  height: 2px;
  flex: 1;
`;
const YellowLine = styled(GreyLine)`
  background: #feba30 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 60px;
  height: 4px;
  margin-top: 8px;
  flex: unset;
`;
const Desc = styled.div<{ index: number }>`
  font-size: 14px;
  max-width: 400px;
  min-width: ${(props) => (props.index === 5 ? "300px" : "unset")};
  color: #707070;
  // margin-bottom: 40px;
  @media only screen and (min-width: 1900px) {
    max-width: ${(props) => (props.index === 0 ? "700px" : "400px")};
    font-size: 15px;
  }
  @media only screen and (max-width: 1200px) {
    max-width: unset;
  }
  ${down("sm")} {
    font-size: 14px;
  }
`;
const PartnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
const PartnerImages = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const LogoImg = styled.img`
  height: 30px;
`;
const PartnerKeysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  margin-top: 30px;
`;
const PartnerKey = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
  @media only screen and (min-width: 1450px) {
    font-size: 14px;
  }
`;
export default styled(ShowCase)``;
function getAnimations(currentSlideIndex: number) {
  switch (currentSlideIndex) {
    case 0:
      return <WeReceive />;
    case 1:
      return <WeBook />;
    case 2:
      return <WeRoute />;
    case 3:
      return <WeDeliver />;
    case 4:
      return <WeStore />;
    case 5:
      return <Retail />;
    case 6:
      return <Customer />;
    case 7:
      return <Integrations />;
    default:
      return <WeReceive />;
  }
}
