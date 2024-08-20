import "./RoadMap.styles.css";

import RecipeSign from "../../assets/signs/recipeSign.png";
import MerchSign from "../../assets/signs/merchSign.png";

import BowlSign from "../../assets/signs/mayoBowlSign.png";

import MobileRoad from "../../assets/roads/MobileRoad.png";

export function MobileRoadMap() {
  return (
    <div className="mobileRoadSection">
      <img
        src={MobileRoad}
        alt="A widing road in the background"
        className="mobileRoad"
      />
      <a
        href="https://dukesmayo.com/blogs/recipes/tagged/tailgate"
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
        href="https://dukesmayo.com/collections/dukes-country"
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
        href="https://dukesmayo.com/pages/classic"
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
  );
}
