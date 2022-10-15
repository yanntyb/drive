import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { getTitle, doNotDisplayThisTitle } from "./appBarSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { LinkButton } from "../Router/LinkButton/LinkButton";

export default function MenuAppBar() {
  const title = useSelector(getTitle);
  const dispatch = useDispatch();

  dispatch(doNotDisplayThisTitle("accueil"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>

          <LinkButton path={"/"} title={"accueil"}>
            <Button color="inherit">Accueil</Button>
          </LinkButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
