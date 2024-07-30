import AboutDropdown from "./navigation-item/about-dropdown";

import NavigationEntry from "./navigation-item/NavigationItem";
import { useRef } from "react";
function AboutNavigationItem() {
  const ref = useRef();
  return (
    <NavigationEntry
      ref={ref}
      text="about BJS"
      overlay={{
        component: <AboutDropdown />,
        placement: "bottomLeft",
      }}
      key="about bjs"
    />
  );
}

export default AboutNavigationItem;
