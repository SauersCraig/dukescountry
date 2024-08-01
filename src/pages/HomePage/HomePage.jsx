// Asset Imports
import "./HomePage.styles.css";
import tubby from "../../assets/tubbyLayingDown.png";

// Component Imports
import { ListHP } from "../../components/ListHP/ListHP";
import { VideoHero } from "../../components/VideoHero/VideoHero";
import { RoadMap } from "../../components/RoadMap/RoadMap";

export function HomePage() {
  return (
    <div className="comingSoon">
      <VideoHero />
      <ListHP />
      <RoadMap />
    </div>
  );
}
