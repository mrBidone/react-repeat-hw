import { Grid, TodoListItem } from "..";

export const TodoList = ({
  todos,
  onDeleteTodos,
  onEditTodo,
  isEditTodo,
  defaultValue,
  onSaveEdit,
}) => {
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
          onEditTodo={onEditTodo}
          isEditTodo={id === isEditTodo}
          defaultValue={defaultValue}
          onSaveEdit={onSaveEdit}
        />
      ))}
    </Grid>
  );
};
