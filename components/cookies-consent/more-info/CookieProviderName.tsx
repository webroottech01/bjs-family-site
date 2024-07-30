import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

interface Props {
  name: string;
}

function CookieProviderName({ name, className }: Props & Styleable) {
  return (
    <Container className={className}>
      <Title>Cookies set by {name}</Title>
      <YellowAccent />
    </Container>
  );
}

const YellowAccent = styled.div`
  height: 2px;
  width: 40px;
  background: ${colours.yellow};
  border-radius: 66px;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${Title} {
      margin-bottom: 10px;
  }
`;

export default styled(CookieProviderName)``;
