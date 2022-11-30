import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact";
import Employer from "./Employer";
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Contact />

        <Employer />
      </div>
    </BrowserRouter>
  );
}

export default App;
