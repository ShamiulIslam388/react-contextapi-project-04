import "./styles.css";
import ThemeProvider from "./context/ThemeContext";
import Button from "./Button";

export default function App() {
  return (
    <ThemeProvider>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button />
    </ThemeProvider>
  );
}
