// Asset Imports
import "./VideoHero.styles.css";
import Guys from "../../assets/gifs/videoGif-reduced.gif";

export function VideoHero() {
  return (
    <header className="videoHeroContainer">
      <section role="banner">
        <a
          href="https://www.youtube.com/watch?v=A4D4d-cr5po"
          target="_blank"
          aria-label="Link takes you to a video about Duke's Country."
        >
          <img
            src={Guys}
            className="heroBanner"
            alt="two guys in a convertible with thier hands up, no shirts, with giant Duke's Mayo tatoo's on thier back"
          />
        </a>
      </section>

      <h1> WELCOME TO DUKE'S COUNTRY. </h1>
    </header>
  );
}
