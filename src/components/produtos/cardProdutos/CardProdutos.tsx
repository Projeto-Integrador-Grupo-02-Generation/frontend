import { Link } from 'react-router-dom';
import produto from "../../../models/Produto";
import { FaEdit, FaTrash } from 'react-icons/fa';

interface CardProdutosProps {
    produto: produto;
}

function CardProdutos({ produto }: CardProdutosProps) {
    return (
        <div className='flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white'>
            <div className="bg-gradient-to-r from-deep-sea to-shallow-sea text-white p-4 flex items-center">
                <img src={produto.usuario?.foto} className='h-16 w-16 rounded-full border-2 border-white' alt={`Foto de ${produto.usuario?.nome}`} />
                <h3 className='ml-4 text-xl font-semibold'>{produto.usuario?.nome}</h3>
            </div>
            <div className='p-6 bg-slate-100'>
                <h4 className='text-xl font-bold mb-2'>{produto.nome}</h4>
                <p className='text-gray-700 mb-4'>{produto.descricao}</p>
                <p className='text-gray-600 mb-2'> <span className='font-semibold'>{produto.categoria?.descricao}</span></p>
                <p className='text-gray-900 font-bold'>Preço: R${produto.preco.toFixed(2)}</p>
            </div>
            <div className="flex">
                <Link
                    to={`/editarprodutos/${produto.id}`}
                    className='w-full text-white bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-600 hover:to-sky-800 flex items-center justify-center py-3 transition-all duration-300'
                >
                    <FaEdit className='mr-2' />
                    
                </Link>
                <Link
                    to={`/deletarProdutos/${produto.id}`}
                    className='w-full text-white bg-gradient-to-r from-red-400 to-red-600 hover:from-red-600 hover:to-red-800 flex items-center justify-center py-3 transition-all duration-300'
                >
                    <FaTrash className='mr-2' />
                    
                </Link>
            </div>
        </div>
    );
}

export default CardProdutos;