import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import View from "./pages/Classes/View";
import Update from "./pages/Classes/Create";
import Classes from "./pages/Classes";
import Create from "./pages/Classes/Create";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Classes />} />
        <Route path="/class/:classId" element={<View />} />
        <Route path="/class/view/:classId" element={<Update />} />
        <Route path="/class/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
