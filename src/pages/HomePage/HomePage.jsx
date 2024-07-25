import "./HomePage.styles.css";
import tubby from "../../assets/tubbyLayingDown.png";
export function HomePage() {
  return (
    <div className="comingSoon">
      <h1>Duke's Mayo Country Coming Soon!!!</h1>
      <img src={tubby} alt="Tubby the Duke's Mascot laying down on a sofa" />
    </div>
  );
}
