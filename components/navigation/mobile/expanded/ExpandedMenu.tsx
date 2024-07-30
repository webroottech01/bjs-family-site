import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import { DropdownName } from "components/navigation/desktop/navigation-item/TippyContainer";

import AboutUsExpanded from "./about-us";
import OurServicesExpanded from "./our-services";

type Props = {
  dropdownName: DropdownName;
} & Styleable;

function ExpandedMenu(props: Props) {
  const name = props.dropdownName.toLowerCase();
  const className = props.className;
  if (name === "about") {
    return <AboutUsExpanded className={className} />;
  } else if (name === "services") {
    return <OurServicesExpanded className={className} />;
  }
  throw new Error(`Cannot find expanded menu for ${name}`);
}

export default styled(ExpandedMenu)``;
