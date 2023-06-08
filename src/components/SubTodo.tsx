import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { SubTodoItem } from "../types/todoTypes";
import { useTodoContext } from "../context/TodoContext";

interface SubTodoProps {
  todoId: number;
  subTodo: SubTodoItem;
}
const SubTodo = ({ todoId, subTodo }: SubTodoProps) => {
  const { editSubTodo, deleteSubTodo, toggleDoneSubTodo } = useTodoContext();
  const [editSub, setEditSub] = useState(false);
  const [subText, setSubText] = useState(subTodo.todoText);
  const editSubHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    editSubTodo(todoId, subTodo.id, subText);
    setEditSub(!editSub);
  };
  return (
    <form
      className="flex justify-between items-center text-sm"
      onSubmit={editSubHandler}
    >
      <div className="flex gap-2 items-center">
        <label className="flex gap-2">
          <input
            type="checkbox"
            className="cursor-pointer accent-gray-800"
            checked={subTodo.isDone}
            onChange={() => toggleDoneSubTodo(todoId, subTodo.id)}
          />
        </label>
        {editSub ? (
          <input
            className="outline-none focus:border-b"
            type="text"
            value={subText}
            onChange={(e) => setSubText(e.target.value)}
            autoFocus
          />
        ) : (
          <span
            className={`${subTodo.isDone ? "line-through" : ""}`}
            onClick={() => setEditSub(true)}
          >
            {subTodo.todoText}
          </span>
        )}
      </div>

      <button
        className="text-gray-500 text-sm"
        onClick={() => deleteSubTodo(todoId, subTodo.id)}
      >
        <RxCross2 />
      </button>
    </form>
  );
};

export default SubTodo;
