import "./styles/App.css";
import SignInPage from "./pages/SignInPage";
import StartPage from "./pages/StartPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoListPage from "./pages/TodoListPage";
import { useState } from "react";

export default function App() {
  const [file, setFile] = useState(
    JSON.parse(localStorage.getItem("file")) ?? null
  );
  const [name, setName] = useState(localStorage.getItem("name") ?? "");
  const [isValid, setIsValid] = useState(false);
  const [taskValue, setTaskValue] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) ?? []
  );

  const handleName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleFile = (e) => {
    const file = e.target.files[0];

    setFile({ name: file.name, link: URL.createObjectURL(file) });
  };

  const handleCheck = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setTaskValue("");
    if (taskValue.length === 0) return;
    setTodos((prev) => {
      const updatedValue = [
        ...prev,
        {
          id: Math.floor(Math.random() * 100),
          title: taskValue,
          completed: false,
        },
      ];
      localStorage.setItem("todos", JSON.stringify(updatedValue));

      return updatedValue;
    });
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route
            path="/singin"
            element={
              <SignInPage
                file={file}
                name={name}
                isValid={isValid}
                setIsValid={setIsValid}
                handleFile={handleFile}
                handleName={handleName}
              />
            }
          />
          <Route
            path="/todo-list"
            element={
              <TodoListPage
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                setTaskValue={setTaskValue}
                taskValue={taskValue}
                handleAdd={handleAdd}
                todos={todos}
                name={name}
                file={file}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
