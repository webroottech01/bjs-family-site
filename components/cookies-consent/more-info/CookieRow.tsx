import styled from "styled-components";
import { up, down, only } from "styled-breakpoints";
import { Styleable, colours } from "@bjsdistribution/components";

interface Props {
  name: string;
  description: string;
  duration: string;
  dataType: string;
}

function CookieRow({
  name,
  description,
  duration,
  dataType,
  className,
}: Props & Styleable) {
  return (
    <Container className={className}>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Duration>{duration}</Duration>
      <Text>{dataType}</Text>
    </Container>
  );
}

const Text = styled.td`
  font-size: 14px;
`;

export const Description = styled(Text)`
  padding: 0px 30px;
  ${up("lg")} {
    max-width: 470px;
  }
`;

const Duration = styled(Text)``
const Name = styled(Text)`
  text-decoration: italic;
  margin-right: 10px;
`;

const Container = styled.tr`
  padding: 20px 40px;
`;

export default styled(CookieRow)``;
