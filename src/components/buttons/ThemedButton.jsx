import { useTheme } from "../../context/ThemeContext";
import DarkModeButton from "./DarkModeButton";
import LightModeButton from "./LightModeButton";

const ThemedButton = (props) => {
  const { darkMode } = useTheme();

  return darkMode ? (
    <DarkModeButton {...props} />
  ) : (
    <LightModeButton {...props} />
  );
};

export default ThemedButton;
