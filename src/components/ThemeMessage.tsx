import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeMessage = () => {
  const { theme } = useContext(ThemeContext);

  return <p>Current Theme: {theme}</p>;
};

export default ThemeMessage;
