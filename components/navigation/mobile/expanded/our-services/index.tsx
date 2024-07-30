import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";

import ExpandedMenu from "components/navigation/mobile/expanded";
import OurServiceItem from "./item/OurServiceItem";

import { allSubsidiaries } from "components/subsidiary-showcase/Subsidiary";
import getSubsidiary from "subsidiary-config";
import Subsidiary from "components/subsidiary-showcase/Subsidiary";

import { useNavigateTo } from "components/services/useServicesState";
import { useSetOpen } from 'components/navigation/mobile/mobile-navigation-state';

function OurServicesExpanded(props: Styleable) {
  const navigateTo = useNavigateTo();
  const setNavigationOpened = useSetOpen();


  const onClick = (subsidiary: Subsidiary) => {
    navigateTo(subsidiary);
    setNavigationOpened(false);
  }

  return (
    <ExpandedMenu className={props.className}>
      {allSubsidiaries.map((subsidiary) => {
        const config = getSubsidiary(subsidiary);

        return (
          <OurServiceItem
            subsidiary={subsidiary}
            key={subsidiary}
            title={config.title}
            description={getDescription(subsidiary)}
            onClick={() => onClick(subsidiary)}
          />
        );
      })}
    </ExpandedMenu>
  );
}

const getDescription = (input: Subsidiary): string => {
  const description = getSubsidiary(input).description;
  const getFirstSentenceFromSecondEntry = () => description[1].split(".")[0];
  if (input === "home delivery" || input === "extra") {
    return getFirstSentenceFromSecondEntry();
  }
  return description[0];
};

export default styled(OurServicesExpanded)``;
