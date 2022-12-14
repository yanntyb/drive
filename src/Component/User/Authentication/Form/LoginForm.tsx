// @ts-ignore
import useObjectState from "react-hooks-object-state";
import React from "react";
import { Flex, Text } from "@react-native-material/core";
import { Input } from "../../../Form/Input/Input";
import { useState } from "react";
import { Button } from "../../../Form/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getApiUrl } from "../../../../Helper/Api/apiSlice";
import { RootState } from "../../../../store";
import { setToken } from "../authenticationSlice";
import { Navigate } from "react-router-native";
import { Request } from "../../../../Helper/Api/Request";

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

interface Props {
  toggleForm: () => void;
}

export const LoginForm: React.FunctionComponent<Props> = (props: Props) => {
  const [error, setError] = useObjectState(initialErrorState);
  const [email, setEmail] = useState("");
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
    Request({
      callbackSuccess(response: ISuccessLogin): void {
        console.warn(response);
        dispatch(setToken(response.access_token));
        setRedirectToRouter(true);
      },
      beforeSend: () => {
        setIsLoading(true);
      },
      afterSend: () => {
        setIsLoading(false);
      },
      data: { email: email, password: password },
      header: [{ header: "Content-Type", value: "application/json" }],
      methode: "POST",
      url: loginUrl,
    });
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
          title={isLoading ? "Chargement" : "Connexion"}
          onPress={handleSubmit}
        />
        <Button
          onPress={props.toggleForm}
          variant="text"
          title="Pas encore de compte ? Inscrit toi"
        />
      </>

      {redirectToRouter && <Navigate to="/" />}
    </Flex>
  );
};
