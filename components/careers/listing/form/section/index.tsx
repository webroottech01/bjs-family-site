import { useState } from "react";
import styled from "styled-components";
import { Styleable, WithChildren } from "@bjsdistribution/components";

import { Props as TitleProps } from "./header/Title";

import Header from "./header";
import { Container, ChildrenContainer } from "./Styles";

type Props = {
  title: TitleProps;
  optional?: boolean;
} & Styleable &
  WithChildren;

function FormSection(props: Props) {
  const [expanded, setExpanded] = useState(true);
  const toggle = () => setExpanded((old) => !old);
  return (
    <Container className={props.className}>
      <Header
        title={props.title}
        optional={props.optional ?? false}
        expanded={expanded}
        onToggle={toggle}
      />
      {expanded && <ChildrenContainer>{props.children}</ChildrenContainer>}
    </Container>
  );
}
export default styled(FormSection)``;
