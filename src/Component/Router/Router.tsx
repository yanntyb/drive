import React from "react";
import { LinkButton } from "./LinkButton/LinkButton";
import { Text } from "react-native";

export const Router = () => {
  return (
    <>
      <LinkButton path={"/test"} title={"drive"}>
        <Text>Drive</Text>
      </LinkButton>
    </>
  );
};
