import "./DeletePopUp.styels.css";
import { useState } from "react";
import { supabase } from "../../client";

export function DeletePopUp({ id, setOpenDel }) {
  const [inputDel, setInputDel] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setInputDel(value);
  }

  async function deleteUser(id) {
    const { error } = await supabase.from("SignUps").delete().eq("id", id.id);
    setOpenDel(false);
    location.reload();
  }

  const onClickDelete = () => {
    if (inputDel === "Delete") {
      deleteUser(id);
    } else {
      alert("You Spelled Delete Wrong");
    }
  };
  return (
    <>
      <div className="delPopUpContainer">
        <h2 onClick={() => setOpenDel(false)} className="closeText">
          CLOSE THIS BOX
        </h2>
        <p> ARE YOU SURE YOU WANT TO DELETE {id.email} </p>
        <p>This can not be undone</p>
        <p>Type "Delete"</p>
        <input onChange={handleChange} />
        <br></br>
        <button onClick={() => onClickDelete()}>Delete</button>
        <h2 onClick={() => setOpenDel(false)} className="closeText">
          CLOSE THIS BOX
        </h2>
      </div>
    </>
  );
}
