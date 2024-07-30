import fetchReviews from "components/feedback/what-customers-think/fetchReviews";

async function getTrustpilotProps() {
  const trustpilot = await fetchReviews();
  return {
    // revalidate: 60 * 5, //5 minutes () now we are using on demand revalidation
    props: {
      trustpilot,
    },
  };
}

export default getTrustpilotProps;
