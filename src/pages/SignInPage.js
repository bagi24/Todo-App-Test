import React, { useState } from "react";
import "../styles/SignInPage.css";
import UploadPhoto from "../images/upload2.svg";
import { useNavigate } from "react-router-dom";

export default function SignInPage({file, name, isValid, setIsValid, handleFile, handleName}) {
  
  const navigate = useNavigate();

 

  return (
    <section className="register-content">
      <form
        onSubmit={(e) => {
          e.preventDefault(); 

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
