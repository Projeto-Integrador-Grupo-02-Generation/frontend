import './App.css';

import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Home from './pages/home/Home';
import { AuthProvider } from './contexts/AuthContext';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/categorias/formularioCategoria/FomularioCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import FormularioProduto from './components/produtos/formularioProduto/FormularioProduto';
import ListaProdutos from './components/produtos/listaProdutos/listaProdutos';
import About from './pages/about/About';
import DeletarProdutos from './components/produtos/deletarProdutos/deletarProduto';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <>
      <AuthProvider>
      <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={< ListaProdutos/>} />
              <Route path="/cadastroProduto" element={<FormularioProduto />} />
              <Route path="/editarProdutos/:id" element={<FormularioProduto />} />  
              <Route path="/deletarProdutos/:id" element={<DeletarProdutos />} />
              <Route path="/sobre" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;