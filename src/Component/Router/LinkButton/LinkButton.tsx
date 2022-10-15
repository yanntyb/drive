import React from "react";
import { Link } from "react-router-native";
import { changeTitle } from "../../AppBar/appBarSlice";
import { useDispatch } from "react-redux";

interface Props {
  children: React.ReactNode;
  path: string;
  title: string;
}

export const LinkButton: React.FunctionComponent<Props> = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <Link
      to={props.path}
      onPress={() => {
        dispatch(changeTitle(props.title));
      }}
    >
      {props.children}
    </Link>
  );
};
