import "./AdminPage.styles.css";
import { useState, useEffect } from "react";
import { supabase } from "../../client";
import { Login } from "../../components/Login/Login";
import { CSVLink } from "react-csv";
import Logo from "../../assets/logos/WTDClogo.png";
import { SignUpSection } from "../../components/SignUpSection/SignUpSection";
export function AdminPage() {
  const [token, setToken] = useState(false);
  const [users, setUsers] = useState([]);

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
      <img src={Logo} alt="Welcome to Duke's Country" className="logoAdmin" />
      <h1 className="text-center">Admin Page For Official Uses Only</h1>
      <div>
        {token ? (
          <div>
            <SignUpSection name={name} users={users} />
            <button onClick={() => signOut()} className="subBtn">
              Sign Out
            </button>
            <CSVLink data={users} className="subBtn">
              Download Users
            </CSVLink>
          </div>
        ) : (
          <Login setToken={setToken} />
        )}
      </div>
    </div>
  );
}
