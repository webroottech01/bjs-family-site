import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import NHSLogo from '/public/images/about/charity-and-community/nhs-logo.png'

function NhsLogo(props: Styleable) {
  return (
    <Image
      src={NHSLogo.src}
      className={props.className}
    />
  );
}

const Image = styled.img``;
export default styled(NhsLogo)``;
