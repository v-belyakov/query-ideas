import { Text } from "@mantine/core";
import useSWR from "swr";

const fetchLogin = () => fetch("login.json").then((res) => res.json());
const fetchUser = (id) => fetch(`user${id}.json`).then((res) => res.json());

const login = async () => {
  const loginResponse = await fetchLogin();
  return fetchUser(loginResponse.id);
};

const Login = () => {
  const { data: dataUser } = useSWR("login", login);
  return <Text>{JSON.stringify(dataUser)}</Text>;
};

export default Login;
