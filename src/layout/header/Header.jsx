import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="app-header">
      <div>Logo</div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </nav>
      <div>Sign out</div>
    </header>
  );
};
// or: export default Header;
