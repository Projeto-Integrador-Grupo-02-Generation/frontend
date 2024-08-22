import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import { buscar } from '../../../services/Service';
import CardProduto from '../cardProdutos/CardProdutos';
import { toastAlerta } from '../../../util/toastAlerta';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface ListaProdutosProps {
  showAddButton?: boolean;
}

function ListaProdutos({ showAddButton = true }: ListaProdutosProps) {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'erro');
      navigate('/');
    }
  }, [token]);

  async function buscarProdutos() {
    try {
      await buscar('/produtos/all', setProdutos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'erro');
        handleLogout();
      }
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  return (
    <>
      {produtos.length === 0 && (
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
          {showAddButton && (
            <Link to='/cadastroProduto'
              className="flex items-center bg-gradient-to-r from-deep-sea to-shallow-sea text-white font-bold py-2 px-4 rounded transition-all duration-300 hover:from-shallow-sea hover:to-deep-sea"
            >
              <FaPlus className="mr-2" />
              <button>Cadastrar Novo produto</button>
            </Link>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListaProdutos;