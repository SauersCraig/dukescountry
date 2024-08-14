// Assets
import "./App.css";

// Depend
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga";

// Pages
import { HomePage } from "./pages/HomePage/HomePage";
import { AdminPage } from "./pages/AdminPage/AdminPage";
const TRACKING_ID = "G-C9JHZKQ2G8";
function App() {
  ReactGA.initialize(TRACKING_ID);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AdminPage" element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
