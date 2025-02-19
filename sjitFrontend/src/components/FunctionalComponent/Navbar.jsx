import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
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
        <li>hooks
        <ol>
          <li><Link to='/useeffect'>useEffect</Link></li>
          <li><Link to=''></Link>useState</li>
        </ol>
        </li>
        <li>
          <Link to='/signup'>SignUp</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </nav>
    </header>
  );
};
export default Navbar;
