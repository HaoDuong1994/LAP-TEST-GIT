import { Link, Outlet } from "react-router-dom";
function ProfileComponent() {
  return (
    <div
      style={{
        display: "flex",
      }}>
      <aside
        style={{
          width: "20%",
        }}>
        <ul>
          <li>
            {/* <a href="/profile">Profile</a> */}
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            {/* <a href="/profile/edit">Edit Profile</a> */}
            <Link to="/profile/edit"> Edit Profile</Link>
          </li>
          <li>
            {/* <a href="/profile/course">Course</a> */}
            <Link to="/profile/course"> Course profile</Link>
          </li>
          <li>
            {/* <a href="profile/setting">Setting Profile</a> */}
            <Link to="/profile/setting"> setting</Link>
          </li>
        </ul>
      </aside>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
export default ProfileComponent;
