import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import { Styleable, Button } from "@bjsdistribution/components";

import Icon from "./Icon";

interface Props extends Styleable {
  title: string;
  onClick: () => void;
  id: string;
}

function AddEntryButton(props: Props) {
  return (
    <Container className={props.className}>
      <Icon />
      <Button id={props.id} wide onClick={props.onClick}>
        {props.title}
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  ${down("sm")} {
    ${Icon} {
      display: none;
    }
    ${Button.PlainButton} {
      width: 100% !important;
    }
  }

  ${Button.PlainButton} {
    padding: 20px 97px;
  }

  ${up("lg")} {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > :not(:last-child) {
      margin-bottom: 40px;
    }
  }

  ${down("md")} {
    align-items: center;
    justify-content: center;
    ${Button.PlainButton} {
      height: min-content;
    }

    > :not(:last-child) {
      margin-right: 40px;
    }
  }
`;

export default AddEntryButton;
