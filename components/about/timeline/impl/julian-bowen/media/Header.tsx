import styled from "styled-components";
import path from "components/about/timeline/path";
import { borderRadius } from "components/about/timeline/entry/SupportingMedia";

const Image = styled.img`
 // background: url(${path}/walking.jpg) no-repeat;
//  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border-top-left-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};
  padding: 0px !important;
`;

function Header() {
  return <Image src={`${path}/walking.jpg`}/>
}

export default styled(Header)``;
