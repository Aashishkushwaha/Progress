import React, { useContext } from "react";
import { StateContext } from "../../context/StateContextProvider";
import { getFinishedSubtasks } from "../../utils/utility";
import "./MainComponent.css";

function MainComponent() {
  const { state } = useContext(StateContext);

  return (
    <section className="board__container">
      <div className="board__header flex space-between">
        <div className="board__title">
          {state.boards[state.selectedBoard].title}
        </div>
        <div className="board__controls">
          <button className="board__add-new">add new task</button>
        </div>
      </div>
      <div className="boards__list">
        {Object.entries(state.boards[state.selectedBoard].items).map(
          ([title, values], index) => (
            <div className="board__category" key={index}>
              <span
                data-length={values.length}
                className={`board__category-title board__category-title-${title}`}
              >
                {title}
              </span>
              <ul className="board__category-items">
                {values.map((item) => (
                  <li key={item.title} className="board__item">
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
