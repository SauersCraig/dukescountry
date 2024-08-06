import "./SignUpSection.styles.css";
import { useState } from "react";
import { RandomUser } from "../RandomUser/RandomUser";
import { DeletePopUp } from "../DeletePopUp/DeletePopUp";
export function SignUpSection({ name, users }) {
  const [openDel, setOpenDel] = useState(false);


  console.log(openDel);
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
                  <p onClick={() => setOpenDel(true)} className="deleText">
                    DELETE
                  </p>
                  {openDel && <DeletePopUp id={i} setOpenDel={setOpenDel} />}
                </ul>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
