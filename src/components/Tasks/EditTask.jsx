import React, { useState, useContext } from "react";
import { StateContext } from "../../context/StateContextProvider";
import { literalDeepCopy } from "../../utils/utility";
import Box from "../Box/Box";
import Card from "../Card/Card";
import {
  Form,
  FormLabel,
  FormTitle,
  FormButton,
  FormSelect,
  FormFieldContainer,
} from "../Form";
import FormCheckbox from "../Form/FormCheckbox";

function EditTask({ onFailure, onSuccess, statuses }) {
  const { state } = useContext(StateContext);
  const [status, setStatus] = useState(state.selectedColumn);
  const [data, setData] = useState(
    literalDeepCopy(
      state.boards[state.selectedBoard].items[state.selectedColumn][
        state.selectedTask
      ]
    )
  );

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSuccess({ status, ...data });
  };

  const onSubTaskStatusChange = (index) => {
    const updatedData = { ...data };
    data.subtasks[index].completed = !data?.subtasks[index].completed;
    setData(updatedData);
  };

  return (
    <Card>
      <Form onSubmit={onSubmitHandler}>
        <div className="flex gap-4" style={{ justifyContent: "space-between" }}>
          <FormTitle>{data?.title}</FormTitle>
          <div>Ellipsis</div>
        </div>
        <FormFieldContainer>
          <FormLabel className="dull-text">{data?.description}</FormLabel>
        </FormFieldContainer>
        <FormFieldContainer>
          <FormLabel>
            Subtasks ({data?.subtasks.filter((item) => Boolean(item)).length} /{" "}
            {data?.subtasks.length})
          </FormLabel>
          <div className="flex flex-column gap">
            {data?.subtasks.map((task, index) => (
              <FormCheckbox
                key={index}
                id={`task-${index}`}
                checked={task?.completed}
                onChange={() => onSubTaskStatusChange(index)}
              >
                {/* {task.title || "This is subtask"} */}
                {task?.title}
              </FormCheckbox>
            ))}
          </div>
        </FormFieldContainer>
        <FormFieldContainer>
          <FormLabel htmlFor="add-new-status">Status</FormLabel>
          <FormSelect
            id="add-new-status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            options={statuses}
          />
        </FormFieldContainer>
        <FormFieldContainer>
          <div className="flex gap-2">
            <FormButton variant="secondary" shape="rounded" onClick={onFailure}>
              Cancel
            </FormButton>
            <FormButton
              type="submit"
              variant="primary"
              shape="rounded"
              onClick={onSubmitHandler}
            >
              Update Task
            </FormButton>
          </div>
        </FormFieldContainer>
      </Form>
    </Card>
  );
}

EditTask.defaultProps = {
  onFailure: () => null,
  onSuccess: () => null,
  statuses: [
    { label: "Todo", value: "todo" },
    { label: "Doing", value: "doing" },
    { label: "Done", value: "done" },
  ],
};

export default EditTask;
