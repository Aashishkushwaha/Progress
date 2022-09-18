import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../../context/StateContextProvider";
import { toggleThemeColors } from "../../utils/utility";
import "./Sidebar.css";

function Sidebar() {
  const { state, setState } = useContext(StateContext);

  const [selectedTheme, setSelectedTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    toggleThemeColors(selectedTheme);
  }, [selectedTheme]);

  // handlers
  const onThemeChange = () => {
    setSelectedTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  const onTabChange = (selectedBoard) => {
    setState((state) => ({ ...state, selectedBoard }));
  };

  const addTab = () => {
    const newTab = {
      title: `Board ${state.boards.length + 1} `,
      items: {
        todo: [
          {
            title: "Main Task 1",
            subtasks: [
              {
                title: "Task 1",
                completed: false,
              },
            ],
          },
        ],
        doing: [],
        completed: [],
      },
    };
    setState((state) => ({
      ...state,
      selectedBoard: 0,
      boards: [newTab, ...state.boards],
    }));
  };

  return (
    <aside className="sidebar__container">
      <div className="sidebar__title-container">
        <div className="sidebar__image" />
        <h1 className="sidebar__title">Progress</h1>
      </div>
      <div className="sidebar__boards-container">
        <div className="sidebar__boards-label">
          All Boards {`(${state.boards.length})`}
        </div>
        <ul className="sidebar__boards-list">
          {state.boards.map((board, index) => (
            <li
              key={index}
              className={`sidebar__board-item ${
                state.selectedBoard === index ? "active" : ""
              }`}
              onKeyUp={(e) => {
                console.log({ key: e.key });
                ["Enter", " "].includes(e.key) && onTabChange(index);
              }}
              onClick={() => onTabChange(index)}
              tabIndex="1"
            >
              {board.title}
            </li>
          ))}
        </ul>
        <div className="sidebar__controllers">
          <button onClick={addTab} className="sidebar__board-new-item">
            Create New Board
          </button>
          <div className="sidebar__theme-container">
            <label
              htmlFor="theme-switch"
              onClick={() => setSelectedTheme("light")}
            >
              light
            </label>
            <div
              onClick={onThemeChange}
              id="theme-switch"
              className="sidebar__theme-box"
            >
              <span
                className={`sidebar__theme-ball sidebar-theme-ball-${selectedTheme}`}
              />
            </div>
            <label
              htmlFor="theme-switch"
              onClick={() => setSelectedTheme("dark")}
            >
              dark
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
