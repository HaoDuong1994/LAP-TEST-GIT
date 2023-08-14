import "./TodoItem.css";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <p>{props.data.title}</p>
      <button className="btn">Delete</button>
      <button className="btn">Edit</button>
    </div>
  );
}
export default TodoItem;
