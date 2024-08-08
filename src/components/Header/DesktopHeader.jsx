import "./Header.styles.css";
import { useState } from "react";
import Logo from "../../assets/logos/WTDClogo.png";

export function DesktopHeader() {
  return (
    <nav className="deskTopContainer">
      <ul className="item1 menuLinks">
        <li>
          <a
            href="https://www.youtube.com/watch?v=Hz_cWTMz-48"
            target="_blank"
            aria-label="Link takes you to a video about Duke's Mayo."
          >
            WATCH THE VIDEO
          </a>
        </li>

        <a
          href="https://dukesmayo.com/blogs/recipes"
          target="_blank"
          aria-label="Learn more about Recipes on Duke's Mayo Main Site"
        >
          RECIPES
        </a>
      </ul>
      <figure className="item2">
        <img src={Logo} alt="Welcome to Duke's Country" className="logoDesk" />
      </figure>
      <ul className="item3 menuLinks">
        <a
          className="merchLink"
          href="https://dukesmayo.com/collections/merchandise"
          target="_blank"
          aria-label="Buy Some Cool Duke's Mayo Merch on Duke's Mayo E-Com Site"
        >
          MERCH
        </a>
        <a
          href="https://dukesmayo.com/pages/classic"
          target="_blank"
          aria-label="Learn more about Duke's Mayo Football games on Duke's Mayo E-Com Site"
        >
          DUKE'S MAYO BOWL
        </a>
      </ul>
    </nav>
  );
}
