import TodoInput from "../components/TodoInput";

import SingleTodo from "../components/SingleTodo";
import { useTodoContext } from "../context/TodoContext";

const Home = () => {
  const { todos } = useTodoContext();

  return (
    <div className="flex flex-col py-5 px-8 gap-3 items-center">
      <TodoInput />

      <main className="flex gap-3 flex-wrap justify-center">
        {todos.map((item) => (
          <SingleTodo key={item.id} todoItem={item} />
        ))}
      </main>
    </div>
  );
};

export { Home };
