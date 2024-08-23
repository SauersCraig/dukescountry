import "./AdminPage.styles.css";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { supabase } from "../../client";
import { Login } from "../../components/Login/Login";
import { useLocation } from "react-router-dom";
import { CSVLink } from "react-csv";
import Logo from "../../assets/logos/WTDClogo.png";
import { SignUpSection } from "../../components/SignUpSection/SignUpSection";
import ReactGA from "react-ga4";
export function AdminPage() {
  const [token, setToken] = useState(false);
  const [users, setUsers] = useState([]);
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);
  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
      getUsers();
    }
  }, []);
  useEffect(() => {
    if (token) {
      getUsers();
    }
  }, [token]);
  const updateUsers = (payload) => {
    const filterUsers = users.filter((i) => i.id !== payload.new.id);
    let x = [...filterUsers, payload.new];
    setUsers(x);
  };
  const channels = supabase
    .channel("custom-all-channel")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "SignUps" },
      (payload) => {
        updateUsers(payload);
      }
    )
    .subscribe();
  async function getUsers() {
    let { data: SignUps, error } = await supabase.from("SignUps").select();
    setUsers(SignUps);
  }
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    setToken(false);
    sessionStorage.clear();
    setUserInfo([]);
    location.reload();
  }

  const name = token ? token.user.user_metadata.first_name : "";
  return (
    <div className="adminBody">
      <Helmet>
        <title>Official WTDC Admin Page</title>

        <meta name="description" content="Official Uses Only" />
        {/* Facebooke Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dukescountry.com/adminpage" />
        <meta property="og:title" content="Official WTDC Admin Page" />
        <meta property="og:description" content="Official Uses Only" />
        <meta
          property="og:image"
          content="https://wlaozdmgwaaymllhazpm.supabase.co/storage/v1/object/public/images/thumbnail%20copy.jpg?t=2024-08-21T20%3A00%3A33.877Z"
        />
        {/* Twitter Meta Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://dukescountry.com/adminpage"
        />
        <meta property="twitter:title" content="Official WTDC Admin Page" />
        <meta property="twitter:description" content="Official Uses Only" />

        <meta
          property="twitter:image"
          content="https://wlaozdmgwaaymllhazpm.supabase.co/storage/v1/object/public/images/thumbnail%20copy.jpg?t=2024-08-21T20%3A00%3A33.877Z"
        />
      </Helmet>
      <img src={Logo} alt="Welcome to Duke's Country" className="logoAdmin" />
      <h1 className="text-center">Admin Page For Official Uses Only</h1>
      <div>
        {token ? (
          <div>
            <div className="buttonsAdmin">
              <CSVLink data={users} className="subBtn">
                Download Users
              </CSVLink>
              <button onClick={() => signOut()} className="subBtn">
                Sign Out
              </button>
            </div>
            <SignUpSection name={name} users={users} />
          </div>
        ) : (
          <Login setToken={setToken} />
        )}
      </div>
    </div>
  );
}
