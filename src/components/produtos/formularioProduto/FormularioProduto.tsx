import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import Categoria from '../../../models/Categoria';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta';

function FormularioProduto() {
  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    descricao: '',
    preco: 0,
    estoque: 0,
    categoria: null,
    usuario: null
  });

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategorias() {
    await buscar('categorias', setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarPorId(id: string) {
    await buscar(`/produtos/${id}`, (data: Produto) => {
      setProduto(data);
    }, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    buscarCategorias();

    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;

    if (name === 'categoria') {
      const selectedCategoria = categorias.find(categoria => categoria.id === parseInt(value));
      setProduto(prevProduto => ({
        ...prevProduto,
        categoria: selectedCategoria
      }));
    } else {
      setProduto(prevProduto => ({
        ...prevProduto,
        [name]: value
      }));
    }
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    setProduto(prevProduto => ({
      ...prevProduto,
      usuario: usuario
    }));

    try {
      if (id !== undefined) {
        await atualizar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta('Produto atualizado com sucesso', 'sucesso');
      } else {
        await cadastrar('/produtos', produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta('Produto cadastrado com sucesso', 'sucesso');
      }
      retornar();
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info');
        handleLogout();
      } else {
        toastAlerta('Erro ao salvar o Produto', 'erro');
      }
    }
  }

  function retornar() {
    navigate("/produtos");
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/login');
    }
  }, [token]);

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastre um novo produto' : 'Editar produto'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoProduto}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome do Produto</label>
          <input
            type="text"
            placeholder="Nome"
            name='nome'
            className="border-2 border-slate-700 rounded p-2"
            value={produto.nome || ''}
            onChange={atualizarEstado}
            required
            minLength={5}
            maxLength={100}

          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do Produto</label>
          <input
            type="text"
            placeholder="Descrição"
            name='descricao'
            className="border-2 border-slate-700 rounded p-2"
            value={produto.descricao || ''}
            onChange={atualizarEstado}
            required
            minLength={5}
            maxLength={600}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="preco">Preço</label>
          <input
            type="text"
            placeholder="Preço"
            name='preco'
            className="border-2 border-slate-700 rounded p-2"
            value={produto.preco || ''}
            onChange={atualizarEstado}
            required
            pattern="^\d{1,8}(\.\d{1,2})?$"
            title="O preço deve conter no máximo 8 dígitos inteiros e 2 decimais."
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="estoque">Estoque</label>
          <input
            type="number"
            placeholder="Estoque"
            name='estoque'
            className="border-2 border-slate-700 rounded p-2"
            value={produto.estoque || ''}
            onChange={atualizarEstado}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="categoria">Categoria</label>
          <select
            name="categoria"
            className="border-2 border-slate-700 rounded p-2"
            value={produto.categoria?.id || ''}
            onChange={atualizarEstado}
          >
            <option value="">Selecione uma categoria</option>
            {categorias.map(categoria => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>

        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  );
}

export default FormularioProduto;