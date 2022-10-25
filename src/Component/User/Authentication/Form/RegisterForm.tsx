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

interface ISuccessLogin extends Object {
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

export const RegisterForm: React.FunctionComponent<Props> = (props: Props) => {
  const [error, setError] = useObjectState(initialErrorState);
  const [email, setEmail] = useState("test");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [redirectToRouter, setRedirectToRouter] = useState(false);
  const registerUrl = useSelector((state: RootState) =>
    getApiUrl(state, "API_REGISTER")
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

  const handleChangePasswordConfirm = (text: string) => {
    resetError();
    setPasswordConfirm(text.toLowerCase());
  };

  const passwordMatch = () => {
    if (password.length === 0) return false;
    return passwordConfirm === password;
  };

  // const handleSubmitOld = async () => {
  //   if (isLoading) return;
  //   const request = new XMLHttpRequest();
  //   request.onreadystatechange = (e) => {
  //     if (request.readyState !== 4) {
  //       return;
  //     }
  //     setIsLoading(false);
  //     if (request.status === 200) {
  //       const response: ISuccessLogin = JSON.parse(request.responseText);
  //       dispatch(setToken(response.access_token));
  //       setRedirectToRouter(true);
  //     } else {
  //       console.warn(request.responseText);
  //
  //       setError(JSON.parse(request.responseText));
  //     }
  //   };
  //
  //   request.open("POST", registerUrl);
  //   request.setRequestHeader("Content-Type", "application/json");
  //   request.send(JSON.stringify({ email: email, password: password }));
  //   setIsLoading(true);
  // };

  const handleSubmit = async () => {
    Request({
      callbackError(response: ISuccessLogin): void {
        // dispatch(setToken(response.access_token));
        // setRedirectToRouter(true);
      },
      callbackSuccess(response: ISuccessLogin): void {
        dispatch(setToken(response.access_token));
        setRedirectToRouter(true);
      },
      data: { email: email, password: password },
      header: [{ header: "Content-Type", value: "application/json" }],
      methode: "POST",
      url: registerUrl,
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
      <Input
        error={error.password}
        label="Confirmation du mot de passe"
        password
        onChangeText={handleChangePasswordConfirm}
      />
      <>
        <Button
          disabled={!passwordMatch()}
          loading={isLoading}
          title={
            isLoading
              ? "Chargement"
              : passwordMatch()
              ? "Inscription"
              : " ( les mots de passe ne correspondent pas )"
          }
          onPress={handleSubmit}
        />
        <Button
          onPress={props.toggleForm}
          variant="text"
          title="Deja un compte ? Connecte toi"
        />
      </>

      {redirectToRouter && <Navigate to="/" />}
    </Flex>
  );
};
