import { useState } from "react";

import { SubTodoItem } from "../types/todoTypes";
import { useTodoContext } from "../context/TodoContext";

interface SubTodoProps {
  todoId: number;
  subTodo: SubTodoItem;
}
const SubTodo = ({ todoId, subTodo }: SubTodoProps) => {
  const { editSubTodo } = useTodoContext();
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
      <div className="flex gap-2">
        <label className="flex gap-2">
          <input type="checkbox" />
        </label>
        {editSub ? (
          <input
            className="outline-none focus:border-b"
            type="text"
            value={subText}
            onChange={(e) => setSubText(e.target.value)}
          />
        ) : (
          <span onClick={() => setEditSub(true)}>{subTodo.todoText}</span>
        )}
      </div>

      <button className="text-gray-500">x</button>
    </form>
  );
};

export default SubTodo;
