import { motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/pro-solid-svg-icons";

import Slide from "./Slide";
import { down } from "styled-breakpoints";
import { ISliderProps, IInMedia } from "pages/api/handler/Types";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function MotionSlider(props: ISliderProps) {
  const { content } = props;
  if(content === undefined || !content.length) {
    return null
  }
  return (
    <Container>
      <GlobalStyle />
      <Carousel
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        sliderClass="sliderClass"
      >
        {content.map((slide: IInMedia) => {
          return <Slide key={slide.id} slide={slide} />
        })}
      </Carousel>
    </Container>
  );
}

const Icon = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: white;
`;
const GlobalStyle = createGlobalStyle`
 .react-multiple-carousel__arrow--right {
  right: calc(1% + 1px);
  ${down('md')} {
    right: calc(1% + 1px);
  }
 }
 .react-multiple-carousel__arrow--left {
  left: calc(0.5% + 7px);
  ${down('md')} {
    left: calc(1.5% + 5px);
  }
  ${down('sm')} {
    left: calc(4% + 1px);
  }
 }
`;
const Container = styled(motion.div)``;
const Slider = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
`;
const ArrowLeft = styled(motion.div)`
  background: #1b2024 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 20px #00000059;
  height: 80px;
  width: 80px;
  border-radius: 40px;
  position: absolute;
  left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;
const ArrowRight = styled(ArrowLeft)`
  right: 5px;
  left: unset;
`;
export default MotionSlider;
