// Asset Imports
import "./HomePage.styles.css";
import tubby from "../../assets/tubbyLayingDown.png";

// Component Imports
import { VideoHero } from "../../components/VideoHero/VideoHero";
export function HomePage() {
  return (
    <div className="comingSoon">
      <VideoHero />
      <h1>Duke's Mayo Country Coming Soon!!!</h1>
      <img src={tubby} alt="Tubby the Duke's Mascot laying down on a sofa" />
    </div>
  );
}
