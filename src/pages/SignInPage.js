import React, { useState } from "react";
import "../styles/SignInPage.css";
import UploadPhoto from "../images/upload2.svg";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const handleName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  return (
    <section className="register-content">
      <form
        onSubmit={(e) => {
          e.preventDefault(); // prevent form submission

          if (file === null || name.length === 0) {
            setIsValid(true);
          } else {
            setIsValid(false);
            navigate("/todo-list");
          }
        }}
      >
        <h2> Get Started</h2>

        <p> add a photo</p>
        <label className="input-labelPhoto" htmlFor="photo">
          <img className="uploadphoto" alt="upload" src={UploadPhoto} />
        </label>
        <input
          className="input-file"
          type="file"
          id="photo"
          name="photo"
          onChange={handleFile}
        />

        {file && <div>{file.name}</div>}

        <label className="input-labelName" htmlFor="name">
          fill in you name
        </label>
        <input
          className="input-name"
          type="text"
          id="name"
          name="name"
          placeholder="your name"
          autoComplete="off"
          value={name}
          onChange={handleName}
        />
        {isValid ? <div>Fill all fields</div> : null}

        <button className="btn-signin" type="submit">
          Sign In
        </button>
      </form>
    </section>
  );
}
