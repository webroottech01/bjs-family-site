import { Styleable, WithChildren, Button } from "@bjsdistribution/components";
import ApplicationType, { ApplicationTypeName } from "./ApplicationType";
import DoubleArrow from "components/feedback/what-customers-think/DoubleArrow";
import { useIsDesktop } from "components/util/useIsTabletOrSmaller";

import { Root, Container, Footer } from "./Styling";
import Header from "./Header";
import Body from "./Body";

type Props = {
  title: string;
  type: ApplicationTypeName;
  image?: JSX.Element;
} & WithChildren &
  Styleable;

function ApplicationShowcase(props: Props) {
  const isDesktop = useIsDesktop();

  return (
    <Root>
      <Container className={props.className}>
        <Header title={props.title} type={props.type} />
        <Body image={props.image} children={props.children} />
        {isDesktop && (
          <Footer>
            <Button colors="dark">See demo</Button>
            <DoubleArrow />
          </Footer>
        )}
      </Container>
      {isDesktop && props.image}
    </Root>
  );
}

export default ApplicationShowcase;
