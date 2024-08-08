// Asset Imports
import "./VideoHero.styles.css";
import Guys from "../../assets/gifs/videoGif-reduced.gif";

export function VideoHero() {
  return (
    <banner className="videoHeroContainer">
      <section>
        <img
          src={Guys}
          className="heroBanner"
          alt="two guys in a convertible with thier hands up, no shirts, with giant Duke's Mayo tatoo's on thier back"
        />
      </section>
      <h1> WELCOME TO DUKE'S COUNTRY. </h1>
    </banner>
  );
}
