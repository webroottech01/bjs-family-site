import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import CookieProviderName from "./CookieProviderName";
import CookieTable from "./CookieTable";

function MoreInfoContent(props: Styleable) {
  return (
    <Container className={props.className}>
      <CookieProvider>
        <CookieProviderName name="Google Analytics" />
      </CookieProvider>
      <CookieTable/>
      <Footer/>
    </Container>
  );
}


const Footer = styled.div`
  min-height: 14px;
  min-width: 100%;
  border-radius: 0px 0px 66px 66px;
  background: white;
`;

const CookieProvider = styled.div`
  padding: 40px 0px 30px 40px;
  background: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export default MoreInfoContent;
