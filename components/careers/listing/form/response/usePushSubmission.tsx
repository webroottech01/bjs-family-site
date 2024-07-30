import { Notifications } from "@bjsdistribution/components";
import JobApplication from "./JobApplication";
import usePushEmail from "./usePushEmail";
import { useToken } from "./token-store";
import useListingItem from "components/careers/listing/item/useListingItem";
import { useIsAgreedWorkInUK } from "../component/submission/store";

function usePushSubmission() {
  const notifications = Notifications.useNotifications();
  const listing = useListingItem();
  const jobTitle = listing!.title;
  const pushEmail = usePushEmail();
  const agreedUK = useIsAgreedWorkInUK();

  async function submit(e: any, token: string) {
    if (!token) {
      console.log("Execute recaptcha not yet available");
      return;
    }
    const output = sanitize(e, jobTitle, agreedUK);

    const response = await pushEmail(output, token);
    if (response === true) {
      notifications.add({
        id: "job",
        title: "Application submitted",
        description:
          "Your application has been submitted! You will recieve a response within the next few days.",
        type: "success",
      });
    } else {
      const message =
        typeof response === "string"
          ? response
          : "Please contact a site administrator.";
      notifications.add({
        id: "job",
        title: "Failure to submit application",
        description: `An error occured submitting the application. ${message}`,
        type: "failure",
      });
    }
  }
  return submit;
}

const sanitize = (input: any, jobTitle: string, agreedUK: boolean): JobApplication => {
  const cv = input["cv"]?.file;
  console.log(`agreedUK --- ${agreedUK}`);
  // return {
  //   firstName: input["first name"],
  //   surname: input["last name"],
  //   address: {
  //     lineOne: input["address line 1"],
  //     lineTwo: input["address line 2"],
  //     city: input["city"],
  //     postcode: input["postcode"],
  //   },
  //   authorisedInUK: input["authorised"],
  //   emailAddress: input["email address"],
  //   contactNumber: input["telephone number"],
  //   salaryExpectation: input["salary"],
  //   reference: input["heard"],
  //   adjustments: input["further adjustments"],
  //   workHistory: input["work history"],
  //   educationHistory: input["education history"],
  //   documents: input["supporting documents"].map((entry: any) => entry.file),
  //   cv,
  //   jobTitle,
  //   availability: `${input["availability"]} ${input["availabilityUnit"]}`,
  //   background: input["background"],
  // };
  return {
    firstName: input["first name"],
    surname: input["last name"],
    authorisedInUK: agreedUK,
    emailAddress: input["emailAddress"],
    contactNumber: input["telephone number"],
    salaryExpectation: input["salary"],
    reference: input["heard"],
    adjustments: input["further adjustments"],
    workHistory: input["work history"],
    educationHistory: input["education history"],
    documents: input["supporting documents"].map((entry: any) => entry.file),
    cv,
    jobTitle,
    availability: `${input["availability"]} ${input["availabilityUnit"]}`,
    background: input["background"],
  };
};

export default usePushSubmission;
