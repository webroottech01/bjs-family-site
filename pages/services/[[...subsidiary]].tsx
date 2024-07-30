import ServicePage from "components/services";

import getTrustpilotProps from "components/util/getTrustpilotProps";

function Services({ trustpilot }: any) {
  return <ServicePage trustpilot={trustpilot} />;
}

export async function getStaticProps() {
  return await getTrustpilotProps();
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { subsidiary: ["home-delivery"] } },
      { params: { subsidiary: ["haulage"] } },
      { params: { subsidiary: ["extra"] } },
      { params: { subsidiary: ["construct-it"] } },
    ],
    fallback: "blocking", // false or 'blocking'
  };
}

export default Services;
