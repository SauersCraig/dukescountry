import "./SignUpSection.styles.css";
import { useState } from "react";
import { RandomUser } from "../RandomUser/RandomUser";
export function SignUpSection({ name, users }) {
  return (
    <div className="signUpContainer">
      <h1>You are logged in {name}</h1>

      <div>
        {users && (
          <div>
            <RandomUser users={users} />
            <div className="userContainer">
              {users.map((i) => (
                <ul key={i.id} className="eachSignUp">
                  <li>{i.email}</li>
                  <li className="noDot">{i.phone}</li>
                </ul>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
