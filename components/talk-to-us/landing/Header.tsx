import { useMemo } from "react";
import { Styleable, colours } from "@bjsdistribution/components";
import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import useIsTabletOrSmaller from "components/util/useIsTabletOrSmaller";

import {
  useSelectedSubsidiaryValue,
  useResetSelectedSubsidiary,
} from "components/talk-to-us/store";
import Exit from "components/talk-to-us/form/Exit";

import Subsidiary from "components/subsidiary-showcase/Subsidiary";

function Header(props: Styleable) {
  const isTabletOrSmaller = useIsTabletOrSmaller();

  const selectedSubsidiary = useSelectedSubsidiaryValue();
  const reset = useResetSelectedSubsidiary();

  const hasSelectedSubsidiary = useMemo(() => {
    return !!selectedSubsidiary;
  }, [selectedSubsidiary]);

  return (
    <Container className={props.className}>
      <Headers>
        <Title isSelected={!hasSelectedSubsidiary} onClick={reset}>
          Talk to us
        </Title>
        {isTabletOrSmaller && hasSelectedSubsidiary && (
          <Title isSelected>Request quote</Title>
        )}
      </Headers>
      <Subtitle />
      <Exit />
    </Container>
  );
}

function Subtitle() {
  const isTabletOrSmaller = useIsTabletOrSmaller();
  const selectedSubsidiary = useSelectedSubsidiaryValue();
  const hasSelectedSubsidiary = useMemo(() => {
    return !!selectedSubsidiary;
  }, [selectedSubsidiary]);

  if (hasSelectedSubsidiary && isTabletOrSmaller) {
    return (
      <SubtitleText>
        Please complete your{" "}
        <span style={{ fontWeight: 500 }}>
          {getSubsidiaryName(selectedSubsidiary!)}
        </span>{" "}
        quote and a member of our team will be in touch with you as soon as
        possible.
      </SubtitleText>
    );
  }
  return (
    <SubtitleText>
      Contact us to discuss your requirements, obtain a quote, or to join the
      BJS family.
    </SubtitleText>
  );
}

export const getSubsidiaryName = (input: Subsidiary): string => {
  switch (input) {
    case "constructit":
      return "ConstructIT";
    case "extra":
      return "Extra";
    case "haulage":
      return "Haulage";
    case "home delivery":
      return "Home Delivery";
  }
};

const Headers = styled.div`
  display: flex;
  > :not(:last-child) {
    margin-right: 30px;
  }
`;

const Title = styled.span<{ isSelected: boolean }>`
  font-family: "Eveleth";
  font-size: 26px;

  ${down("md")} {
    font-size: 20px;
  }

  ${down("sm")} {
    font-size: 18px;
  }

  ${down("xs")} {
    font-size: 13px;
  }
  opacity: ${(props) => (props.isSelected ? "1" : "0.25")};
`;

const SubtitleText = styled.span`
  font-size: 16px;

  ${down("md")} {
    font-size: 14px;
    color: #888075;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: transparent linear-gradient(360deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;

  ${Exit} {
    position: absolute;
    right: 40px;
    top: 20px;
  }

  padding: 40px;

  ${Title} {
    margin-bottom: 30px;
  }

  ${down("md")} {
    padding: 39px 40px;
    ${Title} {
      margin-bottom: 15px;
    }
  }
  ${down("sm")} {
    padding: 40px 20px;

    ${Exit} {
      font-size: 30px !important;
      right: 20px;
      top: 20px;
    }
  }

  ${down("xs")} {
   // padding: 10px 0px;
  }
`;
export default styled(Header)``;
