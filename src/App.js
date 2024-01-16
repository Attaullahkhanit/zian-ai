import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./page/NotFound";
import Drafts from "./components/Drafts";
import GenerateCont from "./components/GenerateCont";
import Home from "./components/Home";
import Calendar from "./components/Calendar";
import Settings from "./components/Settings";
import Plan from "./components/Plan";
import Manage from "./components/Manage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/draft" />} />
          <Route path="/draft" element={<Drafts />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/generator" element={<GenerateCont/>} />
          <Route path="/calendar" element={<Calendar/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/plan" element={<Plan/>} />
          <Route path="/manage" element={<Manage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
