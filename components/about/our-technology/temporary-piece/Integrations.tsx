import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import Section, { Text } from "./Section";

function Integrations({ className }: Styleable) {
  return (
    <Section title="integrations" className={className}>
      <Text>
        Onboarding with BJS couldn’t be easier – we recognise the challenges of
        moving data within a complex supply chain – BJS provides a number of
        ready-to-go integrations with leading WMS, ERP and Order Management
        systems and if that isn’t enough – we provide a comprehensive suite of
        APIs which can get you up and running in hours.
      </Text>
    </Section>
  );
}

export default styled(Integrations)``;
