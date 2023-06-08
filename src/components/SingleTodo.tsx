import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";

import { useTodoContext } from "../context/TodoContext";
import { TodoItem } from "../types/todoTypes";
import { checkDisable } from "../utils";
import SubTodoContainer from "./SubTodoContainer";

interface Props {
  todoItem: TodoItem;
}
const SingleTodo = ({ todoItem }: Props) => {
  const { id, todoText, isDone, subTodos } = todoItem;
  const { editTodo, toggleTodo, deleteTodo } = useTodoContext();
  const [inputText, setInputText] = useState<string>(todoText);

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [showToggle, setShowToggle] = useState<boolean>(false);

  const editHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (isEdit && checkDisable(inputText) > 0 && inputText !== todoText) {
      editTodo(id, inputText);
    } else {
      setInputText(todoText);
    }
    setIsEdit(!isEdit);
  };

  return (
    <div
      className="bg-white relative border p-3 rounded-md flex flex-col  gap-2 justify-between min-h-20 w-60 hover:shadow-md cursor-pointer h-max "
      onMouseEnter={() => setShowToggle(true)}
      onMouseLeave={() => setShowToggle(false)}
    >
      {isDone ? (
        <BsCheckCircleFill
          className={`${
            showToggle ? "block" : "hidden"
          } absolute -top-1 -left-1  transition-all delay-100 `}
          onClick={() => {
            toggleTodo(id);
          }}
        />
      ) : (
        <BsCheckCircle
          className={`${
            showToggle ? "block" : "hidden"
          } absolute -top-1 -left-1  bg-white transition-all delay-100`}
          onClick={() => {
            toggleTodo(id);
          }}
        />
      )}
      <form
        className="flex justify-between gap-2 items-center"
        onSubmit={editHandler}
      >
        {isEdit ? (
          <input
            type="text"
            className="outline-none border-b"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            autoFocus
            onBlur={editHandler}
          />
        ) : (
          <h1
            className="text-lg font-semibold break-all"
            onClick={() => setIsEdit(!isEdit)}
          >
            {todoText}
          </h1>
        )}
      </form>
      <SubTodoContainer id={id} subTodos={subTodos} />
      <div className="self-end flex gap-3">
        <button
          className="text-sm px-3 py-1 bg-white/50 rounded-sm"
          onClick={() => deleteTodo(id)}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default SingleTodo;
