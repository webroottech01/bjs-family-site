import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

import AffirmationMetadata from "../ClientAffirmation";
import LargeAffirmation from "./large";
import StandardClientAffirmation from './standard';

type Props = {
  largeQuote?: boolean;
} & AffirmationMetadata &
  Styleable;

function ClientAffirmation(props: Props) {
  const isLargeQuote = props.largeQuote ?? false;
  if (isLargeQuote) {
    return <LargeAffirmation {...props}/>
  }
  return <StandardClientAffirmation {...props}/>
}


export default ClientAffirmation;
