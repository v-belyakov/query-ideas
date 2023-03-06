import { Stack, Text } from "@mantine/core";
import { useQuery } from "react-query";

const subscribeToLog = () => {
  let log = [];
  let logIndex = 0;

  setInterval(() => {
    log.push(`${logIndex}: ${Date.now()}`);
    logIndex++;
    log = log.slice(-3);
  }, 100);

  return () => log;
};

const logListener = subscribeToLog();

const Logger = () => {
  const { data: dataLog } = useQuery("log", logListener, {
    refetchInterval: 1000,
  });

  return (
    <Stack>
      {dataLog?.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </Stack>
  );
};

export default Logger;
