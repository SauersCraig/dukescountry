// Imports
// Assets
import "./App.css";
import tubby from "./assets/tubbyLayingDown.png";
import thumbnail from "./assets/thumbnail.png";
// Depend
import { Route, Routes } from "react-router-dom";
// Components
import { Header } from "./components/Header/Header";
// Pages
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
