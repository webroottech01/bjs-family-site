import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import { Styleable } from "@bjsdistribution/components";
import ContentPiece from "./ContentPiece";

interface Props extends Styleable {
  description: string;
  author: string;
  italic?: boolean;
}

function ExplanativeQuote(props: Props) {
  const description = `"${props.description}"`;
  const italic = props.italic ?? true;

  return (
    <Container className={props.className}>
      <Italic italic={italic}>{description}</Italic>
      <Explanation>explains {props.author}</Explanation>
    </Container>
  );
}

const Italic = styled.span<{ italic: boolean }>`
  ${(props) => props.italic && "font-style: italic;"};
`;
const Explanation = styled.span`
  color: rgba(58, 54, 48, 0.65);
`;

const Container = styled(ContentPiece)`
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 40px;
  }

  ${up("lg")} {
    flex-basis: 33%;
  }

  ${down("sm")} {
    > :not(:last-child) {
      margin-bottom: 28px;
    }
  }
`;

export default styled(ExplanativeQuote)``;
