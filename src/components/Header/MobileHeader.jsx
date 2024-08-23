import "./Header.styles.css";
import { useState } from "react";
import Logo from "../../assets/logos/WTDClogo.png";
import HamBtn from "../../assets/hamBtn.png";
import ReactGA from "react-ga4";
export function MobileHeader() {
  const [openMenu, setOpenMenu] = useState(false);
  // Dropdown menu will only open if state openMenu is true
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
    ReactGA.event({
      category: "User",
      action: "Clicked on Button",
      label: "Mobile Nav Button",
    });
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
                href="https://www.youtube.com/watch?v=A4D4d-cr5po"
                target="_blank"
                aria-label="Opens a new tab to watch the Duke's Country Video on YouTube"
                className="mobLinks"
              >
                WATCH THE VIDEO
              </a>
            </li>
            <li>
              <a
                href="https://dukesmayo.com/blogs/recipes/tagged/tailgate"
                target="_blank"
                aria-label="Learn more about Recipes on Duke's Mayo Main Site in a new tab"
                className="mobLinks"
              >
                RECIPES
              </a>
            </li>
            <li>
              <a
                href="https://dukesmayo.com/collections/dukes-country"
                target="_blank"
                aria-label="Buy Some Cool Duke's Mayo Merch on Duke's Mayo E-Com Site in a new tab"
                className="mobLinks"
              >
                MERCH
              </a>
            </li>
            <li>
              <a
                href="https://dukesmayo.com/pages/classic"
                target="_blank"
                aria-label="Learn more about Duke's Mayo Football games on Duke's Mayo E-Com Site in a new tab"
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
