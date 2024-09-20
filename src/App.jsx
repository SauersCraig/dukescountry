// Assets
import "./App.css";

// Depend
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";

// Pages
import { HomePage } from "./pages/HomePage/HomePage";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import { Football } from "./pages/Football/Football";
import { MayoBowl } from "./pages/MayoBowl/MayoBowl";
import { MayoClassic } from "./pages/MayoClassic/MayoClassic";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
// utils
import { UsePageTracking } from "./utils/GA4-Functions";

function App() {
  UsePageTracking();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/Football" element={<Football />} />
        <Route path="/MayoClassic" element={<MayoClassic />} />
        <Route path="/MayoBowl" element={<MayoBowl />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
