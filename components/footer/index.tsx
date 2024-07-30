import Sitemap from "./Sitemap";

import MobileFooter from "./mobile";
import DesktopFooter from "./desktop";

import useIsMobile from "components/util/useIsMobile";

const sitemap: Sitemap = [
  {
    title: "about BJS",
    entries: [
      "our story",
      "our values",
      "what makes BJS different",
      "our technology",
      "charity and community",
      "training academy",
    ],
  },
  {
    title: "our services",
    entries: ["two-man home delivery", "BJS extra", "haulage", "specialist construction haulage"],
  },
  {
    title: "information",
    entries: [
      "careers",
      "privacy policy",
      "CCTV policy",
    ],
  },
];

const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
if (!email) {
  throw new Error(`Cannot find contact email`);
}
const phoneNumber = process.env.NEXT_PUBLIC_CONTACT_NUMBER;
if (!phoneNumber) {
  throw new Error(`Cannot find phone number`);
}

const saleNumber = process.env.NEXT_PUBLIC_SALE_NUMBER;
if (!saleNumber) {
  throw new Error(`Cannot find sale number`);
}

const contact = { phoneNumber, email, saleNumber };

const props = {
  sitemap,
  contact,
};

function Footer() {
  const isMobile = useIsMobile();
  if (isMobile) {
    return <MobileFooter {...props} />;
  }
  return <DesktopFooter {...props} />;
}

export { email, phoneNumber };
export default Footer;
