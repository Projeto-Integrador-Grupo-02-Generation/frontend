import { useContext, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';
import { Dna } from 'react-loader-spinner';
import CardCategorias from '../cardCategorias/CardCategorias';
import Categoria from '../../../models/Categoria';
import { toastAlerta } from '../../../util/toastAlerta';
import { FaPlus } from 'react-icons/fa';

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'erro');
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'erro');
      navigate('/login');
    } else {
      buscarCategorias();
    }
  }, [token, navigate, handleLogout]);

  return (
    <>
      {categorias.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end items-center mb-6">
       
          <Link to='/cadastroCategoria'
            className="flex items-center bg-gradient-to-r from-deep-sea to-shallow-sea text-white font-bold py-2 px-4 rounded transition-all duration-300 hover:from-shallow-sea hover:to-deep-sea"
          >
            <FaPlus className="mr-2" />
            <button>Cadastrar Nova Categoria</button>
          </Link>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((categoria) => (
            <CardCategorias key={categoria.id} categoria={categoria} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;