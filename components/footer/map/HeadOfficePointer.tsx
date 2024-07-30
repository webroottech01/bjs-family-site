import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

function HeadOfficePointer(props: Styleable) {
  return (
    <Container className={props.className}>
      <Text>BJS head office</Text>
    </Container>
  );
}

const Text = styled.span`
  font-family: "Eveleth";
  font-size: 12px;
  color: #5f5d5b;
`;

const Container = styled.div`
  background: #fafafa 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 30px #00000029;
  border-radius: 12px;

  padding: 19px 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  z-index: 2;

  ::before {
    z-index: 1;
    position: absolute;
    bottom: -14px;
    content: "";
    width: 0;
    height: 0;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-top: 16px solid white;
  }

  ::after {
    z-index: 1;
    position: absolute;
    bottom: -20px;
    border-radius: 50%;
   // background: red;
    height: 8px;
    width: 8px;
    left: auto;
    right: auto;
    content: "";
  }
`;
export default styled(HeadOfficePointer)``;
