import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer'
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
        <NavBar />
          <div className='min-h-[80vh]'>
            <Routes>
             
            </Routes>
          </div>
          <Footer />
    </BrowserRouter>
    </>
);
}
export default App;