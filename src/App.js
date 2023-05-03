import "./styles/App.css";
import SignInPage from "./pages/SignInPage";
import StartPage from "./pages/StartPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoListPage from "./pages/TodoListPage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/singin" element={<SignInPage />} />
          <Route path="/todo-list" element={<TodoListPage />} />
        </Routes>
      </Router>
    </div>
  );
}
