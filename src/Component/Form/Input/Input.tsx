import React, { useState } from "react";
import { Text, TextInput, TextInputProps } from "@react-native-material/core";

interface IOnChangeText {
  (text: string): void;
}

interface Props extends TextInputProps {
  label?: string;
  password?: boolean;
  onChangeText: IOnChangeText;
  error: Array<string> | false;
}

export const Input: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <>
      {props.label && <Text>{props.label}</Text>}
      <TextInput
        secureTextEntry={props.password}
        textContentType="password"
        onChangeText={props.onChangeText}
      />
      {props.error && <Text>{props.error[0]}</Text>}
    </>
  );
};
