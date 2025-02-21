import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  return (
    <header>
      <nav>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        {/*<li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>*/}
        <li>
          <Link to="/skills" className="link">
            Skills
          </Link>
        </li>
        <div
          className="dropdown"
          onMouseEnter={() => {
            setShowDropdown(!showDropdown);
          }}
          onMouseLeave={() => {
            setShowDropdown(!showDropdown);
          }}
        >
          <li className="link">
            Hooks
            {showDropdown && (
              <ol className="dropdown-list">
                <li>
                  <Link to="/useeffect" className="dropdown-link">
                    useEffect
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="dropdown-link">
                    useState
                  </Link>
                </li>
                <li>
                  <Link to="/useeffectapi" className="dropdown-link">
                    useEffectAPI
                  </Link>
                </li>
                <li>
                  <Link to="/useref" className="dropdown-link">
                    useRef
                  </Link>
                </li>
                <li>
                  <Link to="/usememo" className="dropdown-link">
                    useMemo
                  </Link>
                </li>
                <li>
                  <Link to="/usecallback" className="dropdown-link">
                    useCallback
                  </Link>
                </li>
                <li>
                  <Link to="/usememoize" className="dropdown-link">
                    useMemoize cutsom hook
                  </Link>
                </li>
              </ol>
            )}
          </li>
        </div>
        <li>
          <Link to="/hoc" className="link">
            HoC
          </Link>
        </li>
        <div
          className="dropdown"
          onMouseEnter={() => {
            setShowDropdown1(!showDropdown1);
          }}
          onMouseLeave={() => {
            setShowDropdown1(!showDropdown1);
          }}
        >
          <li className="link">
            Memoization
            {showDropdown1 && (
              <ol className="dropdown-list">
                <li>
                  <Link to="/memo" className="dropdown-link">
                    memo
                  </Link>
                </li>
                <li>
                  <Link to="/lazy" className="dropdown-link">
                    Lazy loading
                  </Link>
                </li>
              </ol>
            )}
          </li>
        </div>
        <li>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/login" className="link">
            Login
          </Link>
        </li>
      </nav>
    </header>
  );
};
export default Navbar;
