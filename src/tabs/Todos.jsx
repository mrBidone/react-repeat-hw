import { Form, Text } from "components";
import { nanoid } from "nanoid";
import { useState } from "react";

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const onAddTodos = (todos) => {
    const prevTodos = { ...todos, id: nanoid() };
  };

  return (
    <>
      <Form onSubmit={onAddTodos} />
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos...</Text>
      )}
    </>
  );
};
