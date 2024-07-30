import { Client } from "components/util/getClientLogo";

export type AuthorInfo = {
  name: string;
  role: string;
};

interface ClientAffirmation {
  quote: string;
  image: StaticImageData;
  description: string;
  author: AuthorInfo;
  client: Client;
}

export default ClientAffirmation;
