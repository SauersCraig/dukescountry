import "./PopUp.styles.css";
import { useState, useEffect } from "react";
import Logo from "../../assets/logos/logo.png";
import Gif from "../../assets/gifs/splashPageGif.gif";
import { supabase } from "../../client";
export function PopUp() {
  const [open, setOpen] = useState(true);
  const [cookie, setCookie] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  });

  if (cookie) {
    sessionStorage.setItem("cookie", JSON.stringify(cookie));
  }
  useEffect(() => {
    if (sessionStorage.getItem("cookie")) {
      let data = JSON.parse(sessionStorage.getItem("cookie"));
      setCookie(data);
    }
  }, []);

  const closePopUp = () => {
    setOpen(false);
  };
  function handleChange(event) {
    const value = event.target.value;
    setFormData({ ...formData, [event.target.name]: value });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    const { data, error } = await supabase
      .from("SignUps")
      .insert([{ email: formData.email, phone: formData.phone }])
      .select();

    setCookie(true);
    setOpen(false);
   
  }

  return (
    <>
      {open && !cookie ? (
        <div className="popUpContainer">
          <div className="popUp">
            <div onClick={closePopUp} className="closeX">
              <p>X</p>
            </div>

            <div>
              <img
                src={Logo}
                alt="Welcome to Duke's Country"
                className="popUpLogo"
              />
            </div>
            <div>
              <img
                src={Gif}
                alt="photoshoot of two guys"
                className="gifPopUp"
              />
            </div>
            <div>
              <h1 className="headerPopUp">ENTER TO WIN</h1>
            </div>
            <div className="popYellowSection">
              <h2>
                Sign up for updates and you'll be entered to win a Duke's
                Country welcome kit.
              </h2>
              <form className="popUpForm" onSubmit={handleSubmit}>
                <input
                  placeholder="EMAIL"
                  type="email"
                  onChange={handleChange}
                  name="email"
                  required
                ></input>
                <input
                  placeholder="PHONE NUMBER"
                  type="number"
                  name="phone"
                  onChange={handleChange}
                  required
                ></input>
                <button className="subBtnPopUp" type="submit">
                  TELL ME MORE
                </button>
              </form>
              <div onClick={closePopUp}>
                <p className="noThanks">No Thanks</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
