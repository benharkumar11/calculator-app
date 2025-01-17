import React from "react";
import Button from "./Button";

const ButtonPanel = ({ clickHandler }) => {
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    ".", "0", "=", "+",
    "AC"
  ];

  return (
    <div className="button-panel">
      {buttons.map((btn, index) => (
        <Button key={index} name={btn} clickHandler={clickHandler} />
      ))}
    </div>
  );
};

export default ButtonPanel;