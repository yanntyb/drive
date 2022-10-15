import { Stack } from "@mui/material";
import React, { ReactNode } from "react";
import MenuAppBar from "../AppBar/AppBar";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Stack>
      <MenuAppBar />
      {props.children}
    </Stack>
  );
};
