import { Styleable } from "@bjsdistribution/components";
import Sitemap  from "./Sitemap";
import ContactInfo from './ContactInfo';

type FooterProps = {
    sitemap: Sitemap,
    contact: ContactInfo
} & Styleable;

export default FooterProps;