import "./RoadMap.styles.css";

import Explore from "../../assets/logos/exploreDC.png";


// Components
import { DesktopRoadMap } from "./DesktopRoadMap";
import { MobileRoadMap } from "./MobileRoadMap";
export function RoadMap() {
  return (
    <section className="roadMapSection" role="region">
      <h2 className="exploreDukessCountry">Explore Dukes Country</h2>
      <img src={Explore} alt="Explore Duke's Country" className="exploreLogo" />

      {/* DeskTop */}
      <DesktopRoadMap />

      {/* Mobile */}
      <MobileRoadMap />
    </section>
  );
}
