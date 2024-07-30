import styled from "styled-components";
import { Styleable, colours} from "@bjsdistribution/components";
import OurPartners from "/components/our-partners";

function Partners(props: Styleable) {
return <Container className={props.className}>
    <OurPartners/>
</Container>
}

const Container = styled.div``;
export default Partners