import styled from "styled-components";
import { useMemo } from "react";
import WordLadder, { Props as WordLadderProps } from "./index";
import WordLadderLink, {
  Props as WorldLadderLinkProps,
} from "./WordLadderLink";

import useIsTabletOrSmaller from "components/util/useIsTabletOrSmaller";

type Props = WordLadderProps &
  WorldLadderLinkProps & {
    compact?: boolean;
  };

function WordLadderWithLink(props: Props) {
  const isTabletOrSmaller = useIsTabletOrSmaller();

  const compact = useMemo(() => {
    return props.compact ?? isTabletOrSmaller;
  }, [props.compact, isTabletOrSmaller]);

  return (
    <Container className={props.className}>
      <WordLadder
        columns={props.columns}
        repeat={props.repeat}
        entries={props.entries}
        type={props.type}
      >
        {props.children}
        {!compact && (
          <BoxedWordLadderLink
            title={props.title}
            description={props.description}
            onClick={props.onClick}
            id={props.id}
            more={props.more}
          />
        )}
      </WordLadder>
      {compact && (
        <WordLadderLink
          title={props.title}
          more={props.more}
          description={props.description}
          onClick={props.onClick}
          id={props.id}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const BoxedWordLadderLink = styled(WordLadderLink)`
  position: absolute;
  bottom: 0px;
  z-index: 7;
  border-top-left-radius: 20px;

  box-shadow: -10px 20px 20px #00000059;
  width: 50%;
  right: 0px;
`;

export default styled(WordLadderWithLink)``;
