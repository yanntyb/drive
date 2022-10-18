import React from "react";
import { MenuAppBar } from "./AppBar/AppBar";
import { Navigate, Routes, useLocation } from "react-router-native";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../User/Authentication/authenticationSlice";
import { Text } from "react-native";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FunctionComponent<Props> = (props: Props) => {
  const authenticated = useSelector(isAuthenticated);
  const location = useLocation();

  return (
    <>
      <MenuAppBar authenticated={authenticated} />
      <Routes>{props.children}</Routes>
      {!authenticated && location.pathname !== "/authentication" && (
        <Navigate to="/authentication" />
      )}
    </>
  );
};
