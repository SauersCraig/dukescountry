import "./RoadMap.styles.css";

import Explore from "../../assets/logos/exploreDC.png";
import RecipeSign from "../../assets/signs/recipeSign.png";
import MerchSign from "../../assets/signs/merchSign.png";
import ClassicSign from "../../assets/signs/MayoClassicSign.png";
import BowlSign from "../../assets/signs/mayoBowlSign.png";
import DesktopRoad from "../../assets/roads/DesktopRoad.png";
import MobileRoad from "../../assets/roads/MobileRoad.png";

export function RoadMap() {
  return (
    <section className="roadMapSection">
      <img src={Explore} alt="Explore Duke's Country" className="exploreLogo" />

      {/* DeskTop */}
      <div className="deskSignContainer">
        <img
          src={DesktopRoad}
          alt="A widing road in the background"
          className="desktopRoad"
        />

        <a
          href="https://dukesmayo.com/blogs/recipes"
          target="_blank"
          aria-label="Learn more about Recipes on Duke's Mayo Main Site"
        >
          <img
            src={RecipeSign}
            alt="Road sign with the word Recipes on it. This Road sign is a link going to Recipes on dukesmayo.com"
            className="recSign roadSign"
          />
        </a>

        <a
          href="https://dukesmayo.com/collections/merchandise"
          target="_blank"
          aria-label="Buy Some Cool Duke's Mayo Merch on Duke's Mayo E-Com Site"
        >
          <img
            src={MerchSign}
            alt="Road sign with the word Merch on it. This Road sign is a link going to Duke's Mayo Merch on dukesmayo.com"
            className="bowlSign roadSign"
          />
        </a>
        <a
          href="https://dukesmayo.com/pages/dukes-mayo-bowl"
          target="_blank"
          aria-label="Learn more about Duke's Mayo Football games on Duke's Mayo E-Com Site"
        >
          <img
            src={BowlSign}
            alt="Road sign with the word Mayo Bowl on it. This Road Sign is a link that takes you to learn more about Duke's Mayo Football Games."
            className=" merchSign  roadSign"
          />
        </a>
      </div>

      {/* Mobile */}
      <div className="mobileRoadSection">
        <img
          src={MobileRoad}
          alt="A widing road in the background"
          className="mobileRoad"
        />
        <a
          href="https://dukesmayo.com/blogs/recipes"
          target="_blank"
          aria-label="Learn more about Recipes on Duke's Mayo Main Site"
        >
          <img
            src={RecipeSign}
            alt="Road sign with the word Recipes on it"
            className="recSignMob roadSignMob"
          />
        </a>
        <a
          href="https://dukesmayo.com/collections/merchandise"
          target="_blank"
          aria-label="Buy Some Cool Duke's Mayo Merch on Duke's Mayo E-Com Site"
        >
          <img
            src={MerchSign}
            alt="Road sign with the word Merch on it"
            className="bowlSignMob roadSignMob"
          />
        </a>
        <a
          href="https://dukesmayo.com/pages/dukes-mayo-bowl"
          target="_blank"
          aria-label="Learn more about Duke's Mayo Football games on Duke's Mayo E-Com Site"
        >
          <img
            src={BowlSign}
            alt="Road sign with the word Mayo Bowl on it"
            className=" merchSignMob roadSignMob"
          />
        </a>
      </div>
    </section>
  );
}
