// Asset Imports
import "./HomePage.styles.css";
import tubby from "../../assets/tubbyLayingDown.png";

// Component Imports
import { ListHP } from "../../components/ListHP/ListHP";
import { VideoHero } from "../../components/VideoHero/VideoHero";
import { RoadMap } from "../../components/RoadMap/RoadMap";
import { PopUp } from "../../components/PopUp/PopUp";
import { Header } from "../../components/Header/Header";

export function HomePage() {
  return (
    <div>
      <PopUp />
      <Header />
      <div className="comingSoon">
        <VideoHero />
        <ListHP />
        <RoadMap />
      </div>
    </div>
  );
}
