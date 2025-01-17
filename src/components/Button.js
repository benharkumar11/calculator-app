import React from "react";

const Button = ({ name, clickHandler }) => {
  return (
    <button className="button" onClick={() => clickHandler(name)}>
      {name}
    </button>
  );
};

export default Button;