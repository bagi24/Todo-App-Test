import React, { useState } from "react";
import "../styles/SignInPage.css";
import UploadPhoto from '../images/upload2.svg';

export default function SignInPage() {

const [file, setFile]= useState();

console.log(file)

const handleFile = (event) => {

  setFile(event.target.files[0])

  console.log(event.target.files[0])
}


  return (
    <section className="register-content">
      <form>
        <h2> Get Started</h2>


         <p> add a photo</p>
        <label className="input-labelPhoto" for="photo">
          <img className="uploadphoto" src={UploadPhoto} />
        </label>
        <input className="input-file" type="file" id="photo" name="photo" onChange={handleFile} />
      
        

        <label className="input-labelName" for="name">
          fill in you name
        </label>
        <input
          className="input-name"
          type="text"
          id="name"
          name="name"
          placeholder="your name"
        />

        <button className="btn-signin"> Sign In</button>
      </form>
    </section>
  );
}
