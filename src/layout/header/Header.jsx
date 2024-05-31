import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

const Links = [
  { to: "", label: "Home" },
  { to: "/blogs", label: "Blogs" },
  { to: "/about-us", label: "AboutUs" },
  { to: "/contact", label: "Contact" },
  { to: "/counter", label: "Counter" },
  { to: "/investment-calculator", label: "investment" },
];
export const Header = () => {
  return (
    <header className="app-header">
      <div>Logo</div>
      <nav>
        <menu>
          {Links.map((link, index) => (
            //we can write key={index}, but not good practice(more in backend)
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </menu>
      </nav>
      <div>Sign out</div>
    </header>
  );
};
// or: export default Header;
