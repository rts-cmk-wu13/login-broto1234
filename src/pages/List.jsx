import { Link } from "react-router"
import Statements from "./Statements";
import Secrets from "./Secrets";
import bird from '../assets/emojione_bird.svg';


export default function List() {

  return (
    <div className="list disFlexColumn">
      <div className="bird--img">
        <img src={bird} alt="Bird" />
      </div>
      <div className="list--links disFlex">
        <Link to="/statements" className="list--link">Statements</Link>
        <Link to="/secrets" className="list--link">Secrets</Link>
      </div>
    </div>
  )
}