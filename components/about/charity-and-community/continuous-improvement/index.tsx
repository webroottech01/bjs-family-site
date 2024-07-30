import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { up, down } from "styled-breakpoints";

import WordLadderWithLink from "components/word-ladder/WordLadderWithLink";

import WordLadder, {
  Container as WordLadderContainer,
  Text as WordLadderText,
} from "components/word-ladder";

import { useNavigateTo } from "components/about/page/AboutPage";

import ContinuousImprovementText from "./ContinuousImprovementText";
import SupportingImage from "./SupportingImage";
import useResponsiveWordLadderRepeat from "components/word-ladder/useResponsiveWordLadderRepeat";

function ContinuousImprovement(props: Styleable) {
  const navigateTo = useNavigateTo();
  const repeat = useResponsiveWordLadderRepeat(2000);

  const goToTrainingAcademy = () => navigateTo("Training academy");
  return (
    <Container
      id="continuous-improvement-go-to-training-academy-read-more"
      title="Training academy"
      description="Our life size training academy is a unique way for teams to hone their home delivery skills; meaning that when it comes to crossing thresholds for real, our delivery service agents are confident at tight corners and awkward spaces which is why we have a less than 0.5% damage rate and consistently high client feedback scores upwards of 97%."
      columns={50}
      repeat={repeat}
      type="odd per"
      more="Read more"
      onClick={goToTrainingAcademy}
    >
      <ContinuousImprovementText />
      <SupportingImage />
    </Container>
  );
}

const Container = styled(WordLadderWithLink)`
  ${up("lg")} {
    ${WordLadderContainer} {
      min-height: 900px;
      max-height: 900px;
      position: relative;
    }
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
export default ContinuousImprovement;
