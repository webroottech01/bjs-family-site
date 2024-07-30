import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";

import ExpandedMenu from "components/navigation/mobile/expanded";
import ExpandedEntry from "./AboutUsItem";

import AboutPage, {
  allPages,
  useNavigateTo,
} from "components/about/page/AboutPage";
import { useSetOpen } from 'components/navigation/mobile/mobile-navigation-state';

import ourStoryImg from "public/images/header/mobile/about/our-story.jpg";
import ourTechnologyImg from "public/images/header/mobile/about/our-technology.jpg";
import trainingAcademyImg from "public/images/header/mobile/about/training-academy.jpg";
import ourValues from "public/images/header/mobile/about/our-values.jpg";
import charityAndCommunityImg from "public/images/header/mobile/about/charity-and-community.jpg";
import whatMakesUsDifferentImg from "public/images/header/mobile/about/what-makes-us-different.jpg";

function AboutUsExpanded(props: Styleable) {
  const navigateTo = useNavigateTo();
  const setOpen = useSetOpen();

  const onClick = (page: AboutPage) => {
    navigateTo(page);
    setOpen(false);
  };

  return (
    <ExpandedMenu className={props.className}>
      {allPages.map((entry) => {
        return (
          <ExpandedEntry
            image={getImage(entry)}
            key={entry}
            name={entry}
            onClick={() => onClick(entry)}
          />
        );
      })}
    </ExpandedMenu>
  );
}

const getImage = (input: AboutPage): StaticImageData => {
  switch (input) {
    case "our story":
      return ourStoryImg;
    case "our values":
      return ourValues;
    case "What makes BJS different":
      return whatMakesUsDifferentImg;
    case "Charity and community":
      return charityAndCommunityImg;
    case "Our technology":
      return ourTechnologyImg;
    case "Training academy":
      return trainingAcademyImg;
  }
};

export default styled(AboutUsExpanded)``;
