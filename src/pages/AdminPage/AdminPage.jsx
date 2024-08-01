import { useState, useEffect } from "react";
import { supabase } from "../../client";
import { Login } from "../../components/Login/Login";
export function AdminPage() {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);
  useEffect(() => {
    {
      token ? getUser() : <></>;
    }
  }, [token]);
  async function getUser() {
    let { data: profile, error } = await supabase
      .from("profile")
      .select("*")
      .eq("id", token.user.id);
    setUserInfo(profile);
  }
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    setToken(false);
    sessionStorage.clear();
    setUserInfo([]);
    location.reload();
  }
  return (
    <div>
      <h1 className="text-center">Admin Page For Offical Use Only</h1>
      <div>
        {token ? (
          <h1>You are logged in {token.user.user_metadata.first_name}</h1>
        ) : (
          <Login setToken={setToken} />
        )}
      </div>
    </div>
  );
}
