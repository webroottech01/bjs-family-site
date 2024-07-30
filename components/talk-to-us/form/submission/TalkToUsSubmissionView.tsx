import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

function TalkToUsSubmissionView(props: any) {
  return (
    <Container>
      <table>
        <tbody>
          {Object.entries(props.values).map(([key, value]) => {
            if (key === "product types" || key === "service") {
              value = (value as any[]).map((item: any) => item.label).join(",");
            }
            return (
              <tr>
                <th>{key}:</th>
                <th>{value as any}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}

const Container = styled.div``;
export default TalkToUsSubmissionView;
