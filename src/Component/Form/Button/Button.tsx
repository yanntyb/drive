import React from "react";
import MuiButton from "@react-native-material/core/src/Button";
import { Color } from "@react-native-material/core";

interface IOnClick {
  (): void;
}

interface Props {
  onPress?: IOnClick;
  title: string;
  variant?: "outlined" | "text" | "contained" | undefined;
  compact?: boolean;
  color?: Color;
  before?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
}

const initialProps: Props = {
  onPress: undefined,
  title: "",
  variant: "outlined",
  compact: false,
  color: "primary",
  disabled: false,
};

export const Button: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <MuiButton
      disabled={props.disabled}
      variant={props.variant}
      title={props.title}
      onPress={props.onPress}
      compact={props.compact}
      color={props.color}
      leading={props.before}
      loading={props.loading}
    />
  );
};
