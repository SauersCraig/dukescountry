import "./Header.styles.css";
import { useState } from "react";
import Logo from "../../assets/logos/WTDClogo.png";
import HamBtn from "../../assets/hamBtn.png";
export function MobileHeader() {
  const [openMenu, setOpenMenu] = useState(false);
  // Dropdown menu will only open if state openMenu is true
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="mobNavBar">
      <div className="mobHeaderContainer">
        <button className="mobHeaderBtn" onClick={() => handleOpenMenu()}>
          <img src={HamBtn} alt="NavButton" />
        </button>
        <img
          src={Logo}
          alt="Welcome to Duke's Country"
          className="mobHeaderLogo"
        />
      </div>
      <div>
        {openMenu && (
          <ul className="mobHeaderMenu">
            <li>
              <a
                href="https://www.youtube.com/watch?v=Hz_cWTMz-48"
                target="_blank"
                aria-label="Link takes you to a video about Duke's Mayo."
                className="mobLinks"
              >
                WATCH THE VIDEO
              </a>
            </li>
            <li>
              <a
                href="https://dukesmayo.com/blogs/recipes"
                target="_blank"
                aria-label="Learn more about Recipes on Duke's Mayo Main Site"
                className="mobLinks"
              >
                RECIPES
              </a>
            </li>
            <li>
              <a
                href="https://dukesmayo.com/collections/merchandise"
                target="_blank"
                aria-label="Buy Some Cool Duke's Mayo Merch on Duke's Mayo E-Com Site"
                className="mobLinks"
              >
                MERCH
              </a>
            </li>
            <li>
              <a
                href="https://dukesmayo.com/pages/classic"
                target="_blank"
                aria-label="Learn more about Duke's Mayo Football games on Duke's Mayo E-Com Site"
                className="mobLinks"
              >
                DUKE'S MAYO BOWL
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
