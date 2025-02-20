import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <header>
      <nav style={{ listStyleType: "none" }}>
        <li className="link">
          <Link to='/'>Home</Link>
        </li>
        <li className="link">
          <Link to='/about'>About</Link>
        </li>
        <li className="link">
          <Link to='/skills'>Skills</Link>
        </li>
        <li className="link">
          <Link to='/contact'>Contact</Link>
        </li>
        <li className="link">hooks 
        <ol className="dropdown-list">
          <li><Link to='/useeffect'>useEffect</Link></li>
          <li><Link to='/about'>useState</Link></li>
          <li><Link to='/useeffectapi'>useEffectAPI</Link></li>
          <li><Link to='/useref'>useRef</Link></li>
          <li><Link to='/usememo'>useMemo</Link></li>
        </ol>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </nav>
    </header>
  );
};
export default Navbar;
