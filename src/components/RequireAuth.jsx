import { Navigate, useLocation } from "react-router"
import { useAuth } from "../contexts/Authcontext"

export default function RequireAuth({ children }) {
  const { token } = useAuth()
  console.log(token);  
  const location = useLocation()
  console.log(location);  
  if(!token) {
    // no token - redirect to login
    return <Navigate to="/login" state={{ from: location }} />
  }
  return children
}