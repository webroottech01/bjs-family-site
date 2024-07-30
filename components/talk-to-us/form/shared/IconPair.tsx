import styled from "styled-components";
import { IconProp, RotateProp } from "@fortawesome/fontawesome-svg-core";
import { WithChildren, Styleable, colours } from "@bjsdistribution/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props extends WithChildren, Styleable {
  icon: IconProp;
  gap?: number;
  rotation?: RotateProp;
}

function IconPair(props: Props) {
  const gap = props.gap ?? 10;
  return (
    <Container gap={gap} className={props.className}>
      <Icon
        icon={props.icon}
        rotation={props.rotation}
      />
      {props.children}
    </Container>
  );
}

const Icon = styled(FontAwesomeIcon)`
  font-size: 16px !important;
  color: ${colours.yellow};
`;

const Container = styled.div<{ gap: number }>`
  display: flex;
  align-items: center;


  > :not(:last-child) {
    margin-right: ${props => props.gap}px;
  }
`;

export default styled(IconPair)``;
