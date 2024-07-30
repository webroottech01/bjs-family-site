import styled, { css } from "styled-components";
import { Styleable, WithChildren, colours } from "@bjsdistribution/components";
import { down } from "styled-breakpoints";
import { motion } from "framer-motion";

type Props = Styleable &
  WithChildren & {
    text: string;
    inline?: boolean;
    relativeToQuote?: boolean;
  };

const Text = styled(motion.span)`
  ${down("sm")} {
    font-size: 20px;
  }
`;
export const QuoteStyling = css`
  font-size: 100px;
  font-weight: bold;
  font-style: italic;
  color: ${colours.yellow};
  content: open-quote;

  line-height: 0.8;
`;

const QuoteMark = styled.span`
  position: relative;
  ::before {
    position: absolute;
    // left: -17px;
    left: -10px;
    top: -50px;
    ${QuoteStyling};
  }

  ::after {
    content: no-close-quote;
  }
`;

const InlineMark = styled.span`
  ::before {
    ${QuoteStyling};
  }

  ::after {
    content: no-close-quote;
  }
`;

const Container = styled.div<{ inline: boolean }>`
  display: flex;
  font-size: 22px;
  flex-direction: ${(props) => (props.inline ? "row" : "column")};
  padding-top: 50px;

  ${InlineMark} {
    margin-right: 32px;
  }
`;

const Content = styled(motion.div)`
  display: flex;

  > :not(:last-child) {
    margin-right: 40px;
  }
`;

function LargeQuote(props: Props) {
  const inline = props.inline ?? false;
  const relativeToQuote = props.relativeToQuote ?? false;
  return (
    <Container
      className={relativeToQuote ? undefined : props.className}
      inline={inline}
    >
      {inline && <InlineMark />}
      {!inline && <QuoteMark />}
      <Content>
        <Text
          className={relativeToQuote ? props.className : undefined}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {props.text}
        </Text>
        {props.children}
      </Content>
    </Container>
  );
}

export { Text, Content, QuoteMark };
export default styled(LargeQuote)``;
