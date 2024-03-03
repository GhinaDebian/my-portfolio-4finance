import { Link } from "react-router-dom";
import "./Header.scss";

const Links = [
  { to: "/home", label: "Home" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact", label: "Contact" },
  { to: "/counter", label: "Counter" },
];
export const Header = () => {
  return (
    <header className="app-header">
      <div>Logo</div>
      <nav>
        <ul>
          {Links.map((link, index) => (
            //we can write key={index}, but not good practice(more in backend)
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>Sign out</div>
    </header>
  );
};
// or: export default Header;
