import React, { createContext, useContext, useReducer } from "react";
import { TodoContextType, TodoItem } from "../types/todoTypes";
import { initialState, todoReducer } from "./todoReducer";

export const TodoContext = createContext<TodoContextType>(
  {} as TodoContextType
);

interface TodoContextProviderProps {
  children: React.ReactNode;
}

export const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (todo: TodoItem) => {
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
  };
  const editTodo = (id: number, updatedText: string) => {
    const updatedTodos = state.todos.map((item) =>
      item.id === id ? { ...item, todoText: updatedText } : item
    );
    dispatch({
      type: "EDIT_TODO",
      payload: updatedTodos,
    });
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = state.todos.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    dispatch({
      type: "EDIT_TODO",
      payload: updatedTodos,
    });
  };
  const deleteTodo = (id: number) => {
    const updatedTodos = state.todos.filter((item) => item.id !== id);
    dispatch({
      type: "DELETE_TODO",
      payload: updatedTodos,
    });
  };
  return (
    <TodoContext.Provider
      value={{ todos: state.todos, addTodo, editTodo, toggleTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
