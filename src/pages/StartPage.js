import React, { useEffect } from "react";
import logo from "../images/logo.png";
import "../styles/StartPage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function StartPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      console.log("ehllo");
      navigate("/todo-list");
    }

    // eslint-disable-next-line
  }, []);


  if(localStorage.getItem("todos")) return

  return (
    <div className="StartPage">
      <img className="todo-logo" src={logo} alt="logo" />

      <h1> Keep Track Of Daily Tasks In Life </h1>

      <Link to="singin">
        <button className="btn-started"> Get Started </button>
      </Link>
    </div>
  );
}
