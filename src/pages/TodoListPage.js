import React from "react";
import "../styles/TodoListPage.css";

export default function TodoListPage({ name, file }) {
  return (
    <header>
      <h5>TO DO</h5>
      <div className="personInfo">
        <div className="nameInfo"> {name} </div>
        <div >
          <img className="profilePic" src={URL.createObjectURL(file)} alt="profile photo" />
        </div>
      </div>
    </header>







  );
}
