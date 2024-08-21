import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';
import Fundo from '../../assets/fundoLogin.png';

function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);
  const { isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home');
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <div 
      className="relative h-screen bg-cover bg-center flex justify-end"
      style={{ backgroundImage: `url(${Fundo})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative z-10 flex items-center justify-center h-full pr-60 md:pr-40">
        <form className="flex flex-col w-full max-w-md p-8 bg-white bg-opacity-60 rounded-lg shadow-lg" onSubmit={login}>
          <h2 className="text-slate-900 text-4xl md:text-5xl font-semibold mb-6 text-center">Entrar</h2>
          <div className="flex flex-col mb-4">
            <label htmlFor="usuario" className="mb-2 text-lg font-medium">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="ex: usuario@usuario.com"
              className="border-2 border-slate-700 rounded-lg p-3 text-lg focus:outline-none focus:border-green-600"
              value={usuarioLogin.usuario} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="senha" className="mb-2 text-lg font-medium">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded-lg p-3 text-lg focus:outline-none focus:border-green-600"
              value={usuarioLogin.senha} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <button 
            type="submit" 
            className="rounded-lg bg-gradient-to-r from-deep-sea to-shallow-sea hover:text-sky-200 text-white w-full py-2 text-lg font-medium flex justify-center items-center"
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Entrar</span>
            )}
          </button>
          <hr className="border-slate-800 my-4" />
          <p className="text-center">
            Ainda não tem uma conta?{' '}
            <Link to="/cadastro" className="text-gradient bg-gradient-to-r to-shallow-sea hover:text-deep-sea 200 font-medium">
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;