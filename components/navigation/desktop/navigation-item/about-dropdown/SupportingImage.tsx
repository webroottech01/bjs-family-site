import styled from "styled-components";
import { motion } from "framer-motion";

import defaultImg from "public/images/header/about/default.png";
import ourStoryImg from "public/images/header/about/our-story.png";
import ourTechnology from "public/images/header/about/our-technology.png";
import ourValues from "public/images/header/about/our-values.png";
import whatMakesUsDifferent from "public/images/header/about/what-makes-bjs-different.png";
import trainingAcademy from "public/images/header/about/training-academy.png";
import charity from "public/images/header/about/charity.png";

import Splash from "./AboutSplash";
import AboutPage from "components/about/page/AboutPage";

interface Props {
  entry: AboutPage;
}

function SupportingImage({ entry }: Props) {
  return (
    <Splash>
      <Image
        key={entry}
        src={getImage(entry).src}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5 },
        }}
        exit={{ y: 0, opacity: 0, transition: { duration: 0.5 } }}
      />
    </Splash>
  );
}

const Image = styled(motion.img)`
  z-index: 50;
  position: absolute;
  left: 0px;
  bottom: 0px;
`;

const getImage = (input: AboutPage) => {
  switch (input) {
    case "our story":
      return ourStoryImg;
    case "Our technology":
      return ourTechnology;
    case "our values":
      return ourValues;
    case "What makes BJS different":
      return whatMakesUsDifferent;
    case "Charity and community":
      return charity;
    case "Training academy":
      return trainingAcademy;
    default:
      return defaultImg;
  }
};

export default SupportingImage;
