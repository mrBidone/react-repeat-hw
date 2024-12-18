import { useState } from "react";
import { EditForm, GridItem, Text } from "..";
import style from "./TodoListItem.module.css";

export const TodoListItem = ({
  id,
  text,
  completes,
  index,
  onDeleteTodos,
  onEditTodo,
  isEditTodo,
  onSaveEdit,
  onToogleComplete,
}) => {
  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          Todo #{index + 1}
        </Text>
        {!isEditTodo ? (
          <Text>{text}</Text>
        ) : (
          <EditForm
            onSave={(updatedText) => onSaveEdit(id, updatedText)}
            onCancel={() => onSaveEdit(null)}
            defaultValue={text}
          />
        )}
        <button
          onClick={() => {
            onDeleteTodos(id);
          }}
          className={style.deleteButton}
          type="button"
        >
          X
        </button>
        <span>status: </span>
        <button
          onClick={() => {
            onToogleComplete(id);
          }}
        >
          {completes ? "🟥 - no completed" : "🟩 - completed"}
        </button>
        <button
          onClick={() => {
            onEditTodo(id);
          }}
          className={style.editButton}
          type="button"
        >
          /
        </button>
      </div>
    </GridItem>
  );
};
