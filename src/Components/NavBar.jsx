import { Link } from "react-router-dom";
import "./NavBar.css"
const NavBar = () => {
   
    return (
       <div className="nav-bar">
        <Link to="/">
        <h1>HerbHub</h1>
        </Link>
        <ul>
            <li><Link to='/about'>About</Link></li>
        </ul>
       </div>
    );
}

export default NavBar