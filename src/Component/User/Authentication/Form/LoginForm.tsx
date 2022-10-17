// @ts-ignore
import useObjectState from "react-hooks-object-state";
import React from "react-native";
import { Flex, Text } from "@react-native-material/core";
import { Input } from "../../../Form/Input/Input";
import { useState } from "react";
import { Button } from "../../../Form/Button/Button";
import { useSelector } from "react-redux";
import { getApiUrl } from "../../../../Helper/Api/apiSlice";
import { RootState } from "../../../../store";

interface ErrorInterface {
  email: string | false;
  password: string | false;
}

const initialError: ErrorInterface = {
  email: false,
  password: false,
};

export const LoginForm = () => {
  const [error, setError] = useObjectState(initialError);
  const [email, setEmail] = useState("test");
  const [password, setPassword] = useState("");
  const [debug, setDebug] = useState("");
  const loginUrl = useSelector((state: RootState) =>
    getApiUrl(state, "API_LOGIN")
  );

  const handleChangeEmail = (text: string) => {
    setEmail(text);
  };
  const handleChangePassword = (text: string) => {
    setPassword(text);
  };
  const handleSubmit = () => {
    fetch(loginUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json)
      .then((json) => {
        console.log(json);
      });
  };

  return (
    <Flex>
      <Input label="Email" onChangeText={handleChangeEmail} />
      <Input label="Password" password onChangeText={handleChangePassword} />
      <Button title="Connection" onPress={handleSubmit} />
      <Text>{debug}</Text>
    </Flex>
  );
};
