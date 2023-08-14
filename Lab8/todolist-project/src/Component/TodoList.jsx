import TodoItem from "./TodoItem";
import { createContext, useContext } from "react";
import { TodosContext } from "../App";

function TodoList() {
  const TodosValue = useContext(TodosContext);
  console.log(TodosValue);
  return (
    <div>
      {TodosValue.map((data) => {
        return <TodoItem data={data} />;
      })}
    </div>
  );
}

export default TodoList;
