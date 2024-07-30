import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { down } from "styled-breakpoints";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/pro-solid-svg-icons";
import useIsMobile from "components/util/useIsMobile";

interface Props {
  required : boolean,
  title: string
}
function UploadTitle(props: Styleable & Props) {
  const isMobile = useIsMobile();
  const isRequired = props.required;
  return (
    <Container className={props.className}>
      <Icon icon={faFile} />
      <Text>{props.title}</Text>
      {isRequired && <Required>*</Required>}
    </Container>
  );
}

const Text = styled.span`
  font-family: "Eveleth";
  font-size: 18px;
`;
const Required = styled.div`
  font-size: 34px;
  color: red;
  position: absolute;
  right: 4px;
  top: -16px;
`;
const Icon = styled(FontAwesomeIcon)`
  font-size: 20px !important;
  ${down("sm")} {
    display: none;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 20px;
  }
  position: relative;
`;

export default UploadTitle;
