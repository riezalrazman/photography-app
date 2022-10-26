import React from "react";
import { Routes, Route } from "react-router-dom";
import Work from "./routes/Work";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Portrait from "./routes/Portrait";




function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Work/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/portrait" element={<Portrait/>} />
  </Routes>
  </>
  );
}

export default App;
