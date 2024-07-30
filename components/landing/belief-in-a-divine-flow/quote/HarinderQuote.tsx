import styled from "styled-components";
import { Styleable, WithChildren } from "@bjsdistribution/components";

import LargeQuote, {
  Text,
} from "components/services/case-study/blueprint/LargeQuote";
import { useIsEnabled } from "./egg";
import { useMemo, useState } from "react";
import decode from "./decode";

const realQuote =
  "Who we are as people, our values and emotional needs, shouldn’t be ignored within the world of work. There is no division in our hearts before you start work and after you sit at your desk or the cab of a truck. By respecting my team and treating them with compassion and kindness they are better able to continue that conduct to the benefit of everyone they encounter, including our customers. It is what has set us apart as a business.";

const quotes = [
  "U291bmRzIGxpa2UgY29kZSBpc3N1ZSBidWQ=",
  "VGhvc2Ugd2VyZSBzaWxseSBtaXN0YWtlcyBvdGhlciB0aGFuIGdvb2Qgd29yayBidWQ=",
  "SSB0aGluayB5b3UgbmVlZCB0byBiZSBtb3JlIGZvY3VzZWQgaW4gdGVybXMgb2Ygd2hhdCB5b3UgYXJlIGRvaW5nLCBsb29rcyBsaWtlIHlvdSBtaXNzZWQgbG90cyB0aGluZ3MgdGhhdCB3ZW50IHlvdSBpbiBwcm9ibGVtLiBUaG9zZSB3ZXJlIHNpbGx5IG1pc3Rha2VzIG90aGVyIHRoYW4gZ29vZCB3b3JrIGJ1ZA==",
  "TmFoaCB5b3Ugc3RpbGwgZG9uJ3QgdW5kZXJzdGFuZCB0aGUgaXNzdWUuIEluIGVuZ2luZWVyaW5nIGlmIHlvdSBkb24ndCB1bmRlcnN0YW5kIHRoZSBpc3N1ZSB0aGVuIHdvdWxkbid0IGJlIGFibGUgdG8gc29sdmUgaXQgaW4gbXkgb3Bpbmlvbg==",
  "QnVkIGhvdyBjYW4geW91IGNsYWltIHRoaXM=",
  "VVBEQVRFIGBvcmRlcmAgU0VUXHJcbmBnc2l0X3JvdXRlX2lkYCA9IE5VTExcclxuV0hFUkUgYGdzaXRfcm91dGVfaWRgID0gJzIxNDc0ODM2NDcnIEFORCAoKGBpZGAgPSAnMjM3MzIyOCcpIE9SIChgaWRgID0gJzIzNzY4MzAnKSBPUiAoYGlkYCA9ICcyMzgwNzEzJykgT1IgKGBpZGAgPSAnMjM4MTgwNycpIE9SIChgaWRgID0gJzIzOTAxMzcnKSBPUiAoYGlkYCA9ICcyMzkwNjk5JykgT1IgKGBpZGAgPSAnMjM5MjEwOScpIE9SIChgaWRgID0gJzIzOTIyODInKSBPUiAoYGlkYCA9ICcyMzkyNzU0JykgT1IgKGBpZGAgPSAnMjM5NDQzNycpIE9SIChgaWRgID0gJzIzOTQ0NTQnKSBPUiAoYGlkYCA9ICcyMzk0NDU1JykgT1IgKGBpZGAgPSAnMjM5NDYwOCcpIE9SIChgaWRgID0gJzIzOTQ2MDknKSBPUiAoYGlkYCA9ICcyMzk0NjExJykgT1IgKGBpZGAgPSAnMjM5NDYxNCcpIE9SIChgaWRgID0gJzIzOTQ4OTAnKSBPUiAoYGlkYCA9ICcyMzk0OTc2JykgT1IgKGBpZGAgPSAnMjM5NDk5NScpIE9SIChgaWRgID0gJzIzOTUwMTYnKSBPUiAoYGlkYCA9ICcyMzk1MTMyJykgT1IgKGBpZGAgPSAnMjM5NTEzNScpIE9SIChgaWRgID0gJzIzOTUyNzknKSBPUiAoYGlkYCA9ICcyMzk2NjkxJykgT1IgKGBpZGAgPSAnMjM5Njc3MycpIE9SIChgaWRgID0gJzIzOTc3MDYnKSBPUiAoYGlkYCA9ICcyMzk4Mzc1JykgT1IgKGBpZGAgPSAnMjM5ODgzMycpKTs=",
  "TW9yYWwgb2YgdGhlIHN0b3J5IGlzIGlmIHlvdSBkb24ndCBmb2xsb3cgdGhlIGNvcnJlY3QgcGF0aCB0aGVuIG5vdCBnb2luZyB0byBzb2x2ZSB0aGUgcHJvYmxlbS4gc28gYXNrIG1vcmUgcXVlc3Rpb25zIGFuZCBlbnN1cmUgdGhhdCB5b3UgYXJlIG9uIHJpZ2h0IHRyYWNrIHRvIHNvbHZlIHRoZSBwcm9ibGVtLiB0aGFua3M=",
  "aXQncyBiZWVuIDIgd2Vla3MsIHRoaXMgaXMgYmxvY2tlZCBhbmQgaSBqdXN0IGxvb2tlZCBhdCBpc3N1ZSwgZm91bmQgdGhhdCBEb2NrZXIgZW50cnlwb2ludCBpcyB3cm9uZywgaSB0aGluayB5b3UgZG9uJ3Qga25vdyB3aGF0IG5lZWQgdG8gZG8gdG8gYmUgaG9uZXN0",
  "bGV0cyBjb25uZWN0",
];

function HarinderQuote(props: WithChildren & Styleable) {
  const [index, setIndex] = useState(-1);
  const isEgg = useIsEnabled();

  const computeFromRandom = () => {
    const index = Math.floor(Math.random() * quotes.length);
    return index;
  };

  const begin = () => {
    setInterval(() => {
      setIndex(computeFromRandom());
    }, 8000);
  };

  const quote = useMemo(() => {
    if (index === -1 && isEgg) {
      setIndex(computeFromRandom());
      begin();
    }

    if (isEgg && index !== -1) {
      return decode(quotes[index]);
    }
    return realQuote;
  }, [isEgg, index]);

  return (
    <Container>
      <LargeQuote className={props.className} text={quote}>
        {props.children}
      </LargeQuote>
    </Container>
  );
}
const Container = styled.div`
  ${Text} {
    font-size: 14px;
  }
`;
export default styled(HarinderQuote)``;
