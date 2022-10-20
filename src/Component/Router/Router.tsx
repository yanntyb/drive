import React from "react";
import { LinkButton } from "./LinkButton/LinkButton";
import { Button } from "../Form/Button/Button";
import { Text } from "@react-native-material/core";

export const Router = () => {
  return (
    <>
      <LinkButton path="/profile" title="profile">
        <Text>Profile</Text>
      </LinkButton>
    </>
  );
};
