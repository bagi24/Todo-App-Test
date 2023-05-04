import React from "react";
import "../styles/SignInPage.css";
import UploadPhoto from "../images/upload2.svg";
import { useNavigate } from "react-router-dom";
import TextInput from "../components/inputs/TextInput";

export default function SignInPage({
  file,
  name,
  isValid,
  setIsValid,
  handleFile,
  handleName,
}) {
  const navigate = useNavigate();

  return (
    <section className="register-content">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();

          if (file === null || name.length === 0) {
            setIsValid(true);
          } else {
            setIsValid(false);
            navigate("/todo-list");
            localStorage.setItem("file", JSON.stringify(file));
            localStorage.setItem("name", name);
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
        {file && <div className="photo-name">{file.name}</div>}
        <label className="input-labelName" htmlFor="name">
          fill in you name
        </label>
        <TextInput
          id="name"
          name="name"
          placeholder="your name"
          autoComplete="off"
          value={name}
          onChange={handleName}
          width="487px"
        />
        <div style={{height: 28, display: "flex", alignItems: "flex-end"}}>
        {isValid ? <div className="valid-text">Fill all fields</div> : null}
        </div>

        <button className="btn-signin" type="submit">
          Sign In
        </button>
      </form>
    </section>
  );
}
