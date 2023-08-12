import "./InputElement.css";
import { useState } from "react";
function TodoInput(props) {
  console.log(props.addTodoItem);
  const [isValueChar, setValue] = useState(true);
  let inputValue = "";
  console.log(inputValue);
  function onChangHandler(e) {
    if (e.target.value.includes("@")) {
      setValue(false);
    } else {
      setValue(true);
      inputValue = e.target.value;
      console.log(inputValue);
    }
  }
  function handleAddTodo() {
    console.log(inputValue);
    props.addTodoItem(inputValue);
  }
  return (
    <div>
      <input onChange={onChangHandler} type="text" placeholder="Enter data" />
      {isValueChar === true ? null : (
        <p
          style={{
            color: "red",
          }}>
          Không nhập dữ liệu có @
        </p>
      )}
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}
export default TodoInput;
