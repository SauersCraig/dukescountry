// Asset Imports
import "./VideoHero.styles.css";
import Guys from "../../assets/gifs/videoGif-reduced.gif";
import Video1 from "../../assets/video/30Second.mp4";
import CC from "../../assets/video/CC30SecondDS.vtt";

export function VideoHero() {
  return (
    <header className="videoHeroContainer">
      <section role="banner">
        <video
          controls
          controlsList="nodownload noplaybackrate"
          disablePictureInPicture
          className="videoDiv heroBanner"
          muted
          autoPlay
          loop
        >
          <source type="video/mp4" src={Video1} />
          <track
            src={CC}
            kind="subtitles"
            label="English Subtitles"
            srclang="en"
            default
          />
        </video>
      </section>
      {/* <a
        href="https://www.youtube.com/watch?v=A4D4d-cr5po"
        target="_blank"
        aria-label="Link takes you to a video about Duke's Country."
      >
        <img
          src={Guys}
          className="heroBanner"
          alt="two guys in a convertible with thier hands up, no shirts, with giant Duke's Mayo tatoo's on thier back"
        />
      </a> */}
      <h1> WELCOME TO DUKE'S COUNTRY. </h1>
    </header>
  );
}
