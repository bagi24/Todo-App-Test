import React from "react";
import "../styles/SignInPage.css";

export default function SignInPage() {
  return (
    <section className="register-content">
      <form>
        <h2> Get Started</h2>

        <label className="input-labelPhoto" for="photo"> add a photo </label>
        <input type="file" id="photo" name="photo" />

        <label className="input-labelName" for="name"> fill in you name</label>
        <input className="input-name" type="text" id="name"  name="name" placeholder="your name" />

        <button className="btn-signin"> Sign In</button>
      </form>
    </section>
  );
}
