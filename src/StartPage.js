import React from "react";
import logo from "./images/logo.png";
import "./StartPage.css";

export default function StartPage() {
  return (
    <div className="StartPage">
      <img className="todo-logo" src={logo} alt="logo" />

      <h1> Keep Track Of Daily Tasks In Life </h1>

      <button className="btn-started"> Get Started </button>
    </div>
  );
}
