import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import { Styleable, colours } from "@bjsdistribution/components";

import Description from "./Description";

import WordLadderWithLink from "components/word-ladder/WordLadderWithLink";
import WordLadder, {
  Container as WordLadderContainer,
} from "components/word-ladder";
import WordLadderLink, {
  Title as WordLadderLinkTitle,
} from "components/word-ladder/WordLadderLink";
import HandyMenImage from "./HandyMenImage";
import JoinTheFamilyText from "./JoinTheFamilyText";

const entries: string[][] = [
  ["grafters", "smilers"],
  ["planners"],
  ["fixers", "helpers"],
  ["movers"],
  ["shakers", "talkers"],
  ["trainers"],
  ["drivers", "mentors"],
  ["leaders"],
  ["listeners", "thinkers"],
];

function JoinTheFamily(props: Styleable) {
  return (
    <Root
      id="join-the-family"
      title="find a job you'll love"
      description={<Description />}
      columns={50}
      entries={entries}
      type="odd per"
      repeat={3}
      className={props.className}
    >
      <HandyMenImage />
      <JoinTheFamilyText />
    </Root>
  );
}

const Root = styled(WordLadderWithLink)`
  // max-height: 880px;

  ${WordLadderContainer} {
    min-height: 900px;
    top: -180px;
    left: -50px;

    ${down("md")} {
      min-height: 617px;
      max-height: 617px;
    }

    ${down("sm")} {
      min-height: 517px;
      max-height: 517px;
    }
  }

  ${WordLadderLink} {
    ${down("md")} {
      padding-bottom: 0px;
      border-top-left-radius: 20px;
    }

    ${down("sm")} {
      padding: 40px 30px;
      ${WordLadderLinkTitle} {
        font-size: 26px;
      }
      align-items: flex-start;
      text-align: left;
    }
  }
`;

export default JoinTheFamily;
