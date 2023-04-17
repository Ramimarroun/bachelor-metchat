// lager lenke til test register-filen for å teste tilkobling mellom backend og frontend
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Login from "./components/login";
import Register from "./components/Register";
import MoreInfo from "./MoreInfo";
import Contacts from "./Contacts";
import Chat from "./Chat";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route path="/kontakter" element={<Contacts />} />
        <Route path="/merInfo" element={<MoreInfo />} />
        <Route path="/samtaler" element={<Chat />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

// Bruke Bootsrap Grid system for å gjøre sidene responsive
