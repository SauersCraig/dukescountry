import "./Header.styles.css";
import { useState } from "react";
import Logo from "../../assets/logos/WTDClogo.png";
import HamBtn from "../../assets/hamBtn.png";
export function MobileHeader() {
  const [openMenu, setOpenMenu] = useState(false);

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
          <div className="mobHeaderMenu">
            <a
              href="https://www.youtube.com/watch?v=Hz_cWTMz-48"
              target="_blank"
              aria-label="Link takes you to a video about Duke's Mayo."
            >
              WATCH THE VIDEO
            </a>
            <a
              href="https://dukesmayo.com/blogs/recipes"
              target="_blank"
              aria-label="Learn more about Recipes on Duke's Mayo Main Site"
            >
              RECIPES
            </a>
            <a
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
          </div>
        )}
      </div>
    </nav>
  );
}
