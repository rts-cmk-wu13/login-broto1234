import { useLoaderData } from "react-router";
import { useAuth } from "../contexts/Authcontext";
import Logout from "../components/Logout";

export default function Statements() {
  

  const statements = useLoaderData();
  console.log(statements);  

  return (
    <div className="statements disFlexColumn">
      <Logout />  
      <h4>Statements</h4>  
      <ul>
        { statements.map(statement => (
          <li key={statement.id}>
            <p>{statement.sentence}</p>
          </li>
        ))}
      </ul>    
    </div>
  )
}