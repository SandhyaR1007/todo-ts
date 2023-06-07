import { TodoItem } from "../types/todoTypes";

export type TodoState = {
  todos: TodoItem[];
};
export type ActionType =
  | {
      type: "ADD_TODO";
      payload: TodoItem;
    }
  | { type: "EDIT_TODO"; payload: TodoItem[] }
  | { type: "TOGGLE_TODO"; payload: TodoItem[] }
  | { type: "DELETE_TODO"; payload: TodoItem[] };

export const initialState: TodoState = {
  todos: [],
};

export const todoReducer = (
  state: TodoState,
  action: ActionType
): TodoState => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [action.payload, ...state.todos] };
    case "EDIT_TODO":
      return { ...state, todos: action.payload };
    case "TOGGLE_TODO":
      return { ...state, todos: action.payload };
    case "DELETE_TODO":
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};
