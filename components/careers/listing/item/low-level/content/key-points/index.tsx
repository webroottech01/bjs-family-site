import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { up, down } from "styled-breakpoints";
import FeaturedSkillsItem from "./FeaturedSkillsItem";

import Root from "components/careers/listing/item/Container";

function KeyPoints(props: Styleable) {
  return (
    <Container className={props.className}>
      <FeaturedSkillsItem
        title="Mandatory skills, capabilities, and experience required for the role"
        points={[
          "Degree in Marketing or other similar relevant background",
          "Proven experience within a similar role",
          "Email marketing, SEO, and PPC marketing experience",
          "A data-driven, analytical and creative mindset",
          "Strong creative writing skills and close attention to detail",
          "Good understanding of Google Analytics, MailChimp, Hootsuite, Adobe Creative Suite, LinkedIn, Facebook, Twitter, Instagram, Trustpilot and Website management (desirable but not essential)",
        ]}
      />
    </Container>
  );
}

const Container = styled(Root)`
  display: flex;
  justify-content: space-between;

  ${up("lg")} {
    padding-top: 80px;
  }
`;
export default styled(KeyPoints)``;
