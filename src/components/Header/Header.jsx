import "./Header.styles.css";
import { useState } from "react";
import Logo from "../../assets/logos/WTDClogo.png";
import HamBtn from "../../assets/hamBtn.png";
import { MobileHeader } from "./MobileHeader";
import { DesktopHeader } from "./DesktopHeader";
export function Header() {
// Mobile Nav bar will open under 800 px 
// Desktop menu will open if over 800px
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
