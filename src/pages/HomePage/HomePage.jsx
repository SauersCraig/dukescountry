// Asset Imports
import "./HomePage.styles.css";
import tubby from "../../assets/tubbyLayingDown.png";
import ReactGA from "react-ga";
// Component Imports
import { ListHP } from "../../components/ListHP/ListHP";
import { VideoHero } from "../../components/VideoHero/VideoHero";
import { RoadMap } from "../../components/RoadMap/RoadMap";
import { PopUp } from "../../components/PopUp/PopUp";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export function HomePage() {
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div>
      <PopUp />
      <Header />
      <main className="comingSoon">
        <VideoHero />
        <ListHP />
        <RoadMap />
      </main>
      <Footer />
    </div>
  );
}
