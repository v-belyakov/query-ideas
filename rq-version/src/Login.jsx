import { Text } from "@mantine/core";
import { useQuery } from "react-query";

const fetchLogin = () => fetch("login.json").then((res) => res.json());
const fetchUser = (id) => fetch(`user${id}.json`).then((res) => res.json());

const login = async () => {
  const loginResponse = await fetchLogin();
  return fetchUser(loginResponse.id);
};

const Login = () => {
  const { data: dataUser } = useQuery("login", login);
  return <Text>{JSON.stringify(dataUser)}</Text>;
};

export default Login;
