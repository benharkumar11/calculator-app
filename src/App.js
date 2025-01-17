import React, { useState } from "react";
import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("0");

  const handleButtonClick = (buttonName) => {
    if (buttonName === "AC") {
      setInput("0");
    } else if (buttonName === "=") {
      try {
        setInput(eval(input).toString()); // Avoid eval in production
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => (prev === "0" ? buttonName : prev + buttonName));
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <ButtonPanel clickHandler={handleButtonClick} />
    </div>
  );
};

export default App;