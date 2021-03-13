import { ThemeContext } from "./context/ThemeContext";

const Button = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <button className={context.color} onClick={context.changeColor}>
          Change Color
        </button>
      )}
    </ThemeContext.Consumer>
  );
};

export default Button;
