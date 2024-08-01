import { useState } from "react";
import { supabase } from "../../client";
import "./Login.styles.css";
export function Login({ setToken }) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const value = event.target.value;
    setLoginData({ ...loginData, [event.target.name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginData.email,
        password: loginData.password,
      });

      if (error) throw error;

      setToken(data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }
  return (
    <>
      <div>
        <h1 className="headerTY">Sign in</h1>

        <form onSubmit={handleSubmit} className="formContainer">
          <input
            type="email"
            placeholder="Your Email"
            onChange={handleChange}
            name="email"
            className="inputSignUp"
          />
          <input
            type="password"
            placeholder="Your Password"
            onChange={handleChange}
            name="password"
            className="inputSignUp"
          />
          <button type="submit" className="subBtn">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
