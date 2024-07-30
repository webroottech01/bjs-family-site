import styled from "styled-components";
import { up, down } from "styled-breakpoints";

import { Abstract } from "components/services/expectancy/entry";
import { BulletpointContainer } from "components/services/expectancy/entry/BulletpointEntry";

const Container = styled(Abstract)`
  ul {
    margin-top: 60px;

    @media only screen and (max-width: 1200px) {
      margin-top: 40px;
    }

    ${down("sm")} {
      margin-top: 36px;
    }
  }
`;

const list = [
  "Two man handling",
  "The highest Health & Safety standards",
  "Use of mechanical equipment to move products",
  "Unloading of containers",
  "Secure storage of goods",
  "Pick and pack service",
  "Computer controlled inventory",
  "Comprehensively trained and experienced warehouse team",
];

function Warehousing() {
  return (
    <Container title="warehousing">
      We are located centrally in the UK, just minutes away from the M6
      motorway. Operating from our single hub reduces the risk of loss or damage
      to your furniture, and our warehouses are managed with the latest
      technology in inventory control.
      <BulletpointContainer>
        {list.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </BulletpointContainer>
    </Container>
  );
}

export default Warehousing;
