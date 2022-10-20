// @ts-ignore
import useObjectState from "react-hooks-object-state";
import React from "react-native";
import { Flex, Text } from "@react-native-material/core";
import { Input } from "../../../Form/Input/Input";
import { useState } from "react";
import { Button } from "../../../Form/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getApiUrl } from "../../../../Helper/Api/apiSlice";
import { RootState } from "../../../../store";
import { setToken } from "../authenticationSlice";
import { Navigate } from "react-router-native";

interface IErrorLogin {
  email: Array<string> | false;
  password: Array<string> | false;
}

interface ISuccessLogin {
  access_token: string;
  token_type: string;
}

const initialErrorState: IErrorLogin = {
  email: false,
  password: false,
};

export const LoginForm = () => {
  const [error, setError] = useObjectState(initialErrorState);
  const [email, setEmail] = useState("test");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [redirectToRouter, setRedirectToRouter] = useState(false);
  const loginUrl = useSelector((state: RootState) =>
    getApiUrl(state, "API_LOGIN")
  );
  const dispatch = useDispatch();

  const resetError = () => {
    setError(initialErrorState);
  };

  const handleChangeEmail = (text: string) => {
    resetError();
    setEmail(text);
  };
  const handleChangePassword = (text: string) => {
    resetError();
    setPassword(text.toLowerCase());
  };

  const handleSubmit = async () => {
    if (isLoading) return;
    const request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }
      setIsLoading(false);
      if (request.status === 200) {
        const response: ISuccessLogin = JSON.parse(request.responseText);
        dispatch(setToken(response.access_token));
        setRedirectToRouter(true);
      } else {
        console.warn(request.responseText);

        setError(JSON.parse(request.responseText));
      }
    };

    request.open("POST", loginUrl);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify({ email: email, password: password }));
    setIsLoading(true);
  };

  return (
    <Flex>
      <Input
        error={error.email}
        label="Email"
        onChangeText={handleChangeEmail}
      />
      <Input
        error={error.password}
        label="Password"
        password
        onChangeText={handleChangePassword}
      />
      <>
        <Button
          loading={isLoading}
          title={isLoading ? "Chargement" : "Connection"}
          onPress={handleSubmit}
        />
      </>

      {redirectToRouter && <Navigate to="/" />}
    </Flex>
  );
};
