import { Link, NavLink } from "react-router-dom";
function Header() {
  const activeClass = (params) => {
    console.log(params);
    return params.isActive ? "active-item" : "";
  };
  return (
    <div>
      <header className="header">
        <div>
          <NavLink to="/" className={activeClass}>
            Logo
          </NavLink>
        </div>
        <ul className="nav_container">
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
        </ul>
        <div>
          <button>
            <NavLink to="/sign-in">Sign in</NavLink>
          </button>
          <button>Sign up</button>
        </div>
      </header>
    </div>
  );
}
export default Header;
