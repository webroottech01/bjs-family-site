import styled from "styled-components";
import { colours } from "@bjsdistribution/components";
import { ReactElement, forwardRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/pro-solid-svg-icons";

import TippyContainer, { DropdownName } from "./TippyContainer";
import useIsSelected, { getName } from "./useIsSelected";
import AbstractNavigationItem from "./AbstractNavigationItem";

interface Props {
  text: string;
  overlay?: Overlay;
  onClick?: () => void;
}

type Overlay = {
  placement: string;
  component: ReactElement;
};

const NavigationEntryIndex = forwardRef((props: Props, ref: any) => {
  const isSelected = useIsSelected(props.text);
  const component = <NavigationEntry {...props} />;
  if (props.overlay) {
    const dropdownName = getName(props.text) as DropdownName;

    return (
      <AbstractNavigationItem isSelected={isSelected}>
        <TippyContainer
          component={props.overlay.component}
          dropdownName={dropdownName}
          ref={ref}
        >
          <Container>
            <Text>{props.text}</Text>
            <Icon icon={faChevronDown} />
          </Container>
        </TippyContainer>
      </AbstractNavigationItem>
    );
  }
  return component;
});

const Icon = styled(FontAwesomeIcon)`
  font-size: 15px !important;
`;

function NavigationEntry({ text, onClick }: Props) {
  const isSelected = useIsSelected(text);
  return (
    <AbstractNavigationItem isSelected={isSelected}>
      <Container onClick={onClick}>
        <Text>{text}</Text>
      </Container>
    </AbstractNavigationItem>
  );
}

const Text = styled.span`
  text-transform: capitalize;
  font-size: 16px;
  font-weight: bold;
`;

const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #5f5d5b;
  position: relative;


  > :not(:last-child) {
    margin-right: 12px;
  }

  :hover {
    ${Text}, ${Icon} {
      color: ${colours.yellow};
    }
  }
`;

export default NavigationEntryIndex;
