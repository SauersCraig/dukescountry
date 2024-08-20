// Styles
import "./PopUp.styles.css";
// React Imports
import { useState, useEffect } from "react";
import { supabase } from "../../client";
import PhoneInput from "react-phone-input-2";
// Asset Imports
import Logo from "../../assets/logos/logo.png";
import Gif from "../../assets/MayoHandoff1.jpg";

export function PopUp() {
  const [open, setOpen] = useState(true);
  const [cookie, setCookie] = useState(false);
  const [formData, setFormData] = useState({
    emailAddress: "",
    phone: "",
  });
  // set PopUpToken in session storage to value
  if (cookie) {
    sessionStorage.setItem("PopUpToken", JSON.stringify(cookie));
  }
  // First Check for PopUpToken in Session Storage - State is named cookie
  useEffect(() => {
    if (sessionStorage.getItem("PopUpToken")) {
      let data = JSON.parse(sessionStorage.getItem("PopUpToken"));
      setCookie(data);
    }
  }, []);
  // Close Popup by setting open state to false
  const closePopUp = () => {
    setOpen(false);
  };
  // handleChange for input  Takes value from event.target.value and sets it to state formData
  function handleChange(event) {
    const value = event.target.value;
    setFormData({ ...formData, [event.target.name]: value });
  }

  // Submit form to Supabase

  async function handleSubmit(e) {
    e.preventDefault();

    const { data, error } = await supabase
      .from("SignUps")
      .insert([{ email: formData.emailAddress, phone: formData.phone }])
      .select();
    // set session Storage so pop up will not open again
    setCookie(true);
    // close pop up
    setOpen(false);
  }

  return (
    <>
      {/* Needs both Open to be true and cookie to be null to appear */}
      {open && !cookie ? (
        <section className="popUpContainer" role="alert">
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
                alt="two hands - handing off a bottle of Duke's Mayo"
                className="gifPopUp"
              />
            </div>
            <div>
              <h1 className="headerPopUp">ENTER TO WIN</h1>
            </div>
            <div className="popYellowSection">
              <h2 className="signUpTextPop">
                Sign up to receive updates from Duke's Country and be entered to
                win a Welcome to Duke's Country Swag Bag.
              </h2>
              <form className="popUpForm" onSubmit={handleSubmit}>
                <p className="emailText">Email</p>
                <label htmlFor="emailAddress" className="visuallyhidden">
                  Email
                </label>
                <input
                  type="email"
                  onChange={handleChange}
                  name="emailAddress"
                  required
                  aria-label="Email"
                  placeholder="Email@email.com"
                  id="emailAddress"
                  size="30"
                  title="Please provide a valid email address"
                  autoComplete="email"
                  aria-required="true"
                  className="emailInput"
                />
                <label htmlFor="phoneNumber" className="visuallyhidden">
                  Phone Number
                </label>
                <PhoneInput
                  country={"us"}
                  placeholder={"PHONE"}
                  name="phoneNumber"
                  id="phoneNumber"
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
                  aria-label="Clicking Button IF you entered in your email address, will enter you for a chance to win a welcome kit"
                >
                  Enter Duke's Country
                </button>
              </form>
              <button
                onClick={closePopUp}
                aria-label="No Thank You Clicking will close the pop up with out entering you for a chance to win a welcome kit"
              >
                <p className="noThanks">No Thanks</p>
              </button>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}
