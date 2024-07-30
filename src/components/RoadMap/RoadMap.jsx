import "./RoadMap.styles.css";

import Explore from "../../assets/logos/exploreDC.png";
import RecipeSign from "../../assets/signs/recipeSign.png";
import MerchSign from "../../assets/signs/merchSign.png";
import BowlSign from "../../assets/signs/mayoBowlSign.png";

export function RoadMap() {
  return (
    <section>
      <div>
        <img src={Explore} alt="Explore Duke's Country" />
      </div>
      <div className="mapSection">
        <img src={RecipeSign} alt="Road sign with the word Recipes on it" />
        <img src={BowlSign} alt="Road sign with the word Mayo Bowl on it" />
        <img src={MerchSign} alt="Road sign with the word Merch on it" />
      </div>
    </section>
  );
}
