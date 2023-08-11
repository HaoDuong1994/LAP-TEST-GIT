import TodoItem from "./TodoItem";
import { createContext, useContext } from "react";
import { TodosContext } from "../App";
export const todoContext = createContext();

function TodoList() {
  const TodosValue = useContext(TodosContext);
  return (
    <div>
      {TodosValue.map((todo) => (
        <todoContext.Provider value={{ todo: todo }}>
          <TodoItem />
        </todoContext.Provider>
      ))}
    </div>
  );
}

export default TodoList;
