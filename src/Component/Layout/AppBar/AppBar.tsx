import * as React from "react";
import { getTitle, doNotDisplayThisTitle } from "./appBarSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, AppBar } from "@react-native-material/core";

export default function MenuAppBar() {
  const title = useSelector(getTitle);
  const dispatch = useDispatch();

  dispatch(doNotDisplayThisTitle("accueil"));

  return <AppBar title={title}></AppBar>;
}
