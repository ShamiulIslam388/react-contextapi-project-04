import "./styles.css";
import { useState } from "react";
import ThemeContext from "./context/ThemeContext";
import Button from "./Button";

export default function App() {
  const [color, setColor] = useState("red");
  return (
    <ThemeContext.Provider value={{ color }}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button />
    </ThemeContext.Provider>
  );
}
