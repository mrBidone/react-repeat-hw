import { GridItem, Text } from "..";
import style from "./TodoListItem.module.css";

export const TodoListItem = ({ id, text, completes, index, onDeleteTodos }) => {
  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          {index + 1}
        </Text>
        <Text>{text}</Text>
        <button
          onClick={() => {
            onDeleteTodos(id);
          }}
          className={style.deleteButton}
          type="button"
        >
          X
        </button>
        <button className={style.editButton} type="button">
          /
        </button>
      </div>
    </GridItem>
  );
};
