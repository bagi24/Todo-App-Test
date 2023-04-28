import "./styles/App.css";
import SignInPage from "./pages/SignInPage";
import StartPage from "./pages/StartPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="singin" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
