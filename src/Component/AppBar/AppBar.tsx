import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { getTitle } from "./appBarSlice";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { LinkButton } from "../Router/LinkButton/LinkButton";

export default function MenuAppBar() {
  const title = useSelector(getTitle);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>

          <LinkButton path={"/"} title={"Menu"}>
            <Button color="inherit">Menu</Button>
          </LinkButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
