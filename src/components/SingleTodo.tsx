import { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import { TodoItem } from "../types/todoTypes";
import { disableAdd } from "../utils";

interface Props {
  todoItem: TodoItem;
}
const SingleTodo = ({ todoItem }: Props) => {
  const { id, todoText, isDone, subTodos } = todoItem;
  const { editTodo, toggleTodo, deleteTodo } = useTodoContext();
  const [inputText, setInputText] = useState<string>(todoText);
  const [isEdit, setIsEdit] = useState(false);

  const editHandler = () => {
    if (isEdit && disableAdd(inputText) > 0) {
      editTodo(id, inputText);
      setInputText(todoText);
    }
    setIsEdit(!isEdit);
  };
  return (
    <div className="bg-sky-100 p-3 rounded-md flex flex-col  gap-2 justify-between h-20 w-60">
      <div className="flex justify-between gap-2 items-center">
        {isEdit ? (
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        ) : (
          <p>{todoText}</p>
        )}
        <label>
          <input
            type="checkbox"
            checked={isDone}
            onChange={() => toggleTodo(id)}
          />
        </label>
      </div>

      <div className="self-end flex gap-3">
        <button
          className="text-sm py-1 px-3 bg-white/50 rounded-sm"
          onClick={editHandler}
        >
          {isEdit ? "Save" : "Edit"}
        </button>
        <button
          className="text-sm px-3 py-1 bg-white/50 rounded-sm"
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleTodo;
