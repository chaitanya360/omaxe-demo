import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Plan from "./Plan";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/plan/:planId" element={<Plan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
