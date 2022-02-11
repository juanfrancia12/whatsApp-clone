import React from "react";

const index = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.content}
    </button>
  );
};

export default index;
