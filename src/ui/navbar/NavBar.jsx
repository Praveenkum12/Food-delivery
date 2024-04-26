import { assets } from "../../assets/assets";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="Tomato logo" />

      <ul className="navbar-menu">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/mobile-app">Mobile-app</NavLink>
        </li>
        <li>
          <NavLink to="contact-us">Contact Us</NavLink>
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>

        <button>Sign In</button>
      </div>
    </div>
  );
}

export default NavBar;
