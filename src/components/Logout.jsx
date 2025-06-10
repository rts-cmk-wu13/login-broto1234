import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router";

export default function LogoutButton() {

  const { logout, token } = useAuth();
  const navigate = useNavigate()

  function handleLogout () {
    logout()
    setTimeout(() => {
      navigate("/")
    }, 0)
  }
  /*  const handleLogout = () {} */  

  return token ? (
    <button onClick={handleLogout} className="logOut">Log out</button>
  ) : <Link to="/login">Login</Link>
}

