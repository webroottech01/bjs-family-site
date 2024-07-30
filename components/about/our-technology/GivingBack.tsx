import styled from "styled-components";
import { colours } from "@bjsdistribution/components";
import { up, down } from "styled-breakpoints";

import WordLadderWithLink from "components/word-ladder/WordLadderWithLink";

import useResponsiveWordLadderRepeat from "components/word-ladder/useResponsiveWordLadderRepeat";
import { useNavigateTo } from 'components/about/page/AboutPage';
import WordLadder, {
  Container as WordLadderContainer,
  Text as WordLadderText,
} from "components/word-ladder";

import hands from "public/images/about/charity-and-community/hands.png";

const entries: string[][] = [
  ["Family run", "Flexible"],
  ["Experience", "High Standards"],
  ["Customer Service", "Heart"],
  ["Reputation"],
];

function GivingBack() {
  const navigateTo = useNavigateTo();
  const repeat = useResponsiveWordLadderRepeat(2000);
  const goToCharity = () => navigateTo("Charity and community");

  return (
    <Container
      title="Charity & Community"
      description="From its very inception spiritual guidance was sought for the BJS venture from Baba Jaswant Singh Ji– whom the company is named after. Prior to his death in 2020 Baba Jaswant Singh Ji was based in Punjab and was the founder of a trust that runs projects for the welfare of humanity; provision of health care facilities, higher medical education and to show ‘the path of spiritual righteousness’. To ‘foster human values and welfare with esteemed devotion indeed’. BJS continues to act on the pledge and commitment to do good."
      columns={45}
      entries={entries}
      repeat={repeat}
      type="odd per"
      more="read more"
      onClick={goToCharity}
      id="our-technology-go-to-charity-and-community-read-more"
    >
      <Hands />
      <TextContainer>
        {"Giving back".split(" ").map((text) => (
          <Text>{text}</Text>
        ))}
      </TextContainer>
    </Container>
  );
}

const Hands = styled.div`
  background-image: url(${hands.src});
  background-size: auto 100%;
  background-position: -300px 0px;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  content: "";

  ${down("sm")} {
    background-position: center;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: 280px;
  left: 10px;
  color: ${colours.black};
  transform: rotate(-6deg);
  gap: 30px;

  display: flex;

  ${down("md")} {
    flex-direction: column;
    left: 140px;
    top: 200px;
    gap: 10px;
  }

  ${down("sm")} {
    left: 100px;
    top: 200px;
    gap: 30px;
    align-items: center;
  }
`;

const Text = styled.span`
  font-size: 150px;
  font-family: "Eveleth";
  line-height: 0.8em;
  ${down("md")} {
    font-size: 120px;
  }

  ${down("sm")} {
    font-size: 35px;
  }
`;

const Container = styled(WordLadderWithLink)`
  ${up("lg")} {
    min-height: 900px;
    max-height: 900px;
  }
  ${down("md")} {
    ${WordLadderContainer} {
      min-height: 678px;
      max-height: 678px;
    }

    ${WordLadderText} {
      font-size: 10px;
    }
  }

  ${down("sm")} {
    ${WordLadderContainer} {
      min-height: 480px;
      max-height: 480px;
    }
  }

  ${WordLadderContainer} {
    top: -120px;
    left: -50px;
  }
`;

export default GivingBack;
