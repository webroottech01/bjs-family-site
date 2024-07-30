import Props from "./Props";
import useIsTabletOrSmaller from 'components/util/useIsTabletOrSmaller';

import TabletNavigation from "./TabletNavigation";
import DesktopNavigation from "./DesktopNavigation";

function Navigation(props: Props) {
    const tabletOrSmaller = useIsTabletOrSmaller();
    if (tabletOrSmaller) {
        return <TabletNavigation {...props} />
    }
    return<DesktopNavigation {...props}/>
}

export default Navigation