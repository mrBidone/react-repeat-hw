import { Form, Text, TodoList } from "components";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  editTodo,
  toggleComplete,
} from "../redux/todosSlice";

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const onAddTodos = (todosText) => {
    const newTodo = {
      id: nanoid(),
      text: todosText,
      completes: false,
    };
    dispatch(addTodo(newTodo));
  };

  const onDeleteTodos = (todosId) => {
    dispatch(deleteTodo(todosId));
  };

  const onEditTodo = (todosId) => {
    const newTodoText = prompt("Enter new task:");
    dispatch(editTodo({ id: todosId, todo: newTodoText }));
  };

  const onToogleComplete = (todosId) => {
    dispatch(toggleComplete(todosId));
  };

  return (
    <>
      <Form onSubmit={onAddTodos} />
      {todos.length === 0 ? (
        <Text textAlign="center">There are no any todos...</Text>
      ) : (
        <TodoList
          todos={todos}
          onEditTodo={onEditTodo}
          onDeleteTodos={onDeleteTodos}
          onToogleComplete={onToogleComplete}
        ></TodoList>
      )}
    </>
  );
};
