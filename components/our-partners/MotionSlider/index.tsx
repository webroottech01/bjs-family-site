import { motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { down } from "styled-breakpoints";
import getClientLogo, { Client } from "/components/util/getClientLogo";
import { Styleable } from "@bjsdistribution/components";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
type Props = {
  clients: Client[];
};
function MotionSlider(props: Styleable & Props) {
  return (
    <Container>
      <GlobalStyle />
      <Carousel
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={false}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        sliderClass="sliderClass"
      >
        {props.clients.map((client) => (
          <LogoContainer key={client}>
            <Logo src={getClientLogo(client)} />
          </LogoContainer>
        ))}
      </Carousel>
    </Container>
  );
}

const Icon = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: white;
`;
const Logo = styled.img`
    width: 130px;
    ${down("md")} {
        width: 120px;
    }
    ${down("sm")} {
        width: 130px;
    }
`;
const LogoContainer = styled.div`
  display: flex;
  height: 150px;
  align-items: center;
  justify-content: center;
`;
const GlobalStyle = createGlobalStyle`
 .react-multiple-carousel__arrow--right {
  right: calc(1% + 1px);
  ${down("md")} {
    right: calc(1% + 1px);
  }
 }
 .react-multiple-carousel__arrow--left {
  left: calc(1% + 1px);
  ${down("md")} {
    left: calc(1% + 1px);
  }
 }
`;
const Container = styled(motion.div)`display:flex;align-items:center;`;

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
