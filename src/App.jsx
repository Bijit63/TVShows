import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowAll from './Components/ShowAll/ShowAll';
import ShowDetails from './Components/ShowDetails/ShowDetails';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowAll />} />
        <Route path="/ShowDetails/:id" element={<ShowDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

