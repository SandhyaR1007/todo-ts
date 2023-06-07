export type TodoContextType = {
  todos: TodoItem[];
  addTodo: (todo: TodoItem) => void;
  editTodo: (id: number, updatedText: string) => void;
  toggleTodo: (todoId: number) => void;
  deleteTodo: (todoId: number) => void;
};

export interface TodoItem {
  id: number;
  todoText: string;
  isDone: boolean;
  subTodos: SubTodoItem[];
}
interface SubTodoItem {
  id: number;
  todoText: string;
  isDone: boolean;
}
