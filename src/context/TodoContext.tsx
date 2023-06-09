import React, { createContext, useContext, useReducer } from "react";
import { SubTodoItem, TodoContextType, TodoItem } from "../types/todoTypes";
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
    const foundTodo = state.todos.find((item) => item.id === id);
    if (!foundTodo?.isDone) {
      dispatch({
        type: "EDIT_TODO",
        payload: markAllAsDone(id),
      });
    } else {
      const updatedTodos = state.todos.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      );
      dispatch({
        type: "EDIT_TODO",
        payload: updatedTodos,
      });
    }
  };
  const deleteTodo = (id: number) => {
    const updatedTodos = state.todos.filter((item) => item.id !== id);
    dispatch({
      type: "DELETE_TODO",
      payload: updatedTodos,
    });
  };
  const addSubTodo = (id: number, todoItem: SubTodoItem) => {
    const updatedTodos = state.todos.map((item) =>
      item.id === id
        ? { ...item, subTodos: [...item.subTodos, todoItem] }
        : item
    );
    dispatch({
      type: "EDIT_TODO",
      payload: updatedTodos,
    });
  };
  const editSubTodo = (id: number, subTaskId: number, todoText: string) => {
    let subTodo = state.todos.find((item) => item.id === id)?.subTodos;
    subTodo = subTodo?.map((item) =>
      item.id === subTaskId ? { ...item, todoText } : item
    );

    const updatedTodos = state.todos.map((item) =>
      item.id === id ? { ...item, subTodos: subTodo ?? [] } : item
    );
    dispatch({
      type: "EDIT_TODO",
      payload: updatedTodos,
    });
  };
  const deleteSubTodo = (id: number, subTaskId: number) => {
    let subTodo = state.todos.find((item) => item.id === id)?.subTodos;
    subTodo = subTodo?.filter((item) => item.id !== subTaskId);

    const updatedTodos = state.todos.map((item) =>
      item.id === id ? { ...item, subTodos: subTodo ?? [] } : item
    );
    dispatch({
      type: "EDIT_TODO",
      payload: updatedTodos,
    });
  };
  const toggleDoneSubTodo = (id: number, subTaskId: number) => {
    let subTodo = state.todos.find((item) => item.id === id)?.subTodos;
    subTodo = subTodo = subTodo?.map((item) =>
      item.id === subTaskId ? { ...item, isDone: !item.isDone } : item
    );

    const updatedTodos = state.todos.map((item) =>
      item.id === id ? { ...item, subTodos: subTodo ?? [] } : item
    );
    dispatch({
      type: "EDIT_TODO",
      payload: updatedTodos,
    });
  };
  const markAllAsDone = (id: number) => {
    let subTodo = state.todos.find((item) => item.id === id)?.subTodos;
    subTodo = subTodo?.map((item) => ({ ...item, isDone: !item.isDone }));

    const updatedTodos = state.todos.map((item) =>
      item.id === id
        ? { ...item, isDone: !item.isDone, subTodos: subTodo ?? [] }
        : item
    );
    return updatedTodos;
  };
  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        editTodo,
        toggleTodo,
        deleteTodo,
        addSubTodo,
        editSubTodo,
        deleteSubTodo,
        toggleDoneSubTodo,
        markAllAsDone,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
