import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import { NavigationEntries } from "components/navigation/navigation-entry";
import MobileNavigationEntries from "../MobileNavigationEntries";

interface Props extends Styleable {
  entries: NavigationEntries;
}

function OpenedNavigation(props: Props) {
  return (
    <MobileNavigationEntries
      className={props.className}
      entries={props.entries}
    />
  );
}

export default styled(OpenedNavigation)``;
