import React from "react";
import Button from "../Button/index";

export const Content = ({ setIsUser }) => {
  const hanldeOffSession = () => {
    setIsUser(false);
    console.log("Handle off session");
  };

  return (
    <section>
      <div>Content</div>
      <div className="">CON USUARIO</div>
      <Button
        className="btn"
        onClick={() => hanldeOffSession()}
        content="Cerrar sesión"
      />
    </section>
  );
};
