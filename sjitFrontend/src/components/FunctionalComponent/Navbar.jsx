import "../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav style={{ listStyleType: "none" }}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/skills'>Skills</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <span>hooks</span>
        <ol>
          <li><Link to='/useeffect'>useEffect</Link></li>
          <li><Link to=''></Link>useState</li>
        </ol>
        <li>
          <Link to='/signup'>SignUp</Link>
        </li>
      </nav>
    </header>
  );
};
export default Navbar;
