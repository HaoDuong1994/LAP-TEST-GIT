import "./InputElement.css";
import { useState } from "react";
function TodoInput() {
  const [isValueChar, setValue] = useState(true);
  function onChangHandler(e) {
    let inputValue = e.target.value;
    if (inputValue.includes("@")) {
      setValue(false);
    } else {
      setValue(true);
      inputValue = e.target.value;
    }
    console.log(inputValue);
  }
  function handleAddTodo() {}
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
