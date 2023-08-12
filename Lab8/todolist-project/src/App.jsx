import { useState, createContext, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoInput from "./Component/TodoInPut";
import TodoList from "./Component/TodoList";
export const TodosContext = createContext();
function App(props) {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Làm bài tập",
      isComplete: false,
    },
    {
      id: 2,
      title: "Ôn lại ReactJS",
      isComplete: false,
    },
    {
      id: 3,
      title: "Đi bơi",
      isComplete: false,
    },
    {
      id: 4,
      title: "Ôn tập HTML",
      isComplete: false,
    },
    {
      id: 4,
      title: "Đi uống TS",
      isComplete: false,
    },
  ]);

  function addTodoItem(object) {
    let newsTodo = {
      id: todos.length + 1,
      title: object,
      isComplete: false,
    };

    setTodos(...todos, newsTodo);
  }
  console.log(todos);
  return (
    <>
      <h2>Todo List </h2>
      <hr></hr>
      <TodosContext.Provider value={todos}>
        <TodoInput addTodoItem={addTodoItem} className="input-element" />
        <TodoList />
      </TodosContext.Provider>
    </>
  );
}

export default App;
