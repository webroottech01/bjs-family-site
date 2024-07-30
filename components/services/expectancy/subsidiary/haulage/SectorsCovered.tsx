import styled from "styled-components";
import { down } from "styled-breakpoints";

import { Bulletpoint } from "components/services/expectancy/entry";

function SectorsCovered() {
  return (
    <Container
      title="sectors covered"
      entries={[
        "Manufacturing",
        "Industrial",
        "Construction",
        "Wholesale & retail",
        "E-commerce",
        "Consumer goods",
        "Furniture",
        "Food & beverage",
      ]}
    />
  );
}

const Container = styled(Bulletpoint)`
  ${down("md")} {
    width: fit-content;
    li:not(:last-child) {
      margin-bottom: 4px !important;
    }
  }
`;

export default SectorsCovered;
