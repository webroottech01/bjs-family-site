import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

type Props = {
  description: string[];
} & Styleable;

function Description({ description, className }: Props) {
  return (
    <Container className={className}>
      {description.map((string) => (
        <p>{string}</p>
      ))}
      {/* <Blur /> */}
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 40px;
  color: ${colours.black};
  background: white;
  max-height: 430px;
  overflow: scroll;
  position: relative;
  border-radius: 0px 0px 20px 20px;
  height: 400px;
`;
const Blur = styled.div`
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(transparent 250px, white);
`;
export default Description;
