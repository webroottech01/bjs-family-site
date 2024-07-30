
import Subsidiary from 'components/subsidiary-showcase/Subsidiary';
import SubsidiaryConfig from './SubsidiaryConfig';

import homeDelivery from "./home-delivery";
import extra from "./extra-config";
import haulage from "./haulage-config";
import constructIT from "./construct-it-config";

const configurationArray = [
    homeDelivery,
    extra,
    haulage,
    constructIT
];

function getConfig(input: Subsidiary) : SubsidiaryConfig {
    const result = configurationArray.find(configuration => configuration.subsidiary === input);
    return result ?? homeDelivery;
}

export default getConfig