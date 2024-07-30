import Subsidiary from "components/subsidiary-showcase/Subsidiary";
import InformationPiece from "./low-level/InformationPiece";

interface Listing {
  subsidiary: Subsidiary;
  title: string;
  contractType: string;
  jobType: string;
  location: string;
  department: string;
  closing: Date;
  salary: string;

  introduction: InformationPiece;
  furtherIntroduction?: InformationPiece;
  skills: InformationPiece;
  responsibilities: InformationPiece;
  banner: string[];
}

export default Listing;
