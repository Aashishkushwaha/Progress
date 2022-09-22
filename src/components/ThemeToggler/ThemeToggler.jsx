import React from "react";
import useTheme from "../../hooks/useTheme";
import { keyUpHandler } from "../../utils/utility";

function ThemeToggler() {
  const { theme, toggleTheme, setLightTheme, setDarkTheme } = useTheme();

  return (
    <div className="sidebar__theme-container">
      <label
        tabIndex={0}
        htmlFor="theme-switch"
        onClick={setLightTheme}
        onKeyUp={(e) => keyUpHandler(e, setLightTheme)}
      >
        light
      </label>
      <div
        tabIndex={0}
        id="theme-switch"
        onClick={toggleTheme}
        className="sidebar__theme-box"
        onKeyUp={(e) => keyUpHandler(e, toggleTheme)}
      >
        <span className={`sidebar__theme-ball sidebar-theme-ball-${theme}`} />
      </div>
      <label
        tabIndex={0}
        htmlFor="theme-switch"
        onClick={setDarkTheme}
        onKeyUp={(e) => keyUpHandler(e, setDarkTheme)}
      >
        dark
      </label>
    </div>
  );
}

export default ThemeToggler;
