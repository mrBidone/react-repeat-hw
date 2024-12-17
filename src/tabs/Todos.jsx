import { Form, Text, TodoList } from "components";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

export const Todos = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) ?? [];
  });
  const [isEditTodo, setIsEditTodo] = useState(false);
  const [defaultValue, setDefaultValue] = useState("defValue");

  const onAddTodos = (todosText) => {
    const newTodo = {
      id: nanoid(),
      text: todosText,
      completes: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDeleteTodos = (todosId) => {
    setTodos(todos.filter((item) => item.id !== todosId));
  };

  const onEditTodo = (todosId) => {
    setIsEditTodo(true);
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
          isEditTodo={isEditTodo}
          defaultValue={defaultValue}
        ></TodoList>
      )}
    </>
  );
};
