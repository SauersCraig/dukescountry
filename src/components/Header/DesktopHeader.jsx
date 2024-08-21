import "./Header.styles.css";
import { useState } from "react";
import Logo from "../../assets/logos/WTDClogo.png";

export function DesktopHeader() {
  return (
    <nav className="deskTopContainer">
      <ul className="item1 menuLinks">
        <li>
          <a
            href="https://www.youtube.com/watch?v=A4D4d-cr5po"
            target="_blank"
            aria-label="Opens a new tab to watch the Duke's Country Video on YouTube"
          >
            WATCH THE VIDEO
          </a>
        </li>
        <li>
          <a
            href="https://dukesmayo.com/blogs/recipes/tagged/tailgate"
            target="_blank"
            aria-label="Learn more about Recipes on Duke's Mayo Main Site in a new tab"
          >
            RECIPES
          </a>
        </li>
      </ul>
      <figure className="item2">
        <img src={Logo} alt="Welcome to Duke's Country" className="logoDesk" />
      </figure>
      <ul className="item3 menuLinks">
        <li className="merchLink">
          <a
            href="https://dukesmayo.com/collections/dukes-country"
            target="_blank"
            aria-label="Buy Some Cool Duke's Mayo Merch on Duke's Mayo E-Com Site in a new tab"
          >
            MERCH
          </a>
        </li>
        <li>
          <a
            href="https://dukesmayo.com/pages/classic"
            target="_blank"
            aria-label="Learn more about Duke's Mayo Football games on Duke's Mayo E-Com Site in a new tab"
          >
            DUKE'S MAYO BOWL
          </a>
        </li>
      </ul>
    </nav>
  );
}
