import { Styleable } from "@bjsdistribution/components";
import styled, { css } from "styled-components";
import { down, only } from "styled-breakpoints";

import AbstractEntry from "./AbstractEntry";

interface Props extends Styleable {
  title: string;
  entries: string[];
}

function BulletpointEntry(props: Props) {
  return (
    <AbstractEntry title={props.title} className={props.className}>
      <Container>
        {props.entries.map((entry) => (
          <li key={entry}>{entry}</li>
        ))}
      </Container>
    </AbstractEntry>
  );
}

const ResetListStyling = css`
  ul {
    margin-block-start: 0em;
    padding-inline-start: 1.2em;
    margin-bottom: 0;

    li:not(:last-child) {
      margin-bottom: 4px;

      ${down("md")} {
        margin-bottom: 17px;
      }
    }
  }
`;
const Container = styled.ul`
  display: grid;

  justify-content: space-between;
  grid-gap: 13px;
  width: 100%;

  li::marker {
    width: 6px;
    height: 6px;
    color: rgba(0, 0, 0, 0.4);
  }

  grid-template-columns: repeat(1, 1fr);

  ${only("md")} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${ResetListStyling};

  li {
    margin-bottom: 0px !important;
  }
`;

export { Container as BulletpointContainer, ResetListStyling };
export default styled(BulletpointEntry)``;
