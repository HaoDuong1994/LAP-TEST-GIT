import "./TodoItem.css";
import { TodosContext } from "../App";
import { useContext } from "react";
import { todoContext } from "./TodoList";
function TodoItem() {
  const { todo } = useContext(todoContext);
  return (
    <div className="todo-item">
      <p>{todo.title}</p>
      <button className="btn">Delete</button>
      <button className="btn">Edit</button>
    </div>
  );
}
export default TodoItem;
