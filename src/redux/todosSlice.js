import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState: INITIAL_STATE,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    editTodo: (state, action) => {
      const item = state.todos.find((item) => item.id === action.payload.id);
      item.text = action.payload.todo;
    },
    toggleComplete: (state, action) => {
      const item = state.todos.find((item) => item.id === action.payload);
      item.completes = !item.completes;
    },
  },
});

export const todosReducer = todosSlice.reducer;
export const { addTodo, deleteTodo, editTodo, toggleComplete } =
  todosSlice.actions;
