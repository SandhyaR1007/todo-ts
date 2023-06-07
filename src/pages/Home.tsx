import { useState } from "react";
import TodoInput from "../components/TodoInput";

import SingleTodo from "../components/SingleTodo";
import { useTodoContext } from "../context/TodoContext";

const Home = () => {
  const { todos } = useTodoContext();
  console.log({ todos });

  return (
    <div className="flex flex-col p-10 gap-3">
      <header>Todo App</header>
      <TodoInput />

      <main className="flex gap-3 flex-wrap">
        {todos.map((item) => (
          <SingleTodo todoItem={item} />
        ))}
      </main>
    </div>
  );
};

export { Home };
