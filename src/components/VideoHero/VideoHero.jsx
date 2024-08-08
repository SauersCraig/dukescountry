// Asset Imports
import "./VideoHero.styles.css";
import Guys from "../../assets/gifs/videoGif-reduced.gif";

export function VideoHero() {
  return (
    <header className="videoHeroContainer">
      <section role="banner">
        <img
          src={Guys}
          className="heroBanner"
          alt="two guys in a convertible with thier hands up, no shirts, with giant Duke's Mayo tatoo's on thier back"
        />
      </section>
      <h1> WELCOME TO DUKE'S COUNTRY. </h1>
    </header>
  );
}
