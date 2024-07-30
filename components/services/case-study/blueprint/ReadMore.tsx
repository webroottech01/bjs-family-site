import styled from "styled-components";
import { WithChildren, Styleable, Button } from "@bjsdistribution/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/pro-solid-svg-icons";
import { useMemo, useState } from "react";
import useIsTabletOrSmaller from "components/util/useIsTabletOrSmaller";

type Props = WithChildren & Styleable;

function ReadMore(props: Props) {
  const onTabletOrSmaller = useIsTabletOrSmaller();

  const [opened, setOpened] = useState(false);

  const shouldBeOpen = useMemo(() => {
    const onDesktop = !onTabletOrSmaller ?? false;
    if (onDesktop) {
      return true;
    }
    return opened;
  }, [onTabletOrSmaller, opened]);

  let children;
  if (shouldBeOpen) {
    children = props.children;
  } else {
    children = (
      <ReadMoreButton onClick={() => setOpened(true)}>
        <span>Read more</span>
        <FontAwesomeIcon icon={faChevronDown} />
      </ReadMoreButton>
    );
  }

  return <Container className={props.className}>{children}</Container>;
}

const Container = styled.div``;

const ReadMoreButton = styled(Button)`
  border: 1px solid #707070;
  background: transparent;
  color: #747474;
  opacity: 0.65;
  width: min-content;
  padding: 14px 20px;
  font-style: italic;
  text-transform: none;
  font-size: 14px;

  > :not(:last-child) {
    margin-right: 30px;
  }
`;

export default styled(ReadMore)``;
