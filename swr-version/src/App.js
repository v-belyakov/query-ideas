import { Container, Stack, Title } from "@mantine/core";

import Login from "./Login";
import Stopwatch from "./Stopwatch";
import Logger from "./Logger";
import GPS from "./GPS";
import WebWorker from "./WebWorker";
import GlobalState from "./GlobalState";

function App() {
  return (
    <Container>
      <Stack>
        <Title>Login</Title>
        <Login />

        <Title>Stopwatch</Title>
        <Stopwatch />

        <Title>Logger</Title>
        <Logger />

        <Title>GPS</Title>
        <GPS />

        <Title>WebWorker</Title>
        <WebWorker />

        <Title>GlobalState</Title>
        <GlobalState />
      </Stack>
    </Container>
  );
}

export default App;
