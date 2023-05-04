import React from "react";
import Header from "../components/Header";
import "../styles/TodoListPage.css";
import checkIcon from "../images/checkIcon.svg";
import deleteIcon from "../images/deleteIcon.svg";
import TextInput from "../components/inputs/TextInput";

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
        <h6>Add Your Daily Tasks</h6>
        <form
          style={{ marginBottom: 0, marginTop: 27 }}
          onSubmit={(e) => handleAdd(e)}
        >
          <div className="inputForm">
            <TextInput
              value={taskValue}
              onChange={(e) => setTaskValue(e.target.value)}
              type="text"
              placeholder="my task"
              width="487px"
            />
            <button className="btn-addTodo" type="submit">
              Add
            </button>
          </div>
        </form>
        <ul className="todos-ul" style={{ marginTop: 40 }}>
          {todos.map((todo) => {
            return (
              <li
                className="todos-li"
                key={todo.id}
                style={{
                  background: todo.completed ? "green" : "black",
                  color: "#fff",
                }}
              >
                {todo.title}
                <div className="buttons">
                  <button
                    className="btn-check"
                    onClick={() => handleCheck(todo.id)}
                  >
                    <img src={checkIcon} alt="img"></img>
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(todo.id)}
                  >
                    <img src={deleteIcon} alt="img"></img>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
