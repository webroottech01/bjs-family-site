
import Subsidiary from 'components/subsidiary-showcase/Subsidiary';

const getPath = (input: Subsidiary) : string => {
    return `/images/services/${getEntry(input)}/image-showcase`;
}

const getEntry = (input: Subsidiary) => {
    if (input === "constructit") {
        return "construct-it";
    } else if (input === "home delivery") {
        return "homedelivery";
    }
    return input;
}

export default getPath