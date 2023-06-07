import { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import { disableAdd } from "../utils";

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
    <form className="flex gap-3" onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="enter todo"
        className="bg-gray-100 p-2 rounded-sm shadow-sm"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        className="px-10 py-3 rounded-sm shadow-sm uppercase bg-purple-400 disabled:bg-purple-200 disabled:text-gray-400"
        type="submit"
        disabled={disableAdd(todoText) < 1}
      >
        add
      </button>
    </form>
  );
};

export default TodoInput;
