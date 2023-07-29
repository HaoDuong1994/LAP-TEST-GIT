import { useState } from "react";
function TodoFormInput(props) {
  const [isValueChar, setValueChar] = useState(true);
  let newValue = "";
  function onchangeHandler(e) {
    if (e.target.value.includes("@")) {
      setValueChar(false);
    } else {
      newValue = e.target.value;
    }
  }
  function onClickHandler() {
    console.log("newValue:", newValue);
    props.add(newValue);
  }
  return (
    <>
      <input type="text" placeholder="Enter data" onChange={onchangeHandler} />
      {isValueChar === true ? null : "inValid Value"}
      <button onClick={onClickHandler}>Add</button>
    </>
  );
}

export default TodoFormInput;
