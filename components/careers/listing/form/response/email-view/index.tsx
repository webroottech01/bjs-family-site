import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import JobApplication from "../JobApplication";
import Entry from "./Entry";

interface Props {
  application: JobApplication;
}

function EmailView({ className, application }: Props & Styleable) {
  const fromField = (input?: any): string => {
    if (input) {
      return input + "";
    }
    return "None specified";
  };

  return (
    <Container className={className}>
      <thead>
        <tr>
          <th>Field</th>
          <th>Value</th>
        </tr>
      </thead>
      <Entry title="job title" value={application.jobTitle} />
      <Entry title="name" value={application.firstName} />
      <Entry title="surname" value={application.surname} />
      <Entry
        title="address"
        value={application.address?.lineOne + " " + application.address?.lineTwo}
      />

      <Entry title="email" value={application.emailAddress} />
      <Entry title="contact number" value={application.contactNumber} />
      <Entry
        title="salary expectation"
        value={fromField(application.salaryExpectation)}
      />
      <Entry
        title="authorised to work in the UK"
        value={application.authorisedInUK ? "Yes" : "No"}
      />
      <Entry title="availability" value={application.availability} />
      <Entry title="reference" value={application.reference} />
      <Entry
        title="special adjustments"
        value={fromField(application.adjustments)}
      />
      <Entry
        title="work history"
        value={application?.workHistory?.map((item) => JSON.stringify(item))
          .join(",")}
      />
      <Entry
        title="education history"
        value={application?.educationHistory?.map((item) => JSON.stringify(item))
          .join(",")}
      />

      <Entry title="background" value={application.background} />
    </Container>
  );
}

const Container = styled.table``;

export default EmailView;
