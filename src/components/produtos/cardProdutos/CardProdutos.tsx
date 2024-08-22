import { Link } from 'react-router-dom';
import produto from "../../../models/Produto";
import { FaEdit, FaTrash } from 'react-icons/fa';

interface CardProdutosProps {
    produto: produto;
}

function CardProdutos({ produto }: CardProdutosProps) {
    return (
        <div className='border border-slate-300 shadow-lg rounded-lg overflow-hidden flex flex-col'>
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
            <div className="flex justify-between bg-slate-200 border-t border-slate-300">
                <Link
                    to={`/editarprodutos/${produto.id}`}
                    className='flex-1 text-slate-100 bg-blue-500 hover:bg-blue-700 flex items-center justify-center py-2 px-4 font-semibold rounded-l-lg transition-colors'
                >
                    <FaEdit className='mr-2' />
                    
                </Link>
                <Link
                    to={`/deletarProdutos/${produto.id}`}
                    className='flex-1 text-slate-100 bg-red-500 hover:bg-red-700 flex items-center justify-center py-2 px-4 font-semibold rounded-r-lg transition-colors'
                >
                    <FaTrash className='mr-2' />
                    
                </Link>
            </div>
        </div>
    );
}

export default CardProdutos;