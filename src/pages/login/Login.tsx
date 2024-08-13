function Login() {
    return (
        <>
            <div className="flex justify-center items-center min-h-full min-w-full">
                <div className='flex items-center flex-col'>
                    <h2 className='text-3xl font-bold p-16'>Olá! Insira usuário e senha para entrar.</h2>
                    <form className='flex flex-col w-52'>
                        <label className='py-1' htmlFor="username">Usuário</label>
                        <input className='my-1 rounded border border-black text-center' 
                        type="text" 
                        id="username" 
                        name="username" 
                        placeholder="exemplo@exemplo.com.br"></input>
                        <label className='py-1' htmlFor="password">Senha</label>
                        <input className='my-1 rounded border border-black' type="text" id="password" name="password"></input>
                        <button
                            className='self-center rounded bg-green-400 text-white w-32 my-5 py-2'>
                            Entrar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;