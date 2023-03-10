import { Text, TextInput, Stack } from "@mantine/core";
import useSWR from "swr";

const useSWRGlobalState = (key, initialData) => {
  const { data, mutate } = useSWR(key, () => initialData);
  return [
    data ?? initialData,
    (value) =>
      mutate(value, {
        revalidate: false,
      }),
  ];
};

const StateEditor = () => {
  const [value, setValue] = useSWRGlobalState("sharedText", "");
  return (
    <TextInput
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

const StateViewer = () => {
  const [value] = useSWRGlobalState("sharedText", "");
  return <Text>{value}</Text>;
};

const GlobalState = () => {
  return (
    <Stack>
      <StateEditor />
      <StateViewer />
    </Stack>
  );
};

export default GlobalState;
