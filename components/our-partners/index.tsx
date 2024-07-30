import styled from "styled-components";
import MotionSlider from "./showcase/motionSlider";
import Title from "./Title";
import { homeDeliveryClients, haulageClients, constructITClients } from "./partners";
import { getRandomItems } from "/components/util/getRandomItems";
import { down, up } from "styled-breakpoints";

function OurPartners(props: any) {
  const { className, services = "allClients" } = props;
  const allClients = [...homeDeliveryClients, ...haulageClients, ...constructITClients];
  const randomClients = getRandomItems(allClients, 20);
  const getClients = () => {
    if (services === "haulage") {
      return haulageClients;
    } else if (services === "constructit") {
      return constructITClients;
    } else if (services === "home delivery" || services === "extra") {
      return homeDeliveryClients;
    } else {
      return randomClients;
    }
  }
  return (
    <Container className={className}>
      <Title />
      <MotionSlider clients={getClients()} services={services}/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    /* ${up("sm")}{
      margin-bottom: 30px;
    } */
  }
  @media only screen and (max-width: 1500px) and (min-width: 992px) {
    padding: 70px 0px;  
  }
  padding: 70px;
  ${down("md")} {
    padding: 40px 20px;
  }
`;
export default OurPartners;
