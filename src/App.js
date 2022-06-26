import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}
