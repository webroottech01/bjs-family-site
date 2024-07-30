import styled from "styled-components";
import SubsidiaryEntry from "./SubsidiaryEntry";

function SubsidiaryEntries() {
  return (
    <>
      <SubsidiaryEntry
        subsidiary="home delivery"
        image="/images/logos/homedelivery.svg"
        name="two-man home delivery"
        description={`Award winning two-man home delivery teams, trained in excellence and trusted by leading\nbrands.`}
      />
      <SubsidiaryEntry
        subsidiary="extra"
        image="/images/logos/extra.svg"
        name="an extra helping hand"
        description={`BJS Extra is all the experience of BJS Home Delivery with an extra helping hand for up and\ncoming companies.`}
      />
      <SubsidiaryEntry
        subsidiary="haulage"
        image="/images/logos/haulage.svg"
        name="with you at every turn"
        description={`BJS Haulage is the UK’s leading national haulage company and can help you to navigate the\ntwists and turns of your day-to-day nationwide transport needs with a service-led approach.`}
      />
      <HaulageEntry
        subsidiary="constructit"
        image="/images/logos/constructit.svg"
        name="specialist construction haulage"
        description={`Construct IT provides a safe and reliable service for market-leading construction product\nmanufacturers.`}
      />
    </>
  );
}
const HaulageEntry = styled(SubsidiaryEntry)`
  img {
    /* position: relative;
    left: -5x;
    width: 114px;
    height: 25px;*/
    height: 25px;
  }
`;

export default SubsidiaryEntries