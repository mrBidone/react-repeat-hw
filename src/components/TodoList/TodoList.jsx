import { Grid, TodoListItem } from "..";

export const TodoList = ({ todos, onDeleteTodos }) => {
  return (
    <Grid>
      {todos.map(({ id, text, completes }, index) => (
        <TodoListItem
          key={id}
          id={id}
          text={text}
          completes={completes}
          index={index}
          onDeleteTodos={onDeleteTodos}
        />
      ))}
    </Grid>
  );
};
