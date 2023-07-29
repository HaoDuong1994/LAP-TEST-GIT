import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoFormInput from "./Component/TodoInput";
import TodoListContainer from "./Component/TodoListContainer";
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Todo 1",
      isComplete: false,
    },
    {
      id: 2,
      title: "Todo 2",
      isComplete: false,
    },
    {
      id: 3,
      title: "Todo 3",
      isComplete: false,
    },
  ]);

  console.log(todos);

  function add(data) {
    console.log("data:", data);
    setTodos([
      {
        title: data,
        isComplete: false,
        id: todos.length + 1,
      },
      ...todos,
    ]);
  }
  //Dùng filter
  function deleteData(id) {
    const filterData = todos.filter((item) => {
      return item.id !== id;
    });

    setTodos(filterData);
  }

  return (
    <>
      <div>
        <h2>To do list</h2>
      </div>
      <TodoFormInput add={add} />
      <TodoListContainer deleteData={deleteData} data={todos} />
    </>
  );
}

export default App;
