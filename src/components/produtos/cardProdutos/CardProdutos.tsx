import { Link } from 'react-router-dom'
import produto from "../../../models/Produto";


interface CardProdutosProps {
    produto: produto;
  }
  
  function CardProdutos({ produto }: CardProdutosProps) {
    return (
      <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
        <div>
          <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
            <img src={produto.usuario?.foto} className='h-12 rounded-full' alt={`Foto de ${produto.usuario?.nome}`} />
            <h3 className='text-lg font-bold text-center uppercase '>{produto.usuario?.nome}</h3>
          </div>
          <div className='p-4 '>
            <h4 className='text-lg font-semibold uppercase'>{produto.nome}</h4>
            <p>{produto.descricao}</p>
            <p>Categoria: {produto.categoria?.descricao}</p>
            <p>Preço: R${produto.preco.toFixed(2)}</p>
            <p>Data: {new Intl.DateTimeFormat(undefined, {
              dateStyle: 'full',
              timeStyle: 'medium',
            }).format(new Date(produto.data))}</p>
          </div>
        </div>
        <div className="flex">
          <Link to={`/editarProduto/${produto.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
            <button>Editar</button>
          </Link>
          <Link to={`/deletarProduto/${produto.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
            <button>Deletar</button>
          </Link>
        </div>
      </div>
    );
  }
  
  export default CardProdutos;