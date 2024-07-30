import styled from "styled-components";
import { up, down, only } from "styled-breakpoints";
import { Styleable } from "@bjsdistribution/components";

const name = ["Baba", "Jaswant", "Singh", "Ji"];

function AcronymExplanation(props: Styleable) {
  return (
    <Container className={props.className}>
      <Avatar src={`/images/about/our-values/baba-ji.png`} />
      <TextContainer>
        <Explanation>BJS is named after</Explanation>
        <Name>
          {name.map((acronym) => (
            <div key={acronym}>{acronym}</div>
          ))}
        </Name>
      </TextContainer>
    </Container>
  );
}

const Explanation = styled.span`
  font-size: 22px;
  color: rgba(142, 138, 133, 0.5);
  white-space: nowrap;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 25px;
  font-weight: medium;
  font-weight: bold;

  ${down("md")} {
    font-size: 32px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  ${Explanation} {
    margin-bottom: 30px;
  }
`;

const Avatar = styled.img`
  min-height: 200px;
  min-width: 200px;
  max-height: 200px;
  max-width: 200px;
  border-radius: 50%;
  ${down("md")} {
    width: 100%;
    min-height: unset;
    min-width: unset;
    max-height: 300px;
    max-width: 300px;
  }
  ${down("sm")} {
    width: 90%;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  > :not(:last-child) {
    margin-right: 20px;
  }

  ${down("md")} {
    > :not(:last-child) {
      margin-right: 38px;
    }
  }
  ${down("sm")} {
    flex-direction: column;

    > :not(:last-child) {
      margin-bottom: 20px;
      margin-right: 0px;
    }
  }
`;

export default styled(AcronymExplanation)``;
