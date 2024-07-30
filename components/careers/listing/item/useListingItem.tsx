
import { WithChildren } from '@bjsdistribution/components';
import { createContext, useContext } from "react";
import Listing from "./Listing";

const Context = createContext<Listing | undefined>(undefined);

function useListingItem() {
    return useContext(Context);
}

type Props = {
    listing: Listing;
} & WithChildren;

function Provider(props: Props) {
    return <Context.Provider value={props.listing}>{props.children}</Context.Provider>
}
export {Provider};
export default useListingItem