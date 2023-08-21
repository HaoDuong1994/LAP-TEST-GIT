import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRef, useState } from "react";
import { memo } from "react";
import MemoHeading from "./Heading";
function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState({ title: "Hello from Component Heading" });
  console.log("render component App");
  function handleOnclick() {
    setCount(count + 1);
  }
  function handleTitle() {
    setTitle({ title: "Hello from Component Heading" });
  }
  return (
    <>
      <h2>Count: {count}</h2>

      <button onClick={handleOnclick}>increse</button>

      <Title title="Hello fromadasd  title" />
      <MemoHeading title={title.title} />
      <button onClick={handleTitle}>Set title</button>
    </>
  );
}

const Title = memo(function Title(props) {
  console.log("re render Title");
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
});
export default App;
