import * as React from "react";
import { getTitle, doNotDisplayThisTitle, changeTitle } from "./appBarSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppBar } from "@react-native-material/core";
import { useEffect } from "react";
import { LinkButton } from "../../Router/LinkButton/LinkButton";
import { Button } from "../../Form/Button/Button";
import { logout } from "../../User/Authentication/authenticationSlice";

interface Props {
  authenticated: boolean;
}

export const MenuAppBar: React.FunctionComponent<Props> = (props: Props) => {
  const title = useSelector(getTitle);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    dispatch(changeTitle(""));
  };

  useEffect(() => {
    dispatch(doNotDisplayThisTitle("accueil"));
  }, []);

  return (
    <AppBar
      title={title}
      trailing={
        props.authenticated && (
          <Button
            color="white"
            compact
            variant="text"
            title="Logout"
            onPress={() => handleLogout()}
          />
        )
      }
    ></AppBar>
  );
};
