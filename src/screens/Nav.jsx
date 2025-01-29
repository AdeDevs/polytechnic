import Logo from "../assets/logo.png";
import { useState } from "react";
function Navigation() {
  const [menuActive, isMenuActive] = useState(false)
  
  const toggleMenu = () => {
      isMenuActive(!menuActive)
  }
  return (
    <div className="nav-page">
      <div className="nav-bar">
        <h1 className="logo">
          <img src={Logo} alt="logo" />
        </h1>
        <ul className="desk-nav">
          <li><a href="#">home</a></li>
          <li><a href="#">about us</a></li>
          <li><a href="#">academics</a></li>
          <li><a href="#">admission</a></li>
          <li><a href="#">news and events</a></li>
          <li><a href="#">international office</a></li>
        </ul>
        <span className="toggle-menu" onClick={toggleMenu}>
                  <ion-icon name="menu-outline" />
                </span>

                
        <div className={`overlay ${menuActive ? 'show' : ""}`} onClick={toggleMenu}></div>
        <ul className={`hamburger-menu ${menuActive ? 'show' : ""}`}>
                    <span className="toggle-menu">
                      <ion-icon name="close-outline" onClick={toggleMenu} />
                    </span>
          <a href="#">home</a>
          <a href="#">about us</a>
          <a href="#">academics</a>
          <a href="#">admission</a>
          <a href="#">news and events</a>
          <a href="#">international office</a>
        </ul>
      </div>
    </div>
  );
}
export default Navigation;
