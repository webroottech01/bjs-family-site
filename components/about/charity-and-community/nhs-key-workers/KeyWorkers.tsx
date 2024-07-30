import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

import KeyWorkerItem from "./key-worker";
import { Props as JobInformationProps } from "./key-worker/JobInformation";
import beverly from "public/images/about/charity-and-community/nhs/beverly.jpg";
import molly from "public/images/about/charity-and-community/nhs/molly.jpg";
import mark from "public/images/about/charity-and-community/nhs/mark.jpg";
import useWindowDimensions from "/components/util/useWindowDimensions";
import beverlyMorris from "public/images/about/charity-and-community/nhs/beverly-morris.jpg";
import MarkBarratt from "public/images/about/charity-and-community/nhs/MarkBarratt.jpg";
import MollyHenriquesDixon from "public/images/about/charity-and-community/nhs/MollyHenriquesDixon.jpg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faChevronLeft,
  faChevronRight,
  faPlus,
} from "@fortawesome/pro-regular-svg-icons";
import { down } from "styled-breakpoints";

type Props = {
  description: string[];
  image: StaticImageData;
  id: string;
  background: StaticImageData;
} & JobInformationProps;

const keys: Array<Props> = [
  {
    title: "Head of Continuing Health Care",
    service: "Sandwell & West Birmingham Clinical Commissioning Group",
    description: [
      "This October Beverley was awarded the prestigious British Empire Medal for her fantastic leadership and care to patients during the COVID-19 pandemic.",
      "The 59 year old, who lives in Birmingham, works across many independent care home providers and with local statutory services.",
      "She has an excellent reputation for delivering patient centred care and has been recognised for supporting the proactive swabbing of care home residents and supporting care homes in crisis. A record 100% of infection and prevention care home education support was also achieved.",
      "Beverley’s focus has always been to manage a range of complex patients, sometimes in very difficult situations and across organisational boundaries, yet she has led her team with knowledge, humility and often goes the extra mile.",
    ],
    background: beverlyMorris,
    image: beverly,
    id: "1",
  },
  {
    title: "Quality Nurse Team Leader",
    service: "Wolverhampton Clinical Commissioning Group",
    description: [
      "Molly was awarded the prestigious British Empire Medal in October for fantastic leadership and care to patients during the COVID-19 pandemic.",
      "Molly came out of retirement to lead a quality nurse team for the Black Country and West Birmingham Clinical Commissioning Groups (CCG).",
      "The 62 year old from Penkridge has helped oversee arrangements for 60 care homes across Wolverhampton.",
      "She is known for her pragmatic, calm, patient focused, and solutions orientated approach and impressed care home managers with her friendly and helpful attitude during the pandemic.",
    ],
    background: MollyHenriquesDixon,
    image: molly,
    id: "2",
  },
  {
    title: "Clinical Team Mentor",
    service: "West Midlands Ambulance Service",
    description: [
      "Mark is known for his exceptional dedication and mentorship style towards students. His colleagues also recognise how he goes the extra mile to support them during times of personal need, as well as while on shifts.",
      "One of the key roles Mark carries out is to plan and track the progress of the clinical support days that all staff get each year, to ensure their learning and skills remain at the highest level. In addition, he allocates students to their mentors to ensure all staff get the best learning opportunities during their time with West Midlands Ambulance Service.",
    ],
    background: MarkBarratt,
    image: mark,
    id: "3",
  },
];
function KeyWorkers(props: Styleable) {
  const { width } = useWindowDimensions();
  const [selectedKey, setSelectedKey] = useState(0);
  if (width > 1200) {
    return (
      <Container>
        {keys.map((key, index) => {
          return (
            <KeyWorkerItem
              title={key.title}
              service={key.service}
              description={key.description}
              image={key.image}
              background={key.background}
              key={key.id}
            />
          );
        })}
      </Container>
    );
  }
  return (
    <Container>
      <KeyWorkerItem
        title={keys[selectedKey].title}
        service={keys[selectedKey].service}
        description={keys[selectedKey].description}
        image={keys[selectedKey].image}
        background={keys[selectedKey].background}
        key={keys[selectedKey].id}
      />
      <ArrowContainer>
        {selectedKey !== 0 && (
          <Arrow onClick={()=> setSelectedKey(selectedKey - 1)}>
            <Icon icon={faChevronLeft} />
          </Arrow>
        )}
        {selectedKey === 0 && <Blank />}
        {selectedKey !== 2 && (
          <ArrowRight onClick={()=> setSelectedKey(selectedKey + 1)}>
            <Icon icon={faChevronRight} />
          </ArrowRight>
        )}
        {selectedKey === 2 && <Blank />}
      </ArrowContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 40px;
  position: relative;
  justify-content: center;
`;
const Icon = styled(FontAwesomeIcon)`
  height: 38px;
  width: 38px !important;
  ${down("sm")} {
    height: 18px;
    width: 18px !important;
  }
`;
const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0px;
  right: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${down("sm")} {
    top: 41%;
  }
`;
const Arrow = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background: #1b2024;
  margin-left: -60px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  ${down("sm")} {
    width: 40px;
    height: 40px;
    margin-left: 8px;
  }
`;
const ArrowRight = styled(Arrow)`
  margin-right: -60px;
  ${down("sm")} {
    margin-right: 8px;
  }
`;
const Blank = styled.div``;
export default styled(KeyWorkers)``;
