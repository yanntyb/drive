import React from "react";
import { Link, Navigate } from "react-router-native";
import { changeTitle } from "../../Layout/AppBar/appBarSlice";
import { useDispatch } from "react-redux";

interface IOnPress {
  (): void;
}

interface Props {
  children: React.ReactNode;
  path: string;
  title: string;
  onPress?: IOnPress;
}

const initialProps: Props = {
  children: undefined,
  onPress: () => {},
  path: "",
  title: "",
};

export const LinkButton: React.FunctionComponent<Props> = (props: Props) => {
  const dispatch = useDispatch();

  return (
    <Link to={props.path} onPress={() => dispatch(changeTitle(props.title))}>
      {props.children}
    </Link>
  );
};
