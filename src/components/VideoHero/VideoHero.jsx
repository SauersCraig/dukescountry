// Asset Imports
import "./VideoHero.styles.css";
import Guys from "../../assets/gifs/videoGif-reduced.gif";
import CC from "../../assets/video/CC30SecondFileDS.vtt";

export function VideoHero() {
  return (
    <header className="videoHeroContainer">
      <section role="banner heroBanner">
        {/* <video
          controls
          autoPlay
          loop
          muted
          className="video30 heroBanner"
          controlsList="nodownload noplaybackrate "
          disablePictureInPicture
          alt="A humorous 30-second ad featuring two guys on a whimsical journey, sharing mayonnaise and engaging in silly antics."
        >
          <source
            src=""
            type="video/mp4"
          ></source>
          <track default kind="captions" srcLang="en" src={CC} />
          <p>Your browser does not support the video tag.</p>
        </video> */}
        <img
          className="video30 heroBanner"
          src={Guys}
          alt="Two guys in a car cheering with their jackets flying off showing Duke's Mayo Back Tattoos"
        />
      </section>

      <h1> WELCOME TO DUKE'S COUNTRY. </h1>
    </header>
  );
}
