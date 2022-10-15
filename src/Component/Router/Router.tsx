import React from "react";
import { LinkButton } from "./LinkButton/LinkButton";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

export const Router = () => {
  return (
    <>
      <LinkButton path={"/test"} title={"drive"}>
        <h1>Drive</h1>
      </LinkButton>
    </>
  );
};
//
