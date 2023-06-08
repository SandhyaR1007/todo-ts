import { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import { checkDisable } from "../utils";

const TodoInput = () => {
  const { addTodo } = useTodoContext();
  const [todoText, setTodoText] = useState<string>("");
  const handleAdd = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addTodo({
      id: Date.now(),
      todoText,
      isDone: false,
      subTodos: [],
    });
    setTodoText("");
  };

  return (
    <form
      className="flex items-center gap-3 w-full justify-center pb-7"
      onSubmit={handleAdd}
    >
      <input
        type="text"
        placeholder="Enter a todo"
        className="bg-gray-50 p-2.5 w-full sm:w-1/2  border rounded-lg outline-none focus:shadow-sm"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        className="px-5 sm:px-10 py-2.5 rounded-md shadow-sm uppercase bg-indigo-500 disabled:bg-indigo-200 text-white"
        type="submit"
        disabled={checkDisable(todoText) < 1}
      >
        add
      </button>
    </form>
  );
};

export default TodoInput;
