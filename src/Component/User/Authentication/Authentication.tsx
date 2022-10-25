import { LoginForm } from "./Form/LoginForm";
import { useState } from "react";
import { RegisterForm } from "./Form/RegisterForm";

export const Authentication = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleShowLogin = (login: boolean) => {
    setShowLogin(login);
  };

  return (
    <>
      {showLogin ? (
        <LoginForm toggleForm={() => toggleShowLogin(false)} />
      ) : (
        <RegisterForm toggleForm={() => toggleShowLogin(true)} />
      )}
    </>
  );
};
