import User from "./User";
import "./UserList.css";
function UserList(props) {
  console.log(props.data);
  return (
    <div className="user-list">
      {props.data?.map((userItem) => {
        return <User data={userItem} />;
      })}
    </div>
  );
}
export default UserList;
