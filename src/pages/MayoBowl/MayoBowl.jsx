import "./MayoBowl.styles.css";

import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function MayoBowl() {
  // GA4 for page view set up

  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);
  
  return (
    <div>
      <p>Mayo Bowl</p>
    </div>
  );
}
