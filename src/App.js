import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Schools from "./pages/Schools";
import Stationery from "./pages/Stationery";
import { useEffect, useState } from "react";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <Navbar />
          <div className="content-container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/schools" element={<Schools />} />
              <Route path="/stationery" element={<Stationery />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
