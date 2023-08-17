import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useEffect } from "react";
function HomeComponent() {
  const isLognIn = false;
  const navigat = useNavigate();
  useEffect(function () {
    if (!isLognIn) {
      navigat("/sign-in");
    }
  }, []);

  return (
    <div>
      Hello from home component
      <button>
        <Link to="/profile">Go to profile</Link>
      </button>
    </div>
  );
}
export default HomeComponent;
