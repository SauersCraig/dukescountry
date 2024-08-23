// Asset Imports
import "./HomePage.styles.css";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Duke's Country</title>

        <meta
          name="description"
          content="Pull up a chair, and grab a spoon. We’re going to Duke’s Country!"
        />
        {/* Facebooke Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dukescountry.com/" />
        <meta property="og:title" content="Welcome to Duke's Country" />
        <meta
          property="og:description"
          content="Pull up a chair, and grab a spoon. We’re going to Duke’s Country!"
        />
        <meta
          property="og:image"
          content="https://wlaozdmgwaaymllhazpm.supabase.co/storage/v1/object/public/images/thumbnail%20copy.jpg?t=2024-08-21T20%3A00%3A33.877Z"
        />
        {/* Twitter Meta Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dukescountry.com/" />
        <meta property="twitter:title" content="Welcome to Duke's Country" />
        <meta
          property="twitter:description"
          content="Pull up a chair, and grab a spoon. We’re going to Duke’s Country!"
        />

        <meta
          property="twitter:image"
          content="https://wlaozdmgwaaymllhazpm.supabase.co/storage/v1/object/public/images/thumbnail%20copy.jpg?t=2024-08-21T20%3A00%3A33.877Z"
        />
      </Helmet>
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
