import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { down } from "styled-breakpoints";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/pro-solid-svg-icons";
import useIsMobile from "components/util/useIsMobile";

function Title(props: Styleable) {
  const isMobile = useIsMobile();

  return (
    <Container className={props.className}>
      <Icon icon={faFile} />
      <Text>Supporting documents</Text>
    </Container>
  );
}

const Text = styled.span`
  font-family: "Eveleth";
  font-size: 20px;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 26px !important;
  ${down("sm")} {
    display: none;
  }
`;
const Container = styled.div`
  display: flex;
  > :not(:last-child) {
    margin-right: 20px;
  }
`;

export default Title;
