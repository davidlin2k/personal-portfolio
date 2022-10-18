import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
