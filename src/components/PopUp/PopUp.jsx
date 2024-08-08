import "./PopUp.styles.css";
import { useState, useEffect } from "react";
import Logo from "../../assets/logos/logo.png";
import Gif from "../../assets/gifs/splashPageGif.gif";
import { supabase } from "../../client";
import PhoneInput from "react-phone-input-2";
export function PopUp() {
  const [open, setOpen] = useState(true);
  const [cookie, setCookie] = useState(false);
  const [formData, setFormData] = useState({
    emailAddress: "",
    phone: "",
  });

  if (cookie) {
    sessionStorage.setItem("PopUpToken", JSON.stringify(cookie));
  }
  useEffect(() => {
    if (sessionStorage.getItem("PopUpToken")) {
      let data = JSON.parse(sessionStorage.getItem("PopUpToken"));
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
      .insert([{ email: formData.emailAddress, phone: formData.phone }])
      .select();

    setCookie(true);
    setOpen(false);
  }
  console.log(formData.phone);
  return (
    <>
      {open && !cookie ? (
        <div className="popUpContainer">
          <div className="popUp">
            <button
              onClick={closePopUp}
              className="closeX"
              aria-label="Close PopUp"
            >
              <p>X</p>
            </button>

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
              <h2 className="signUpTextPop">
                Sign up for updates and you'll be entered to win a Duke's
                Country welcome kit.
              </h2>
              <form className="popUpForm" onSubmit={handleSubmit}>
                <label htmlFor="emailAddress">Email </label>
                <br></br>
                <input
                  type="email"
                  onChange={handleChange}
                  name="emailAddress"
                  required
                  aria-label="Email"
                  id="emailAddress"
                  size="30"
                  title="Please provide a valid email address"
                  placeholder
                  autoComplete="email"
                  aria-required="true"
                ></input>

                <PhoneInput
                  country={"us"}
                  placeholder={"PHONE"}
                  value={formData.phone}
                  rules={{ required: true }}
                  onChange={(value) =>
                    setFormData({ ...formData, phone: value })
                  }
                  required
                />
                <button
                  className="subBtnPopUp"
                  type="submit"
                  aria-label="Clicking Button will enter you for a chance to win a welcome kit"
                >
                  Enter Duke's Country
                </button>
              </form>
              <button
                onClick={closePopUp}
                aria-label="Clicking will close the pop up"
              >
                <p className="noThanks">No Thanks</p>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
