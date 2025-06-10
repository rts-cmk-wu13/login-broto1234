import { useContext } from "react"
import {redirect, useLoaderData} from "react-router"
import { useAuth } from "../contexts/Authcontext"
import Logout from "../components/Logout";

export default function Secrets() {
  
  const secrets = useLoaderData();
  console.log(secrets);
  const { token } = useAuth(); 
  if(!token) { throw redirect("/")}

  return (
    <div className="secrets disFlexColumn">
      {/* { location.pathname !== "/login" && (
      ) } */}
      <Logout />      
      <h4>Secrets</h4>  
      <ul>
        { secrets.slice(0,2).map(secret => (
          <li key={secret.id}>
            <p className="secrets--quote">{secret.quote}</p>
            <div className="secret--left">
              <p className="secret--author">{secret.author}</p>
              <p>{secret.origin}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    
    
  )
}