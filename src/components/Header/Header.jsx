import "./Header.styles.css";
import { useState } from "react";
import Logo from "../../assets/logoSmaller.png";
import HamBtn from "../../assets/hamBtn.png";
export function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav>
      <div className="headerContainer">
        <button className="headerBtn" onClick={() => handleOpenMenu()}>
          <img src={HamBtn} alt="NavButton" />
        </button>
        <img
          src={Logo}
          alt="Welcome to Duke's Country"
          className="headerLogo"
        />
      </div>
      <div>
        {openMenu && (
          <div className="headerMenu">
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
            <a
              href="https://dukesmayo.com/pages/dukes-mayo-bowl"
              target="_blank"
            >
              DUKE'S MAYO BOWL
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
