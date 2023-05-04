import React from "react";

export default function Header({ name, file }) {
  return (
    <header>
      <h5>TO DO</h5>
      <div className="personInfo">
        <div className="nameInfo"> {name ?? ""} </div>
        <div>
          {file && (
            <img className="profilePic" src={file.link} alt="profile photo" />
          )}
        </div>
      </div>
    </header>
  );
}
