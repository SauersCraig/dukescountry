// Imports
// Assets
import "./App.css";
import tubby from "./assets/tubbyLayingDown.png";
import thumbnail from "./assets/thumbnail.png";
// Depend
import { Route, Routes } from "react-router-dom";
// Components
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
// Pages
import { HomePage } from "./pages/HomePage/HomePage";
import { AdminPage } from "./pages/AdminPage/AdminPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AdminPage" element={<AdminPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
