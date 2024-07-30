import { motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";
import Carousel from "react-multi-carousel";
import {
  haulageClients,
  constructITClients,
  Client,
  paths,
} from "/components/our-partners/partners";
import { up, down } from "styled-breakpoints";
import useIsMobile from "/components/util/useIsMobile";
import useIsTabletOrSmaller, {
  useIsDesktop,
} from "components/util/useIsTabletOrSmaller";
import "react-multi-carousel/lib/styles.css";
import Subsidiary from "/components/subsidiary-showcase/Subsidiary";

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
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
};

const basePath = process.env["NEXT_PUBLIC_CONTENT_RESOURCE"];

function MotionSlider(props: any) {
  const { clients, services } = props;
  const maxWidth = Math.max.apply(
    Math,
    clients.map(getDimensions).map((dimensions: any) => dimensions[0])
  );

  const getSubpath = (input: Client): string => {
    const result = paths[input];
    return result;
  };

  const getSubsidiary = (input: Client): string => {
    if (constructITClients.includes(input)) return "construct_it";
    else if (haulageClients.includes(input)) return "haulage";
    else return "home_delivery";
  };

  const getLogo = (client: Client): string => {
    const subsidiary = getSubsidiary(client);
    const subPath = getSubpath(client);
    return `${basePath}/bjs-family/partner_logos/${subsidiary}/partnerLogos_${subPath}`;
  };

  const isMobile = useIsMobile();
  const isTabletOrSmaller = useIsTabletOrSmaller();
  const isDesktop = useIsDesktop();
  return (
    <Container>
      <GlobalStyle subsidiary={services} />
      <Carousel
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={true}
        shouldResetAutoplay={false}
        transitionDuration={500}
        // additionalTransfrom={-20 * 1} //add padding right and left 20px
        removeArrowOnDeviceType={["tablet", "mobile"]}
        autoPlay={isDesktop ? false : true}
        partialVisible={false}
        containerClass="carousel-container"
        itemClass="carousel-item"
        sliderClass="sliderClass"
      >
        {clients.map((client: Client) => {
          const src = getLogo(client);
          const [width, height] = isMobile
            ? getMobileDimensions(client)
            : isTabletOrSmaller
            ? getTabletDimensions(client)
            : getDimensions(client);
          return (
            <LogoContainer width={maxWidth} key={client}>
              <Logo src={src} width={width} height={height} />
            </LogoContainer>
          );
        })}
      </Carousel>
    </Container>
  );
}
const getMobileDimensions = (input: Client): [number, number?] => {
  switch (input) {
    case "Aldi": //Fall through
    case "GRSRoadstone":
      return [90, 60];
    case "KTCEdibles":
      return [100, 100];
    case "NectarSleep": //Fall through
    // case "TaskConsumerProducts":
    //   return [120, 100];
    case "CookersOvens":
      return [160, 100];
    case "CBS": //Fall through
    case "TaylorMaxwell":
    case "JulianBowen":
    case "RicherSounds":
    case "OliverBonas":
      return [150, 100];
    default:
      return [130, 100];
  }
};

const getTabletDimensions = (input: Client): [number, number?] => {
  switch (input) {
    case "AggregateIndustries":
      return [150, 100];
    // case "TaskConsumerProducts":
    //   return [130, 100];
    case "GRSRoadstone":
    case "KTCEdibles":
      return [100, 100];
    // case "IbstockBrickWire":
    //   return [160, 100];
    default:
      return [180, 100];
  }
};

const getDimensions = (input: Client): [number, number?] => {
  switch (input) {
    case "SecretLab": //Fall through
    // case "TaskConsumerProducts":
    //   return [130, 45];
    case "NectarSleep":
      return [130, 25];
    case "BedKingdom": //Fall through
    case "AggregateIndustries":
      return [190, 65];
    case "Aldi":
      return [190, 80];
    case "RicherSounds":
      return [190, 30];
    case "CotswoldCo":
      return [170, 65];
    case "Forterra": //Fall through
    case "Tarmac":
      return [150, 45];
    case "GRSRoadstone": //Fall through
    // case "IbstockBrickWire":
    //   return [120, 45];
    case "KTCEdibles":
      return [120, 70];
    case "CookersOvens":
    case "CycleUK":
    default:
      return [190, 45];
  }
};

const LogoContainer = styled.div<{ width: number }>`
  ${up("lg")} {
    width: ${(props) => props.width}px;
  }
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img<{ height?: number; width?: number }>`
  margin: 0 auto;
  max-width: 100% !important;
  @media only screen and (max-width: 1500px) and (min-width: 992px) {
    padding: 0px 10px;
  }
  object-fit: scale-down;
  ${down("sm")} {
    padding: 0px 5px;
  }
`;

const GlobalStyle = createGlobalStyle<{ subsidiary: Subsidiary }>`
  .carousel-container {
    @media only screen and (max-width: 1500px) and (min-width: 992px) {
      width: 880px;
  }
    width: 1188px;
    height: 186px;
    position: initial;
    ${up("lg")} {
      ${(props) => props.subsidiary === "haulage" && "justify-content: center"};
    }
  }
  .carousel-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-multi-carousel-dot--active button {
    background: #7B7E80 !important;
    border-color: #7B7E80 !important;
    width: 14px !important;
    height: 14px !important;
  }
  .react-multi-carousel-dot button{
    background: #BDBEBF;
    border-color: #BDBEBF;
    width: 10px;
    height: 10px;
  } 
  .react-multiple-carousel__arrow::before {
    color: #d2d3d4;
    font-size: 40px;
    :hover{
        color: #65686A;
    }
  }

  .react-multiple-carousel__arrow {
    background: #fff;
    border: 2px solid #d2d3d4;
    border-radius: 48px;
    width: 65px;
    height: 65px;
    transition: none;
    z-index: 1;
    :hover{
        border: 2px solid #65686A;
        background: #fff;
        transition: none;
    }
    :hover::before{
        color: #65686A;
    }
  }

 .react-multiple-carousel__arrow--right {
  right: calc(1% + 1px);
 }
 .react-multiple-carousel__arrow--left {
  left: calc(1% + 1px);
 }
`;
const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export default MotionSlider;
