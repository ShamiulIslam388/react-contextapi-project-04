import "./styles.css";
import { createContext } from "react";

export default function App() {
  const myContext = createContext({ color: "black" });
  console.log(myContext._currentValue.color);
  console.log(myContext.Provider);
  console.log(myContext.Consumer);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
