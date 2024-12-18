import { Form, Text, TodoList } from "components";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

export const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    try {
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch {
      return [];
    }
  });
  const [isEditTodo, setIsEditTodo] = useState(null);
  const [defaultValue, setDefaultValue] = useState("");

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
    setIsEditTodo(todosId);
  };

  const onSaveEdit = (todosId, updatedText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return todo.id === todosId ? { ...todo, text: updatedText } : todo;
      })
    );
    setIsEditTodo(null);
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
          onSaveEdit={onSaveEdit}
        ></TodoList>
      )}
    </>
  );
};
