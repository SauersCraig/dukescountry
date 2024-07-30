import "./Header.styles.css";
import { useState } from "react";
import Logo from "../../assets/logos/WTDClogo.png";

export function DesktopHeader() {
  return (
    <nav className="deskTopContainer">
      <div className="item1 menuLinks">
        <a href="https://www.youtube.com/watch?v=Hz_cWTMz-48" target="_blank">
          WATCH THE VIDEO
        </a>
        <a href="https://dukesmayo.com/blogs/recipes" target="_blank">
          RECIPES
        </a>
      </div>
      <div className="item2">
        <img src={Logo} alt="Welcome to Duke's Country" className="logoDesk" />
      </div>
      <div className="item3 menuLinks">
        <a href="https://dukesmayo.com/collections/merchandise" target="_blank">
          MERCH
        </a>
        <a href="https://dukesmayo.com/pages/dukes-mayo-bowl" target="_blank">
          DUKE'S MAYO BOWL
        </a>
      </div>
    </nav>
  );
}
