import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import About from './pages/about/About';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer'
import Cadastro from './pages/cadastro/Cadastro'


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className='flex justify-center min-h-[80vh]'>
          <Routes>
            <Route path="/" element={< Cadastro/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;