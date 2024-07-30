import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import { useState, ReactElement, useMemo } from "react";
import { colours, Styleable } from "@bjsdistribution/components";
import Page, {
  Header,
  ExplanativeQuote,
} from "components/services/case-study/blueprint";

interface Props extends Styleable {
  pages: ReactElement[];
  title?: string;
}

function Slideshow(props: Props) {
  const [index, setIndex] = useState(0);

  const total = useMemo(() => props.pages.length, [props.pages]);

  const onClickLeft = () => {
    setIndex((old) => {
      if (old === 0) {
        return total - 1;
      }
      return old - 1;
    });
  };

  const onClickRight = () => {
    setIndex((old) => {
      if (old === total - 1) {
        return 0;
      }
      return old + 1;
    });
  };

  return (
    <Container title={props.title} onClickLeft={onClickLeft} onClickRight={onClickRight}>
      {props.pages[index]}
    </Container>
  );
}

const Container = styled(Page)`
  ${ExplanativeQuote} {
  }

  @media only screen and (min-width: 1601px) {
    padding-bottom: 130px;
  }
`;

export default styled(Slideshow)``;
