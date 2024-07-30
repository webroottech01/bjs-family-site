import Subsidiary from "components/subsidiary-showcase/Subsidiary";

interface SubsidiaryConfig {
  subsidiary: Subsidiary;
  title: string;
  established: number;
  logoUrl: string;
  primaryColour: string;
  description: [string, string];
  information: Information[];
  metaDescription: string;
  metaTags: string[];
}

export interface Information {
  title: string;
  points: string[];
}

export default SubsidiaryConfig;
