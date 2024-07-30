import styled from "styled-components";
import { Styleable, WithChildren } from "@bjsdistribution/components";

import { Abstract } from "components/services/expectancy/entry";
import List, {
  ListItem,
} from "components/subsidiary-showcase/detailed-info/blueprint/points/List";

interface Props extends Styleable, WithChildren {
  title: string;
}

function Section({ className, title, children }: Props) {
  return (
    <Container className={className} title={title}>
      {children}
    </Container>
  );
}

const Text = styled.span`
  color: #707070;
`;

const Container = styled(Abstract)`
  li:not(:last-child) {
    margin-bottom: 13px !important;
  }

  li {
    color: #707070;

    ::after {
      top: 0.56em;
    }
  }

  ${List} {
    margin-bottom: 30px;
  }
`;

export { Text };
export default styled(Section)``;
