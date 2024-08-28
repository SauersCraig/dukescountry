// Asset Imports
import "./VideoHero.styles.css";
import Guys from "../../assets/gifs/videoGif-reduced.gif";
import CC from "../../assets/video/CC30SecondFileDS.vtt";

export function VideoHero() {
  return (
    <header className="videoHeroContainer">
      <section role="banner heroBanner">
        <video
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
            src="https://wlaozdmgwaaymllhazpm.supabase.co/storage/v1/object/public/video/2024_FC_Dukes_WTDC_23976_1920x1080_16x9_30_HD_1.mp4?t=2024-08-28T17%3A03%3A14.162Z"
            type="video/mp4"
          ></source>
          <track default kind="captions" srcLang="en" src={CC} />
          <p>Your browser does not support the video tag.</p>
        </video>
      </section>

      <h1> WELCOME TO DUKE'S COUNTRY. </h1>
    </header>
  );
}
