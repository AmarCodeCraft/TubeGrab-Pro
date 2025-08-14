import React from "react";
import { Route, Routes } from "react-router-dom";
import Features from "../components/Features";
import Support from "../components/Support";

function Routing() {
  return (
    <Routes>
      <Route path="/features" element={<Features />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
}

export default Routing;
