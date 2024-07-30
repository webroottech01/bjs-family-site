import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import { Button } from "@bjsdistribution/components";

import SubsidiaryProps from "components/subsidiary-showcase/SubsidiaryProps";
import useSubsidiaryLogoDimensions from "./useSubsidiaryLogoDimensions";

import PhoneSection, {
  PhoneNumber,
} from "/components/talk-to-us/form/shared/PhoneSection";
import { IconPair, EmailSection } from "components/talk-to-us/form/shared";
import { SubsidiaryLogo } from "components/careers/listing/item/high-level/common";

import { useSetSelectedSubsidiary } from "components/talk-to-us/store";
import AddressSection from "../form/shared/AddressSection";

function SubsidiaryItem({ className, subsidiary }: SubsidiaryProps) {
  const setSelected = useSetSelectedSubsidiary();
  const getDimensions = useSubsidiaryLogoDimensions();

  const select = () => {
    setSelected(subsidiary);
  };

  return (
    <Container className={className}>
      <LogoContainer>
        <SubsidiaryLogo
          subsidiary={subsidiary}
          dimensions={getDimensions(subsidiary)}
        />
      </LogoContainer>
      <PhoneSection subsidiary={subsidiary} />
      <Button wide onClick={select}>
        Request quote
      </Button>
      <EmailSection subsidiary={subsidiary} />
      <AddressSection subsidiary={subsidiary} />
    </Container>
  );
}

const LogoContainer = styled.div`
  min-height: 117px;

  ${down("sm")} {
    min-height: 97px;
  }
`;
const Container = styled.div`
  padding: 97px 96px;
  display: flex;
  flex-direction: column;

  ${LogoContainer} {
    margin-left: auto;
    margin-right: auto;
  }

  ${PhoneNumber} {
    font-size: 24px;
    font-weight: bold;
  }

  ${PhoneSection}, ${Button.PlainButton}, ${LogoContainer}, ${EmailSection} {
    margin-bottom: 30px;
  }

  ${IconPair} {
    > :not(:last-child) {
      margin-right: 20px;
    }
  }

  ${Button.PlainButton} {
    font-family: "Eveleth";
    text-transform: capitalize;

    ${up("lg")} {
      min-width: 224px;
      max-width: 224px;
    }
  }

  ${down("sm")} {
    padding: 95px 30px;

    ${AddressSection}, ${Button.PlainButton} {
      font-size: 14px;
    }

    ${SubsidiaryLogo} {
      img {
        width: auto;
      }
    }
  }
`;
export default styled(SubsidiaryItem)``;
