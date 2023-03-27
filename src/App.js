// lager lenke til test register-filen for å teste tilkobling mellom backend og frontend
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./test_pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
