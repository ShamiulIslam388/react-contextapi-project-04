import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [color, setColor] = useState("red");
  function changeColor() {
    if (color === "red") setColor("blue");
    else setColor("red");
  }
  return (
    <ThemeContext.Provider value={{ color, changeColor }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
