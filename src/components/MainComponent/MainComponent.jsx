import React, { useContext, useState } from "react";
import { StateContext } from "../../context/StateContextProvider";
import { getColumnTitle, getFinishedSubtasks } from "../../utils/utility";
import Modal from "../Modal/Modal";
import AddTask from "../Tasks/AddTask";
import EditTask from "../Tasks/EditTask";
import "./MainComponent.css";

function MainComponent() {
  const { state, setState } = useContext(StateContext);
  const [addTaskModalOpen, setAddTaskModalOpen] = useState(false);
  const [editTaskModalOpen, setEditTaskModalOpen] = useState(false);

  const taskClickHandler = (selectedTask, selectedColumn) => {
    setEditTaskModalOpen(true);
    setState((state) => ({ ...state, selectedTask, selectedColumn }));
  };

  const addTaskHandler = ({ status, data }) => {
    const updatedState = { ...state };
    updatedState.boards[state.selectedBoard].items[status] = [
      ...updatedState.boards[state.selectedBoard].items[status],
      data,
    ];
    setState(updatedState);
    setAddTaskModalOpen(false);
  };

  const editTaskHandler = ({ status, ...data }) => {
    const updatedState = { ...state };
    if (status === state.selectedColumn) {
      updatedState.boards[state.selectedBoard].items[status][
        state.selectedTask
      ] = data;
    } else {
      updatedState.boards[state.selectedBoard].items[status] = [
        ...updatedState.boards[state.selectedBoard].items[status],
        data,
      ];
    }
    setState(updatedState);
    setEditTaskModalOpen(false);
  };

  return (
    <section className="board__container">
      {addTaskModalOpen && (
        <Modal onCancel={() => setAddTaskModalOpen(false)}>
          <AddTask
            onSuccess={(data) => addTaskHandler(data)}
            onFailure={() => setAddTaskModalOpen(false)}
            statuses={Object.keys(state.boards[state.selectedBoard].items).map(
              (item) => ({ value: item, label: item })
            )}
          />
        </Modal>
      )}
      {editTaskModalOpen && (
        <Modal onCancel={() => setEditTaskModalOpen(false)}>
          <EditTask
            onSuccess={(data) => editTaskHandler(data)}
            onFailure={() => setEditTaskModalOpen(false)}
            statuses={Object.keys(state.boards[state.selectedBoard].items).map(
              (item) => ({ value: item, label: item })
            )}
          />
        </Modal>
      )}
      <div className="board__header flex space-between">
        <div className="board__title">
          {state.boards[state.selectedBoard].title}
        </div>
        <div className="board__controls">
          <button
            className="board__add-new"
            onClick={() => setAddTaskModalOpen(true)}
          >
            add new task
          </button>
        </div>
      </div>
      <div className="boards__list">
        {Object.entries(state.boards[state.selectedBoard]?.items).map(
          ([columnTitle, values], index) => (
            <div className="board__category" key={index}>
              <span
                data-length={values.length}
                className={`board__category-title board__category-title-${columnTitle}`}
              >
                {getColumnTitle(columnTitle)}
              </span>
              <ul className="board__category-items">
                {values.map((item, taskIndex) => (
                  <li
                    tabIndex={0}
                    key={item.title}
                    onClick={() => taskClickHandler(taskIndex, columnTitle)}
                    className="board__item"
                  >
                    <h4 className="board__item-title">{item.title}</h4>
                    <div className="board__subtasks-info">
                      {`${getFinishedSubtasks(item.subtasks)} `}
                      out of {item.subtasks.length}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
        {/* <div className="board__category">
          <div className="board__category-add flex">Add New Column</div>
        </div> */}
      </div>
    </section>
  );
}

export default MainComponent;
