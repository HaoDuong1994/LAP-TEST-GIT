import "./User.css";
function User(props) {
  console.log(props.data);
  return (
    <div className="user-item">
      <h2>{props.data.first_name}</h2>
      <h4>{props.data.last_name}</h4>
      <p>{props.data.email}</p>
      <img src={props.data.avatar}></img>
    </div>
  );
}
export default User;
