import ThemeContext from "./context/ThemeContext";

const Button = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <button className={context.color}>Change Color {context.color} </button>
      )}
    </ThemeContext.Consumer>
  );
};

export default Button;
