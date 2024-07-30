
import ConstructITCaseStudy from "./construct-it";
import HomeDeliveryCaseStudy from "./home-delivery";
import ExtraCaseStudy from './extra';
import HaulageCaseStudy from './haulage';
import {useSelected} from '../../useServicesState';

function SubsidiaryCaseStudy() {
  const subsidiary = useSelected();

  if (subsidiary === "home delivery") {
    return <HomeDeliveryCaseStudy />;
  } else if (subsidiary === "constructit") {
    return <ConstructITCaseStudy />;
  } else if (subsidiary === "extra") {
    return <ExtraCaseStudy/>
  } else if (subsidiary == "haulage") {
    return <HaulageCaseStudy/>
  }
  return <div>Cannot find subsidiary case study for {subsidiary}</div>;
}

export default SubsidiaryCaseStudy;
