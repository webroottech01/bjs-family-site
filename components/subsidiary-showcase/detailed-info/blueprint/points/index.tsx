
import styled from "styled-components";

import PointProps from './PointProps';
import useIsMobile  from 'components/util/useIsMobile';

import Mobile from "./mobile";
import Desktop from "./desktop";
import useIsTabletOrSmaller from 'components/util/useIsTabletOrSmaller';

function Points(props: PointProps) {
    const isMobile = useIsTabletOrSmaller();
    if (isMobile) {
        return <Mobile {...props}/>
    }
    return <Desktop {...props}/>
}

export default styled(Points)``