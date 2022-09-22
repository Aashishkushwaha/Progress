import React, { useState } from "react";
import Card from "../Card/Card";
import {
  Form,
  FormFieldContainer,
  FormLabel,
  FormTitle,
  FormInput,
  FormTextArea,
  FormButton,
  FormSelect,
} from "../Form";

function AddTask({ onFailure, onSuccess, statuses }) {
  const [subtasks, setSubtasks] = useState(["Subtask 1", "Subtask 2"]);
  const [status, setStatus] = useState("todo");
  const [title, setTitle] = useState("Default Title");
  const [description, setDescription] = useState("Default Description");

  const onSubtaskChange = (e, index) => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks[index] = e.target.value;
    setSubtasks(updatedSubtasks);
  };

  const removeSubtaskHandler = (index) => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks.splice(index, 1);
    setSubtasks(updatedSubtasks);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSuccess({
      status,
      data: {
        title,
        description,
        subtasks: subtasks.map((title) => ({ title, completed: false })),
      },
    });
  };

  return (
    <Card>
      <Form onSubmit={onSubmitHandler}>
        <FormTitle>Add New Task</FormTitle>
        <FormFieldContainer>
          <FormLabel htmlFor="add-new-title">Title</FormLabel>
          <FormInput
            placeholder="Koun hoon main?"
            id="add-new-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormFieldContainer>
        <FormFieldContainer>
          <FormLabel htmlFor="add-new-description">Description</FormLabel>
          <FormTextArea
            rows={4}
            placeholder="Haan ... maloom hai chal tere baap ko mat sikha"
            id="add-new-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormFieldContainer>
        <FormFieldContainer>
          <FormLabel>Subtasks ({subtasks.length} / 5)</FormLabel>
          <div className="flex flex-column gap-1">
            {subtasks.map((task, index) => (
              <div className="flex gap-2 full-w" key={index}>
                <FormInput
                  key={index}
                  required
                  // placeholder={`Subtask ${index + 1}`}
                  placeholder={`Tu mera bachha hai`}
                  value={task}
                  onChange={(e) => onSubtaskChange(e, index)}
                />
                {subtasks.length > 1 && (
                  <div
                    className="close__icon font-3"
                    onClick={() => removeSubtaskHandler(index)}
                  >
                    &times;
                  </div>
                )}
              </div>
            ))}
            <FormButton
              disabled={
                !subtasks.every((task) => Boolean(task)) || subtasks.length > 4
              }
              onClick={(e) => {
                e.preventDefault();
                setSubtasks((subtasks) => [...subtasks, ""]);
              }}
              variant="secondary"
              shape="rounded"
            >
              Add New Subtask
            </FormButton>
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
              disabled={!title || !description || subtasks.length === 0}
            >
              Create Task
            </FormButton>
          </div>
        </FormFieldContainer>
      </Form>
    </Card>
  );
}

AddTask.defaultProps = {
  onFailure: () => null,
  onSuccess: () => null,
  statuses: [
    { label: "Todo", value: "todo" },
    { label: "Doing", value: "doing" },
    { label: "Done", value: "done" },
  ],
};

export default AddTask;
