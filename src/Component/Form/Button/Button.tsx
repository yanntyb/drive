import React from "react";
import MuiButton from "@react-native-material/core/src/Button";

interface IOnClick {
  (): void;
}

interface Props {
  onPress?: IOnClick;
  title: string;
}

export const Button: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <MuiButton variant="outlined" title={props.title} onPress={props.onPress} />
  );
};
