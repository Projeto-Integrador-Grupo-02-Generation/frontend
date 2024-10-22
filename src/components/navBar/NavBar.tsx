import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import Logo from '../../assets/logo_kelp.png'
import { toastAlerta } from '../../util/toastAlerta'

function NavBar() {
  let navigate = useNavigate()
  const { isAuthenticated, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    toastAlerta('Usuário deslogado com sucesso','sucesso')
    navigate('/login')
  }

  return (
    <>
      <div className='w-full bg-gradient-to-r from-deep-sea to-shallow-sea text-black flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <Link to='/home' className='flex items-center text-2xl font-bold uppercase'>
            <img src={Logo} alt="Kelp Logo" className='w-16' />
            <p className='font-nico-moji text-algae-green text-5xl mx-5'>Kelp</p>
          </Link>
          
          <div className='flex gap-4 items-center'>
            <Link to='/categorias' className='hover:text-sky-200 text-white no-underline transition-all duration-300'>
              Categorias
            </Link>
            <Link to="/produtos" className='hover:text-sky-200 text-white no-underline transition-all duration-300'>
              Produtos
            </Link>
            <Link to='/sobre' className='hover:text-sky-200 text-white no-underline transition-all duration-300'>
              Sobre
            </Link>
            {!isAuthenticated && (
              <Link to='/login' className='hover:text-sky-200 text-white no-underline transition-all duration-300'>
                Login
              </Link>
            )}
            {isAuthenticated && (
              <Link to='' onClick={logout} className='hover:text-sky-200 text-white no-underline transition-all duration-300'>
                Sair
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar