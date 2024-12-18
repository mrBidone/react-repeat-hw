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
  defaultValue,
  onSaveEdit,
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
