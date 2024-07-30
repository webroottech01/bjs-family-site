import styled from "styled-components";
import { Box as InternalBox } from "components/services/detailed-info/blueprint";

import truck from "public/images/services/construct-it/truck.png";

function FlexibleEuro6Fleet() {
  return <Box text="flexible euro 6 fleet" image={truck} />;
}

const Box = styled(InternalBox)`
    img {
        width: 189px;
        height: 70px;
    }
`;

export default styled(FlexibleEuro6Fleet)``;
