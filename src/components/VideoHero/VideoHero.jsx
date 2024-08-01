// Asset Imports
import "./VideoHero.styles.css";
import Guys from "../../assets/tatooGuys.png";

export function VideoHero() {
  return (
    <div>
      <div className="videoHeroContainer">
        <img
          src={Guys}
          className="heroBanner"
          alt="two guys in a convertible with thier hands up, no shirts, with giant Duke's Mayo tatoo's on thier back"
        />
      </div>
    </div>
  );
}
