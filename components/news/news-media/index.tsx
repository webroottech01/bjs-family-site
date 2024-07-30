import { faAngleLeft, faAngleRight } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MotionSlider from "components/util/MotionSlider";
import { getMedia } from "pages/api/handler/Api";
import { useEffect, useState } from "react";
import { down } from "styled-breakpoints";
import styled from "styled-components";
import Slide from "/components/util/MotionSlider/Slide";
import useIsMobile from "/components/util/useIsMobile";
import { useIsOnlyTablet } from "/components/util/useIsTabletOrSmaller";
import useWindowDimensions from "/components/util/useWindowDimensions";
import { IInMedia } from "/pages/api/handler/Types";
function NewsMedia() {
  const [media, setMedia] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const { width } = useWindowDimensions();
  const isTabOnly = useIsOnlyTablet();
  const isMobOnly = useIsMobile();
  useEffect(() => {
    const getMediaContent = async () => {
      const mediaContent = await getMedia();
      setMedia(mediaContent);
    };
    getMediaContent();
  }, []);
  const onLeftClick = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(media.length - 3);
    }
  };
  const onRightClick = () => {
    if(width > 1300) {
      if (slideIndex < media.length - 3) {
        setSlideIndex(slideIndex + 1);
      } else {
        setSlideIndex(0);
      }
    } else {
      if (slideIndex < media.length - 1) {
        setSlideIndex(slideIndex + 1);
      } else {
        setSlideIndex(0);
      }
    }
  };
  const MentionInMediaNav = (width: number, media: any) => {
    if (width > 1300 && !isMobOnly) {
      return (
        <>
          <Slide key={media[slideIndex].id} slide={media[slideIndex]} />
          <Slide key={media[slideIndex + 1].id} slide={media[slideIndex + 1]} />
          <Slide key={media[slideIndex + 2].id} slide={media[slideIndex + 2]} />
        </>
      );
    } else if (width < 1300 && !isMobOnly && !isTabOnly) {
      return <Slide key={media[slideIndex].id} slide={media[slideIndex]} />;
    } else if (isTabOnly && !isMobOnly) {
      return <Slide key={media[slideIndex].id} slide={media[slideIndex]} />;
    } else if (isMobOnly && !isTabOnly) {
      return (
        <>
          {media.map((slide: IInMedia, index: number) => {
            return <Slide key={slide.id} slide={slide} />;
          })}
        </>
      );
    }
  };
  return (
    <Container>
      <Headline>mentioned in the media</Headline>
      {media.length && (
        <MediaContainer>
          <ArrowContainer>
            <ArrowButton onClick={onLeftClick}>
              <Icon icon={faAngleLeft} />
            </ArrowButton>
            <ArrowButton onClick={onRightClick}>
              <Icon icon={faAngleRight} />
            </ArrowButton>
          </ArrowContainer>
          {MentionInMediaNav(width, media)}
        </MediaContainer>
      )}
    </Container>
  );
}
const Icon = styled(FontAwesomeIcon)`
  height: 35px;
  width: 35px !important;
  ${down("md")} {
    font-size: 35px !important; 
  }
`;
const MediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  margin: 0px auto;
  align-items: center;
  justify-content: center;
  gap: 40px;
  ${down("sm")} {
    overflow-x: scroll;
    justify-content: unset;
    align-items: unset;
  }
`;
const Container = styled.div`
  background: transparent url("/images/news/mentionedinmedia.png") 0% 0%
    no-repeat padding-box;
  padding: 40px;
  background-repeat: repeat;
  ${down("sm")} {
    background-size: cover;
  }
`;
const Headline = styled.div`
  font-weight: 950;
  font-family: "Eveleth";
  font-size: 40px;
  color: white;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 60px;
  ${down("sm")} {
    font-size: 20px;
    margin-bottom: 40px;
  }
`;
const ArrowButton = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  background: #1b2024;
  box-shadow: 0px 3px 20px #00000059;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 1300px) and (max-width: 1500px) {
    height: 60px;
    width: 60px;
    border-radius: 30px;
  }
  z-index: 10;
  cursor: pointer;
`;
const ArrowContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  justify-content: space-between;
  width: 100%;
  width: 1630px;

  @media only screen and (min-width: 1500px) and (max-width: 1700px) {
    width: 1410px;
  }
  @media only screen and (min-width: 1300px) and (max-width: 1500px) {
    width: 1220px;
  }
  @media only screen and (max-width: 1300px) {
    width: 800px;
  }
  ${down("md")} {
    width: calc(100% - 80px);
  }
  ${down("sm")} {
    display: none;
  }
`;
export default NewsMedia;
