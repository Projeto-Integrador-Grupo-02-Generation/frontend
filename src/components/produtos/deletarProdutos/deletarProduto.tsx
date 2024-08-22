import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import { buscar, deletar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta';

function DeletarProdutos() {
  const [produto, setProduto] = useState<Produto>({} as Produto);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: {
          'Authorization': token,
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
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'erro');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/produtos");
  }

  async function deletarProduto() {
    try {
      await deletar(`/produtos/${id}`, {
        headers: {
          'Authorization': token,
        },
      });

      toastAlerta('Produto apagado com sucesso', 'sucesso');
    } catch (error) {
      toastAlerta('Erro ao apagar o produto', 'erro');
    }

    retornar();
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center bg-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Deletar Produto</h1>

      <p className="text-lg text-gray-600 mb-6 text-center">
        Você tem certeza de que deseja apagar o produto a seguir?
      </p>

      <div className="w-full max-w-md bg-white border rounded-lg shadow-lg overflow-hidden">
        <header className="py-4 px-6 bg-gradient-to-r from-deep-sea to-shallow-sea text-white font-bold text-2xl">
          Produto
        </header>
        <div className="p-6">
          <p className="text-xl font-semibold mb-2">{produto.nome}</p>
          <p className="text-gray-600">{produto.descricao}</p>
        </div>
        <div className="flex">
          <button
            className="flex-1 py-2 bg-gray-300 text-gray-800 hover:bg-gray-400 font-semibold transition-colors"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="flex-1 py-2 bg-red-500 text-white hover:bg-red-600 font-semibold transition-colors"
            onClick={deletarProduto}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarProdutos;