import styled from "styled-components";
import path from "components/about/timeline/path";
import { borderRadius } from "components/about/timeline/entry/SupportingMedia";

const Container = styled.div`
  background: url(${path}/happy-guy.jpg) no-repeat;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  //padding-bottom: 30px;
  min-height: 250px;
  background-position: center;
  border-top-left-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};
`;

const Grey = styled.span`
  font-family: Eveleth;
  font-size: 25px;
  color: #695f50;
`;

const White = styled.span`
  font-family: "Eveleth";
  font-size: 40px;
  color: white;
  position: relative;
  top: -15px;
`;

function Header() {
  return (
    <Container>
      <Grey>Choice of day</Grey>
      <White>Delivery</White>
    </Container>
  );
}

export default styled(Header)``;
