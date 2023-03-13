import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AddJob from "./pages/AddJob";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="jobEdit/:jobId" element={<Edit />} />
          <Route path="add" element={<AddJob />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
