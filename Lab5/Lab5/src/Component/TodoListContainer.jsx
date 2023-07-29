function TodoListContainer(props) {
  function handleDelete(id) {
    props.deleteData(id);
  }
  return (
    <ul>
      {props.data.map(function (todo) {
        return (
          <li
            onClick={() => {
              handleDelete(todo.id);
            }}>
            {todo.title}
          </li>
        );
      })}
    </ul>
  );
}
export default TodoListContainer;
