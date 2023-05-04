import React from "react";
import Header from "../components/Header";
import "../styles/TodoListPage.css";
import checkIcon from "../images/checkIcon.svg";
import deleteIcon from "../images/deleteIcon.svg";

export default function TodoListPage({
  name,
  file,
  todos,
  handleCheck,
  handleDelete,
  taskValue,
  setTaskValue,
  handleAdd,
}) {
  return (
    <>
      <Header name={name} file={file} />
      <div className="todos">
        <form style={{ marginBottom: 0 }} onSubmit={(e) => handleAdd(e)}>
          <input
            value={taskValue}
            onChange={(e) => setTaskValue(e.target.value)}
            type="text"
          />
          <button type="submit">Add</button>
        </form>
        <ul style={{ marginTop: 40 }}>
          {todos.map((todo) => {
            return (
              <li
                key={todo.id}
                style={{
                  background: todo.completed ? "green" : "black",
                  color: "#fff",
                }}
              >
                {todo.title}
                <button onClick={() => handleCheck(todo.id)}>
                  <img src={checkIcon} alt="img"></img>
                </button>
                <button onClick={() => handleDelete(todo.id)}>
                  <img src={deleteIcon} alt="img"></img>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
