import "./RoadMap.styles.css";


import RecipeSign from "../../assets/signs/recipeSign.png";
import MerchSign from "../../assets/signs/merchSign.png";

import BowlSign from "../../assets/signs/mayoBowlSign.png";
import DesktopRoad from "../../assets/roads/DesktopRoad.png";


export function DesktopRoadMap(){
    return(
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
    )
}