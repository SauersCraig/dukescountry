// Asset Imports
import "./HomePage.styles.css";
import tubby from "../../assets/tubbyLayingDown.png";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
// Component Imports
import { ListHP } from "../../components/ListHP/ListHP";
import { VideoHero } from "../../components/VideoHero/VideoHero";
import { RoadMap } from "../../components/RoadMap/RoadMap";
import { PopUp } from "../../components/PopUp/PopUp";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

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
