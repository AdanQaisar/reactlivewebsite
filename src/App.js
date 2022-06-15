import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//frontpage
import FrontPage from "./components/frontpage";
//landing page
import Landing from "./components/landing";
//Singuppage
import Spage from "./components/spage";
//inprogress
import Inprogress from "./components/inprogress";
//degree
import OnlineDegree from "./components/onlinedegree";
//errorpage
import ErrorPage from "./components/errorpage";
//Course PAGE
import CoursesPage from "./components/coursespg";
//cODEPAGE
import CodePage from "./components/codepage";
//Register Page
import Register from "./components/register";
//login
import Login from "./components/login";
//OnlinePro
import OnlineProjects from "./components/onlineprojects";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/Spage" element={<Spage />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/Inprogress" element={<Inprogress />} />
        <Route path="/OnlineDegree" element={<OnlineDegree />} />
        <Route path="/CoursesPage" element={<CoursesPage />} />
        <Route path="/CodePage" element={<CodePage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/OnlineProjects" element={<OnlineProjects />} />

        
      </Routes>
    </Router>
  );
}

export default App;
