import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <div className='flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white'>
      <header className='py-3 px-6 text-white font-bold text-2xl bg-gradient-to-r from-deep-sea to-shallow-sea'>
        {categoria.nome}
      </header>
      <p className='p-6 text-xl text-gray-800'>
        {categoria.descricao}
      </p>
      <div className="flex">
        <Link 
          to={`/editarCategoria/${categoria.id}`} 
          className='w-full text-white bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-600 hover:to-sky-800 flex items-center justify-center py-3 transition-all duration-300'
        >
          <FaEdit className="mr-2" />
          <button></button>
        </Link>
        <Link 
          to={`/deletarCategoria/${categoria.id}`} 
          className='w-full text-white bg-gradient-to-r from-red-400 to-red-600 hover:from-red-600 hover:to-red-800 flex items-center justify-center py-3 transition-all duration-300'
        >
          <FaTrashAlt className="mr-2" />
          <button></button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;