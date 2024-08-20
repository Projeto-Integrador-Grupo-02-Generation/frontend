import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'



function NavBar() {

  let navigate = useNavigate()

  const { handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    alert('Usuário deslogado com sucesso')
    navigate('/login')
  }

  return (
    <>
      <div className='w-full bg-green-400 text-black flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <div className='flex justify-center font-bold'>Kelp</div>
          <div className='flex gap-4'>
            <Link to='/login' className='hover:underline'>Login</Link>
            <Link to='/home' className='hover:underline'>Home</Link>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar categoria</Link>
            <Link to="/produtos" className="hover:underline">Produtos</Link>
            <Link to='/sobre' className='hover:underline'>Sobre</Link>
            <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar