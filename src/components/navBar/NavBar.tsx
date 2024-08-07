import { Link, useNavigate } from 'react-router-dom'

function NavBar() {
    return (
        <>
          <div className='w-full bg-green-400 text-black flex justify-center py-4'>
            <div className="container flex justify-between text-lg">
              <div className='flex justify-center font-bold'>Kelp</div>
                <div className='flex gap-4'>
                  <Link to='/login' className='hover:underline'>Login</Link>
                  <Link to='/home' className='hover:underline'>Home</Link>
                  <Link to='/sobre' className='hover:underline'>Sobre</Link>
                  
                </div>
              </div>
            </div>
        </>
      )
    }

    export default NavBar