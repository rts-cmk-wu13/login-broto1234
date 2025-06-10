import { Link } from "react-router";
import bird from '../assets/emojione_bird.svg'
import List from "./List";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="welcome disFlexColumn">
      <div className="bird--img">
        <img src={bird} alt="Bird" />
      </div>
      <h1>early bird.</h1>
      <p>Your local discount mate</p>
      {/* < List /> */}
      <Link to="/signup" className="btn">Sign Up</Link>
      <Link to="/login" className="btn btn--bgWhite ">Login <FaArrowRight /></Link>
    </div>
    
  )
}