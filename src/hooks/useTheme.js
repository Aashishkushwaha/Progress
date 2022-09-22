import { useState, useEffect } from "react";
import { toggleThemeColors } from "../utils/utility";

function useTheme() {
  const [theme, setTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    toggleThemeColors(theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));

  const setLightTheme = () => setTheme("light");
  const setDarkTheme = () => setTheme("dark");

  return {
    theme,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
  };
}

export default useTheme;
