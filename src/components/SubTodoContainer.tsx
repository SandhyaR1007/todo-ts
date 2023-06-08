import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import { SubTodoItem } from "../types/todoTypes";
import SubTodo from "./SubTodo";
import { checkDisable } from "../utils";

interface SubTodoProps {
  id: number;
  subTodos: SubTodoItem[];
}
const SubTodoContainer = ({ id, subTodos }: SubTodoProps) => {
  const { addSubTodo } = useTodoContext();
  const [subInputText, setSubInputText] = useState<string>("");

  const addSubTodoHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (checkDisable(subInputText) > 0) {
      addSubTodo(id, {
        id: Date.now(),
        todoText: subInputText,
        isDone: false,
      });
      setSubInputText("");
    }
  };
  return (
    <div className="flex flex-col gap-2">
      {subTodos.map((subTodo) => (
        <SubTodo key={subTodo.id} todoId={id} subTodo={subTodo} />
      ))}
      <form onSubmit={addSubTodoHandler}>
        <input
          type="text"
          className="outline-none focus:border-b text-sm"
          placeholder="Add Task..."
          value={subInputText}
          onChange={(e) => setSubInputText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SubTodoContainer;
