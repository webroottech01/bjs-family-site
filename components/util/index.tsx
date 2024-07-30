
import useIsMobile from './useIsMobile';
import BjsFamilyLogoMobile from './BjsFamilyLogoMobile';
import BjsFamilyLogoDesktop from './BjsFamilyLogoDesktop';

function BjsFamilyLogo() {
    const isMobile = useIsMobile();
    if (isMobile) {
        return <BjsFamilyLogoMobile/>
    }
    return <BjsFamilyLogoDesktop/>
}

export default BjsFamilyLogo