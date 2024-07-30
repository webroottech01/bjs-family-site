import styled from "styled-components";
import { down, only } from "styled-breakpoints";
import { Button, Styleable, colours } from "@bjsdistribution/components";

type DescriptionType = string | JSX.Element;

export type Props = {
  title: string;
  description: DescriptionType;
  more?: string;
  onClick?: () => void;
  id: string;
} & DescriptionProps;

function WordLadderLink(props: Props & Styleable) {
  const more = props.more ?? "Learn more";
  return (
    <Container className={props.className}>
      <Title>{props.title}</Title>
      <Description description={props.description} />
      {props.onClick && (
        <ButtonMover>
          <Button  
            id={props.id}
            colors="alternate"
            wide 
            onClick={props.onClick}
          >
            {more}
          </Button>
        </ButtonMover>
      )}
    </Container>
  );
}

interface DescriptionProps {
  description: DescriptionType;
}

function Description(props: DescriptionProps) {
  const description = props.description;
  if (typeof description === "string") {
    return <Text>{props.description}</Text>;
  }
  return description;
}

const Title = styled.h2`
  font-size: 50px;
  font-family: "Eveleth";
  margin-top:0px;

  @media only screen and (max-width: 1200px) {
    font-size: 40px;
  }


  ${down("sm")} {
    font-size: 30px;
  }
  ${down("xs")} {
    font-size: 18px;
  }
`;

const Text = styled.span``;

const ButtonMover = styled.div`
  position: relative;
  margin-bottom: 60px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 60px 60px 54px;
  font-size: 16px;
  background: ${colours.black};

  color: white;
  ${Title} {
    margin-bottom: 30px;

    @media only screen and (max-width: 1200px) {
      margin-bottom: 25px;
    }
  }
  ${Text} {
    margin-bottom: 50px;

    ${down("xs")} {
      font-size: 14px;
      margin-bottom: 37px;
    }
  }

  ${Button.PlainButton} {
    left: -10px;
    position: absolute;
    color: ${colours.black};
    font-family: "Eveleth";
  }

  ${down("sm")} {
    align-items: center;
    text-align: center;
    ${Button.PlainButton} {
      position: relative;
      margin-bottom: 0px;
      width: 100%;
    }
    ${ButtonMover} {
      margin-bottom: 0px;
      width: 100%;
      left: 10px;
    }
  }

  ${down("xs")} {
    padding: 34px 20px 40px 20px;
  }
`;

export {Title};
export default styled(WordLadderLink)``;
