import { Link } from 'react-router-dom'
import produto from "../../../models/Produto";

interface CardProdutosProps {
    produto: produto;
}

function CardProdutos({ produto }: CardProdutosProps) {
    return (
        <div className='border border-gray-300 shadow-lg rounded-lg overflow-hidden flex flex-col'>
            <div className="flex items-center bg-indigo-500 text-white p-4">
                <img src={produto.usuario?.foto} className='h-16 w-16 rounded-full border-2 border-white' alt={`Foto de ${produto.usuario?.nome}`} />
                <h3 className='ml-4 text-xl font-semibold'>{produto.usuario?.nome}</h3>
            </div>
            <div className='p-6'>
                <h4 className='text-xl font-bold mb-2'>{produto.nome}</h4>
                <p className='text-gray-700 mb-4'>{produto.descricao}</p>
                <p className='text-gray-600 mb-2'>Categoria: <span className='font-semibold'>{produto.categoria?.descricao}</span></p>
                <p className='text-gray-900 font-bold'>Preço: R${produto.preco.toFixed(2)}</p>
            </div>
            <div className="flex justify-between bg-gray-100 border-t border-gray-300">
                <Link to={`/editarprodutos/${produto.id}`} className='flex-1 text-white bg-indigo-600 hover:bg-indigo-800 flex items-center justify-center py-3 font-semibold transition-colors'>
                    Editar
                </Link>
                <Link to={`/deletarProdutos/${produto.id}`} className='flex-1 text-white bg-red-600 hover:bg-red-800 flex items-center justify-center py-3 font-semibold transition-colors'>
                    Deletar
                </Link>
            </div>
        </div>
    );
}

export default CardProdutos;