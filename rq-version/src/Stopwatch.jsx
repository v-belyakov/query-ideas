import { useRef } from "react";
import { Text } from "@mantine/core";
import { useQuery } from "react-query";

const createStopwatch = () => {
  const startTime = Date.now();
  return () => {
    return Math.round(Date.now() - startTime / 1000);
  };
};

const Stopwatch = () => {
  const timerRef = useRef(createStopwatch());
  const { data: time } = useQuery("time", timerRef.current, {
    refetchInterval: 1000,
  });

  return <Text>Timer {time}</Text>;
};

export default Stopwatch;
