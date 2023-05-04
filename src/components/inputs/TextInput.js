import React from "react";
import "../../styles/TextInput.css";

export default function TextInput({
  onChange,
  placeholder,
  value,
  name,
  autoComplete,
  id,
  width,
}) {
  return (
    <input
      className="text-input"
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
      style={{ width: width }}
    />
  );
}
