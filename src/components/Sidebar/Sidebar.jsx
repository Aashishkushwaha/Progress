import React, { useContext, useState } from "react";
import { StateContext } from "../../context/StateContextProvider";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import { keyUpHandler } from "../../utils/utility";
import AddBoard from "../AddBoard";
import Modal from "../Modal/Modal";
import "./Sidebar.css";

function Sidebar() {
  const { state, setState } = useContext(StateContext);
  const [addBoardModalOpen, setAddBoardModalOpen] = useState(false);

  const onBoardChange = (selectedBoard) => {
    setState((state) => ({ ...state, selectedBoard }));
  };

  const addBoardHandler = (data) => {
    setState((state) => ({
      ...state,
      selectedBoard: 0,
      boards: [data, ...state.boards],
    }));
    setAddBoardModalOpen(false);
  };

  return (
    <>
      {addBoardModalOpen && (
        <Modal onCancel={() => setAddBoardModalOpen(false)}>
          <AddBoard
            onSuccess={(data) => addBoardHandler(data)}
            onFailure={() => setAddBoardModalOpen(false)}
          />
        </Modal>
      )}
      <aside className="sidebar__container">
        <div className="sidebar__title-container">
          <div className="sidebar__image" />
          <h1 className="sidebar__title">Progress</h1>
        </div>
        <div className="sidebar__boards-container">
          <div className="sidebar__boards-label flex">
            All Boards {`(${state.boards.length})`}
          </div>
          <ul className="sidebar__boards-list">
            {state.boards.map(({ title }, index) => (
              <li
                key={index}
                className={`sidebar__board-item ${
                  state.selectedBoard === index ? "active" : ""
                }`}
                onKeyUp={(e) => keyUpHandler(e, () => onBoardChange(index))}
                onClick={() => onBoardChange(index)}
                tabIndex="1"
              >
                {title}
              </li>
            ))}
          </ul>
          <div className="sidebar__controllers">
            <button
              onClick={() => setAddBoardModalOpen(true)}
              className="sidebar__board-new-item"
            >
              Create New Board
            </button>
            <ThemeToggler />
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
