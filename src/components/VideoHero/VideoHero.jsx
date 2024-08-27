// Asset Imports
import "./VideoHero.styles.css";
import Guys from "../../assets/gifs/videoGif-reduced.gif";
import Video1 from "../../assets/video/30Second.mp4";
import CC from "../../assets/video/CC30Secondfile.vtt";

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
      <video controls autostart autoPlay muted className="videoDiv">
        <source type="video/mp4" src={Video1} />
        <track
          src={CC}
          label="English"
          king="captions"
          srclang="en-us"
          default
        />
      </video>
      <h1> WELCOME TO DUKE'S COUNTRY. </h1>
    </header>
  );
}
