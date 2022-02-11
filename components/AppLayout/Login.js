import React from "react";
import Button from "../Button/index";

export const Login = ({ setIsUser }) => {
  const hanldeOnSession = () => {
    setIsUser(true);
    console.log("Hanlde on session");
  };

  return (
    <section>
      <div>Login Form</div>
      <div className="">SIN USUARIO</div>
      <Button
        className="btn"
        onClick={() => hanldeOnSession()}
        content="Iniciar sesión"
      />
    </section>
  );
};
