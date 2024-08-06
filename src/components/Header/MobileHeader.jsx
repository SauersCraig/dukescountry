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
            >
              WATCH THE VIDEO
            </a>
            <a href="https://dukesmayo.com/blogs/recipes" target="_blank">
              RECIPES
            </a>
            <a
              href="https://dukesmayo.com/collections/merchandise"
              target="_blank"
            >
              MERCH
            </a>
            <a href="https://dukesmayo.com/pages/classic" target="_blank">
              DUKE'S MAYO CLASSIC
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
