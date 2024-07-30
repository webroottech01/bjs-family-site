import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

import { format, differenceInDays } from "date-fns";

interface Props extends Styleable {
  date: Date;
}

const getNoticePeriod = (): number => {
  const period = process.env.NEXT_PUBLIC_CAREER_NOTICE_PERIOD;
  if (!period) {
    throw new Error("Cannot find notice_priod");
  }
  return parseInt(period);
};

const noticePeriod = getNoticePeriod();

const getDifference = (date: Date, deadline: Date): [number, boolean] => {
  const difference = Math.abs(differenceInDays(date, deadline));
  const isExpiring = difference <= noticePeriod;
  return [difference, isExpiring];
};

function ClosingDate(props: Props) {
  if (isNaN(props.date.getTime())) {
    return null;
  }
  const formattedDate = format(props.date, "dd-MM-yyyy");
  const [difference, isExpiring] = getDifference(new Date(), props.date);

  return (
    <Container className={props.className}>
      <span>Closing date: {formattedDate}</span>
      {isExpiring && (
        <ExpiryNotice>({difference} days left to apply!)</ExpiryNotice>
      )}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  font-size: 14px;
  gap: 10px;
`;

const ExpiryNotice = styled.span`
  font-style: italic;
  color: #ec563e;
`;

export default styled(ClosingDate)``;
