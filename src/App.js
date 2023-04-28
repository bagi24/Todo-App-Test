import "./styles/App.css";
import SingInPage from "./pages/SingInPage";
import StartPage from "./pages/StartPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="singin" element={<SingInPage />} />
      </Routes>
    </div>
  );
}

export default App;
