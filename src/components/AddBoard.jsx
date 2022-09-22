import React, { useState } from "react";
import Card from "./Card/Card";
import {
  Form,
  FormLabel,
  FormInput,
  FormTitle,
  FormButton,
  FormFieldContainer,
} from "./Form";

function AddBoard({ onFailure, onSuccess }) {
  const [title, setTitle] = useState("default");
  const [columns, setColumns] = useState([
    { title: "todo", items: [] },
    { title: "doing", items: [] },
    { title: "done", items: [] },
  ]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const board = {
      title,
      items: {},
    };

    columns.map((column) => {
      board.items[column.title] = column.items;
    });

    onSuccess(board);
  };

  const onColumnChange = (e, index) => {
    const updatedColumns = [...columns];
    updatedColumns[index].title = e.target.value
      .replaceAll(/[^a-zA-Z]/g, "")
      .toLowerCase();
    setColumns(updatedColumns);
  };

  const removeColumnHandler = (index) => {
    const updatedColumns = [...columns];
    updatedColumns.splice(index, 1);
    setColumns(updatedColumns);
  };

  return (
    <Card>
      <Form onSubmit={onSubmitHandler}>
        <FormTitle>Add New Board</FormTitle>
        <FormFieldContainer>
          <FormLabel htmlFor="add-new-title">Board Name</FormLabel>
          <FormInput
            placeholder="Koun hoon main?"
            id="add-new-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormFieldContainer>
        <FormFieldContainer>
          <FormLabel>Board Columns ({columns.length} / 5)</FormLabel>
          <div className="flex flex-column gap-1">
            {columns.map((column, index) => (
              <div className="flex gap-2 full-w" key={index}>
                <FormInput
                  key={index}
                  required
                  placeholder={`Column title`}
                  value={column.title}
                  onChange={(e) => onColumnChange(e, index)}
                />
                {columns.length > 1 && (
                  <div
                    className="close__icon font-3"
                    onClick={() => removeColumnHandler(index)}
                  >
                    &times;
                  </div>
                )}
              </div>
            ))}
            <FormButton
              disabled={
                !columns.every((column) => Boolean(column.title)) ||
                columns.length > 4
              }
              onClick={(e) => {
                e.preventDefault();
                setColumns((columns) => [...columns, { title: "", items: [] }]);
              }}
              variant="secondary"
              shape="rounded"
            >
              Add New Column
            </FormButton>
          </div>
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
              Add Board
            </FormButton>
          </div>
        </FormFieldContainer>
      </Form>
    </Card>
  );
}

AddBoard.defaultProps = {
  onFailure: () => null,
  onSuccess: () => null,
  statuses: [
    { label: "Todo", value: "todo" },
    { label: "Doing", value: "doing" },
    { label: "Done", value: "done" },
  ],
};

export default AddBoard;
