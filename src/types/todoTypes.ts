export type TodoContextType = {
  todos: TodoItem[];
  addTodo: (todo: TodoItem) => void;
  editTodo: (id: number, updatedText: string) => void;
  toggleTodo: (todoId: number) => void;
  deleteTodo: (todoId: number) => void;
  addSubTodo: (id: number, todoItem: SubTodoItem) => void;
  editSubTodo: (id: number, subTodoId: number, todoText: string) => void;
  deleteSubTodo: (id: number, subTodoId: number) => void;
  toggleDoneSubTodo: (id: number, subTodoId: number) => void;
  markAllAsDone: (id: number) => void;
};

export interface TodoItem {
  id: number;
  todoText: string;
  isDone: boolean;
  subTodos: SubTodoItem[];
}
export interface SubTodoItem {
  id: number;
  todoText: string;
  isDone: boolean;
}
