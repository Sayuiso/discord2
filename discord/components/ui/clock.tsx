import dayjs from "dayjs";
import styled from "@emotion/styled";

type ClockProps = {
    time: Date;
}

export default function Clock({time}: ClockProps) {
  return <SClockText>{dayjs(time).format("HH:mm:ss")}</SClockText>;
}

const SClockText = styled.div`
  font-size: 50px;
  color:rgb(22, 18, 18);
  margin-top: 100px;
`;
