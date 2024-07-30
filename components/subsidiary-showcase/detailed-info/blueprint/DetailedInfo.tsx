import styled from "styled-components";
import { isValidElement } from "react";
import { motion } from "framer-motion";

import { Button, Styleable, WithChildren, colours } from "@bjsdistribution/components";
import Point from "./points";
import { up, down, only } from "styled-breakpoints";
import MobileEntry, {
  Title as MobileTitle,
} from "components/subsidiary-showcase/detailed-info/blueprint/points/mobile/header/Entry";

import { useNavigateTo } from "components/services/useServicesState";

import Subsidiary from "components/subsidiary-showcase/Subsidiary";
import getConfig from "subsidiary-config";
import Slider from "../../slider";

type Props = Styleable & ChildProps;

export type ChildProps = WithChildren & {
  hidePoints?: boolean;
  subsidiary: Subsidiary;
  footerText: string | JSX.Element;
  backgroundColour: string;
  description?: string;
  buttonColor?: "secondary";
};

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
  exit: {
    opacity: 0.3,
    transition: {
      duration: 4,
    },
  },
};

function DetailedInfo({
  className,
  children,
  footerText,
  hidePoints,
  description,
  subsidiary,
  backgroundColour,
}: Props) {
  const goToService = useNavigateTo();

  const shouldHidePoints = hidePoints ?? false;
  const config = getConfig(subsidiary);
  
  const colour =
    subsidiary === "haulage" || subsidiary === "constructit"
      ? "secondary"
      : "dark";

  const htmlDesc = description ?? config.description.join(" ");
  const htmlText = { __html: htmlDesc };
  return (
    <Container
      className={className}
      key={config.title}
      animate={{
        backgroundColor: backgroundColour,
      }}
      /*
      transition={{
        duration: 2
      }}*/
    >
      <TextContainer variants={variants}>
        <Title>{config.title}</Title>
          <Description dangerouslySetInnerHTML={htmlText} />
        {children}
        {!shouldHidePoints && (
          <PointContainer>
            <Point entries={config.information} />
            <PhraseContainer>
              {typeof footerText === "string" && <Phrase>{footerText}</Phrase>}
              {isValidElement(footerText) && footerText}
            </PhraseContainer>
            <Button
              id="subsidiary-showcase-go-to-more-info"
              colors={colour}
              onClick={() => goToService(subsidiary)}
            >
              More info
            </Button>
          </PointContainer>
        )}
      </TextContainer>
      <Slider />
    </Container>
  );
}

const Text = styled.span`
  color: inherit;
  z-index: inherit;
  font-size: inherit;
`;

const PhraseContainer = styled.div``;
const Phrase = styled(Text)`
  font-size: 14px;
`;

const PointContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 5;

  ${Point} {
    margin-bottom: 35px;
  }

  ${PhraseContainer} {
    margin-top: 35px;
    margin-bottom: 50px;

    ${down("sm")} {
      margin-top: 30px;
      margin-bottom: 25px;
      margin-right: -30px;
    }
  }

  ${Button.PlainButton} {
    padding: 17px 40px;
    width: min-content;
    font-family: "Eveleth";
    flex: 0;
    z-index: 11;
    position: relative;
    min-height: 56px;
    max-height: 56px;

    ${down("sm")} {
      font-size: 10px;
      position: relative;
      left: -7px; //Give the impression of alignment
    }
  }

  ${only("md")} {
    width: fit-content;
  }
`;

const Title = styled(Text)`
  text-transform: uppercase;
  font-family: "Eveleth";
  font-size: 36px;

  ${down("md")} {
    font-size: 30px;
  }
  ${down("sm")} {
    font-size: 24px;
  }

  ${down("xs")} {
    font-size: 22px;
  }
`;

const Description = styled(Text)`
  font-size: 16px;
  a{
    color:#fff;
  }
  ${only("md")} {
    font-size: 14px;
  }
  ${down("sm")} {
    //margin: 0px -10px;
  }
`;

const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  z-index: 5;

  ${up("lg")} {
    padding: 100px;
    padding-bottom: 140px;
    ${Text} {
      max-width: 660px;
    }
  }

  ${Title} {
    margin-bottom: 40px;
  }

  ${Description} {
    margin-bottom: 50px;
    ${down("sm")} {
      margin-bottom: 40px;
    }
  }

  ${down("md")} {
    padding: 20px;
    width: 100%;

    ${Title} {
      margin-bottom: 20px;
    }
  }

  ${only("md")} {
    padding: 0px 40px;

    ${Title} {
      margin-bottom: 30px;
    }
  }


  ${down("sm")} {
    padding-top: 45px;
  }
`;

const Container = styled(motion.div)`
  background-size: contain;
  position: relative;
  overflow: hidden;

  ${down("md")} {
    background-image: none;
    min-height: 694px;
    max-height: 694px;
  }

  ${down("sm")} {
    min-height: 670px;
    max-height: 670px;
  }


  @media only screen and (max-width: 460px) {
    min-height: unset;
    max-height: unset;
  }

  ${only("md")} {
    padding: 50px 0px;
  }
  ${down("md")} {
    ${MobileEntry}:last-child {
      ${MobileTitle} {
        padding-left: 40px;
        ${down("sm")} {
          padding-left: 10px;
        }
      }
    }
  }
`;

export { TextContainer, Container, Title, Text, Phrase, PhraseContainer };
export default DetailedInfo;
