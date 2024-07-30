import "./Header.styles.css";
import { useState } from "react";
import Logo from "../../assets/logos/WTDClogo.png";
import HamBtn from "../../assets/hamBtn.png";
import { MobileHeader } from "./MobileHeader";
import { DesktopHeader } from "./DesktopHeader";
export function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <div className="mobNav">
        <MobileHeader />
      </div>
      <div className="deskNav">
        <DesktopHeader />
      </div>
    </>
  );
}
