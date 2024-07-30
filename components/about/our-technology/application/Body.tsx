import styled from "styled-components";
import { Styleable, WithChildren, Button } from "@bjsdistribution/components";
import { down } from "styled-breakpoints";

import { useIsDesktop } from "components/util/useIsTabletOrSmaller";

type Props = {
  image?: JSX.Element;
} & Styleable &
  WithChildren;

function Body(props: Props) {
  const isDesktop = useIsDesktop();
  const isTabletOrSmaller = !isDesktop;

  if (isTabletOrSmaller) {
    return (
      <Container className={props.className}>
        {props.image}
        <ChildrenContainer>
          {props.children}
          <SeeDemoButton>See demo</SeeDemoButton>
        </ChildrenContainer>
      </Container>
    );
  }

  return <Container className={props.className}>{props.children}</Container>;
}

const SeeDemoButton = styled(Button)``;

const ChildrenContainer = styled.div`
  display: flex;

  ${down("md")} {
    flex-direction: column;

    ${SeeDemoButton} {
      margin-top: 40px;
    }
  }
`;

const Container = styled.div`
  display: flex;

  font-size: 16px;
  ${down("md")} {
    gap: 50px;
    justify-content: space-between;
  }

  ${down("sm")} {
    flex-direction: column;
  }
`;

export default Body;
